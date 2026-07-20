import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Amelia Torres",
    role: "Startup Founder",
    quote: "Found a designer within an hour and the final logo exceeded expectations. GigsVerse made hiring painless.",
    rating: 5,
  },
  {
    name: "Daniel Osei",
    role: "Marketing Manager",
    quote: "The filtering and pricing transparency saved me so much time compared to other freelance platforms.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Freelance Writer",
    quote: "As a seller, listing my gig was quick and I started getting orders within days.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="py-20 px-6 md:px-20 bg-base-200">

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Users Say
        </h2>
        <p className="text-base-content/60 mt-3 max-w-2xl mx-auto">
          Real feedback from buyers and freelancers using GigsVerse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-base-100 border border-base-300 rounded-xl shadow-md p-6 hover:border-pink-400/40 transition"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < testimonial.rating ? "text-pink-400" : "text-base-300"}
                />
              ))}
            </div>

            <p className="text-base-content/70 italic mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-base-content/50">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Testimonials;