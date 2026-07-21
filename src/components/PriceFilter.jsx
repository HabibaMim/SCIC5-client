"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const PriceFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  const applyFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (minPrice) {
      params.set("minPrice", minPrice);
    } else {
      params.delete("minPrice");
    }
    if (maxPrice) {
      params.set("maxPrice", maxPrice);
    } else {
      params.delete("maxPrice");
    }
    params.set("page", "1");
    router.push(`/gigs?${params.toString()}`);

    // Close the dropdown by removing focus
    document.activeElement?.blur();
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn bg-base-200 text-base-content border-base-300 m-1">
        Price {(minPrice || maxPrice) && `($${minPrice || 0}-${maxPrice || '∞'})`}
        <svg className="h-[1em] opacity-75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7 10l5 5 5-5z" />
        </svg>
      </div>
      <div tabIndex={0} className="dropdown-content menu bg-base-200 border border-base-300 rounded-box z-10 w-64 p-4 shadow-lg gap-3">
        <label className="text-sm text-base-content font-medium">Min Price ($)</label>
        <input
          type="number"
          min={0}
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="0"
          className="input input-bordered input-sm w-full mb-2 border-base-300 bg-base-100 text-base-content"
        />

        <label className="text-sm text-base-content font-medium">Max Price ($)</label>
        <input
          type="number"
          min={0}
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Any"
          className="input input-bordered input-sm w-full mb-3 border-base-300 bg-base-100 text-base-content"
        />

        <button
          onClick={applyFilter}
          className="btn btn-sm bg-pink-500 hover:bg-pink-600 text-white border-none w-full"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;