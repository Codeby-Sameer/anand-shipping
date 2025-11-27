import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.section
      className="bg-[#0040b8] text-white py-14 md:py-32 pt-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* LEFT: Text */}
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
            <span className="text-amber-300">Prestige</span> in Every Parcel.
            <br className="hidden sm:block" />
            <span className="text-amber-300">Excellence</span> in Every Delivery.
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-xl mx-auto md:mx-0">
            Anand Shipping brings a new level of sophistication to logistics.
            Designed for clients who value precision, privacy, and premium care.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-3 sm:gap-4">
            <motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="w-full sm:w-auto px-7 md:px-8 py-3 bg-amber-400 text-blue-900 font-bold rounded-full shadow-md hover:bg-amber-500 transition flex items-center justify-center text-sm md:text-base"
>
  <Link to="/tracking" className="flex items-center">
    <i className="fas fa-calendar-check mr-2" />
    Track Shipment
  </Link>
</motion.button>

<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="w-full sm:w-auto px-7 md:px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transition flex items-center justify-center text-sm md:text-base"
>
  <Link to="/contact" className="flex items-center">
    <i className="fas fa-envelope mr-2" />
    Contact Us
  </Link>
</motion.button>
          </div>

          <div className="mt-6 md:mt-8 flex items-center justify-center md:justify-start">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-amber-400 border-2 border-white" />
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-400 border-2 border-white" />
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-amber-200 border-2 border-white" />
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-300 border-2 border-white flex items-center justify-center text-[10px] md:text-xs text-white">
                +124
              </div>
            </div>
            <p className="ml-3 text-xs sm:text-sm opacity-80">
              Trusted by 500+ premium clients worldwide
            </p>
          </div>
        </motion.div>

        {/* RIGHT: Animated Truck / Ripple */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-4 md:mt-0"
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            {/* Concentric circles */}
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-blue-700/70 flex items-center justify-center">
              <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full bg-blue-600/70 flex items-center justify-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full bg-blue-500/70 flex items-center justify-center">
                  {/* Inner white circle with animated truck */}
                  <motion.div
                    className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="relative w-20 sm:w-24 h-10 flex items-center justify-center">
                      {/* Road */}
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-200 rounded-full overflow-hidden">
                        {/* moving road dash */}
                        <motion.div
                          className="w-8 h-1 bg-gray-400 rounded-full"
                          animate={{ x: ["-120%", "140%"] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.2,
                            ease: "linear",
                          }}
                        />
                      </div>

                      {/* Animated truck */}
                      <motion.i
                        className="fas fa-shipping-fast text-2xl sm:text-3xl text-blue-800"
                        animate={{
                          x: [-6, 6, -6],
                          rotate: [-2, 2, -2],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Rating badge */}
            <motion.div
              className="absolute -top-4 right-0 bg-white text-blue-900 py-2 px-3 sm:px-4 rounded-lg shadow-lg flex items-center text-xs sm:text-sm"
              initial={{ opacity: 0, y: -10, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <i className="fas fa-star text-amber-400 mr-2" />
              <span className="font-bold">4.9/5</span>
              <span className="text-[10px] sm:text-xs ml-1 text-gray-500">
                Rating
              </span>
            </motion.div>

            {/* Countries badge */}
            <motion.div
              className="absolute -bottom-6 left-6 sm:left-10 bg-amber-400 text-blue-900 py-2 px-3 sm:px-4 rounded-lg shadow-lg flex items-center text-xs sm:text-sm"
              initial={{ opacity: 0, y: 10, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <i className="fas fa-globe-americas mr-2" />
              <span className="font-bold">67</span>
              <span className="text-[10px] sm:text-xs ml-1">Countries</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
