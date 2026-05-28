'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoursesDetailSection from '@/app/home/components/CoursesDetailSection';
import BlueprintCTA from '@/app/home/components/BlueprintCTA';
import dynamic from 'next/dynamic';

const DidYouKnowRibbon = dynamic(() => import('@/app/home/components/DidYouKnowRibbon'));

const CursosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-verde/10 via-warm-cream to-tangerine/5 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 select-none pointer-events-none">
            <img
              src="/assets/images/curso 3.jfif"
              alt="Cursos de Impronta Canina"
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
                Formación &amp; Cursos
              </span>
              <h1 className="font-serif font-bold text-4xl md:text-6xl text-charcoal leading-tight mb-6">
                Estudiá con <span style={{ color: 'var(--verde)' }}>Impronta Canina</span>
              </h1>
              <p className="text-slate-mid text-base md:text-xl font-medium leading-relaxed mb-8">
                Un espacio dedicado al aprendizaje mutuo y al respeto animal. Capacitate con un
                enfoque que combina rigor técnico y actualizado con el respeto por la naturaleza
                canina, construyendo una comunicación clara y eficiente.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quiénes Somos */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-xs uppercase tracking-widest font-extrabold text-tangerine">
                Quiénes Somos
              </span>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-charcoal leading-tight">
                Nuestra pasión es tender puentes de{' '}
                <span className="text-verde">comunicación y entendimiento mutuo</span>
              </h2>
              <p className="text-slate-mid font-medium leading-relaxed text-sm md:text-base">
                Impronta Canina nació con la convicción de que la educación es esa huella en el aprendizaje que forma una estructura emocional sólida y de confianza entre el perro y su tutor o guía. Con más de diez años de trayectoria tanto en el mundo de los perros de búsqueda como en el ámbito domiciliario, entendemos que la comunicación clara y eficiente forma un vínculo inquebrantable.
              </p>
              <p className="text-slate-mid font-medium leading-relaxed text-sm md:text-base">
                Por eso, diseñamos programas formativos tanto para familias que buscan mejorar la convivencia cotidiana, como para educadores que deseen profundizar en la etología aplicada de manera formal y rigurosa. Lejos de fórmulas rígidas, nuestro enfoque combina rigor técnico y actualizado con el respeto por la naturaleza canina para crear un canal de entendimiento mutuo.
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
                src="/assets/images/Carlos-Polizza-3.jfif"
                alt="Carlos Polizza impartiendo cursos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Did You Know Ribbon #3 - Filosofía de Aprendizaje */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 bg-white">
          <DidYouKnowRibbon
            fact="Educar no es aplicar fórmulas rígidas. Es crear un canal de entendimiento mutuo mediante una comunicación clara y eficiente, forjando una conexión sólida y funcional basada en la confianza."
            temperature="hot"
            index={2}
          />
        </div>

        {/* Courses Grid + Modalities */}
        <CoursesDetailSection />

        {/* CTA + Contact Form */}
        <BlueprintCTA />
      </main>

      <Footer />
    </div>
  );
};

export default CursosPage;
