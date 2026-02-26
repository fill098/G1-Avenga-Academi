// ─────────────────────────────────────────────────────────────
// COMPONENT: PaytablePanel
// Shows all symbols, their payouts, and highlights winners
// ─────────────────────────────────────────────────────────────
import React from 'react';
import { SYMBOLS, PAYLINES } from '../game/constants';

// ── Sub-components ────────────────────────────────────────────

function SymbolRow({ symbol, isWinning, accentColor }) {
  return (
    <div
      className="symbol-row"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '6px 8px',
        marginBottom: 3,
        borderRadius: 7,
        border: `1px solid ${isWinning ? accentColor : 'transparent'}`,
        background: isWinning
          ? `${accentColor}18`
          : 'rgba(255,255,255,0.025)',
        transition: 'all 0.25s ease',
        animation: isWinning ? 'payPulse 0.7s ease infinite alternate' : 'none',
        cursor: 'default',
      }}
    >
      <span style={{ fontSize: 18, width: 24, textAlign: 'center' }}>
        {symbol.emoji}
      </span>
      <span style={{
        flex: 1, marginLeft: 7, fontSize: 11, fontWeight: 600,
        color: isWinning ? accentColor : 'rgba(232,223,200,0.5)',
        transition: 'color 0.25s',
      }}>
        {symbol.name}
      </span>
      <div style={{ display: 'flex', gap: 3 }}>
        {[3, 4, 5].map(n => (
          <span
            key={n}
            title={`${n} in a row = ×${symbol.payout[n]}`}
            style={{
              fontSize: 9, fontWeight: 700,
              fontFamily: "'Orbitron', monospace",
              padding: '2px 5px', borderRadius: 4,
              background: n === 5
                ? 'rgba(232,0,61,0.15)'
                : 'rgba(245,200,66,0.08)',
              color: n === 5 ? '#ff5599' : accentColor,
              border: `1px solid ${n === 5 ? 'rgba(232,0,61,0.3)' : 'rgba(245,200,66,0.2)'}`,
            }}
          >
            ×{symbol.payout[n]}
          </span>
        ))}
      </div>
    </div>
  );
}

function PaylineItem({ payline }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 7,
      padding: '3px 0', fontSize: 11,
      color: 'rgba(232,223,200,0.45)',
    }}>
      <span style={{
        width: 8, height: 8, borderRadius: '50%',
        background: payline.color, flexShrink: 0, display: 'inline-block',
      }} />
      {payline.label}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────

/**
 * PaytablePanel
 * @param {string[]} winningKeys   - symbol keys that won last spin
 * @param {string}   accentColor   - from current theme
 */
export function PaytablePanel({ winningKeys = [], accentColor = '#f5c842' }) {
  return (
    <aside style={panelStyle}>
      <style>{`
        @keyframes payPulse {
          from { box-shadow: 0 0 0px transparent; }
          to   { box-shadow: 0 0 8px ${accentColor}66; }
        }
      `}</style>

      {/* Header */}
      <div style={headerStyle}>
        <span style={{ fontSize: 14 }}>📋</span>
        <h3 style={headerTitleStyle}>Paytable</h3>
        <span style={headerHintStyle}>3 / 4 / 5 in a row</span>
      </div>

      {/* Symbol rows */}
      <div style={{ padding: '10px 12px 4px' }}>
        {SYMBOLS.map(sym => (
          <SymbolRow
            key={sym.key}
            symbol={sym}
            isWinning={winningKeys.includes(sym.key)}
            accentColor={accentColor}
          />
        ))}
      </div>

      {/* Paylines legend */}
      <div style={{
        margin: '0 12px 12px',
        padding: '10px 8px 6px',
        borderTop: '1px solid rgba(245,200,66,0.15)',
      }}>
        <p style={{
          fontSize: 9, letterSpacing: 2, textTransform: 'uppercase',
          color: 'rgba(232,223,200,0.35)', marginBottom: 6,
        }}>
          Active Paylines
        </p>
        {PAYLINES.map(pl => (
          <PaylineItem key={pl.id} payline={pl} />
        ))}
      </div>
    </aside>
  );
}

// ── Styles ────────────────────────────────────────────────────
const panelStyle = {
  width: 218,
  background: 'rgba(15,5,30,0.92)',
  border: '1px solid rgba(245,200,66,0.22)',
  borderRadius: 14,
  backdropFilter: 'blur(20px)',
  overflow: 'hidden',
  boxShadow: '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
  flexShrink: 0,
};

const headerStyle = {
  display: 'flex', alignItems: 'center', gap: 8,
  padding: '12px 16px 10px',
  borderBottom: '1px solid rgba(245,200,66,0.18)',
};

const headerTitleStyle = {
  fontFamily: "'Orbitron', monospace",
  fontSize: 10, fontWeight: 700,
  letterSpacing: 3, textTransform: 'uppercase',
  color: '#f5c842', flex: 1, margin: 0,
};

const headerHintStyle = {
  fontSize: 9, color: 'rgba(232,223,200,0.35)', letterSpacing: 1,
};
