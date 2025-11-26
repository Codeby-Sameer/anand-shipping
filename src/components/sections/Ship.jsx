import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Ship = () => {
  return (
    <>
      {/* Mission Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Heading Section */}
            <motion.div variants={containerVariants} className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-2 md:mb-3">
                Our Mission
              </h2>

              <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mb-3 md:mb-4 rounded-full"></div>
            </motion.div>

            {/* Content Section */}
            <motion.div variants={containerVariants}>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 md:mb-5 px-2 sm:px-4">
                Anand Shipping is dedicated to providing sophisticated, secure, and premium
                logistics solutions. We strive to blend precision with personalized care, 
                delivering services that not only meet expectations but exceed them with 
                unmatched attention to detail.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2 sm:px-4">
                With a commitment to absolute privacy and white-glove service, our shipping
                solutions ensure that every parcel—whether personal, confidential, or high-value—
                travels with elegance and absolute protection.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elevated shipping experience where every parcel is treated with
              the highest level of attention and security.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={cardsContainerVariants}
          >
            {/* Card 1 - Priority Delivery */}
            <motion.div variants={cardVariants}>
              <div className="service-card bg-white rounded-2xl p-6 shadow-sm border border-red-200 border-t-4 border-t-red-400 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Icon */}
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-rocket text-red-600 text-2xl"></i>
                </div>
                
                <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">
                  Priority Delivery
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Expert domestic and international delivery with guaranteed
                  timeframes and real-time tracking for high-value shipments.
                </p>

                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-clock text-red-500"></i>
                    <span>Express domestic & international shipping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-shield-alt text-red-500"></i>
                    <span>Guaranteed timeframes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-shipping-fast text-red-500"></i>
                    <span>Priority handling</span>
                  </li>
                </ul>

                <Link
                  to="/services"
                  className="text-blue-600 font-medium hover:text-amber-500 transition flex items-center justify-center"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>

            {/* Card 2 - Elite-Grade Packaging */}
            <motion.div variants={cardVariants}>
              <div className="service-card bg-white rounded-2xl p-6 shadow-sm border border-amber-200 border-t-4 border-t-amber-400 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Icon */}
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-gem text-amber-600 text-2xl"></i>
                </div>
                
                <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">
                  Elite-Grade Packaging
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Premium protective packaging materials and techniques designed
                  to preserve and protect your valuable items during transit.
                </p>

                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-box-open text-amber-500"></i>
                    <span>Premium materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-hands-helping text-amber-500"></i>
                    <span>Custom solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-snowflake text-amber-500"></i>
                    <span>Climate-controlled options</span>
                  </li>
                </ul>

                <Link
                  to="/services"
                  className="text-blue-600 font-medium hover:text-amber-500 transition flex items-center justify-center"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>

            {/* Card 3 - White-Glove Handling */}
            <motion.div variants={cardVariants}>
              <div className="service-card bg-white rounded-2xl p-6 shadow-sm border border-blue-200 border-t-4 border-t-blue-400 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-hand-holding-heart text-blue-600 text-2xl"></i>
                </div>
                
                <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">
                  White-Glove Handling
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Specialized care for luxury, fragile, and high-value items
                  with dedicated handlers and customized transport solutions.
                </p>

                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-crown text-blue-500"></i>
                    <span>Luxury item specialists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-route text-blue-500"></i>
                    <span>Custom transport solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-temperature-low text-blue-500"></i>
                    <span>Temperature-controlled vehicles</span>
                  </li>
                </ul>

                <Link
                  to="/services"
                  className="text-blue-600 font-medium hover:text-amber-500 transition flex items-center justify-center"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ABOUT US STYLE SECTION */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div variants={containerVariants}>
            <img
              src='./images/image.png'
              alt="Quick logistics and transport"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div variants={containerVariants} className="space-y-6">
            <p className="text-blue-700 font-semibold tracking-wide uppercase">
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 leading-tight">
              Quick Transport and <br /> Logistics Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              We deliver secure, premium-grade logistics with unmatched speed,
              precision, and reliability. Every shipment is handled with
              elite-level care, ensuring confidentiality, safety, and on-time
              delivery.
            </p>

            {/* Feature Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
              {/* Global Coverage */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-globe-americas text-blue-700 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-800">
                    Global Coverage
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Extensive network across key domestic and international
                    routes, ensuring reliable coverage end-to-end.
                  </p>
                </div>
              </div>

              {/* On Time Delivery */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shipping-fast text-blue-700 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-800">
                    On Time Delivery
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Optimized routing and priority handling ensure your parcels
                    arrive exactly when they're expected.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <Link
              to="/services"
              className="inline-block mt-6 bg-blue-800 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-900 transition"
            >
              Explore More
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Ship;