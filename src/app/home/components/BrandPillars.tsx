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

const PawPrintIcon: React.FC<{ className?: string; color?: string }> = ({
  className,
  color = 'currentColor',
}) => (
  <svg viewBox="0 0 24 24" className={className} fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14c-1.66 0-3 1.34-3 3 0 2 2 3.5 3 3.5s3-1.5 3-3.5c0-1.66-1.34-3-3-3z" />
    <circle cx="7" cy="11" r="2" />
    <circle cx="10.5" cy="8" r="2" />
    <circle cx="13.5" cy="8" r="2" />
    <circle cx="17" cy="11" r="2" />
  </svg>
);

interface Pillar {
  id: number;
  title: string;
  description: string;
  tag: string;
  tagColor: string;
  iconType: 'balloon' | 'paw';
}

const pillars: Pillar[] = [
  {
    id: 1,
    title: 'Método en Positivo',
    description:
      'Adiestramiento fundamentado en la ciencia del comportamiento animal. Enseñamos reforzando conductas deseadas, logrando obediencia sin violencia, intimidación ni estrés.',
    tag: 'CIENCIA Y RESPETO',
    tagColor: 'var(--verde)',
    iconType: 'balloon',
  },
  {
    id: 2,
    title: 'Planes Personalizados',
    description:
      'Ningún perro es igual a otro. Evaluamos detalladamente el entorno familiar, temperamento e historial del peludo para crear protocolos adaptados a tu vida diaria.',
    tag: 'A MEDIDA',
    tagColor: 'var(--tangerine)',
    iconType: 'paw',
  },
  {
    id: 3,
    title: 'Resultados que Perduran',
    description:
      'Te capacitamos para que aprendas a entender y guiar a tu perro. No hacemos cambios temporales; construimos una comunicación duradera y de confianza mutua.',
    tag: 'VÍNCULO REAL',
    tagColor: 'var(--honey-gold)',
    iconType: 'balloon',
  },
];

const BrandPillars: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-warm-cream relative overflow-hidden">
      {/* Decorative top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{
          background:
            'linear-gradient(90deg, var(--verde) 0%, var(--honey-gold) 50%, var(--tangerine) 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block tag-badge px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-4"
            style={{
              background: 'var(--verde-pale)',
              color: 'var(--verde-dark)',
            }}
          >
            Nuestro Enfoque
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-charcoal leading-tight">
            ¿Por qué elegir <span style={{ color: 'var(--verde)' }}>Impronta Canina</span>?
          </h2>
          <p className="text-slate-mid font-medium mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Creemos que la educación de tu perro debe basarse en la confianza y la comunicación, no
            en el miedo. Así es como logramos una convivencia feliz y equilibrada.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group bg-white rounded-3xl p-8 shadow-warm-md hover:shadow-warm-lg transition-all duration-300 border border-slate-100/80 flex flex-col justify-between"
            >
              {/* Balloon Dog / Paw Icon POP-UP on top border when hovering */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-20">
                <div
                  className="px-3 py-1.5 rounded-full bg-white shadow-md border flex items-center justify-center"
                  style={{ borderColor: pillar.tagColor }}
                >
                  {pillar.iconType === 'balloon' ? (
                    <BalloonDogIcon className="w-8 h-5" color={pillar.tagColor} />
                  ) : (
                    <PawPrintIcon className="w-5 h-5" color={pillar.tagColor} />
                  )}
                </div>
              </div>

              <div>
                {/* Visual indicator (Pill shape) */}
                <div className="flex justify-between items-center mb-6">
                  <span
                    className="tag-badge text-[10px] px-3 py-1 rounded-full font-bold"
                    style={{
                      background: `${pillar.tagColor}15`,
                      color: pillar.tagColor,
                    }}
                  >
                    {pillar.tag}
                  </span>

                  {/* Decorative faint background paw */}
                  <div className="opacity-10 group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {pillar.iconType === 'balloon' ? (
                      <BalloonDogIcon className="w-10 h-7" color="var(--charcoal)" />
                    ) : (
                      <PawPrintIcon className="w-8 h-8" color="var(--charcoal)" />
                    )}
                  </div>
                </div>

                <h3 className="font-serif font-bold text-2xl text-charcoal mb-4">{pillar.title}</h3>
                <p className="text-slate-mid text-sm font-medium leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-8 right-8 h-1 rounded-t-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                style={{ backgroundColor: pillar.tagColor }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;
