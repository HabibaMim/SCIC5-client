import CancelOrderButton from '@/components/CancelOrderButton';
import { auth } from '@/lib/auth';
import { Avatar } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

export const metadata = {
  title: "GigsVerse - My Orders",
};

const OrdersPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user || !token) {
    redirect("/login");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${session?.user?.id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    cache: "no-store"
  });

  const orders = await res.json() || [];

  return (
    <div className="min-h-screen bg-base-100 py-12 px-6 md:px-20">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

        {/* LEFT - USER CARD */}
        <div className="lg:col-span-1">

          <div className="bg-base-200 border border-base-300 rounded-2xl shadow-md px-6 py-12 flex flex-col items-center text-center">

            <Avatar className="w-24 h-24 mb-4">
              <Avatar.Image
                alt="image"
                src={session?.user?.image ?? undefined}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>
                {session?.user?.name?.charAt(0)}
              </Avatar.Fallback>
            </Avatar>

            <h2 className="text-xl font-bold text-base-content">
              {session?.user?.name}
            </h2>

            <p className="text-base-content/60 text-sm mt-1">
              {session?.user?.email}
            </p>

          </div>

        </div>

        {/* RIGHT - ORDERS */}
        <div className="lg:col-span-3">

          <h1 className="text-3xl font-bold text-pink-500 mb-6">
            My Orders
          </h1>

          {orders?.length === 0 ? (

            <div className="bg-base-200 border flex items-center justify-center h-[450px] border-base-300 rounded-xl p-10 text-center">
              <p className="text-xl font-semibold text-base-content">
                You have no orders yet.
              </p>
            </div>

          ) : (

            <div className="grid grid-cols-1 gap-6">

              {orders?.map((order) => (

                <div
                  key={order?._id}
                  className="bg-base-200 border border-base-300 rounded-2xl shadow-sm hover:shadow-md transition w-full"
                >

                  <div className="flex gap-5 p-5 relative">

                    <CancelOrderButton orderId={order?._id}></CancelOrderButton>

                    <Image
                      src={order?.thumbnail ?? ''}
                      alt="thumbnail"
                      width={110}
                      height={110}
                      className="w-[100px] h-[100px] object-cover rounded-xl border border-base-300"
                    />

                    <div className="flex flex-col justify-center">

                      <p className="text-base-content font-semibold text-lg">
                        {order?.gigTitle}
                      </p>

                      {order?.requirements && (
                        <p className="text-base-content/60 text-sm mt-1 line-clamp-1">
                          {order.requirements}
                        </p>
                      )}

                      <p className="text-pink-400 font-semibold text-sm mt-1">
                        ${order?.price}
                      </p>

                      <p className="text-base-content/50 text-sm mt-1">
                        {new Date(order?.orderedAt).toDateString()}
                      </p>

                      <span className="mt-3 w-fit bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                        CONFIRMED
                      </span>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default OrdersPage;