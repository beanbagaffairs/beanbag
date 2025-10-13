"use client";
import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  description: string;
  bgColor?: string; // optional, defaults to light bg
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  bgColor = "#FEE79A",
}) => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-12 md:py-16 lg:py-20"
      style={{
        width: "100%",
        minHeight: "40vh",
        height: "clamp(40vh, 70vh, 80vh)",
        backgroundColor: bgColor,
        color: "#1C2042",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 font-bold font-formular tracking-tighter mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="text-justify md:text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl font-formular leading-relaxed sm:leading-relaxed md:leading-relaxed opacity-90"
      >
        {description}
      </motion.p>
    </section>
  );
};

export default HeroSection;
