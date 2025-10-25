import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star, Wifi, Shield, Sun, Moon, Cloud } from 'lucide-react';

const listings = [
  {
    id: 'orbital-nebula',
    name: 'Orbital Nebula Suites',
    location: 'Low Earth Orbit • 380km',
    price: 1299,
    image:
      'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1600&auto=format&fit=crop',
    rating: 4.9,
    amenities: [
      { icon: Wifi, label: 'Quantum Wi‑Fi' },
      { icon: Shield, label: 'Radiation Shield' },
      { icon: Star, label: 'Panoramic Dome' },
    ],
  },
  {
    id: 'lunar-halo',
    name: 'Lunar Halo Resort',
    location: 'Mare Tranquillitatis • Moon',
    price: 2599,
    image:
      'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1600&auto=format&fit=crop',
    rating: 5.0,
    amenities: [
      { icon: Sun, label: 'Solar Lounge' },
      { icon: Star, label: 'Stargaze Deck' },
      { icon: Shield, label: 'Dustproof Airlocks' },
    ],
  },
  {
    id: 'europa-spa',
    name: 'Europa Ice Spa',
    location: 'Europa • Jovian Orbit',
    price: 3899,
    image:
      'https://images.unsplash.com/photo-1543721482-bc95ff1f1dea?q=80&w=1600&auto=format&fit=crop',
    rating: 4.8,
    amenities: [
      { icon: Cloud, label: 'Cryo Spa' },
      { icon: Wifi, label: 'Entangled Net' },
      { icon: Star, label: 'Aurora Atrium' },
    ],
  },
  {
    id: 'mars-dunes',
    name: 'Mars Dunes Lodge',
    location: 'Elysium Planitia • Mars',
    price: 3199,
    image:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop',
    rating: 4.7,
    amenities: [
      { icon: Shield, label: 'Storm Shelter' },
      { icon: Moon, label: 'Low‑G Gym' },
      { icon: Wifi, label: 'Laser Link' },
    ],
  },
];

function formatPrice(p) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(p);
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Listings() {
  return (
    <section id="listings" className="relative py-20 bg-gradient-to-b from-black to-[#040413]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Book Your Space Hotel</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Curated stays at iconic orbital and interplanetary destinations. All come with secure transfer and a pre‑launch thrill ride.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-cyan-300/90">
            <Rocket className="h-5 w-5" />
            <span className="text-sm">Trusted by 120K+ voyagers</span>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {listings.map((l) => (
            <motion.article
              key={l.id}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={l.image}
                  alt={`${l.name} image`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs border border-white/10">
                  <Star className="h-3.5 w-3.5 text-yellow-300" />
                  <span>{l.rating.toFixed(1)}</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold drop-shadow">{l.name}</h3>
                    <p className="text-xs text-white/80">{l.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">
                      <span className="text-white/70">from</span> <span className="font-semibold">{formatPrice(l.price)}</span>
                    </p>
                    <p className="text-[10px] text-white/60">per night</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <ul className="flex flex-wrap gap-2">
                  {l.amenities.map((a, i) => (
                    <li
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs rounded-full border border-white/10 bg-white/5 px-2.5 py-1"
                    >
                      <a.icon className="h-3.5 w-3.5 text-cyan-300" />
                      <span className="text-white/80">{a.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <button className="rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500 text-black shadow hover:shadow-cyan-500/30 transition">
                    Book now
                  </button>
                  <button className="text-sm text-white/80 hover:text-white transition underline/30 hover:underline">Details</button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div id="perks" className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[{
            title: 'Zero‑G Comfort',
            desc: 'Adaptive beds and motion‑stabilized cabins for deep space rest.',
            Icon: Moon
          }, {
            title: 'Secure Transfers',
            desc: 'From space‑rollercoaster launch to orbital docking with AI copilots.',
            Icon: Shield
          }, {
            title: 'Always Connected',
            desc: 'Quantum‑linked Wi‑Fi across the fleet keeps you in touch.',
            Icon: Wifi
          }].map((perk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-tr from-cyan-400/20 to-fuchsia-500/10 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <div className="rounded-lg border border-white/10 bg-black/50 p-2">
                  <perk.Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-semibold">{perk.title}</h3>
                  <p className="text-sm text-white/70">{perk.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
