import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const isFormInView = useInView(formRef, { once: true, threshold: 0.3 });
  const isFaqInView = useInView(faqRef, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setShowSuccess(true);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const faqs = [
    {
      question: "What shipping services do you offer?",
      answer:
        "We provide premium logistics solutions including express delivery, secured parcel handling, international shipping, bulk cargo movement, and end-to-end tracking with real-time updates.",
    },
    {
      question: "How can I schedule a pickup?",
      answer:
        "You can easily schedule a pickup through our website or mobile app. Simply enter your shipment details, pickup location, and preferred time. Our team will confirm your booking instantly.",
    },
    {
      question: "Do you offer insurance for valuable shipments?",
      answer:
        "Yes, all high-value and sensitive shipments can be insured with coverage options up to $1,000,000. We use tamper-proof packaging and follow strict security protocols throughout transit.",
    },
    {
      question: "What are your delivery timelines?",
      answer:
        "Delivery timelines depend on the service chosen and destination. Domestic express shipments typically arrive within 24–48 hours, while international deliveries range from 3–7 business days.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-blue-800 overflow-x-hidden mt-24">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="relative py-12 md:py-16 bg-blue-800 overflow-hidden"
      >
        <div className="container mx-auto px-4 py-8 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-white"
            >
              Let&apos;s <span className="text-orange-500">Ship</span> Smarter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-md md:text-2xl text-white leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto px-2 sm:px-4"
            >
              Your cargo, our expertise. Together, we&apos;ll move your
              shipments with precision, safety, and speed.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form & Info Section */}
      <section ref={formRef} className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch"
          >
            {/* LEFT CARD — GET IN TOUCH */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col"
            >
              <motion.div variants={itemVariants} className="mb-5 md:mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-sm md:text-lg">
                  Connect with our logistics experts for shipping, tracking, and
                  service support.
                </p>
              </motion.div>

              <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                {[
                  {
                    label: "Customer Support",
                    icon: "fas fa-headset",
                    value: "+91 98765 43210",
                  },
                  {
                    label: "Email Support",
                    icon: "fas fa-envelope",
                    value: "support@anandshipping.com",
                  },
                  {
                    label: "Head Office",
                    icon: "fas fa-map-marker-alt",
                    value: "Mumbai, Maharashtra, India",
                  },
                  {
                    label: "Working Hours",
                    icon: "fas fa-clock",
                    value: "Mon – Sat: 9 AM – 7 PM",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 p-3 md:p-4 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 group"
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                        <i className={`${item.icon} text-base md:text-lg`}></i>
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-800 text-sm md:text-base">
                        {item.label}
                      </h3>
                      <p className="text-gray-700 text-xs md:text-base mt-1">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <motion.div
                variants={itemVariants}
                className="rounded-xl overflow-hidden border shadow-sm"
              >
                <iframe
                  title="Office Location"
                  src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-40 md:h-52"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>

            {/* RIGHT CARD — FORM */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col"
            >
              <motion.div
                variants={itemVariants}
                className="text-center lg:text-left mb-5 md:mb-7"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
                  Start Your Shipment
                </h2>
                <p className="text-gray-600 text-sm md:text-lg">
                  Book a pickup or request a custom logistics solution. Our team
                  will reach out within 24 hours.
                </p>
              </motion.div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-5 flex-1"
              >
                <motion.div variants={itemVariants}>
                  <label className="text-xs md:text-sm font-medium text-gray-700 mb-2 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 md:py-3 border border-gray-300 rounded-lg text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John David"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="text-xs md:text-sm font-medium text-gray-700 mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 md:py-3 border border-gray-300 rounded-lg text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="text-xs md:text-sm font-medium text-gray-700 mb-2 block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 md:py-3 border border-gray-300 rounded-lg text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+91 98765 43210"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="text-xs md:text-sm font-medium text-gray-700 mb-2 block">
                    Shipment Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 md:py-3 border border-gray-300 rounded-lg text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select shipment type</option>
                    <option value="parcel">Parcel Delivery</option>
                    <option value="express">Express Shipping</option>
                    <option value="cargo">Cargo / Freight</option>
                    <option value="international">International Shipping</option>
                    <option value="pickup">Schedule a Pickup</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="text-xs md:text-sm font-medium text-gray-700 mb-2 block">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 md:py-3 border border-gray-300 rounded-lg text-sm md:text-base focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell us about your delivery, pickup location, package size, or any special instructions."
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 md:py-3 rounded-lg text-sm md:text-lg font-semibold shadow-lg"
                >
                  {isSubmitting ? "Processing..." : "Book Shipment"}
                </motion.button>
              </form>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 md:mt-4 p-3 md:p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-700 text-xs md:text-sm">
                    Thank you! Our logistics team will reach out shortly.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={faqRef}
        className="py-10 md:py-16 bg-gradient-to-br from-blue-50 to-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFaqInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-10 md:mb-14"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-sm sm:text-base md:text-xl text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto px-2 sm:px-4">
                Get answers to common questions about working with us
              </p>
            </motion.div>

            <div className="space-y-3 md:space-y-5">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -2 }}
                  className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 bg-white"
                >
                  <motion.button
                    whileHover={{ backgroundColor: "#dbeafe" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left p-4 md:p-5 flex justify-between items-center transition-colors duration-200"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="font-semibold text-blue-800 text-sm md:text-lg pr-4 hover:text-blue-900 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <motion.svg
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </motion.button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="px-4 md:px-5 pb-4 md:pb-5"
                    >
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
