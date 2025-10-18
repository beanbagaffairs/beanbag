"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import ClientVideo from "@/components/ui/ClientVideo";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    // --- GSAP intro animation ---
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo(
      ".hero-text-1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        ".hero-button",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        ".hero-video-main",
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        "-=0.2"
      );

    // --- Lenis smooth scroll setup ---
    const lenis = new Lenis({
      duration: 2.0,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Animate video on scroll
  const scale = useTransform(scrollY, [0, 400], [1, 1.2]);
  const translateY = useTransform(scrollY, [0, 400], [0, 100]);

  // Videos
  const videos = [
    "https://res.cloudinary.com/dvjqrh2gh/video/upload/v1758313928/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/Home%20Page/home_page_video_2_ebsjg6.mp4",
    "https://res.cloudinary.com/dvjqrh2gh/video/upload/v1758313929/Bean%20Bag%20Agencies/main/website%20content/bean%20bag%20website/Home%20Page/home_page_video_1_rttt1q.mp4",
  ];

  return (
    <div
      ref={heroRef}
      className="flex flex-col w-full min-h-[120vh] md:min-h-[150vh] relative items-center justify-start bg-[#FEE79A] pt-20 sm:pt-32 lg:pt-40"
    >
      {/* Text */}
      <div className="w-full flex flex-col items-center justify-start gap-4 sm:gap-6 px-4 sm:px-6 pt-20">
        <p className="hero-text-1 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold font-formular text-[#1C2042] text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-2xl tracking-tighter">
          Luxury, With Its Shoes Off
        </p>
        <p className="hero-text-1 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-formular text-[#1C2042] text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl tracking-tighter">
          Because the grandest celebrations feel better when you<span className="font-sans">’re</span> comfortable.
        </p>
        <button
          type="button"
          className="hero-button hover:bg-[#343748] bg-[#1C2042] font-bold text-white font-formular rounded-full text-center shadow-lg transition-all duration-300 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
        >
          <span>Begin Your Affair With Us</span>
        </button>
      </div>

      {/* Main Video Container */}
      <motion.div
        style={{ scale, y: translateY }}
        className="hero-video-main relative w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] aspect-[16/9] mt-8 sm:mt-12 lg:mt-16 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mx-4"
      >
        {/* Large Video */}
        <ClientVideo
          src={isSwapped ? videos[1] : videos[0]}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover scale-150 shadow-2xl w-full h-full"
        />

        {/* Small floating video INSIDE big one */}
        <motion.div
          onClick={() => setIsSwapped((prev) => !prev)}
          className="hero-video-small cursor-pointer absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-[80px] sm:w-[120px] md:w-[140px] lg:w-[160px] aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden shadow-lg border-2 sm:border-4 border-white hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ClientVideo
            src={isSwapped ? videos[0] : videos[1]}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
