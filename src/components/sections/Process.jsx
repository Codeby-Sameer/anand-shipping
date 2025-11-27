import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Small counter used in stats
const Counter = ({ target, suffix = "", className = "" }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const duration = 1500; // ms
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * target);
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display = value >= target ? `${target}${suffix}` : value;

  return (
    <div ref={ref} className={`text-3xl md:text-4xl font-bold mb-1 ${className}`}>
      {display}
    </div>
  );
};

// Framer Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

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

const Process = () => {
  const impactRef = useRef(null);
  const isImpactInView = useInView(impactRef, { once: true, threshold: 0.3 });

  return (
    <>
      {/* ENHANCED ABOUT US SECTION */}
      <motion.section
        className="py-14 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-10 md:mb-14"
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              About Anand Shipping
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mb-5"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Where precision meets premium care in global logistics. We bring a new level of sophistication
              to shipping, designed for clients who value absolute security, discretion, and exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-14">
            <motion.div variants={fadeUp}>
              <img
                src="/images/shipping.png"
                alt="Anand Shipping Premium Logistics"
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Redefining Premium Logistics
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Founded on the principle of{" "}
                <span className="font-semibold text-amber-600">
                  "Excellence in Every Delivery"
                </span>
                , Anand Shipping has revolutionized the logistics industry by combining cutting-edge technology
                with personalized white-glove service.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We understand that your shipments are more than just packages—they represent trust, value,
                and important milestones. That's why we treat every parcel with the highest level of attention,
                security, and care.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <i className="fas fa-award text-2xl text-amber-500 mb-2"></i>
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">Award Winning</h4>
                  <p className="text-xs md:text-sm text-gray-600">Premium Service</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <i className="fas fa-users text-2xl text-blue-500 mb-2"></i>
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">Expert Team</h4>
                  <p className="text-xs md:text-sm text-gray-600">Trained Professionals</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* STATS SECTION - ENHANCED CONTENT */}
      <motion.section
        className="py-1 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 grid lg:grid-cols-2 max-w-7xl gap-1 items-center ">
          {/* LEFT: TEXT + CALL CARD */}
          <motion.div className="space-y-5 md:space-y-6  md:ms-10 " variants={fadeUp}>
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-blue-600 uppercase">
              Excellence in Logistics
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Trusted by Elite Clients <br /> Worldwide
            </h2>

            <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-xl">
              Anand Shipping has been the preferred logistics partner for businesses
              that demand precision, security, and premium service. Our commitment
              to excellence ensures your valuable shipments receive the attention
              and care they deserve, every single time.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs" />
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  99.7% on-time delivery success rate
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs" />
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  Real-time GPS tracking &amp; monitoring
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs" />
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  Dedicated premium account management
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs" />
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  Up to $1,000,000 insurance coverage
                </span>
              </div>
            </div>

            {/* Call for any query */}
            <div className="flex items-center gap-4 pt-4 bg-white rounded-xl p-4 shadow-sm  border-gray-200">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center overflow-hidden">
                <i className="fas fa-headset text-white text-xl md:text-2xl" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-500 font-medium">
                  Premium Concierge Support
                </p>
                <p className="text-lg md:text-2xl font-bold text-blue-600">
                  +91 98765 43210
                </p>
                <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                  Available 24/7
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: 3 FLAT COLOURED CARDS */}
          <motion.div
            className="grid grid-cols-2 gap-4  max-w-md ml-auto md:ml-0 lg:ml-auto"
            variants={staggerContainer}
          >
            {/* Premium Clients - Blue card */}
            <motion.div
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 md:p-6 shadow-lg rounded-lg flex flex-col justify-between"
              variants={fadeUp}
            >
              <div className="text-2xl md:text-3xl mb-3">👥</div>
              <Counter target={500} suffix="+" className="text-white" />
              <p className="mt-2 text-xs md:text-sm font-medium">
                Premium Clients
              </p>
            </motion.div>

            {/* Successful Deliveries - Green card */}
            <motion.div
              className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 md:p-6 shadow-lg rounded-lg flex flex-col justify-between"
              variants={fadeUp}
            >
              <div className="text-2xl md:text-3xl mb-3">⭐</div>
              <Counter target={25000} suffix="+" className="text-white" />
              <p className="mt-2 text-xs md:text-sm font-medium">
                Successful Deliveries
              </p>
            </motion.div>

            {/* Global Reach - Purple card */}
            <motion.div
              className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 md:p-6 shadow-lg rounded-lg flex flex-col justify-between col-span-2"
              variants={fadeUp}
            >
              <div className="text-2xl md:text-3xl mb-3">🌍</div>
              <Counter target={67} suffix="+" className="text-white" />
              <p className="mt-2 text-xs md:text-sm font-medium">
                Countries Served
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* IMPACT SECTION */}
      
      {/* IMPACT SECTION */}
      <section
        ref={impactRef}
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80%22)%27',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isImpactInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-12 relative text-white"
            >
              Our Global Impact
            </motion.h2>
 
            <motion.div
              variants={itemVariants}
              className="impact-content max-w-4xl mx-auto mb-16 text-center"
            >
              <p className="text-xl text-gray-200">
                At Anand Shipping, we're not just moving packages - we're
                building connections, enabling global trade, and creating
                opportunities for businesses worldwide. Our commitment to
                excellence transforms logistics into a strategic advantage for
                our clients.
              </p>
            </motion.div>
 
            <div className="impact-cards grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "fa-globe-americas",
                  title: "Global Trade Enabler",
                  description:
                    "We connect businesses across continents, facilitating international trade and enabling companies to reach new markets with confidence and reliability.",
                  stats: "67+ Countries Served",
                },
                {
                  icon: "fa-shield-alt",
                  title: "Supply Chain Security",
                  description:
                    "Our advanced security protocols and real-time monitoring ensure that valuable shipments arrive safely, protecting your business assets worldwide.",
                  stats: "99.7% Security Success Rate",
                },
                {
                  icon: "fa-clock",
                  title: "Time-Sensitive Logistics",
                  description:
                    "We specialize in time-critical deliveries, ensuring that urgent shipments reach their destinations precisely when needed, every single time.",
                  stats: "25,000+ On-Time Deliveries",
                },
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className="impact-card bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transition-all duration-300 group cursor-pointer text-center"
                >
                  {/* Top Center Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="impact-icon text-3xl text-amber-400 bg-white/20 p-4 rounded-full transition-all duration-300 group-hover:bg-amber-400 group-hover:text-white group-hover:scale-110">
                      <i className={`fas ${impact.icon}`}></i>
                    </div>
                  </div>
 
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-amber-100 transition-colors duration-300">
                    {impact.title}
                  </h3>
 
                  <p className="text-gray-200 mb-6 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed">
                    {impact.description}
                  </p>
 
                  <div className="text-amber-400 font-bold text-lg group-hover:text-amber-300 transition-colors duration-300 border-t border-white/20 pt-4">
                    {impact.stats}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
 

      {/* ADDITIONAL FEATURES SECTION */}
      <motion.section
        className="py-12 md:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-10 md:mb-14"
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why We're The Preferred Choice
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what sets Anand Shipping apart in premium logistics
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
          >
            {/* Feature 1 */}
            <motion.div className="text-center p-5 md:p-6" variants={fadeUp}>
              <div className="w-18 h-18 md:w-20 md:h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5 md:mb-6">
                <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                Unmatched Security
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Multi-layered security protocols including tamper-evident packaging,
                background-checked handlers, and secure chain of custody documentation.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div className="text-center p-5 md:p-6" variants={fadeUp}>
              <div className="w-18 h-18 md:w-20 md:h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5 md:mb-6">
                <i className="fas fa-clock text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                Guaranteed Precision
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Time-sensitive delivery with real-time tracking and proactive
                notifications. We meet our delivery commitments with 99.7% success rate.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div className="text-center p-5 md:p-6" variants={fadeUp}>
              <div className="w-18 h-18 md:w-20 md:h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-5 md:mb-6">
                <i className="fas fa-crown text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                Premium Experience
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                White-glove service with dedicated account managers, personalized
                coordination, and luxury-level support for seamless logistics experience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Process;
