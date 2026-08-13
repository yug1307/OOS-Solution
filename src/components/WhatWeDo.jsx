"use client";

import { FaStore, FaShoppingBag, FaBullhorn, FaPaintBrush, FaHeadset, FaCalculator, FaLaptopCode, FaEllipsisH, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaStore />,
    title: "Marketplace Management",
    desc: "Amazon, Walmart, eBay, Etsy & more marketplace management to maximize your sales.",
    href: "/marketplace-management",
  },
  {
    icon: <FaShoppingBag />,
    title: "eCommerce Development",
    desc: "Shopify, WooCommerce, Magento, Zoey Commerce and custom solutions for your store.",
    href: "/ecommerce-development",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "SEO, PPC, Social Media Marketing, and more to boost traffic and increase conversions.",
    href: "/digital-marketing",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Design",
    desc: "A+ Content, Logo Design, Product Images, Infographics and Brand Store Design.",
    href: "/graphic-design",
  },
  {
    icon: <FaHeadset />,
    title: "Virtual Assistance",
    desc: "Expert VA services including product listing, order processing, and customer support.",
    href: "/virtual-assistance",
  },
  {
    icon: <FaCalculator />,
    title: "Accounting & Bookkeeping",
    desc: "QuickBooks, Zoho Books, bank reconciliation, and financial reporting services.",
    href: "/accounting-bookkeeping",
  },
  {
    icon: <FaLaptopCode />,
    title: "Website Development",
    desc: "WordPress, landing pages, and custom websites that are fast, responsive, secure, and modern.",
    href: "/web-development",
  },
  {
    icon: <FaEllipsisH />,
    title: "Other Services",
    desc: "Data Entry, Inventory Management, CRM Management and many more tailored services.",
    href: "/other-services",
  },
]; 

// background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #24143e 50%, #0f0a1e 100%)",

export default function WhatWeDo() {
  return (
    <section className="relative py-14 md:px-6 px-4 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        .fade-1 { animation: fadeInUp 0.6s ease both; }
        .fade-2 { animation: fadeInUp 0.6s ease 0.20s both; }
        .fade-card { animation: fadeInUp 0.6s ease calc(var(--i) * 0.08s) both; }
      `}</style>
      
 
      {/* ── Top + Bottom edge lines ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
 
      <div className="relative z-10 max-w-8xl mx-auto space-y-12">
 
        {/* ── Section Header ── */}
        <div className="fade-1 text-center">
 
          {/* Eyebrow tag */}
          <div className="open-sans inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-pink-400 text-xs font-semibold tracking-widest uppercase">
              Our Services
            </span> 
          </div>
 
          <h2 className="roboto text-4xl sm:text-4xl text-white text-center font-extrabold leading-tight tracking-tight my-5">
            What We <span className="text-pink-400">Do</span>
          </h2> 
 
          <p className="open-sans text-white/75 max-w-2xl mx-auto leading-relaxed">
            End-to-end solutions to grow your business across marketplace and digital platforms.
          </p> 
 
          {/* Accent underline */}
          <div className="mx-auto mt-6 w-64 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />
        </div>
 
        {/* ── Services Grid ── */} 
        <div className="fade-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={i} 
              className="fade-card group relative hover:bg-[#0a0f1e] backdrop-blur-sm border border-white/8 rounded-xl 
              p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:border-pink-400/40 
              hover:shadow-[0_0_24px_rgba(251,191,36,0.12)] hover:-translate-y-1" style={{ "--i": i }}
            >
  
              {/* Top gradient line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 
              {/* Icon & Title */}
              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-pink-400/10 border border-pink-400/20 flex items-center justify-center text-pink-400 text-xl group-hover:bg-pink-400/20 group-hover:scale-110 transition-all duration-300">
                  {s.icon}
                </div>
 
                <h3 className="roboto text-white font-bold text-lg leading-snug group-hover:text-pink-300 transition-colors duration-200">
                  {s.title}
                </h3> 
              </div>
 
              {/* Description */}
              <p className="open-sans text-white/75 leading-relaxed flex-1">
                {s.desc}
              </p>
 
              {/* Bottom underline */}
              <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
 
              {/* Learn More */}
              <Link to={s.href}
                className="open-sans inline-flex items-center gap-2 text-white font-semibold group-hover:text-pink-400 transition-colors duration-200 mt-auto"
              >
                Learn More 
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
