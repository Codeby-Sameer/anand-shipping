import React from 'react';
import Hero from '../components/sections/Hero';
import Ship from '../components/sections/Ship'
import Process from '../components/sections/Process';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Hero />
      <Ship />
      <Process />
      <CTA />
    </div>
  );
};

export default Home;