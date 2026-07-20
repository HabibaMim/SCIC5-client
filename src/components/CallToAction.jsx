import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <div className="py-20 px-6 md:px-20 bg-gradient-to-r from-pink-600 to-pink-400">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Ready to Start Freelancing?
        </h2>

        <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
          Turn your skills into income. Listing a gig takes just a few minutes
          and you could start receiving orders today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="btn bg-black text-white hover:bg-base-300 hover:text-black border-none px-8 flex items-center gap-2"
          >
            Become a Seller <FaArrowRight />
          </Link>

          <Link
            href="/about"
            className="btn btn-outline border-black text-black hover:bg-black hover:text-white px-8"
          >
            Learn More
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CallToAction;