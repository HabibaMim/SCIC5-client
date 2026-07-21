import React from "react";
import Image from "next/image";
import Link from "next/link";
import { headers } from 'next/headers';
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import DeleteModal from "@/components/DeleteModal";
import { Button } from "@heroui/react";

export const metadata = {
  title: "GigsVerse - My Gigs",
};

const MyListingsPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user || !token) {
    redirect("/login");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/${session?.user?.id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    cache: "no-store"
  });

  const myGigs = await res.json() || [];

  return (
    <div>

      {myGigs?.length === 0 ? (

        <div className="bg-base-200 border flex items-center justify-center h-[450px] border-base-300 rounded-xl p-10 text-center mx-6 md:mx-20 mt-12">
          <p className="text-xl font-semibold text-base-content">
            You have no gigs listed yet.
          </p>
        </div>

      ) : (

        <div className="min-h-screen bg-base-100 px-6 md:px-20 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-500 mb-10">
            My Gigs
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {myGigs?.map((gig) => (
              <div
                key={gig?._id}
                className="bg-base-200 border border-base-300 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={gig?.Image}
                    alt="gig"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col gap-2">
                  <h2 className="text-xl font-semibold text-base-content line-clamp-1">
                    {gig.Title}
                  </h2>

                  <p className="text-base-content/60 text-sm line-clamp-2">{gig?.Description}</p>

                  <div className="flex justify-between">
                    <div className="flex flex-col text-sm text-base-content/70 mt-2">
                      <span>🏷️ {gig?.Category}</span>
                      <span>⏱ {gig?.["Delivery Time"]}</span>

                      <p className="text-pink-400 font-bold mt-1">
                        💰 ${gig?.["Starting Price"]}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl">
                      <p className="text-sm text-base-content/50">
                        Order Count
                      </p>

                      <p className="font-semibold text-base-content">
                        {gig?.orderCount || 0}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">

                    <Link href={`/gigs/${gig._id}`} className="flex-1">
                      <Button className="w-full bg-base-100 px-[20px] border border-pink-400 text-pink-400 py-2 rounded-lg hover:bg-pink-400/10 transition">
                        View
                      </Button>
                    </Link>
                    <Link href={`/gigs/${gig._id}/edit`} className="flex-1">
                      <Button className="w-full bg-pink-500 px-[20px] border-none text-white py-2 rounded-lg hover:bg-pink-600 transition">
                        Update
                      </Button>
                    </Link>
                    <DeleteModal gigId={gig._id}></DeleteModal>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>)}

    </div>

  );
};

export default MyListingsPage;