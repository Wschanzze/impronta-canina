'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { motion } from 'framer-motion';

interface Tile {
  id: number;
  src: string;
  alt: string;
  colSpan: number;
  rowSpan: number;
  flipContent: 'metodo' | 'huella' | 'vinculo' | null;
  type?: 'image' | 'video';
}

const tiles: Tile[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1544568100-847a948585b9',
    alt: 'Perro entrenando con comunicación clara',
    colSpan: 2,
    rowSpan: 2,
    flipContent: 'metodo',
    type: 'image',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1612846392422-24282052e07a',
    alt: 'Cachorro aprendiendo su primer comando con entusiasmo',
    colSpan: 1,
    rowSpan: 1,
    flipContent: null,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1665674065241-f7ffb6ee1cb4',
    alt: 'Perro corriendo libre y feliz en el campo durante paseo',
    colSpan: 1,
    rowSpan: 2,
    flipContent: 'huella',
  },
  {
    id: 4,
    src: '/assets/images/perro 1.jpg',
    alt: 'Perro entrenando concentración e impronta canina',
    colSpan: 1,
    rowSpan: 1,
    flipContent: null,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1701587444296-9e8ce7f988c5',
    alt: 'Cachorro durmiendo tranquilo tras sesión de aprendizaje',
    colSpan: 1,
    rowSpan: 1,
    flipContent: null,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1526489550178-7bd5d9944f4f',
    alt: 'Perro mirando con ojos expresivos y confianza a su dueño',
    colSpan: 2,
    rowSpan: 1,
    flipContent: 'vinculo',
  },
  {
    id: 7,
    src: '/assets/images/perro 2.png',
    alt: 'Adiestramiento grupal y socialización de perros en Tandil',
    colSpan: 1,
    rowSpan: 2,
    flipContent: null,
  },
];

const MetodoIcon: React.FC = () => (
  <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="32" stroke="#E8B800" strokeWidth="2.5" fill="none" opacity="0.6" />
    <circle cx="40" cy="40" r="20" stroke="#C8281E" strokeWidth="2" fill="none" opacity="0.7" />
    <circle cx="40" cy="40" r="8" fill="#E8B800" opacity="0.9" />
    <line x1="40" y1="8" x2="40" y2="20" stroke="#FFFBEE" strokeWidth="2" opacity="0.7" />
    <line x1="40" y1="60" x2="40" y2="72" stroke="#FFFBEE" strokeWidth="2" opacity="0.7" />
    <line x1="8" y1="40" x2="20" y2="40" stroke="#FFFBEE" strokeWidth="2" opacity="0.7" />
    <line x1="60" y1="40" x2="72" y2="40" stroke="#FFFBEE" strokeWidth="2" opacity="0.7" />
  </svg>
);

const HuellaIcon: React.FC = () => (
  <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="52" rx="18" ry="16" fill="#E8B800" opacity="0.85" />
    <ellipse cx="16" cy="32" rx="10" ry="12" fill="#E8B800" opacity="0.85" />
    <ellipse cx="64" cy="32" rx="10" ry="12" fill="#E8B800" opacity="0.85" />
    <ellipse cx="28" cy="20" rx="8" ry="10" fill="#FFFBEE" opacity="0.8" />
    <ellipse cx="52" cy="20" rx="8" ry="10" fill="#FFFBEE" opacity="0.8" />
  </svg>
);

const VinculoIcon: React.FC = () => (
  <svg viewBox="0 0 100 90" className="w-20 h-18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 80 C20 55 5 45 5 30 C5 15 18 8 30 8 C38 8 44 12 50 18 C56 12 62 8 70 8 C82 8 95 15 95 30 C95 45 80 55 50 80Z"
      fill="#C8281E"
      opacity="0.85"
    />
    <path
      d="M50 80 C35 60 25 50 25 35 L50 40 L75 35 C75 50 65 60 50 80Z"
      fill="#1A1A1A"
      opacity="0.3"
    />
    <line x1="50" y1="20" x2="50" y2="65" stroke="#FFFBEE" strokeWidth="1.5" opacity="0.6" />
    <line x1="30" y1="40" x2="70" y2="40" stroke="#FFFBEE" strokeWidth="1.5" opacity="0.6" />
    <circle cx="50" cy="40" r="5" fill="#FFFBEE" opacity="0.8" />
  </svg>
);

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

const flipIndices = [0, 2, 5]; // tiles with flipContent

const MosaicHero: React.FC = () => {
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    flipIndices.forEach((idx, i) => {
      const flipIn = setTimeout(
        () => {
          const el = tileRefs.current[idx];
          if (el) el.classList.add('flipped');
        },
        1500 + i * 500
      );

      const flipOut = setTimeout(
        () => {
          const el = tileRefs.current[idx];
          if (el) el.classList.remove('flipped');
        },
        3500 + i * 500
      );

      timers.push(flipIn, flipOut);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden animate-fade-in"
      style={{ background: '#1A1A1A' }}
    >
      {/* Mosaic Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[160px] gap-1 md:gap-1.5 p-1">
        {/* Tile 1 — 2x2 */}
        <div className="mosaic-tile tile-wrapper col-span-2 row-span-2">
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[0] = el;
            }}
          >
            <div className="tile-front">
              <AppImage src={tiles[0].src} alt={tiles[0].alt} fill priority className="object-cover" />
            </div>
            <div className="tile-back flex-col gap-3">
              <MetodoIcon />
              <p className="text-xs font-bold text-charcoal uppercase tracking-widest text-center px-4">
                Comunicación Clara
              </p>
            </div>
          </div>
        </div>

        {/* Tile 2 — 1x1 */}
        <div className="mosaic-tile tile-wrapper col-span-1 row-span-1">
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[1] = el;
            }}
          >
            <div className="tile-front">
              <AppImage src={tiles[1].src} alt={tiles[1].alt} fill priority className="object-cover" />
            </div>
            <div className="tile-back">
              <span className="text-charcoal text-2xl">🐾</span>
            </div>
          </div>
        </div>

        {/* Tile 3 — 1x2 (huella) */}
        <div className="mosaic-tile tile-wrapper col-span-1 row-span-2">
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[2] = el;
            }}
          >
            <div className="tile-front">
              <AppImage src={tiles[2].src} alt={tiles[2].alt} fill priority className="object-cover" />
            </div>
            <div className="tile-back flex-col gap-3">
              <HuellaIcon />
              <p className="text-xs font-bold text-charcoal uppercase tracking-widest text-center px-2">
                Deja Huella
              </p>
            </div>
          </div>
        </div>

        {/* Tile 4 — 1x1 */}
        <div className="mosaic-tile tile-wrapper col-span-1 row-span-1 hidden md:block">
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[3] = el;
            }}
          >
            <div className="tile-front">
              <AppImage src={tiles[3].src} alt={tiles[3].alt} fill priority className="object-cover" />
            </div>
            <div className="tile-back">
              <span className="text-charcoal text-2xl">🎓</span>
            </div>
          </div>
        </div>

        {/* Tile 5 — 1x1 */}
        <div className="mosaic-tile tile-wrapper col-span-1 row-span-1">
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[4] = el;
            }}
          >
            <div className="tile-front">
              <AppImage src={tiles[4].src} alt={tiles[4].alt} fill priority className="object-cover" />
            </div>
            <div className="tile-back">
              <span className="text-charcoal text-2xl">💛</span>
            </div>
          </div>
        </div>

        {/* Tile 6 — 2x1 (vinculo) */}
        <div className="mosaic-tile tile-wrapper col-span-2 md:col-span-2 row-span-1">
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[5] = el;
            }}
          >
            <div className="tile-front">
              <AppImage src={tiles[5].src} alt={tiles[5].alt} fill priority className="object-cover" />
            </div>
            <div className="tile-back flex-col gap-2">
              <VinculoIcon />
              <p className="text-xs font-bold text-charcoal uppercase tracking-widest text-center px-2">
                Vínculo Profundo
              </p>
            </div>
          </div>
        </div>

        {/* Tile 7 — 1x1 */}
        <div className="mosaic-tile tile-wrapper col-span-1 row-span-1 hidden md:block">
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[6] = el;
            }}
          >
            <div className="tile-front">
              <AppImage src={tiles[6].src} alt={tiles[6].alt} fill priority className="object-cover" />
            </div>
            <div className="tile-back">
              <span className="text-charcoal text-2xl">🌿</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Text - Interactive and Glassmorphic */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-center px-8 py-10 md:px-12 md:py-12 rounded-4xl pointer-events-auto group relative max-w-xl mx-auto shadow-2xl border transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
          style={{
            background: 'rgba(26, 26, 26, 0.82)',
            backdropFilter: 'blur(16px)',
            borderColor: 'rgba(232, 184, 0, 0.25)',
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
            style={{ color: 'rgba(255,255,255,0.85)' }}
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
              Consulta
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Geometric border lines */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background:
            'linear-gradient(90deg, var(--honey-gold), var(--tangerine), var(--verde), var(--honey-gold))',
        }}
      />
    </section>
  );
};

export default MosaicHero;
