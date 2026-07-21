import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GigCard = ({ gig }) => {

  const { _id, Title, Description, Image: gigImage, Category, "Starting Price": startingPrice, "Delivery Time": deliveryTime } = gig;

  return (
    <div
      key={_id}
      className="group bg-base-200 border border-base-300 rounded-xl shadow-sm hover:shadow-xl hover:border-pink-400/50 transition overflow-hidden flex flex-col h-full"
    >

      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={gigImage}
          alt={Title || "gig image"}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
        {Category && (
          <span className="absolute top-3 left-3 text-xs bg-pink-500 text-white px-3 py-1 rounded-full font-medium">
            {Category}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">

        <h2 className="text-lg font-bold text-base-content line-clamp-1">
          {Title}
        </h2>

        <p className="text-sm text-base-content/60 mt-2 line-clamp-2">
          {Description}
        </p>

        <div className="mt-3 space-y-1 text-sm text-base-content/70">
          {deliveryTime && <p>⏱ Delivery: {deliveryTime}</p>}
          <p className="font-semibold text-pink-400">
            💰 Starting at ${startingPrice}
          </p>
        </div>

        <div className="mt-auto pt-5">
          <Link
            href={`/gigs/${_id}`}
            className="btn w-full bg-pink-500 rounded-md hover:bg-pink-600 text-white border-none"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GigCard;