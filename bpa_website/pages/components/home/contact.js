import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function contact() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        company: "",
        phone: "",
        subject: "",
      });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:3000/api/bpa/admin/addContact", formData);
            console.log("Success");
            toast.success("Form submitted successfully", {
                position: "top-right",
                autoClose: 3000, // Auto-close the toast after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
        }
        catch(error){
            console.error("Error submitting form:", error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        const { email, valueE } = e.target;
        const { message, valueM } = e.target;
        const { company, valueC } = e.target;
        const { phone, valueP } = e.target;
        const { subject, valueS } = e.target;
        setFormData({
          ...formData,
          [name]: value,
          [email]: valueE,
            [message]: valueM,
            [company]: valueC,
            [phone]: valueP,
            [subject]: valueS,
        });
      };

    useEffect(() => {
        // Check if there's a hash fragment in the URL
        if (router.asPath.includes("#Contact Us")) {
          // Find the target div by its ID and scroll to it
            const contactdiv = document.getElementById("Contact Us");
            if (contactdiv) {
                contactdiv.scrollIntoView({ behavior: "smooth" });
            }
        }
      }, [router.asPath]);


    return (
        <div id="Contact Us" className="grid place-items-center w-full bg-base-200" data-theme="cupcake">
            <ToastContainer />
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl text-center text-black font-bold">Contact Us</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.8246146241962!2d90.41278743810331!3d23.81029566997158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71bcf754e23%3A0x69c229de7a882b3d!2sMaxEcho%20HR%20and%20Payroll%20Software!5e0!3m2!1sen!2sbd!4v1695727710690!5m2!1sen!2sbd" 
                            width="350" 
                            height="620" 
                            allowfullscreen="" 
                            loading="lazy" >
                    </iframe>
                    
                    <hr className="md:hidden border-t border-gray-300 my-4" /> {/* Divider for mobile view */}
                    <div className="md:col-span-2">
                        <div className="border-l border-gray-300 pl-4">
                            <h2 className="text-2xl text-black font-semibold mb-4">Contact Form</h2>
                            <form onSubmit={handleSubmit}>
                                {/* ... (Form fields code here) */}
                                <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-black">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 p-2 block w-full border border-gray-700 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"
                                    placeholder="Your Name"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-black">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 p-2 block w-full border border-gray-700 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"
                                    placeholder="Your Email"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="company" className="block text-sm font-medium text-black">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="mt-1 p-2 block w-full border border-gray-700 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"
                                    placeholder="Your company name."
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-sm font-medium text-black">
                                    Subject
                                </label>
                                <select id="subject" name="subject" className="mt-1 p-2 block w-full border border-gray-700 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm" placeholder="Please select a subject" required onChange={handleChange}>
                                    <option value="Please select a subject">--Please select a subject--</option>
                                    <option value="Financial ERP">Financial ERP</option>
                                    <option value="HR & Payroll">HR & Payroll</option>
                                    <option value="BPA">BPA</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-black">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    className="mt-1 p-2 block w-full border border-gray-700 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"
                                    placeholder="Your phone number."
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-black">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="mt-1 p-2 block w-full border border-gray-700 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"
                                    placeholder="Your Message"
                                    required
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="bg-indigo-500 text-black px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                                    Submit
                                </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default contact;


