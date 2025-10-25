import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Listings from './components/Listings';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter','Manrope',sans-serif]">
      <Navbar />
      <Hero />
      <Listings />
      <Footer />
    </div>
  );
}
