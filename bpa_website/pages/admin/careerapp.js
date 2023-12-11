// CareerApplications.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleDelete = async (id) => {
    try {
      // Make a request to delete the application with the specified ID
      await axios.delete(`http://localhost:3000/api/bpa/admin/deleteCareer/${id}`, {
        withCredentials: true,
      });

      // Update the applications state to reflect the deletion
      setApplications((prevApplications) =>
        prevApplications.filter((application) => application.id !== id)
      );

      // Show success toast
      toast.success('Application deleted successfully');
    } catch (error) {
      console.error('Error deleting application:', error);
      // Show error toast
      toast.error('Error deleting application');
    }
  };

  const handleEmploymentStatusChange = async (id, newStatus) => {
    try {
      // Make a request to update the employment status
      await axios.put(`http://localhost:3000/api/bpa/admin/updateEmploymentStatus/${id}`, {
        employmentStatus: newStatus,
      });

      // Update the applications state to reflect the status change
      setApplications((prevApplications) =>
        prevApplications.map((application) =>
          application.id === id ? { ...application, employmentStatus: newStatus } : application
        )
      );

      // Show success toast
      toast.success(`Employment status updated to ${newStatus}`);
    } catch (error) {
      console.error('Error updating employment status:', error);
      // Show error toast
      toast.error('Error updating employment status');
    }
  };

  return (
    <>
      <_Title title="Career Applications" />
      <_Layout>
        <div data-theme="cupcake">
          <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Career Applications</h1>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">NID</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Date Applied</th>
                  <th className="py-2 px-4 border-b">Resume</th>
                  <th className="py-2 px-4 border-b">Employment Status</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application) => (
                  <tr key={application.id}>
                    <td className="py-2 px-4 border-b">{application.name}</td>
                    <td className="py-2 px-4 border-b">{application.nid}</td>
                    <td className="py-2 px-4 border-b">{application.email}</td>
                    <td className="py-2 px-4 border-b">{application.appDate}</td>
                    <td className="py-2 px-4 border-b">
                      <a
                        href={`http://localhost:3000/api/bpa/admin/resumes/${application.resume}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View Resume
                      </a>
                    </td>
                    <td className="py-2 px-4 border-b">{application.employmentStatus}</td>
                    <td className="py-2 px-4 border-b">
                      {application.employmentStatus === 'NULL' ? (
                        <button
                          onClick={() => handleEmploymentStatusChange(application.id, 'Employed')}
                          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        >
                          Employ
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEmploymentStatusChange(application.id, 'NULL')}
                          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        >
                          Unemploy
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(application.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </_Layout>
    </>
  );
};

export default CareerApplications;
