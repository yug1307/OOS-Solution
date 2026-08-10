import React from 'react'
import { FaCompassDrafting, FaSitemap, FaLaptopCode, FaRocket, FaArrowRight, FaUserTie,
  FaChartLine, FaLightbulb, FaHandshake } from "react-icons/fa6";
import Figures from './Figures'
import WhyChooseUs from './WhyChooseUs';
import { Link } from 'react-router-dom';

const Process = [
  { icon: <FaCompassDrafting />, title: "01. Discover", desc: "We analyze your requirements and understand your goals." },
  { icon: <FaSitemap />, title: "02. Plan", desc: "We create a strategy tailored to you." },
  { icon: <FaLaptopCode />, title: "03. Execute", desc: "We implement and optimize every detail." },
  { icon: <FaRocket />, title: "04. Deliver", desc: "We deliver results that grow your business." }
]

const Methodology = () => {
  return (
    <>
      <section className="">
        
        <style>{` 
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }
        `}</style>
      </section>
            <WhyChooseUs/>
            {/* <Figures/> */}

      {/* Our Process */} 
      <section className="py-10 space-y-10">
        <div className="md:px-10 px-4 rounded-xl space-y-6">
          
          {/* Eyebrow tag */}
          <div className="flex justify-center">
            <div className="open-sans inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-pink-400 text-xs font-semibold tracking-widest uppercase">
                Our Process
              </span>
            </div>
          </div>

          <p className="roboto text-white text-center md:text-[3.8vh] text-4xl">Simple Steps, <span className="text-pink-400">Big Results</span></p>

          <div className="grid grid-cols-1 lg:grid-cols-4 max-w-8xl mx-auto gap-4">
            {Process.map((steps, index) => (

              <div 
                key={index} 
                className="group relative hover:bg-[#0a0f1e] backdrop-blur-sm border border-white/8 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-pink-400/40 hover:shadow-[0_0_24px_rgba(251,191,36,0.12)] hover:-translate-y-1">

                {/* Top gradient line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon & Title */}
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-pink-400/10 border border-pink-400/20 flex items-center justify-center text-pink-400 text-xl group-hover:bg-pink-400/20 group-hover:scale-110 transition-all duration-300">
                    {steps.icon}
                  </div>
                
                  <h3 className="open-sans text-pink-400 font-semibold text-lg">{steps.title}</h3>
                </div>

                <p className="open-sans text-white/75 mt-2">{steps.desc}</p>

                {/* Bottom underline */}
                <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */} 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-violet-600 py-10 md:px-5 mx-5 md:mx-5 rounded-lg"
          style={{ background: "linear-gradient(135deg, #4a109b 0%, #670dbc 30%, #F544A8 100%)" }}>

          <div className="roboto sm:text-left text-center text-white/100">

            <h2 className="text-2xl">Ready to Grow Your Business?</h2>
            <p className="text-lg text-gray-300">Let's build something amazing together.</p>
          </div>
        
          <div className="open-sans flex justify-center">
            <Link to="/contact" className="flex py-3 justify-center border w-48 rounded-md">
              <div className="text-white flex items-center justify-center gap-2 font-semibold">Learn More <FaArrowRight/></div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Methodology