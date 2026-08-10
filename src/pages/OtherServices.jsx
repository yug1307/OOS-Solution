import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"; 

const solutions = [
  { 
    id: 1, title: "Data Entry & Data Management", 
    desc: [`Maintain accurate, organized, and secure business information through professional data entry services. 
    We ensure consistency, eliminate duplication, validate information, and organize records to improve operational efficiency.`],
    services:[
      "Data entry and processing",
      "Data validation and verification",
      "Database creation and maintenance",
      "Document digitization",
      "Spreadsheet management",
      "CRM data updates",
      "Product data management",
      "Data cleansing and formatting",
      "Report preparation",
      "Business record management"
    ]
  },
  { 
    id: 2, title: "Inventory Management", 
    desc: [`Efficient inventory management ensures the right products are available at the right time while minimizing operational costs. 
    We help businesses maintain accurate inventory records, improve stock visibility, and optimize inventory workflows.`],
    services:[
      "Inventory tracking",
      "Stock level monitoring",
      "Product catalog management",
      "SKU management",
      "Warehouse inventory updates",
      "Purchase order management",
      "Stock reconciliation",
      "Inventory reporting",
      "Supplier coordination",
      "Inventory optimization"
    ]
  },
  { 
    id: 3, title: "CRM Management", 
    desc: [`Customer Relationship Management plays a critical role in maintaining long-term customer relationships and 
    improving business performance. We help businesses organize customer information, manage sales pipelines, and 
    improve customer engagement through efficient CRM administration.`],
    services:[
      "CRM setup and configuration",
      "Customer database management",
      "Lead management",
      "Contact management",
      "Sales pipeline updates",
      "Customer interaction tracking",
      "Task scheduling",
      "Opportunity management",
      "CRM reporting",
      "Workflow automation support"
    ]
  },
]

const OtherServices = () => {
  return (
    <>
    <Header/>
    <section className="relative overflow-hidden" style={{background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)",}}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }
          .nl:hover::after { transform: scaleX(1); }
        
        .other-hero {
          background-image: linear-gradient(120deg, rgba(10, 17, 40, 0.95) 0%, rgba(10, 17, 40, 0.65) 45%, rgba(10, 17, 40, 0.8) 100%), url('/images/other-services.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: scroll;
        }
      `}</style> 
      
      {/* Hero Section */}
      <div className="other-hero relative overflow-hidden min-h-[36.7vh] md:min-h-[61vh]">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 max-w-8xl mx-auto gap-5 p-8 md:p-12 lg:p-16">

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="open-sans text-pink-400 text-xs font-semibold tracking-widest uppercase">
                Business Process & Operations Management
              </span>
            </div>
      
            <div className="my-5">
              <h2 className="roboto text-pink-400 text-2xl leading-relaxed">
                Streamline Your Operations with Reliable Business Process Management Solutions
              </h2>

              <p className="open-sans text-white my-3">Efficient business operations are the backbone of every successful organization. 
                At OOS Solution, we provide professional Business Process & Operations Management services that help businesses
                maintain accurate data, optimize inventory, and strengthen customer relationships. By combining technology with 
                operational expertise, we help you improve productivity, reduce manual effort, and make informed business decisions.
              </p>

              <span className="roboto text-2xl font-bold text-pink-400">Organize Better. Operate Smarter. Grow Faster.</span>
            </div>
      
            {/* CTA Buttons */}
            <div className="open-sans flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(2,132,199,0.6)] uppercase tracking-wider">
                Get a Free Consultation <FaArrowRight className="text-xs" />
              </button> 
              
              <button className="flex items-center gap-2 bg-transparent border-2 border-white/40 hover:border-white text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 uppercase tracking-wider">
                Optimize Your Operations <FaArrowRight className="text-xs" />
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
          Improving Business Efficiency Through <span className="text-pink-400">Intelligent Operations Management</span>
        </h2>

        <p className="open-sans max-w-4xl mx-auto text-white text-lg">Managing business operations involves much more than maintaining spreadsheets 
          or updating customer information. Every transaction, inventory update, and customer interaction contributes to the 
          overall success of your organization.

          <br /> <br />

          Our Business Process & Operations Management services are designed to simplify day-to-day operations while ensuring accuracy,
          consistency, and efficiency. Whether you need structured data management, real-time inventory tracking, or organized customer 
          relationship management, our experienced team provides reliable support that enables your business to focus on strategic growth.

          <br /><br />

          By leveraging industry best practices, standardized workflows, and modern business management tools, we help organizations 
          reduce operational bottlenecks, improve collaboration, and enhance customer satisfaction.
        </p>
      </div>

      {/* What We Offer */}
      <div className="space-y-8 my-10">
        <h2 className="roboto text-3xl text-center sm:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive <span className="text-pink-400">Business Process Management Solutions</span>
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
         
            {/* Description */}
            <p className="open-sans text-white/75 leading-relaxed flex-1">
              {s.desc} 
            </p>

            {/* List of Services */}
            <ul className="text-left space-y-2"> 
              {s.services.map((feat, index) => (

                <li key={index} className="flex items-start gap-2 text-white/75">
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
        <h2 className="roboto text-xl">Ready to Simplify Your Business Operations?</h2>

        <p className="open-sans my-3">
          Whether you need organized data management, efficient inventory control, or a streamlined CRM system, OOS Solution 
          provides reliable Business Process & Operations Management services that improve efficiency, reduce administrative 
          burden, and support sustainable business growth. Our experienced team combines operational expertise with 
          modern technology to help your organization stay organized, productive, and customer-focused.
        </p>
 
        <span className="roboto font-semibold">Let OOS Solution manage your operations—so you can focus on growing your business.</span>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default OtherServices