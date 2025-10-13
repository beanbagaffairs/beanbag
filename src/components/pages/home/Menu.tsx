"use client";
import React, { useState, useEffect } from "react";
import Header from "../../CanvasMenu";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null; // prevent SSR mismatch

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex justify-between items-center w-full fixed z-50 px-4 md:px-20 md:h-32 mt-2">
      <Link
        href="/"
        className="text-[#1C2042] text-2xl font-formular hover:scale-125 transition-all duration-300 tracking-tighter font-bold leading-none cursor-pointer relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-[90px] h-[90px]">
          {/* Animated GIF logo - shows static version by default, animated on hover */}
          <Image
            src={isHovered ? "/cropped_logo.gif" : "/cropped_logo.png"}
            alt="Bean Bag Affairs Logo"
            fill
            className="object-cover mix-blend-screen transition-opacity duration-200"
            sizes="90px"
            priority
          />
        </div>
      </Link>
      <>
        <Header />
      </>
    </div>
  );
};

export default Menu;
