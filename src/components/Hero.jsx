import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden" id="experiences">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/XlJAYkODE2pCd85r/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight"
          >
            Ride the Cosmos. Stay Among the Stars.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-white/80"
          >
            SpaceDestina is the galaxy’s premier space hotel brand. Kick off your journey with a high-gravity rainbow-lit rollercoaster in orbit, then unwind in zero-g luxury with panoramic nebula views.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#listings"
              className="rounded-full px-6 py-3 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500 text-black font-semibold shadow-lg hover:shadow-cyan-500/30 transition"
            >
              Explore Stays
            </a>
            <a
              href="#perks"
              className="rounded-full px-6 py-3 border border-white/20 hover:border-white/40 bg-white/10 hover:bg-white/20 transition"
            >
              View Amenities
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
