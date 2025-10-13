"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ProgressiveBlurHover } from "@/components/ui/ProgressiveBlurHover";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OurVisionSection: React.FC = () => {
  return (
    <motion.section
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-[#1C2042] font-formular"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <motion.div
        className="max-w-6xl mx-auto overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
        variants={fadeUp}
      >
        {/* Left image/card */}
        <div className="">
          <ProgressiveBlurHover
            src="/homepage/girl_with_bean_bag.jpg"
            alt="About Us"
          />
        </div>

        {/* Right text */}
        <div className="w-full md:w-1/2 text-center md:text-left p-4 sm:p-6 md:p-8 lg:p-12 flex-1">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tighter">
            Our Vision
          </h3>
          <p className="text-justify md:text-left text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            We set out to redefine event management and film production - to
            make them more human, more heartfelt, and distinctly memorable. Our
            vision is to craft weddings, events, and films that not only dazzle
            in the moment but live on as timeless experiences.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default OurVisionSection;
