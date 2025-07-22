import React, { useState } from "react";

const translations = {
  en: {
    heading: "Hey! I'm Matteo Negri",
    intro: `— an 18-year-old computer science and robotics enthusiast with a vision for the future.<br/>Currently studying at City, University of London (St George's), I'm passionate about exploring the edge where software meets machines.`,
    bullets: [
      "Always chasing the next breakthrough in intelligent systems",
      "Tinkerer at heart, building from the ground up",
      "Big believer in tech as a tool for real-world change",
    ],
    closing: `One day, I hope to design the systems that shape tomorrow — for now, I’m learning, building, and aiming higher every day.`
  },
  it: {
    heading: "Ciao! Sono Matteo Negri",
    intro: `— un diciottenne appassionato di informatica e robotica con una visione per il futuro.<br/>Attualmente studio alla City, University of London (St George's) e sono appassionato di esplorare il confine tra software e macchine.`,
    bullets: [
      "Sempre alla ricerca della prossima svolta nei sistemi intelligenti",
      "Smanettone nel cuore, costruisco da zero",
      "Credo molto nella tecnologia come strumento per il cambiamento reale",
    ],
    closing: `Un giorno spero di progettare i sistemi che plasmeranno il domani — per ora, imparo, costruisco e punto sempre più in alto.`
  }
};

const languages = [
  { code: "en", label: "English" },
  { code: "it", label: "Italiano" },
];

const Hero = () => {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] pt-32 select-none">
      {/* Language Switcher */}
      <div className="flex gap-2 mb-4">
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`px-3 py-1 rounded-full border border-black font-semibold montserrat transition-all duration-200 ${lang === l.code ? 'bg-black text-white' : 'bg-transparent text-black hover:bg-black/10'}`}
            disabled={lang === l.code}
          >
            {l.label}
          </button>
        ))}
      </div>
      {/* Name box with background color #ffe4c4, black border, rounded corners, Montserrat font, smaller size */}
      <div className="mt-10 flex justify-center w-full">
        <div className="px-0.5 py-0.5 rounded-2xl border-4 border-black max-w-md w-full" style={{ background: '#ffe4c4' }}>
          <div className="flex flex-col items-start justify-center px-6 py-6 rounded-2xl montserrat">
            <h2 className="text-xl md:text-2xl font-extrabold text-black tracking-tight mb-4">{t.heading}</h2>
            <p className="text-base md:text-lg text-black/90 font-medium mb-4 text-left" dangerouslySetInnerHTML={{ __html: t.intro }} />
            <ul className="text-black/80 text-sm md:text-base font-medium mb-4 list-disc list-inside space-y-1">
              {t.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <p className="text-black/80 text-sm md:text-base font-medium text-left">{t.closing}</p>
          </div>
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        .montserrat {
          font-family: 'Montserrat', sans-serif;
          font-optical-sizing: auto;
        }
      `}</style>
    </section>
  );
};

export default Hero; 