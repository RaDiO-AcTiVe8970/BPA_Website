// pages/company.js
/*import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "daisyui/dist/full.css"; // Import DaisyUI styles
import _Hero from "./components/home/Hero";

const _Layout = dynamic(() => import('./components/layout/_layout'));
const _Title = dynamic(() => import('./components/layout/_title'));

function CompanyProfile() {
  return (
    <>
      <_Title title="Company Profile" />
      <_Layout>
        <div className="bg-gray-100 min-h-screen pt-16">
          <_Hero title="Company Profile" description=" "/>
          <div className="p-6 mx-6 my-6">
            <h1 className="text-black text-2xl font-semibold mt-6 ml-6 mr-6 px-6">Our key products include:</h1>
            <ul className="text-black list-disc pl-6 mt-2 ml-6 mr-6 px-6">
              <li>HR & PAYROLL SOFTWARE (Garments industries, Corporate Offices & Group of Companies)</li>
              <li>Fair Price Shop</li>
              <li>Point of Sale (POS)</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>On-site Service</li>
              <li>Inventory Management (Development Ongoing)</li>
              <li>Accounts Management (Development Ongoing)</li>
              <li>ERP (Development Ongoing)</li>
            </ul>
            <h2 className="text-black text-xl font-semibold mt-10 px-6">Ownership & Management</h2>
            <div className="flex items-center justify-center">
              <Image src="/images/bpa_ss.png" alt="CEO" width={500} height={500} className="mt-6" />
            </div>
            <p className="text-black mt-6 ml-6 mr-6 px-6">
              BPA is a private company founded in 2018 by Shahidul Islam Salim, with a vision for change. He serves as the CEO of BPA, bringing his 12 years of experience as a lead Software Engineer in a US-based company to start this venture.
            </p>
          </div>
        </div>
      </_Layout>
    </>
  );
}

export default CompanyProfile;*/



/*import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "tailwindcss/tailwind.css"; // Import TailwindCSS styles

const _Layout = dynamic(() => import('./components/layout/_layout'));
const _Title = dynamic(() => import('./components/layout/_title'));

function CompanyProfile() {
  return (
    <>
      <_Title title="Company Profile" />
      <_Layout>
        <div className="bg-gray-100 min-h-screen pt-16">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-left">
              <div className="max-w-m">
                <h1 className="text-5xl font-bold">Company Profile</h1>
                <p className="text-xl py-6">
                BPA is a leading software firm specializing in automated solutions for various organizations. We are located in Baridhara DOHS, Dhaka, Bangladesh, but we serve clients nationwide. We are dedicated to working with cutting-edge technologies and adhering to best practices. Our team comprises the best professionals to ensure top-quality services, offering advice, sales, and support to help our clients achieve peak performance.
                <br />
                BPA was founded in 2018 by Shahidul Islam Salim, with a vision for change. Salim has over 12 years of experience as a lead software engineer in a US-based company. He brings his wealth of knowledge and experience to BPA, leading a team of highly skilled and dedicated professionals.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-black text-xl font-semibold mt-6 ml-6 mr-6 px-6">Our key products include:</h2>
            <ul className="text-black list-disc list-inside pl-6 mt-2 ml-6 mr-6 px-6">
              <li>HR & PAYROLL SOFTWARE (Garments industries, Corporate Offices & Group of Companies)</li>
              <li>Fair Price Shop</li>
              <li>Point of Sale (POS)</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>On-site Service</li>
              <li>Inventory Management (Development Ongoing)</li>
              <li>Accounts Management (Development Ongoing)</li>
              <li>ERP (Development Ongoing)</li>
            </ul>
            <h2 className="text-black text-xl font-semibold mt-10 px-6">Ownership & Management</h2>
            <div className="flex items-center justify-center">
              <Image src="/images/bpa_ss.png" alt="CEO" width={1000} height={500} className="mt-6" />
            </div>
            <p className="text-black mt-6 ml-6 mr-6 px-6">
              BPA is a private company founded in 2018 by Shahidul Islam Salim, with a vision for change. He serves as the CEO of BPA, bringing his 12 years of experience as a lead Software Engineer in a US-based company to start this venture.
            </p>
          </div>
        </div>
      </_Layout>
    </>
  );
}

export default CompanyProfile;*/

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

const CompanyProfile = () => {
  const keyProducts = [
    "HR & PAYROLL SOFTWARE (Garments industries, Corporate Offices & Group of Companies)",
    "Fair Price Shop",
    "Point of Sale (POS)",
    "Web Development",
    "Mobile App Development",
    "On-site Service",
    "Inventory Management (Development Ongoing)",
    "Accounts Management (Development Ongoing)",
    "ERP (Development Ongoing)",
  ];

  return (
    <>
      <_Title title="Company Profile" />
      <_Layout>
        <div className="bg-gray-100 min-h-screen pt-16">
          {/* Hero Section */}
          <header className="bg-base-200 py-20 text-white text-center">
            <div className="container mx-auto">
              <h1 className="text-5xl font-extrabold">Company Profile</h1>
              <p className="text-xm mt-4 ml-4 mr-4">
                BPA is a leading software firm specializing in automated solutions for various organizations. We are located in Baridhara DOHS, Dhaka, Bangladesh, but we serve clients nationwide. We are dedicated to working with cutting-edge technologies and adhering to best practices. Our team comprises the best professionals to ensure top-quality services, offering advice, sales, and support to help our clients achieve peak performance.
                <br />
                BPA was founded in 2018 by Shahidul Islam Salim, with a vision for change. Salim has over 12 years of experience as a lead software engineer in a US-based company. He brings his wealth of knowledge and experience to BPA, leading a team of highly skilled and dedicated professionals.
              </p>
            </div>
          </header>

          {/* Body Section */}
          <div className="container mx-auto p-6">
            <SectionTitle title="Our key products include:" className="flex items-center justify-center text-black" />
            <BulletList items={keyProducts}  />

            <SectionTitle title="Ownership & Management" className="flex items-center justify-center mt-6 text-black" />
            <div className="flex items-center justify-center mt-6">
              <Image src="/images/bpa_ss.png" alt="CEO" width={800} height={500} />
            </div>
            <p className="text-black mt-6 ml-10 mr-10 flex items-center justify-center">
              BPA is a private company founded in 2018 by Shahidul Islam Salim, with a vision for change. He serves as the CEO of BPA, bringing his 12 years of experience as a lead Software Engineer in a US-based company to start this venture.
            </p>
          </div>
        </div>
      </_Layout>
    </>
  );
};

export default CompanyProfile;
