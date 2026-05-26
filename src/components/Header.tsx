'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const PawPrintWatermark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14c-1.66 0-3 1.34-3 3 0 2 2 3.5 3 3.5s3-1.5 3-3.5c0-1.66-1.34-3-3-3z" />
    <circle cx="7" cy="11" r="2" />
    <circle cx="10.5" cy="8" r="2" />
    <circle cx="13.5" cy="8" r="2" />
    <circle cx="17" cy="11" r="2" />
  </svg>
);

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
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Cursos', href: '/cursos' },
    { name: 'Nosotros', href: '/nosotros' },
  ];

  return (
    <div className="sticky top-0 z-[100] w-full flex flex-col bg-white transition-all duration-300 shadow-sm">
      {/* Barra superior de anuncios */}
      <div className="bg-charcoal text-white text-xs md:text-sm font-medium py-2 px-4 text-center relative flex justify-center items-center gap-2">
        Evaluación inicial: ¡Reserva hoy y cambia la vida de tu perro!
        <a
          href="#contacto"
          className="underline hover:text-honey-gold transition-colors ml-2 font-bold"
        >
          Reservar ahora
        </a>
      </div>

      <nav className="w-full transition-all duration-500 py-3 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer flex items-center relative z-20" onClick={() => router.push('/')}>
            <Image
              src="/assets/images/b7d66566-7b41-43ea-9cc1-dd65415791db-1779449981971.png"
              alt="Impronta Canina logo"
              width={180}
              height={60}
              className="object-contain transition-all duration-500 ease-in-out dog-shake-hover h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-slate-50 border border-slate-200 hover:border-verde/30 transition-all duration-300 text-[15px] font-bold text-charcoal flex items-center justify-center"
              >
                {/* Watermark Icon */}
                <PawPrintWatermark className="absolute -right-2 -bottom-2 w-10 h-10 text-slate-200 opacity-50 group-hover:text-verde/10 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
                
                <span className="relative z-10 group-hover:text-verde transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
            
            <button
              className="ml-4 btn-tangerine text-white text-[15px] font-bold px-8 py-2.5 rounded-full shadow-tangerine-glow transition-transform hover:scale-105 active:scale-95 flex items-center justify-center relative overflow-hidden group"
              onClick={() => {
                const el = document.getElementById('contacto');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contacto';
                }
              }}
            >
              <PawPrintWatermark className="absolute -right-1 -bottom-1 w-8 h-8 text-white opacity-20 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
              <span className="relative z-10">Consulta</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-20">
            <button
              className={`p-2 rounded-xl transition-colors bg-slate-50 border border-slate-200 text-charcoal hover:text-verde`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Expanding Menu (Pushes content down) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-slate-50 border-t border-slate-200"
          >
            <div className="flex flex-col space-y-3 p-6 max-w-7xl mx-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative overflow-hidden p-4 rounded-2xl bg-white border border-slate-200 text-lg font-bold text-charcoal flex items-center justify-between group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{link.name}</span>
                  <PawPrintWatermark className="w-8 h-8 text-slate-100 group-hover:text-verde/20 transition-colors" />
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <button
                  className="w-full relative overflow-hidden btn-tangerine text-white text-lg font-bold p-4 rounded-2xl shadow-tangerine-glow flex items-center justify-center group"
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
                  <PawPrintWatermark className="absolute -right-2 -bottom-2 w-12 h-12 text-white opacity-20 group-hover:scale-110 transition-transform" />
                  <span className="relative z-10">Consulta</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
