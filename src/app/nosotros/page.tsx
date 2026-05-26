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
    bio: 'Formado como Adiestrador Profesional y Técnico en Criminalística, aporta una perspectiva altamente técnica a Impronta Canina. Especializado en el desarrollo de perros de trabajo, su metodología se centra en la precisión y el rendimiento operativo. Como Instructor y Guía de perros de Búsqueda, entrena canes capaces de superar grandes desafíos.',
    credentials: ['Adiestrador Profesional', 'Técnico Criminalística', 'Guía Perros Búsqueda', 'Perros de Trabajo'],
    photo:
      '/assets/images/Carlos Polizza.jfif',
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

      <main className="pt-0">
        {/* ── HERO ── */}
        <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-gradient-to-br from-verde/10 via-warm-cream to-tangerine/5">
          <div className="absolute inset-0 z-0 opacity-20 select-none pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1600"
              alt="Impronta Canina"
              className="w-full h-full object-cover"
            />
          </div>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: 'Rigor técnico',
                  desc: 'Educación actualizada y etología aplicada con rigor, construyendo una estructura emocional sólida y de confianza.',
                  image: '/assets/images/nicolas-pellizzari 4.jfif',
                  accentColor: 'var(--verde)',
                  icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 3a9 9 0 00-9 9c0 3.32 1.8 6.22 4.5 7.82V21a1 1 0 001 1h6a1 1 0 001-1v-1.18c2.7-1.6 4.5-4.5 4.5-7.82 0-4.97-4.03-9-9-9z"/></svg>
                },
                {
                  title: 'Entendimiento mutuo',
                  desc: 'Lejos de fórmulas rígidas, creamos un canal de comunicación claro y eficiente que respeta la naturaleza de tu perro.',
                  image: '/assets/images/Carlos Polizza 2.jfif',
                  accentColor: 'var(--tangerine)',
                  icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                },
                {
                  title: 'Vínculo y confianza',
                  desc: 'Te ayudamos a forjar tu propia impronta: una conexión sólida, funcional y basada en la confianza mutua.',
                  image: '/assets/images/nicolas-pellizzari 1.jfif',
                  accentColor: 'var(--honey-gold)',
                  icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                },
              ].map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group relative rounded-[2rem] overflow-hidden shadow-warm-md hover:shadow-2xl transition-all duration-500 min-h-[400px] flex items-end cursor-pointer"
                >
                  {/* Background Image */}
                  <img 
                    src={val.image} 
                    alt={val.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-10 text-left w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div 
                      className="w-12 h-12 rounded-full mb-6 flex items-center justify-center backdrop-blur-md bg-white/20 border border-white/20 text-white shadow-lg"
                    >
                      {val.icon}
                    </div>
                    <h3 className="font-serif font-bold text-white text-2xl mb-3 leading-tight drop-shadow-md">{val.title}</h3>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium drop-shadow-sm">{val.desc}</p>
                    
                    {/* Decorative accent bar */}
                    <div 
                      className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-700 ease-out"
                      style={{ backgroundColor: val.accentColor }}
                    />
                  </div>
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
