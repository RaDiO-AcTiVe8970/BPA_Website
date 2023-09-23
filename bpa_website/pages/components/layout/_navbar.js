import { useRouter } from "next/router";  
import Image from "next/image";

export default function _NavBar() {
  const router = useRouter();
  const sendToSeller_Login = function () {
    router.push({
      pathname: "/seller/login",
    });
  };

  const sendToSeller_Signup = function () {
    router.push({
      pathname: "/seller/signup",
    });
  };

  const sendToModerator_Login = function () {
    router.push({
      pathname: "/moderator/login",
    });
  };

  const sendToModerator_Signup = function () {
    router.push({
      pathname: "/moderator/register",
    });
  };

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

  const scrollToContactDiv = () => {
    const contactdiv = document.getElementById("contactdiv");

    if (contactdiv) {
      // Using the 'scrollIntoView' method to scroll to the target div
      contactdiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar bg-base-100">
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
              <a>Home</a>
            </li>
            <li onClick={scrollToAboutDiv}>
              <a>About Us</a>
            </li>
            <li onClick={scrollToContactDiv}><a>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
