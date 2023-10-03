import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { useRouter } from "next/router";

const productsData = [
    {
      id: 1,
      title: "Financial ERP",
      description:
        "Revolutionize your financial management with our tailored software solutions that seamlessly integrate with your business processes and empower you to make data-driven decisions.",
    },
    {
      id: 2,
      title: "Enterprise Business Process Automation",
      description:
        "Optimize your operations with our team of skilled software developers who are proficient in various programming languages, methodologies, and tools, ensuring your business processes run efficiently and effortlessly.",
    },
    {
      id: 3,
      title: "Human Resource & Payroll System",
      description:
        "Simplify your HR and payroll management with our comprehensive system, offering ongoing support, including bug fixes, updates, and expert technical assistance, to keep your HR processes running smoothly.",
    },
];  

function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Listen for scroll events to trigger animations
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Calculate the position of the Features section
    const productsSection = document.getElementById('abtdiv');
    if (productsSection) {
      const productsSectionTop = productsSection.getBoundingClientRect().top;

      // Check if the Features section is in the viewport
      if (productsSectionTop < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    }
  };

  const redirectToProduct =(id)=>{
    router.push({
        pathname: '/productpage/'+id,
        });
    };

  return (
    <>
      <Element name="featuresSection">
        <div
          id="abtdiv"
          className="grid place-items-center w-full bg-base-100"
          data-theme="cupcake"
        >
          <div className="max-w-5xl py-24 content-center justify-center">
            <h1 className="text-4xl text-center text-black font-bold">
              Our Products
            </h1>
            <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
              {productsData.map((feature, key) => {
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
                      <button className='btn btn-primary' onClick={() => redirectToProduct(feature.id)}>Learn More!</button>
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
