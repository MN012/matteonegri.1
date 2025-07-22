import React, { useEffect, useState } from "react";

const LocalTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateString = now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <div className="fixed top-4 right-8 z-50 bg-black/10 px-4 py-2 rounded-xl shadow-md montserrat text-right text-black text-lg font-semibold select-none" style={{backdropFilter: 'blur(8px)'}}>
      <span>{timeString}</span>
      <span className="mx-2">•</span>
      <span>{dateString}</span>
    </div>
  );
};

export default LocalTime; 