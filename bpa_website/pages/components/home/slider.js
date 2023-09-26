/*import React, { useEffect, useState } from 'react';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const maxSlideIndex = 3;

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

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

  function plusSlides(n) {
    let newSlideIndex = slideIndex + n;

    if (newSlideIndex < 1) {
      newSlideIndex = maxSlideIndex;
    } else if (newSlideIndex > maxSlideIndex) {
      newSlideIndex = 1;
    }

    setSlideIndex(newSlideIndex);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    // Define your slides and dots as JSX elements here
    const slides = [
      <div key={1} className={`mySlides fade ${slideIndex === 1 ? 'block' : 'hidden'}`}>
        <img
          src="/images/cover.jpg"
          alt="Slide 1"
          className="w-full object-cover"
          style={{ height: '50%' }}
        />
        <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Financial ERP <br /><br />
          <button className="btn glass" onClick={redirectToFinERP}>Learn More!</button>
        </div>
      </div>,
      <div key={2} className={`mySlides fade ${slideIndex === 2 ? 'block' : 'hidden'}`}>
        <img
          src="/images/cover.3.jpg"
          alt="Slide 2"
          className="w-full object-cover"
          style={{ height: '50%' }}
        />
        <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Enterprise Solution <br /><br />
          <button className="btn glass" onClick={redirectToEBPA}>Learn More!</button>
        </div>
      </div>,
      <div key={3} className={`mySlides fade ${slideIndex === 3 ? 'block' : 'hidden'}`}>
        <img
          src="/images/cover2.jpg"
          alt="Slide 3"
          className="w-full object-cover"
          style={{ height: '50%' }}
        />
        <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Human Resource & Payroll System <br /><br />
          <button className="btn glass" onClick={redirectToHRMPR}>Learn More!</button>
        </div>
      </div>
    ];

    const dots = (
      <div className="text-center absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <span
          className={`dot inline-block w-2 h-2 rounded-full bg-white mx-1 cursor-pointer ${
            slideIndex === 1 ? 'active' : ''
          }`}
          onClick={() => currentSlide(1)}
        ></span>
        <span
          className={`dot inline-block w-2 h-2 rounded-full bg-white mx-1 cursor-pointer ${
            slideIndex === 2 ? 'active' : ''
          }`}
          onClick={() => currentSlide(2)}
        ></span>
        <span
          className={`dot inline-block w-2 h-2 rounded-full bg-white mx-1 cursor-pointer ${
            slideIndex === 3 ? 'active' : ''
          }`}
          onClick={() => currentSlide(3)}
        ></span>
      </div>
    );

    // Render the slides and dots
    return (
      <div  className="grid place-items-center w-full bg-base-100">
        <div className="w-full h-full py-24 content-center justify-center">
          <div className="slideshow-container w-full h-full relative">
            <div className='mb-4'>
            {slides}
            <a
              className="prev absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-4xl cursor-pointer"
              onClick={() => plusSlides(-1)}
            >
              &#10094;
            </a>
            <a
              className="next absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-4xl cursor-pointer"
              onClick={() => plusSlides(1)}
            >
              &#10095;
            </a>
          </div>
        </div>
        <br />
        {dots}
        </div>
      </div>
    );
  }

  return showSlides(slideIndex);
};

export default Slideshow; */

/*
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";

const Slideshow = () => {
  const router = useRouter();
  const [slideIndex, setSlideIndex] = useState(1);
  const maxSlideIndex = 3;

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

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

  function plusSlides(n) {
    let newSlideIndex = slideIndex + n;

    if (newSlideIndex < 1) {
      newSlideIndex = maxSlideIndex;
    } else if (newSlideIndex > maxSlideIndex) {
      newSlideIndex = 1;
    }

    setSlideIndex(newSlideIndex);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    // Define your slides and dots as JSX elements here
    const slides = [
      <div key={1} className={`mySlides fade ${slideIndex === 1 ? 'block' : 'hidden'}`}>
        <img
          src="/images/cover.jpg"
          alt="Slide 1"
          className="w-full object-cover"
          style={{ height: '50%' }}
        />
        <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Financial ERP <br /><br />
          <p className="text-white text-2xl">We are a team of highly skilled and experienced professionals who are dedicated to provide the best possible solutions to our clients.</p>
          <button className="btn glass" onClick={redirectToFinERP}>Learn More!</button>
        </div>
      </div>,
      <div key={2} className={`mySlides fade ${slideIndex === 2 ? 'block' : 'hidden'}`}>
        <img
          src="/images/cover.3.jpg"
          alt="Slide 2"
          className="w-full object-cover"
          style={{ height: '50%' }}
        />
        <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Enterprise Solution <br /><br />
          <p className="text-white text-2xl">We are a team of highly skilled and experienced professionals who are dedicated to provide the best possible solutions to our clients.</p>
          <button className="btn glass" onClick={redirectToEBPA}>Learn More!</button>
        </div>
      </div>,
      <div key={3} className={`mySlides fade ${slideIndex === 3 ? 'block' : 'hidden'}`}>
        <img
          src="/images/cover2.jpg"
          alt="Slide 3"
          className="w-full object-cover"
          style={{ height: '50%' }}
        />
        <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Human Resource & Payroll System <br /><br />
          <p className="text-white text-2xl">We are a team of highly skilled and experienced professionals who are dedicated to provide the best possible solutions to our clients.</p>
          <button className="btn glass" onClick={redirectToHRMPR}>Learn More!</button>
        </div>
      </div>
    ];

    const dots = (
      <div className="text-center absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <span
          className={`dot inline-block w-2 h-2 rounded-full bg-white mx-1 cursor-pointer ${
            slideIndex === 1 ? 'active' : ''
          }`}
          onClick={() => currentSlide(1)}
        ></span>
        <span
          className={`dot inline-block w-2 h-2 rounded-full bg-white mx-1 cursor-pointer ${
            slideIndex === 2 ? 'active' : ''
          }`}
          onClick={() => currentSlide(2)}
        ></span>
        <span
          className={`dot inline-block w-2 h-2 rounded-full bg-white mx-1 cursor-pointer ${
            slideIndex === 3 ? 'active' : ''
          }`}
          onClick={() => currentSlide(3)}
        ></span>
      </div>
    );

    // Render the slides and dots
    return (
      <div className="hero max-h-screen max-w">
        <div className="hero-overlay bg-opacity-60" > </div>
        <div className="hero-content text-start  text-neutral-content">
          
              <div className=" max-w-max h-full ">
                {slides}
                <a
                  className="prev absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-4xl cursor-pointer"
                  onClick={() => plusSlides(-1)}
                >
                  &#10094;
                </a>
                <a
                  className="next absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-4xl cursor-pointer"
                  onClick={() => plusSlides(1)}
                >
                  &#10095;
                </a>
              </div>
              <br />
              {dots}
            </div>
          </div>
        
    );
  }

  return showSlides(slideIndex);
};

export default Slideshow;
*/

import { useEffect, useState } from 'react';

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const maxSlideIndex = 3;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      plusSlides(1);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(slideInterval); // Clean up the interval on unmount
    };
  }, [slideIndex]);

  function plusSlides(n) {
    let newSlideIndex = slideIndex + n;

    if (newSlideIndex < 1) {
      newSlideIndex = maxSlideIndex;
    } else if (newSlideIndex > maxSlideIndex) {
      newSlideIndex = 1;
    }

    setSlideIndex(newSlideIndex);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

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

  const slides = [
    {
      id: 1,
      imageSrc: '/images/cover.jpg',
      altText: 'Slide 1',
      caption: 'Caption Text',
    },
    {
      id: 2,
      imageSrc: '/images/cover.3.jpg',
      altText: 'Slide 2',
      caption: 'Caption Two',
    },
    {
      id: 3,
      imageSrc: '/images/cover2.jpg',
      altText: 'Slide 3',
      caption: 'Caption Three',
    },
  ];

  return (
    <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/images/cover.jpg" className="w-full" />

          <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Human Resource & Payroll System <br /><br />
          <p className="text-white text-2xl">We are a team of highly skilled and experienced professionals who are dedicated to provide the best possible solutions to our clients.</p>
          <button className="btn glass" onClick={redirectToFinERP}>Learn More!</button>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/images/cover.3.jpg" className="w-full" />
          
          <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Human Resource & Payroll System <br /><br />
          <p className="text-white text-2xl">We are a team of highly skilled and experienced professionals who are dedicated to provide the best possible solutions to our clients.</p>
          <button className="btn glass" onClick={redirectToHRMPR}>Learn More!</button>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/images/cover2.jpg" className="w-full" />

          <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl">
          Human Resource & Payroll System <br /><br />
          <p className="text-white text-2xl">We are a team of highly skilled and experienced professionals who are dedicated to provide the best possible solutions to our clients.</p>
          <button className="btn glass" onClick={redirectToEBPA}>Learn More!</button>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
    </div>
  );
};

export default Hero;
