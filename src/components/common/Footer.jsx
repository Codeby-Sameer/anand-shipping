import React, { useState } from "react";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Modal content
  const modalContent = {
    privacy: {
      title: "Privacy Policy",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700 text-base leading-relaxed">At Anand Shipping, we are committed to protecting your privacy and ensuring the security of your personal and shipment information.</p>
          
          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Information We Collect</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Personal and business contact information</li>
            <li>Shipment details and tracking information</li>
            <li>Payment and billing information</li>
            <li>Website usage data through cookies</li>
            <li>Customer service communications</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">How We Use Your Information</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>To process and track your shipments</li>
            <li>To provide customer support and service updates</li>
            <li>To improve our logistics and delivery services</li>
            <li>To send important shipping notifications</li>
            <li>To comply with legal and customs requirements</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Data Protection & Security</h3>
          <p class="text-gray-700 text-base leading-relaxed">We implement enterprise-grade security measures to protect your shipment data and personal information from unauthorized access, alteration, or disclosure. All data is encrypted in transit and at rest.</p>

          <p class="text-gray-700 text-base leading-relaxed mt-6">For any questions about our privacy practices, please contact us at <span class="text-amber-600 font-medium">privacy@anandshipping.com</span></p>
        </div>
      `
    },
    terms: {
      title: "Terms of Service",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700 text-base leading-relaxed">Welcome to Anand Shipping. By using our premium logistics services, you agree to these terms and conditions.</p>
          
          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Service Agreement</h3>
          <p class="text-gray-700 text-base leading-relaxed">Our shipping services are subject to availability and may be affected by factors beyond our control including weather, customs delays, and regulatory requirements.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Shipping & Handling</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>All shipments are subject to inspection and customs clearance</li>
            <li>Prohibited items will not be accepted for shipment</li>
            <li>Proper packaging is required for fragile items</li>
            <li>Additional charges may apply for special handling</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Insurance & Liability</h3>
          <p class="text-gray-700 text-base leading-relaxed">We offer insurance coverage up to $1,000,000 for eligible shipments. Claims must be filed within 30 days of delivery with proper documentation.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Payment Terms</h3>
          <p class="text-gray-700 text-base leading-relaxed">Payment is due upon shipment unless credit terms have been established. Late payments may result in service suspension.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Limitation of Liability</h3>
          <p class="text-gray-700 text-base leading-relaxed">Anand Shipping's liability is limited to the declared value of the shipment or the maximum insurance coverage, whichever is lower.</p>

          <p class="text-gray-700 text-base leading-relaxed mt-6">We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.</p>
        </div>
      `
    },
    copyright: {
      title: "Copyright Notice",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700 text-base leading-relaxed">All content on the Anand Shipping website is protected by copyright and other intellectual property laws.</p>
          
          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Copyright Ownership</h3>
          <p class="text-gray-700 text-base leading-relaxed">Unless otherwise stated, Anand Shipping owns the copyright for all content on this website, including:</p>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Website design, layout, and user interface</li>
            <li>Written content, service descriptions, and documentation</li>
            <li>Logos, branding materials, and marketing content</li>
            <li>Tracking systems and software interfaces</li>
            <li>Photography and visual assets</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Permitted Use</h3>
          <p class="text-gray-700 text-base leading-relaxed">You may view and download content for personal, non-commercial use only. Any other use requires prior written permission from Anand Shipping.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Prohibited Actions</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Reproducing content for commercial purposes</li>
            <li>Modifying or creating derivative works of our systems</li>
            <li>Using our branding without authorization</li>
            <li>Scraping or automated data collection from our platforms</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Trademarks</h3>
          <p class="text-gray-700 text-base leading-relaxed">"Anand Shipping" and the company logo are registered trademarks. Unauthorized use is strictly prohibited.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Copyright Infringement</h3>
          <p class="text-gray-700 text-base leading-relaxed">If you believe your work has been copied in a way that constitutes copyright infringement, please contact us at <span class="text-amber-600 font-medium">legal@anandshipping.com</span> with detailed information.</p>

          <p class="text-gray-700 text-base leading-relaxed mt-6">© ${currentYear} Anand Shipping. All rights reserved.</p>
        </div>
      `
    }
  };

  return (
    <>
      
      <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-4">
            <div className="flex flex-row items-start sm:items-center space-y-3 space-x-2 mb-4">
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <img src='/img/logo.png' alt="logo" className='w-full p-2 sm:p-4' />
                </div>
              </div>
              <div className="flex  flex-row items-baseline space-x-1 sm:space-x-2">
                <div className="text-xl sm:text-2xl font-bold text-white ">ANAND</div>
                <div className="text-xl sm:text-2xl font-bold text-white">GROUP</div>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Building a better tomorrow through innovation, integrity, and social responsibility.
            </p>
            <div className="flex space-x-3 sm:space-x-4 pt-2">
              <a href="" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300">
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300">
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
 
          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors block py-1">Home</Link></li>
              <li><Link to="About" className="text-gray-300 hover:text-gold transition-colors block py-1">About</Link></li>
              <li><Link to="Services" className="text-gray-300 hover:text-gold transition-colors block py-1">Services</Link></li>
              <li><Link to="Contact" className="text-gray-300 hover:text-gold transition-colors block py-1">Contact</Link></li>
              <li><Link to="Tracking" className="text-gray-300 hover:text-gold transition-colors block py-1">Tracking</Link></li>
            </ul>
          </div>
 
          {/* Our Divisions */}
        <div>
  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gold">Our Divisions</h3>
  <ul className="space-y-2 text-xs sm:text-sm">
    <li>
      <Link
        to="/services"
        className="text-gray-300 hover:text-gold transition-colors block py-1"
      >
        Priority Express Delivery
      </Link>
    </li>
    <li>
      <Link
        to="/services"
        className="text-gray-300 hover:text-gold transition-colors block py-1"
      >
        White-Glove Handling
      </Link>
    </li>
    <li>
      <Link
        to="/services"
        className="text-gray-300 hover:text-gold transition-colors block py-1"
      >
        Confidential Logistics
      </Link>
    </li>
    <li>
      <Link
        to="/services"
        className="text-gray-300 hover:text-gold transition-colors block py-1"
      >
        Elite Protective Packaging
      </Link>
    </li>
    <li>
      <Link
        to="/services"
        className="text-gray-300 hover:text-gold transition-colors block py-1"
      >
        Bulk Cargo Transport
      </Link>
    </li>
    <li>
      <Link
        to="/services"
        className="text-gray-300 hover:text-gold transition-colors block py-1"
      >
        Last-Mile Delivery
      </Link>
    </li>
  </ul>
</div>
 
          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gold">Contact Info</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">
                  H.No. 131/A, 2nd Floor, MLA Colony, Beside Vamsiram Banjara Abodes, Road No.12, Lane 14, Banjara Hills, Hyderabad-500034.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">info.anandrealtyy@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm">+91 1800 123 4567</span>
              </li>
            </ul>
          </div>
        </div>
 
        {/* Bottom Section */}
        <div className="border-t border-blue-800 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              &copy;2025 Anand Group. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              &copy;Designed by{' '}
              <a
                href="https://designcareermetrics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
              >
                Designcareermetrics
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a  className="text-gray-400 hover:text-gold transition-colors whitespace-nowrap"  onClick={() => openModal('privacy')}>Privacy Policy</a>
              <a  className="text-gray-400 hover:text-gold transition-colors whitespace-nowrap"  onClick={() => openModal('terms')}>Terms of Service</a>
              <a  className="text-gray-400 hover:text-gold transition-colors whitespace-nowrap"  onClick={() => openModal('copyright')}>Copyright</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

      {/* Modal Popups */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            {/* Modal Header - Clean without background or border */}
            <div className="flex justify-between items-center p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
                {modalContent[activeModal].title}
              </h2>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 text-gray-600 hover:text-gray-800"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 p-6 overflow-y-auto border-t border-gray-100">
              <div 
                dangerouslySetInnerHTML={{ __html: modalContent[activeModal].content }}
                className="prose prose-sm max-w-none"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-6 border-t border-gray-100">
              <button
                onClick={closeModal}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;