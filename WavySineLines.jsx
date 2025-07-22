import React, { useEffect, useRef, useState } from "react";

const NUM_LINES = 12;
const BASE_AMPLITUDE = 22; // px
const WAVELENGTH = 320; // px
const SPEED = 1; // px/ms
const LINE_WIDTH = 4.5;

const WavySineLines = () => {
  const linesRef = useRef([]);
  const [pageHeight, setPageHeight] = useState(() =>
    typeof window !== 'undefined' ? document.documentElement.scrollHeight : 1000
  );
  const [pageWidth, setPageWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // Evenly spread lines from top to bottom
  const getBaseY = (i) => {
    if (NUM_LINES === 1) return pageHeight / 2;
    return (i / (NUM_LINES - 1)) * pageHeight;
  };

  useEffect(() => {
    const updateDims = () => {
      setPageHeight(document.documentElement.scrollHeight);
      setPageWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateDims);
    window.addEventListener('scroll', updateDims);
    updateDims();
    return () => {
      window.removeEventListener('resize', updateDims);
      window.removeEventListener('scroll', updateDims);
    };
  }, []);

  useEffect(() => {
    let raf;
    let start = Date.now();
    const animate = () => {
      const now = Date.now();
      linesRef.current.forEach((el, i) => {
        if (!el) return;
        const phase = (i / NUM_LINES) * Math.PI * 2;
        const t = ((now - start) * SPEED) / 1000;
        // Animate amplitude with a secondary sine for undulation (faster)
        const ampMod = Math.sin(t * 1.2 + phase) * 0.5 + 1; // oscillates between 0.5 and 1.5, faster
        el.setAttribute('d', getSinePath(pageWidth, getBaseY(i), t + phase, BASE_AMPLITUDE * ampMod));
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [pageHeight, pageWidth]);

  // Generate a sine wave path with modulated amplitude
  function getSinePath(width, baseY, phase, amplitude) {
    let path = '';
    for (let x = 0; x <= width; x += 8) {
      const y = baseY + Math.sin((x / WAVELENGTH) * Math.PI * 2 + phase) * amplitude;
      path += x === 0 ? `M${x},${y}` : ` L${x},${y}`;
    }
    return path;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" style={{ height: pageHeight }}>
      <svg width={pageWidth} height={pageHeight} style={{ position: 'absolute', width: pageWidth, height: pageHeight, left: 0, top: 0 }}>
        {Array.from({ length: NUM_LINES }).map((_, i) => (
          <path
            key={i}
            ref={el => (linesRef.current[i] = el)}
            d={getSinePath(pageWidth, getBaseY(i), 0, BASE_AMPLITUDE)}
            stroke="#000"
            strokeWidth={LINE_WIDTH}
            fill="none"
            opacity={0.45}
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
};

export default WavySineLines;