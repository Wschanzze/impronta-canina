'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  text: string;
  authorName: string;
  authorRole: string;
  authorUsername: string;
  authorImage: string;
  accentColor: string;
  bgColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'Nos ayudaron a entender qué necesitaba nuestro cachorro para sentirse seguro. Aprendimos a establecer una comunicación clara y pautas acordes a su naturaleza. La convivencia mejoró muchísimo al forjar un vínculo de confianza mutua, sin presiones innecesarias.',
    authorName: 'Carolina S.',
    authorRole: 'Familia con Cachorro',
    authorUsername: '@caro_y_max',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    accentColor: 'var(--verde)',
    bgColor: 'rgba(74, 93, 35, 0.04)',
  },
  {
    id: 2,
    text: 'Estábamos buscando un enfoque que no se basara en castigos o reglas estrictas. En Impronta Canina encontramos un método respetuoso y muy técnico. Ahora nuestra perra responde por pura conexión y entendimiento, dándonos tranquilidad en el día a día.',
    authorName: 'Martín R.',
    authorRole: 'Tutor de Pastor Alemán',
    authorUsername: '@martin_y_luna',
    authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    accentColor: 'var(--tangerine)',
    bgColor: 'rgba(217, 119, 67, 0.04)',
  },
  {
    id: 3,
    text: 'El grupo de socialización nos enseñó la importancia de la estructura emocional. Vimos cómo nuestro perro aprendió a relacionarse en entornos reales de forma progresiva, gestionando su atención y emociones frente a otros perros de manera relajada.',
    authorName: 'Laura y Tomás',
    authorRole: 'Familia Multiespecie',
    authorUsername: '@familia_con_huellas',
    authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    accentColor: '#E6A15C',
    bgColor: 'rgba(230, 161, 92, 0.05)',
  },
  {
    id: 4,
    text: 'Los paseos solían ser tensos, pero gracias al diagnóstico etológico logramos interpretar las verdaderas causas. Con paciencia y un protocolo enfocado en su bienestar y libre de confrontación, hoy logramos salidas donde realmente disfrutamos juntos.',
    authorName: 'Esteban M.',
    authorRole: 'Tutor en Adiestramiento',
    authorUsername: '@esteban_adopta',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    accentColor: 'var(--verde)',
    bgColor: 'rgba(74, 93, 35, 0.04)',
  },
];

const TestimonialListItem: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div 
      className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-10 border-l-4 rounded-r-2xl rounded-l-sm transition-colors duration-200 hover:bg-opacity-80"
      style={{ 
        borderColor: testimonial.accentColor,
        backgroundColor: testimonial.bgColor
      }}
    >
      <div className="flex-shrink-0 flex items-center gap-4 md:flex-col md:items-start md:w-56">
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
          <AppImage
            src={testimonial.authorImage}
            alt={testimonial.authorName}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-base md:text-lg font-bold text-charcoal leading-tight">
            {testimonial.authorName}
          </h4>
          <p className="text-sm font-bold mt-1" style={{ color: testimonial.accentColor }}>
            {testimonial.authorRole}
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="flex gap-1 mb-4" style={{ color: testimonial.accentColor }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Icon key={star} name="StarIcon" size={18} fill="currentColor" />
          ))}
        </div>
        <p className="text-lg md:text-xl leading-relaxed text-slate-700 italic font-medium">
          "{testimonial.text}"
        </p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 bg-[#fdfbf7]">
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-block tag-badge px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-6"
            style={{ background: 'var(--tangerine)', color: '#ffffff' }}
          >
            LO QUE DICEN NUESTRAS FAMILIAS CANINAS
          </div>
          <h2
            className="font-serif font-bold text-4xl md:text-5xl leading-tight mb-4"
            style={{ color: 'var(--charcoal)' }}
          >
            Palabras reales de <br className="hidden md:block" />
            personas reales.
          </h2>

          <div className="flex flex-col items-center justify-center gap-2 mt-4">
            <p className="text-sm font-bold text-slate-500">
              4.9/5 promedio de +200 familias felices
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-2 md:px-6">
          {testimonials.map((t) => (
            <TestimonialListItem key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
