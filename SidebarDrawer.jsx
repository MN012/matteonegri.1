import React, { useState } from "react";

const buttons = [
  { label: "Projects", href: "#projects", icon: "bx bx-folder" },
  { label: "Skills", href: "#skills", icon: "bx bx-cog" },
  { label: "Contact", href: "#contact", icon: "bx bx-envelope" },
  { label: "Resume", href: "#resume", icon: "bx bx-file" },
  { label: "GitHub ↗", href: "https://github.com/MN012", external: true, icon: "bx bxl-github" },
  { label: "LinkedIn ↗", href: "https://linkedin.com/", external: true, icon: "bx bxl-linkedin" },
];

const SidebarDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger menu button */}
      <button
        className="fixed top-6 right-6 z-50 flex flex-col justify-center items-center w-12 h-12 bg-black/60 rounded-full shadow-lg border border-[#e99b63] hover:bg-[#e99b63]/30 transition-all"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open menu"
      >
        <span className={`block w-7 h-1 bg-[#e99b63] rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-1 bg-[#e99b63] rounded my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-1 bg-[#e99b63] rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Drawer */}
      {open && (
        <div className="fixed top-0 right-0 z-40 h-full w-80 max-w-[95vw] bg-transparent flex flex-col items-center animate-fade-in">
          <div className="w-full h-full p-6 bg-gradient-to-br from-[#232323] to-[#222] flex flex-col items-center">
            {/* Close X button */}
            <button
              className="absolute top-4 right-4 text-[#e99b63] hover:text-white text-3xl font-bold"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            {/* Profile area styled like a button */}
            <div className="w-full flex items-center gap-4 mb-8 mt-8">
              <div className="px-0.5 py-0.5 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
                <div className="bg-black/80 rounded-full flex items-center justify-center w-12 h-12">
                  <span className="text-2xl font-bold text-white">M</span>
                </div>
              </div>
              <span className="text-2xl font-extrabold text-white">Matteo Negri</span>
            </div>
            {/* Buttons styled like the main buttons */}
            <ul className="flex flex-col gap-5 w-full">
              {buttons.map((btn) => (
                <li key={btn.label}>
                  <a
                    href={btn.href}
                    target={btn.external ? "_blank" : undefined}
                    rel={btn.external ? "noopener noreferrer" : undefined}
                    className="block px-0.5 py-0.5 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full"
                    onClick={() => setOpen(false)}
                  >
                    <div className="bg-black/80 rounded-full flex items-center justify-center gap-3 px-8 py-3">
                      <span className="text-white font-bold text-lg">{btn.label}</span>
                      {btn.icon && <i className={`${btn.icon} text-[#e99b63] text-xl`}></i>}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in { animation: fadeIn 0.4s cubic-bezier(0.4,0,0.2,1) both; }
      `}</style>
    </>
  );
};

export default SidebarDrawer; 