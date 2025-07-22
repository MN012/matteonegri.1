import React, { useEffect, useRef } from "react";

const NUM_LINES = 10;
const LINE_LENGTH = 1800;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const VibrationLines = () => {
  const linesRef = useRef([]);

  useEffect(() => {
    let raf;
    let start = Date.now();
    const animate = () => {
      const now = Date.now();
      linesRef.current.forEach((el, i) => {
        if (!el) return;
        // Animate vibration (wave motion)
        const phase = el.dataset.phase ? parseFloat(el.dataset.phase) : 0;
        const amplitude = el.dataset.amplitude ? parseFloat(el.dataset.amplitude) : 0;
        const speed = el.dataset.speed ? parseFloat(el.dataset.speed) : 1;
        const t = ((now - start) / 1000) * speed + phase;
        const offset = Math.sin(t) * amplitude;
        el.setAttribute('transform', `translate(${offset}, ${-offset})`);
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  // Diagonal lines from bottom-left to top-right
  const lines = Array.from({ length: NUM_LINES }).map((_, i) => {
    const percent = i / (NUM_LINES - 1);
    const x1 = 0;
    const y1 = window.innerHeight - percent * window.innerHeight;
    const x2 = window.innerWidth;
    const y2 = 0 + percent * window.innerHeight;
    const phase = random(0, Math.PI * 2);
    const amplitude = random(6, 18);
    const speed = random(0.5, 1.2);
    return { x1, y1, x2, y2, phase, amplitude, speed };
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <svg width="100vw" height="100vh" style={{ position: 'absolute', width: '100vw', height: '100vh', left: 0, top: 0 }}>
        {lines.map((line, i) => (
          <g
            key={i}
            ref={el => (linesRef.current[i] = el)}
            data-phase={line.phase}
            data-amplitude={line.amplitude}
            data-speed={line.speed}
          >
            <line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#000"
              strokeWidth={1.5}
              opacity={0.13}
              strokeLinecap="round"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default VibrationLines; 