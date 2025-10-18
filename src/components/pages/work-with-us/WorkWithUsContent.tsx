"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, Upload, User, Phone, Mail, FileText, Heart } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const jobs = [
  {
    title: "Event Planner",
    meta: "Full-time | On-site",
    desc: "We are seeking an experienced event planner to manage and execute flawless events. You will be responsible for client communication, vendor coordination, and on-site management to ensure every celebration is a success.",
  },
  {
    title: "Videographer & Editor",
    meta: "Part-time | Hybrid",
    desc: "Capture the magic of our events and create compelling films. The ideal candidate will have a strong portfolio in videography and editing, with a creative eye for storytelling and a passion for creating beautiful visual narratives.",
  },
  {
    title: "Marketing Intern",
    meta: "Internship | Remote",
    desc: "A great opportunity for a marketing student or recent graduate to gain hands-on experience. You'll assist with social media management, content creation, and digital marketing campaigns to promote our services.",
  },
  {
    title: "Photography & Cinematography Experts",
    meta: "Full-time | On-site",
    desc: "Someone who want to capture the magic of our events and create compelling moments"

  }
];

export default function WorkWithUsContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    expertise: "",
    collaboration: "",
  });

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      portfolio: "",
      expertise: "",
      collaboration: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email content
    const emailSubject = `Job Application: ${selectedJob}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Position Applied For: ${selectedJob}

Portfolio/Best Work:
${formData.portfolio}

Expertise:
${formData.expertise}

Collaboration Ideas:
${formData.collaboration}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:contact@beanbagaffairs.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Close modal after submission
    handleCloseModal();
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      {/* Main */}
      <main className="flex flex-1 justify-center pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-extrabold tracking-tighter text-slate-900 mb-4"
            >
              Work With Us
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-700 max-w-3xl mx-auto"
            >
              Join our mission to create extraordinary celebrations and
              unforgettable films.
            </motion.p>
          </motion.div>

          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-lg">
            {/* Who / How */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-slate-800 mb-4">
                  Who We<span className="font-sans">&apos;</span>re Looking For
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  At Bean Bag Affairs, we believe extraordinary celebrations and
                  unforgettable films are built by extraordinary people. That
                  <span className="font-sans">’</span>s why we
                  <span className="font-sans">’</span>re always looking for{" "}
                  <span className="font-bold">
                    creatives, specialists, and professionals
                  </span>{" "}
                  who share our passion for detail, comfort, and excellence. If
                  you<span className="font-sans">’</span>re a wedding planner,
                  designer, photographer, filmmaker, or a behind-the-scenes
                  magician - we<span className="font-sans">’</span>d love to
                  hear from you.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-slate-800 mb-4">
                  Who Can Apply
                </h2>
                <div className="text-slate-700 leading-relaxed">
                  <p>
                    • Freelancers in event management, décor, photography,
                    videography.
                  </p>
                  <p>
                    • Agencies offering catering, logistics, or entertainment.
                  </p>
                  <p>• Artists, musicians, DJs, and performers.</p>
                  <p>
                    • Film professionals scriptwriters, editors,
                    cinematographers, VFX experts.
                  </p>
                  <p>
                    • Anyone with the flair to add comfort, creativity, and
                    luxury to an experience.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Opportunities */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold tracking-tight text-slate-800 mb-8 text-center"
              >
                Current Opportunities
              </motion.h2>

              <div className="space-y-6">
                {jobs.map((job) => (
                  <motion.div
                    key={job.title}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800">
                          {job.title}
                        </h3>
                        <p className="text-slate-600">{job.meta}</p>
                      </div>
                      <button
                        onClick={() => handleApplyClick(job.title)}
                        className="mt-4 sm:mt-0 flex min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-10 px-5 bg-[#ea2a33] text-white text-sm font-bold shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300"
                      >
                        <span className="truncate">Apply Now</span>
                      </button>
                    </div>
                    <p className="text-slate-700 mt-4 leading-relaxed">
                      {job.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Closing */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-16 text-center"
            >
              <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto">
                At Bean Bag Affairs, we believe in fostering a collaborative and
                inclusive work environment where every team member can thrive.
                If you are ready to embark on a rewarding career journey with a
                company that values creativity, innovation, and excellence, we
                invite you to explore our opportunities and apply today. We look
                forward to welcoming you to our team!
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Apply for Position
                </h2>
                <p className="text-slate-600 mt-1">{selectedJob}</p>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#ea2a33]" />
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea2a33] focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea2a33] focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea2a33] focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Portfolio Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                  <Upload className="w-5 h-5 text-[#ea2a33]" />
                  Submit Your Portfolio
                </h3>
                <p className="text-sm text-slate-600">
                  Share your best work. We admire stories told through pictures,
                  films, and ideas.
                </p>
                <textarea
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea2a33] focus:border-transparent transition-all resize-none"
                  placeholder="Share links to your portfolio, previous work samples, or describe your best projects..."
                />
              </div>

              {/* Expertise Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#ea2a33]" />
                  Tell Us What You Do Best
                </h3>
                <p className="text-sm text-slate-600">
                  A short note about your expertise goes a long way.
                </p>
                <textarea
                  id="expertise"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea2a33] focus:border-transparent transition-all resize-none"
                  placeholder="Describe your key skills, experience, and what makes you unique in your field..."
                />
              </div>

              {/* Collaboration Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#ea2a33]" />
                  Let&apos;s Collaborate
                </h3>
                <p className="text-sm text-slate-600">
                  If there<span className="font-sans">&apos;</span>s synergy, we
                  <span className="font-sans">&apos;</span>ll be in touch to
                  create something extraordinary together.
                </p>
                <textarea
                  id="collaboration"
                  name="collaboration"
                  value={formData.collaboration}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea2a33] focus:border-transparent transition-all resize-none"
                  placeholder="Share your ideas for collaboration, what excites you about working with us, and how you can contribute to our mission..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 border border-gray-300 text-slate-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#ea2a33] text-white rounded-lg hover:bg-red-600 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Send Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
