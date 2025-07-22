import React, { useState } from "react";

const buttons = [
  { label: "Projects", href: "#projects", icon: "bx bx-folder" },
  { label: "Skills", href: "#skills", icon: "bx bx-cog" },
  { label: "Contact", href: "#contact", icon: "bx bx-envelope" },
  { label: "Resume", href: "#resume", icon: "bx bx-file" },
  { label: "GitHub ↗", href: "https://github.com/MN012", external: true, icon: "bx bxl-github" },
  { label: "LinkedIn ↗", href: "https://linkedin.com/", external: true, icon: "bx bxl-linkedin" },
];

const Sidebar = () => {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`side-bar-wrap fixed top-4 left-4 h-[92vh] z-30 transition-all duration-300 ${expanded ? "w-56" : "w-16"}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded((e) => !e)}
      style={{ borderRadius: "25px", overflow: "hidden" }}
    >
      <nav className="side-bar min-h-full bg-gradient-to-b from-green-700 via-green-800 to-green-900 border-l-[25px] border-l-green-400 border-r-[25px] border-r-green-700 rounded-[25px] flex flex-col items-center">
        {/* Logo Area */}
        <div className="logo-area flex justify-center items-center p-4 w-full bg-gradient-to-r from-green-400 to-green-700 rounded-tr-[25px] rounded-br-[25px] relative">
          {/* Placeholder SVG logo */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="min" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#22c55e" />
            <text x="16" y="21" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">M</text>
          </svg>
        </div>
        {/* Menu */}
        <ul className="flex flex-col gap-2 mt-8 w-full">
          {buttons.map((btn, idx) => (
            <li
              key={btn.label}
              className={`relative transition-all duration-300 cursor-pointer ${active === idx ? "bg-gradient-to-r from-green-400 to-green-700 text-white" : "hover:bg-green-800/80"} rounded-l-[25px] pl-2 pr-4 py-2 flex items-center gap-2`}
              onClick={(e) => { e.stopPropagation(); setActive(idx); }}
            >
              <a
                href={btn.href}
                target={btn.external ? "_blank" : undefined}
                rel={btn.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 w-full h-full no-underline"
              >
                <i className={`${btn.icon} text-2xl`} />
                <span className={`title transition-all duration-500 ${expanded ? "max-w-xs opacity-100 ml-2" : "max-w-0 opacity-0 ml-0"} whitespace-nowrap font-semibold`}>{btn.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Custom CSS for curve and sidebar */}
      <style>{`
        .side-bar-wrap::-webkit-scrollbar { width: 10px; }
        .side-bar-wrap::-webkit-scrollbar-thumb { border-radius: 25px; background-color: #22c55e; }
        .side-bar .logo-area { box-shadow: 25px 0 #22c55e; }
        .side-bar ul { margin-top: 2rem; }
        .side-bar ul li.active, .side-bar ul li.bg-gradient-to-r { position: relative; }
        .side-bar ul li.active::before, .side-bar ul li.active::after {
          content: '';
          width: 50px;
          height: 50px;
          background-color: #22c55e;
          border-radius: 50%;
          position: absolute;
          left: 0;
        }
        .side-bar ul li.active::before { top: -50px; box-shadow: -25px 25px #4ade80; }
        .side-bar ul li.active::after { bottom: -50px; box-shadow: -25px -25px #4ade80; }
      `}</style>
    </aside>
  );
};

export default Sidebar; 