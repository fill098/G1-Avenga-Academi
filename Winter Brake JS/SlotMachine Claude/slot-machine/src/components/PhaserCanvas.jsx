// ─────────────────────────────────────────────────────────────
// COMPONENT: PhaserCanvas
// Mounts the Phaser game, exposes scene ref to parent
// ─────────────────────────────────────────────────────────────
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { SlotScene } from '../game/SlotScene';
import { CANVAS_W, CANVAS_H } from '../game/constants';

/**
 * PhaserCanvas
 * @param {React.MutableRefObject} sceneRef - will be set to the SlotScene instance
 * @param {string} accentColor             - border glow color from theme
 */
export function PhaserCanvas({ sceneRef, accentColor = '#f5c842' }) {
  const containerRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const config = {
      type: Phaser.CANVAS,
      width: CANVAS_W,
      height: CANVAS_H,
      parent: containerRef.current,
      backgroundColor: '#04000c',
      scene: SlotScene,
      render: { antialias: true },
      // Remove Phaser banner from console
      banner: false,
    };

    const game = new Phaser.Game(config);
    gameRef.current = game;

    game.events.on('ready', () => {
      const scene = game.scene.getScene('SlotScene');
      if (scene && sceneRef) sceneRef.current = scene;
    });

    return () => {
      game.destroy(true);
      gameRef.current = null;
      if (sceneRef) sceneRef.current = null;
    };
  }, []); // mount once

  return (
    <div
      style={{
        borderRadius: 16, overflow: 'hidden',
        border: `2px solid ${accentColor}55`,
        boxShadow: `
          0 0 0 1px ${accentColor}18,
          0 0 40px ${accentColor}22,
          0 0 80px rgba(255,80,0,0.1),
          inset 0 0 60px rgba(0,0,0,0.5)
        `,
        transition: 'border-color 0.4s, box-shadow 0.4s',
      }}
    >
      <div ref={containerRef} />
    </div>
  );
}
