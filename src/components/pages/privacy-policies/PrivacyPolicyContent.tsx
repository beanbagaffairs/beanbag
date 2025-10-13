'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const PrivacyPolicyContent = () => {
  return (
    <main className="mx-auto pb-16 pt-32 font-formular bg-white text-[#1C2042] max-w-[90vw] md:max-w-[60vw]">
      <motion.h1
        className="text-6xl font-bold mb-2 tracking-tight"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        Privacy Policy
      </motion.h1>

      <motion.p
        className="text-sm text-gray-500 mb-6"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Last updated: September 6, 2025
      </motion.p>

      {/* Intro */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <p className="mb-6">
          At <strong>Bean Bag Affairs</strong>, we respect not just your celebrations, 
          but also your privacy. This page explains how we handle your information, 
          and the terms you agree to when using our website and services.
        </p>
      </motion.section>

      {/* Sections */}
      {sections.map(({ title, list, note }, index) => (
        <motion.section
          key={index}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={index + 3}
          className="mt-10"
        >
          {title && <h2 className="text-3xl font-semibold mb-4">{title}</h2>}
          {list && (
            <ul className="list-disc pl-6 space-y-2 mb-6 text-lg">
              {list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {note && <p className="mb-4">{note}</p>}
        </motion.section>
      ))}
    </main>
  );
};

export default PrivacyPolicyContent;

// Content sections
const sections = [
  {
    title: 'Privacy Policy',
    list: [
      'Information We Collect - When you fill in enquiry forms, share portfolios, or request brochures, we may collect your name, email, phone number, and event details.',
      'How We Use It - Your information is used strictly to provide services, share updates, or respond to enquiries. We do not sell, rent, or misuse your data.',
      'Data Security - We take all reasonable steps to protect your information from unauthorised access.',
      'Cookies - Like most websites, we may use cookies to improve your browsing experience.',
    ],
  },
  {
    title: 'Terms of Service',
    list: [
      'Use of Content - All text, images, videos, and designs on this site belong to Bean Bag Affairs. They may not be copied or reused without written consent.',
      'Service Commitment - While we strive for perfection, certain external factors (e.g., weather, third-party vendor delays) may affect outcomes. We remain committed to transparency and solutions.',
      'Client Responsibility - Clients are responsible for providing accurate event details, timely approvals, and payments as agreed.',
      'Amendments - Policies and terms may be updated from time to time. Updated versions will be posted here.',
    ],
  },
  {
    title: 'Final Note',
    note: 'We\'re here to build trust, not paperwork. If you have any concerns about how your data is handled or how we work, just reach out - preferably over coffee.',
  },
];
