"use client";

import { authFetch } from '@/lib/auth-fetch';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import React from 'react';

const CATEGORIES = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Programming & Tech",
  "Music & Audio",
];

const EditGigForm = ({ gig }) => {

  const { Title, _id, Description, Image: gigImage, Category, "Starting Price": startingPrice, "Delivery Time": deliveryTime } = gig;
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedData = {
      Title: formData.get("title"),
      Description: formData.get("description"),
      Image: formData.get("image"),
      Category: formData.get("category"),
      "Starting Price": Number(formData.get("startingPrice")),
      "Delivery Time": formData.get("deliveryTime"),
    };

    try {
      const res = await authFetch(`${process.env.NEXT_PUBLIC_API_URL}/gigs/${_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) {
        throw new Error("Failed to update gig");
      }

      toast.success("Gig updated successfully!");
      router.push('/my-gigs');
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update gig. Please try again.");
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-base-100 py-12 px-6 md:px-20">

        <div className="max-w-2xl mx-auto bg-base-200 border border-base-300 rounded-2xl shadow-md p-8">

          <h1 className="text-3xl font-bold text-pink-500 text-center mb-8">
            Update Gig Information
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div>
              <label className="text-base-content font-semibold">
                Gig Title
              </label>
              <input
                defaultValue={Title}
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
                defaultValue={Description}
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
                defaultValue={gigImage}
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
                defaultValue={Category}
                name="category"
                required
                className="select select-bordered w-full mt-2 border-base-300 bg-base-100 text-base-content"
              >
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
                defaultValue={startingPrice}
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
                defaultValue={deliveryTime}
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
              Update Gig
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default EditGigForm;