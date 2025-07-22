import React, { useEffect, useRef, useState } from "react";

const NUM_LINES = 14;
const LINE_LENGTH = 1200;
const LINE_HEIGHT = 60;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const WavyLines = () => {
  const linesRef = useRef([]);
  const [pageHeight, setPageHeight] = useState(() =>
    typeof window !== 'undefined' ? document.documentElement.scrollHeight : 1000
  );

  // Distribute lines from very top to very bottom
  const getBaseY = (i) => {
    if (NUM_LINES === 1) return pageHeight / 2;
    return (i / (NUM_LINES - 1)) * pageHeight;
  };

  useEffect(() => {
    const updateHeight = () => setPageHeight(document.documentElement.scrollHeight);
    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll', updateHeight);
    updateHeight();
    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll', updateHeight);
    };
  }, []);

  useEffect(() => {
    let raf;
    let start = Date.now();
    const animate = () => {
      const now = Date.now();
      linesRef.current.forEach((el, i) => {
        if (!el) return;
        // Animate vertical position (wave motion)
        const phase = el.dataset.phase ? parseFloat(el.dataset.phase) : 0;
        const amplitude = el.dataset.amplitude ? parseFloat(el.dataset.amplitude) : 0;
        const baseY = el.dataset.baseY ? parseFloat(el.dataset.baseY) : 0;
        const speed = el.dataset.speed ? parseFloat(el.dataset.speed) : 1;
        const t = ((now - start) / 1000) * speed + phase;
        el.setAttribute('transform', `translate(0, ${baseY + Math.sin(t) * amplitude})`);
        // Animate opacity (fade in/out)
        const fadePeriod = el.dataset.fadePeriod ? parseFloat(el.dataset.fadePeriod) : 8;
        const fadePhase = el.dataset.fadePhase ? parseFloat(el.dataset.fadePhase) : 0;
        const fade = 0.3 + 0.4 * Math.abs(Math.sin((t + fadePhase) * Math.PI / fadePeriod));
        el.style.opacity = fade;
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [pageHeight]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" style={{ height: pageHeight }}>
      <svg width="100vw" height={pageHeight} style={{ position: 'absolute', width: '100vw', height: pageHeight, left: 0, top: 0 }}>
        {Array.from({ length: NUM_LINES }).map((_, i) => {
          // Randomize each line's properties
          const phase = random(0, Math.PI * 2);
          const amplitude = random(10, 30);
          const baseY = getBaseY(i);
          const speed = random(0.3, 0.7);
          const fadePeriod = random(7, 13);
          const fadePhase = random(0, Math.PI * 2);
          // Create a wavy path
          let path = '';
          for (let x = 0; x <= LINE_LENGTH; x += 40) {
            const y = Math.sin((x / LINE_LENGTH) * Math.PI * 2 + phase) * 18 + LINE_HEIGHT / 2;
            path += x === 0 ? `M${x},${y}` : ` Q${x - 20},${y + random(-8, 8)} ${x},${y}`;
          }
          return (
            <g
              key={i}
              ref={el => (linesRef.current[i] = el)}
              data-phase={phase}
              data-amplitude={amplitude}
              data-base-y={baseY}
              data-speed={speed}
              data-fade-period={fadePeriod}
              data-fade-phase={fadePhase}
              style={{ transition: 'opacity 1s' }}
            >
              <path
                d={path}
                stroke="#000"
                strokeWidth={random(1.5, 2.5)}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.5}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default WavyLines; 