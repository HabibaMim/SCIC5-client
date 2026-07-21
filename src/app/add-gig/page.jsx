"use client";
import { useRouter } from 'next/navigation';
import { useSession } from '@/lib/auth-client';
import { authFetch } from '@/lib/auth-fetch';
import toast from 'react-hot-toast';
import React from "react";

const CATEGORIES = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Programming & Tech",

];

const AddGigPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleAddGig = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const gigData = {
      Title: formData.get("title"),
      Description: formData.get("description"),
      Image: formData.get("image"),
      Category: formData.get("category"),
      "Starting Price": Number(formData.get("startingPrice")),
      "Delivery Time": formData.get("deliveryTime"),
      sellerId: session?.user?.id,
      sellerName: session?.user?.name,
      sellerImage: session?.user?.image,
    };

    try {
      const res = await authFetch(`${process.env.NEXT_PUBLIC_API_URL}/gigs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gigData),
      });

      if (!res.ok) {
        throw new Error("Failed to add gig");
      }

      const data = await res.json();
      if (data?.insertedId) {
        toast.success("Gig added successfully!");
        router.push("/my-gigs");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add gig. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-base-100 py-12 px-6 md:px-20">

      <div className="max-w-2xl mx-auto bg-base-200 border border-base-300 rounded-2xl shadow-md p-8">

        <h1 className="text-3xl font-bold text-pink-500 text-center mb-8">
          Add a Gig
        </h1>

        <form onSubmit={handleAddGig} className="flex flex-col gap-5">

          <div>
            <label className="text-base-content font-semibold">
              Gig Title
            </label>
            <input
              name="title"
              type="text"
              required
              placeholder="Example: I will design a modern logo"
              className="input input-bordered w-full mt-2 border-base-300 bg-base-100 text-base-content"
            />
          </div>

          <div>
            <label className="text-base-content font-semibold">
              Description
            </label>
            <textarea
              name="description"
              required
              placeholder="Describe what you offer"
              className="textarea textarea-bordered w-full mt-2 border-base-300 bg-base-100 text-base-content h-28"
            />
          </div>

          <div>
            <label className="text-base-content font-semibold">
              Image URL
            </label>
            <input
              name="image"
              type="url"
              required
              placeholder="https://example.com/image.jpg"
              className="input input-bordered w-full mt-2 border-base-300 bg-base-100 text-base-content"
            />
          </div>

          <div>
            <label className="text-base-content font-semibold">
              Category
            </label>
            <select
              name="category"
              required
              defaultValue=""
              className="select select-bordered w-full mt-2 border-base-300 bg-base-100 text-base-content"
            >
              <option value="" disabled>Select a category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-base-content font-semibold">
              Starting Price ($)
            </label>
            <input
              name="startingPrice"
              type="number"
              min={1}
              required
              placeholder="Example: 25"
              className="input input-bordered w-full mt-2 border-base-300 bg-base-100 text-base-content"
            />
          </div>

          <div>
            <label className="text-base-content font-semibold">
              Delivery Time
            </label>
            <input
              name="deliveryTime"
              type="text"
              required
              placeholder="Example: 3 days"
              className="input input-bordered w-full mt-2 border-base-300 bg-base-100 text-base-content"
            />
          </div>

          <button
            type="submit"
            className="btn bg-pink-500 hover:bg-pink-600 text-white border-none mt-4"
          >
            Add Gig
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddGigPage;