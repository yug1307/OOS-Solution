"use client";

import { FaArrowRight, FaStore, FaChartLine, FaTag, FaHeadset, FaAmazon, FaShopify, FaShoppingCart } from "react-icons/fa";

const features = [
  { icon: <FaStore />, label: "Marketplace Experts" },
  { icon: <FaChartLine />, label: "Result Driven Strategies" },
  { icon: <FaTag />, label: "Affordable Solutions" },
  { icon: <FaHeadset />, label: "24/7 Dedicated Support" },
];

export default function EcommerceHero() { 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }

        .ecommerce-hero {
          background-image: linear-gradient(120deg, rgba(10, 17, 40, 0.95) 0%, rgba(10, 17, 40, 0.65) 45%, rgba(10, 17, 40, 0.8) 100%), url('/images/hero.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
          .fade-1 { animation: fadeInUp 0.6s ease both; }
          .fade-2 { animation: fadeInUp 0.6s ease 0.15s both; }
          .fade-3 { animation: fadeInUp 0.6s ease 0.30s both; }
          .fade-4 { animation: fadeInUp 0.6s ease 0.45s both; }
      `}</style>

      <section className="ecommerce-hero bg-[#0a1128] md:h-[60vh] h-[auto] flex items-center">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* ── LEFT: Text Content ── */}
          <div className="flex flex-col gap-6">

            {/* Heading */}
            <h1 className="fade-1 roboto text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Grow Your Business with{" "}
              <br className="hidden sm:block" />
              Smart{" "}
              <span className="text-pink-500">eCommerce &</span>
              <br />
              <span className="text-pink-500">Digital Solutions</span>
            </h1>

            {/* Subtext */}
            <p className="fade-2 open-sans text-blue-200/80 text-lg leading-relaxed max-w-md">
              We help brands scale on leading marketplaces and build powerful digital presence.
            </p>

            {/* Feature pills */}
            <div className="fade-3 grid grid-cols-2 gap-x-6 gap-y-3">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2 text-blue-100 text-lg">
                  <span className="text-pink-400">{f.icon}</span>
                  <span className="open-sans">{f.label}</span>
                </div>
              ))} 
            </div>

            {/* CTA Buttons */}
            <div className="fade-4 open-sans flex flex-wrap gap-4 mt-2 text-lg">
              <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(236,72,153,0.5)] uppercase tracking-wider">
                Get Started <FaArrowRight className="text-xs" />
              </button> 
              
              <button className="flex items-center gap-2 bg-transparent border-2 border-white/40 hover:border-white text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 uppercase tracking-wider">
                Our Services <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
