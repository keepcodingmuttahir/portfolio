import React, { useEffect, useRef } from 'react';

const SYMBOLS = [
  '{}', '()', '=>', '[]', '::', '&&', '||',
  '@Bean', '@Override', 'void', 'class', 'import',
  'public', 'private', 'return', 'static', 'final',
  'val', 'fun', 'List<>', 'Map<K,V>',
  '<div>', '</>', '{{}}', '/*', '*/',
  'null', 'true', 'false', '===', '!==',
  'async', 'await', '.then()', 'catch()',
  'docker', 'kubectl', 'git', 'npm run',
  'SELECT', 'WHERE', 'JOIN', 'FROM',
  'try {}', '200 OK', '404', 'JWT',
  '=>', '++', '--', '0x1F', '∞', '⌘',
];

const COLORS = [
  'rgba(254,128,25,',   // accent orange
  'rgba(86,168,245,',   // intellij blue
  'rgba(106,171,115,',  // string green
  'rgba(255,198,109,',  // class yellow
  'rgba(152,118,170,',  // property purple
  'rgba(187,181,41,',   // annotation gold
  'rgba(204,120,50,',   // keyword orange
  'rgba(200,200,200,',  // plain white
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function makeParticle(W, H) {
  const colorBase = COLORS[Math.floor(Math.random() * COLORS.length)];
  return {
    symbol   : SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    x        : randomBetween(0, W),
    y        : randomBetween(0, H),
    size     : randomBetween(11, 26),
    opacity  : randomBetween(0.06, 0.13),   // more visible than before
    speedX   : (Math.random() - 0.5) * 0.22,
    speedY   : (Math.random() - 0.5) * 0.15,
    rot      : Math.random() * Math.PI * 2,
    rotSpeed : (Math.random() - 0.5) * 0.003,
    colorBase,
  };
}

const COUNT = 60;

export default function MatrixBackground() {
  const canvasRef  = useRef(null);
  const particles  = useRef([]);
  const rafRef     = useRef(null);
  const sizeRef    = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width  = w;
      canvas.height = h;
      sizeRef.current = { w, h };

      // Re-seed on first resize
      if (particles.current.length === 0) {
        particles.current = Array.from({ length: COUNT }, () => makeParticle(w, h));
      }
    };

    resize();
    // Seed immediately
    particles.current = Array.from(
      { length: COUNT },
      () => makeParticle(window.innerWidth, window.innerHeight)
    );
    window.addEventListener('resize', resize);

    const tick = () => {
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles.current) {
        p.x   += p.speedX;
        p.y   += p.speedY;
        p.rot += p.rotSpeed;

        // Wrap
        if (p.x < -80)   p.x = w + 80;
        if (p.x > w + 80) p.x = -80;
        if (p.y < -40)   p.y = h + 40;
        if (p.y > h + 40) p.y = -40;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle   = `${ p.colorBase }1)`;
        ctx.font        = `${ p.size }px 'JetBrains Mono', monospace`;
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={ canvasRef }
      style={ {
        position      : 'fixed',
        top           : '0',
        left          : '0',
        width         : '100%',
        height        : '100%',
        zIndex        : '0',
        pointerEvents : 'none',
        display       : 'block',
      } }
    />
  );
}
