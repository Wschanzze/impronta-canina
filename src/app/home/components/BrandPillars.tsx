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
  trainerTip: {
    tip: string;
    trainerName: string;
    trainerRole: string;
    trainerPhoto: string;
  };
  media: {
    type: 'video' | 'image';
    src: string;
    caption: string;
    imageClassName?: string;
  };
}

const pillars: Pillar[] = [
  {
    id: 1,
    number: '01',
    tag: 'EDUCACIÓN VÍNCULAR',
    title: 'Comunicación clara y eficiente. Un vínculo inquebrantable.',
    description:
      'Entendemos la educación como esa huella en el aprendizaje que forma una estructura emocional sólida y de confianza. Combinamos rigor técnico con el respeto por la naturaleza canina.',
    bullets: [
      'Estructura emocional sólida y de confianza.',
      'Comunicación clara, eficiente y sin fórmulas rígidas.',
      'Rigor técnico actualizado aplicado al hogar.',
      'Respeto absoluto por la naturaleza y tiempos del perro.',
    ],
    ctaText: 'Quiero entrenar con mi perro',
    ctaLink: '#contacto',
    subtext: 'Educación canina funcional y basada en la confianza.',
    accentColor: 'var(--verde)',
    trainerTip: {
      tip: 'La educación canina no se trata de fórmulas rígidas, sino de construir un canal de entendimiento mutuo. Cuando logramos una comunicación clara y eficiente, formamos un vínculo inquebrantable y funcional.',
      trainerName: 'Nicolás Pellizzari',
      trainerRole: 'Adiestrador UBA y Psicopedagogo',
      trainerPhoto: '/assets/images/nicolas-pellizzari.jfif',
    },
    media: {
      type: 'image',
      src: '/assets/images/nicolas-pellizzari-4.jfif',
      caption: '► Sesión de adiestramiento con Nicolás',
      imageClassName: 'object-top',
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
    trainerTip: {
      tip: 'No intentes aplicar la receta de otro perro al tuyo. Cada animal tiene un temperamento, ritmo de aprendizaje y entorno familiar únicos. Adaptar el plan a tu rutina real garantiza resultados sostenibles sin sobrecargar tu día a día.',
      trainerName: 'Carlos Polizza',
      trainerRole: 'Adiestrador y Técnico en Criminalística',
      trainerPhoto: '/assets/images/Carlos-Polizza.jfif',
    },
    media: {
      type: 'image',
      src: '/assets/images/Carlos-Polizza-1.jfif',
      caption: '► Consultoría especializada con Carlos',
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
    trainerTip: {
      tip: 'Un paseo relajado con la correa floja no se logra reteniendo al perro con fuerza, sino enseñándole que caminar a tu lado es la opción más gratificante y segura. El vínculo real se construye con comunicación clara y respeto mutuo.',
      trainerName: 'Nicolás Pellizzari',
      trainerRole: 'Adiestrador UBA y Psicopedagogo',
      trainerPhoto: '/assets/images/nicolas-pellizzari.jfif',
    },
    media: {
      type: 'image',
      src: '/assets/images/nicolas-pellizzari-1.jfif',
      caption: '► Paseo relajado y contacto visual con Nicolás',
    },
  },
];


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
          className={`w-full h-full object-cover ${media.imageClassName || ''}`}
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
        {/* Trainer Tip Card */}
        <div className="bg-[#fefcf8] p-6 md:p-8 rounded-3xl border border-[#eae6db] shadow-sm relative overflow-hidden">
          {/* Subtle decorative background blob */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-tangerine/5 rounded-bl-full pointer-events-none" />
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-tangerine/10 text-tangerine flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1c-.12.08-.23.18-.32.3-.43.54-.53 1.25-.53 1.93v.67h-4v-.67c0-.68-.1-1.39-.53-1.93-.09-.12-.2-.22-.32-.3A4.954 4.954 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.07-2.15 3.9z"/>
              </svg>
              Consejo Profesional
            </span>
          </div>

          <p className="text-slate-700 text-sm md:text-base leading-relaxed italic mb-6 font-medium">
            "{pillar.trainerTip.tip}"
          </p>

          <div className="flex items-center gap-3.5 pt-4 border-t border-[#eae6db]/60">
            <img
              src={pillar.trainerTip.trainerPhoto}
              alt={pillar.trainerTip.trainerName}
              className="w-10 h-10 rounded-full object-cover border border-[#eae6db]"
            />
            <div>
              <h4 className="font-bold text-charcoal text-sm leading-none">
                {pillar.trainerTip.trainerName}
              </h4>
              <p className="text-slate-400 text-[10px] font-bold mt-1.5">
                {pillar.trainerTip.trainerRole}
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
            Dejamos atrás las fórmulas rígidas para crear un canal de entendimiento mutuo.
            Tu perro no necesita dominancia, necesita una comunicación clara y un guía confiable.
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
