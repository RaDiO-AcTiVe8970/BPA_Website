import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Element, scroller } from 'react-scroll';

const testimonialsData = [
  {
    text: "Outstanding experience with the software. It exceeded my expectations in every aspect. Highly recommended!",
    name: "Amita Devi",
    img: "/images/interstellar_library/Amita_Devi.jpg",
  },
  {
    text: "I'm truly impressed by the software's capabilities. It has transformed the way I work. Kudos to the team!",
    name: "Rahul Gupta",
    img: "/images/interstellar_library/Rahul_Gupta.jpg",
  },
  {
    text: "The software's functionality and user-friendliness are remarkable. It's an indispensable tool for my tasks.",
    name: "Priya Patel",
    img: "/images/interstellar_library/Priya_Patel.jpg",
  },
  {
    text: "The software has greatly improved our workflow. It's been a game-changer for us!",
    name: "Tariq Rahman",
    img: "/images/interstellar_library/Tariq_Rahman.jpg",
  },
  {
    text: "I'm amazed by the software's efficiency. It has made my job much easier. Thanks a lot!",
    name: "Nadia Khan",
    img: "/images/interstellar_library/Nadia_Khan.jpg",
  },
  {
    text: "This software is exactly what we needed to enhance our productivity. Great job!",
    name: "Arjun Sharma",
    img: "/images/interstellar_library/Arjun_Sharma.jpg",
    // img: "../../../public/images/interstellar_library/Arjun_Sharma.jpg",
  },
];

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for scroll events to trigger animations
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Calculate the position of the Testimonials section
    const testimonialsSection = document.getElementById('testimonialsDiv');
    if (testimonialsSection) {
      const testimonialsSectionTop = testimonialsSection.getBoundingClientRect().top;

      // Check if the Testimonials section is in the viewport
      if (testimonialsSectionTop < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    }
  };

  // Function to scroll to the Features section
  const scrollToFeatures = () => {
    scroller.scrollTo('featuresSection', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
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
            {testimonialsData.map((testimonial, key) => {
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
                      src={testimonial.img}
                      alt=""
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <p className="text-black">{testimonial.text}</p>
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
