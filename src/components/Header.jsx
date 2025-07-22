import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center py-10 px-4 animate-fade-in">
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg mb-2 transition-transform duration-700"
        style={{
          animation: 'slideDown 1s cubic-bezier(0.4,0,0.2,1)'
        }}
      >
        Portfolio
      </h1>
      <p className="text-lg md:text-xl text-gray-500 font-medium tracking-wide animate-fade-in delay-200">
        Welcome to my modern web portfolio
      </p>
      <style>{`
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease both;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </header>
  )
}

export default Header
