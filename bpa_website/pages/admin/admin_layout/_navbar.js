import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../utils/authcontext";


export default function _NavBar() {
  const { user, logout } = useAuth();

  const router = useRouter();
  const [userImage, setUserImage] = useState(null);
  const [session_data, setSession_data] = useState(null);
  const [feedback, setFeedback] = useState('');

  // #region [Check Backend Session is Active or NOT]
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await axios.get("http://localhost:3000/moderator/index", {
          withCredentials: true,
        });
        const sessionData = response.data;

      } catch (error) {
        console.error("Error checking session:", error);
        router.push("/moderator/login");
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
      axios
        .get("http://localhost:3000/seller/profile/profile_image", {
          responseType: "arraybuffer", // Indicate that we're expecting binary data
          withCredentials: true,
        })
        .then((response) => {
          const imageBlob = new Blob([response.data], {
            type: response.headers["content-type"],
          });
          const imageUrl = URL.createObjectURL(imageBlob);
          setUserImage(imageUrl);
        })
        .catch((error) => {
          setUserImage(null); // Set to null if there's an error
        });

      console.log("user:  " + user.email);
      console.log("user:  " + user.cookie);
    } else {
      router.push("/moderator/login");
    }
  }, []);

  // #endregion [Get Moderator Image] When the Navbar is Called

  // #region [Storing New Data to Variable]

  const sendToQueries = function () {
    router.push({
      pathname: "/admin/contactqry",
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
          <a className="btn btn-ghost normal-case text-xl">
            Business Process Automation
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
        <div className="flex-none gap-2">
          <div className="form-control">
            {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
            <div className="join">
              <div>
                <div>
                  <input
                    className="input input-bordered join-item"
                    placeholder="Search"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  {/* Search Result Display */}

                  <div className="artboard">
                    <ul>
                      {books.map((book) => (
                        <li key={book.Book_ID}>
                          <a onClick={() => handleBookClick(book.Book_ID)}>
                            {book.Title}
                            <input type="hidden" value={book.Book_ID} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <select
                className="select select-bordered join-item"
              >
                <option disabled selected value="">
                  Filter
                </option>
                <option value="Title">Book Title</option>
                <option value="Author">Book Author</option>
                <option value="ISBN">Book ISBN</option>
                <option value="Condition">Book Condition</option>
                <option value="Price">Book Price</option>
                {/* <option>Drama</option>
                <option>Action</option> */}
              </select>
              <div className="indicator">
                {/* <span className="indicator-item badge badge-secondary">new</span>  */}
                <button className="btn join-item">Search</button>
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
              <li onClick={sendToProfile}>
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
                  <h3 className="font-bold text-lg">Wanna get out?</h3>
                  <p className="py-4">See you later, Seller</p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <a onClick={sendToLogout} className="btn">
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
      </div>
    </>
  );
}
// window.feedback_modal.close()