import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  { title: "Marketplace Management", href: "/marketplace-management" },
  { title: "E-commerce Development", href: "/ecommerce-development" },
  { title: "Digital Marketing", href: "/digital-marketing" },
  { title: "Graphic Design", href: "/graphic-design" },
  { title: "Virtual Assistance", href: "/virtual-assistance" },
  { title: "Accounting & Bookkeeping", href: "/accounting-bookkeeping" },
  { title: "Website Development", href: "/web-development" },
  { title: "Other Services", href: "/other-services" }
];

function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => !ref.current?.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 hover:text-pink-400 transition-colors">
        Services <FaChevronDown className={`text-sm transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-10 mt-3 w-60 bg-[#060730] border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
          {services.map((s) => (
            <Link key={s.title} to={s.href} onClick={() => setOpen(false)}
              className="block px-4 py-2.5 hover:text-pink-400 hover:bg-white/5 transition-colors">
              {s.title}
            </Link>
          ))}
        </div> 
      )}
    </div>
  );
}
  
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (  
    <header className="w-full bg-[#060730] border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700;900&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; }
          .nl:hover::after { transform: scaleX(1); }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:h-20 h-14 flex items-center justify-between">

        {/* ── LEFT: Logo ── */}
        <img src="/images/logo.png" alt="" className="md:h-14 h-10" />

        {/* ── RIGHT: Nav Links (desktop) ── */}
        <nav className="nl roboto transition-colors hidden md:flex items-center space-x-6 text-white">
          <Link to="/" className="hover:text-pink-400">Home</Link>
          <ServicesMenu />  {/* ← added here */}
          <Link to="/about" className="hover:text-pink-400">About</Link>
          <Link to="/contact" className="hover:text-pink-400">Contact</Link>
        </nav>
 
        {/* ── Mobile: Hamburger ── */}
        <button className="md:hidden text-2xl text-white hover:text-gray-500 transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {menuOpen && (
        <nav className="md:hidden roboto border-t border-gray-100 text-gray-400 px-6 py-4 flex flex-col items-center gap-4 shadow-md">
          <Link to="/" className="hover:text-pink-400">Home</Link>
          <ServicesMenu />  {/* ← added here */}
          <Link to="/about" className="hover:text-pink-400">About</Link>
          <Link to="/contact" className="hover:text-pink-400">Contact</Link>
        </nav>
      )}
    </header>
  );
}
