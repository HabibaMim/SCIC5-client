"use client";
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Thanks for subscribing! We'll keep you posted.");
    setEmail('');
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-base-200">
      <div className="max-w-2xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-3">
          Stay in the Loop
        </h2>
        <p className="text-base-content/60 mb-8">
          Get notified about new gigs, seller tips, and platform updates.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="input input-bordered w-full sm:w-80"
          />
          <button
            type="submit"
            className="btn bg-pink-400 hover:bg-pink-300 text-black border-none px-8"
          >
            Subscribe
          </button>
        </form>

      </div>
    </div>
  );
};

export default Newsletter;