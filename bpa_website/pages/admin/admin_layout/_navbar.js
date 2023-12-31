import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../utils/authcontext";
import Image from "next/image";


export default function _NavBar() {
  const { user, logout } = useAuth();

  const router = useRouter();
  const [userImage, setUserImage] = useState(null);
  const [session_data, setSession_data] = useState(null);


  // #region [Check Backend Session is Active or NOT]
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/bpa/admin/index", {
          withCredentials: true,
        });
        const sessionData = response.data;

      } catch (error) {
        console.error("Error checking session:", error);
        router.push("/admin/login");
      }
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  // #endregion [Check Backend Session is Active or NOT]

  // #region [Get Seller Image] When the Navbar is Called
  // When the page loads
  useEffect(() => {
    if (user != null) {
      // Set a placeholder image URL
      const placeholderImageUrl = "https://api.dicebear.com/avatar.svg";
      setUserImage(placeholderImageUrl);
  
      console.log("user:  " + user.email);
      console.log("user:  " + user.cookie);
    } else {
      router.push("/admin/login");
    }
  }, []);
  

  // #endregion [Get Moderator Image] When the Navbar is Called

  // #region [Storing New Data to Variable]

  const sendToQueries = function () {
    router.push({
      pathname: "/admin/contactqry",
    });
  };

  const sendToCareer = function () {
    router.push({
      pathname: "/admin/careerapp",
    });
  };

  const sendToFAQ = function () {
    router.push({
      pathname: "/admin/faq",
    });
  };

  const sendToDashboard = function () {
    router.push({
      pathname: "/admin/dashboard",
    });
  };

  const sendToLogout = function () {
    router.push({
      pathname: "/admin/logout",
    });
  };

  const sendToTest = function () {
    router.push({
      pathname: "/admin/testimonials",
    });
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/bpa/admin/logout",
        {
          withCredentials: true,
        }
      );
      if (response.data) {
        logout();
        router.push({
          pathname: "/admin/login",
        });
      }
    } catch (error) {
      console.error("error failed: ", error);
    }
  }

  const sendToHome = () => {
    router.push("/admin/dashboard");
  };

  
  // #endregion [Storing New Data to Variable]

  return (
    <>
      <div className="navbar bg-base-100">
        {/* <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div> */}
        <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" onClick={sendToHome}>
          <Image src={"/images/logo_c.png"} alt="Preview" width={100} height={50} />
        </a>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li onClick={sendToDashboard}>
                  <a>Dashboard</a>
                </li>

                <li onClick={sendToCareer}>
                  <a>Career Applications</a>
                </li>
                
                <li onClick={sendToQueries}>
                  <a>Contact Queries</a>
                </li>
                <li onClick={sendToFAQ}>
                  <a>FAQ</a>
                </li>
                <li onClick={sendToTest}>
                  <a>Testimonials</a>
                </li>
                {/* <li><a>View Profile</a></li> */}
                {/* <li><a>Logout</a></li> */}
              </ul>
            </div>
          </div>
        </div>
        
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* Image */}
                <img src={userImage || "/images/seller/temp.svg"} alt="User" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li >
                <a className="justify-between">
                  Profile
                  {/* <span className="badge">New</span> */}
                </a>
              </li>
              {/* <li><a>Settings</a></li> */}
              <li>
                <a onClick={() => window.my_modal_3.showModal()}>Logout</a>
              </li>

              {/* You can open the modal using ID.showModal() method */}
              {/* <button className="btn" >open modal</button> */}
              <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <h3 className="font-bold text-lg">Are you sure you want to logout?</h3>
                  <p className="py-4">See you later, admin!</p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <a  className="btn" onClick={handleLogout}>
                      Logout
                    </a>
                  </div>
                </form>
              </dialog>

              {/* You can open the modal using ID.showModal() method */}
              {/* <button className="btn" >open modal</button> */}
              
            </ul>
          </div>
        </div>
      
    </>
  );
}
// window.feedback_modal.close()