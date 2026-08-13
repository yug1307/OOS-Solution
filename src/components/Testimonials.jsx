import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const reviews = [
  {
    id: 1, imgSrc: "/images/review1.png", caption: "Rahul Sharma", icon: "⭐ ⭐ ⭐ ⭐", title: "Exceptional Website Development",
    desc: [`OOS Solution completely transformed our online presence. Their team built a fast, responsive, 
    and user-friendly website that exceeded our expectations. The entire process was smooth, and their support was outstanding.`],
    name: "Rahul Sharma",
    designation: "Managing Director, TechNova Solutions"
  },
  {
    id: 2, imgSrc: "/images/review2.png", caption: "Priya Mehta", icon: "⭐ ⭐ ⭐ ⭐", title: "Reliable E-Commerce Partner",
    desc: [`From marketplace management to Shopify store optimization, OOS Solution helped us streamline our operations 
    and significantly improve our online sales. Their expertise and professionalism truly stand out.`],
    name: "Priya Mehta",
    designation: "Founder, UrbanKart"
  },
  {
    id: 3, imgSrc: "/images/review1.png", caption: "Amit Verma", icon: "⭐ ⭐ ⭐ ⭐", title: "Excellent Digital Marketing Results",
    desc: [`Within a few months, we noticed a remarkable improvement in our website traffic, lead generation, and 
    social media engagement. The team understands business goals and delivers measurable results.`],
    name: "Amit Verma",
    designation: "Marketing Head, GrowthEdge Pvt. Ltd."
  },
  {
    id: 4, imgSrc: "/images/review4.png", caption: "Sneha Kulkarni", icon: "⭐ ⭐ ⭐ ⭐", title: "Professional & Dedicated Team",
    desc: [`The team at OOS Solution was responsive, knowledgeable, and committed to delivering quality work on time. 
    Their attention to detail and customer-first approach made the entire experience hassle-free.`],
    name: "Sneha Kulkarni",
    designation: "Operations Manager, Prime Ventures"
  },
  {
    id: 5, imgSrc: "/images/review1.png", caption: "Vikram Singh", icon: "⭐ ⭐ ⭐ ⭐", title: "One-Stop IT Solution Provider",
    desc: [`We were looking for a company that could handle website development, digital marketing, and marketplace management 
    under one roof. OOS Solution delivered exactly what we needed.`],
    name: "Vikram Singh",
    designation: "CEO, Nexa Commerce"
  },
  {
    id: 6, imgSrc: "/images/review2.png", caption: "Neha Joshi", icon: "⭐ ⭐ ⭐ ⭐", title: "Trusted Technology Partner",
    desc: [`What impressed us the most was their transparency and technical expertise. They understood our requirements perfectly
    and delivered a scalable solution that continues to support our business growth.`],
    name: "Neha Joshi",
    designation: "Director, Bright Future Enterprises"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalReviews = reviews.length

  const prevSlide = () => setCurrentIndex((currentIndex + totalReviews - 1) % totalReviews)
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % totalReviews)

  return (
    <section className="md:p-10 py-8 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
          .roboto { font-family: 'Roboto', sans-serif; font-weight: 700; }
          .open-sans { font-family: 'Open Sans', sans-serif; font-weight: 400; }
      `}</style>

      <h2 className="roboto text-4xl sm:text-4xl text-white text-center font-extrabold leading-tight tracking-tight">
        <span className="text-pink-400">What Our</span> Clients Say
      </h2>

      <div className="py-4"></div>

      <div className="max-w-7xl mx-auto relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-pink-500/80 p-3 text-white shadow-lg shadow-pink-500/20 hover:bg-pink-400 focus:outline-none"
          aria-label="Previous testimonials"
        >
          ‹
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, visibleIndex) => {
            const review = reviews[(currentIndex + visibleIndex) % reviews.length]

            return (
              <div
                key={review.id}
                className={`relative group bg-white/5 p-5 border border-pink-400 rounded-xl space-y-4 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] ${visibleIndex === 0 ? 'block' : 'hidden lg:block'}`}
              >
                {/* Top gradient line on hover */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <img src={review.imgSrc} alt={review.caption} className="md:h-44 w-1/2 h-40 object-cover rounded-full hover:shadow-2xl" />
                <div className="text-xl">{review.icon}</div>
                <h3 className="roboto text-white text-xl">{review.title}</h3>
                <p className="open-sans text-white/75 px-3">“{review.desc[0]}”</p>

                <div className="text-lg text-white"> 
                  <div className="roboto font-semibold">{review.name}</div>
                  <div className="open-sans">{review.designation}</div>
                </div>

                {/* Bottom gradient underline */}
                <span className="absolute bottom-0 left-4 h-[1.5px] w-0 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
              </div>
            )
          })}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-pink-500/80 p-3 text-white shadow-lg shadow-pink-500/20 hover:bg-pink-400 focus:outline-none"
          aria-label="Next testimonials"
        >
          ›
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 my-8">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors ${index === currentIndex ? 'bg-pink-400' : 'bg-white/30 hover:bg-white/60'}`}
            aria-label={`Show testimonial group starting at ${index + 1}`}
          />
        ))}
      </div>
      
      {/* CTA */} 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-violet-600 py-10 px-5 rounded-lg"
        style={{ background: "linear-gradient(135deg, #4a109b 0%, #670dbc 30%, #F544A8 100%)" }}>
      
        <div className="roboto md:text-left text-center text-white/100">    
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
  )
}

export default Testimonials