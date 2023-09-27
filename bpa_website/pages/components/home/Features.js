import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

const featuresData = [
  {
    title: "Tailored Solutions",
    description:
      "Crafting custom software solutions that perfectly align with your unique business needs.",
  },
  {
    title: "Expert Development Team",
    description:
      "Our experienced software developers excel in diverse programming languages, methodologies, and tools.",
  },
  {
    title: "Ongoing Maintenance & Support",
    description:
      "Providing continuous application upkeep, including bug fixes, updates, and technical assistance.",
  },
  {
    title: "Uncompromising Quality Assurance",
    description:
      "Dedicated QA professionals ensuring the utmost quality in software development.",
  },
  {
    title: "Agile Development Approach",
    description:
      "Harnessing Agile methodologies like Scrum for collaborative and flexible project management.",
  },
  {
    title: "Data Security & Privacy Focus",
    description:
      "Prioritizing data security measures to safeguard client information, compliant with GDPR and CCPA.",
  },
];

function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for scroll events to trigger animations
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Calculate the position of the Features section
    const featuresSection = document.getElementById('abtdiv');
    if (featuresSection) {
      const featuresSectionTop = featuresSection.getBoundingClientRect().top;

      // Check if the Features section is in the viewport
      if (featuresSectionTop < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    }
  };

  return (
    <>
      <Element name="featuresSection">
        <div
          id="abtdiv"
          className="grid place-items-center w-full bg-base-200"
          data-theme="cupcake"
        >
          <div className="max-w-5xl py-24 content-center justify-center">
            <h1 className="text-4xl text-center text-black font-bold">
              Our Services
            </h1>
            <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
              {featuresData.map((feature, key) => {
                return (
                  <motion.div
                    key={key}
                    className="card w-full bg-base-100 shadow-xl hover:shadow-2xl"
                    initial={{ opacity: 0, y: 20 }} // Initial opacity set to 0 and y position to create an upward animation
                    animate={
                      isVisible
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    } // Animate to opacity 1 and y position 0 if isVisible is true
                    transition={{ duration: 0.5, delay: key * 0.3 }} // Set the transition duration and delay for staggered animations
                    whileHover={{ scale: 1.05 }} // Add a scale animation on hover
                  >
                    <div className="card-body mt-4 items-center text-center">
                      <h2 className="card-title text-black">{feature.title}</h2>
                      <p className="text-black">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Features;
