"use client";
import React from "react";
import { motion } from "framer-motion";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

interface Testimonial {
  id: number;
  text: string;
  authorName: string;
  authorRole: string;
  authorUsername: string;
  authorImage: string;
  initialRotation: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Llegué desesperada porque mi cachorro de 4 meses destruía todo y no me hacía caso. En solo 3 sesiones con el equipo de Impronta, entendí qué estaba haciendo mal. Nos cambiaron la vida por completo.",
    authorName: "Carolina S.",
    authorRole: "Dueña primeriza",
    authorUsername: "@caro_y_max",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    initialRotation: -2,
  },
  {
    id: 2,
    text: "He pasado por tres entrenadores distintos antes de llegar aquí. Lo que más destaco es que no usan castigos. Mi perra ahora me obedece por conexión y confianza, no por miedo. Totalmente recomendados.",
    authorName: "Martín R.",
    authorRole: "Propietario de Pastor Alemán",
    authorUsername: "@martin_rescates",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    initialRotation: 3,
  },
  {
    id: 3,
    text: "El curso de socialización temprana debería ser obligatorio para todo aquel que tiene un cachorro. Ver cómo mi perro aprendió a comunicarse con otros sin ansiedad ni agresividad no tiene precio.",
    authorName: "Laura y Tomás",
    authorRole: "Familia Multiespecie",
    authorUsername: "@familia_con_huellas",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    initialRotation: -3,
  },
  {
    id: 4,
    text: "Teníamos un caso severo de reactividad con otros perros en los paseos. Era una pesadilla salir a la calle. Gracias al protocolo de desensibilización, hoy podemos ir al parque y disfrutar juntos.",
    authorName: "Esteban M.",
    authorRole: "Adoptante",
    authorUsername: "@esteban_adopta",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    initialRotation: 2,
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({
  testimonial,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: testimonial.initialRotation }}
      whileInView={{ opacity: 1, y: 0, rotate: testimonial.initialRotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{
        rotate: 0,
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 },
      }}
      className="relative p-8 md:p-10 rounded-3xl cursor-default flex flex-col justify-between"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(232, 184, 0, 0.4)", // Borde dorado suave
        boxShadow: "0 20px 40px -15px rgba(232, 184, 0, 0.25)", // Glow dorado
        minHeight: "280px",
      }}
    >
      <div>
        <div className="mb-4 text-honey-gold opacity-50">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-base md:text-lg leading-relaxed text-slate-700 font-medium mb-8">
          {testimonial.text}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-honey-gold/30">
            <AppImage
              src={testimonial.authorImage}
              alt={testimonial.authorName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-charcoal leading-tight">
              {testimonial.authorName}
            </h4>
            <p className="text-xs text-slate-500">{testimonial.authorRole}</p>
          </div>
        </div>
        <div className="text-xs font-medium text-slate-400">
          {testimonial.authorUsername}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Premium Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "var(--honey-light)", // Color de fondo muy suave
          backgroundImage:
            "linear-gradient(rgba(232, 184, 0, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 184, 0, 0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.7,
        }}
      />
      {/* Gradientes para suavizar bordes del patrón */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none opacity-80" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-block tag-badge px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-6"
            style={{ background: "var(--tangerine)", color: "#ffffff" }}
          >
            LO QUE DICEN NUESTRAS FAMILIAS CANINAS
          </div>
          <h2
            className="font-serif font-bold text-4xl md:text-5xl leading-tight mb-4"
            style={{ color: "var(--charcoal)" }}
          >
            Palabras reales de <br className="hidden md:block" />
            personas reales.
          </h2>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex text-honey-gold gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="StarIcon" size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm font-medium text-slate-500">
              4.9/5 promedio de +200 familias felices
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 px-2 md:px-6">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.id} testimonial={t} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
