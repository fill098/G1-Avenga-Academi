// ─────────────────────────────────────────────────────────────
// COMPONENT: SettingsPanel
// Sound toggle, spin speed, theme selector, auto-spin, free coins
// ─────────────────────────────────────────────────────────────
import React from 'react';
import { THEMES } from '../game/constants';

// ── Sub-components ────────────────────────────────────────────

function Toggle({ on, onChange, disabled = false }) {
  return (
    <button
      onClick={() => !disabled && onChange(!on)}
      disabled={disabled}
      style={{
        width: 40, height: 22, borderRadius: 11,
        border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        background: on ? '#00e87a' : 'rgba(255,255,255,0.12)',
        position: 'relative', flexShrink: 0,
        transition: 'background 0.25s',
        opacity: disabled ? 0.4 : 1,
      }}
    >
      <span style={{
        position: 'absolute', top: 3,
        left: on ? 21 : 3,
        width: 16, height: 16,
        borderRadius: '50%', background: '#fff',
        transition: 'left 0.25s',
        boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
      }} />
    </button>
  );
}

function StyledSelect({ value, onChange, options, accentColor }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        background: `${accentColor}12`,
        border: `1px solid ${accentColor}44`,
        color: accentColor,
        borderRadius: 6, padding: '4px 8px',
        fontSize: 11, fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 700, cursor: 'pointer', outline: 'none',
      }}
    >
      {options.map(({ value: v, label }) => (
        <option key={v} value={v} style={{ background: '#0f0020', color: '#e8dfc8' }}>
          {label}
        </option>
      ))}
    </select>
  );
}

function SettingRow({ icon, label, desc, children }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '9px 0',
      borderBottom: '1px solid rgba(245,200,66,0.1)',
    }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#e8dfc8' }}>
          {icon} {label}
        </div>
        {desc && (
          <div style={{ fontSize: 10, color: 'rgba(232,223,200,0.4)', marginTop: 2 }}>
            {desc}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

function ThemePreviewDot({ color }) {
  return (
    <span style={{
      display: 'inline-block', width: 8, height: 8,
      borderRadius: '50%', background: color,
      marginRight: 4, verticalAlign: 'middle',
    }} />
  );
}

// ── Main Component ────────────────────────────────────────────

/**
 * SettingsPanel
 * @param {object}   settings         - current settings state
 * @param {function} onChangeSetting  - (key, value) => void
 * @param {boolean}  spinning         - disables certain controls while spinning
 */
export function SettingsPanel({ settings, onChangeSetting, spinning }) {
  const { accent } = THEMES[settings.theme] ?? THEMES.classic;
  const accentColor = settings.theme === 'ocean' ? '#00d4ff'
    : settings.theme === 'crimson' ? '#ff3d6e'
    : '#f5c842';

  const speedOptions = [
    { value: 'normal', label: '🐢 Normal' },
    { value: 'fast',   label: '⚡ Fast'   },
    { value: 'turbo',  label: '🚀 Turbo'  },
  ];

  const autoSpinOptions = [
    { value: '0',  label: 'Off'  },
    { value: '5',  label: '5×'   },
    { value: '10', label: '10×'  },
    { value: '25', label: '25×'  },
    { value: '50', label: '50×'  },
  ];

  const themeOptions = Object.entries(THEMES).map(([key, t]) => ({
    value: key,
    label: t.name,
  }));

  return (
    <aside style={panelStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <span style={{ fontSize: 14 }}>⚙️</span>
        <h3 style={{ ...headerTitleStyle, color: accentColor }}>Settings</h3>
      </div>

      <div style={{ padding: '4px 14px 14px' }}>

        {/* Sound */}
        <SettingRow icon="🔊" label="Sound FX" desc="Win sounds & coin effects">
          <Toggle
            on={settings.sound}
            onChange={val => onChangeSetting('sound', val)}
          />
        </SettingRow>

        {/* Animations */}
        <SettingRow icon="✨" label="Animations" desc="Coin shower on win">
          <Toggle
            on={settings.animations}
            onChange={val => onChangeSetting('animations', val)}
          />
        </SettingRow>

        {/* Spin speed */}
        <SettingRow icon="⚡" label="Spin Speed" desc="Reel animation speed">
          <StyledSelect
            value={settings.speed}
            onChange={val => onChangeSetting('speed', val)}
            options={speedOptions}
            accentColor={accentColor}
          />
        </SettingRow>

        {/* Auto-spin */}
        <SettingRow icon="🔄" label="Auto-Spin" desc={spinning ? 'Stop current spin first' : 'Run multiple spins'}>
          <StyledSelect
            value={String(settings.autoSpin)}
            onChange={val => onChangeSetting('autoSpin', Number(val))}
            options={autoSpinOptions}
            accentColor={accentColor}
          />
        </SettingRow>

        {/* Theme */}
        <SettingRow icon="🎨" label="Theme" desc="Visual color scheme">
          <StyledSelect
            value={settings.theme}
            onChange={val => onChangeSetting('theme', val)}
            options={themeOptions}
            accentColor={accentColor}
          />
        </SettingRow>

        {/* Theme preview dots */}
        <div style={{
          display: 'flex', gap: 8, padding: '8px 0 6px',
          borderBottom: '1px solid rgba(245,200,66,0.1)',
        }}>
          {Object.entries(THEMES).map(([key, t]) => (
            <button
              key={key}
              onClick={() => onChangeSetting('theme', key)}
              title={t.name}
              style={{
                flex: 1, padding: '6px 0', borderRadius: 6, border: 'none',
                background: settings.theme === key
                  ? `${t.accent}22`
                  : 'rgba(255,255,255,0.04)',
                outline: settings.theme === key
                  ? `1px solid ${t.accent}`
                  : '1px solid transparent',
                cursor: 'pointer', fontSize: 10,
                color: settings.theme === key ? t.accent : 'rgba(232,223,200,0.4)',
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 600, letterSpacing: 0.5,
                transition: 'all 0.2s',
              }}
            >
              <ThemePreviewDot color={t.accent} />
              {t.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Free coins */}
        <div style={{ paddingTop: 10, display: 'flex', gap: 6 }}>
          {[500, 1000, 5000].map(amt => (
            <button
              key={amt}
              onClick={() => onChangeSetting('freeCoins', amt)}
              style={{
                flex: 1, padding: '7px 0', borderRadius: 8, border: 'none',
                background: `${accentColor}14`,
                color: accentColor,
                border: `1px solid ${accentColor}33`,
                fontSize: 10, fontFamily: "'Orbitron', monospace",
                fontWeight: 700, cursor: 'pointer', letterSpacing: 0.5,
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = `${accentColor}28`}
              onMouseLeave={e => e.currentTarget.style.background = `${accentColor}14`}
            >
              +{amt >= 1000 ? `${amt/1000}K` : amt}
              <div style={{ fontSize: 8, opacity: 0.6, letterSpacing: 0 }}>COINS</div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

// ── Styles ────────────────────────────────────────────────────
const panelStyle = {
  width: 218, flexShrink: 0,
  background: 'rgba(15,5,30,0.92)',
  border: '1px solid rgba(245,200,66,0.22)',
  borderRadius: 14,
  backdropFilter: 'blur(20px)',
  overflow: 'hidden',
  boxShadow: '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
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
  margin: 0,
};
