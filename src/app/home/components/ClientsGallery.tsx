'use client';
import React from 'react';
import { motion } from 'framer-motion';

const communityTestimonials = [
  {
    quote: 'Llegué desesperada porque mi cachorro de 4 meses destruía todo. En solo 3 sesiones entendimos qué estábamos haciendo mal. Nos cambiaron la vida por completo.',
    author: 'Carolina S.',
    sub: 'Dueña de Max (Golden Retriever) · Tandil',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150',
  },
  {
    quote: 'He pasado por tres entrenadores distintos. Lo que más destaco es que no usan castigos. Mi perra ahora me obedece por conexión y confianza, no por miedo.',
    author: 'Martín R.',
    sub: 'Dueño de Sasha (Pastor Alemán) · Tandil',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150',
  },
  {
    quote: 'El curso de socialización temprana debería ser obligatorio. Ver cómo mi perro aprendió a comunicarse sin ansiedad ni agresividad no tiene precio.',
    author: 'Laura y Tomás',
    sub: 'Dueños de Rocky (Mestizo) · Tandil',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150',
  },
];

const StarRating: React.FC = () => (
  <div className="flex gap-1 text-[#b88800] mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 fill-current"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ClientsGallery: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#f5f2eb]/40 relative overflow-hidden noise-overlay">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-verde font-bold tracking-widest uppercase text-xs mb-3 block">
            DE NUESTRA COMUNIDAD
          </span>
          <h3 className="font-serif font-bold text-3xl md:text-4xl text-charcoal">
            Familias que transformaron su convivencia
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {communityTestimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#fefcf8] p-6 md:p-8 rounded-3xl border border-[#eae6db] shadow-sm flex flex-col justify-between h-full"
            >
              <div>
                <StarRating />
                <p className="text-slate-700 text-sm md:text-base leading-relaxed italic mb-6 font-medium">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#eae6db]/60">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#eae6db]"
                />
                <div>
                  <h4 className="font-bold text-charcoal text-sm leading-none">
                    {t.author}
                  </h4>
                  <p className="text-slate-400 text-[11px] font-bold mt-1 leading-tight">
                    {t.sub}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsGallery;
