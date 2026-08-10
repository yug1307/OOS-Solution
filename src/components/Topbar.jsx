import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = () => { 
  const [menuOpen, setMenuOpen] = useState(false);

  return ( 
    <header className="sticky top-0 z-50 bg-slate-950">
      <style>{`.pd{font-family:'Playfair Display',serif} .nl:hover::after{transform:scaleX(1)}`}</style>
      
      <div className="max-w-6xl mx-auto flex items-center py-2 px-6 justify-between">

        {/* Logo */}
        <img src="/images/logo.png" alt="" className="h-16" />
 
        {/* Desktop Menu */}
        <nav className="nl transition-colors hidden md:flex items-center space-x-6 text-gray-400 font-medium">
          <Link to="/" className="hover:text-[#C9A24D]">Home</Link>
          <Link to="/about" className="hover:text-[#C9A24D]">About</Link>
          <Link to="/contact" className="hover:text-[#C9A24D]">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden px-6 text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-t">
          <nav className="flex flex-col items-center space-y-4 py-6 text-white font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div> 
      )}
    </header>
  );
};

export default Topbar;
