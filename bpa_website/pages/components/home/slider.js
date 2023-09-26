import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

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
    const intervalId = setInterval(changeSlide, 5000);

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
    <div className="carousel w-full relative">
      {/* Render your slides here */}
      {/* You can use `currentSlide` to conditionally display the active slide */}
      {/* Slide 1 */}
      <div
        id="slide1"
        className={`carousel-item relative w-full ${
          currentSlide === 1 ? 'block' : 'hidden'
        }`}
      >
        <img src="/images/cover.jpg" className="w-full" />
        <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Financial ERP <br /><br />
          <p className="text-white text-2xl">We are a team of highly skilled and experienced professionals who are dedicated to provide the best possible solutions to our clients.</p>
          <button className="btn glass" onClick={redirectToFinERP}>Learn More!</button>
        </div>
      </div>
      {/* Slide 2 */}
      <div
        id="slide2"
        className={`carousel-item relative w-full ${
          currentSlide === 2 ? 'block' : 'hidden'
        }`}
      >
        <img src="/images/cover.3.jpg" className="w-full" />
        <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Enterprise Business Process Automation <br /><br />
          <p className="text-white text-2xl">We are a team of highly skilled and experienced professionals who are dedicated to providing the best possible solutions to our clients.</p>
          <button className="btn glass" onClick={redirectToEBPA}>Learn More!</button>
        </div>
      </div>
      {/* Slide 3 */}
      <div
        id="slide3"
        className={`carousel-item relative w-full ${
          currentSlide === 3 ? 'block' : 'hidden'
        }`}
      >
        <img src="/images/cover2.jpg" className="w-full" />
        <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Human Resource & Payroll System <br /><br />
          <p className="text-white text-2xl">We are a team of highly skilled and experienced professionals who are dedicated to providing the best possible solutions to our clients.</p>
          <button className="btn glass" onClick={redirectToHRMPR}>Learn More!</button>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button
          onClick={() => handleSlideChange('prev')}
          className="btn btn-circle"
        >
          ❮
        </button>
        <button
          onClick={() => handleSlideChange('next')}
          className="btn btn-circle"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;

