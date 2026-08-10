import React from 'react'

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
  return (
    <>
    <section className="bg-[#0a0f1e] py-12 px-5 md:px-8">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');
      .ff { font-family: 'Fraunces', serif; }`}</style>

      <h2 className="ff text-gray-300 lg:text-[5vh] text-[2.7vh] text-center font-semibold">
        <span className="text-amber-400">What Our</span> Clients Say
      </h2>
           
          <div className="py-5"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5">
        {reviews.map((rvs, index) => ( 
          
          <div 
            key={index} 
            className="bg-white/5 p-5 border border-cyan-400 rounded-xl space-y-4
            hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-shadow duration-300">
            
            <img src={rvs.imgSrc} alt="" className="lg:w-1/2 lg:h-[25vh] h-32 sm:h-32 object-cover rounded-full hover:shadow-2xl"/>
            <div className="">{rvs.icon}</div>
            <h3 className="text-white text-xl">{rvs.title}</h3>
            <p className="text-white/60 px-3">"{rvs.desc}"</p>

            <div className="text-lg text-white">
              <span className="">{rvs.name} <br /></span>
              <span className="text-sm">{rvs.designation}</span>
            </div>         
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Testimonials