import React from 'react'

const gallery = [
  { imgSrc: "/images/amazon-logo2.png" },
  { imgSrc: "/images/ebay-logo.png" },
  { imgSrc: "/images/shopify-logo.png" },
  { imgSrc: "/images/walmart-logo.png" },
  { imgSrc: "/images/etsy-logo.png" },
  { imgSrc: "/images/newegg-logo.png" },
  { imgSrc: "/images/rakuten-logo.png" },
  { imgSrc: "/images/bonanza-logo.png" }
]

export default function Clients() {
  return (
    <section  
      className="relative py-14 px-3 md:px-8 overflow-hidden"
    > 
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }
      `}</style> 

      {/* ── Top fade line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
      {/* ── Bottom fade line ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center">

          {/* Eyebrow tag */} 
          <div className="open-sans inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-pink-400 text-xs font-semibold tracking-widest uppercase">
              Our Integrations
            </span>
          </div>
 
          <h2 className="roboto text-4xl sm:text-4xl text-white text-center font-extrabold leading-tight tracking-tight my-5">
            We Work With The{" "}
            <span className="text-pink-400">Best Platforms</span>
          </h2>

          <p className="open-sans text-white/75 max-w-3xl mx-auto leading-relaxed">
            We integrate and manage top global platforms to help your business grow, scale, and succeed online.
          </p>

          {/* Divider */}
          <div className="mx-auto my-6 w-64 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />
        </div>

        {/* ── Platform Cards Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {gallery.map((pic, index) => (
            <div
              key={index}
              className="border rounded-xl group relative py-2 flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1"
            >

              {/* Logo */} 
              <div className="relative flex items-center justify-center h-10">
                <img
                  src={pic.imgSrc}
                  alt={pic.name}
                  className="h-10 w-[150px] object-contain filter transition-all duration-300 group-hover:scale-110"
                />
              </div>

              {/* Bottom underline */}
              <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-400 group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}