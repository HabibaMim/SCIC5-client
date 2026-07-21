"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const SortDropdown = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    if (e.target.value) {
      params.set('sortBy', e.target.value);
    } else {
      params.delete('sortBy');
    }
    params.set('page', '1');
    router.push(`/gigs?${params.toString()}`);
  };

  return (
    <select
      value={searchParams.get('sortBy') || ''}
      onChange={handleChange}
      className="select select-bordered border-base-300 bg-base-200 text-base-content"
    >
      <option value="">Sort By</option>
      <option value="priceLowHigh">Price: Low to High</option>
      <option value="priceHighLow">Price: High to Low</option>
      <option value="popular">Most Popular</option>
    </select>
  );
};

export default SortDropdown;