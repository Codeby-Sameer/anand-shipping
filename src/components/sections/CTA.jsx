import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// Testimonials Data
const TESTIMONIALS = [
  {
    name: "Anita Rao",
    role: "Producer",
    text: "They were wonderful to work with and delivered beyond expectations. Highly recommended.",
    avatar: "https://i.pravatar.cc/140?img=47",
    stars: 5,
  },
  {
    name: "Karan Mehta",
    role: "Director",
    text: "Great communication and tasteful creative judgment throughout the project.",
    avatar: "https://i.pravatar.cc/140?img=5",
    stars: 4,
  },
  {
    name: "John Deo",
    role: "CEO, Company Inc.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed odio sit amet nibh vulputate cursus.",
    avatar: "https://i.pravatar.cc/140?img=12",
    stars: 5,
  },
];

const Star = ({ filled }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-4 h-4 md:w-5 md:h-5 ${
      filled ? "fill-yellow-400" : "fill-gray-300"
    }`}
  >
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.168L12 18.897l-7.336 3.867 1.402-8.168L.132 9.21l8.2-1.192z" />
  </svg>
);

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

const CTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  return (
    <>
      {/* Testimonials Section (Static, No Scrolling) */}
      <section ref={sectionRef} className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            {/* Heading */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-10 md:mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
                What Our Clients Say
              </h2>
              <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
              <p className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Hear from the talented professionals we've collaborated with
              </p>
            </motion.div>

            {/* Testimonial Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            >
              {TESTIMONIALS.map((t, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className="relative bg-white rounded-2xl border border-gray-200 p-6 md:p-8 text-center shadow-md hover:shadow-xl transition"
                >
                  <div className="absolute left-1/2 -top-8 -translate-x-1/2">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-lg ring-4 ring-white"
                    />
                  </div>

                  <div className="pt-8">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">
                      {t.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 mb-3">
                      {t.role}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                      {t.text}
                    </p>

                    {/* Stars */}
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} filled={s <= t.stars} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 md:py-16 bg-blue-800 text-white"
        style={{
          fontFamily:
            "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-5 md:mb-6">
            Experience Premium Shipping
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Elevate your logistics with Anand Shipping , where every parcel
            receives the attention and care it deserves.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link
              to="/contact"
              className="px-7 md:px-8 py-3 bg-amber-500 border-2 border-amber-500 text-gray-900 font-bold rounded-full hover:bg-amber-600 hover:border-amber-600 transition flex items-center justify-center text-sm md:text-base"
            >
              <i className="fas fa-calendar-plus mr-2" />
              Schedule Pickup
            </Link>

            <Link
              to="/contact"
              className="px-7 md:px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-800 transition flex items-center justify-center text-sm md:text-base"
            >
              <i className="fas fa-phone-alt mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
