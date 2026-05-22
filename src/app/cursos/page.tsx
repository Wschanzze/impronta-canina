'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoursesDetailSection from '@/app/home/components/CoursesDetailSection';
import BlueprintCTA from '@/app/home/components/BlueprintCTA';
import Icon from '@/components/ui/AppIcon';

const CursosPage: React.FC = () => {
  const pillars = [
    {
      title: 'INFORMACIÓN CIENTÍFICA Y ACTUALIZADA',
      desc: 'Accederás a los últimos estudios e investigaciones del mundo de la etología y la educación canina.',
      icon: 'AcademicCapIcon',
      color: 'var(--verde)',
      bgColor: 'var(--verde-pale)'
    },
    {
      title: 'EDUCACIÓN CANINA RESPETUOSA',
      desc: 'Aprenderás las técnicas más actualizadas de la educación canina en positivo y sin castigos.',
      icon: 'HeartIcon',
      color: 'var(--tangerine)',
      bgColor: 'var(--tangerine-light)'
    },
    {
      title: 'CUERPO DOCENTE INTERNACIONAL',
      desc: 'Educadores caninos, veterinarios, etólogos y psicólogos forman un cuerpo docente interdisciplinario e internacional, especialistas en cada una de las temáticas que dictan.',
      icon: 'GlobeAltIcon',
      color: 'var(--honey-dark)',
      bgColor: 'var(--honey-light)'
    },
    {
      title: 'TUTORÍAS PRÁCTICAS PERSONALIZADAS',
      desc: 'Obtendrás el seguimiento personalizado de un Adiestrador Canino Profesional durante toda la cursada.',
      icon: 'UserGroupIcon',
      color: 'var(--verde)',
      bgColor: 'var(--verde-pale)'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-verde/10 via-warm-cream to-tangerine/5 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 select-none pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1600" 
              alt="Dogs playing" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-verde/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-honey-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <span className="inline-block tag-badge px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-4 bg-verde text-white shadow-sm">
                Formación & Cursos
              </span>
              <h1 className="font-serif font-bold text-4xl md:text-6xl text-charcoal leading-tight mb-6">
                Estudiá con <span style={{ color: 'var(--verde)' }}>Impronta Canina</span>
              </h1>
              <p className="text-slate-mid text-base md:text-xl font-medium leading-relaxed mb-8">
                Un espacio dedicado al aprendizaje mutuo y al respeto animal. Capacitate con las técnicas más modernas basadas en la ciencia del comportamiento y el refuerzo positivo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quiénes Somos / Sobre Nosotros */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-xs uppercase tracking-widest font-extrabold text-tangerine">Quiénes Somos</span>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-charcoal leading-tight">
                Nuestra pasión es tender puentes de <span className="text-verde">comunicación y amor</span>
              </h2>
              <p className="text-slate-mid font-medium leading-relaxed text-sm md:text-base">
                Impronta Canina nació con la firme convicción de que los métodos tradicionales de adiestramiento basados en el castigo o la dominancia no solo dañan el vínculo con nuestros perros, sino que atentan contra su bienestar físico y emocional.
              </p>
              <p className="text-slate-mid font-medium leading-relaxed text-sm md:text-base">
                Por eso, diseñamos programas formativos tanto para familias que buscan mejorar la convivencia cotidiana, como para educadores que deseen profundizar en la etología aplicada de manera formal y rigurosa. Nuestro enfoque interdisciplinario combina psicología del aprendizaje, medicina veterinaria y educación en positivo.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000" 
                alt="Adiestrador canino interactuando positivamente con un perro" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Por qué estudiar con nosotros */}
        <section className="py-20 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest font-extrabold text-verde">Nuestra Metodología Académica</span>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-charcoal mt-2">
                Por qué estudiar con nosotros
              </h2>
              <p className="text-slate-mid font-medium mt-4 text-sm md:text-base">
                Buscamos marcar la diferencia. Cada detalle de nuestra currícula y dinámica de cursada está pensado para garantizar un aprendizaje profundo y aplicable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-warm-md hover:shadow-warm-lg transition-all duration-300 border border-slate-100 flex flex-col md:flex-row gap-6 items-start group"
                >
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: pillar.color, color: '#ffffff' }}
                  >
                    <Icon name={pillar.icon} size={28} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base md:text-lg text-charcoal mb-3 tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-mid text-xs md:text-sm font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Training Courses Section (Flip Cards) */}
        <CoursesDetailSection />

        {/* CTA + Contact Form */}
        <BlueprintCTA />
      </main>

      <Footer />
    </div>
  );
};

export default CursosPage;
