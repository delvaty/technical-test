'use client';

import { useState, useEffect } from 'react';
import { ProductProps } from '../../domain/types';
import { motion } from 'framer-motion';
import { FastAverageColor } from 'fast-average-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faWeightHanging, faGasPump, faWater, faWifi, faSolarPanel, faTachometerAlt, faBoxes } from '@fortawesome/free-solid-svg-icons';

const iconMap: Record<string, any> = {
  engine: faCogs,
  weight: faWeightHanging,
  fuel: faGasPump,
  capacity: faBoxes,
  speed: faTachometerAlt,
  water: faWater,
  wifi: faWifi,
  battery: faSolarPanel,
};

export const Product = ({ image, title, subtitle, properties, even }: ProductProps) => {
  const [colors, setColors] = useState({ primary: '#0f172a', secondary: '#dc2626' });

  useEffect(() => {
    const fac = new FastAverageColor();
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = image;
    
    img.onload = async () => {
      try {
        const color = await fac.getColorAsync(img);
        setColors({
          primary: color.hex,
          // rojo de la marca como color secundario para los íconos
          secondary: '#dc2626'
        });
      } catch (e) {
        console.error('error al extraer color de la imagen', e);
      }
    };
    
    return () => fac.destroy();
  }, [image]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${even ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 py-16`}
    >
      {/* contenido de texto, siempre primero en mobile */}
      <div className="w-full md:w-1/2 flex flex-col order-1 md:order-none" style={{ backgroundColor: `${colors.primary}14` /* opacidad ~8% en hex */ }}>
        <div className="p-8 rounded-2xl">
          <motion.h2 
            className="text-3xl font-bold mb-2 text-brand-dark"
            initial={{ opacity: 0, x: even ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.h3 
            className="text-xl text-gray-600 mb-6"
            initial={{ opacity: 0, x: even ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {subtitle}
          </motion.h3>
          
          <div className="space-y-4">
            {properties.map((prop, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-4 bg-white/60 p-4 rounded-xl shadow-sm"
                initial={{ opacity: 0, x: even ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: colors.secondary }}
                >
                  <FontAwesomeIcon icon={iconMap[prop.icon] || faCogs} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{prop.label}</p>
                  <p className="text-lg font-bold text-brand-dark">{prop.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* imagen del producto */}
      <div className="w-full md:w-1/2 order-2 md:order-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video md:aspect-square"
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </motion.div>
  );
};
