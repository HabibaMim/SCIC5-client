import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    question: "How do I order a gig?",
    answer: "Browse gigs, open one that fits your needs, and click Order Now. You'll need to be logged in to confirm your order.",
  },
  {
    question: "Can I cancel an order?",
    answer: "Yes. Go to My Orders and click Cancel on the order you'd like to remove. Cancellations are processed instantly.",
  },
  {
    question: "How do I list my own gig?",
    answer: "Create an account, then click Add Gig from the navigation menu. Fill in your gig's details, skills, and pricing to start receiving orders.",
  },
  {
    question: "Is there a fee to use GigsVerse?",
    answer: "Browsing and ordering gigs is completely free. Sellers set their own starting price, shown upfront before ordering.",
  },
  {
    question: "How does the AI description generator work?",
    answer: "When adding a gig, you can use our AI tool to instantly generate a polished description based on your title, category, and key skills.",
  },
  {
    question: "How quickly are orders confirmed?",
    answer: "Orders are confirmed instantly — there's no waiting for seller approval. Once you submit an order, it's placed immediately.",
  },
];

const FAQ = () => {
  return (
    <div className="py-24 px-6 md:px-20 bg-base-100">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-pink-400/10 text-pink-400 text-xs font-semibold px-4 py-1.5 rounded-full border border-pink-400/30 mb-4">
            <FaQuestionCircle /> SUPPORT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base-content/60 max-w-xl mx-auto">
            Everything you need to know before ordering or listing a gig.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-b border-base-300 py-5 cursor-pointer"
            >
              <summary className="flex items-center justify-between gap-4 font-semibold list-none marker:content-none">
                <span>{faq.question}</span>
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-pink-400/10 text-pink-400 flex items-center justify-center text-sm transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-base-content/60 text-sm leading-relaxed mt-3 pr-10">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

      </div>

    </div>
  );
};

export default FAQ;