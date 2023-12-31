import React, { useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from 'next/dynamic';

const _Layout = dynamic(() => import('./admin_layout/_mod_layout'));
const _Title = dynamic(() => import('./admin_layout/_title'));

export default function AddFAQ() {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const answerTextareaRef = useRef(null);

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);

    // Automatically adjust the textarea's height based on the content
    if (answerTextareaRef.current) {
      answerTextareaRef.current.style.height = "auto";
      answerTextareaRef.current.style.height = `${answerTextareaRef.current.scrollHeight}px`;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:3000/api/bpa/admin/addFAQ", {
        category,
        question,
        answer,
      },{
        withCredentials: true,
      });
      if(response)
      {
        toast.success("FAQ added successfully");
      }

      setIsSubmitting(false);
    } catch (error) {
      // Handle errors (e.g., display an error message)
      toast.error("Failed to add FAQ");

      setIsSubmitting(false);
    }
  };

  return (
    <>
    <_Title title="Add FAQ" />
    <_Layout>
      
      <section data-theme="cupcake">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Add FAQ
          </h1>
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category
              </label>
              <input
                type="text"
                className="input input-primary input-bordered w-full p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Question
              </label>
              <input
                type="text"
                className="input input-primary input-bordered w-full p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500"
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Answer
              </label>
              <textarea
                ref={answerTextareaRef}
                className="input input-primary input-bordered w-full p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500"
                rows="1"
                placeholder="Answer"
                value={answer}
                onChange={handleAnswerChange}
                required
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding..." : "Add FAQ"}
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
