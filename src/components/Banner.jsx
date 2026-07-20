"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "../../public/assets/banner.jpg";
import banner2 from "../../public/assets/banner2.jpg";
import banner3 from "../../public/assets/banner3.jpg";

const slides = [
  {
    image: banner3,
    title: "Find the Right Freelancer for Any Job",
    description:
      "Browse thousands of gigs from skilled freelancers, or list your own services and start earning today.",
  },
  {
    image: banner2,
    title: "Order in Just a Few Clicks",
    description:
      "Confirm your order instantly with a smooth, transparent booking experience.",
  },
  {
    image: banner1,
    title: "Turn Your Skills Into Income",
    description:
      "Create a gig, showcase your expertise, and start receiving orders from buyers worldwide.",
  },
];

const Banner = () => {
  return (
    <Swiper
      speed={2000}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[433px]"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 md:px-16 text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-xl leading-tight">
                {slide.title}
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-lg">
                {slide.description}
              </p>

              <Link
                href="/gigs"
                className="mt-6 flex items-center gap-2 bg-pink-400 hover:bg-pink-300 text-black transition px-6 py-3 rounded-lg font-semibold w-fit"
              >
                <HiOutlineArrowTopRightOnSquare />
                Explore Gigs
              </Link>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;