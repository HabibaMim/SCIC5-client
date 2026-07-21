"use client";
import { authClient, useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const OrderNowButton = ({ gig }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [requirements, setRequirements] = useState("");

  const handleOrder = async (e) => {
    e.preventDefault();
    const { data: jwtData } = await authClient.token();
    const token = jwtData?.token;
    if (!token) {
      toast.error("Authentication Failed! Order Not Placed.");
      return;
    }

    const orderData = {
      userId: session?.user?.id,
      buyerName: session?.user?.name,
      buyerEmail: session?.user?.email,
      gigTitle: gig?.Title,
      thumbnail: gig?.Image,
      price: gig?.["Starting Price"],
      requirements,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${gig?._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(orderData)
    });

    if (!res.ok) {
      toast.error("Something Went Wrong!");
      return;
    }
    toast.success("Order placed successfully!");
    router.refresh();
    router.push("/my-orders");
  };

  return (
    <div>
      <button className="btn w-full bg-pink-500 hover:bg-pink-600 text-white border-none" onClick={() => {
        document.getElementById('order_modal').showModal();
      }}>Order Now</button>

      <dialog id="order_modal" className="modal">
        <div className="modal-box bg-base-200 border border-base-300">

          <button
            type="button"
            onClick={() => document.getElementById('order_modal').close()}
            className="btn btn-sm btn-circle absolute right-3 top-3 bg-base-300 text-base-content border-none hover:bg-base-100"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-pink-500 text-center mb-6">
            Confirm Order
          </h2>

          <form onSubmit={handleOrder} className="flex flex-col gap-4">

            <div className="bg-base-100 rounded-lg p-3">
              <p className="text-base-content font-medium">{gig?.Title}</p>
              <p className="text-sm text-base-content/60 mt-1">Delivery: {gig?.["Delivery Time"]}</p>
            </div>

            <div>
              <label className="text-base-content font-medium">Special Requirements</label>
              <textarea
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                className="textarea textarea-bordered w-full mt-1 border-base-300 bg-base-100 text-base-content"
                placeholder="Describe what you need..."
              />
            </div>

            <div className="bg-base-100 rounded-lg p-3 flex justify-between">
              <span className="text-base-content font-medium">Total Price</span>
              <span className="font-bold text-pink-400">${gig?.["Starting Price"]}</span>
            </div>

            <button
              type="submit"
              className="btn bg-pink-500 hover:bg-pink-600 text-white border-none"
            >
              Confirm Order
            </button>

          </form>

        </div>

        <button
          onClick={() => document.getElementById('order_modal').close()}
          className="modal-backdrop"
        >
          close
        </button>

      </dialog>
    </div>
  );
};

export default OrderNowButton;