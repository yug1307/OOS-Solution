import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"; 

const solutions = [
  { id: 1, title: "Custom E-Commerce Website Development", desc: "Develop fully customized online stores tailored to your products, customers, and business workflows." },
  { id: 2, title: "Shopify Store Development", desc: "Build powerful Shopify stores with custom themes, advanced functionality, and seamless third-party integrations." },
  { id: 3, title: "WooCommerce Development", desc: "Create flexible WooCommerce stores that provide complete control over products, payments, and content management." },
  { id: 4, title: "Multi-Vendor Marketplace Development", desc: "Develop marketplace platforms where multiple vendors can manage products, orders, and customers from a centralized system." },
  { id: 5, title: "Mobile-Responsive Store Development", desc: "Deliver seamless shopping experiences across desktops, tablets, and smartphones." },
  { id: 6, title: "Product Catalog Management", desc: "Organize products with intelligent categorization, filtering, search capabilities, product variants, and inventory management." },
  { id: 7, title: "Secure Payment Gateway Integration", desc: "Integrate trusted payment gateways for fast, reliable, and secure online transactions." },
  { id: 8, title: "Shipping & Logistics Integration", desc: "Connect your store with shipping providers for automated shipping calculations, tracking, and order fulfillment." },
  { id: 9, title: "Third-Party Integrations", desc: "Integrate ERP, CRM, accounting software, inventory systems, marketplaces, marketing platforms, and automation tools." },
  { id: 10, title: "Store Migration & Modernization", desc: "Migrate your existing online store to modern platforms without compromising data integrity or customer experience." }
]

const EcommerceDevelopment = () => {
  return (
    <>
    <Header/>
    <section className="relative overflow-hidden" style={{background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)",}}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }
          .nl:hover::after { transform: scaleX(1); }
        
        .ecommerce-hero { 
          background-image: linear-gradient(120deg, rgba(10, 17, 40, 0.95) 0%, rgba(10, 17, 40, 0.65) 45%, rgba(10, 17, 40, 0.8) 100%), url('/images/ecommerce-development.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: scroll;
        }
      `}</style>
      
      {/* Hero Section */}
      <div className="ecommerce-hero relative overflow-hidden flex items-center min-h-[36.7vh] md:min-h-[87vh]">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 max-w-8xl mx-auto gap-5 p-8 md:p-12 lg:p-16">

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="open-sans text-pink-400 text-xs font-semibold tracking-widest uppercase">
                E-Commerce Development
              </span>
            </div>
      
            <div className="my-5">
              <h2 className="roboto text-pink-400 text-2xl leading-relaxed">
                Build High-Converting E-Commerce Stores That Drive Sales
              </h2>

              <p className="open-sans text-white my-3">Your online store is more than just a website—it's your digital storefront, 
                sales representative, and customer experience hub. At OOS Solution, we develop secure, scalable, 
                and conversion-focused e-commerce solutions that help businesses sell smarter, streamline operations, and 
                grow confidently in the digital marketplace. Whether you're launching a new online store or modernizing an existing one, 
                we build platforms designed for performance, flexibility, and long-term success.
              </p>

              <span className="roboto text-2xl font-bold text-pink-400">Sell Smarter. Scale Faster. Grow Without Limits.</span>
            </div>
      
            {/* CTA Buttons */}
            <div className="open-sans flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(2,132,199,0.6)] uppercase tracking-wider">
                Get a Free Consultation <FaArrowRight className="text-xs" />
              </button> 
               
              <button className="flex items-center gap-2 bg-transparent border-2 border-white/40 hover:border-white text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 uppercase tracking-wider">
                Build Your Online Store <FaArrowRight className="text-xs" />
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
          Transforming Online Stores into <span className="text-pink-400">Growth Engines</span>
        </h2>
 
        <p className="open-sans max-w-4xl mx-auto text-white text-lg">E-commerce has fundamentally changed how customers discover, compare, 
          and purchase products. Modern online businesses need more than an attractive website—they require an optimized
          shopping experience, secure payment processing, efficient inventory management, and seamless integrations that
          work together to maximize conversions.

          <br /> <br />

          At OOS Solution, we build e-commerce solutions that combine outstanding user experience, powerful functionality, 
          and scalable architecture. Our development approach focuses on intuitive navigation, fast performance, 
          mobile responsiveness, secure transactions, and future-ready technology to help businesses compete in 
          today's digital economy. Research from Shopify, Google, and Baymard consistently highlights the importance of 
          performance, navigation, mobile optimization, and SEO in delivering successful e-commerce experiences.

          <br /><br />

          Whether you're a startup, D2C brand, wholesaler, manufacturer, or enterprise retailer, we develop e-commerce 
          solutions tailored to your business model and growth objectives.
        </p>
      </div>

      {/* What We Offer */}
      <div className="space-y-8 my-10">
        <h2 className="roboto text-3xl text-center sm:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive <span className="text-pink-400">E-Commerce Development Solutions</span>
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
        <h2 className="roboto text-xl">Ready to Launch an Online Store That Sells More?</h2>

        <p className="open-sans my-3">
          Whether you're building your first e-commerce business, expanding into new markets, or upgrading an existing online store, 
          OOS Solution delivers secure, scalable, and conversion-focused e-commerce solutions tailored to your business goals. 
          We combine strategy, technology, and user-centric design to create online stores that provide exceptional customer experiences
          and support sustainable business growth.
        </p>

        <span className="roboto font-semibold">Let's build an e-commerce solution that turns visitors into loyal customers and drives long-term success.</span>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default EcommerceDevelopment