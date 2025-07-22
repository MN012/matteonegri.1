import Hero from "./components/Hero";
import PortfolioButtons from "./components/PortfolioButtons";
import SocialButtons from "./components/SocialButtons";
import LocalTime from "./components/LocalTime";
import WavySineLines from "./components/WavySineLines";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
// import Resume from "./components/Resume";

function TopNavBar() {
  const location = useLocation();
  const navLinkClass =
    "relative text-lg font-medium px-3 py-1 transition-all duration-200 rounded focus:outline-none text-gray-200 hover:text-white hover:bg-white/5";
  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-10 py-2 rounded-[2.5rem] border border-[#b6a995]/60 bg-[#3d3932]/80 backdrop-blur-md shadow-[0_2px_24px_0_rgba(61,57,50,0.18)] montserrat"
      style={{ minWidth: 320 }}
    >
      <span className="text-2xl font-bold text-white tracking-widest mr-6 select-none">MN</span>
      <Link to="/" className={navLinkClass + (location.pathname === "/" ? " text-white" : "") }>
        Home
      </Link>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={navLinkClass + " text-white"}
        style={{ position: 'relative' }}
      >
        Resume
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div
        className="min-h-screen text-black relative overflow-x-hidden"
        style={{
          backgroundColor: '#ffe4c4',
          backgroundImage: "url('/pattern.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      >
        <LocalTime />
        <TopNavBar />
        <WavySineLines />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <PortfolioButtons />
              </>
            } />
          </Routes>
        </div>
        <div className="flex justify-center items-center gap-4 pb-24">
          <SocialButtons />
        </div>
      </div>
    </Router>
  );
}