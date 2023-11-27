import React, { useState } from "react";
import "daisyui/dist/full.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/router";

import _Layout from './components/layout/_layout';
import _Title from './components/layout/_title';

function CareerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [nid, setNid] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [DOB, setDOB] = useState("");
  const [mohtername, setMotherName] = useState("");
  const router = useRouter();
  const {title}=router.query;
  const designation=title;
  



  const format= new Date();
  const appDate= format.toLocaleString('en-US',{
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      if(designation==null)
      {
        formData.append("name", name);
        formData.append("email", email);
        formData.append("gender", gender);
        formData.append("phone", phone);
        formData.append("nationality", nationality);
        formData.append("address", address);
        formData.append("resume", resume);
        formData.append("coverLetter", coverLetter);
        formData.append("DOB", DOB);
        formData.append("nid", nid);
        formData.append("mohtername", mohtername);
        formData.append("appDate", appDate);
        formData.append("designation", "No circular");
      }
      else
      {
        formData.append("name", name);
        formData.append("email", email);
        formData.append("gender", gender);
        formData.append("phone", phone);
        formData.append("nationality", nationality);
        formData.append("address", address);
        formData.append("resume", resume);
        formData.append("coverLetter", coverLetter);
        formData.append("DOB", DOB);
        formData.append("nid", nid);
        formData.append("mohtername", mohtername);
        formData.append("appDate", appDate);
        formData.append("designation", designation);
      }

      console.log(formData.designation);

      const response = await axios.post("http://localhost:3000/api/bpa/admin/addCareer", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        toast.success("Application added successfully");
      } else {
        toast.error("Entry Already Exists");
      }

      setIsSubmitting(false);
      console.log(response);
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
      toast.error("Entry Exists");
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
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="nid" className="block text-gray-700 text-sm font-bold mb-2">NID</label>
                  <input
                    type="text"
                    id="nid"
                    name="nid"
                    className="input input-bordered w-full"
                    placeholder="123-456-7890"
                    required
                    onChange={(e) => setNid(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setGender(e.target.value)}
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
                    onChange={(e) => setPhone(e.target.value)}
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
                    onChange={(e) => setNationality(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="DOB" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                  <input
                    type="date"
                    id="DOB"
                    name="DOB"
                    className="input input-bordered w-full"
                    required
                    onChange={(e) => setDOB(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="mohtername" className="block text-gray-700 text-sm font-bold mb-2">Mother Name</label>
                  <input
                    type="text"
                    id="mohtername"
                    name="mohtername"
                    className="input input-bordered w-full"
                    placeholder="Mary Jane"
                    required
                    onChange={(e) => setMotherName(e.target.value)}
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
                    onChange={(e) => setAddress(e.target.value)}
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
                    onChange={(e) => setResume(e.target.files[0])}
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
                    onChange={(e) => setCoverLetter(e.target.value)}
                  />
                </div>

                <div className="flex justify-end">
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
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
