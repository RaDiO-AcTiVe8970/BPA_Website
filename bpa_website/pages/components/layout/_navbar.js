import { useRouter } from "next/router";  
import Image from "next/image";
import { useEffect } from "react";

const scrollToDivOnTargetPage = (targetPage, divId) => {
  const router = useRouter();

  useEffect(() => {
    // Function to scroll to the target div
    const scrollIntoView = () => {
      const targetDiv = document.getElementById(divId);
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Scroll to the target div when the target page is reached
    router.events.on("routeChangeComplete", scrollIntoView);

    // Clean up the event listener when the component unmounts
    return () => {
      router.events.off("routeChangeComplete", scrollIntoView);
    };
  }, [router, divId]);

  // Redirect to the target page
  const redirectToTargetPage = () => {
    router.push(targetPage);
  };

  return (
    <button onClick={redirectToTargetPage}>
      {divId}
    </button>
  );
};


export default function _NavBar() {
  const router = useRouter();

  const sendTHome = function () {
    router.push({
      pathname: "/",
    });
  };

  const scrollToAboutDiv = function () {
    const abtdiv = document.getElementById("abtdiv");
    if(abtdiv){
      abtdiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendFAQ = () => {
    router.push({
      pathname: "/faq",
    });
  }

  return (
    <>
      <div className="navbar bg-base-black" data-theme="dark">
        <div className="flex-1">
          
          <a className="btn btn-ghost normal-case text-xl">
            <Image
                src={"/images/logo_c.png"}
                alt="Preview"
                width={100}
                height={50}
            />
            {/*Business Process Automation Ltd.*/}
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li onClick={sendTHome}>
              <a >Home</a>
            </li>
            <li>{scrollToDivOnTargetPage("/", "About Us")}</li>
            <li>{scrollToDivOnTargetPage("/", "Contact Us")}</li>
            <li onClick={sendFAQ}>
              <a> FAQ </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
