import { fetchFeaturedGigs } from '@/lib/gigs/data';
import React from 'react';
import FeaturedCard from './FeaturedCard';

const FeaturedGigs = async () => {
  const gigs = await fetchFeaturedGigs();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-[30px] px-[20px] md:px-[100px] gap-[30px]'>
      {
        gigs?.map((gig) => <FeaturedCard key={gig?._id} gig={gig} />)
      }
    </div>
  );
};

export default FeaturedGigs;