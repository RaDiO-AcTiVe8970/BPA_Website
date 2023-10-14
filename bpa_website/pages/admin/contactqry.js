import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactSubmission from './admin_layout/ContactSubmission';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic';

const _Layout = dynamic(() => import('./admin_layout/_mod_layout'));
const _Title = dynamic(() => import('./admin_layout/_title'));

const Contact = () => {
  const [submissions, setSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [replyingTo, setReplyingTo] = useState(null); // Keeps track of the submission being replied to
  const [replyMessage, setReplyMessage] = useState('');

  const handleReplyClick = (submission) => {
    // Set the submission being replied to
    setReplyingTo(submission);
    setReplyMessage(''); // Clear any previous reply message
  };

  const handleReplyCancel = () => {
    setReplyingTo(null); // Clear the replyingTo state to hide the reply form
  };

  const handleSubmitReply = async () => {
    try {
      // You can submit the reply using an API call similar to how you handle the original form submissions
      await axios.post('http://localhost:3000/api/bpa/admin/replytoContact', {
        id: replyingTo.id, // Add the submission ID or relevant identifier
        reply: replyMessage,
      });

      // Optionally, you can refresh the submissions or perform other actions here

      toast.success('Reply sent successfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setReplyingTo(null); // Clear the replyingTo state to hide the reply form
    } catch (error) {
      console.error('Error sending reply:', error);
      toast.error('Failed to send the reply');
    }
  };

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/bpa/admin/getAllContacts', {
          withCredentials: true,
        });
        setSubmissions(response.data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <>
    <_Title title="Contact Queries" />
    <_Layout>
    <div className="p-4" data-theme="cupcake">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Contacts</h1>
      <div className="space-y-6">
        {isLoading ? (
          <p className="text-gray-500">Loading submissions...</p>
        ) : submissions.length > 0 ? (
          submissions.map((submission, index) => (
            <div key={index} className="border rounded-md p-4">
              <ContactSubmission submission={submission} />
              {!replyingTo || replyingTo.id !== submission.id ? (
                <button
                  onClick={() => handleReplyClick(submission)}
                  className="mt-2 bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  Reply
                </button>
              ) : (
                <div className="mt-2">
                  <textarea
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    rows="3"
                    className="w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500"
                    placeholder="Your reply..."
                  ></textarea>
                  <div className="mt-2">
                    <button
                      onClick={handleSubmitReply}
                      className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 mr-2"
                    >
                      Send
                    </button>
                    <button
                      onClick={handleReplyCancel}
                      className="bg-gray-400 text-black px-3 py-1 rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No submissions yet.</p>
        )}
      </div>
      <ToastContainer />
    </div>
    </_Layout>
    </>
  );
};

export default Contact;
