"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LocationSection = () => {
  return (
    <section className="w-full pb-12 sm:pb-16 md:pb-20 lg:pb-32 xl:pb-40 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white font-formular">
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
            src="https://res.cloudinary.com/djkd6cyxb/image/upload/v1762932807/Screenshot_from_2025-11-12_13-01-20_zu7bbd.png"
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
        <h1 className="text-xl sm:text-2xl font-thin font-formular leading-none tracking-tighter mb-4">
          Our Location
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">West Bengal, India</h2>
        <div className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
          <p className="font-semibold">BEANBAGAFFAIRS PRIVATE LIMITED</p>

          <div className="space-y-1 text-sm">
            <p className="font-semibold uppercase tracking-widest text-gray-700">Registered Address</p>
            <p>UTTARPARA, HOOGHLY, 712258</p>
            <p>NO 1 RADHIKA CHARAN CHATT</p>
            <p>Uttarpara, Hooghly, Serampur Uttarpara</p>
            <p>West Bengal, India - 712258</p>
          </div>

          <div className="space-y-1 text-sm">
            <p className="font-semibold uppercase tracking-widest text-gray-700">Corporate Address</p>
            <p>Godrej Waterside, 12th Floor, Tower II, DP-5</p>
            <p>DP Block, Sector V, Salt Lake, Bidhannagar</p>
            <p>West Bengal, India - 700091</p>
          </div>

          <div className="space-y-1 text-sm">
            <p className="font-sans">GST: <span className="font-medium">19AANCB9353R1ZK</span></p>
            <p className="font-sans">CIN: <span className="font-medium">U56210WB2025PTC282795</span></p>
          </div>
        </div>
        <a
          href="https://maps.app.goo.gl/pjYHBWT9aegPw7AC9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:underline font-medium text-sm sm:text-base md:text-lg"
        >
          Open Google Maps
        </a>
      </motion.div>
    </section>
  );
};

export default LocationSection;