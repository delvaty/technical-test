'use client';

import { FooterProps } from '../../domain/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const iconMap: Record<string, any> = {
  facebook: faFacebook,
  instagram: faInstagram,
  linkedin: faLinkedin,
  whatsapp: faWhatsapp,
};

export const Footer = ({ copyright, socialLinks }: FooterProps) => {
  return (
    <footer id="contacto" className="bg-brand-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400 text-sm">{copyright}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => (
              <a 
                key={link.platform} 
                href={link.url} 
                className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label={`Visit our ${link.platform}`}
              >
                <FontAwesomeIcon icon={iconMap[link.platform]} size="lg" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
