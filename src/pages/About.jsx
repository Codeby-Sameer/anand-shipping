import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  // Enhanced animations for About page
  useEffect(() => {
    // Enhanced fade in on scroll with staggered delays
    const checkFadeIn = () => {
      const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
      fadeElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
       
        if (elementTop < window.innerHeight - elementVisible) {
          // Stagger animation delays based on index
          setTimeout(() => {
            element.classList.add('visible');
          }, index * 100);
        }
      });
    };

    // Initialize animations
    const timer = setTimeout(() => {
      checkFadeIn();
    }, 100);

    window.addEventListener('scroll', checkFadeIn);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', checkFadeIn);
    };
  }, []);

  // Founder Profile Component with enhanced animations
  const FounderProfile = () => (
    <section className="max-w-6xl mx-auto pt-12 py-2">
      <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-2 p-2 items-start">
        {/* Left: Image card with quote below */}
        <div className="space-y-6">
          <div className="relative overflow-hidden slide-in-left">
            <div className='flex item-end w-full justify-center'>
              <img
                src="./images/CEO.png"
                alt="Founder"
                className="w-70 h-[600px] object-cover object-top center transform hover:scale-105 transition-transform duration-700"
                style={{ borderRadius: 12 }}
              />
            </div>

            {/* Small floating badge with animation */}
            <div className="absolute bottom-4 right-4 lg:bottom-5 lg:right-20 sm:bottom-10 sm:right-20 scale-in">
              <div className="bg-white px-4 py-3 rounded-lg shadow-lg font-semibold text-gray-700 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="uppercase text-lg tracking-wide text-center text-amber-500 font-bold">ANAND</div>
                <div className="text-xs text-gray-500 text-center">Founder & CEO</div>
              </div>
            </div>
          </div>

          {/* Quote below image */}
          <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700 bg-amber-50 rounded-lg p-4 text-base slide-in-left">
            "We don't just ship packages; we deliver trust. Every parcel handled is a promise kept, every delivery made is a commitment to precision and care."
          </blockquote>
        </div>

        {/* Right: Content */}
        <div className="pt-6 slide-in-right">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Anand</h2>
          <p className="text-sm text-blue-700 font-medium">Founder & CEO</p>

          {/* Description */}
          <div className="mb-6 space-y-4 mt-6">
            <p className="text-gray-700 leading-relaxed text-base fade-in">
              Under the visionary leadership of our Founder, Mr. Anand, Anand Shipping was established on the foundational principle of
              <span className='font-bold text-amber-500'> "Excellence in Every Delivery"</span> — where precision, privacy, and premium care converge to redefine logistics.
            </p>
            <p className="text-gray-700 leading-relaxed text-base fade-in">
              This commitment forms the bedrock of our company's ethos, guiding our mission to provide shipping solutions that don't just meet expectations, but set new benchmarks for protection and reliability.
            </p>
            <p className="text-gray-700 leading-relaxed text-base fade-in">
              With extensive experience in logistics and a passion for exceptional service, Mr. Anand envisioned a future where every shipment receives the attention and security it deserves.
            </p>
          </div>

          {/* Core Values */}
          <div className="mt-8 fade-in">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Our Core Values</h3>
            <div className="space-y-3">
              {[
                { icon: 'fas fa-shield-alt', text: 'Precision in Every Detail' },
                { icon: 'fas fa-handshake', text: 'Premium Client Care' },
                { icon: 'fas fa-lock', text: 'Absolute Privacy & Security' }
              ].map((value, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-700 p-3 rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:translate-x-2"
                >
                  <i className={`${value.icon} text-amber-500 mr-3 text-lg`}></i>
                  <span className="font-medium">{value.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

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
    <div className="overflow-hidden pt-20">
      {/* Hero Section with enhanced animation */}
      <section className="text-white py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
       
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-xl text-amber-300 mb-4 font-sans fade-in">
            Prestige in Every Parcel
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 fade-in">
            Our Foundation
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto fade-in animation-delay-300">
            Where precision meets premium care in logistics
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto py-6 px-4">
          <FounderProfile />
        </div>
      </section>

      {/* Ideology Section with enhanced animations */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 fade-in">Our Premium Offerings</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8 scale-in"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed fade-in">
              Designed for clients who value precision, privacy, and premium care, we offer an elevated shipping experience where every parcel is treated with the highest level of attention and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ideologyPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl text-center fade-in group hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-r from-amber-400 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${pillar.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center md:justify-start gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <span>🎯</span> Our Purpose
                </div>
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
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center md:justify-start gap-2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <span>🔭</span> Future Vision
                </div>
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
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Mission Statement with enhanced animation */}
      <section className="py-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 fade-in">Our Commitment</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-amber-500 transform hover:scale-105 transition-transform duration-300">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 fade-in">
                "At Anand Shipping, we are committed to transforming logistics through premium shipping solutions that honor our foundational principle of excellence.
                We believe that protecting your valuable shipments through sophisticated logistics is not just our business, but our promise to you."
              </p>
              <div className="text-amber-500 font-semibold fade-in animation-delay-500">
                — Anand, Founder & CEO
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Enhanced Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
       
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
       
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
       
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
       
        .fade-in {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }
       
        .slide-in-left {
          opacity: 0;
          animation: slide-in-left 0.8s ease-out forwards;
        }
       
        .slide-in-right {
          opacity: 0;
          animation: slide-in-right 0.8s ease-out forwards;
        }
       
        .scale-in {
          opacity: 0;
          animation: scale-in 0.6s ease-out forwards;
        }
       
        .visible {
          opacity: 1;
        }
       
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
       
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
       
        .animation-delay-2000 {
          animation-delay: 2s;
        }
       
        /* Hover effects */
        .group:hover .group-hover\:scale-110 {
          transform: scale(1.1);
        }
       
        .group:hover .group-hover\:-translate-y-2 {
          transform: translateY(-0.5rem);
        }
      `}</style>
    </div>
  )
}

export default About