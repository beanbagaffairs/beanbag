'use client';

// components/ValuesSection.tsx
import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import { FaLeaf } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { BsFileBarGraph } from "react-icons/bs";

const valuesData = [
  {
    id: 1,
    title: "Excellent Service",
    Icon: FaLeaf,
    bgColor: "bg-[#1C2042]",
  },
  {
    id: 2,
    title: "Innovation",
    Icon: TbBulbFilled,
    bgColor: "bg-[#1C2042]",
  },
  {
    id: 3,
    title: "Client-Centric Experience",
    Icon: BsPeopleFill,
    bgColor: "bg-[#1C2042]",
  },
  {
    id: 4,
    title: "Reliability and Professionalism",
    Icon: BsFileBarGraph,
    bgColor: "bg-[#1C2042]",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const ValuesSection: FC = () => (
  <motion.section
    className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-formular text-[#1C2042]"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={container}
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12">Our Values</h2>

    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto"
      variants={container}
    >
      {valuesData.map(({ id, title, Icon, bgColor }) => (
        <motion.div
          key={id}
          className="flex flex-col items-center text-center"
          variants={item}
        >
          <div
            className={`p-4 sm:p-5 md:p-6 rounded-full ${bgColor} flex items-center justify-center mb-3 sm:mb-4`}
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
          </div>
          <p className="text-lg leading-tight">{title}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);
