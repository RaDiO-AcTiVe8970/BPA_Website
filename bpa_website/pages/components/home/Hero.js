import { useRouter } from "next/router";

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

export default Hero;
