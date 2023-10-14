import React from 'react';

const ContactSubmission = ({ submission }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mb-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{submission.name}</h2>
      <p className="text-gray-600">{submission.email}</p>
      <p className="text-gray-600">{submission.company}</p>
      <p className="text-gray-600">{submission.subject}</p>
      <p className="text-gray-600">{submission.phone}</p>
      <p className="text-black">Query: </p><p className="text-gray-800 mt-2">{submission.message}</p>
    </div>
  );
};

export default ContactSubmission;
