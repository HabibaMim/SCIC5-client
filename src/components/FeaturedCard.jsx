import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedCard = ({ gig }) => {

  const { Title, _id, Description, Image: gigImage, Category, "Delivery Time": deliveryTime, Skills, "Starting Price": startingPrice } = gig;

  return (
    <div className="group bg-base-200 border border-base-300 rounded-xl shadow-md hover:shadow-xl hover:border-pink-400/40 transition overflow-hidden flex flex-col h-full">

      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={gigImage}
          alt="gig image"
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
        <span className="absolute top-3 left-3 bg-pink-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
          {Category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">

        <h2 className="text-lg font-bold">
          {Title}
        </h2>

        <p className="text-sm text-base-content/60 mt-2 line-clamp-2">
          {Description}
        </p>

        <div className="mt-3 space-y-1 text-sm text-base-content/70">
          <p>⏱ Delivery: {deliveryTime} day{deliveryTime > 1 ? "s" : ""}</p>
          <p className="font-semibold text-pink-400">
            Starting at ${startingPrice}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {Skills?.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="text-xs bg-base-300 text-base-content px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <Link
            href={`/gigs/${_id}`}
            className="w-full inline-block text-center bg-pink-400 hover:bg-pink-300 text-black py-2 rounded-lg font-medium transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;