'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Pillar {
  id: number;
  number: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaLink: string;
  subtext: string;
  accentColor: string;
  testimonial: {
    quote: string;
    author: string;
    sub: string;
    avatar: string;
  };
  media: {
    type: 'video' | 'image';
    src: string;
    caption: string;
  };
}

const pillars: Pillar[] = [
  {
    id: 1,
    number: '01',
    tag: 'MÉTODO EN POSITIVO',
    title: 'Educamos sin castigos. Tu perro aprende cooperando.',
    description:
      'Educación fundamentada en la ciencia del comportamiento canino y el refuerzo positivo. Desterramos la dominancia y el miedo para lograr una obediencia fluida, respetando los tiempos y emociones de tu perro.',
    bullets: [
      'Sin tirones de correa ni collares de castigo.',
      'Fomento de la toma de decisiones del perro.',
      'Reducción activa del estrés y la ansiedad.',
      'Aprendizaje lúdico y motivador para ambos.',
    ],
    ctaText: 'Quiero entrenar con mi perro',
    ctaLink: '#contacto',
    subtext: 'Etología y adiestramiento científico moderno.',
    accentColor: 'var(--verde)',
    testimonial: {
      quote:
        'Me daba culpa pensar en adiestrar a mi perro porque creía que sería rígido. El método positivo de Impronta fue una revelación, él disfruta cada sesión y yo también.',
      author: 'Sofía G.',
      sub: 'Tandil · Bruno, 8 meses',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    },
    media: {
      type: 'video',
      src: '/assets/videos/6011991_Dog_Animal_1280x720.mp4',
      caption: '► Bruno aprendiendo obediencia básica — Semana 3',
    },
  },
  {
    id: 2,
    number: '02',
    tag: 'PLANES A MEDIDA',
    title: 'Un plan de adiestramiento diseñado para tu realidad.',
    description:
      'Cada perro y cada hogar son únicos. Analizamos la rutina familiar, el entorno y el temperamento individual de tu compañero para diseñar soluciones a medida que realmente se adapten a tu día a día.',
    bullets: [
      'Adaptado a tus horarios y rutinas reales.',
      'Soluciones específicas para cachorros o perros adultos.',
      'Enfoque en los problemas específicos de tu hogar.',
      'Seguimiento personalizado entre sesiones.',
    ],
    ctaText: 'Diseñar mi plan a medida',
    ctaLink: '#contacto',
    subtext: 'Programas 100% personalizados.',
    accentColor: 'var(--tangerine)',
    testimonial: {
      quote:
        'El plan personalizado fue clave. Se adaptó perfecto a mis horarios rotativos y me dio pautas claras de qué hacer en mi propio departamento.',
      author: 'Javier M.',
      sub: 'Tandil · Lola, 1 año',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    },
    media: {
      type: 'video',
      src: '/assets/videos/6012070_Dog_Animal_1280x720.mp4',
      caption: '► Lola aprendiendo a gestionar la calma en el hogar',
    },
  },
  {
    id: 3,
    number: '03',
    tag: 'VÍNCULO REAL',
    title: 'Resultados duraderos basados en el vínculo y la confianza.',
    description:
      'No buscamos "parches" temporales ni callar síntomas. Te enseñamos a comprender el lenguaje de tu perro para resolver problemas de raíz, construyendo una relación sólida que se mantiene toda la vida.',
    bullets: [
      'Comunicación clara y sin malentendidos.',
      'Llamado confiable y paseos relajados sin tensión.',
      'Resolución de problemas de reactividad o miedos.',
      'Confianza plena en situaciones cotidianas.',
    ],
    ctaText: 'Fortalecer nuestro vínculo',
    ctaLink: '#contacto',
    subtext: 'Vínculo y comunicación duradera.',
    accentColor: 'var(--honey-gold)',
    testimonial: {
      quote:
        'El cambio en el paseo es increíble. Pasamos de tirones constantes a caminar con la correa floja y confiar plenamente en él en el parque.',
      author: 'Valeria R.',
      sub: 'Tandil · Theo, 2 años',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    },
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800',
      caption: '► Theo paseando con correa floja y contacto visual',
    },
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

const VideoOrImagePlayer: React.FC<{ media: Pillar['media'] }> = ({ media }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.log(err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-md group border border-[#eae6db] bg-slate-100">
      {media.type === 'video' ? (
        <>
          <video
            ref={videoRef}
            src={media.src}
            loop
            muted
            playsInline
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer"
          />
          {/* Centered Play Button Overlay */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/25 cursor-pointer transition-colors hover:bg-black/35"
            >
              <div className="w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <svg
                  className="w-6 h-6 text-charcoal ml-1 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </>
      ) : (
        <img
          src={media.src}
          alt={media.caption}
          className="w-full h-full object-cover"
        />
      )}
      {/* Bottom Left Caption */}
      <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs font-bold px-3.5 py-2 rounded-full backdrop-blur-sm pointer-events-none">
        {media.caption}
      </div>
    </div>
  );
};

const PillarSection: React.FC<{ pillar: Pillar; index: number }> = ({ pillar, index }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={containerRef}
      className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center py-16 lg:py-24 border-b border-[#eae6db]/80 ${
        !isEven ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Text Column */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full lg:w-1/2 flex flex-col items-start"
      >
        <span
          className="font-bold text-xs uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-white border border-[#eae6db]/60 shadow-sm"
          style={{ color: pillar.accentColor }}
        >
          {pillar.number} — {pillar.tag}
        </span>
        <h3 className="font-serif font-semibold text-3xl md:text-5xl text-charcoal leading-tight mb-6">
          {pillar.title}
        </h3>
        <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed mb-8">
          {pillar.description}
        </p>

        {/* Bullets */}
        <ul className="space-y-3.5 mb-8 w-full">
          {pillar.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm md:text-base font-medium">
              <span
                className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                style={{ backgroundColor: pillar.accentColor }}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={pillar.ctaLink}
          className="inline-flex items-center gap-2 font-bold text-sm px-7 py-4 rounded-full text-white transition-all shadow-md active:scale-95"
          style={{ background: 'var(--charcoal)', hover: 'opacity-90' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          {pillar.ctaText} →
        </a>
        <span className="text-[11px] font-bold text-slate-400 mt-3 block ml-2">
          {pillar.subtext}
        </span>
      </motion.div>

      {/* Media Column (Testimonial Card + Video/Image Player) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        className="w-full lg:w-1/2 flex flex-col gap-6"
      >
        {/* Testimonial Card */}
        <div className="bg-[#fefcf8] p-6 md:p-8 rounded-3xl border border-[#eae6db] shadow-sm">
          <StarRating />
          <p className="text-slate-700 text-sm md:text-base leading-relaxed italic mb-6 font-medium">
            "{pillar.testimonial.quote}"
          </p>
          <div className="flex items-center gap-3.5 pt-4 border-t border-[#eae6db]/60">
            <img
              src={pillar.testimonial.avatar}
              alt={pillar.testimonial.author}
              className="w-10 h-10 rounded-full object-cover border border-[#eae6db]"
            />
            <div>
              <h4 className="font-bold text-charcoal text-sm leading-none">
                {pillar.testimonial.author}
              </h4>
              <p className="text-slate-400 text-xs font-bold mt-1">
                {pillar.testimonial.sub}
              </p>
            </div>
          </div>
        </div>

        {/* Player */}
        <VideoOrImagePlayer media={pillar.media} />
      </motion.div>
    </div>
  );
};

const BrandPillars: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#f5f2eb]/40 relative overflow-hidden noise-overlay">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-tangerine font-bold tracking-widest uppercase text-xs mb-4 block">
            Nuestro Enfoque
          </span>
          <h2 className="font-serif font-bold text-4xl md:text-6xl text-charcoal leading-tight mb-6">
            ¿Por qué elegir <br />
            <span className="text-verde">Impronta Canina?</span>
          </h2>
          <p className="text-slate-500 font-medium text-base md:text-lg leading-relaxed">
            Dejamos atrás los métodos tradicionales para abrazar una educación canina moderna,
            empática y efectiva. Tu perro no necesita dominancia, necesita un guía.
          </p>
        </div>

        {/* 3 Pillars List */}
        <div className="flex flex-col gap-8">
          {pillars.map((pillar, index) => (
            <PillarSection key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
};

export default BrandPillars;
