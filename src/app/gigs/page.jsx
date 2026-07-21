import CategoryFilter from '@/components/CategoryFilter';
import PriceFilter from '@/components/PriceFilter';
import SortDropdown from '@/components/SortDropdown';
import GigCard from '@/components/GigCard';
import Pagination from '@/components/Pagination';
import { fetchGigs } from '@/lib/gigs/data';
import React from 'react';
import SearchBar from '@/components/Searchbar';

export const metadata = {
  title: "GigsVerse - Browse Gigs",
};

const GigsPage = async ({ searchParams }) => {

  const sParams = await searchParams;

  const { gigs, totalPages, currentPage } = await fetchGigs(
    sParams?.search || "",
    sParams?.category || "",
    sParams?.minPrice || "",
    sParams?.maxPrice || "",
    sParams?.sortBy || "",
    sParams?.page || "1"
  );

  return (
    <div className='min-h-screen bg-base-100'>
      <div className='text-center pt-[40px] pb-[10px]'>
        <h1 className='text-4xl font-bold text-pink-500'>All Gigs</h1>
      </div>

      <div className='flex justify-end items-end gap-[10px] flex-col mt-[20px] mx-[100px]'>
        <SearchBar></SearchBar>
        <div className='md:flex grid grid-cols-1 gap-[15px] items-center justify-between'>
            <PriceFilter></PriceFilter>
          <CategoryFilter></CategoryFilter>
          
          <SortDropdown></SortDropdown>
          
        </div>
      </div>

      <div>
        {gigs?.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-[30px] px-[20px] md:px-[30px] gap-[20px] space-y-[20px]'>
            {
              gigs.map((gig) => <GigCard key={gig._id} gig={gig}></GigCard>
              )}
          </div>
        ) : (
          <div className='text-center py-[60px]'>
            <p className='text-lg text-base-content/60'>No gigs found. Try adjusting your filters.</p>
          </div>
        )}
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>

  )
}
export default GigsPage;