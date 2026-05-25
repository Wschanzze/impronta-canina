'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { LucideIconName } from '@/components/ui/AppIcon';

interface ServiceData {
  id: string;
  title: string;
  cardSubtitle: string;
  shortDesc: string;
  longDesc: string;
  icon: LucideIconName;
  image: string;
  color: string;
}

const services: ServiceData[] = [
  {
    id: 'adiestramiento',
    title: 'Adiestramiento',
    cardSubtitle: 'EN POSITIVO · PERSONALIZADO',
    shortDesc: 'Educación canina enfocada en positivo. Transforma la relación con tu perro construyendo confianza mutua, sin castigos.',
    longDesc: 'Nuestro programa principal de educación en positivo se enfoca en la obediencia urbana, resolución de conflictos cotidianos y socialización progresiva. Realizamos sesiones personalizadas en tu propio domicilio, diseñando pautas que se ajustan al temperamento de tu perro y al estilo de vida de tu familia para lograr resultados estables y respetuosos.',
    icon: 'AcademicCapIcon',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=600',
    color: 'var(--verde)',
  },
  {
    id: 'asesoramiento',
    title: 'Asesoramiento',
    cardSubtitle: 'TERAPIA DE CONDUCTA · ETOLOGÍA',
    shortDesc: 'Soluciones a problemas de conducta. Ansiedad, miedos o reactividad con protocolos personalizados.',
    longDesc: 'Evaluamos de forma profesional problemas complejos del comportamiento canino como la ansiedad por separación, miedos severos, fobias urbanas o reactividad hacia otros perros y personas. Elaboramos un diagnóstico etológico y te guiamos paso a paso con un plan terapéutico seguro y libre de confrontación.',
    icon: 'ChatBubbleOvalLeftEllipsisIcon',
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=600',
    color: 'var(--tangerine)',
  },
  {
    id: 'cursos',
    title: 'Cursos Grupales',
    cardSubtitle: 'GRUPOS REDUCIDOS · SOCIALIZACIÓN',
    shortDesc: 'Aprendizaje dinámico en comunidad y socialización controlada.',
    longDesc: 'Talleres prácticos y clases grupales de socialización, obediencia bajo distracción y estimulación en entornos reales controlados. Es el espacio ideal para que tu perro aprenda a gestionar su atención en presencia de otros canes y personas, compartiendo con una comunidad de familias responsables.',
    icon: 'UserGroupIcon',
    image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?auto=format&fit=crop&q=80&w=600',
    color: 'var(--honey-gold)',
  },
  {
    id: 'paseos',
    title: 'Paseos',
    cardSubtitle: 'ESTIMULACIÓN Y PASEOS ACTIVOS',
    shortDesc: 'Paseos profesionales estructurados para estimular su mente y físico.',
    longDesc: 'Ofrecemos paseos estructurados que priorizan la calidad sobre la distancia. Diseñamos paseos individuales o grupales muy reducidos con un enfoque claro en la estimulación cognitiva, la propiocepción, el olfato y las conductas de calma, ayudando a canalizar la energía de tu perro de manera prolija.',
    icon: 'MapIcon',
    image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&q=80&w=600',
    color: 'var(--verde)',
  },
  {
    id: 'traslados',
    title: 'Traslados',
    cardSubtitle: 'PUERTA A PUERTA · 100% SEGURO',
    shortDesc: 'Transporte seguro puerta a puerta para tu tranquilidad.',
    longDesc: 'Servicio de traslado puerta a puerta adaptado para las necesidades y comodidad de tu perro. Contamos con equipamiento seguro y homologado para traslados veterinarios, visitas familiares, guarderías o urgencias, garantizando un viaje tranquilo y sin niveles de estrés innecesarios.',
    icon: 'TruckIcon',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600',
    color: 'var(--tangerine)',
  },
];

const ServicesSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('adiestramiento');
  const selectedService = services.find((s) => s.id === selectedId) || services[0];

  return (
    <section id="servicios" className="py-24 px-4 md:px-8 bg-[#fdfbf7] relative overflow-hidden">
      {/* CSS float keyframes for cards */}
      <style>{`
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-delay-0 { animation: cardFloat 6s ease-in-out infinite; }
        .float-delay-1 { animation: cardFloat 6.5s ease-in-out infinite; animation-delay: -1.3s; }
        .float-delay-2 { animation: cardFloat 5.8s ease-in-out infinite; animation-delay: -2.6s; }
        .float-delay-3 { animation: cardFloat 6.2s ease-in-out infinite; animation-delay: -3.9s; }
        .float-delay-4 { animation: cardFloat 7s ease-in-out infinite; animation-delay: -5.2s; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-verde font-bold tracking-widest uppercase text-xs mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
            Todo lo que tu perro necesita, <br className="hidden md:block" />
            <span className="text-honey-gold">en un solo lugar.</span>
          </h2>
          <p className="text-slate-500 font-medium text-base md:text-lg max-w-2xl mx-auto">
            Desde educación y modificación de conducta hasta paseos y traslados seguros.
            Haz clic en las tarjetas de abajo para explorar cada servicio en detalle.
          </p>
        </motion.div>

        {/* Premium Floating Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 px-2 md:px-6 mb-16 justify-center">
          {services.map((service, index) => {
            const isSelected = selectedId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className={`relative aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-500 bg-charcoal group float-delay-${index} ${
                  isSelected ? 'scale-[1.03] ring-4 ring-offset-2' : ''
                }`}
                style={{
                  '--tw-ring-color': service.color,
                  '--tw-ring-offset-width': '2px',
                  '--tw-ring-offset-color': '#fdfbf7',
                } as React.CSSProperties}
              >
                {/* Background Image with opacity transition */}
                <div className="absolute inset-0 w-full h-full">
                  <AppImage
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                      isSelected
                        ? 'opacity-100 saturate-100'
                        : 'opacity-55 saturate-50 group-hover:opacity-100 group-hover:saturate-100'
                    }`}
                  />
                </div>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-85" />

                {/* Card Text Content (At the bottom, centered) */}
                <div className="absolute bottom-6 left-4 right-4 text-center z-10 flex flex-col items-center">
                  <h3 className="font-serif font-semibold text-lg md:text-xl text-white mb-1 drop-shadow-sm">
                    {service.title}
                  </h3>
                  <p className="text-[10px] md:text-[11px] font-bold text-white/70 uppercase tracking-wider leading-none">
                    {service.cardSubtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Panel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-[#fefcf8] rounded-[2.5rem] border border-[#eae6db] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Left Side: Icon box */}
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                style={{ backgroundColor: `${selectedService.color}12` }}
              >
                <Icon name={selectedService.icon} size={32} style={{ color: selectedService.color }} />
              </div>

              {/* Right Side: Text details */}
              <div className="flex-1 text-center md:text-left">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-[#eae6db]/60 shadow-sm inline-block mb-3"
                  style={{ color: selectedService.color }}
                >
                  Información del Servicio
                </span>
                <h3 className="font-serif font-bold text-3xl text-charcoal mb-4">
                  {selectedService.title}
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
                  {selectedService.longDesc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-full text-white transition-all shadow-md active:scale-95 text-center"
                    style={{ background: selectedService.color }}
                  >
                    Consultar por {selectedService.title} →
                  </a>
                  <span className="text-xs font-bold text-slate-400">
                    * Planes adaptados a Tandil y zona de influencia.
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
