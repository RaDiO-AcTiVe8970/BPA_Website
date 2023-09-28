/*import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();

  const sendToSeller_Signup = function () {
    router.push({
      pathname: "/seller/signup",
    });
  };

  return (
    <div className="hero max-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
      <div className="hero-overlay bg-opacity-60" > </div>
        <div className="hero-content text-start text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Discover and get new ways to automate your Business !</h1>
            <p className="mb-5">Welcome to our online haven for book enthusiasts! Whether you're an avid reader, a passionate book collector, or a literary explorer, our platform is your gateway to a vast universe of knowledge, imagination, and storytelling</p>
            <button className="btn btn-primary" onClick={sendToSeller_Signup}>Get Started</button>
          </div>
        </div>
    </div>

  );
}

export default Hero;*/

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Hero() {
  const router = useRouter();
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  // Define an array of background images
  const backgroundImages = [
    "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg",
    "/images/Edit_cover.jpg",
    "/images/Edit_cover.3.jpg",
    "/images/Edit_cover2.jpg",
    // Add more image URLs here as needed
  ];

  // Function to change the background image
  const changeBackgroundImage = () => {
    setBackgroundImageIndex((prevIndex) =>
      (prevIndex + 1) % backgroundImages.length
    );
  };

  useEffect(() => {
    // Set an interval to change the background image every 10 seconds
    const intervalId = setInterval(changeBackgroundImage, 5000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  const sendToSeller_Signup = function () {
    router.push({
      pathname: "/seller/signup",
    });
  };

  return (
    <div
      className="hero max-h-screen"
      style={{
        backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"> </div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Discover and get new ways to automate your Business !
          </h1>
          <p className="mb-5">
            Welcome to our online haven for book enthusiasts! Whether you're an
            avid reader, a passionate book collector, or a literary explorer,
            our platform is your gateway to a vast universe of knowledge,
            imagination, and storytelling
          </p>
          <button
            className="btn btn-primary"
            onClick={sendToSeller_Signup}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

