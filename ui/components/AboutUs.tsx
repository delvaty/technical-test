'use client';

import { AboutUsProps } from '../../domain/types';
import { motion } from 'framer-motion';

export const AboutUs = ({ title, subtitle, content }: AboutUsProps) => {
  return (
    <section id="nosotros" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-brand-dark mb-4">{title}</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full mb-8"></div>
          <h3 className="text-2xl text-gray-600 mb-8 font-medium">{subtitle}</h3>
          <p className="text-lg text-gray-500 leading-relaxed">
            {content}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
