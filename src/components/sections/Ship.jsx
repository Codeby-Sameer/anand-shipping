import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGlobeAmericas, FaShippingFast } from "react-icons/fa";


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
      {/* Services Section */}
      <motion.section
        id="services"
        className="py-16 bg-white font-sans"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
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
            {/* Card 1 */}
            <motion.div variants={cardVariants}>
              <div className="service-card bg-white rounded-2xl p-6 shadow-sm border border-red-200 border-t-4 border-t-red-400 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-xl font-bold text-primary-800 mb-3">
                  Priority Delivery
                </h3>
                <p className="text-gray-600 mb-4">
                  Expert domestic and international delivery with guaranteed
                  timeframes and real-time tracking for high-value shipments.
                </p>

                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>Express domestic &amp; international shipping</li>
                  <li>Guaranteed timeframes</li>
                  <li>Priority handling</li>
                </ul>

                <Link
                  to="/services"
                  className="text-primary-600 font-medium hover:text-accent-500 transition flex items-center"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={cardVariants}>
              <div className="service-card bg-white rounded-2xl p-6 shadow-sm border border-gray-200 border-t-4 border-t-amber-400 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-xl font-bold text-primary-800 mb-3">
                  Elite-Grade Packaging
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium protective packaging materials and techniques designed
                  to preserve and protect your valuable items during transit.
                </p>

                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>Premium materials</li>
                  <li>Custom solutions</li>
                  <li>Climate-controlled options</li>
                </ul>

                <Link
                  to="/services"
                  className="text-primary-600 font-medium hover:text-accent-500 transition flex items-center"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={cardVariants}>
              <div className="service-card bg-white rounded-2xl p-6 shadow-sm border border-blue-200 border-t-4 border-t-blue-400 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-xl font-bold text-primary-800 mb-3">
                  White-Glove Handling
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized care for luxury, fragile, and high-value items
                  with dedicated handlers and customized transport solutions.
                </p>

                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>Luxury item specialists</li>
                  <li>Custom transport solutions</li>
                  <li>Temperature-controlled vehicles</li>
                </ul>

                <Link
                  to="/services"
                  className="text-primary-600 font-medium hover:text-accent-500 transition flex items-center"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ABOUT US STYLE SECTION (replacing old Specialized Solutions) */}
      <motion.section
        className="py-20 bg-white font-sans"
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
                  <FaGlobeAmericas className="text-blue-700 text-2xl" />
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
                  <FaShippingFast className="text-blue-700 text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-800">
                    On Time Delivery
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Optimized routing and priority handling ensure your parcels
                    arrive exactly when they’re expected.
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
