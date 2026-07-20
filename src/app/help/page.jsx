"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaBook, FaShoppingCart, FaStore, FaUserShield, FaLightbulb } from 'react-icons/fa';

const helpTopics = [
  {
    id: "getting-started",
    icon: FaBook,
    title: "Getting Started",
    description: "Learn how to create an account, browse gigs, and place your first order.",
    intro: "Getting set up on GigsVerse takes only a few minutes. Follow the steps below to go from a new visitor to your first confirmed order.",
    steps: [
      "Click Register in the navbar and fill in your name, email, photo URL, and password",
      "Log in using your new account, or sign in instantly with Google",
      "Browse available gigs from the Gigs page",
      "Use the search bar, category filter, and price filter to narrow down your options",
      "Sort results by price or popularity to find the best fit",
      "Click on a gig card to view full details, including seller info and pricing",
    ],
    tip: "New to GigsVerse? Use the Fill Demo Credentials button on the login page to explore the platform instantly with a sample account.",
  },
  {
    id: "orders",
    icon: FaShoppingCart,
    title: "Orders",
    description: "Manage, track, or cancel your existing orders from your dashboard.",
    intro: "Ordering a gig is instant — no waiting for seller approval to get started. Here's exactly how the process works from start to finish.",
    steps: [
      "Open a gig's detail page and click Order Now",
      "Review the gig package, delivery time, and total price",
      "Confirm your order to notify the seller and start the job",
      "Go to My Orders to view all your active and past orders",
      "Track order status as the seller works on your request",
      "Cancel an order you no longer need — this is immediate and final",
    ],
    tip: "Orders are confirmed instantly, so make sure the gig matches what you need before confirming — cancellations cannot be undone.",
  },
  {
    id: "listing",
    icon: FaStore,
    title: "Listing a Gig",
    description: "Step-by-step guidance for adding, editing, or removing your own service listings.",
    intro: "Have a skill you can offer? You can list it on GigsVerse and start earning in just a few steps.",
    steps: [
      "Log in to your account, then click Add Gig in the navbar",
      "Fill in the gig title, a clear description, and an image URL",
      "Choose a category that best fits your service",
      "Set your price and estimated delivery time",
      "Submit the form to publish your gig instantly to all users",
      "Manage your gigs anytime from My Listings — update details or delete a gig whenever needed",
    ],
    tip: "Gigs with accurate photos and complete descriptions tend to get ordered more often — take a moment to fill in every field.",
  },
  {
    id: "account",
    icon: FaUserShield,
    title: "Account & Security",
    description: "Update your profile, manage login methods, and keep your account secure.",
    intro: "Your account is protected using secure, token-based authentication. Here's what you should know about managing it safely.",
    steps: [
      "Sign in using either email and password, or your Google account",
      "Once logged in, your name, email, and profile photo appear in the navbar",
      "Access My Listings and My Orders directly from your profile menu",
      "Use the Logout option to securely end your session on shared devices",
      "Never share your password or account credentials with anyone",
      "Reach out to support immediately if you notice any unfamiliar activity",
    ],
    tip: "We recommend logging out of your account when using a public or shared computer.",
  },
];

const HelpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! Our team will get back to you soon.");
    setName('');
    setEmail('');
    setMessage('');
  };

  const openModal = (id) => {
    document.getElementById(`help_modal_${id}`)?.showModal();
  };

  const closeModal = (id) => {
    document.getElementById(`help_modal_${id}`)?.close();
  };

  return (
    <div className="flex-1 bg-base-100 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-base-content mb-3">
            How Can We Help?
          </h1>
          <p className="text-base-content/60 max-w-xl mx-auto">
            Browse our support topics below, or send us a message and our team will respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {helpTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                className="bg-base-200 border border-base-300 rounded-2xl shadow-sm hover:border-pink-400/50 transition p-6 text-center flex flex-col"
              >
                <Icon className="text-3xl text-pink-400 mx-auto mb-4" />
                <h3 className="font-semibold text-base-content mb-2">
                  {topic.title}
                </h3>
                <p className="text-sm text-base-content/60 mb-5 flex-1">
                  {topic.description}
                </p>
                <button
                  onClick={() => openModal(topic.id)}
                  className="btn btn-sm bg-pink-500 hover:bg-pink-600 text-white border-none w-full"
                >
                  Click Here
                </button>

                <dialog id={`help_modal_${topic.id}`} className="modal">
                  <div className="modal-box bg-base-200 border border-base-300 max-w-2xl">

                    <button
                      type="button"
                      onClick={() => closeModal(topic.id)}
                      className="btn btn-sm btn-circle absolute right-3 top-3 bg-base-300 text-base-content border-none hover:bg-base-100"
                    >
                      ✕
                    </button>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-pink-400/10 rounded-full p-3">
                        <Icon className="text-2xl text-pink-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-base-content">
                        {topic.title}
                      </h2>
                    </div>

                    <p className="text-base-content/60 leading-relaxed mb-6">
                      {topic.intro}
                    </p>

                    <h4 className="font-semibold text-base-content mb-3 text-sm uppercase tracking-wide">
                      Step-by-Step Guide
                    </h4>

                    <ol className="flex flex-col gap-3 mb-6">
                      {topic.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-base-content/70 text-sm leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>

                    <div className="bg-base-100 border border-base-300 rounded-xl p-4 flex gap-3">
                      <FaLightbulb className="text-pink-400 flex-shrink-0 mt-1" />
                      <p className="text-sm text-base-content/70">
                        <span className="font-semibold text-base-content">Tip: </span>
                        {topic.tip}
                      </p>
                    </div>

                    <div className="modal-action mt-6">
                      <button
                        onClick={() => closeModal(topic.id)}
                        className="btn bg-pink-500 hover:bg-pink-600 text-white border-none"
                      >
                        Got It
                      </button>
                    </div>

                  </div>

                  <button
                    onClick={() => closeModal(topic.id)}
                    className="modal-backdrop"
                  >
                    close
                  </button>
                </dialog>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-base-200 border border-base-300 rounded-2xl shadow-md p-8 md:p-10">

          <div>
            <h2 className="text-2xl font-bold text-base-content mb-4">
              Contact Support
            </h2>
            <p className="text-base-content/60 mb-6">
              Didn&apos;t find what you were looking for? Send us a message and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-4 text-sm">
              <div>
                <p className="text-base-content/50">Email</p>
                <p className="font-semibold text-base-content">gigsverse@gmail.com</p>
              </div>
              <div>
                <p className="text-base-content/50">Phone</p>
                <p className="font-semibold text-base-content">+05738345753</p>
              </div>
              <div>
                <p className="text-base-content/50">Hours</p>
                <p className="font-semibold text-base-content">Mon - Fri, 9am - 6pm</p>
              </div>
            </div>

            <p className="text-base-content/60 mt-6 text-sm">
              You can also check our{" "}
              <Link href="/about" className="text-pink-400 font-semibold hover:underline">
                About page
              </Link>{" "}
              for more on how GigsVerse works.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div>
              <label className="text-base-content font-semibold text-sm">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="input input-bordered w-full mt-1 border-base-300"
              />
            </div>

            <div>
              <label className="text-base-content font-semibold text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input input-bordered w-full mt-1 border-base-300"
              />
            </div>

            <div>
              <label className="text-base-content font-semibold text-sm">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                className="textarea textarea-bordered w-full mt-1 border-base-300 h-28"
              />
            </div>

            <button
              type="submit"
              className="btn bg-pink-500 hover:bg-pink-600 text-white border-none mt-2"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default HelpPage;