"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const stats = [
  { value: "20.5k", label: "Successful Shoots" },
  { value: "150+", label: "Clients" },
  { value: "2+", label: "Years of Experience" },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ClientTestimony() {
  return (
    <section className="text-[#1C2042] font-formular">
      <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Why Choose Us
      </motion.h1>
      <motion.section
        className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 max-w-7xl mx-auto gap-8 lg:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* Left: Stats */}
        <motion.div
          className="flex flex-row lg:flex-col justify-center lg:justify-start space-x-8 lg:space-x-0 lg:space-y-4 text-center lg:text-left g:mb-0 w-full lg:w-1/3"
          variants={fadeUp}
        >
          {stats.map((s, i) => (
            <div key={i} className="lg:border-b border-gray-300 pb-3 sm:pb-4 flex-1 lg:flex-none">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{s.value}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Center: Image */}
        <motion.div
          className="relative flex-shrink-0 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-1/3 h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[30rem] aspect-[3/4] mx-auto"
          variants={fadeUp}
        >
          <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="w-full lg:w-1/3 text-center lg:text-left"
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Creative Shoots &amp; Photography
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Because anyone can throw a party. But it takes a certain finesse to
            create a memory that feels both timeless and effortless. At Bean Bag
            Affairs, you get<span className="font-sans">:</span>
          </p>
        </motion.div>
      </motion.section>
    </section>
  );
}
