// ─────────────────────────────────────────────────────────────
// App.jsx — Root component
// Composes: PaytablePanel + PhaserCanvas + SettingsPanel
// ─────────────────────────────────────────────────────────────
import React, { useState, useEffect } from 'react';
import { PaytablePanel }  from './components/PaytablePanel';
import { SettingsPanel }  from './components/SettingsPanel';
import { ControlsBar }    from './components/ControlsBar';
import { PhaserCanvas }   from './components/PhaserCanvas';
import { WinBanner }      from './components/WinBanner';
import { useSlotGame }    from './hooks/useSlotGame';
import { THEMES, BET_OPTIONS } from './game/constants';

// ── Default settings ──────────────────────────────────────────
const DEFAULT_SETTINGS = {
  sound:      true,
  animations: true,
  speed:      'normal',
  autoSpin:   0,
  theme:      'classic',
};

// ── App ───────────────────────────────────────────────────────
export default function App() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  const {
    balance, bet, betIdx, lastWin, spinning,
    message, winResult, winKeys, history, stats,
    autoLeft, sceneRef,
    spin, startAutoSpin, stopAutoSpin,
    increaseBet, decreaseBet, addFreeCoins,
  } = useSlotGame();

  // Sync speed to Phaser scene
  useEffect(() => {
    if (sceneRef.current) sceneRef.current.speed = settings.speed;
  }, [settings.speed, sceneRef]);

  // Theme-derived values
  const theme = THEMES[settings.theme] ?? THEMES.classic;
  const accentColor = theme.accent;

  // Handle settings changes
  const handleSetting = (key, value) => {
    if (key === 'freeCoins') { addFreeCoins(value); return; }
    if (key === 'autoSpin') {
      setSettings(prev => ({ ...prev, autoSpin: value }));
      if (value > 0) startAutoSpin(value);
      else stopAutoSpin();
      return;
    }
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  // Fake betIdx setter wired to decrease (used by ControlsBar pip indicators)
  const handleBetPip = (idx) => { /* handled via stepper */ };

  return (
    <>
      {/* Global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&family=Orbitron:wght@400;700;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { width: 100%; height: 100%; overflow: hidden; }
        body {
          background: ${theme.bg};
          font-family: 'Rajdhani', sans-serif;
          color: #e8dfc8;
          display: flex; align-items: center; justify-content: center;
          min-height: 100vh;
          transition: background 0.5s ease;
        }
        body::before {
          content: '';
          position: fixed; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 60% 80% at 15% 50%, ${accentColor}18 0%, transparent 65%),
            radial-gradient(ellipse 60% 80% at 85% 50%, ${theme.highlight}14 0%, transparent 65%),
            radial-gradient(ellipse 80% 40% at 50% 0%, ${accentColor}0d 0%, transparent 55%);
          transition: background 0.5s ease;
        }
        button { font-family: 'Rajdhani', sans-serif; }
        select { font-family: 'Rajdhani', sans-serif; }
        option { background: #0f0020; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${accentColor}44; border-radius: 2px; }
      `}</style>

      {/* Win overlay */}
      <WinBanner result={winResult} animationsEnabled={settings.animations} />

      {/* Layout */}
      <div style={{
        display: 'flex', gap: 12, alignItems: 'flex-start',
        width: '100%', maxWidth: 1160,
        padding: 12, position: 'relative', zIndex: 1,
      }}>

        {/* LEFT — Paytable */}
        <PaytablePanel winningKeys={winKeys} accentColor={accentColor} />

        {/* CENTER — Machine */}
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 10, minWidth: 0,
        }}>
          {/* Title */}
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 36, letterSpacing: 10,
              background: `linear-gradient(90deg, ${theme.highlight}, ${accentColor}, #fff8e0, ${accentColor}, ${theme.highlight})`,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s linear infinite',
              filter: `drop-shadow(0 0 12px ${accentColor}66)`,
            }}>
              ⭐ Lucky Stars ⭐
            </h1>
            <p style={{
              fontSize: 9, letterSpacing: 4, textTransform: 'uppercase',
              color: 'rgba(232,223,200,0.3)', marginTop: -4,
            }}>
              Social Casino · Virtual Coins Only · No Real Money
            </p>
            <style>{`@keyframes shimmer { to { background-position: 200% center; } }`}</style>
          </div>

          {/* Phaser canvas */}
          <PhaserCanvas sceneRef={sceneRef} accentColor={accentColor} />

          {/* Message ticker */}
          <div style={{
            fontSize: 10, letterSpacing: 2, textTransform: 'uppercase',
            color: `${accentColor}88`, height: 16, textAlign: 'center',
            transition: 'color 0.3s',
          }}>
            {message}
          </div>

          {/* Controls */}
          <ControlsBar
            balance={balance}
            bet={bet}
            betIdx={betIdx}
            lastWin={lastWin}
            spinning={spinning}
            autoLeft={autoLeft}
            accentColor={accentColor}
            onSpin={spin}
            onIncreaseBet={increaseBet}
            onDecreaseBet={decreaseBet}
          />
        </div>

        {/* RIGHT — Settings */}
        <SettingsPanel
          settings={settings}
          onChangeSetting={handleSetting}
          spinning={spinning}
        />
      </div>
    </>
  );
}
