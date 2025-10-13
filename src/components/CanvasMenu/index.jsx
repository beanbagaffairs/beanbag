"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import Nav from "./Nav";

const horizontalNavVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95, x: 20 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    x: 20,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Debug: Log when component mounts and state changes
  useEffect(() => {
    console.log("SidebarNav mounted");
  }, []);

  useEffect(() => {
    console.log("Menu isOpen:", isOpen);
  }, [isOpen]);

  // Close navbar when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2 bg-[#1C2042] text-white rounded-full font-bold cursor-pointer font-formular hover:bg-[#2a3154] transition-colors duration-200"
      >
        Menu
      </button>

      {/* Horizontal Navbar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Horizontal Navbar */}
            <motion.div
              ref={navRef}
              variants={horizontalNavVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-4 right-4 z-50 
                         backdrop-blur-sm bg-[#1C2042] rounded-2xl shadow-2xl border border-white
                         px-4 sm:px-6 lg:px-8 py-4 sm:py-6 min-w-[320px] max-w-[90vw] sm:max-w-[600px] lg:max-w-[700px] w-auto"
              style={{
                // Force inline styles as fallback
                backdropFilter: 'blur(4px)',
                border: '1px solid white',
                borderRadius: '1rem',
                padding: '1rem 1.5rem',
                minWidth: '320px',
                maxWidth: '90vw',
                width: 'auto',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-200"
              >
                <X size={20} />
              </button>

              {/* Brand */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-formular font-bold text-white drop-shadow-lg">
                  Bean Bag Agency
                </h2>
                <p className="text-white/90 text-sm mt-1 drop-shadow">
                  Navigate to your destination
                </p>
              </div>

              {/* Horizontal Navigation */}
              <div className="flex justify-center mb-6">
                <Nav isHorizontal={true} onLinkClick={() => setIsOpen(false)} />
              </div>

              {/* CTA Section */}
              {/* <div className="text-center border-t border-white/30 pt-4">
                <a
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-8 py-3 bg-white text-[#1C2042] rounded-full font-bold font-formular hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Get Quote
                </a>
              </div> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
