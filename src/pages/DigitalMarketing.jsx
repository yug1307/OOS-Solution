import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const solutions = [
  { id: 1, title: "Search Engine Optimization (SEO)", desc: "Improve your website's visibility on search engines through technical optimization, keyword research, content strategy, and on-page and off-page SEO techniques." },
  { id: 2, title: "Search Engine Marketing (SEM)", desc: "Drive immediate traffic and qualified leads with highly targeted pay-per-click advertising campaigns across major search engines." },
  { id: 3, title: "Social Media Marketing (SMM)", desc: "Strengthen your brand presence by creating engaging content, managing social media platforms, and running strategic advertising campaigns." },
  { id: 4, title: "Content Marketing", desc: "Develop high-quality, informative, and engaging content that builds authority, attracts customers, and supports long-term business growth." },
  { id: 5, title: "Email Marketing", desc: "Build lasting customer relationships through personalized email campaigns that increase engagement, retention, and conversions." },
  { id: 6, title: "Online Reputation Management", desc: "Monitor and enhance your online reputation by managing customer reviews, feedback, and brand perception across digital platforms." },
  { id: 7, title: "Conversion Rate Optimization (CRO)", desc: "Analyze user behavior and optimize your website and landing pages to improve conversion rates and maximize marketing performance." },
  { id: 8, title: "Analytics & Performance Tracking", desc: "Track campaign performance using advanced analytics to measure traffic, user engagement, conversions, and return on investment." },
  { id: 9, title: "Local SEO", desc: "Improve visibility in local search results and help customers discover your business within your target geographic locations." },
  { id: 10, title: "Digital Marketing Consultation", desc: "Receive expert guidance and strategic recommendations to develop effective marketing plans aligned with your business objectives." }
]

const DigitalMarketing = () => {
  return (
    <>
    <Header/>
    <section className="relative overflow-hidden" style={{background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)",}}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
        .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }
        .nl:hover::after { transform: scaleX(1); }

        .marketing-hero {
          background-image: linear-gradient(120deg, rgba(10, 17, 40, 0.95) 0%, rgba(10, 17, 40, 0.65) 45%, rgba(10, 17, 40, 0.8) 100%), url('/images/digital-marketing.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: scroll;
        }
      `}</style> 
      
      {/* Hero Section */}
      <div className="marketing-hero relative overflow-hidden flex items-center min-h-[36.7vh] md:min-h-[81vh]">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 max-w-8xl mx-auto gap-5 p-8 md:p-12 lg:p-16">

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="open-sans text-pink-400 text-xs font-semibold tracking-widest uppercase">
                Digital Marketing 
              </span>
            </div>
      
            <div className="my-5">
              <h2 className="roboto text-pink-400 text-2xl leading-relaxed">
                Accelerate Your Business Growth with Result-Driven Digital Marketing
              </h2>

              <p className="open-sans text-white my-3">In today's competitive digital landscape, having a strong online presence is 
                essential for business success. At OOS Solution, we develop customized digital marketing strategies that 
                increase brand visibility, generate qualified leads, and drive measurable business growth. 
                From SEO and social media marketing to paid advertising and content marketing, we help businesses connect 
                with the right audience at the right time.
              </p>
 
              <span className="roboto text-2xl font-bold text-pink-400">Reach More. Engage Better. Grow Faster.</span>
            </div>
      
            {/* CTA Buttons */}
            <div className="open-sans flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(2,132,199,0.6)] uppercase tracking-wider">
                Get a Free Consultation <FaArrowRight className="text-xs" />
              </button> 
               
              <button className="flex items-center gap-2 bg-transparent border-2 border-white/40 hover:border-white text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 uppercase tracking-wider">
                Grow Your Business <FaArrowRight className="text-xs" />
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
          Helping Businesses Succeed in the <span className="text-pink-400">Digital World</span>
        </h2>

        <p className="open-sans max-w-4xl mx-auto text-white text-lg">Digital marketing is more than running advertisements or posting on social media. 
          It's about creating meaningful customer experiences that build trust, generate leads, and increase conversions.

          <br /> <br />

          At OOS Solution, we combine creativity, analytics, and industry expertise to develop marketing campaigns that align 
          with your business goals. Our data-driven approach ensures every campaign delivers measurable results while maximizing your
          return on investment.

          <br /> <br />

          Whether you're a startup building brand awareness or an established business looking to scale, we provide comprehensive 
          digital marketing solutions tailored to your objectives.
        </p>
      </div>

      {/* What We Offer */}
      <div className="space-y-8 my-10">
        <h2 className="roboto text-3xl text-center sm:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive <span className="text-pink-400">Digital Marketing Solutions</span>
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
        <h2 className="roboto text-xl">Ready to Grow Your Business Online?</h2>

        <p className="open-sans my-3">Whether your goal is to increase brand awareness, generate qualified leads, 
          improve customer engagement, or drive higher sales, OOS Solution delivers customized digital marketing strategies 
          that produce measurable results. Our team combines creativity, technology, and data-driven insights to help your business 
          thrive in an ever-evolving digital landscape.
        </p>

        <span className="roboto font-semibold">Let's create a digital marketing strategy that drives lasting success.</span>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default DigitalMarketing