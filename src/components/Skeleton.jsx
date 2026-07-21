import React from 'react';

const GigCardSkeleton = ({ count = 8 }) => {
  return (
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-[30px] px-[20px] md:px-[30px] gap-[20px] space-y-[20px]'>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-base-200 rounded-xl shadow-md overflow-hidden flex flex-col h-full animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-full h-52 bg-base-300" />

          <div className="p-5 flex flex-col flex-1 gap-3">
            {/* Title placeholder */}
            <div className="h-5 bg-base-300 rounded w-3/4" />

            {/* Description placeholder */}
            <div className="h-4 bg-base-300 rounded w-full" />
            <div className="h-4 bg-base-300 rounded w-5/6" />

            {/* Details placeholder */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="h-3 bg-base-300 rounded w-1/2" />
              <div className="h-3 bg-base-300 rounded w-2/3" />
              <div className="h-4 bg-base-300 rounded w-1/3 mt-1" />
            </div>

            {/* Category badge placeholder */}
            <div className="flex gap-2 mt-4">
              <div className="h-6 w-20 bg-base-300 rounded-full" />
            </div>

            {/* Button placeholder */}
            <div className="mt-auto pt-5">
              <div className="h-10 bg-base-300 rounded-lg w-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GigCardSkeleton;