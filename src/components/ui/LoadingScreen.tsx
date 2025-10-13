"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import ClientVideo from "./ClientVideo";
import Image from "next/image";

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false); // triggers AnimatePresence exit
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait" onExitComplete={onFinish}>
      {showLoader && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
          className="fixed top-0 left-0 w-full h-full z-[1000]"
        >
          <motion.div
            initial={{ 
              x: "50vw", 
              y: "50vh", 
              scale: 1,
              translateX: "-50%",
              translateY: "-50%"
            }}
            animate={{ 
              x: "50vw", 
              y: "50vh", 
              scale: 1,
              translateX: "-50%",
              translateY: "-50%"
            }}
            exit={{ 
              x: "calc(10px)", // px-4 md:px-20 + half of logo width (90px/2)
              y: "calc(4px)", // mt-2 + half of logo height (90px/2)
              scale: 0.225, // Scale down from 400px to 90px (90/400 = 0.225)
              translateX: "0%",
              translateY: "0%"
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute"
          >
            <Image
              src="/cropped_logo.gif"
              alt="Loading Screen"
              width={400}
              height={500}
              className="max-w-none"
            />
          </motion.div>
          {/* <ClientVideo
            src="/loading_screen_yellow.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="max-w-[80%] max-h-[80%]"
          /> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
