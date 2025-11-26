import React, { useState } from "react";
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
      <footer className="light-navy text-white pt-10 pb-6">
        <div className="container mx-auto px-4">
          {/* Top grid: stacks on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-8">
          
            <div className="footer-about">
              <div className="flex items-center space-x-3 mb-3">
                {/* Founder Logo */}
                <div className="flex items-center sm:mr-0">
                  <div className="h-14 w-14 rounded-full shadow-lg border-2 border-amber-300 overflow-hidden mr-3">
                    <img
                      src="./images/CEO.png"
                      alt="Anand Shipping CEO"
                      className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Company Logo */}
                  <div className="h-13 w-10 overflow-hidden mr-3">
                    <img
                      src="./images/Logo.png"
                      alt="Anand Shipping Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <Link to="/" className=" hover:opacity-90 transition-opacity duration-300">
                    <div>
                      <span className="sm:text-md lg:text-lg font-bold"><span className='text-amber-400'>ANAND</span> SHIPPING</span>
                      <p className="text-blue-200 text-[10px] italic -mt-0.5">"Prestige in Every Parcel"</p>
                    </div>
                  </Link>
                </div>
              </div>
              <p className="text-blue-100 mb-4 text-sm sm:text-base leading-relaxed">
                Premium logistics solutions for clients who value precision, privacy, 
                and premium care. Elevating shipping experiences worldwide.
              </p>

              <div className="social-links flex items-center space-x-3">
                {[
                  { platform: "facebook-f", url: "#" },
                  { platform: "twitter", url: "#" },
                  { platform: "linkedin-in", url: "#" },
                  { platform: "instagram", url: "#" },
                ].map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    aria-label={social.platform}
                    className="social-link w-10 h-10 sm:w-10 sm:h-10 bg-white bg-opacity-10 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-amber-400 hover:text-blue-900 hover:-translate-y-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`fab fa-${social.platform}`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links  */}
            <div className="footer-links ml-4 md:ml-8">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
                Quick Links
              </h3>
              <ul className="">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/services", label: "Services" },
                  { path: "/tracking", label: "Track Shipment" },
                  { path: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-blue-100 no-underline block py-1 px-1 rounded-sm transition-all duration-200 hover:text-amber-400 hover:pl-2 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="footer-links">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
                Our Services
              </h3>
              <ul className="space-y-1 text-sm">
                {[
                  { title: "Priority Express Delivery" },
                  { title: "White-Glove Handling" },
                  { title: "Confidential Logistics" },
                  { title: "Elite Protective Packaging" },
                  { title: "Global Cargo Transport" },
                  { title: "Last-Mile Delivery" },
                ].map((service) => (
                  <li key={service.title}>
                    <Link
                      to="/services"
                      className="text-blue-100 no-underline block py-1 transition-colors duration-200 hover:text-amber-400"
                    >
                      <span className="font-medium">{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Legal */}
            <div className="footer-links">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
                Connect
              </h3>
              <div className="space-y-3 mb-4 text-sm">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-map-marker-alt text-amber-400 mt-1" />
                  <span className="text-blue-100">
                    H.No. 131/A, 2nd Floor, MLA Colony, <br />
                    Beside Vamsiram Banjara Abodes,<br />
                    Road No.12, Lane 14, Banjara Hills,<br /> Hyderabad-500034.
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-amber-400" />
                  <span className="text-blue-100">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-amber-400" />
                  <span className="text-blue-100">info@anandshipping.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-headset text-amber-400" />
                  <span className="text-blue-100">24/7 Premium Support</span>
                </div>
              </div>

              <div className="legal-links">
                <h4 className="text-white font-bold mb-3">Legal</h4>
                <div className="flex flex-wrap gap-3 text-sm">
                  <button
                    onClick={() => openModal('privacy')}
                    className="text-blue-200 no-underline transition-colors duration-200 hover:text-amber-400 cursor-pointer bg-transparent border-none"
                  >
                    Privacy Policy
                  </button>
                  <button
                    onClick={() => openModal('terms')}
                    className="text-blue-200 no-underline transition-colors duration-200 hover:text-amber-400 cursor-pointer bg-transparent border-none"
                  >
                    Terms
                  </button>
                  <button
                    onClick={() => openModal('copyright')}
                    className="text-blue-200 no-underline transition-colors duration-200 hover:text-amber-400 cursor-pointer bg-transparent border-none"
                  >
                    Copyright
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright & Developed by */}
          <div className="copyright pt-3 border-t border-blue-400 border-opacity-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
              {/* Left Side */}
              <p className="text-blue-200 text-sm text-center md:text-left">
                &copy; {currentYear} Anand Shipping. All rights reserved.{" "}
                <span className="text-amber-400 font-medium">Prestige in Every Parcel</span>
              </p>

              {/* Right Side - Developed By */}
              <p className="text-blue-200 text-sm text-center md:text-right mr-6">
                Designed by{" "}
                <a
                  href="https://designcareermetrics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 font-semibold hover:underline"
                >
                  Design Career Metrics
                </a>
              </p>
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