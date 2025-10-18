"use client";

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'contact'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        setErrorMessage(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 sm:py-24 lg:py-32 bg-[#FEE79A] text-[#1C2042] font-formular">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-8 items-center">

        {/* Bold Text */}
        <div className="lg:pl-8 xl:pl-16 w-full lg:w-[80%] text-left order-1 lg:order-2">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            We are here to help you with your business needs. Contact us today to learn more about our services.
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full flex justify-center lg:justify-end order-2 lg:order-1">
          <form onSubmit={handleSubmit} className="w-full max-w-md sm:max-w-lg lg:max-w-[40rem] bg-[#1C2042] shadow-lg p-6 sm:p-8 rounded-2xl">
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Message sent successfully! We<span className="font-sans">&apos;</span>ll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {errorMessage}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full shadow appearance-none rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline text-sm sm:text-base disabled:bg-gray-200 disabled:cursor-not-allowed"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline text-sm sm:text-base disabled:bg-gray-200 disabled:cursor-not-allowed font-sans"
                placeholder="Your Email"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-white text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline text-sm sm:text-base disabled:bg-gray-200 disabled:cursor-not-allowed"
                placeholder="Your Phone Number"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline text-sm sm:text-base disabled:bg-gray-200 disabled:cursor-not-allowed font-sans"
                placeholder="Your Message"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="hero-button text-sm sm:text-base px-4 sm:px-6 py-2 bg-white text-[#1C2042] font-formular rounded-full text-center hover:bg-zinc-400 hover:text-white transition-colors duration-800 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
            >
              <span>{isLoading ? 'Sending...' : 'Send'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
