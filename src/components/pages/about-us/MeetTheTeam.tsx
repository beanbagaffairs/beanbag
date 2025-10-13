'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Sample team data
const team = [
  { id: 1, name: "Mia Campbell", role: "General Counsel", photo: "https://images.pexels.com/photos/5616021/pexels-photo-5616021.jpeg" },
  { id: 2, name: "Lily Brooks", role: "Co-Founder & COO", photo: "https://images.pexels.com/photos/2703181/pexels-photo-2703181.jpeg" },
  { id: 3, name: "Olivia Bennett", role: "Co-Founder & CEO", photo: "https://images.pexels.com/photos/2703181/pexels-photo-2703181.jpeg" },
  { id: 4, name: "Chloe Scott", role: "Head of Sales", photo: "https://images.pexels.com/photos/2703181/pexels-photo-2703181.jpeg" },
  { id: 5, name: "Drew Carter", role: "Sales Manager", photo: "https://images.pexels.com/photos/2703181/pexels-photo-2703181.jpeg" },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MeetTheTeam() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 font-formular text-[#1C2042]">
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-4 sm:space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mx-auto tracking-tighter px-4" variants={item}>
          Meet the talented team who make all this happen
        </motion.h2>
      </motion.div>

      {/* Team carousel/grid */}
      <motion.div
        className="mt-8 sm:mt-12 md:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4 mx-auto max-w-7xl">
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              className="text-center flex-shrink-0 w-full"
            >
              <div className="relative w-full aspect-[3/4] rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-2 sm:mt-3 md:mt-4">
                <h3 className="text-sm font-semibold leading-tight">{member.name}</h3>
                <p className="text-xs text-gray-500 leading-tight">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
