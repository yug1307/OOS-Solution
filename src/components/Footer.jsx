"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const knowMoreLinks = [
  { label: "About Us", href: "about" },
  { label: "Our Services", href: "#services" },
  { label: "How We Work", href: "#process" },
  { label: "Case Studies", href: "#cases" },
  { label: "Contact Us", href: "contact" },
  { label: "Privacy Policy", href: "privacy-policy" },
  { label: "Terms of Use", href: "#termsofuse" },
];

const socialLinks = [
  { id: "facebook", icon: <FaFacebookF className="text-xl" />, href: "#", hoverClass: "hover:bg-blue-600" },
  { id: "twitter", icon: <FaTwitter className="text-xl" />, href: "#", hoverClass: "hover:bg-sky-500" },
  { id: "instagram", icon: <FaInstagram className="text-xl" />, href: "#", hoverClass: "hover:bg-pink-600" },
  { id: "linkedin", icon: <FaLinkedinIn className="text-xl" />, href: "#", hoverClass: "hover:bg-blue-700" },
  { id: "youtube", icon: <FaYoutube className="text-xl" />, href: "#", hoverClass: "hover:bg-red-600" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060730] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Syne:wght@600;700;800&family=Inter:wght@400;500;600&family=Roboto:wght@700;900&family=Open+Sans:wght@400;500;600&display=swap');
          .logo { font-family: 'Orbitron', sans-serif; }
          .nav { font-family: 'Syne', sans-serif; }
          .body { font-family: 'Inter', sans-serif; }
          .heading { font-family: 'Roboto', sans-serif; }
          .content { font-family: 'Open Sans', sans-serif; }
          .nl:hover::after { transform: scaleX(1); }
      `}</style>

      {/* ── Main Footer Body ── */}
      <div className="max-w-8xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* ── COL 1: Logo + Tagline ── */}
        <div className="space-y-5"> 
          {/* Logo */}
          <img src="/images/logo.png" alt="" className="h-14" />

          <p className="open-sans text-white leading-relaxed max-w-xs px-1">
            We are a results-driven team of digital enthusiasts passionate about
            helping businesses grow, scale, and thrive in the digital world.
          </p>

          {/* Divider */}
          <div className="w-10 h-0.5 bg-[#F544A8] rounded mx-1" />
        </div>

        {/* ── COL 2: #KnowMore ── */}
        <div className="flex flex-col gap-5 md:border-l md:border-white md:pl-6">
          <h3 className="roboto text-base text-xl font-extrabold tracking-widest text-[#F544A8] uppercase">
            Know More
          </h3>

          <div className="w-8 h-0.5 bg-[#F544A8] rounded" />

          <ul className="flex flex-col grid grid-cols-1 md:grid-cols-2 gap-3">
            {knowMoreLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="open-sans flex items-center gap-2 text-white hover:text-pink-400 transition-colors duration-200 group"
                >
                  <FaArrowRight className="text-xs text-[#F544A8] group-hover:translate-x-1 transition-transform duration-200" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul> 
        </div>

        {/* ── COL 3: #FollowUs ── */}
        <div className="flex flex-col gap-5 md:border-l md:border-white md:pl-6">
          <h3 className="roboto text-base text-xl font-extrabold tracking-widest text-[#F544A8] uppercase">
            Follow Us
          </h3>
           
          <div className="w-8 h-0.5 bg-[#F544A8] rounded" />

          <p className="open-sans text-white leading-relaxed"> 
            Stay connected and follow our journey across social platforms.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-white bg-[#F544A8] transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-lg ${s.hoverClass}`}
                >
                  {s.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="open-sans p-5 border-t border-white/60">
        <p className="text-white text-center">
          © {new Date().getFullYear()} OOS Solution. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
