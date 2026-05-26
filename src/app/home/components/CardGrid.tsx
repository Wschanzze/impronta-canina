'use client';
import React from 'react';
import { motion } from 'framer-motion';
import BlogCard, { BlogCardData } from './BlogCard';

const cardData: BlogCardData[] = [
  {
    id: 7,
    title: 'Paseos caninos: mucho más que un simple paseo',
    excerpt:
      'Un paseo bien conducido estimula la mente, libera energía y refuerza el vínculo. Nuestros paseadores están formados en comportamiento canino para garantizar una experiencia segura.',
    category: 'Paseos funcionales',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8',
    imageAlt: 'Paseador profesional caminando con varios perros felices por sendero del parque',
    temperature: 'neutral',
    microAnimation: 'paw',
    tag: 'Paseos funcionales',
  },
  {
    id: 8,
    title: 'Traslados seguros: tu perro en buenas manos',
    excerpt:
      'Llevamos a tu perro al veterinario, al groomer o a donde necesites con total seguridad y cuidado. Vehículo adaptado, trato profesional y actualizaciones en tiempo real.',
    category: 'Traslados',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b',
    imageAlt: 'Perro tranquilo y seguro en vehículo adaptado para traslado canino profesional',
    temperature: 'cool',
    microAnimation: 'geo',
    statLabel: 'traslados realizados sin incidentes',
    statValue: '100%',
    tag: 'Traslados',
  },
  {
    id: 9,
    title: '¿Qué es la impronta canina y por qué importa?',
    excerpt:
      'La impronta es el período crítico en el que un cachorro aprende quién es y cómo relacionarse con el mundo. Entender este proceso es la clave de todo lo que hacemos.',
    category: 'Educación',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1612846392422-24282052e07a',
    imageAlt: 'Cachorro en período de impronta explorando su entorno con curiosidad y confianza',
    temperature: 'cool',
    microAnimation: 'stat',
    statLabel: 'semanas de período crítico de impronta',
    statValue: '3-12',
    tag: 'Fundamentos',
  },
];

const CardGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="educacion" className="max-w-7xl mx-auto px-4 md:px-8 py-20 space-y-12 bg-white">
      {/* Section Header with Purpose */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span
          className="inline-block tag-badge px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-4"
          style={{
            background: 'var(--tangerine-light)',
            color: 'var(--tangerine-dark)',
          }}
        >
          Servicios Especiales y Educación
        </span>
        <h2 className="font-serif font-bold text-3xl md:text-5xl text-charcoal leading-tight">
          Más herramientas para el bienestar de tu perro
        </h2>
        <p className="text-slate-mid font-medium mt-4 text-sm md:text-base leading-relaxed">
          Además del adiestramiento básico y la modificación de conducta, te ofrecemos soluciones
          prácticas para el día a día y te compartimos conocimientos clave de etología canina.
        </p>
      </motion.div>

      {/* Grid of Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4"
      >
        {cardData.map((card, idx) => (
          <motion.div variants={cardVariants} key={card.id} id={`card-${idx + 1}`}>
            <BlogCard card={card} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CardGrid;
