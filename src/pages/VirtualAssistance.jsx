import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"; 

const solutions = [
  { 
    id: 1, title: "Customer Support", 
    services:[
      "Handle chat support",
      "Manage refund and return requests",
      "Resolve customer complaints",
      "Check delivery status",
    ]
  },
  { 
    id: 2, title: "Order Processing", 
    services:[
      "Receive orders",
      "Verify payments",
      "Check shipping addresses",
      "Forward orders to the supplier or warehouse",
      "Send tracking numbers to customers",
    ]
  },
  { 
    id: 3, title: "Product Listing", 
    services:[
      "Add new products",
      "Write product titles and descriptions",
      "Set product prices",
      "Upload product images",
      "Select categories and keywords",
      "Check whether products are active or inactive",
    ]
  },
]

const VirtualAssistance = () => {
  return (
    <>
    <Header/>
    <section className="relative overflow-hidden" style={{background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)",}}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }
          .nl:hover::after { transform: scaleX(1); }
        
        .virtual-hero {
          background-image: linear-gradient(120deg, rgba(10, 17, 40, 0.95) 0%, rgba(10, 17, 40, 0.65) 45%, rgba(10, 17, 40, 0.8) 100%), url('/images/virtual-assistance.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: scroll;
        }
      `}</style> 
      
      {/* Hero Section */}
      <div className="virtual-hero relative overflow-hidden flex items-center min-h-[36.7vh] md:min-h-[71vh]">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 max-w-8xl mx-auto gap-5 p-8 md:p-12 lg:p-16">

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="open-sans text-pink-400 text-xs font-semibold tracking-widest uppercase">
                Virtual Assistance
              </span>
            </div>
      
            <div className="my-5">
              <h2 className="roboto text-pink-400 text-2xl leading-relaxed">
                Professional Virtual Assistance to Keep Your Business Running Efficiently
              </h2>

              <p className="open-sans text-white my-3">Running a successful business requires time, organization, and consistent execution. 
                At OOS Solution, our Virtual Assistance services help businesses streamline daily operations by managing administrative 
                tasks, customer communications, scheduling, research, documentation, and business support activities. 
                We become an extension of your team, allowing you to focus on strategic decisions while we handle the day-to-day responsibilities.
              </p>

              <span className="roboto text-2xl font-bold text-pink-400">Stay Organized. Save Time. Focus on Growth.</span>
            </div>
      
            {/* CTA Buttons */}
            <div className="open-sans flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(236,72,153,0.5)] text-sm uppercase tracking-wider">
                Get a Free Consultation <FaArrowRight className="text-xs" />
              </button> 
              
              <button className="flex items-center gap-2 bg-transparent border-2 border-white/40 hover:border-white text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 text-sm uppercase tracking-wider">
                Hire a Virtual Assistant <FaArrowRight className="text-xs" />
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
          Smart Business Support for <span className="text-pink-400">Modern Organizations</span>
        </h2>

        <p className="open-sans max-w-4xl mx-auto text-white text-lg">As businesses grow, administrative responsibilities also increase. 
          Managing emails, calendars, customer inquiries, reports, appointments, documentation, and operational tasks 
          can consume valuable time that could otherwise be invested in growing the business.

          <br /> <br />

          As businesses grow, administrative responsibilities also increase. Managing emails, calendars, customer inquiries, 
          reports, appointments, documentation, and operational tasks can consume valuable time that could otherwise be 
          invested in growing the business.

          <br /><br />

          Whether you're an entrepreneur, startup, growing company, or established enterprise, our virtual assistants help improve 
          operational efficiency, enhance customer experience, and reduce administrative workload through structured and reliable business support.
        </p>
      </div>

      {/* What We Offer */}
      <div className="space-y-8 my-10">
        <h2 className="roboto text-3xl text-center sm:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive <span className="text-pink-400">Virtual Assistance Solutions</span>
        </h2>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {solutions.map((s, i) => (
          <div
            key={i}
            className="group relative bg-white/3 backdrop-blur-sm border border-white/8 rounded-xl p-6 flex flex-col gap-2 cursor-pointer transition-all duration-300 hover:border-pink-400/40 hover:bg-white/8 hover:shadow-[0_0_24px_rgba(251,191,36,0.12)] hover:-translate-y-1"
          >
            
            {/* Top gradient line */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
         
            {/* Title */}
            <h3 className="roboto text-white text-lg font-bold leading-snug group-hover:text-pink-300 transition-colors duration-200">
              {s.title}
            </h3>

            {/* List of Services */}
            <ul className="space-y-2"> 
              {s.services.map((feat, index) => (

                <li key={index} className="text-white/75">
                  <span className="open-sans">🌟 {feat}</span>
                </li>
              ))}
            </ul>

            {/* Bottom underline */}
            <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
          </div>
        ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className="py-10 px-5 rounded text-white" style={{background: "linear-gradient(135deg, #4a109b 0%, #670dbc 30%, #e32685 100%)"}}>
        <h2 className="roboto text-xl">Ready to Delegate Smarter and Grow Faster?</h2>

        <p className="open-sans my-3">
          Whether you need help managing daily administrative tasks, supporting customers, coordinating operations, 
          conducting research, or improving business efficiency, OOS Solution provides reliable Virtual Assistance services 
          tailored to your unique business needs.
            <br />
          Our experienced professionals become an extension of your team, helping you stay organized, improve productivity, 
          and focus on what matters most—growing your business.
        </p>

        <span className="roboto font-semibold">Become a Partner with OOS Solution and let us handle the details while you drive your business forward.</span>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default VirtualAssistance