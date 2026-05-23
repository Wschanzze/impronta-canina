'use client';
import React from 'react';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { LucideIconName } from '@/components/ui/AppIcon';

interface ServiceData {
  id: string;
  title: string;
  shortDesc: string;
  icon: LucideIconName;
  image: string;
  color: string;
  colSpan: string;
}

const services: ServiceData[] = [
  {
    id: 'adiestramiento',
    title: 'Adiestramiento',
    shortDesc: 'Educación canina enfocada en positivo. Transforma la relación con tu perro construyendo confianza mutua, sin castigos.',
    icon: 'AcademicCapIcon',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
    color: 'var(--honey-gold)',
    colSpan: 'lg:col-span-2',
  },
  {
    id: 'asesoramiento',
    title: 'Asesoramiento',
    shortDesc: 'Soluciones a problemas de conducta. Ansiedad, miedos o reactividad con protocolos personalizados.',
    icon: 'ChatBubbleOvalLeftEllipsisIcon',
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6',
    color: 'var(--tangerine)',
    colSpan: 'lg:col-span-1',
  },
  {
    id: 'cursos',
    title: 'Cursos Grupales',
    shortDesc: 'Aprendizaje dinámico en comunidad y socialización controlada.',
    icon: 'UserGroupIcon',
    image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636',
    color: 'var(--verde)',
    colSpan: 'lg:col-span-1',
  },
  {
    id: 'paseos',
    title: 'Paseos',
    shortDesc: 'Paseos profesionales estructurados para estimular su mente y físico.',
    icon: 'MapIcon',
    image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8',
    color: 'var(--tangerine)',
    colSpan: 'lg:col-span-1',
  },
  {
    id: 'traslados',
    title: 'Traslados',
    shortDesc: 'Transporte seguro puerta a puerta para tu tranquilidad.',
    icon: 'TruckIcon',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b',
    color: 'var(--honey-gold)',
    colSpan: 'lg:col-span-1',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
            Desde educación básica hasta traslados seguros. Ofrecemos un ecosistema completo para el bienestar integral de tu compañero.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-100/50 hover:shadow-xl transition-all duration-500 min-h-[380px] flex flex-col ${service.colSpan}`}
              onClick={() => {
                document.getElementById('contacto-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ cursor: 'pointer' }}
            >
              {/* Image Area */}
              <div className="relative w-full h-56 shrink-0 overflow-hidden">
                <AppImage
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60" />
                
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Icon name={service.icon} size={22} style={{ color: service.color }} />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif font-bold text-2xl text-charcoal mb-3 group-hover:text-tangerine transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed flex-1">
                  {service.shortDesc}
                </p>

                {/* Simulated Link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ color: service.color }}>
                  <span>Consultar</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
