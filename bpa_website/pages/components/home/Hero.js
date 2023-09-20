import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();

  const sendToSeller_Signup = function () {
    router.push({
      pathname: "/seller/signup",
    });
  };

  return (
    <div className="hero py-32 bg-base-100">
      <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse">
        <img
          //   src="https://picsum.photos/seed/picsum/500/300"
          src="/images/hero.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Discover, Share, and Dive into the World of Books !
          </h1>
          <p className="py-6">
            Welcome to our online haven for book enthusiasts! Whether you're an
            avid reader, a passionate book collector, or a literary explorer,
            our platform is your gateway to a vast universe of knowledge,
            imagination, and storytelling
          </p>
          <button className="btn btn-primary" onClick={sendToSeller_Signup}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
