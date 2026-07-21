"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const Pagination = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/gigs?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 py-10">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn btn-sm bg-base-200 text-base-content border-none disabled:opacity-40"
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`btn btn-sm border-none ${
            page === currentPage
              ? "bg-pink-500 text-white"
              : "bg-base-200 text-base-content hover:bg-pink-400/20"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn btn-sm bg-base-200 text-base-content border-none disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;