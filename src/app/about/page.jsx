import Link from 'next/link';
import React from 'react';
import { FaBullseye, FaHandshake, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

export const metadata = {
  title: "GigsVerse - About",
};

const values = [
  {
    icon: FaBullseye,
    title: "Our Mission",
    description: "To make finding and offering skilled services as easy as posting a status update.",
  },
  {
    icon: FaLightbulb,
    title: "Our Vision",
    description: "A world where anyone, anywhere, can turn their skills into income — and anyone can find the right person for the job.",
  },
  {
    icon: FaHandshake,
    title: "Our Commitment",
    description: "We work closely with buyers and sellers alike to keep every gig accurate, fairly priced, and genuinely useful.",
  },
  {
    icon: FaShieldAlt,
    title: "Trust & Safety",
    description: "Every account is verified through secure authentication, and every order is protected by clear, transparent policies.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-100 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            About <span className="text-pink-400">GigsVerse</span>
          </h1>
          <p className="text-base-content/60 max-w-2xl mx-auto text-lg">
            Connecting people who need work done with skilled freelancers ready to do it —
            and helping sellers turn their talent into a thriving gig business.
          </p>
        </div>

        <div className="bg-base-200 border border-base-300 rounded-2xl shadow-md p-8 md:p-10 mb-10">
          <h2 className="text-2xl font-bold text-base-content mb-4">
            Our Story
          </h2>
          <p className="text-base-content/60 leading-relaxed mb-4">
            GigsVerse started with a simple idea: everyone has a skill worth offering, and
            everyone occasionally needs a skill they don&apos;t have. Yet finding the right
            freelancer — or the right client — often meant scattered listings, unclear pricing,
            and endless back-and-forth.
          </p>
          <p className="text-base-content/60 leading-relaxed mb-4">
            GigsVerse brings both sides together in one place. Buyers can browse gigs by
            category, price, and skill to find exactly what they need, while sellers can list
            their services, set their own rates, and start earning on their own terms.
          </p>
          <p className="text-base-content/60 leading-relaxed">
            Since launching, we&apos;ve helped freelancers build real income from their skills
            and helped buyers get quality work delivered on time. Whether you&apos;re hiring for
            a one-off task or building a long-term freelance career, GigsVerse is built to make
            the connection simple.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-base-200 border border-base-300 rounded-2xl shadow-sm hover:border-pink-400/50 transition p-6"
              >
                <Icon className="text-2xl text-pink-400 mb-3" />
                <h3 className="font-semibold text-base-content text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-base-content/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-base-200 border border-base-300 rounded-2xl shadow-md p-8 md:p-10 mb-10">
          <h2 className="text-2xl font-bold text-base-content mb-4">
            What Sets Us Apart
          </h2>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 text-base-content/60">
              <span className="text-pink-400 font-bold mt-1">•</span>
              <span>Instant ordering with no back-and-forth negotiation required</span>
            </li>
            <li className="flex items-start gap-3 text-base-content/60">
              <span className="text-pink-400 font-bold mt-1">•</span>
              <span>Transparent, upfront pricing with no hidden fees</span>
            </li>
            <li className="flex items-start gap-3 text-base-content/60">
              <span className="text-pink-400 font-bold mt-1">•</span>
              <span>Secure, verified accounts powered by modern authentication</span>
            </li>
            <li className="flex items-start gap-3 text-base-content/60">
              <span className="text-pink-400 font-bold mt-1">•</span>
              <span>A simple listing process that lets anyone become a seller in minutes</span>
            </li>
            <li className="flex items-start gap-3 text-base-content/60">
              <span className="text-pink-400 font-bold mt-1">•</span>
              <span>Detailed gig information, including skills, pricing, and delivery time</span>
            </li>
          </ul>
        </div>

        <div className="bg-base-200 border border-base-300 rounded-2xl shadow-md p-8 md:p-10">
          <h2 className="text-2xl font-bold text-base-content mb-6">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="bg-base-100 rounded-xl p-5">
              <p className="text-sm text-base-content/50 mb-1">Email</p>
              <p className="font-semibold text-base-content">gigsverse@gmail.com</p>
            </div>
            <div className="bg-base-100 rounded-xl p-5">
              <p className="text-sm text-base-content/50 mb-1">Phone</p>
              <p className="font-semibold text-base-content">+05738345753</p>
            </div>
            <div className="bg-base-100 rounded-xl p-5">
              <p className="text-sm text-base-content/50 mb-1">Hours</p>
              <p className="font-semibold text-base-content">Mon - Fri, 9am - 6pm</p>
            </div>
          </div>

          <p className="text-base-content/60 text-sm">
            Have a question about an order or want to learn more about becoming a seller?
            Visit our{" "}
            <Link href="/help" className="text-pink-400 font-semibold hover:underline">
              Help & Support page
            </Link>{" "}
            or reach out directly using the details above.
          </p>
        </div>

        <p className="text-center text-base-content/40 text-sm mt-10">
          © {new Date().getFullYear()} GigsVerse. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default AboutPage;