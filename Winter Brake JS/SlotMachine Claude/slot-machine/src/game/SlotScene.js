// ─────────────────────────────────────────────────────────────
// SLOT MACHINE — PHASER SCENE
// ─────────────────────────────────────────────────────────────
import Phaser from 'phaser';
import {
  REEL_COUNT, ROW_COUNT, REEL_WIDTH, REEL_GAP,
  CANVAS_W, CANVAS_H, REEL_TOP, REEL_AREA_H,
  randomSymbol, generateStrip, SYMBOLS,
} from './constants';

const SPEED_MULT = { normal: 1, fast: 0.55, turbo: 0.25 };

export class SlotScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SlotScene' });
    // Callbacks injected by React
    this.onSpinEnd = null;
    this.speed = 'normal';
  }

  // ── Setup ─────────────────────────────────────────────────
  create() {
    this.slotH = REEL_AREA_H / ROW_COUNT;
    this._spinning = false;
    this._reelStates = [];
    this._spinResults = [];

    this._drawBackground();
    this._initReelTexts();
    this._drawFrame();

    this.payG = this.add.graphics().setDepth(8);
    this._populateStatic();
  }

  _drawBackground() {
    const g = this.add.graphics();
    g.fillGradientStyle(0x04000c, 0x04000c, 0x080018, 0x080018, 1);
    g.fillRect(0, 0, CANVAS_W, CANVAS_H);

    const grid = this.add.graphics().setAlpha(0.15);
    grid.lineStyle(1, 0x2a0060);
    for (let x = 0; x < CANVAS_W; x += 36) grid.lineBetween(x, 0, x, CANVAS_H);
    for (let y = 0; y < CANVAS_H; y += 36) grid.lineBetween(0, y, CANVAS_W, y);

    // Ambient glow blobs
    const glow = this.add.graphics();
    glow.fillStyle(0x6600cc, 0.06); glow.fillCircle(80,  180, 160);
    glow.fillStyle(0xcc3300, 0.06); glow.fillCircle(520, 180, 160);
  }

  _reelStartX() {
    const total = REEL_COUNT * REEL_WIDTH + (REEL_COUNT - 1) * REEL_GAP;
    return (CANVAS_W - total) / 2;
  }

  _initReelTexts() {
    const startX = this._reelStartX();

    // Clip mask
    const maskG = this.make.graphics({ add: false });
    maskG.fillStyle(0xffffff);
    maskG.fillRect(startX - 4, REEL_TOP, REEL_COUNT * REEL_WIDTH + (REEL_COUNT - 1) * REEL_GAP + 8, REEL_AREA_H);
    const mask = maskG.createGeometryMask();

    this.reelTexts = [];
    for (let r = 0; r < REEL_COUNT; r++) {
      this.reelTexts[r] = [];
      for (let row = 0; row < ROW_COUNT + 2; row++) {
        const t = this.add.text(
          startX + r * (REEL_WIDTH + REEL_GAP) + REEL_WIDTH / 2,
          0,
          '',
          { fontSize: '52px', align: 'center' }
        )
          .setOrigin(0.5, 0.5)
          .setDepth(3)
          .setMask(mask);
        this.reelTexts[r].push(t);
      }
    }
  }

  _drawFrame() {
    const g = this.add.graphics().setDepth(5);
    const sx = this._reelStartX() - 6;
    const totalW = REEL_COUNT * REEL_WIDTH + (REEL_COUNT - 1) * REEL_GAP;
    const rw = totalW + 12, rh = REEL_AREA_H + 12, ry = REEL_TOP - 6;

    // Outer glows
    g.lineStyle(1, 0xff7b00, 0.3);
    g.strokeRoundedRect(sx - 4, ry - 4, rw + 8, rh + 8, 15);
    g.lineStyle(2, 0xf5c842, 0.75);
    g.strokeRoundedRect(sx, ry, rw, rh, 10);

    // Corner gems
    [[sx, ry], [sx + rw, ry], [sx, ry + rh], [sx + rw, ry + rh]].forEach(([cx, cy]) => {
      g.fillStyle(0xf5c842, 1);  g.fillCircle(cx, cy, 6);
      g.fillStyle(0xffffff, 0.4); g.fillCircle(cx - 1, cy - 1, 2);
    });

    // Reel separators
    g.lineStyle(1, 0x220044, 0.9);
    for (let r = 1; r < REEL_COUNT; r++) {
      const lx = sx + 6 + r * (REEL_WIDTH + REEL_GAP) - REEL_GAP / 2;
      g.lineBetween(lx, ry, lx, ry + rh);
    }

    // Center payline guide
    const midY = REEL_TOP + this.slotH * 1.5;
    g.lineStyle(1, 0xf5c842, 0.12);
    g.lineBetween(sx, midY, sx + rw, midY);
  }

  _populateStatic() {
    const startX = this._reelStartX();
    this._strips = Array.from({ length: REEL_COUNT }, () => generateStrip());
    for (let r = 0; r < REEL_COUNT; r++) {
      for (let row = 0; row < ROW_COUNT; row++) {
        const t = this.reelTexts[r][row];
        t.setText(this._strips[r][row].emoji);
        t.x = startX + r * (REEL_WIDTH + REEL_GAP) + REEL_WIDTH / 2;
        t.y = REEL_TOP + row * this.slotH + this.slotH / 2;
      }
      for (let row = ROW_COUNT; row < this.reelTexts[r].length; row++) {
        this.reelTexts[r][row].setText('');
      }
    }
  }

  // ── Spin API (called by React) ────────────────────────────
  startSpin(results) {
    if (this._spinning) return;
    this._spinning = true;
    this.payG.clear();
    this._spinResults = results;

    const sm = SPEED_MULT[this.speed] ?? 1;

    this._reelStates = results.map((_, r) => {
      // Build a fake strip that ends with the result symbols
      const fake = generateStrip(22);
      for (let row = 0; row < ROW_COUNT; row++) {
        fake[fake.length - ROW_COUNT + row] = results[r][row];
      }
      return {
        fake,
        idx: 0,
        offset: 0,
        speed: 0,
        startT: this.time.now + r * 140 * sm,
        stopT:  this.time.now + (1400 + r * 280) * sm,
        phase: 'wait',
        done: false,
      };
    });
  }

  // ── Update loop ───────────────────────────────────────────
  update(time) {
    if (!this._spinning) return;

    const startX = this._reelStartX();
    const maxSpd = this.slotH * 0.42;
    let allDone = true;

    for (let r = 0; r < REEL_COUNT; r++) {
      const st = this._reelStates[r];
      if (!st || st.done) continue;
      allDone = false;

      if (time < st.startT) continue;
      if (st.phase === 'wait') st.phase = 'spin';

      if (st.phase === 'spin') {
        st.speed = Math.min(st.speed + this.slotH * 10 * (1 / 60), maxSpd);
        if (st.stopT - time < 500) st.phase = 'stop';
      }
      if (st.phase === 'stop') {
        st.speed = Math.max(st.speed - this.slotH * 8 * (1 / 60), 0);
        if (st.speed === 0) { this._snapReel(r); st.done = true; continue; }
      }

      st.offset += st.speed;
      while (st.offset >= this.slotH) { st.offset -= this.slotH; st.idx++; }

      const cx = startX + r * (REEL_WIDTH + REEL_GAP) + REEL_WIDTH / 2;
      for (let row = 0; row < this.reelTexts[r].length; row++) {
        const fi = Math.min(st.idx + row, st.fake.length - 1);
        const sym = st.fake[fi] ?? SYMBOLS[4];
        const t = this.reelTexts[r][row];
        t.setText(sym.emoji);
        t.x = cx;
        t.y = REEL_TOP - this.slotH + (row - 1) * this.slotH + st.offset + this.slotH / 2;
      }
    }

    if (allDone && this._spinning) {
      this._spinning = false;
      if (this.onSpinEnd) this.onSpinEnd();
    }
  }

  _snapReel(r) {
    const startX = this._reelStartX();
    const cx = startX + r * (REEL_WIDTH + REEL_GAP) + REEL_WIDTH / 2;
    const res = this._spinResults[r];
    for (let row = 0; row < ROW_COUNT; row++) {
      const t = this.reelTexts[r][row];
      t.setText(res[row].emoji);
      t.x = cx;
      t.y = REEL_TOP + row * this.slotH + this.slotH / 2;
    }
    for (let row = ROW_COUNT; row < this.reelTexts[r].length; row++) {
      this.reelTexts[r][row].setText('');
    }
  }

  // ── Visual effects ────────────────────────────────────────
  flashWinCells(cells) {
    if (!cells.length) return;
    const startX = this._reelStartX();
    let tick = 0;
    const iv = setInterval(() => {
      this.payG.clear();
      if (tick % 2 === 0) {
        cells.forEach(({ reel, row }) => {
          const x = startX + reel * (REEL_WIDTH + REEL_GAP);
          const y = REEL_TOP + row * this.slotH;
          this.payG.fillStyle(0xf5c842, 0.2);
          this.payG.fillRect(x, y, REEL_WIDTH, this.slotH);
          this.payG.lineStyle(2, 0xf5c842, 0.95);
          this.payG.strokeRect(x, y, REEL_WIDTH, this.slotH);
        });
      }
      if (++tick > 10) clearInterval(iv);
    }, 200);
  }

  clearHighlights() {
    this.payG.clear();
  }
}
