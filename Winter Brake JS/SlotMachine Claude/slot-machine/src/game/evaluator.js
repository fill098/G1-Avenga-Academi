// ─────────────────────────────────────────────────────────────
// SLOT MACHINE — WIN EVALUATION ENGINE
// ─────────────────────────────────────────────────────────────
import { SYMBOLS, PAYLINES } from './constants';

/**
 * Evaluate the 5×3 grid against all paylines.
 *
 * @param {Array<Array<{key, emoji}>>} grid  - grid[col][row]
 * @param {number} bet                        - coins wagered this spin
 * @returns {{ total: number, wins: WinResult[], cells: Cell[] }}
 */
export function evaluateWins(grid, bet) {
  const wins = [];
  const cellSet = new Set();

  for (const payline of PAYLINES) {
    const lineSymbols = payline.rows.map((row, col) => grid[col][row]);
    const firstKey = lineSymbols[0].key;

    let count = 1;
    for (let i = 1; i < lineSymbols.length; i++) {
      if (lineSymbols[i].key === firstKey) count++;
      else break;
    }

    if (count >= 3) {
      const symDef = SYMBOLS.find(s => s.key === firstKey);
      const multiplier = symDef?.payout[count];

      if (multiplier) {
        const amount = multiplier * bet;
        const cells = [];

        for (let i = 0; i < count; i++) {
          const cell = { reel: i, row: payline.rows[i] };
          cells.push(cell);
          cellSet.add(`${cell.reel}-${cell.row}`);
        }

        wins.push({
          paylineId: payline.id,
          paylineLabel: payline.label,
          paylineColor: payline.color,
          symbol: symDef,
          count,
          multiplier,
          amount,
          cells,
        });
      }
    }
  }

  const total = wins.reduce((sum, w) => sum + w.amount, 0);
  const allCells = [...cellSet].map(key => {
    const [reel, row] = key.split('-').map(Number);
    return { reel, row };
  });

  return { total, wins, cells: allCells };
}

/**
 * Classify a win by its multiplier ratio.
 */
export function classifyWin(amount, bet) {
  if (!amount || !bet) return null;
  const ratio = amount / bet;
  if (ratio >= 100) return { label: '🔥 MEGA WIN!',  tier: 'mega'  };
  if (ratio >= 25)  return { label: '🎉 BIG WIN!',   tier: 'big'   };
  if (ratio >= 8)   return { label: '✨ GREAT WIN!', tier: 'great' };
  return             { label: '🎊 WIN!',             tier: 'small' };
}
