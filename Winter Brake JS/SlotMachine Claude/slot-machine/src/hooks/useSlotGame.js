// ─────────────────────────────────────────────────────────────
// SLOT MACHINE — useSlotGame hook
// Manages all game state and bridges React ↔ Phaser
// ─────────────────────────────────────────────────────────────
import { useState, useRef, useCallback, useEffect } from 'react';
import { BET_OPTIONS, REEL_COUNT, ROW_COUNT, randomSymbol } from '../game/constants';
import { evaluateWins, classifyWin } from '../game/evaluator';

const INITIAL_BALANCE = 1000;

export function useSlotGame() {
  // ── Core state ────────────────────────────────────────────
  const [balance,   setBalance]   = useState(INITIAL_BALANCE);
  const [betIdx,    setBetIdx]    = useState(3);           // default: 10
  const [lastWin,   setLastWin]   = useState(0);
  const [spinning,  setSpinning]  = useState(false);
  const [message,   setMessage]   = useState('Press SPIN or hit Spacebar!');
  const [winResult, setWinResult] = useState(null);        // { label, tier, amount }
  const [winKeys,   setWinKeys]   = useState([]);          // symbol keys that won
  const [history,   setHistory]   = useState([]);          // spin log
  const [stats,     setStats]     = useState({
    totalSpins: 0, winSpins: 0,
    totalBet: 0,   totalWon: 0, biggestWin: 0,
  });

  // ── Refs ──────────────────────────────────────────────────
  const sceneRef     = useRef(null);   // Phaser SlotScene
  const autoLeftRef  = useRef(0);      // remaining auto-spins
  const balanceRef   = useRef(INITIAL_BALANCE); // sync for closures

  // Keep balanceRef in sync
  useEffect(() => { balanceRef.current = balance; }, [balance]);

  const bet = BET_OPTIONS[betIdx];

  // ── Single spin ───────────────────────────────────────────
  const spin = useCallback(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    if (spinning) return;

    const currentBet = BET_OPTIONS[betIdx];
    if (balanceRef.current < currentBet) {
      setMessage('Not enough coins! Grab free coins below.');
      autoLeftRef.current = 0;
      return;
    }

    setSpinning(true);
    setWinResult(null);
    setWinKeys([]);
    setLastWin(0);
    setMessage('Spinning…');
    setBalance(b => b - currentBet);

    // Generate result grid: grid[reel][row]
    const grid = Array.from({ length: REEL_COUNT }, () =>
      Array.from({ length: ROW_COUNT }, randomSymbol)
    );

    // Kick off Phaser animation
    scene.startSpin(grid);

    // Called by Phaser once all reels stop
    scene.onSpinEnd = () => {
      const { total, wins, cells } = evaluateWins(grid, currentBet);
      const classification = classifyWin(total, currentBet);
      const winningKeys = [...new Set(wins.flatMap(w => [w.symbol.key]))];
      const midRow = grid.map(col => col[1].emoji).join(' ');

      setBalance(b => b + total);
      setLastWin(total);
      setWinKeys(winningKeys);
      setSpinning(false);

      if (total > 0) {
        setWinResult({ ...classification, amount: total });
        setMessage(`${classification.label} +${total} coins!`);
        if (cells.length) scene.flashWinCells(cells);
      } else {
        setWinResult(null);
        setMessage(balanceRef.current + total > 0 ? 'No win — try again!' : 'Out of coins!');
      }

      // Append to history
      const bestWin = wins.length > 0 ? wins.reduce((a, b) => a.amount > b.amount ? a : b) : null;
      setHistory(prev => [{
        id:       Date.now(),
        symbols:  midRow,
        win:      total,
        bet:      currentBet,
        label:    bestWin?.paylineLabel ?? null,
        tier:     classification?.tier ?? 'loss',
      }, ...prev].slice(0, 60));

      setStats(prev => ({
        totalSpins: prev.totalSpins + 1,
        winSpins:   prev.winSpins + (total > 0 ? 1 : 0),
        totalBet:   prev.totalBet + currentBet,
        totalWon:   prev.totalWon + total,
        biggestWin: Math.max(prev.biggestWin, total),
      }));

      // Chain auto-spin
      if (autoLeftRef.current > 1) {
        autoLeftRef.current--;
        const delay = scene.speed === 'turbo' ? 250 : scene.speed === 'fast' ? 500 : 900;
        setTimeout(() => spin(), delay);
      } else {
        autoLeftRef.current = 0;
      }
    };
  }, [spinning, betIdx]);

  // ── Auto-spin ─────────────────────────────────────────────
  const startAutoSpin = useCallback((count) => {
    autoLeftRef.current = count;
    spin();
  }, [spin]);

  const stopAutoSpin = useCallback(() => {
    autoLeftRef.current = 0;
  }, []);

  // ── Bet controls ──────────────────────────────────────────
  const increaseBet = useCallback(() => {
    if (!spinning) setBetIdx(i => Math.min(i + 1, BET_OPTIONS.length - 1));
  }, [spinning]);

  const decreaseBet = useCallback(() => {
    if (!spinning) setBetIdx(i => Math.max(0, i - 1));
  }, [spinning]);

  // ── Free coins ────────────────────────────────────────────
  const addFreeCoins = useCallback((amount = 500) => {
    setBalance(b => b + amount);
    setMessage(`🎁 +${amount} free coins added!`);
  }, []);

  // ── Keyboard shortcut ─────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (e.code === 'Space' && !spinning) {
        e.preventDefault();
        spin();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [spin, spinning]);

  return {
    // State
    balance, bet, betIdx, lastWin, spinning,
    message, winResult, winKeys, history, stats,
    autoLeft: autoLeftRef.current,
    // Refs
    sceneRef,
    // Actions
    spin, startAutoSpin, stopAutoSpin,
    increaseBet, decreaseBet, addFreeCoins,
  };
}
