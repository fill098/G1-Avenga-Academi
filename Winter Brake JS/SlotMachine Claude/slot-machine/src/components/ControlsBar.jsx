// ─────────────────────────────────────────────────────────────
// COMPONENT: ControlsBar
// Bottom strip: balance, bet stepper, spin button, last win
// ─────────────────────────────────────────────────────────────
import React from 'react';
import { BET_OPTIONS } from '../game/constants';

function StatBox({ label, value, color = '#fff', size = 20 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
      <div style={{
        fontSize: 8, letterSpacing: 3, textTransform: 'uppercase',
        color: 'rgba(232,223,200,0.4)',
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: size, fontWeight: 900, color,
        textShadow: `0 0 10px ${color}66`,
        lineHeight: 1,
      }}>
        {value}
      </div>
    </div>
  );
}

function StepButton({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 32, height: 32, borderRadius: 8, border: 'none',
        background: disabled ? 'rgba(255,255,255,0.04)' : 'rgba(245,200,66,0.1)',
        color: disabled ? 'rgba(245,200,66,0.2)' : '#f5c842',
        border: `1px solid ${disabled ? 'rgba(245,200,66,0.08)' : 'rgba(245,200,66,0.3)'}`,
        fontSize: 20, cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.15s', lineHeight: 1,
        fontFamily: 'monospace',
      }}
    >
      {children}
    </button>
  );
}

/**
 * ControlsBar
 */
export function ControlsBar({
  balance, bet, betIdx, lastWin, spinning,
  onSpin, onIncreaseBet, onDecreaseBet,
  autoLeft, accentColor = '#f5c842',
}) {
  const canSpin = !spinning && balance >= bet;

  return (
    <div style={{
      width: '100%',
      background: 'rgba(15,5,30,0.92)',
      border: '1px solid rgba(245,200,66,0.22)',
      borderRadius: 14,
      padding: '14px 22px',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', gap: 14,
      boxShadow: '0 4px 30px rgba(0,0,0,0.5)',
    }}>

      {/* Balance */}
      <StatBox
        label="💰 Balance"
        value={`🪙 ${balance.toLocaleString()}`}
        color={accentColor}
        size={16}
      />

      {/* Bet stepper */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(232,223,200,0.4)' }}>
          Bet Amount
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <StepButton onClick={onDecreaseBet} disabled={spinning || betIdx === 0}>−</StepButton>
          <div style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: 22, fontWeight: 900, color: '#fff',
            minWidth: 48, textAlign: 'center',
          }}>
            {bet}
          </div>
          <StepButton onClick={onIncreaseBet} disabled={spinning || betIdx === BET_OPTIONS.length - 1}>+</StepButton>
        </div>
        {/* Bet quick-select */}
        <div style={{ display: 'flex', gap: 3, marginTop: 2 }}>
          {BET_OPTIONS.map((b, i) => (
            <button
              key={b}
              disabled={spinning}
              onClick={() => !spinning && onDecreaseBet(i)}  // handled via betIdx
              style={{
                width: 22, height: 16, borderRadius: 3, border: 'none',
                background: i === betIdx ? `${accentColor}33` : 'rgba(255,255,255,0.04)',
                cursor: 'pointer', padding: 0,
              }}
              title={`Bet ${b}`}
            />
          ))}
        </div>
      </div>

      {/* SPIN button */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
        <button
          onClick={onSpin}
          disabled={!canSpin}
          style={{
            padding: '14px 44px',
            border: 'none', borderRadius: 50,
            cursor: canSpin ? 'pointer' : 'not-allowed',
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 28, letterSpacing: 4, color: '#12000a',
            background: spinning
              ? 'linear-gradient(135deg, #888 0%, #555 100%)'
              : 'linear-gradient(135deg, #ffd200 0%, #ff7b00 50%, #e8003d 100%)',
            boxShadow: canSpin
              ? '0 0 28px rgba(255,140,0,0.65), 0 4px 20px rgba(0,0,0,0.5)'
              : 'none',
            opacity: canSpin ? 1 : 0.55,
            transition: 'all 0.15s',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <span style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
            borderRadius: 50,
          }} />
          {spinning ? 'SPINNING…' : 'SPIN'}
        </button>

        {autoLeft > 0 && (
          <div style={{
            fontSize: 10, letterSpacing: 2,
            color: 'rgba(232,223,200,0.45)',
            fontFamily: "'Orbitron', monospace",
          }}>
            AUTO: {autoLeft} LEFT
          </div>
        )}
        <div style={{ fontSize: 9, color: 'rgba(232,223,200,0.25)', letterSpacing: 1 }}>
          SPACEBAR to spin
        </div>
      </div>

      {/* Last win */}
      <StatBox
        label="🏆 Last Win"
        value={lastWin > 0 ? `+${lastWin}` : '—'}
        color={lastWin > 0 ? '#00e87a' : 'rgba(232,223,200,0.3)'}
        size={16}
      />

      {/* Net P&L placeholder */}
      <StatBox
        label="📊 Spins"
        value="∞"
        color="rgba(0,212,255,0.7)"
        size={16}
      />
    </div>
  );
}
