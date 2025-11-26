import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.section
            className="bg-[#0040b8] text-white py-20 md:py-28"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* LEFT: Text */}
                <motion.div
                    className="md:w-1/2 mb-10 md:mb-0"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        <span className="text-amber-300">Prestige</span> in Every Parcel.
                        <br />
                        <span className="text-amber-300">Excellence</span> in Every Delivery.
                    </h1>

                    <p className="text-xl mb-8 opacity-90">
                        Anand Shipping brings a new level of sophistication to logistics.
                        Designed for clients who value precision, privacy, and premium care.
                    </p>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-3 bg-amber-400 text-blue-900 font-bold rounded-full shadow-md hover:bg-amber-500 transition flex items-center justify-center"
                        >
                            <i className="fas fa-calendar-check mr-2" />
                            Schedule Pickup
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transition flex items-center justify-center"
                        >
                            <i className="fas fa-play-circle mr-2" />
                            Watch Overview
                        </motion.button>
                    </div>

                    <div className="mt-8 flex items-center">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-amber-400 border-2 border-white" />
                            <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white" />
                            <div className="w-8 h-8 rounded-full bg-amber-200 border-2 border-white" />
                            <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white flex items-center justify-center text-xs text-white">
                                +124
                            </div>
                        </div>
                        <p className="ml-3 text-sm opacity-80">
                            Trusted by 500+ premium clients worldwide
                        </p>
                    </div>
                </motion.div>

                {/* RIGHT: Animated Truck / Ripple */}
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 40, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="relative">
                        {/* Concentric circles */}
                        <div className="w-80 h-80 rounded-full bg-blue-700/70 flex items-center justify-center">
                            <div className="w-64 h-64 rounded-full bg-blue-600/70 flex items-center justify-center">
                                <div className="w-48 h-48 rounded-full bg-blue-500/70 flex items-center justify-center">
                                    {/* Inner white circle with truck */}
                                    <motion.div
                                        className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden"
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <div className="relative w-24 h-10 flex items-center">
                                            {/* Road */}
                                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-200 rounded-full" />
                                            {/* Moving truck (CSS anim from Tailwind config if you have animate-truck-drive) */}
                                            <i className="fas fa-shipping-fast text-3xl text-blue-800 animate-truck-drive" />
                                            {/* Small red indicator dot */}
                                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Rating badge */}
                        <motion.div
                            className="absolute -top-4 right-0 bg-white text-blue-900 py-2 px-4 rounded-lg shadow-lg flex items-center"
                            initial={{ opacity: 0, y: -10, x: 10 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        >
                            <i className="fas fa-star text-amber-400 mr-2" />
                            <span className="font-bold">4.9/5</span>
                            <span className="text-xs ml-1 text-gray-500">Rating</span>
                        </motion.div>

                        {/* Countries badge */}
                        <motion.div
                            className="absolute -bottom-6 left-10 bg-amber-400 text-blue-900 py-2 px-4 rounded-lg shadow-lg flex items-center"
                            initial={{ opacity: 0, y: 10, x: -10 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                        >
                            <i className="fas fa-globe-americas mr-2" />
                            <span className="font-bold">67</span>
                            <span className="text-xs ml-1">Countries</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;