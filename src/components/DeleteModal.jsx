"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authFetch } from '@/lib/auth-fetch';
import toast from 'react-hot-toast';
import { Button } from '@heroui/react';

const DeleteModal = ({ gigId }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const openModal = () => {
    document.getElementById(`delete_modal_${gigId}`)?.showModal();
  };

  const closeModal = () => {
    document.getElementById(`delete_modal_${gigId}`)?.close();
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await authFetch(`${process.env.NEXT_PUBLIC_API_URL}/gigs/${gigId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete gig");
      }

      toast.success("Gig deleted successfully");
      closeModal();
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete gig. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Button
        onClick={openModal}
         className="w-full bg-red-500 px-[20px] border-none text-white py-2 rounded-md hover:bg-red-600 transition"
      >
        Delete
      </Button>

      <dialog id={`delete_modal_${gigId}`} className="modal">
        <div className="modal-box bg-base-200 border border-base-300">
          <h3 className="font-bold text-lg text-base-content">Delete this gig?</h3>
          <p className="py-4 text-base-content/60">
            This action cannot be undone. This gig will be permanently removed from GigsVerse.
          </p>
          <div className="modal-action">
            <button
              onClick={closeModal}
              className="btn bg-base-300 text-base-content border-none"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="btn bg-red-500 hover:bg-red-600 text-white border-none disabled:opacity-50"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>

        <button onClick={closeModal} className="modal-backdrop">
          close
        </button>
      </dialog>
    </>
  );
};

export default DeleteModal;