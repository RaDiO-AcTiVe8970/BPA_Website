import { useEffect } from "react";
import { useRouter } from "next/router";


function contact() {
    const router = useRouter();

    useEffect(() => {
        // Check if there's a hash fragment in the URL
        if (router.asPath.includes("#contactdiv")) {
          // Find the target div by its ID and scroll to it
            const contactdiv = document.getElementById("contactdiv");
            if (contactdiv) {
                contactdiv.scrollIntoView({ behavior: "smooth" });
            }
        }
      }, [router.asPath]);


    return (
        <div id="Contact Us" className="grid place-items-center w-full bg-base-200" data-theme="cupcake">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl text-center text-black font-bold">Contact Us</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.8246146241962!2d90.41278743810331!3d23.81029566997158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71bcf754e23%3A0x69c229de7a882b3d!2sMaxEcho%20HR%20and%20Payroll%20Software!5e0!3m2!1sen!2sbd!4v1695727710690!5m2!1sen!2sbd" 
                            width="340" 
                            height="385" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    
                    <hr className="md:hidden border-t border-gray-300 my-4" /> {/* Divider for mobile view */}
                    <div className="md:col-span-2">
                        <div className="border-l border-gray-300 pl-4">
                            <h2 className="text-2xl text-black font-semibold mb-4">Contact Form</h2>
                            <form>
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
