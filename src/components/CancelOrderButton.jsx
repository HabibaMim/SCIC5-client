"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authFetch } from '@/lib/auth-fetch';
import toast from 'react-hot-toast';

const CancelOrderButton = ({ orderId }) => {
  const router = useRouter();
  const [isCancelling, setIsCancelling] = useState(false);

  const openModal = () => {
    document.getElementById(`cancel_modal_${orderId}`)?.showModal();
  };

  const closeModal = () => {
    document.getElementById(`cancel_modal_${orderId}`)?.close();
  };

  const handleCancel = async () => {
    setIsCancelling(true);
    try {
      const res = await authFetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to cancel order");
      }

      toast.success("Order cancelled");
      closeModal();
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to cancel order. Please try again.");
    } finally {
      setIsCancelling(false);
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className="btn btn-sm btn-circle absolute right-3 top-3 bg-base-300 text-base-content border-none hover:bg-red-400/20"
      >
        ✕
      </button>

      <dialog id={`cancel_modal_${orderId}`} className="modal">
        <div className="modal-box bg-base-200 border border-base-300">
          <h3 className="font-bold text-lg text-base-content">Cancel this order?</h3>
          <p className="py-4 text-base-content/60">
            This action is immediate and cannot be undone.
          </p>
          <div className="modal-action">
            <button
              onClick={closeModal}
              className="btn bg-base-300 text-base-content border-none"
            >
              Keep Order
            </button>
            <button
              onClick={handleCancel}
              disabled={isCancelling}
              className="btn bg-red-500 hover:bg-red-600 text-white border-none disabled:opacity-50"
            >
              {isCancelling ? "Cancelling..." : "Cancel Order"}
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

export default CancelOrderButton;