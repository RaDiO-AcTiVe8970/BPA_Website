import React from "react";
import dynamic from "next/dynamic";
import "daisyui/dist/full.css"; // Import DaisyUI styles
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";

const _Layout = dynamic(() => import('./components/layout/_layout'));
const _Title = dynamic(() => import('./components/layout/_title'));

function CareerPage() {
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("gender", gender);
      formData.append("phone", phone);
      formData.append("nationality", nationality);
      formData.append("address", address);
      formData.append("resume", resume);
      formData.append("coverLetter", coverLetter);
  
      const response = await axios.post("http://localhost:3000/api/bpa/admin/addCareer", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data"
        },
      });
  
      if (response.status === 200) {
        toast.success("Application added successfully");
      } else {
        toast.error("Failed to add Application. Please check the server logs.");
      }
  
      setIsSubmitting(false);
      console.log(response);
      console.log(formData);
    } catch (error) {
      console.error(error); // Log the error for debugging
      toast.error("Failed to add Application. Please check the server logs.");
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <>
      <_Title title="Careers" />
      <_Layout>
        <div className="bg-gray-100 min-h-screen pt-16" data-theme="bumblebee">
          {/* Hero Section */}
          <header className="bg-base-200 py-20 text-white text-center" data-theme="dark">
            <div className="container mx-auto">
              <h1 className="text-5xl font-extrabold">Join Our Team</h1>
              <p className="text-xl mt-4">
                Explore exciting career opportunities at our company and take your career to the next level.
              </p>
            </div>
          </header>

          {/* Application Form Section */}
          <div className="container mx-auto p-10">
            <h2 className="text-3xl font-semibold text-center">Apply Now</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6 ml-10 mr-10">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* Add more form fields based on your CareerEntity schema */}
                <div className="mb-4">
                  <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    className="select select-bordered w-full"
                    required
                  >
                    <option value="" disabled selected>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="input input-bordered w-full"
                    placeholder="+8801XXXXXXXXX"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="nationality" className="block text-gray-700 text-sm font-bold mb-2">Nationality</label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    className="input input-bordered w-full"
                    placeholder="Bengali"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="input input-bordered w-full"
                    placeholder="123-456-7890"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="resume" className="block text-gray-700 text-sm font-bold mb-2">Resume/CV (PDF)</label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    className="input input-bordered w-full h-32"
                    placeholder="Write your cover letter here"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </_Layout>
    </>
  );
}

export default CareerPage;

