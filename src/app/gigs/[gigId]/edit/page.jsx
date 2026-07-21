import EditGigForm from '@/components/EditGigForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

export const metadata = {
  title: "GigsVerse - Edit Gig",
};

const EditGigPage = async ({ params }) => {
  const { gigId } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers()
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gigs/${gigId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    cache: "no-store"
  });

  const gig = await res.json() || {};

  return <EditGigForm gig={gig} />;
};

export default EditGigPage;