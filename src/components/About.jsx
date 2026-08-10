import React from "react";
import Header from './Header'
import Footer from './Footer'
import { FaHandshake, FaLightbulb, FaMedal, FaHeadset, FaBullseye, FaEye, FaRocket, FaShield, 
  FaStar, FaUsers, FaHeart } from "react-icons/fa6";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const qualities = [
  { icon: <FaHandshake className="text-pink-400" size={24} />, title: "Client Focused", desc: "Your success is our priority" },
  { icon: <FaLightbulb className="text-pink-400" size={24} />, title: "Innovative Solutions", desc: "We leverage the latest technologies" },
  { icon: <FaMedal className="text-pink-400" size={24} />, title: "Quality Driven", desc: "Excellence in every project we deliver" },
  { icon: <FaHeadset className="text-pink-400" size={24} />, title: "Reliable Support", desc: "We're with you, always" },
]

const VisionMission = [
  { 
    icon: <FaBullseye className="text-pink-400" size={24} />, title: "Our Mission", desc: [`To empower businesses with innovative and scalable IT solutions that drive efficiency,
    growth, and transformation. We are committed to delivering high-quality services with integrity, transparency, 
    and a customer-first approach.`] 
  },
  { 
    icon: <FaEye className="text-pink-400" size={24} />, title: "Our Vision", desc: [`To be a trusted global technology partner recognized for delivering cutting-edge solutions
    that create value, inspire innovation, and make a positive impact on businesses and society.`] 
  }
]

const coreValues = [
  { 
    icon: <FaRocket className="text-pink-400" size={24} />, title: "Innovation", 
    desc: [`We embrace new ideas and technologies to create better solutions.`] 
  },
  { 
    icon: <FaShield className="text-pink-400" size={24} />, title: "Integrity", 
    desc: [`We operate with honesty, transparency, and strong ethics.`] 
  },
  { 
    icon: <FaStar className="text-pink-400" size={24} />, title: "Excellence", 
    desc: [`We are commited to the highest standards in everything we do.`] 
  },
  {
    icon: <FaUsers className="text-pink-400" size={24} />, title: "Teamwork", 
    desc: [`We believe in collaboration and the power of shared success.`] 
  },
  { 
    icon: <FaHeart className="text-pink-400" size={24} />, title: "Customer Focus",  
    desc: [`Our customers' success drives our passion and purpose.`] 
  }
]

const About = () => {
  return (
    <>
    <Header/>
      <style>{` 
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }

        .about-hero {
          background-image: linear-gradient(120deg, rgba(10, 17, 40, 0) 0%, rgba(10, 17, 40, 0) 45%, rgba(10, 17, 40, 0) 100%), url('/images/about.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat; 
        }
      `}</style>

      <section className="relative overflow-hidden flex items-center justify-center about-hero min-h-[75vh]">
        <div className="absolute inset-0 bg-slate-950/70" />

        {/* Who We Are? */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto py-14 px-5 md:px-8">
         
              <h2 className="roboto text-white text-center text-4xl sm:text-5xl font-semibold leading-tight">
                Who <span className="text-pink-400">We Are?</span>
              </h2>

              <p className="open-sans text-white/75 text-center text-lg my-7">OOS Solution is a forward-thinking IT company that delivers custom technology solutions to help business
              grow, innovate, and succeed in the digital era.
                <br />
              From startups to enterprises, we partner with our clients to turn ideas into powerful digital experiences through 
              creativity, technology, and dedication.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-7xl mx-auto">
                {qualities.map((gun, index) => (

                  <div 
                    key={index} 
                    className="group relative border border-white/8 rounded-xl p-4 cursor-pointer transition-all duration-300 
                    text-center hover:border-pink-400/40 hover:shadow-[0_0_24px_rgba(251,191,36,0.12)] hover:-translate-y-1">
                    
                    {/* Top gradient line */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex flex-col items-center mb-2">{gun.icon}</div>
                    <h3 className="roboto text-white text-xl font-semibold">{gun.title}</h3>
                    <p className="open-sans text-white/75">{gun.desc}</p>

                    {/* Bottom underline */}
                    <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
                  </div>
                ))}
              </div>
          </div>
        </div>
      </section>

      <section className="" style={{ background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)", }}>

        {/* Our Mission & Vision */}
        <div className="py-14 px-5 md:px-8 space-y-9 border-t border-white">
          <h2 className="roboto text-gray-300 text-center text-4xl sm:text-5xl font-semibold leading-tight">
            Our <span className="text-pink-400">Mission & Vision</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {VisionMission.map((vm, index) => (
              <div 
                key={index} 
                className="group relative border border-white/8 rounded-xl p-4 cursor-pointer transition-all duration-300 
                hover:border-pink-400/40 hover:shadow-[0_0_24px_rgba(251,191,36,0.12)] hover:-translate-y-1">

                {/* Top gradient line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <h3 className="roboto text-white text-xl font-semibold mb-3 flex items-center gap-2">{vm.icon} {vm.title}</h3>
                <p className="open-sans text-white/75">{vm.desc}</p>

                {/* Bottom underline */}
                <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Our Core Values */}
        <div className="py-14 px-5 md:px-8 space-y-9 border-t">
          <h2 className="ff text-gray-300 text-center text-4xl sm:text-5xl font-semibold leading-tight">
            Our <span className="text-pink-400">Core Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {coreValues.map((cv, index) => (
              <div 
                key={index} 
                className="group relative border border-white/8 rounded-xl p-4 cursor-pointer transition-all duration-300 
                text-center hover:border-pink-400/40 hover:shadow-[0_0_24px_rgba(251,191,36,0.12)] hover:-translate-y-1">
                
                {/* Top gradient line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col items-center mb-2">{cv.icon}</div>
                <h3 className="text-white text-xl font-semibold">{cv.title}</h3>
                <p className="text-white/60">{cv.desc}</p>

                {/* Bottom underline */}
                <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    <Footer/>
    </>
  );
}

export default About;
