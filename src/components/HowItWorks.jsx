import React from 'react';
import { FaSearch, FaComments, FaCheckDouble, FaUserPlus, FaFileAlt, FaWallet } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <div className="py-20 px-6 md:px-20 bg-base-100">

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          How It Works
        </h2>
        <p className="text-base-content/60 mt-3 max-w-2xl mx-auto">
          Get your project done in three simple steps, or start earning as a freelancer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="p-6 rounded-xl shadow-md bg-base-200 border border-base-300 text-center hover:border-pink-400/50 transition">
          <FaSearch className="text-4xl mx-auto text-pink-400" />
          <h3 className="text-xl font-semibold mt-4">Browse Gigs</h3>
          <p className="text-base-content/60 mt-2">
            Explore gigs by category, price, and skills to find the perfect freelancer.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-md bg-base-200 border border-base-300 text-center hover:border-pink-400/50 transition">
          <FaComments className="text-4xl mx-auto text-pink-400" />
          <h3 className="text-xl font-semibold mt-4">Place an Order</h3>
          <p className="text-base-content/60 mt-2">
            Select a gig, review the details, and confirm your order in minutes.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-md bg-base-200 border border-base-300 text-center hover:border-pink-400/50 transition">
          <FaCheckDouble className="text-4xl mx-auto text-pink-400" />
          <h3 className="text-xl font-semibold mt-4">Get It Done</h3>
          <p className="text-base-content/60 mt-2">
            Track your order and receive quality work delivered on time.
          </p>
        </div>

      </div>

      <div className="flex items-center gap-4 my-14">
        <div className="flex-1 h-px bg-base-300"></div>
        <span className="font-semibold text-base-content/60">OR</span>
        <div className="flex-1 h-px bg-base-300"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="p-6 rounded-xl shadow-md bg-base-200 border border-pink-400/20 text-center hover:border-pink-400/50 transition">
          <FaUserPlus className="text-4xl mx-auto text-pink-400" />
          <h3 className="text-xl font-semibold mt-4">Become a Seller</h3>
          <p className="text-base-content/60 mt-2">
            Create an account and set up your freelancer profile in minutes.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-md bg-base-200 border border-pink-400/20 text-center hover:border-pink-400/50 transition">
          <FaFileAlt className="text-4xl mx-auto text-pink-400" />
          <h3 className="text-xl font-semibold mt-4">List Your Gig</h3>
          <p className="text-base-content/60 mt-2">
            Add your service details, pricing, and skills to attract buyers.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-md bg-base-200 border border-pink-400/20 text-center hover:border-pink-400/50 transition">
          <FaWallet className="text-4xl mx-auto text-pink-400" />
          <h3 className="text-xl font-semibold mt-4">Start Earning</h3>
          <p className="text-base-content/60 mt-2">
            Fulfill orders and get paid for delivering great work.
          </p>
        </div>

      </div>

    </div>
  );
};

export default HowItWorks;