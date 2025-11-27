import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const About = () => {
  // Ref for scroll animations
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  // Founder Profile Component with framer-motion animations
  const FounderProfile = () => (
    <section className="max-w-6xl mx-auto pt-12 py-2">
      <motion.div 
        className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-2 p-2 items-start"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.1 }}
      >
        {/* Left: Image card with quote below */}
        <div className="space-y-6">
          <motion.div className="relative overflow-hidden" variants={slideInLeft}>
            <div className='flex item-end w-full justify-center'>
              <motion.img
                src="./images/CEO.png"
                alt="Founder"
                className="w-70 h-[600px] object-cover object-top center"
                style={{ borderRadius: 12 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
            </div>

            {/* Small floating badge with animation */}
            <motion.div className="absolute bottom-4 right-4 lg:bottom-5 lg:right-20 sm:bottom-10 sm:right-20" variants={scaleIn}>
              <motion.div 
                className="bg-white px-4 py-3 rounded-lg shadow-lg font-semibold text-gray-700 border border-gray-100"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="uppercase text-lg tracking-wide text-center text-amber-500 font-bold">ANAND</div>
                <div className="text-xs text-gray-500 text-center">Founder & CEO</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quote below image */}
          <motion.blockquote 
            className="border-l-4 border-amber-500 pl-4 italic text-gray-700 bg-amber-50 rounded-lg p-4 text-base"
            variants={slideInLeft}
          >
            "We don't just ship packages; we deliver trust. Every parcel handled is a promise kept, every delivery made is a commitment to precision and care."
          </motion.blockquote>
        </div>

        {/* Right: Content */}
        <motion.div className="pt-6" variants={slideInRight}>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Anand</h2>
          <p className="text-sm text-blue-700 font-medium">Founder & CEO</p>

          {/* Description */}
          <div className="mb-6 space-y-4 mt-6">
            <motion.p className="text-gray-700 leading-relaxed text-base" variants={fadeInUp}>
              Under the visionary leadership of our Founder, Mr. Anand, Anand Shipping was established on the foundational principle of
              <span className='font-bold text-amber-500'> "Excellence in Every Delivery"</span> — where precision, privacy, and premium care converge to redefine logistics.
            </motion.p>
            <motion.p className="text-gray-700 leading-relaxed text-base" variants={fadeInUp}>
              This commitment forms the bedrock of our company's ethos, guiding our mission to provide shipping solutions that don't just meet expectations, but set new benchmarks for protection and reliability.
            </motion.p>
            <motion.p className="text-gray-700 leading-relaxed text-base" variants={fadeInUp}>
              With extensive experience in logistics and a passion for exceptional service, Mr. Anand envisioned a future where every shipment receives the attention and security it deserves.
            </motion.p>
          </div>

          {/* Core Values */}
          <motion.div className="mt-8" variants={fadeInUp}>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Our Core Values</h3>
            <div className="space-y-3">
              {[
                { icon: 'fas fa-shield-alt', text: 'Precision in Every Detail' },
                { icon: 'fas fa-handshake', text: 'Premium Client Care' },
                { icon: 'fas fa-lock', text: 'Absolute Privacy & Security' }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-gray-700 p-3 rounded-lg hover:bg-amber-50 transition-all duration-300"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`${value.icon} text-amber-500 mr-3 text-lg`}></i>
                  <span className="font-medium">{value.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )

  const ideologyPillars = [
    {
      icon: 'fas fa-gem',
      title: 'Premium Service Standard',
      description: 'Every parcel receives white-glove treatment with elite-grade protective packaging and priority handling, ensuring an elevated shipping experience.',
    },
    {
      icon: 'fas fa-user-shield',
      title: 'Privacy & Discretion',
      description: 'We understand the importance of confidentiality. Our secure logistics ensure your personal, confidential, or high-value items travel with absolute protection.',
    },
    {
      icon: 'fas fa-shipping-fast',
      title: 'Seamless Experience',
      description: 'From real-time tracking with personalized updates to concierge-style coordination, we provide a refined, high-trust logistics experience.',
    }
  ]

  return (
    <div className="overflow-hidden" ref={ref}>
      {/* Hero Section with framer-motion */}
      <section className="text-white py-32 bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Premium badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={mainControls}
            variants={fadeInUp}
          >
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-amber-300 font-medium tracking-wide">Excellence in Motion</span>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={mainControls}
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
              Our Legacy
            </span>
          </motion.h1>

          {/* Enhanced description */}
          <motion.p 
            className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={mainControls}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            we have redefined premium logistics through innovative solutions, 
            unwavering reliability, and exceptional client partnerships that transcend borders.
          </motion.p>

          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={mainControls}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Explore Our Journey
            </motion.button>
            <motion.button 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Our Commitment
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto py-6 px-4">
          <FounderProfile />
        </div>
      </section>

      {/* Ideology Section with framer-motion */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.1 }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4" variants={fadeInUp}>
              Our Premium Offerings
            </motion.h2>
            <motion.div className="w-20 h-1 bg-amber-500 mx-auto mb-8" variants={scaleIn}></motion.div>
            <motion.p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed" variants={fadeInUp}>
              Designed for clients who value precision, privacy, and premium care, we offer an elevated shipping experience where every parcel is treated with the highest level of attention and security.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.1 }}
            variants={staggerContainer}
          >
            {ideologyPillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center group"
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-amber-400 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`${pillar.icon} text-white text-2xl`}></i>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.1 }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div className="text-center md:text-left" variants={slideInLeft}>
                <motion.div 
                  className="inline-flex items-center justify-center md:justify-start gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                  variants={scaleIn}
                >
                  <span>🎯</span> Our Purpose
                </motion.div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">Anand Shipping Mission</h2>
                <p className="text-slate-300 mb-6 leading-relaxed text-base md:text-lg">
                  To deliver logistics experiences that not only meet expectations but exceed them, providing precision, privacy, and premium care for every parcel entrusted to us.
                </p>
                <div className="space-y-4">
                  {[
                    'Handle every shipment with white-glove care',
                    'Ensure absolute security and discretion', 
                    'Provide real-time visibility and communication'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      variants={fadeInUp}
                    >
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm md:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="text-center md:text-left" variants={slideInRight}>
                <motion.div 
                  className="inline-flex items-center justify-center md:justify-start gap-2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                  variants={scaleIn}
                >
                  <span>🔭</span> Future Vision
                </motion.div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">Anand Shipping Vision</h2>
                <p className="text-slate-300 mb-6 leading-relaxed text-base md:text-lg">
                  To become the world's most trusted premium logistics partner, setting the global standard for sophisticated, secure, and seamless shipping experiences.
                </p>
                <div className="space-y-4">
                  {[
                    'Expand global premium delivery network',
                    'Innovate in secure logistics technology', 
                    'Build legacy of unmatched client trust'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      variants={fadeInUp}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm md:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement with framer-motion */}
      <section className="py-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.1 }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8" variants={fadeInUp}>
              Our Commitment
            </motion.h2>
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-amber-500"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p className="text-lg text-gray-700 leading-relaxed mb-6" variants={fadeInUp}>
                At Anand Shipping, we are committed to transforming logistics through premium shipping solutions that honor our foundational principle of excellence.
                We believe that protecting your valuable shipments through sophisticated logistics is not just our business, but our promise to you.
              </motion.p>
              <motion.div 
                className="text-amber-500 font-semibold"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                — Anand, Founder & CEO
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About