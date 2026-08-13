import React from 'react'
import { FaClipboardCheck, FaUsers, FaUserTie, FaGlobe, FaHeart } from 'react-icons/fa6'

const figures = [ 
  { icon: <FaClipboardCheck size={36} className="text-pink-400" />, title: "250+", caption: "Projects Completed" },
  { icon: <FaUsers size={36} className="text-pink-400" />, title: "400+", caption: "Happy Clients" },
  { icon: <FaHeart size={36} className="text-pink-400" />, title:"100%", caption: "Customer Focus" },
  { icon: <FaGlobe size={36} className="text-pink-400" />, title: "12+", caption: "Countries Served" },
]

const Figures = () => {
  return (  
    <section className="relative overflow-hidden py-5 md:px-8 px-2" style={{
        background: "radial-gradient(ellipse at 50% 0%, #113b4e 0%, #0f292e 50%, #0a191e 100%)",
      }}>
        
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
          .content { font-family: 'Open Sans', sans-serif; }
      `}</style>  
 
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {figures.map((fig, index) => (
            <div
              key={index}
              className="group relative flex items-center gap-5 py-2 px-6 transition-all duration-300 cursor-default"
            >
              {/* Top gradient line on hover */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 
              {/* Icon box */}
              <div className=" flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-300">
                {fig.icon}
              </div>
 
              {/* Text */}
              <div className="flex flex-col">
                <span className="text-white text-2xl font-extrabold tracking-tight transition-colors duration-200">
                  {fig.title}
                </span>

                <span className="content text-white/75 font-medium group-hover:text-white/60 transition-colors duration-200">
                  {fig.caption}
                </span>
              </div>
 
              {/* Bottom underline */}
              <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
 
              {/* Vertical divider (hidden on last item) */}
              {index < figures.length - 1 && (
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/8 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Figures