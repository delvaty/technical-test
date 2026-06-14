'use client';

import { useState } from 'react';
import { NavbarProps } from '../../domain/types';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Navbar = ({ title, menuItems }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // separamos el título para aplicar estilos distintos a cada parte
  const titleParts = title.split(' ');
  const agro = titleParts[0];
  const peru = titleParts.slice(1).join(' ');

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    if (isOpen) {
      // en mobile: cerramos el menú primero y esperamos a que termine la animación
      setIsOpen(false);
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 350); // 350ms es la duración de la animación de salida de framer motion
    } else {
      // en desktop: hacemos scroll directo sin espera
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-brand-dark tracking-tight">{agro}</span>
            {peru && <span className="text-2xl font-bold text-brand-red ml-2 tracking-tight">{peru}</span>}
          </div>

          {/* menú escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-brand-dark hover:text-brand-red transition-colors font-medium cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* botón hamburguesa mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-red focus:outline-none"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>
      </div>

      {/* menú mobile desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-brand-dark hover:text-brand-red hover:bg-gray-50 rounded-md cursor-pointer"
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
