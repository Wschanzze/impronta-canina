'use client';
import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    id: 1,
    number: '01',
    title: 'Método en Positivo',
    description:
      'Educación fundamentada en la ciencia del comportamiento. Enseñamos a través de la cooperación y el respeto, logrando una obediencia natural sin recurrir al miedo ni al estrés.',
    color: 'var(--verde)',
  },
  {
    id: 2,
    number: '02',
    title: 'Planes a Medida',
    description:
      'Entendemos que cada familia es un mundo. Evaluamos el entorno, las rutinas y el temperamento de tu perro para diseñar un protocolo que se adapte perfectamente a tu estilo de vida.',
    color: 'var(--tangerine)',
  },
  {
    id: 3,
    number: '03',
    title: 'Vínculo Real',
    description:
      'No buscamos soluciones temporales. Te brindamos las herramientas necesarias para comprender a tu perro, construyendo una comunicación profunda y resultados que perduran en el tiempo.',
    color: 'var(--honey-gold)',
  },
];

const BrandPillars: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left: Sticky Context & Video */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tangerine font-bold tracking-widest uppercase text-xs mb-4 block">
                Nuestro Enfoque
              </span>
              <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
                ¿Por qué elegir <br />
                <span className="text-verde">Impronta Canina?</span>
              </h2>
              <p className="text-slate-500 font-medium text-base md:text-lg leading-relaxed max-w-md">
                Dejamos atrás los métodos tradicionales para abrazar una educación canina moderna, empática y efectiva. Tu perro no necesita dominancia, necesita un guía.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] border-[6px] border-white"
            >
              <video
                src="/assets/videos/6011991_Dog_Animal_1280x720.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Scrolling Pillars */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8 md:gap-12 lg:pt-24">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 group"
              >
                {/* Large Background Number */}
                <div 
                  className="absolute top-4 right-8 font-serif font-bold text-[8rem] leading-none opacity-5 group-hover:opacity-10 group-hover:-translate-y-2 transition-all duration-500 pointer-events-none select-none"
                  style={{ color: pillar.color }}
                >
                  {pillar.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span 
                      className="text-sm font-bold tracking-wider"
                      style={{ color: pillar.color }}
                    >
                      {pillar.number}
                    </span>
                    <div className="h-[1px] w-12" style={{ backgroundColor: pillar.color }} />
                  </div>
                  
                  <h3 className="font-serif font-bold text-2xl md:text-3xl text-charcoal mb-4">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-slate-500 font-medium leading-relaxed md:text-lg">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandPillars;
