// ─────────────────────────────────────────────────────────────
// COMPONENT: WinBanner
// Animated overlay popup for wins + coin particle shower
// ─────────────────────────────────────────────────────────────
import React, { useEffect, useRef } from 'react';

const TIER_STYLES = {
  mega:  { color: '#ff3d6e', shadow: 'rgba(255,61,110,0.8)',  size: 58 },
  big:   { color: '#f5c842', shadow: 'rgba(245,200,66,0.8)',  size: 52 },
  great: { color: '#00e87a', shadow: 'rgba(0,232,122,0.7)',   size: 46 },
  small: { color: '#00d4ff', shadow: 'rgba(0,212,255,0.6)',   size: 40 },
};

function spawnCoinParticle() {
  const el = document.createElement('div');
  const icons = ['🪙', '⭐', '💰', '✨', '🎉'];
  el.textContent = icons[Math.floor(Math.random() * icons.length)];
  el.style.cssText = `
    position: fixed; pointer-events: none; z-index: 9999;
    left: ${10 + Math.random() * 80}vw;
    top: 15vh;
    font-size: ${18 + Math.random() * 18}px;
    animation: coinFall ${0.8 + Math.random() * 1}s ease-in forwards;
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}

function launchCoins(count = 14) {
  for (let i = 0; i < count; i++) {
    setTimeout(spawnCoinParticle, i * 70);
  }
}

/**
 * WinBanner
 * @param {{ label: string, tier: string, amount: number } | null} result
 * @param {boolean} animationsEnabled
 */
export function WinBanner({ result, animationsEnabled = true }) {
  const prevResult = useRef(null);

  useEffect(() => {
    if (result && result !== prevResult.current && animationsEnabled) {
      launchCoins(result.tier === 'mega' ? 22 : result.tier === 'big' ? 16 : 10);
    }
    prevResult.current = result;
  }, [result, animationsEnabled]);

  const style = result ? TIER_STYLES[result.tier] ?? TIER_STYLES.small : null;

  return (
    <>
      {/* Global keyframe for coin particles */}
      <style>{`
        @keyframes coinFall {
          from { opacity: 1; transform: translateY(0) rotate(0deg) scale(1); }
          to   { opacity: 0; transform: translateY(55vh) rotate(400deg) scale(0.5); }
        }
        @keyframes bannerIn {
          from { transform: translate(-50%, -50%) scale(0.4) rotate(-6deg); opacity: 0; }
          to   { transform: translate(-50%, -50%) scale(1)   rotate(0deg);  opacity: 1; }
        }
        @keyframes bannerOut {
          from { transform: translate(-50%, -50%) scale(1);   opacity: 1; }
          to   { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        }
      `}</style>

      {result && (
        <div
          key={result.amount + result.tier}
          style={{
            position: 'fixed', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none', zIndex: 999,
          }}
        >
          <div style={{
            position: 'absolute',
            top: '42%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: style.size, letterSpacing: 5,
            color: style.color,
            filter: `drop-shadow(0 0 24px ${style.shadow})`,
            textAlign: 'center', lineHeight: 1.2,
            animation: 'bannerIn 0.35s cubic-bezier(0.175,0.885,0.32,1.4) forwards',
            whiteSpace: 'nowrap',
          }}>
            {result.label}
            <div style={{ fontSize: style.size * 0.55, color: '#fff', opacity: 0.9 }}>
              +{result.amount} coins
            </div>
          </div>
        </div>
      )}
    </>
  );
}
