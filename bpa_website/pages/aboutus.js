import React from "react";
import dynamic from "next/dynamic";

const _Layout = dynamic(() => import('./components/layout/_layout'))
const _Title = dynamic(() => import('./components/layout/_title'))

const AboutUsPage = () => {
  return (
    <>
    <_Title title="About Us" />
    <_Layout>
    <div className="bg-white  min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl text-white font-extrabold text-center mb-10">
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-b from-primary to-secondary bg-opacity-30 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl text-black font-semibold mb-6">Our Story</h2>
            <p className="text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget urna mauris. Sed at efficitur odio. Praesent consectetur ante
              vel tempus. Vivamus a tincidunt odio.
            </p>
            <p className="text-gray-700 text-lg mt-4">
              Sed aliquet varius libero, et posuere mi fringilla eget. Curabitur
              eget sapien ac ligula volutpat euismod ac nec dolor.
            </p>
          </div>
          <div className="bg-gradient-to-b from-primary to-secondary bg-opacity-30 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl text-white font-semibold mb-3">Our Mission</h2>
            <p className="text-white text-lg">
              Our mission is to provide innovative solutions to our clients and
              deliver exceptional results. We aim to make a positive impact on
              the world through our work.
            </p>
          </div>
        </div>
      </div>
    </div>
    </_Layout>
    </>
  );
};

export default AboutUsPage;
