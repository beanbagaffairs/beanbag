'use client'

import Image from "next/image";
import { SpinningTextBasic } from "./components/SpinningTextBasic";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-12 sm:py-16 lg:py-20 min-h-screen w-full text-gray-800 bg-white fade-in"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
      <div className="mx-auto py-6 sm:py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start font-formular text-[#1C2042]">
          <div className="px-2 sm:px-4 h-full flex flex-col gap-8 sm:gap-10 lg:gap-12 items-start justify-between">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Our vision is to make <br className="hidden sm:block" /> every visual not just <br className="hidden sm:block" /> great,
              but{" "}
              <span className="bg-[#ffe9e7] px-2 py-1 rounded-xl">
                timeless
              </span>
            </p>
            <div className="ml-8 sm:ml-12 lg:ml-20 mb-8 sm:mb-12 lg:mb-20 hidden md:visible">
              <SpinningTextBasic />
            </div>
          </div>
          <div className="relative w-full sm:w-[80%] md:w-[70%] lg:w-[30vw] aspect-[3/4] self-center justify-self-center rounded-xl overflow-hidden shadow-md mx-auto">
            <Image
              src="/homepage/girl_with_bean_bag.jpg"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 py-6 sm:py-8 lg:py-10 flex flex-col gap-6 sm:gap-8 font-formular text-[#1C2042]">
          <div className="px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 tracking-tight">Our Team</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-full sm:max-w-2xl text-justify">
              We are a team of passionate photographers, editors, and creative
              storytellers dedicated to providing exceptional service and
              stunning visuals.
            </p>
          </div>
          <div className="relative w-full sm:w-[90%] lg:w-[70%] aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-3xl shadow-black mx-auto">
            <Image
              src="/homepage/our_team.jpg"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="py-12 sm:py-16 lg:py-20"></div>
      </motion.div>
    </section>
  );
}
