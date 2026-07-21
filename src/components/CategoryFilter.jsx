"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const categories = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Programming & Tech"
];

const CategoryFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    if (e.target.value) {
      params.set('category', e.target.value);
    } else {
      params.delete('category');
    }
    params.set('page', '1');
    router.push(`/gigs?${params.toString()}`);
  };

  return (
    <select
      value={searchParams.get('category') || ''}
      onChange={handleChange}
      className="select select-bordered px-[55px] border-base-300 bg-base-200 text-base-content"
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
};

export default CategoryFilter;