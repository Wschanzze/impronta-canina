'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Adiestramiento', href: '/#servicios' },
    { name: 'Cursos', href: '/cursos' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <>
      {/* Barra superior de anuncios */}
      <div className="bg-charcoal text-white text-xs md:text-sm font-medium py-2 px-4 text-center z-[101] relative flex justify-center items-center gap-2">
        Evaluación inicial gratuita: ¡Reserva hoy y cambia la vida de tu perro!
        <a
          href="#contacto"
          className="underline hover:text-honey-gold transition-colors ml-2 font-bold"
        >
          Reservar ahora
        </a>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'top-0 bg-white/85 backdrop-blur-xl shadow-warm-md border-b border-honey-gold/20 py-3'
            : 'top-[36px] md:top-[36px] bg-white/95 border-b border-verde/10 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="cursor-pointer flex items-center" onClick={() => router.push('/')}>
            <Image
              src="/assets/images/b7d66566-7b41-43ea-9cc1-dd65415791db-1779449981971.png"
              alt="Impronta Canina logo"
              width={180}
              height={60}
              className={`object-contain transition-all duration-500 ease-in-out dog-shake-hover ${
                scrolled ? 'h-12' : 'h-16 md:h-20'
              } w-auto`}
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-[15px] font-bold text-charcoal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group transition-colors hover:text-verde"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-verde transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <button
              className="btn-tangerine text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-tangerine-glow transition-transform hover:scale-105 active:scale-95"
              onClick={() => {
                const el = document.getElementById('contacto');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contacto';
                }
              }}
            >
              Consulta Gratuita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-[101]">
            <button
              className={`p-2 transition-colors ${mobileMenuOpen ? 'text-white hover:text-honey-gold' : 'text-verde-dark hover:text-tangerine'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Full Screen */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[95] bg-charcoal text-white flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 w-full px-8 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="text-3xl font-serif font-bold hover:text-honey-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8"
              >
                <button
                  className="w-full max-w-xs mx-auto btn-tangerine text-white text-lg font-bold px-8 py-4 rounded-xl shadow-tangerine-glow"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById('contacto');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contacto';
                    }
                  }}
                >
                  Consulta Gratuita
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
