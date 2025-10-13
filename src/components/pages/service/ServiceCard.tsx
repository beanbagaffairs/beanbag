import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  href,
  imageSrc,
}) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={item}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={500}
        height={400}
        className="object-cover h-64 w-full"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <Link
            href={href}
            className="bg-[#1C2042] text-white py-2 px-4 hover:bg-[#353858] transition-colors duration-300 rounded-xl"
          >
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
