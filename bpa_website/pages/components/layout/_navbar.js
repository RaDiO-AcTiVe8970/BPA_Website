import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

// Custom hook for scrolling to a section with animation
const useScrollToSection = () => {
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return scrollToSection;
};

const _NavBar = () => {
  const router = useRouter();
  const scrollToSection = useScrollToSection();
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  const sendToHome = () => {
    router.push("/");
  };

  const sendToFAQ = () => {
    router.push("/faq");
  };

  const sendToCP =()=>{
    router.push("././company_profile");
  };
  const sendToCareer =()=>{
    router.push("././career");
  }

  // Handle scrolling to the "About Us" section on another page
  const scrollToAboutUs = () => {
    const target="/";
    const targetURL=target;
    // Replace 'about' with the actual route to the "About Us" page
    router.push(targetURL);
    // Scroll to the "AboutUs" section with animation after the page change
    setTimeout(() => {
      scrollToSection("About Us");
    }, 1000); // Adjust the delay as needed
  };

  // Handle scrolling to the "Contact Us" section on another page
  const scrollToContactUs = () => {
    const target="/";
    const targetURL=target;
    // Replace 'about' with the actual route to the "About Us" page
    router.push(targetURL);
    // Scroll to the "ContactUs" section with animation after the page change
    setTimeout(() => {
      scrollToSection("Contact Us");
    }, 1000); // Adjust the delay as needed
  };

  const redirectToProduct =()=>{
    router.push({
        pathname: '/products'
        })
    }
    const _NavBar = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      opacity: isNavbarTransparent ? 1 : 0.8,
    };

    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change the opacity when user scrolls down by a certain amount (e.g., 100 pixels)
        setIsNavbarTransparent(false);
      } else {
        setIsNavbarTransparent(true);
      }
    };
  
    useEffect(() => {
      // Add an event listener to the window for scroll events
      window.addEventListener("scroll", handleScroll);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className="navbar bg-base-black" style={_NavBar}  data-theme="dark">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" onClick={sendToHome}>
          <Image src={"/images/logo_c.png"} alt="Preview" width={100} height={50} />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li onClick={sendToHome}><a>Home</a></li>
          <li onClick={scrollToAboutUs}>
            <a>About Us</a>
          </li>
          <li onClick={scrollToContactUs}>
            <a>Contact Us</a>
          </li>
          <li onClick={sendToCP}><a>Company Profile</a></li>
          <li onClick={sendToCareer}><a>Career</a></li>
          <li onClick={redirectToProduct}><a>Products</a></li>
          <li onClick={sendToFAQ}>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default _NavBar;
