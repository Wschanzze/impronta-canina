'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

interface CourseItem {
  title: string;
  age: string;
  duration: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

const courses: CourseItem[] = [
  {
    title: 'Cachorros Estrellas',
    age: '2 a 5 meses',
    duration: '4 clases semanales',
    description: 'El período más importante en la vida de tu perro. Sentamos las bases para un perro adulto equilibrado, sociable y sin miedos.',
    icon: 'SparklesIcon',
    color: 'var(--verde)',
    features: ['Socialización estructurada', 'Hábitos higiénicos y mordida', 'Iniciación a comandos básicos', 'Prevención de ansiedad por separación'],
  },
  {
    title: 'Obediencia Urbana',
    age: 'Más de 6 meses',
    duration: '5 clases semanales',
    description: 'Herramientas prácticas para convivir en armonía en el mundo real: calles, plazas y cafés sin tirones de correa ni frustración.',
    icon: 'AcademicCapIcon',
    color: 'var(--tangerine)',
    features: ['Paseo estructurado (sin tirar)', 'Llamada de emergencia confiable', 'Autocontrol ante distracciones', 'Foco y atención al tutor'],
  },
  {
    title: 'Estimulación y Olfato',
    age: 'Cualquier edad',
    duration: 'Taller intensivo (2 sábados)',
    description: 'Canalizá la energía de tu perro a través de su sentido más desarrollado. Ideal para reducir la hiperactividad y el estrés en el hogar.',
    icon: 'HeartIcon',
    color: 'var(--honey-gold)',
    features: ['Juegos de búsqueda y rastreo', 'Resolución de problemas cognitivos', 'Ejercicios de calma en casa', 'Propiocepción y confianza'],
  },
  {
    title: 'Socialización Guiada',
    age: 'Cualquier edad (con evaluación)',
    duration: 'Sesiones semanales',
    description: 'Encuentros grupales en entornos controlados para que tu perro aprenda a comunicarse correctamente con otros de su especie.',
    icon: 'UserGroupIcon',
    color: 'var(--verde)',
    features: ['Lectura de lenguaje canino', 'Interacciones supervisadas', 'Gestión de la reactividad leve', 'Juego libre seguro y pautado'],
  },
];

const CoursesDetailSection: React.FC = () => {
  return (
    <section id="cursos-detalle" className="py-24 px-4 md:px-8 bg-warm-cream relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-verde/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-tangerine/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block tag-badge px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-4"
              style={{ background: 'var(--verde-pale)', color: 'var(--verde-dark)' }}
            >
              Cursos y Talleres
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-charcoal leading-tight">
              Programas de <span style={{ color: 'var(--verde)' }}>Adiestramiento Grupal</span>
            </h2>
            <p className="text-slate-mid font-medium mt-4 text-sm md:text-base leading-relaxed">
              Aprender en grupo potencia la socialización, expone al perro a distracciones del mundo real de forma controlada y te brinda una comunidad de apoyo.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {courses.map((course, idx) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-warm-md hover:shadow-warm-lg transition-all duration-300 border border-slate-100 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Colored top border accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 opacity-80"
                style={{ backgroundColor: course.color }}
              />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110"
                    style={{ backgroundColor: course.color }}
                  >
                    <Icon name={course.icon} size={24} />
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 mb-1">
                      🎯 {course.age}
                    </span>
                    <p className="text-xs text-slate-400 font-medium">{course.duration}</p>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl md:text-2xl text-charcoal mb-3 group-hover:text-verde transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-mid text-sm font-medium leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Bullet points */}
                <ul className="space-y-2.5 border-t border-slate-100 pt-6">
                  {course.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${course.color}15` }}>
                        <Icon name="CheckIcon" size={10} style={{ color: course.color }} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between">
                <button
                  onClick={() => {
                    const el = document.getElementById('contacto-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold transition-all flex items-center gap-1 group/btn"
                  style={{ color: course.color }}
                >
                  Reservar vacante
                  <Icon name="ArrowRightIcon" size={14} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Cupos Limitados</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner de Info Extra */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-8 border-2 border-dashed border-verde/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-verde/10 flex items-center justify-center shrink-0 text-verde">
              <Icon name="ShieldCheckIcon" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-charcoal text-base">¿Dudas de cuál es el curso ideal?</h4>
              <p className="text-slate-mid text-xs font-medium">Realizamos una breve entrevista gratuita para entender el nivel de tu perro y recomendarte el grupo correcto.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contacto-form');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-tangerine text-white font-bold text-xs px-6 py-3.5 rounded-xl whitespace-nowrap shadow-tangerine-glow transition-transform hover:scale-105 active:scale-95 shrink-0"
          >
            Consultar ahora
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesDetailSection;
