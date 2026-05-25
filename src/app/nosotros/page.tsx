'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Founder {
  id: number;
  superLabel: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  photo: string;
  photoLabel: string;
  accentColor: string;
  imageOnLeft: boolean;
}

const founders: Founder[] = [
  {
    id: 1,
    superLabel: 'QUIÉN ESTÁ DETRÁS',
    name: 'Nicolás Pellizzari',
    role: 'Adiestrador Profesional y Psicopedagogo',
    bio: 'Nicolás es Adiestrador Profesional por la UBA y Psicopedagogo, enfocando su trabajo en el entorno domiciliario y familiar. Su visión combina el adiestramiento con la comprensión profunda del vínculo humano-animal, asegurando que cada familia logre una convivencia armónica con su perro. Además, se desempeña como Instructor y Guía de perros de Búsqueda.',
    credentials: ['Adiestrador UBA', 'Psicopedagogo', 'Guía Perros Búsqueda', 'Entorno Domiciliario'],
    photo:
      '/assets/images/nicolas-pellizzari.jfif',
    photoLabel: 'Adiestrador',
    accentColor: 'var(--verde)',
    imageOnLeft: true,
  },
  {
    id: 2,
    superLabel: 'QUIÉN ESTÁ DETRÁS',
    name: 'Carlos Polizza',
    role: 'Adiestrador Profesional y Técnico',
    bio: 'Formado como Adiestrador Profesional en EduCan K9 y Técnico en Criminalística, aporta una perspectiva altamente técnica a Impronta Canina. Especializado en el desarrollo de perros de trabajo, su metodología se centra en la precisión y el rendimiento operativo. Como Instructor y Guía de perros de Búsqueda, entrena canes capaces de superar grandes desafíos.',
    credentials: ['Adiestrador EduCan K9', 'Técnico Criminalística', 'Guía Perros Búsqueda', 'Perros de Trabajo'],
    photo:
      '/assets/images/companero.jfif',
    photoLabel: 'Instructor',
    accentColor: 'var(--tangerine)',
    imageOnLeft: false,
  },
];

const FounderSection: React.FC<{ founder: Founder; index: number }> = ({ founder, index }) => {
  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, x: founder.imageOnLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative flex-shrink-0 w-full lg:w-[420px]"
    >
      <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-warm-lg">
        <img
          src={founder.photo}
          alt={founder.name}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

        {/* Label card at bottom */}
        <div
          className="absolute bottom-5 left-5 px-5 py-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100"
        >
          <p
            className="text-[10px] font-extrabold uppercase tracking-widest mb-0.5"
            style={{ color: founder.accentColor }}
          >
            {founder.photoLabel.toUpperCase()}
          </p>
          <p className="text-charcoal font-bold text-sm">Impronta Canina</p>
        </div>
      </div>
    </motion.div>
  );

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, x: founder.imageOnLeft ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      className="flex flex-col justify-center gap-6 flex-1 min-w-0"
    >
      <div>
        <p
          className="text-xs font-extrabold uppercase tracking-[0.18em] mb-4"
          style={{ color: founder.accentColor }}
        >
          {founder.superLabel}
        </p>
        <h2 className="font-serif font-bold text-5xl md:text-6xl text-charcoal leading-tight mb-2">
          {founder.name}
        </h2>
        <p className="font-bold text-slate-500 text-base md:text-lg">{founder.role}</p>
      </div>

      <p className="text-slate-mid text-base md:text-lg leading-relaxed font-medium max-w-lg">
        {founder.bio}
      </p>

      {/* Credential tags */}
      <div className="flex flex-wrap gap-2.5">
        {founder.credentials.map((cred) => (
          <span
            key={cred}
            className="text-[13px] font-semibold px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 bg-white shadow-sm"
          >
            {cred}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
        !founder.imageOnLeft ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {imageBlock}
      {textBlock}
    </div>
  );
};

const NosotrosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* ── HERO ── */}
        <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-gradient-to-br from-verde/10 via-warm-cream to-tangerine/5">
          {/* Decorative blurs */}
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 pointer-events-none"
            style={{ background: 'var(--verde)' }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
            style={{ background: 'var(--tangerine)' }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-6 text-white shadow-sm"
                style={{ background: 'var(--verde)' }}
              >
                Impronta Canina
              </span>
              <h1 className="font-serif font-bold text-5xl md:text-7xl text-charcoal leading-tight mb-6">
                Las personas detrás
                <br />
                <em className="not-italic" style={{ color: 'var(--verde)' }}>
                  de cada huella.
                </em>
              </h1>
              <p className="text-slate-mid text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                Impronta Canina está conformada por un equipo de adiestradores profesionales altamente capacitados, unidos por el amor genuino a los perros y la convicción de que la educación basada en el vínculo transforma vidas. Nuestro objetivo es brindar soluciones integrales, desde el entorno domiciliario hasta el desarrollo de perros de trabajo, asegurando siempre el bienestar animal y una convivencia armónica.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── FOUNDERS ── */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col gap-28 md:gap-36">
            {founders.map((founder, index) => (
              <FounderSection key={founder.id} founder={founder} index={index} />
            ))}
          </div>
        </section>

        {/* ── VALORES ── */}
        <section className="py-24 px-4 md:px-8 bg-slate-50">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-xs font-extrabold uppercase tracking-widest mb-4"
                style={{ color: 'var(--tangerine)' }}
              >
                Lo que nos mueve
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-charcoal mb-16 leading-tight">
                Nuestra filosofía
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Ciencia del comportamiento',
                  desc: 'Todo nuestro trabajo está respaldado por la etología moderna y el aprendizaje basado en evidencia.',
                },
                {
                  title: 'Sin castigos, nunca',
                  desc: 'Creemos que el miedo nunca es una herramienta válida. El refuerzo positivo es el único camino que usamos.',
                },
                {
                  title: 'El vínculo primero',
                  desc: 'Antes de enseñar un comando, construimos una relación de confianza y comunicación real entre perro y familia.',
                },
              ].map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="rounded-3xl p-8 text-left bg-white border border-slate-100 shadow-warm-md hover:shadow-warm-lg transition-shadow"
                >
                  <h3 className="font-serif font-bold text-charcoal text-xl mb-3">{val.title}</h3>
                  <p className="text-slate-mid text-sm leading-relaxed font-medium">{val.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16"
            >
              <button
                onClick={() => {
                  window.location.href = '/#contacto';
                }}
                className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-tangerine-glow text-white"
                style={{ background: 'var(--tangerine)' }}
              >
                Contactanos y conocenos →
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NosotrosPage;
