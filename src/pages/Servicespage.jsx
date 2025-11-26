import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

// Popup Modal Component
const ServicePopup = ({ service, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className={`p-6 border-b ${service.borderTop} bg-gradient-to-r from-blue-50 to-white`}>
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className={`w-14 h-14 rounded-full ${service.iconBg} flex items-center justify-center`}>
                <i className={`${service.icon} ${service.iconColor} text-xl`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                <div className={`inline-flex items-center ${service.badgeBg} ${service.badgeColor} px-3 py-1 rounded-full text-sm font-medium mt-2`}>
                  <i className={`${service.badgeIcon} mr-2`} />
                  {service.badgeText}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <i className="fas fa-times text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 object-cover rounded-xl mb-6"
          />

          {/* Description */}
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {service.body}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <i className="fas fa-check text-blue-500 mt-1 text-lg" />
                  <span className="text-gray-700 text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <h4 className="font-bold text-blue-800 mb-2">Why Choose This Service?</h4>
            <p className="text-blue-700 text-sm">
              Perfect for clients who demand absolute precision, security, and premium care for their valuable shipments. 
              Our dedicated team ensures every detail is handled with the utmost attention.
            </p>
          </div>

          {/* Pricing & Timeline */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-amber-50 rounded-lg">
              <i className="fas fa-clock text-amber-600 text-lg mb-1" />
              <p className="text-sm font-medium text-amber-800">24-48 Hours</p>
              <p className="text-xs text-amber-600">Delivery Time</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <i className="fas fa-shield-alt text-green-600 text-lg mb-1" />
              <p className="text-sm font-medium text-green-800">$1M Coverage</p>
              <p className="text-xs text-green-600">Insurance</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-gray-50 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm">
              <i className="fas fa-calendar-check mr-2" />
              Schedule This Service
            </button>
            <button 
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition"
            >
              Close Details
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedService(null);
  };

  const coreServices = [
    {
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      iconBg: "bg-blue-100",
      icon: "fas fa-rocket",
      iconColor: "text-blue-600",
      badgeBg: "bg-amber-100",
      badgeColor: "text-amber-800",
      badgeIcon: "fas fa-bolt",
      badgeText: "Most Popular",
      title: "Priority Express Delivery",
      body: "Expedited domestic & international delivery with guaranteed timeframes. Perfect for time-sensitive business documents, medical supplies, and urgent business materials.",
      borderTop: "border-t-4 border-t-blue-500",
      features: [
        "Express domestic & international delivery",
        "Guaranteed delivery timeframes",
        "Priority handling throughout transit",
        "Real-time tracking & updates",
        "Dedicated customer support",
        "Flexible pickup scheduling"
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      iconBg: "bg-amber-100",
      icon: "fas fa-hands",
      iconColor: "text-amber-600",
      badgeBg: "bg-blue-100",
      badgeColor: "text-blue-800",
      badgeIcon: "fas fa-gem",
      badgeText: "Premium Service",
      title: "White-Glove Handling",
      body: "Specialized care for luxury, fragile, and high-value items. Our trained professionals handle your precious items with the utmost care and attention.",
      borderTop: "border-t-4 border-t-amber-500",
      features: [
        "Luxury item specialists",
        "Custom transport for fragile pieces",
        "Temp & humidity-controlled vehicles",
        "In-person handoff at both ends",
        "Custom crating solutions",
        "Art & antique specialists"
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      iconBg: "bg-blue-100",
      icon: "fas fa-user-secret",
      iconColor: "text-blue-600",
      badgeBg: "bg-amber-100",
      badgeColor: "text-amber-800",
      badgeIcon: "fas fa-shield-alt",
      badgeText: "Secure Service",
      title: "Confidential Logistics",
      body: "Discreet movement of sensitive documents & confidential materials. Complete privacy and security for your most important shipments.",
      borderTop: "border-t-4 border-t-slate-500",
      features: [
        "Tamper-evident packaging & seals",
        "Discreet labelling & routing",
        "Background-checked handlers",
        "Full chain-of-custody records",
        "Secure storage facilities",
        "Digital audit trails"
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      iconBg: "bg-amber-100",
      icon: "fas fa-box-open",
      iconColor: "text-amber-600",
      badgeBg: "bg-blue-100",
      badgeColor: "text-blue-800",
      badgeIcon: "fas fa-award",
      badgeText: "Included Add-on",
      title: "Elite Protective Packaging",
      body: "Premium materials and luxury unboxing for your brand. We ensure your items arrive in perfect condition with custom packaging solutions.",
      borderTop: "border-t-4 border-t-emerald-500",
      features: [
        "Custom packaging per item",
        "Premium protective materials",
        "Climate-conscious packaging",
        "Branded unboxing experiences",
        "Eco-friendly options",
        "Custom foam inserts"
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      iconBg: "bg-blue-100",
      icon: "fas fa-ship",
      iconColor: "text-blue-600",
      badgeBg: "bg-emerald-100",
      badgeColor: "text-emerald-700",
      badgeIcon: "fas fa-anchor",
      badgeText: "Bulk Cargo",
      title: "Bulk Cargo Transport",
      body: "Efficient transportation of large volume cargo via sea freight. Ideal for businesses requiring cost-effective bulk shipping solutions.",
      borderTop: "border-t-4 border-t-indigo-500",
      features: [
        "Heavy & oversized cargo",
        "Secure tie-down systems",
        "Custom freight documentation",
        "International port handling",
        "Container optimization",
        "Multi-modal transport"
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      iconBg: "bg-amber-100",
      icon: "fas fa-truck-loading",
      iconColor: "text-amber-600",
      badgeBg: "bg-green-100",
      badgeColor: "text-green-700",
      badgeIcon: "fas fa-route",
      badgeText: "Most Needed",
      title: "Last-Mile Delivery",
      body: "Fast door-to-door delivery for e-commerce and premium clients. The final step in your supply chain, handled with precision and care.",
      borderTop: "border-t-4 border-t-red-500",
      features: [
        "Doorstep delivery",
        "Flexible delivery windows",
        "Signature confirmation",
        "Live GPS tracking",
        "Photo confirmation",
        "Returns management"
      ],
    },
  ];

  return (
    <div className="bg-slate-50 text-gray-800">
      {/* PAGE HEADER */}
      <motion.section
        className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white pt-20 pb-16 md:pt-24 md:pb-20 shadow-lg mt-5"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight pt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="text-amber-400">Premium</span>{" "}
            <span className="text-white">Shipping Services</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg max-w-2xl mx-auto opacity-90 text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            Tailored logistics solutions for clients who value precision,
            security, and a seamless, high-touch experience.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <div className="inline-flex rounded-full bg-white/10 p-1 backdrop-blur border border-white/10 text-sm md:text-base">
              <a
                href="#core-services"
                className="px-4 py-2 rounded-full hover:bg-white/15 transition font-medium"
              >
                Core Services
              </a>
              <a
                href="#specialized"
                className="px-4 py-2 rounded-full hover:bg-white/15 transition font-medium"
              >
                Specialized
              </a>
              <a
                href="#process"
                className="px-4 py-2 rounded-full hover:bg-white/15 transition font-medium"
              >
                Our Process
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICES OVERVIEW */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            className="text-center mb-10 md:mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Comprehensive Shipping Solutions
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              From express delivery to white-glove handling, Anand Shipping
              ensures every shipment is managed with care and precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[ 
              {
                icon: "fas fa-shipping-fast",
                title: "Fast & Reliable",
                desc: "Express delivery with guaranteed timeframes.",
                bg: "bg-blue-100",
                color: "text-blue-600",
              },
              {
                icon: "fas fa-shield-alt",
                title: "Secure & Protected",
                desc: "Multi-layered security for valuable shipments.",
                bg: "bg-amber-100",
                color: "text-amber-600",
              },
              {
                icon: "fas fa-headset",
                title: "Dedicated Support",
                desc: "A single point of contact for your logistics.",
                bg: "bg-indigo-100",
                color: "text-indigo-600",
              },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                className="text-center p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <div
                  className={`w-12 h-12 rounded-full ${card.bg} flex items-center justify-center mx-auto mb-3`}
                >
                  <i className={`${card.icon} ${card.color} text-lg`} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SERVICES — WITH IMAGES */}
      <section id="core-services" className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Core Shipping Services
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              A compact suite of high-performance logistics offerings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {coreServices.map((s, idx) => (
              <motion.div
                key={s.title}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`bg-white rounded-2xl p-5 md:p-6 border border-slate-100 shadow-sm ${s.borderTop} hover:shadow-lg hover:-translate-y-1 transition-transform text-sm`}
              >
                {/* IMAGE */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />

                <div className="flex items-start mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${s.iconBg} flex items-center justify-center`}
                  >
                    <i className={`${s.icon} ${s.iconColor} text-lg`} />
                  </div>

                  <div className="ml-4 space-y-1">
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                      {s.title}
                    </h3>

                    <div
                      className={`inline-flex items-center ${s.badgeBg} ${s.badgeColor} px-2.5 py-0.5 rounded-full text-[11px] md:text-xs font-medium`}
                    >
                      <i className={`${s.badgeIcon} mr-1`} />
                      {s.badgeText}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-xs md:text-sm">
                  {s.body}
                </p>

                <ul className="text-gray-600 space-y-1.5 mb-4 text-xs md:text-sm">
                  {s.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <i className="fas fa-check text-blue-500 mt-0.5 text-xs" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleLearnMore(s)}
                  className="px-4 py-2 bg-blue-600 text-white text-xs md:text-sm font-medium rounded-lg hover:bg-blue-700 transition shadow-sm"
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED SERVICES */}
      <section id="specialized" className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Specialized Solutions
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Precision-built services for industries with specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                icon: "fas fa-snowflake",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                title: "Temperature Control",
                desc: "Climate-controlled shipping for sensitive goods.",
                bullets: [
                  "Refrigerated & frozen options",
                  "Continuous temperature logging",
                ],
              },
              {
                icon: "fas fa-globe-americas",
                iconBg: "bg-amber-100",
                iconColor: "text-amber-600",
                title: "Global Express",
                desc: "Rapid international shipping with customs support.",
                bullets: [
                  "Customs brokerage assistance",
                  "ETA-based global tracking",
                ],
              },
              {
                icon: "fas fa-tools",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                title: "Assembly & Installation",
                desc: "Delivery plus setup for furniture & equipment.",
                bullets: [
                  "On-site professional assembly",
                  "Installation & basic configuration",
                ],
              },
              {
                icon: "fas fa-warehouse",
                iconBg: "bg-amber-100",
                iconColor: "text-amber-600",
                title: "Secure Storage",
                desc: "Short-term secure, monitored storage spaces.",
                bullets: [
                  "Climate-controlled facilities",
                  "24/7 monitored security",
                ],
              },
              {
                icon: "fas fa-headset",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                title: "Concierge Support",
                desc: "High-touch account & shipment management.",
                bullets: [
                  "Dedicated account manager",
                  "Priority resolutions",
                ],
              },
              {
                icon: "fas fa-map-marked-alt",
                iconBg: "bg-amber-100",
                iconColor: "text-amber-600",
                title: "Real-Time Tracking",
                desc: "Live tracking and proactive notifications.",
                bullets: ["GPS tracking dashboard", "Delay alerts & rerouting"],
              },
            ].map((s, idx) => (
              <motion.div
                key={s.title}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform text-xs md:text-sm"
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <div
                  className={`w-12 h-12 rounded-full ${s.iconBg} flex items-center justify-center mb-3`}
                >
                  <i className={`${s.icon} ${s.iconColor} text-lg`} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1.5">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-3">{s.desc}</p>

                <ul className="text-gray-600 space-y-1 mb-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <i className="fas fa-check text-blue-500 mt-0.5 text-xs" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <button className="text-blue-600 font-medium hover:text-blue-700 transition flex items-center text-xs">
                  Explore options
                  <i className="fas fa-arrow-right ml-1 text-[10px]" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Our Shipping Process
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              A clear, four-step flow for stress-free shipping.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
            {[ 
              {
                step: 1,
                title: "Consultation",
                desc: "We understand your shipment and requirements.",
              },
              {
                step: 2,
                title: "Custom Packaging",
                desc: "We design safe, tailored packaging solutions.",
              },
              {
                step: 3,
                title: "Secure Transport",
                desc: "Your shipment moves under constant monitoring.",
              },
              {
                step: 4,
                title: "Delivery & Confirmation",
                desc: "We deliver, confirm, and follow up with you.",
              },
            ].map((p, idx) => (
              <motion.div
                key={p.step}
                className="text-center bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-transform text-xs md:text-sm"
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-800 font-bold text-lg">
                    {p.step}
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1.5">
                  {p.title}
                </h3>
                <p className="text-gray-600">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience Premium Shipping?
          </h2>
          <p className="text-sm md:text-base mb-8 text-blue-100">
            Let us handle your valuable shipments with the attention,
            protection, and precision they deserve.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-2.5 bg-amber-400 text-blue-900 text-sm md:text-base font-bold rounded-lg hover:bg-amber-500 transition flex items-center justify-center shadow-md"
            >
              <i className="fas fa-calendar-plus mr-2" />
              Schedule a Pickup
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-2.5 bg-white text-blue-800 text-sm md:text-base font-bold rounded-lg hover:bg-slate-100 transition flex items-center justify-center shadow-md"
            >
              <i className="fas fa-phone-alt mr-2" />
              Speak to an Expert
            </motion.button>
          </div>

          <p className="mt-5 text-blue-200 text-xs md:text-sm">
            Or call us directly at{" "}
            <span className="font-semibold text-white">
              +91 98765 43210
            </span>
          </p>
        </div>
      </motion.section>

      {/* POPUP MODAL */}
      <ServicePopup 
        service={selectedService} 
        isOpen={isPopupOpen} 
        onClose={closePopup} 
      />
    </div>
  );
};

export default Services;