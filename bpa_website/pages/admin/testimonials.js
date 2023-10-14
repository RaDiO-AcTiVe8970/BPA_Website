// pages/add-testimonials.js
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from 'next/dynamic';

const _Layout = dynamic(() => import('./admin_layout/_mod_layout'));
const _Title = dynamic(() => import('./admin_layout/_title'));

export default function AddTestimonials() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // Store the selected file
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("image", image);

      const response = await axios.post("http://localhost:3000/api/bpa/admin/addTestimonial", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      if (response) {
        toast.success("Testimonial added successfully");
      }

      setIsSubmitting(false);
    } catch (error) {
      toast.error("Failed to add Testimonial");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <_Title title="Add Testimonial" />
      <_Layout>
        <section data-theme="cupcake">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Add Testimonial
            </h1>
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="input input-primary input-bordered"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  className="input input-primary input-bordered"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image (File Upload)
                </label>
                <input
                  type="file"
                  className="input input-primary"
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/*"
                  required
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Adding..." : "Add Testimonial"}
                </button>
              </div>
            </form>
          </div>
        </section>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
      </_Layout>
    </>
  );
}
