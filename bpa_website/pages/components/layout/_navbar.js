import { useRouter } from "next/router";

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

  const sendToAboutUs = function () {
    router.push({
      pathname: "/about-us",
    });
  };

  const sendToContactUs = function () {
    router.push({
      pathname: "/contact-us",
    });
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            Interstellar Library
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li onClick={sendTHome}>
              <a>Home</a>
            </li>
            <li onClick={sendToAboutUs}>
              <a>About Us</a>
            </li>
            <li onClick={sendToContactUs}><a>Contact Us</a></li>
            {/* Signup */}
            <li>
              <details>
                <summary>Signup</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Customer</a>
                  </li>
                  <li onClick={sendToSeller_Signup}>
                    <a>Seller</a>
                  </li>
                  
                  {/* <li><a>Moderator</a></li>
                    <li><a>Admin</a></li> */}
                </ul>
              </details>
            </li>
            {/* Login */}
            <li>
              <details>
                <summary>Login</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Customer</a>
                  </li>
                  <li onClick={sendToSeller_Login}>
                    <a>Seller</a>
                  </li>
                  <li onClick={sendToModerator_Login}>
                    <a>Moderator</a>
                  </li>
                  <li>
                    <a>Admin</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
