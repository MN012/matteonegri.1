import React from "react";

const Navbar = () => (
  <nav className="w-full flex justify-end items-center py-6 px-8 absolute top-0 left-0 z-20">
    <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-full px-6 py-2 flex gap-6 shadow-lg">
      <a href="#company" className="text-sm font-medium hover:text-blue-400 transition-colors">Company</a>
      <a href="#features" className="text-sm font-medium hover:text-blue-400 transition-colors">Features</a>
      <a href="#resources" className="text-sm font-medium hover:text-blue-400 transition-colors">Resources</a>
      <a href="#docs" className="text-sm font-medium hover:text-blue-400 transition-colors">Docs</a>
    </div>
  </nav>
);

export default Navbar; 