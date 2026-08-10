import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"; 

const solutions = [
  { id: 1, title: "Business Website Development", desc: "Create a professional online presence with responsive websites designed to showcase your brand, services, and business values." },
  { id: 2, title: "Custom Web Application Development", desc: "Build powerful, scalable web applications tailored to your unique business processes and operational requirements." },
  { id: 3, title: "E-Commerce Website Development", desc: "Develop secure and user-friendly online stores with advanced features that simplify product management and enhance customer experiences." },
  { id: 4, title: "Landing Page Development", desc: "Design high-converting landing pages optimized for marketing campaigns, lead generation, and product promotions." },
  { id: 5, title: "UI/UX Design", desc: "Craft visually appealing, intuitive interfaces that provide seamless navigation and exceptional user experiences across all devices." },
  { id: 6, title: "Responsive Website Development", desc: "Ensure your website performs flawlessly on desktops, tablets, and smartphones with responsive design principles." },
  { id: 7, title: "CMS Development", desc: "Build easy-to-manage websites with content management systems that allow you to update content without technical expertise." },
  { id: 8, title: "Website Maintenance & Support", desc: "Keep your website secure, updated, optimized, and running smoothly with continuous maintenance and technical support." },
  { id: 9, title: "Website Performance Optimization", desc: "Improve loading speed, responsiveness, accessibility, and overall user experience through technical optimization." },
  { id: 10, title: "Website Security", desc: "Implement industry-standard security practices to protect your website, customer information, and business data from online threats." }
]

const WebDevelopment = () => { 
  return (
    <>
    <Header/>
    <section className="relative overflow-hidden" style={{background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)",}}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }
          .nl:hover::after { transform: scaleX(1); }

        .web-hero {
          background-image: linear-gradient(120deg, rgba(10, 17, 40, 0.95) 0%, rgba(10, 17, 40, 0.65) 45%, rgba(10, 17, 40, 0.8) 100%), url('/images/web-development.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat; 
          background-attachment: scroll;
        }
      `}</style>
    
      {/* Hero Section */} 
      <div className="web-hero relative overflow-hidden flex items-center min-h-[36.7vh] md:min-h-[68vh]">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 max-w-8xl mx-auto gap-5 p-8 md:p-12 lg:p-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="open-sans text-pink-400 text-xs font-semibold tracking-widest uppercase">
                Web Development 
              </span>
            </div>
          
            <div className="my-5">
              <h2 className="roboto text-pink-400 text-2xl leading-relaxed">
                Build Powerful Websites That Drive Business Growth
              </h2>
    
              <p className="open-sans text-white my-3">Your website is more than just an online presence—it's the foundation of your 
                digital identity. At OOS Solution, we design and develop modern, responsive, and high-performing websites 
                that help businesses attract customers, strengthen their brand, and achieve measurable results. 
                From corporate websites to complex web applications, we deliver solutions that are secure, scalable, 
                and built for the future.
              </p>
    
              <span className="roboto text-2xl font-bold text-pink-400">Innovative Design. Seamless Functionality. Exceptional Performance.</span>
            </div>
 
            {/* CTA Buttons */}
            <div className="open-sans flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(236,72,153,0.5)] text-sm uppercase tracking-wider">
                Get a Free Consultation <FaArrowRight className="text-xs" />
              </button> 
                        
              <button className="flex items-center gap-2 bg-transparent border-2 border-white/40 hover:border-white text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 text-sm uppercase tracking-wider">
                Start Your Project <FaArrowRight className="text-xs" />
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
          Transforming Ideas into <span className="text-pink-400">High-Performance Websites</span>
        </h2>
    
        <p className="open-sans max-w-4xl mx-auto text-white text-lg">In today's digital world, your website is often the first interaction 
          customers have with your business. A professionally developed website builds trust, improves user experience, 
          and creates opportunities for growth.
    
          <br /> <br /> 
    
          At OOS Solution, we specialize in creating websites that combine creativity with technology. Our development process 
          focuses on performance, security, scalability, and user experience to ensure your website not only looks impressive 
          but also delivers real business value.

          <br /> <br />

          Whether you're launching a new business, redesigning an existing website, or developing a custom web application, 
          our team provides end-to-end web development solutions tailored to your goals.
        </p>
      </div>
    
      {/* What We Offer */}
      <div className="space-y-8 my-10">
        <h2 className="roboto text-3xl text-center sm:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive <span className="text-pink-400">Web Development Solutions</span>
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
        <h2 className="roboto text-xl">Ready to Build a Website That Delivers Results?</h2>
    
        <p className="open-sans my-3">Whether you're creating your first business website, upgrading an existing platform, 
          or developing a custom web application, OOS Solution is your trusted technology partner. We combine creativity, technical 
          expertise, and business strategy to deliver websites that are visually engaging, high-performing, and built to support 
          your long-term growth.
        </p>
    
        <span className="roboto font-semibold">Let's build a website that drives your business forward.</span>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default WebDevelopment 