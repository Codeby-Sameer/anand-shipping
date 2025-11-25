import { useState } from "react";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
<nav className="bg-white shadow border-t-5 border-blue-600 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
          {/* Logo */}
<div className="flex-shrink-0 flex items-center">
<a 
              href="index.html" 
              className="bg-blue-600 px-4 lg:px-5 py-2 flex items-center"
>
<h2 className="text-white text-xl font-bold">Logistica</h2>
</a>
</div>
 
          {/* Desktop Menu */}
<div className="hidden lg:flex items-center space-x-8">
<div className="flex space-x-8">
<a href="index.html" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Home
</a>
<a href="about.html" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                About
</a>
<a href="service.html" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Services
</a>
              {/* Dropdown */}
<div className="relative group">
<button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center">
                  Pages
<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
</button>
<div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
<div className="py-1">
<a href="price.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                      Pricing Plan
</a>
<a href="feature.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                      Features
</a>
<a href="quote.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                      Free Quote
</a>
<a href="team.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                      Our Team
</a>
<a href="testimonial.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                      Testimonial
</a>
<a href="404.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                      404 Page
</a>
</div>
</div>
</div>
 
              <a href="contact.html" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Contact
</a>
</div>
 
            {/* Phone Number */}
<div className="flex items-center text-gray-700">
<i className="fas fa-headphones text-blue-600 mr-3"></i>
<span className="font-medium">+012 345 6789</span>
</div>
</div>
 
          {/* Mobile menu button */}
<div className="lg:hidden">
<button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
>
<svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
<svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
</button>
</div>
</div>
 
        {/* Mobile Menu */}
        {isOpen && (
<div className="lg:hidden">
<div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
<a href="index.html" className="block px-3 py-2 text-blue-600 font-medium">Home</a>
<a href="about.html" className="block px-3 py-2 text-gray-700 font-medium hover:text-blue-600">About</a>
<a href="service.html" className="block px-3 py-2 text-gray-700 font-medium hover:text-blue-600">Services</a>
              {/* Mobile Dropdown */}
<div className="px-3 py-2">
<div className="text-gray-700 font-medium mb-2">Pages</div>
<div className="pl-4 space-y-2">
<a href="price.html" className="block py-1 text-gray-600 hover:text-blue-600">Pricing Plan</a>
<a href="feature.html" className="block py-1 text-gray-600 hover:text-blue-600">Features</a>
<a href="quote.html" className="block py-1 text-gray-600 hover:text-blue-600">Free Quote</a>
<a href="team.html" className="block py-1 text-gray-600 hover:text-blue-600">Our Team</a>
<a href="testimonial.html" className="block py-1 text-gray-600 hover:text-blue-600">Testimonial</a>
<a href="404.html" className="block py-1 text-gray-600 hover:text-blue-600">404 Page</a>
</div>
</div>
 
              <a href="contact.html" className="block px-3 py-2 text-gray-700 font-medium hover:text-blue-600">Contact</a>
<div className="px-3 py-2 flex items-center text-gray-700">
<i className="fas fa-headphones text-blue-600 mr-3"></i>
<span>+012 345 6789</span>
</div>
</div>
</div>
        )}
</div>
</nav>
  );
};
 