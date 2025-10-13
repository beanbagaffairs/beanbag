"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InfiniteSliderHoverSpeed } from "./components/InfiniteSliderHoverSpeed";
import HorizontalScrollImages from "./components/HorizontalScrollImages";
import { InView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ClientVideo from "@/components/ui/ClientVideo";

const imageUrls = [
  {
    src: "/homepage/work1.jpg",
    alt: "Work 1",
  },
  {
    src: "/homepage/work2.jpg",
    alt: "Work 2",
  },
  {
    src: "/homepage/work3.jpg",
    alt: "Work 3",
  },
  {
    src: "/homepage/work4.jpg",
    alt: "Work 4",
  },
];

export default function Works() {
  const router = useRouter();

  return (
    <section className="h-auto w-full bg-[#F9EFF1] py-8 sm:py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <motion.div
        className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[25%] leading-1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold font-formular tracking-tight text-[#1C2042]">
          A Glimpse into What{" "}
          <span className="bg-[#ffe9e7] px-2 py-1 rounded-xl">We Create</span>
        </h1>
      </motion.div>

      {/* PART 1 - Responsive layout */}
      <div className="h-auto flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10">
        {/* Left Side - One big image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:flex-1 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] relative overflow-hidden rounded-2xl sm:rounded-3xl"
        >
          <Link href="/portfolio">
            <Image
              src="/homepage/work1.jpg"
              alt="Main Work Image"
              fill
              className="object-cover cursor-pointer hover:scale-105 transition-all duration-300"
            />
          </Link>
        </motion.div>

        {/* Right Side - Two Videos */}
        <div className="w-full lg:flex-1 flex flex-col gap-4 sm:gap-6 h-auto lg:h-[80vh]">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:flex-1 lg:h-[40vh] relative rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            <Link href="/portfolio">
              <InView>
                <ClientVideo
                  src="/homepage/work_showcase.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full cursor-pointer"
                />
              </InView>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:flex-1 lg:h-[40vh] relative rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            <Link href="/portfolio">
              <InView>
                <ClientVideo
                  src="/homepage/work_showcase_2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full scale-150"
                />
              </InView>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20">
        <InfiniteSliderHoverSpeed />
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20 flex items-center justify-center">
        <button
          onClick={() => router.push("/portfolio")}
          type="button"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-[#1C2042] text-white font-bold font-formular rounded-full shadow-lg transition-all duration-300 hover:bg-[#343748] hover:scale-105 text-sm sm:text-base"
        >
          <span>View Our Portfolio</span>
        </button>
      </div>
    </section>
  );
}
