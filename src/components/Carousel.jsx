// components/Carousel.jsx
import React, { useState, useEffect } from "react";

const slides = [
  { id: 1, image: "https://placehold.co/1200x800/888888/ffffff?text=Temp+Image+1" },
  { id: 2, image: "https://placehold.co/1200x800/cccccc/000000?text=Temp+Image+2" },
  { id: 3, image: "https://placehold.co/1200x800/888888/ffffff?text=Temp+Image+3" },
  { id: 4, image: "https://placehold.co/1200x800/cccccc/000000?text=Temp+Image+4" },
  { id: 5, image: "https://placehold.co/1200x800/888888/ffffff?text=Temp+Image+5" },
  { id: 6, image: "https://placehold.co/1200x800/cccccc/000000?text=Temp+Image+6" },
  { id: 7, image: "https://placehold.co/1200x800/888888/ffffff?text=Temp+Image+7" },
  { id: 8, image: "https://placehold.co/1200x800/cccccc/000000?text=Temp+Image+8" },
  { id: 9, image: "https://placehold.co/1200x800/888888/ffffff?text=Temp+Image+9" },
  { id: 10, image: "https://placehold.co/1200x800/cccccc/000000?text=Temp+Image+10" }
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  const goToPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  
  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="max-w-8xl mx-auto">
      <div className="relative overflow-hidden rounded-sm shadow-lg">
        <img src={slides[currentIndex].image} alt="" className="w-full h-[500px] object-cover"/> 

        {/* Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button onClick={goToPrev} aria-label="Previous"
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <button onClick={goToNext} aria-label="Next"
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 4.293a1 1 0 011.414 0L13 8.586a1 1 0 010 1.414L8.707 14.707a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
