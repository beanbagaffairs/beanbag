"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LocationSection = () => {
  return (
    <section className="w-full pb-12 sm:pb-16 md:pb-20 lg:pb-32 xl:pb-40 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white font-formular">
      {/* Map with info card */}
      <motion.div
        className="w-full md:w-1/2 lg:w-[45%]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/30">
          <Image
            src="https://img.freepik.com/premium-vector/3d-top-view-map-with-destination-location-point_34645-1177.jpg"
            alt="Location Map"
            width={600}
            height={400}
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
          />
        </div>
      </motion.div>

      {/* Info text */}
      <motion.div
        className="space-y-4 w-full md:w-1/2 lg:w-[45%]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-formular leading-none tracking-tighter mb-4 sm:mb-6">
          Our Location
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Kolkata, India</h2>
        <div className="space-y-1 text-gray-700 text-sm sm:text-base md:text-lg">
          <p className="font-semibold">Beanbag Agency</p>
          <p>123 Tech Boulevard</p>
        </div>
        <a
          href="https://maps.google.com?q=123+Tech+Boulevard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:underline font-medium text-sm sm:text-base md:text-lg"
        >
          Open Google Maps →
        </a>
      </motion.div>
    </section>
  );
};

export default LocationSection;