import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const solutions = [
  { id: 1, title: "Marketplace Account Setup", desc: "We create and configure professional seller accounts while ensuring compliance with platform-specific guidelines and requirements." },
  { id: 2, title: "Product Listing Optimization", desc: "Our specialists create compelling product listings with optimized titles, descriptions, keywords, images, and attributes to improve search visibility and conversion rates." },
  { id: 3, title: "Inventory Management", desc: "Maintain accurate inventory across multiple marketplaces to prevent overselling, stock shortages, and order cancellations." },
  { id: 4, title: "Order Processing", desc: "We efficiently manage order confirmations, shipment tracking, returns, and customer communication for smooth business operations." },
  { id: 5, title: "Marketplace SEO", desc: "Improve your product rankings through keyword research, optimized content, backend search terms, and category optimization." },
  { id: 6, title: "Advertising & Promotions", desc: "Increase product visibility through sponsored ads, promotional campaigns, discounts, and seasonal marketing strategies." },
  { id: 7, title: "Competitor Analysis", desc: "Stay ahead of the competition by analyzing pricing, listings, market trends, and competitor performance." },
  { id: 8, title: "Performance Monitoring", desc: "Track key marketplace metrics including sales, conversion rates, traffic, Buy Box performance, and customer feedback." },
  { id: 9, title: "Customer Support Management", desc: "Deliver timely responses to customer inquiries, returns, refunds, and post-purchase support to maintain high seller ratings." },
  { id: 10, title: "Policy Compliance", desc: "Ensure your business complies with marketplace policies to reduce the risk of account suspension or listing removal." }
]

const MarketplaceManagement = () => {
  return (
    <>
    <Header/>
    <section className="relative overflow-hidden" style={{background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)",}}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display;=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }
          .nl:hover::after { transform: scaleX(1); } 
        
        .market-hero {
          background-image: linear-gradient(120deg, rgba(10, 17, 40, 0.95) 0%, rgba(10, 17, 40, 0.65) 45%, rgba(10, 17, 40, 0.8) 100%), url('/images/market-management.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: scroll;
        }
      `}</style>
      
      {/* Hero Section */}
      <div className="market-hero relative overflow-hidden min-h-[36.7vh] md:min-h-[61vh]">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 max-w-8xl mx-auto gap-5 p-8 md:p-12 lg:p-16">

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="open-sans text-pink-400 text-xs font-semibold tracking-widest uppercase">
                Marketplace Management
              </span>
            </div>
      
            <div className="my-5">
              <h2 className="roboto text-pink-400 text-2xl leading-relaxed">
                End-to-end solutions to grow your business across marketplace and digital platforms.
              </h2>
 
              <p className="open-sans text-white my-3">Managing multiple online marketplaces can be challenging. At OOS Solution, we simplify 
                the process by handling everything from product listings and inventory synchronization to order processing, 
                advertising, and performance optimization. Our experts help you maximize visibility, improve customer satisfaction, 
                and increase revenue across leading e-commerce platforms.
              </p>

              <span className="roboto text-2xl font-bold text-pink-400">Build. Optimize. Scale.</span>
            </div>
      
            {/* CTA Buttons */}
            <div className="open-sans flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(2,132,199,0.6)] text-sm uppercase tracking-wider">
                Get a Free Consultation <FaArrowRight className="text-xs" />
              </button> 
              
              <button className="flex items-center gap-2 bg-transparent border-2 border-white/40 hover:border-white text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 text-sm uppercase tracking-wider">
                Request a Quote <FaArrowRight className="text-xs" />
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
          Simplifying <span className="text-pink-400">Marketplace Success</span>
        </h2>

        <p className="open-sans max-w-4xl mx-auto text-white text-lg">Online marketplaces have become one of the fastest-growing sales channels for businesses worldwide. 
          However, succeeding on platforms like Amazon, Flipkart, Walmart, eBay, Etsy, and others requires more than 
          simply listing products.

          <br /> <br />

          Our Marketplace Management services provide end-to-end support to help businesses establish a strong presence, 
          improve product discoverability, streamline operations, and drive sustainable growth. Whether you're launching your 
          first marketplace store or managing thousands of SKUs across multiple platforms, we ensure every aspect of your 
          marketplace operations is optimized for success.
        </p>
      </div>

      {/* What We Offer */}
      <div className="space-y-8 my-10">
        <h2 className="roboto text-3xl text-center sm:text-5xl font-extrabold text-white tracking-tight">
          Complete <span className="text-pink-400">Marketplace Management Solutions</span>
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
        <h2 className="roboto text-xl">Ready to Grow Your Marketplace Business?</h2>

        <p className="open-sans my-3">Whether you're starting your marketplace journey or looking to scale an existing store, 
          OOS Solution delivers expert management, strategic optimization, and continuous support to help you achieve sustainable growth.
        </p>

        <span className="roboto font-semibold">Let's build a stronger marketplace presence together.</span>
      </div>
    </section> 
    <Footer/>
    </>
  )
}

export default MarketplaceManagement