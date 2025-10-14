'use client';

import React, { useState } from "react"; // Import useState
import Image from "next/image";
import { motion } from "framer-motion";

// Helper function to truncate text
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

// Sample team data
const team = [
  {
    id: 1,
    name: "Ms. Sumana Samanta",
    role: "Managing Director",
    description: "With a strong foundation in business development and international education management, Ms. Sumana Samanta has spent years building growth-driven strategies and meaningful partnerships across global landscapes. At Bean Bag Affairs, she combines that professional experience with her dream — to bring warmth, clarity, and purpose into the world of weddings and productions. Her role revolves around strategic direction, brand growth, and client experience, ensuring that every project reflects both creative finesse and operational excellence.",
    photo: "https://res.cloudinary.com/djkd6cyxb/image/upload/v1760433788/IMG-20251013-WA0008_pmfef2.jpg" // Placeholder image
  },
  {
    id: 2,
    name: "Mr. Prasun Chakraborty",
    role: "Operations and Accounts Management",
    description: "Mr. Prasun Chakraborty brings deep expertise in business development, event logistics, and guest management. Having worked extensively with domestic and international clients, he has mastered the art of managing operations that flow seamlessly behind the scenes. At Bean Bag Affairs, he oversees accounts, budgeting, vendor coordination, and guest experience, ensuring that every celebration runs smoothly and efficiently. His calm precision and structured approach make him the anchor that keeps creativity and execution in perfect balance.",
    photo: "https://res.cloudinary.com/djkd6cyxb/image/upload/v1760433788/Copy_of_FB_IMG_1759922860739_sbuxf3.jpg" // Placeholder image
  },
  {
    id: 3,
    name: "Mr. Chiranjit Dutta",
    role: "Creative Head",
    description: "Mr. Chiranjit Dutta is a cinematographer and media professional whose artistry transforms stories into visual poetry. His creative excellence has been recognized nationally — with his work being featured by India Post on an official stamp and postcard, a rare honor that reflects both skill and vision. At Bean Bag Affairs, he leads the creative and production direction, overseeing everything from concept visualization and cinematography to post-production and film design. His approach is driven by a belief that every frame should carry emotion — and that storytelling, when done right, can turn fleeting moments into timeless legacies.",
    photo: "https://res.cloudinary.com/djkd6cyxb/image/upload/v1760433789/Copy_of_InShot_20251008_170103121_gcwoei.jpg" // Placeholder image
  },
  {
    id: 4,
    name: "Mr. Avinava Chakraborty",
    role: "Marketing and Operations",
    description: "A multi-disciplinary professional, Mr. Avinava Chakraborty has worked across international marketing, commercial advertising, and brand strategy. His career spans collaborations with global IT, lifestyle, and energy brands, where he has helped shape campaigns that connect emotion with purpose. At Bean Bag Affairs, he leads marketing, brand communication, and operational planning, ensuring every project resonates both creatively and commercially. With a deep understanding of audience psychology and storytelling, he bridges the space between brand identity and audience experience, making every campaign not just visible — but unforgettable.",
    photo: "https://res.cloudinary.com/djkd6cyxb/image/upload/v1760433788/IMG-20251013-WA0009_pxvmui.jpg" // Placeholder image
  },
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  const handleCardClick = (member: typeof team[0]) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 font-formular text-[#1C2042]">
      <motion.div
        className="max-w-8xl mx-auto text-center space-y-4 sm:space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mx-auto tracking-tighter px-4" variants={item}>
          Our Leadership Team
        </motion.h2>
        <motion.p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto px-4" variants={item}>
          At Bean Bag Affairs, vision meets craftsmanship through a team that blends business insight, creativity, and passion for perfection
        </motion.p>
      </motion.div>

      {/* Team section with grid layout */}
      <motion.div
        className="mt-8 sm:mt-12 md:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              className="flex flex-col items-center cursor-pointer" // Removed padding and shadow from card, will be on image
              onClick={() => handleCardClick(member)} // Added onClick handler
            >
              {/* Image container */}
              <div className="relative w-full h-[20rem] pb-[75%] rounded-lg overflow-hidden shadow-lg border border-gray-200"> {/* 3:4 aspect ratio image, fills width, no padding */}
                <Image
                  src={member.photo}
                  alt={member.name}
                  layout="fill"
                  className="object-cover"
                />
              </div>
              {/* Text container */}
              <div className="text-center p-4 bg-white rounded-b-lg"> {/* Text container with padding and background */}
                <h3 className="text-lg font-semibold leading-tight">{member.name}</h3>
                <p className="text-sm text-gray-600 leading-tight">{member.role}</p>
                {/* <p className="text-sm text-gray-500 leading-tight mt-2">{truncateText(member.description, 150)}</p> Truncated description */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300"
          onClick={handleCloseModal} // Added click outside to close modal
        >
          <div
            className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal when clicking inside content
          >
            <button
              className="absolute top-4 right-4 text-black hover:text-gray-700 text-2xl font-bold"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-3xl font-bold leading-tight mb-2">{selectedMember.name}</h3>
                <p className="text-xl text-gray-600 leading-tight mb-4">{selectedMember.role}</p>
                <p className="text-base text-gray-700 leading-relaxed">{selectedMember.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
