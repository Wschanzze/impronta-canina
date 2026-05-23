'use client';
import React from 'react';

interface CourseItem {
  title: string;
  level: string;
  levelColor: string;
  modality: 'Grupal' | 'Individual' | 'Ambas';
  description: string;
  image: string;
  cta: string;
}

const courses: CourseItem[] = [
  {
    title: 'Cachorros Estrellas',
    level: 'INICIAL',
    levelColor: 'var(--verde)',
    modality: 'Grupal',
    description:
      'El período más importante en la vida de tu perro. Sentamos las bases para un perro adulto equilibrado, sociable y sin miedos.',
    image:
      'https://images.unsplash.com/photo-1612846392422-24282052e07a?auto=format&fit=crop&q=80&w=800',
    cta: 'Conocé más →',
  },
  {
    title: 'Obediencia Urbana',
    level: 'INTERMEDIO',
    levelColor: 'var(--tangerine)',
    modality: 'Ambas',
    description:
      'Herramientas prácticas para convivir en armonía en el mundo real: calles, plazas y cafés sin tirones de correa ni frustración.',
    image:
      'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&q=80&w=800',
    cta: 'Conocé más →',
  },
  {
    title: 'Estimulación y Olfato',
    level: 'AVANZADO',
    levelColor: 'var(--honey-gold)',
    modality: 'Individual',
    description:
      'Canalizá la energía de tu perro a través de su sentido más desarrollado. Ideal para reducir la hiperactividad y el estrés.',
    image:
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800',
    cta: 'Conocé más →',
  },
  {
    title: 'Socialización Guiada',
    level: 'INICIAL',
    levelColor: 'var(--verde)',
    modality: 'Grupal',
    description:
      'Encuentros grupales en entornos controlados para que tu perro aprenda a comunicarse correctamente con otros de su especie.',
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800',
    cta: 'Conocé más →',
  },
  {
    title: 'Deporte Canino',
    level: 'AVANZADO',
    levelColor: 'var(--tangerine)',
    modality: 'Individual',
    description:
      'Disc Dog y Freestyle: juego, movimiento y complicidad. Mejorá las habilidades de tu perro y disfrutá juntos cada sesión.',
    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800',
    cta: 'Conocé más →',
  },
  {
    title: 'Manejo de Reactividad',
    level: 'INTERMEDIO',
    levelColor: 'var(--tangerine)',
    modality: 'Individual',
    description:
      'Protocolo personalizado de desensibilización para perros con reactividad hacia otros perros o personas.',
    image:
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=800',
    cta: 'Conocé más →',
  },
];

const modalityConfig = {
  Grupal: { label: '👥 Grupal', bg: 'rgba(255,255,255,0.18)', border: 'rgba(255,255,255,0.4)' },
  Individual: {
    label: '🧑 Individual',
    bg: 'rgba(255,255,255,0.18)',
    border: 'rgba(255,255,255,0.4)',
  },
  Ambas: {
    label: '👥 Grupal · 🧑 Individual',
    bg: 'rgba(255,255,255,0.18)',
    border: 'rgba(255,255,255,0.4)',
  },
};

const CourseCard: React.FC<{ course: CourseItem }> = ({ course }) => {
  const mod = modalityConfig[course.modality];
  return (
    <div className="course-card group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500">
      {/* Photo — greyscale by default, color on hover */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
        />
        {/* Dark overlay that fades out on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60 group-hover:via-black/10 transition-all duration-500" />

        {/* Level badge — top right */}
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-white shadow"
          style={{ backgroundColor: course.levelColor }}
        >
          {course.level}
        </div>

        {/* Modality badge — top left */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold text-white backdrop-blur-sm"
          style={{ background: mod.bg, border: `1px solid ${mod.border}` }}
        >
          {mod.label}
        </div>
      </div>

      {/* Bottom content */}
      <div
        className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
      >
        <h3 className="font-serif font-bold text-xl text-white leading-tight drop-shadow">
          {course.title}
        </h3>
        <p className="text-sm text-white/80 leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          {course.description}
        </p>
        <button
          onClick={() => {
            const el =
              document.getElementById('contacto-form') || document.getElementById('contacto');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = '/#contacto';
            }
          }}
          className="mt-2 self-start text-sm font-bold opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-75"
          style={{ color: course.levelColor }}
        >
          {course.cta}
        </button>
      </div>
    </div>
  );
};

const CoursesDetailSection: React.FC = () => {
  return (
    <>
      {/* ─── COURSES GRID ─── */}
      <section id="cursos-detalle" className="py-24 px-4 md:px-8 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-4 text-white"
              style={{ background: 'var(--honey-gold)' }}
            >
              Para tu perro
            </span>
            <h2 className="font-serif font-bold text-4xl md:text-6xl text-white leading-tight mb-4">
              Nuestras{' '}
              <em className="not-italic" style={{ color: 'var(--honey-gold)' }}>
                clases
              </em>
            </h2>
            <p className="text-white/60 font-medium text-base leading-relaxed">
              Educación canina basada en el vínculo, la ciencia y el refuerzo positivo.
            </p>
          </div>

          {/* Grid 3 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODALITIES SECTION ─── */}
      <section className="py-20 px-4 md:px-8 bg-[#0e0e10]">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-center text-xs font-extrabold uppercase tracking-widest mb-10"
            style={{ color: 'var(--honey-gold)' }}
          >
            Modalidades
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {/* Grupal */}
            <div className="rounded-2xl border border-white/10 p-8 md:p-10 flex flex-col gap-4 bg-white/5 backdrop-blur-sm hover:bg-white/8 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                👥
              </div>
              <h3 className="font-bold text-4xl md:text-5xl text-white">Grupales</h3>
              <p className="text-white/50 text-sm font-medium leading-relaxed">
                Presenciales en Tandil, Buenos Aires. Consultanos disponibilidad y zonas.
              </p>
            </div>

            {/* Individual */}
            <div className="rounded-2xl border border-white/10 p-8 md:p-10 flex flex-col gap-4 bg-white/5 backdrop-blur-sm hover:bg-white/8 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                🧑
              </div>
              <h3 className="font-bold text-4xl md:text-5xl text-white">Individuales</h3>
              <p className="text-white/50 text-sm font-medium leading-relaxed">
                Online o presenciales. Consultanos por zonas y disponibilidad.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={() => {
                const el =
                  document.getElementById('contacto-form') || document.getElementById('contacto');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contacto';
                }
              }}
              className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg"
              style={{ background: 'var(--honey-gold)', color: '#1a1a1a' }}
            >
              ¿No sabés cuál elegir? Consultanos →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesDetailSection;
