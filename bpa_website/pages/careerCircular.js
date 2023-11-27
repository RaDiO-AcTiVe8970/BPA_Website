// CareerCircular.js

import React from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import JobCard from './components/career/jobcard';

const _Layout = dynamic(() => import('./components/layout/_layout'));
const _Title = dynamic(() => import('./components/layout/_title'));

const jobs = [
  { title: 'Software Engineer', location: 'Remote', date: 'June 15, 2023' },
  { title: 'UX Designer', location: 'New York', date: 'June 20, 2023' },
  // Add more job circulars as needed
];

function CareerCircular() {
  return (
    <>
      <_Title title="Career Circular" />
      <_Layout>
        <div className="bg-gray-100 min-h-screen pt-16">
          <header className="bg-base-200 py-20 text-white text-center">
            <div className="container mx-auto">
              <h1 className="text-5xl font-extrabold">Join Our Team</h1>
              <p className="text-xl mt-4">
                Explore exciting career opportunities at our company and take your career to the next level.
              </p>
            </div>
          </header>

          <div className="container mx-auto p-10">
            <h2 className="text-3xl font-semibold text-center text-black">Current Job Openings</h2>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {jobs.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <JobCard key={index} job={job} index={index} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </_Layout>
    </>
  );
}

export default CareerCircular;
