import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const router = useRouter();

  // Define the total number of slides
  const totalSlides = 3;

  const redirectToFinERP = function () {
    router.push({
      pathname: "/",
    });
  };

  const redirectToHRMPR = function () {
    router.push({
      pathname: "/",
    });
  };

  const redirectToEBPA = function () {
    router.push({
      pathname: "/",
    });
  };

  useEffect(() => {
    // Function to change the slide
    const changeSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
    };

    // Set an interval to change the slide every 5 seconds
    const intervalId = setInterval(changeSlide, 10000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  // Function to handle manual slide changes
  const handleSlideChange = (direction) => {
    if (direction === 'prev') {
      setCurrentSlide((prevSlide) =>
        prevSlide === 1 ? totalSlides : prevSlide - 1
      );
    } else if (direction === 'next') {
      setCurrentSlide((prevSlide) =>
        prevSlide === totalSlides ? 1 : prevSlide + 1
      );
    }
  };

  return (
    <>
    <div className="carousel w-full relative" data-theme='cupcake'>

      <div
        id="slide1"
        className={`carousel-item center w-full ${
          currentSlide === 1 ? 'block' : 'hidden'
        }`}
      >
        <img src="/images/Edit_cover.jpg" 
            className='w-full'
            loading='lazy'/>
        <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Financial ERP <br /><br />
          <p className="text-white text-2xl">We are a team of highly skilled and experienced professionals who are dedicated to providing the best possible solutions to our clients.</p>
          <button className="text-white btn glass" onClick={redirectToFinERP}>Learn More!</button>
        </div>
      </div>

      <div
        id="slide2"
        className={`carousel-item relative text-white w-full ${
          currentSlide === 2 ? 'block' : 'hidden'
        }`}
      >
        <img src="/images/Edit_cover.3.jpg" 
            className='w-full'
            loading='lazy'/>
        <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Enterprise Business Process Automation <br /><br />
          <p className="text-white text-2xl">We are a team of highly skilled and experienced professionals who are dedicated to providing the best possible solutions to our clients.</p>
          <button className="text-white btn glass" onClick={redirectToEBPA}>Learn More!</button>
        </div>
      </div>

      <div
        id="slide3"
        className={`carousel-item relative w-full ${
          currentSlide === 3 ? 'block' : 'hidden'
        }`}
      >
        <img src="/images/Edit_cover2.jpg" 
            className='w-full'
            loading='lazy'/>
        <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Human Resource & Payroll System <br /><br />
          <p className="text-white text-2xl">We are a team of highly skilled and experienced professionals who are dedicated to providing the best possible solutions to our clients.</p>
          <button className="text-white btn glass" onClick={redirectToHRMPR}>Learn More!</button>
        </div>
      </div>


      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button
          onClick={() => handleSlideChange('prev')}
          className="text-white btn btn-circle glass" 
        >
          ❮
        </button>
        <button
          onClick={() => handleSlideChange('next')}
          className="text-white btn btn-circle glass"
        >
          ❯
        </button>
      </div>
      
    </div>
    <div className="flex justify-center w-full py-2 gap-2">
      <a href="#slide1" 
         onClick={() => setCurrentSlide(1)}
         className={`dot ${currentSlide === 1 ? 'active' : ''}`}
      >
        <Image src="/images/Edit_cover.jpg"
                width={60}
                height={50}
                loading='lazy'
                className='rounded-full opacity-50'
                alt='slide1'/>
      </a> 
      <a href="#slide2" 
         onClick={() => setCurrentSlide(2)}
         className={`dots ${currentSlide === 2 ? 'active' : ''}`}
      >
        <Image src="/images/Edit_cover.3.jpg"
                width={60}
                height={50}
                loading='lazy'
                className='rounded-full opacity-50'
                alt='slide2'/>
      </a> 
      <a href="#slide3" 
         onClick={() => setCurrentSlide(3)}
         className={`dot ${currentSlide === 3 ? 'active' : ''}`}
      >
        <Image src="/images/Edit_cover2.jpg"
                width={60}
                height={50}
                loading='lazy'
                className='w-full rounded-full opacity-50'
                alt='slide3'/>
      </a> 
    </div>
    </>
  );
};

export default Carousel;



