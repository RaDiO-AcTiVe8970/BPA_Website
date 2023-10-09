import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import axios from 'axios';

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Listen for scroll events to trigger animations
    window.addEventListener('scroll', handleScroll);
    fetchData();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const testimonialsSection = document.getElementById('testimonialsDiv');
    if (testimonialsSection) {
      const testimonialsSectionTop = testimonialsSection.getBoundingClientRect().top;
      if (testimonialsSectionTop < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/bpa/admin/getAllTestimonials');
      const data = response.data;
      setTestimonials(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  return (
    <Element name="testimonialsSection">
      <div
        id="testimonialsDiv"
        className="grid place-items-center w-full bg-base-100"
        data-theme="cupcake"
      >
        <div className="max-w-5xl py-24 content-center justify-center">
          <h1 className="text-4xl text-center text-black font-bold">Testimonials</h1>
          <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
            {testimonials.map((testimonial, key) => {
              return (
                <motion.div
                  key={key}
                  className={`card w-full bg-base-100 shadow-xl ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: key * 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <figure className="px-10 pt-10">
                    <img
                      className="mask w-16 h-16 mask-circle"
                      src={`http://localhost:3000/api/bpa/admin/image/${testimonial.id}`} // Use the image route
                      alt=""
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <p className="text-black">{testimonial.description}</p>
                    <p className="text-slate-500">-{testimonial.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Testimonials;
