import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "daisyui/dist/full.css"; // Import DaisyUI styles

const _Layout = dynamic(() => import('./components/layout/_layout'));
const _Title = dynamic(() => import('./components/layout/_title'));

const SectionTitle = ({ title, className }) => (
  <h2 className={`text-xl font-semibold mt-6 ${className}`}>{title}</h2>
);

const BulletList = ({ items }) => (
  <ul className="text-black list-disc list-inside pl-6 mt-2 ml-10 mr-10 p-10">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const AboutUS = () => {
  const keyProducts = [
    "Expert development team and dedicated support team.",
    "A proven client service model: locally owned and operated.",
    "Considerable range of combined technical knowledge and experience.",
    "Timely response to any issues",
    "Cost efficient services",
  ];

  return (
    <>
      <_Title title="About Us" />
      <_Layout>
        <div className="bg-gray-100 min-h-screen pt-16">
          {/* Hero Section */}
          <header className="bg-base-200 py-20 text-white text-center">
            <div className="container mx-auto">
              <h1 className="text-5xl font-extrabold">About Us</h1>
              <p className="text-xm mt-4 ml-4 mr-4">
              BPA is a software development house, system integrator, and technology provider, established to offer cutting-edge intelligent technical solutions and services to businesses and organizations. Our team of expert developers at BPA has contributed their skills to numerous projects, and our dedicated support team provides solutions to end-users. BPA has earned important and invaluable admiration in the industry.
              </p>
            </div>
          </header>

          {/* Body Section */}
          <div className="container mx-auto p-6">
            <SectionTitle title="Our Clients Benefit from:" className="flex items-center justify-center text-black" />
            <BulletList items={keyProducts}  />

            <SectionTitle title="Client and Future Focused: " className="flex items-center justify-center mt-6 text-black" />
            <p className="text-black mt-6 ml-10 mr-10 flex items-center justify-center">
            At BPA, we have a dedicated support team committed to delivering top-notch service to our clients. User requirements always take precedence at BPA, and we are unwavering in our commitment to ensuring that our highly engaged technical team is adequately resourced for the ultimate benefit of our clients.
            </p>

            <SectionTitle title="Company History: " className="flex items-center justify-center mt-6 text-black" />
            <p className="text-black mt-6 ml-10 mr-10 flex items-center justify-center">
            After twelve years of service, our CEO acquired a 49% share of a Desktop-Based HR PAYROLL Software company in March 2017. He assumed the position of Managing Director within that company and initiated the development of a new web-based product. In 2018, the partnership mutually dissolved, leading to the establishment of his independent company, BPA, which stands for 'Business Process Automation.'

            From the very inception, our core concept revolved around simplifying processes for end-users. The name BPA, or 'Business Process Automation,' underscores our commitment to enabling users to achieve maximum results with minimal effort when using our software.
            </p>

            <SectionTitle title="Our Team: " className="flex items-center justify-center mt-6 text-black" />
            <p className="text-black mt-6 ml-10 mr-10 flex items-center justify-center">
              We started with a small team. Right now we are growing. We have Software Engineers who are highly
              experienced. Also we have tech support and system support team who are constantly providing support to
              our users.
            </p>

            <SectionTitle title="Our Vision: " className="flex items-center justify-center mt-6 text-black" />
            <p className="text-black mt-6 ml-10 mr-10 flex items-center justify-center">
            We are expecting to enter in international market in the end of 2022. Our development is working hard with
            a vision to change. 

            <a href="../public/pdf/BPA_AboutUS.pdf" className="text-blue-700" download> Click here to learn more!</a>
            </p>
          </div>
        </div>
      </_Layout>
    </>
  );
};

export default AboutUS;
