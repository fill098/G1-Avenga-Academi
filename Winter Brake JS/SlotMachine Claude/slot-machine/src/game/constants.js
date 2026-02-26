// ─────────────────────────────────────────────────────────────
// SLOT MACHINE — GAME CONSTANTS
// ─────────────────────────────────────────────────────────────

export const REEL_COUNT = 5;
export const ROW_COUNT = 3;
export const REEL_WIDTH = 108;
export const REEL_GAP = 5;
export const CANVAS_W = 600;
export const CANVAS_H = 370;
export const REEL_TOP = 10;
export const REEL_AREA_H = CANVAS_H - REEL_TOP * 2;

export const BET_OPTIONS = [1, 2, 5, 10, 25, 50, 100];

export const SYMBOLS = [
  { key: 'seven',   emoji: '7️⃣', name: 'Lucky 7',  weight: 2,  payout: { 3: 50,  4: 100, 5: 500 } },
  { key: 'bar',     emoji: '🎰', name: 'Jackpot',  weight: 4,  payout: { 3: 25,  4: 50,  5: 200 } },
  { key: 'diamond', emoji: '💎', name: 'Diamond',  weight: 6,  payout: { 3: 15,  4: 30,  5: 100 } },
  { key: 'star',    emoji: '⭐', name: 'Star',     weight: 10, payout: { 3: 10,  4: 20,  5: 50  } },
  { key: 'bell',    emoji: '🔔', name: 'Bell',     weight: 14, payout: { 3: 5,   4: 10,  5: 25  } },
  { key: 'cherry',  emoji: '🍒', name: 'Cherry',   weight: 18, payout: { 3: 3,   4: 6,   5: 15  } },
  { key: 'lemon',   emoji: '🍋', name: 'Lemon',    weight: 22, payout: { 3: 2,   4: 4,   5: 10  } },
  { key: 'grape',   emoji: '🍇', name: 'Grape',    weight: 24, payout: { 3: 1,   4: 2,   5: 5   } },
];

export const PAYLINES = [
  { id: 0, rows: [1, 1, 1, 1, 1], label: 'Middle Row',   color: '#f5c842' },
  { id: 1, rows: [0, 0, 0, 0, 0], label: 'Top Row',      color: '#00d4ff' },
  { id: 2, rows: [2, 2, 2, 2, 2], label: 'Bottom Row',   color: '#00e87a' },
  { id: 3, rows: [0, 1, 2, 1, 0], label: 'V-Shape',      color: '#ff7b00' },
  { id: 4, rows: [2, 1, 0, 1, 2], label: 'Inverted V',   color: '#e8003d' },
];

export const THEMES = {
  classic: {
    name: 'Classic Vegas',
    bg: '#07000f',
    panel: 'rgba(15,5,30,0.92)',
    accent: '#f5c842',
    accentDim: '#b8922a',
    highlight: '#ff7b00',
    border: 'rgba(245,200,66,0.25)',
  },
  ocean: {
    name: 'Deep Ocean',
    bg: '#000f1a',
    panel: 'rgba(0,15,30,0.92)',
    accent: '#00d4ff',
    accentDim: '#007a99',
    highlight: '#00e87a',
    border: 'rgba(0,212,255,0.25)',
  },
  crimson: {
    name: 'Crimson Night',
    bg: '#0f0005',
    panel: 'rgba(30,0,10,0.92)',
    accent: '#ff3d6e',
    accentDim: '#99002a',
    highlight: '#ff7b00',
    border: 'rgba(255,61,110,0.25)',
  },
};

// Build weighted symbol pool
export const SYMBOL_POOL = [];
SYMBOLS.forEach(s => {
  for (let i = 0; i < s.weight; i++) SYMBOL_POOL.push(s);
});

export const randomSymbol = () =>
  SYMBOL_POOL[Math.floor(Math.random() * SYMBOL_POOL.length)];

export const generateStrip = (n = ROW_COUNT + 8) =>
  Array.from({ length: n }, randomSymbol);
