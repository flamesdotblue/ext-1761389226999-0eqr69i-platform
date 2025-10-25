import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500 rounded-full blur opacity-60" />
            <div className="relative bg-black rounded-full p-1.5">
              <Rocket className="h-5 w-5 text-cyan-300" />
            </div>
          </div>
          <span className="text-white font-semibold tracking-wide">SpaceDestina</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#experiences" className="text-white/80 hover:text-white transition">Experiences</a>
          <a href="#listings" className="text-white/80 hover:text-white transition">Destinations</a>
          <a href="#perks" className="text-white/80 hover:text-white transition">Amenities</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 transition border border-white/10">
          <Star className="h-4 w-4 text-yellow-300" />
          Book Now
        </button>
      </div>
    </header>
  );
}
