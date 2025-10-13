"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OurStorySection = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16 bg-white">
      {/* Left - Text */}
      <motion.div
        className="w-full lg:flex-1 flex flex-col justify-center text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tighter text-[#1C2042] font-formular">
          Our Story
        </h1>
        <p className="text-justify md:text-left text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-formular md:w-[80%]">
          Every great celebration begins with a story, and ours began with a
          simple idea: that luxury should never feel stiff. Bean Bag Affairs was
          born from the belief that the grandest occasions deserve to be wrapped
          in both elegance and ease. Think couture meets comfort, champagne
          served with laughter, and moments curated to linger forever.
        </p>
      </motion.div>

      {/* Right - Image */}
      <motion.div
        className="w-full lg:flex-1 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
          <Image
            src="/homepage/our_team.jpg"
            alt="Our Story"
            fill
            className="rounded-2xl shadow-xl shadow-black/30 object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default OurStorySection;
