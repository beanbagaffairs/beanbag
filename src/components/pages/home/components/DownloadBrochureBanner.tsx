"use client";

import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const DownloadBrochureBanner = () => {
  return (
    <section className="w-full h-auto min-h-[60vh] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-12 sm:py-16 lg:py-20 flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-auto min-h-[30vh] sm:min-h-[35vh] lg:min-h-[40vh] w-full sm:w-[90vw] md:w-[80vw] lg:w-[70vw] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#FFE5EC] to-[#FDEAD9] flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-6 shadow-md font-formular"
      >
        <div className="flex flex-col gap-2 sm:gap-3 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2042] tracking-tighter">
            Explore Our Brochures
          </h2>
          <p className="text-[#4b4b4b] text-base sm:text-lg max-w-sm sm:max-w-md lg:max-w-lg">
            Explore our services, portfolio, and expertise in detail.
          </p>
          <motion.a
            href="/brochures" 
            whileHover={{ scale: 1.05 }}
            className="inline-flex w-fit mx-auto sm:mx-0 items-center gap-2 bg-[#1C2042] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-[#2b2f50] transition-colors text-sm sm:text-base mt-2 sm:mt-0"
          >
            Explore
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadBrochureBanner;
