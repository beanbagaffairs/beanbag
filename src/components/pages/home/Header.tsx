"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Service', href: '#service' },
    { label: 'Project', href: '#project' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className='w-full flex items-center relative justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm'>
      {/* Logo */}
      <div className='flex'>
        <span className='text-xl sm:text-2xl lg:text-3xl font-bold text-[#1C2042] font-formular'>DNA</span>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden lg:flex items-center gap-8 xl:gap-10'>
        <ul className='flex gap-6 xl:gap-8 text-gray-600'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                className='hover:text-[#1C2042] transition-colors duration-300 font-medium text-sm xl:text-base'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className='text-sm xl:text-base font-semibold text-[#1C2042] bg-[#FEE79A] px-4 py-2 xl:px-6 xl:py-3 rounded-full hover:bg-[#FDD835] transition-colors duration-300'>
          Let&apos;s Talk
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className='lg:hidden p-2 text-[#1C2042] hover:bg-gray-100 rounded-lg transition-colors duration-300'
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className='lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50'
          >
            {/* Mobile Menu Header */}
            <div className='flex items-center justify-between p-6 border-b border-gray-200'>
              <span className='text-lg font-bold text-[#1C2042] font-formular'>DNA</span>
              <button
                onClick={toggleMenu}
                className='p-2 text-[#1C2042] hover:bg-gray-100 rounded-lg transition-colors duration-300'
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className='p-6'>
              <ul className='space-y-4'>
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href={item.href}
                      onClick={toggleMenu}
                      className='block py-3 px-4 text-gray-700 hover:text-[#1C2042] hover:bg-gray-50 rounded-lg transition-colors duration-300 font-medium'
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='mt-8'
              >
                <button 
                  onClick={toggleMenu}
                  className='w-full font-semibold text-[#1C2042] bg-[#FEE79A] px-6 py-3 rounded-full hover:bg-[#FDD835] transition-colors duration-300'
                >
                  Let&apos;s Talk
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;