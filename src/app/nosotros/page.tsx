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
    name: 'Lucía Herrera',
    role: 'Co-fundadora y Adiestradora',
    bio: 'Lucía lleva más de 8 años transformando la relación entre perros y sus familias en Tandil. Formada en etología aplicada y refuerzo positivo, se especializó en socialización temprana y prevención de conductas problemáticas. Su enfoque combina la ciencia del comportamiento animal con una profunda sensibilidad hacia el vínculo afectivo.',
    credentials: ['Etología Aplicada', 'Refuerzo Positivo', 'Socialización Temprana', 'Buenos Aires'],
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    photoLabel: 'Adiestradora',
    accentColor: 'var(--honey-gold)',
    imageOnLeft: true,
  },
  {
    id: 2,
    superLabel: 'QUIÉN ESTÁ DETRÁS',
    name: 'Matías Suárez',
    role: 'Co-fundador y Adiestrador',
    bio: 'Matías es adiestrador profesional con más de 10 años de experiencia en obediencia urbana y manejo de reactividad. Especialista en perros con historial de miedo o ansiedad, desarrolló protocolos de desensibilización adaptados al ritmo de cada animal. Cree que no hay perros incorregibles, solo comunicaciones que aún no encontraron el camino.',
    credentials: ['Obediencia Urbana', 'Manejo de Reactividad', 'Desensibilización', 'Tandil'],
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    photoLabel: 'Adiestrador',
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
      <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
        <img
          src={founder.photo}
          alt={founder.name}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Label card at bottom */}
        <div
          className="absolute bottom-5 left-5 px-5 py-3 rounded-2xl"
          style={{ background: 'rgba(20,20,20,0.85)', backdropFilter: 'blur(8px)' }}
        >
          <p
            className="text-[10px] font-extrabold uppercase tracking-widest mb-0.5"
            style={{ color: founder.accentColor }}
          >
            {founder.photoLabel.toUpperCase()}
          </p>
          <p className="text-white font-bold text-sm">Impronta Canina</p>
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
        <h2 className="font-serif font-bold text-5xl md:text-6xl text-white leading-tight mb-2">
          {founder.name}
        </h2>
        <p className="font-bold text-white/60 text-base md:text-lg">{founder.role}</p>
      </div>

      <p className="text-white/75 text-base md:text-lg leading-relaxed font-medium max-w-lg">
        {founder.bio}
      </p>

      {/* Credential tags */}
      <div className="flex flex-wrap gap-2.5">
        {founder.credentials.map((cred) => (
          <span
            key={cred}
            className="text-[13px] font-semibold px-4 py-1.5 rounded-full border text-white/80"
            style={{ borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' }}
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
    <div className="min-h-screen bg-charcoal">
      <Header />

      <main className="pt-24">
        {/* ── HERO ── */}
        <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-charcoal">
          {/* Decorative blurs */}
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
            style={{ background: 'var(--honey-gold)' }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none"
            style={{ background: 'var(--tangerine)' }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-6 text-white"
                style={{ background: 'var(--tangerine)' }}
              >
                🐾 Impronta Canina
              </span>
              <h1 className="font-serif font-bold text-5xl md:text-7xl text-white leading-tight mb-6">
                Las personas detrás
                <br />
                <em className="not-italic" style={{ color: 'var(--honey-gold)' }}>
                  de cada huella.
                </em>
              </h1>
              <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                Impronta Canina nació del amor genuino por los perros y la convicción de que la
                educación basada en el vínculo transforma vidas — tanto la del perro como la de su
                familia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── FOUNDERS ── */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-charcoal">
          <div className="max-w-6xl mx-auto flex flex-col gap-28 md:gap-36">
            {founders.map((founder, index) => (
              <FounderSection key={founder.id} founder={founder} index={index} />
            ))}
          </div>
        </section>

        {/* ── VALORES ── */}
        <section className="py-24 px-4 md:px-8" style={{ background: '#111113' }}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-xs font-extrabold uppercase tracking-widest mb-4"
                style={{ color: 'var(--honey-gold)' }}
              >
                Lo que nos mueve
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-16 leading-tight">
                Nuestra filosofía
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  emoji: '🧠',
                  title: 'Ciencia del comportamiento',
                  desc: 'Todo nuestro trabajo está respaldado por la etología moderna y el aprendizaje basado en evidencia.',
                },
                {
                  emoji: '❤️',
                  title: 'Sin castigos, nunca',
                  desc: 'Creemos que el miedo nunca es una herramienta válida. El refuerzo positivo es el único camino que usamos.',
                },
                {
                  emoji: '🐾',
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
                  className="rounded-2xl p-8 text-left border"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <span className="text-3xl mb-4 block">{val.emoji}</span>
                  <h3 className="font-bold text-white text-lg mb-3">{val.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed font-medium">{val.desc}</p>
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
                className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg text-charcoal"
                style={{ background: 'var(--honey-gold)' }}
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
