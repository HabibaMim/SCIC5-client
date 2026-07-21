"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get('search') || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    params.set('page', '1');
    router.push(`/gigs?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search gigs..."
        className="input input-bordered w-full border-base-300 bg-base-200 text-base-content"
      />
      <button
        type="submit"
        className="btn bg-pink-500 hover:bg-pink-600 text-white border-none"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;