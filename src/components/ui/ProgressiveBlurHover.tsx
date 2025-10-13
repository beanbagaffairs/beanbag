"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ProgressiveBlur } from "../../../components/motion-primitives/progressive-blur";
import Image from "next/image";

export function ProgressiveBlurHover({ src, alt }: { src: string; alt: string }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative my-4 aspect-[3/4] h-[600px] overflow-hidden rounded-[10px]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image
        src={src}
        width={500}
        height={500}
        alt={alt}
        className="absolute inset-0 object-cover object-top"
      />
      <ProgressiveBlur
        className="pointer-events-none absolute bottom-0 left-0 h-[75%] w-full"
        blurIntensity={0.5}
        animate={isHover ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0"
        animate={isHover ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="flex flex-col items-start gap-0 px-5 py-4">
          <p className="text-base font-medium text-white">{alt}</p>
        </div>
      </motion.div>
    </div>
  );
}
