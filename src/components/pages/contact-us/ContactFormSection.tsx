"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactFormSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear any previous error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
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
          ...form,
          formType: 'contact' // Assuming this is needed by the API
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setForm({ name: "", email: "", phone: "", message: "" }); // Clear form on success
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
    <section className="flex items-center py-12 sm:py-16 md:py-20">
      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20"
      >
        {/* Business Information Section */}
        <div className="w-full lg:w-1/2 xl:w-2/5">
          <div>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tighter"
            >
              Get in touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl mb-4 sm:mb-6"
            >
              We are a leading agency specializing in photography and
              videography services. Contact us using the information below.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl"
            >
              <div className="mb-2 flex items-center gap-4 font-sans">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" /> Kolkata, India
              </div>
              <div className="mb-2 flex items-center gap-4 font-sans">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" /> +91-9674920655
              </div>
              <div className="mb-2 flex items-center gap-4 font-sans">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" /> beanbagaffairs@gmail.com
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 sm:mt-8 space-y-4"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold mb-4">Quick Access</h3>

              {/* Phone Button */}
              <motion.a
                href="tel:9674920655"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-colors group"
              >
                <div className="bg-gray-600 p-2 rounded-full">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-medium text-gray-700">Phone</p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-600">
                    For quick calls and instant connection.
                  </p>
                </div>
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/919674920655"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-colors group"
              >
                <div className="bg-gray-600 p-2 rounded-full">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-medium text-gray-700">
                    WhatsApp
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-600">
                    For quick chats and faster answers.
                  </p>
                </div>
              </motion.a>

              {/* Email Button */}
              <motion.a
                href="mailto:beanbagaffairs@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-colors group"
              >
                <div className="bg-gray-600 p-2 rounded-full">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-medium text-gray-700">Email</p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-600">
                    Because some stories need to be written down first.
                  </p>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Divider - Hidden on mobile */}
        <div className="hidden lg:block w-px h-96 xl:h-[32rem] bg-gray-200"></div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 xl:w-2/5">
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

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 flex flex-col bg-white p-4 sm:p-6 rounded-[20px] sm:rounded-[30px] overflow-hidden border border-gray-200 shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.p className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold">
                You can reach us out any time
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <input
                type="text"
                name="name"
                required
                value={form.name}
                placeholder="Enter your name"
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border font-sans border-gray-300 rounded-2xl sm:rounded-3xl focus:outline-none focus:ring-2 focus:ring-black/80 text-sm sm:text-base"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="email"
                name="email"
                required
                value={form.email}
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border font-sans border-gray-300 rounded-2xl sm:rounded-3xl focus:outline-none focus:ring-2 focus:ring-black/80 text-sm sm:text-base"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="number"
                name="phone"
                required
                value={form.phone}
                placeholder="Enter your phone number"
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border font-sans border-gray-300 rounded-2xl sm:rounded-3xl focus:outline-none focus:ring-2 focus:ring-black/80 text-sm sm:text-base"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <textarea
                name="message"
                required
                value={form.message}
                placeholder="How can we help?"
                onChange={handleChange}
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border font-sans border-gray-300 rounded-2xl sm:rounded-3xl focus:outline-none focus:ring-2 focus:ring-black/80 text-sm sm:text-base resize-none"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="submit"
              disabled={isLoading}
              className="bg-[#1C2042] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-2xl sm:rounded-3xl hover:bg-[#1C2042]/90 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xs sm:text-sm text-center text-gray-500">
                By submitting this form, you agree to our{" "}
                <a href="/privacy-policies" className="text-blue-600 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </motion.div>
          </motion.form>
        </div>
      </motion.section>
    </section>
  );
};

export default ContactFormSection;
