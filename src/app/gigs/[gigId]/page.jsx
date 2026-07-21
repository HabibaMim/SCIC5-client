import OrderNowButton from '@/components/OrderNowButton';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

export async function generateMetadata({ params }) {
  const { gigId } = await params;

  return {
    title: `GigsVerse - Gig Details`,
  };
}

const fetchSingleGig = async (gigId, token) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gigs/${gigId}`, {
    headers: {
      authorization: `Bearer ${token}` || ""
    }
  });
  const data = await res.json();
  return data || {};
};

const GigDetails = async ({ params }) => {

  const { gigId } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers()
  });

  const gig = await fetchSingleGig(gigId, token);

  const {
    Title,
    _id,
    orderCount,
    Description,
    Image: gigImage,
    Category,
    "Starting Price": startingPrice,
    "Delivery Time": deliveryTime,
    sellerName,
    sellerImage
  } = gig;

  return (
    <div className="py-16 px-6 md:px-20 bg-base-100">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-2xl md:text-4xl font-bold text-pink-500 mb-6">
          {Title}
        </h1>

        <div className="grid md:grid-cols-5 gap-10 items-center">

          <div className="md:col-span-3 relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">

            <Image
  src={gigImage}
  alt="gig image"
  fill
  sizes="(max-width: 768px) 100vw, 60vw"
  quality={90}
  priority
  className="object-cover"
/>

          </div>

          <div className="md:col-span-2 space-y-6">

            {sellerName && (
              <div className="flex items-center gap-3">
               
                <span className="text-base-content/70 text-sm">by <span className="font-semibold text-base-content">{sellerName}</span></span>
              </div>
            )}

            <div>

              <h2 className="text-2xl font-bold text-pink-500">
                Gig Overview
              </h2>

              <p className="text-base-content/60 mt-3 leading-relaxed">
                {Description}
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-base-200 p-4 rounded-xl">
                <p className="text-sm text-base-content/50">
                  Category
                </p>

                <p className="font-semibold text-base-content">
                  {Category}
                </p>
              </div>

              <div className="bg-base-200 p-4 rounded-xl">
                <p className="text-sm text-base-content/50">
                  Delivery Time
                </p>

                <p className="font-semibold text-base-content">
                  {deliveryTime}
                </p>
              </div>

              <div className="bg-base-200 p-4 rounded-xl">
                <p className="text-sm text-base-content/50">
                  Starting Price
                </p>

                <p className="font-semibold text-pink-400">
                  ${startingPrice}
                </p>
              </div>

              <div className="bg-base-200 p-4 rounded-xl">
                <p className="text-sm text-base-content/50">
                  Order Count
                </p>

                <p className="font-semibold text-base-content">
                  {orderCount || 0}
                </p>
              </div>

            </div>

            <OrderNowButton gig={gig} />

          </div>

        </div>

      </div>

    </div>
  );
};

export default GigDetails;