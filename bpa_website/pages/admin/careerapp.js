// CareerApplications.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

const _Layout = dynamic(() => import('../admin/admin_layout/_mod_layout'));
const _Title = dynamic(() => import('../admin/admin_layout/_title'));

const CareerApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/bpa/admin/getAllCareers', {
          withCredentials: true,
        });
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <_Title title="Career Applications" />
      <_Layout>
        <div data-theme="cupcake">
          <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Career Applications</h1>
            <ul>
              {applications.map((application) => (
                <li key={application.id} className="mb-4 p-4 border rounded shadow">
                  <p className="text-xl font-semibold">{application.name}</p>
                  <p className="text-gray-500">{application.email}</p>
                  <p className="text-gray-500">Date Applied: {application.appDate}</p>
                  <a
                    href={`http://localhost:3000/api/bpa/admin/resumes/${application.resume}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline block mt-2"
                  >
                    View Resume
                  </a>
                  <div className="mt-4">
                    
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </_Layout>
    </>
  );
};

export default CareerApplications;
