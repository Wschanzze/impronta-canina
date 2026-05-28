'use client';
import React, { useState, useEffect } from 'react';

interface CourseItem {
  id?: string;
  title: string;
  level: string;
  levelColor: string;
  modality: 'Grupal' | 'Individual' | 'Ambas';
  description: string;
  image: string;
  cta: string;
  hidden?: boolean;
}

const DEFAULT_COURSES: CourseItem[] = [
  {
    id: '1',
    title: 'Cachorros Estrellas',
    level: 'INICIAL',
    levelColor: 'var(--verde)',
    modality: 'Grupal',
    description:
      'El período más importante en la vida de tu perro. Sentamos las bases para un perro adulto equilibrado, sociable y sin miedos.',
    image:
      '/assets/images/curso 1.jfif',
    cta: 'Conocé más →',
    hidden: false,
  },
  {
    id: '2',
    title: 'Obediencia Urbana',
    level: 'INTERMEDIO',
    levelColor: 'var(--tangerine)',
    modality: 'Ambas',
    description:
      'Herramientas prácticas para convivir en armonía en el mundo real: calles, plazas y cafés sin tirones de correa ni frustración.',
    image:
      '/assets/images/curso 2.jfif',
    cta: 'Conocé más →',
    hidden: false,
  },
  {
    id: '3',
    title: 'Estimulación y Olfato',
    level: 'AVANZADO',
    levelColor: 'var(--honey-gold)',
    modality: 'Individual',
    description:
      'Canalizá la energía de tu perro a través de su sentido más desarrollado. Ideal para reducir la hiperactividad y el estrés.',
    image:
      '/assets/images/curso 3.jfif',
    cta: 'Conocé más →',
    hidden: false,
  },
  {
    id: '4',
    title: 'Socialización Guiada',
    level: 'INICIAL',
    levelColor: 'var(--verde)',
    modality: 'Grupal',
    description:
      'Encuentros grupales en entornos controlados para que tu perro aprenda a comunicarse correctamente con otros de su especie.',
    image:
      '/assets/images/curso 4.jfif',
    cta: 'Conocé más →',
    hidden: false,
  },
  {
    id: '5',
    title: 'Deporte Canino',
    level: 'AVANZADO',
    levelColor: 'var(--tangerine)',
    modality: 'Individual',
    description:
      'Disc Dog y Freestyle: juego, movimiento y complicidad. Mejorá las habilidades de tu perro y disfrutá juntos cada sesión.',
    image:
      '/assets/images/Carlos-Polizza-3.jfif',
    cta: 'Conocé más →',
    hidden: false,
  },
  {
    id: '6',
    title: 'Manejo de Reactividad',
    level: 'INTERMEDIO',
    levelColor: 'var(--tangerine)',
    modality: 'Individual',
    description:
      'Protocolo personalizado de desensibilización para perros con reactividad hacia otros perros o personas.',
    image:
      '/assets/images/nicolas-pellizzari-4.jfif',
    cta: 'Conocé más →',
    hidden: false,
  },
];

const modalityConfig = {
  Grupal: { label: 'Grupal', bg: 'rgba(255,255,255,0.25)', border: 'rgba(255,255,255,0.5)' },
  Individual: {
    label: 'Individual',
    bg: 'rgba(255,255,255,0.25)',
    border: 'rgba(255,255,255,0.5)',
  },
  Ambas: {
    label: 'Grupal · Individual',
    bg: 'rgba(255,255,255,0.25)',
    border: 'rgba(255,255,255,0.5)',
  },
};

const CourseCard: React.FC<{ course: CourseItem }> = ({ course }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const mod = modalityConfig[course.modality];

  return (
    <div
      className="course-card group relative w-full aspect-[4/5] cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ─── FRONT SIDE ─── */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden shadow-md group-hover:shadow-2xl transition-shadow duration-500 border border-slate-100"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Photo — greyscale by default, color on hover */}
          <div className="relative w-full h-full overflow-hidden">
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

            {/* Click to flip indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/40 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-serif font-bold text-xl text-white leading-tight drop-shadow">
              {course.title}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              Ver detalles de la capacitación
            </p>
          </div>
        </div>

        {/* ─── BACK SIDE ─── */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-6 md:p-8 flex flex-col items-center justify-center text-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="flex-1 flex flex-col items-center justify-center w-full">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider mb-4"
              style={{ color: course.levelColor, backgroundColor: `${course.levelColor}15` }}
            >
              Modalidad {course.modality}
            </span>
            <h3 className="font-serif font-bold text-2xl text-charcoal leading-tight mb-4">
              {course.title}
            </h3>
            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mb-6">
              {course.description}
            </p>
            <div className="w-12 h-1 bg-slate-100 rounded-full mb-6" />
            <p className="text-xs text-slate-400 mb-6 font-medium">
              Nuestros cursos están diseñados para fortalecer el vínculo y asegurar resultados duraderos.
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation(); // Evita que la tarjeta gire de nuevo
              const el = document.getElementById('contacto-form') || document.getElementById('contacto');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contacto';
              }
            }}
            className="w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: course.levelColor }}
          >
            {course.cta}
          </button>
        </div>
      </div>
    </div>
  );
};

const CoursesDetailSection: React.FC = () => {
  const [courses, setCourses] = useState<CourseItem[]>(DEFAULT_COURSES);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/courses');
        if (res.ok) {
          const data = await res.json();
          setCourses(data);
        }
      } catch (error) {
        console.error('Error fetching courses dynamically:', error);
      }
    };
    fetchCourses();
  }, []);

  const visibleCourses = courses.filter((course) => !course.hidden);

  return (
    <>
      <section id="cursos-detalle" className="py-24 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-4 text-white"
              style={{ background: 'var(--tangerine)' }}
            >
              Para tu perro
            </span>
            <h2 className="font-serif font-bold text-4xl md:text-6xl text-charcoal leading-tight mb-4">
              Nuestras{' '}
              <em className="not-italic" style={{ color: 'var(--verde)' }}>
                clases
              </em>
            </h2>
            <p className="text-slate-mid font-medium text-base md:text-lg leading-relaxed">
              Educación canina basada en el vínculo, el rigor técnico y la confianza mutua.
            </p>
          </div>

          {/* Conditional Rendering: Courses Grid OR "Coming Soon" Message */}
          {visibleCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visibleCourses.map((course) => (
                <CourseCard key={course.id || course.title} course={course} />
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 text-center border border-slate-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-verde via-honey-gold to-tangerine" />
              <div className="mx-auto w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-3xl md:text-4xl text-charcoal mb-4">
                Próximamente nuevas fechas
              </h3>
              <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Actualmente no tenemos cursos grupales programados para fechas próximas. Estamos diseñando nuevas experiencias para seguir fortaleciendo el vínculo con tu perro.
              </p>
              <button
                onClick={() => {
                  const el = document.getElementById('contacto-form') || document.getElementById('contacto');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.href = '/#contacto';
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Dejanos tu consulta
                <svg className="w-4 h-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CoursesDetailSection;
