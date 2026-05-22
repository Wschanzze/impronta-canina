'use client';
import React from 'react';
import { motion } from 'framer-motion';

const BalloonDogIcon: React.FC<{ className?: string; color?: string }> = ({
  className,
  color = 'currentColor',
}) => (
  <svg viewBox="0 0 120 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="55" cy="42" rx="28" ry="16" fill={color} opacity="0.95" />
    <ellipse cx="84" cy="32" rx="14" ry="12" fill={color} opacity="0.95" />
    <ellipse cx="96" cy="36" rx="8" ry="6" fill={color} opacity="0.9" />
    <ellipse cx="103" cy="37" rx="3" ry="2.5" fill={color} opacity="0.8" />
    <ellipse
      cx="82"
      cy="22"
      rx="7"
      ry="9"
      fill={color}
      opacity="0.8"
      transform="rotate(-15 82 22)"
    />
    <rect x="62" y="54" width="8" height="14" rx="4" fill={color} opacity="0.9" />
    <rect x="74" y="54" width="8" height="14" rx="4" fill={color} opacity="0.9" />
    <rect x="34" y="54" width="8" height="14" rx="4" fill={color} opacity="0.9" />
    <rect x="44" y="54" width="8" height="14" rx="4" fill={color} opacity="0.9" />
    <path d="M28 40 Q10 25 15 15 Q18 8 22 12 Q20 20 30 30" fill={color} opacity="0.85" />
  </svg>
);

const MosaicHero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-charcoal">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/assets/videos/6011991_Dog_Animal_1280x720.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Overlay Text - Interactive and Glassmorphic */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-center px-8 py-10 md:px-12 md:py-12 rounded-4xl pointer-events-auto group relative max-w-xl mx-auto shadow-2xl border transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
          style={{
            background: 'rgba(26, 26, 26, 0.65)',
            backdropFilter: 'blur(12px)',
            borderColor: 'rgba(232, 184, 0, 0.35)',
          }}
        >
          {/* Balloon Dog Icon POP-UP on top border when hovering */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-20">
            <div className="px-3 py-1.5 rounded-full bg-white shadow-lg border border-honey-gold flex items-center justify-center">
              <BalloonDogIcon
                className="w-8 h-5 text-honey-gold animate-bounce"
                color="var(--honey-gold)"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 font-bold text-xs uppercase tracking-wider"
            style={{ background: 'var(--tangerine)', color: '#ffffff' }}
          >
            🐾 Educación Canina Profesional
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4"
            style={{ letterSpacing: '-0.01em', color: '#FFFFFF' }}
          >
            Un aprendizaje
            <br />
            <em className="not-italic" style={{ color: 'var(--honey-gold)' }}>
              que deja huella.
            </em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed mb-6"
            style={{ color: 'rgba(255,255,255,0.95)' }}
          >
            Adiestramiento, asesoramiento y cursos caninos diseñados para transformar la relación
            entre tú y tu perro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <button
              onClick={() => {
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-tangerine text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-tangerine-glow transition-transform hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2"
            >
              Consulta gratuita 🐾
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Geometric border lines */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 z-20"
        style={{
          background:
            'linear-gradient(90deg, var(--honey-gold), var(--tangerine), var(--verde), var(--honey-gold))',
        }}
      />
    </section>
  );
};

export default MosaicHero;
