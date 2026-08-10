import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const solutions = [
  { id: 1, title: "Logo Design & Brand Identity", desc: "Create memorable logos, brand guidelines, typography, and color palettes that establish a strong and consistent brand identity." },
  { id: 2, title: "Social Media Graphics", desc: "Design engaging posts, stories, banners, advertisements, and promotional creatives that increase engagement across social media platforms." },
  { id: 3, title: "Marketing & Promotional Materials", desc: "Develop professional brochures, flyers, posters, banners, catalogs, business cards, and promotional materials that effectively communicate your brand." },
  { id: 4, title: "Website & UI Graphics", desc: "Design custom website banners, icons, illustrations, landing page graphics, and user interface elements that enhance digital experiences." },
  { id: 5, title: "Presentation Design", desc: "Create visually compelling business presentations, company profiles, pitch decks, and corporate proposals that leave a professional impression." },
  { id: 6, title: "Infographics", desc: "Transform complex information into attractive and easy-to-understand visual graphics that improve communication and audience engagement." },
  { id: 7, title: "Product Packaging Design", desc: "Design creative and market-ready packaging solutions that enhance product appeal and strengthen brand recognition." },
  { id: 8, title: "Advertising Creatives", desc: "Develop eye-catching digital and print advertisements optimized for campaigns across Google, social media, websites, and offline marketing channels." },
  { id: 9, title: "Corporate Branding", desc: "Maintain a consistent visual identity across all business assets, ensuring your brand looks professional across every touchpoint." },
  { id: 10, title: "Print Design", desc: "Create high-quality print-ready materials, including magazines, certificates, event materials, invitations, and promotional merchandise." }
]

const GraphicDesign = () => {
  return (
    <>
    <Header/> 
    <section className="relative overflow-hidden" style={{background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)",}}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }
          .nl:hover::after { transform: scaleX(1); }
        
        .graphic-hero {
          background-image: linear-gradient(120deg, rgba(10, 17, 40, 0.95) 0%, rgba(10, 17, 40, 0.65) 45%, rgba(10, 17, 40, 0.8) 100%), url('/images/graphic-design.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: scroll;
        }
      `}</style> 
      
      {/* Hero Section */}
      <div className="graphic-hero relative overflow-hidden min-h-[36.7vh] md:min-h-[61vh]">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 max-w-8xl mx-auto gap-5 p-8 md:p-12 lg:p-16">

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="open-sans text-pink-400 text-xs font-semibold tracking-widest uppercase">
                Graphic Design
              </span>
            </div>
      
            <div className="my-5">
              <h2 className="roboto text-pink-400 text-2xl leading-relaxed">
                Creative Designs That Build Brands and Inspire Action
              </h2>

              <p className="open-sans text-white my-3">Visual communication plays a crucial role in shaping your brand identity and influencing 
                customer decisions. At OOS Solution, we create compelling graphic designs that combine creativity, strategy, and 
                innovation to help businesses stand out in today's competitive marketplace. From logos and marketing materials to 
                social media creatives and corporate branding, we design visuals that leave a lasting impression.
              </p>

              <span className="roboto text-2xl font-bold text-pink-400">Creative Designs. Stronger Brands. Lasting Impact.</span>
            </div>
      
            {/* CTA Buttons */}
            <div className="open-sans flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(2,132,199,0.6)] uppercase tracking-wider">
                Get a Free Consultation <FaArrowRight className="text-xs" />
              </button> 
              
              <button className="flex items-center gap-2 bg-transparent border-2 border-white/40 hover:border-white text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 uppercase tracking-wider">
                Start Your Design Project <FaArrowRight className="text-xs" />
              </button> 
            </div>
          </div>
        </div>
      </div>
    </section> 
    
    <section className="py-20 px-6" style={{background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)",}}>

      {/* Overview */}
      <div className="space-y-8">
        <h2 className="roboto text-3xl text-center sm:text-5xl font-extrabold text-white tracking-tight">
          Transforming Ideas into <span className="text-pink-400">Powerful Visual Experiences</span>
        </h2>

        <p className="open-sans max-w-4xl mx-auto text-white text-lg">Great design is more than aesthetics—it's about communicating your 
          brand's message effectively. Whether you're launching a new business, refreshing your brand identity, or promoting 
          products and services, professionally designed visuals enhance credibility and improve customer engagement.

          <br /> <br />

          At OOS Solution, we combine creative thinking with market insights to develop designs that are visually appealing, 
          brand-consistent, and results-driven. Every design is carefully crafted to strengthen your business identity 
          and connect with your target audience.
        </p>
      </div>

      {/* What We Offer */}
      <div className="space-y-8 my-10">
        <h2 className="roboto text-3xl text-center sm:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive <span className="text-pink-400">Graphic Design Solutions</span>
        </h2>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {solutions.map((s, i) => (
          <div
          key={i}
          className="group relative bg-white/3 backdrop-blur-sm border border-white/8 rounded-xl p-6 flex flex-col gap-2 cursor-pointer transition-all duration-300 hover:border-pink-400/40 hover:bg-white/8 hover:shadow-[0_0_24px_rgba(251,191,36,0.12)] hover:-translate-y-1"
          >
            
            {/* Top gradient line */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
         
            {/* Title */}
            <h3 className="roboto text-white font-bold text-lg leading-snug group-hover:text-pink-300 transition-colors duration-200">
              {s.title}
            </h3>
         
            {/* Description */}
            <p className="open-sans text-white/75 leading-relaxed flex-1">
              {s.desc}
            </p>
         
            {/* Bottom underline */}
            <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
          </div>
        ))} 
        </div>
      </div>

      {/* Call To Action */}
      <div className="py-10 px-5 rounded text-white" style={{background: "linear-gradient(135deg, #4a109b 0%, #670dbc 30%, #e32685 100%)"}}>
        <h2 className="roboto text-xl">Ready to Elevate Your Brand with Exceptional Design?</h2>

        <p className="open-sans my-3">Whether you need a distinctive logo, impactful marketing materials, 
        engaging social media graphics, or a complete brand identity, OOS Solution delivers creative graphic design solutions 
        that help your business stand out. Our team blends creativity, strategy, and attention to detail to create visuals 
        that inspire trust, strengthen your brand, and support long-term business growth.
        </p> 

        <span className="roboto font-semibold">Let's turn your ideas into designs that make a lasting impression.</span>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default GraphicDesign