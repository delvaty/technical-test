'use client';

import { ClientsCarouselProps } from '../../domain/types';
import { motion } from 'framer-motion';

export const ClientsCarousel = ({ title, logos }: ClientsCarouselProps) => {
  // duplicar array de logos para crear un bucle continuo
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section id="clientes" className="py-24 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-brand-dark mb-4">{title}</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto rounded-full"></div>
        </motion.div>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* gradientes para difuminar los bordes */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex animate-infinite-scroll hover:[animation-play-state:paused] items-center space-x-16 px-8">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={logo} 
                alt={`Client Logo ${index}`} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
