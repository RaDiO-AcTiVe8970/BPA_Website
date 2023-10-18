// pages/company.js
import React from "react";
import dynamic from "next/dynamic";

const _Layout = dynamic(() => import('./components/layout/_layout'));
const _Title = dynamic(() => import('./components/layout/_title'));

function CompanyProfile() {
  return (
    <>
      <_Title title="Company Profile" />
      <_Layout>
        <section className="p-8 bg-gradient-to-r text-black" data-theme="cupcake">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-semibold mb-4 animate-bounce">Our Company</h1>

            <div className="bg-base-200 bg-opacity-50 p-6 rounded-lg mb-4 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-2">About Us</h2>
              <p>
                Write a brief description of your company, its history, and what it does.
              </p>
            </div>

            <div className="bg-base-200 bg-opacity-50 p-6 rounded-lg mb-4 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-2">Mission and Vision</h2>
              <p>
                Describe your company's mission and vision statements.
              </p>
            </div>

            <div className="bg-base-200 bg-opacity-50 p-6 rounded-lg mb-4 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
              <ul>
                <li>Team Member 1</li>
                <li>Team Member 2</li>
                <li>Team Member 3</li>
                {/* Add more team members as needed */}
              </ul>
            </div>

            <div className="bg-base-200 bg-opacity-30 p-6 rounded-lg animate-fade-in">
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p>
                Provide contact information such as the company address, email, and phone number.
              </p>
            </div>
          </div>
        </section>
      </_Layout>
    </>
  );
}

export default CompanyProfile;
