// JobCard.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const JobCard = ({ job, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleApply = () => {
    router.push({
      pathname: '/career',
      query: job.title,
    });
  };
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse collapse-plus bg-base-200 collapse-bordered focus:ring focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 ${isOpen ? 'open' : ''}`}>
      <input
        type="radio"
        name={`my-accordion-${index}`}
        checked={isOpen}
        onChange={toggleAccordion}
      /> 
      <div className="collapse-title text-xl font-medium bg-white text-black" onClick={toggleAccordion}>
        {job.title}
      </div>
      <div className="collapse-content">
        {isOpen && (
          <>
            <p>Location: {job.location}</p>
            <p>Date: {job.date}</p>
            <br/>
            {/* Add more details as needed */}
          </>
        )}
        <button className='btn btn-primary btn-sm' onClick={handleApply}>Apply Now!</button>
      </div>
    </div>
  );
};

export default JobCard;
