import React from 'react';
import { FaBriefcase, FaCheckCircle, FaUsers, FaStar } from 'react-icons/fa';

const Stats = () => {
  return (
    <div className="relative py-20 px-6 md:px-20 text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

        <div>
          <div className="flex items-center justify-center gap-2">
            <FaBriefcase className="text-2xl" />
            <h2 className="text-3xl font-bold">3,200+</h2>
          </div>
          <p className="text-white/80 mt-2">Gigs Listed</p>
        </div>

        <div>
          <div className="flex items-center justify-center gap-2">
            <FaCheckCircle className="text-2xl" />
            <h2 className="text-3xl font-bold">8,500+</h2>
          </div>
          <p className="text-white/80 mt-2">Orders Completed</p>
        </div>

        <div>
          <div className="flex items-center justify-center gap-2">
            <FaUsers className="text-2xl" />
            <h2 className="text-3xl font-bold">4,100+</h2>
          </div>
          <p className="text-white/80 mt-2">Active Freelancers</p>
        </div>

        <div>
          <div className="flex items-center justify-center gap-2">
            <FaStar className="text-2xl" />
            <h2 className="text-3xl font-bold">4.8/5</h2>
          </div>
          <p className="text-white/80 mt-2">Average Rating</p>
        </div>

      </div>

    </div>
  );
};

export default Stats;