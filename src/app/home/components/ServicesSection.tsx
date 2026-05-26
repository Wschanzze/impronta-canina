'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ServiceData {
  id: string;
  title: string;
  cardSubtitle: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  image: string;
  color: string;
  features: string[];
  duration: string;
  modality: string;
  badge?: string;
}

const services: ServiceData[] = [
  {
    id: 'adiestramiento',
    title: 'Adiestramiento',
    cardSubtitle: 'CONEXIÓN · PERSONALIZADO',
    shortDesc: 'Educación canina basada en el vínculo y la confianza. Transforma la relación con tu perro con una comunicación clara y eficiente.',
    longDesc: 'Nuestro programa principal se enfoca en forjar tu propia impronta: una conexión sólida, funcional y basada en la confianza mutua. Trabajamos la obediencia urbana, resolución de conflictos cotidianos y socialización progresiva a través de sesiones personalizadas en tu propio domicilio, diseñando pautas que se ajustan al temperamento de tu perro y al estilo de vida de tu familia, combinando rigor técnico con el respeto por su naturaleza.',
    icon: 'AcademicCapIcon',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=600',
    color: 'var(--verde)',
    features: [
      'Diagnóstico inicial etológico de convivencia',
      'Educación basada en la comunicación clara y el respeto',
      'Foco en obediencia urbana y paseos relajados',
      'Pautas claras adaptadas a la rutina de tu hogar'
    ],
    duration: 'Sesiones de 60 min',
    modality: 'Presencial a domicilio',
    badge: 'El más solicitado'
  },
  {
    id: 'asesoramiento',
    title: 'Asesoramiento',
    cardSubtitle: 'TERAPIA DE CONDUCTA · ETOLOGÍA',
    shortDesc: 'Soluciones a problemas de conducta. Ansiedad, miedos o reactividad con protocolos personalizados.',
    longDesc: 'Evaluamos de forma profesional problemas complejos del comportamiento canino como la ansiedad por separación, miedos severos, fobias urbanas o reactividad hacia otros perros y personas. Elaboramos un diagnóstico etológico y te guiamos paso a paso con un plan terapéutico seguro y libre de confrontación.',
    icon: 'ChatBubbleOvalLeftEllipsisIcon',
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=600',
    color: 'var(--tangerine)',
    features: [
      'Evaluación científica de problemas de comportamiento',
      'Protocolos personalizados de desensibilización',
      'Asesoramiento integral para toda la familia',
      'Seguimiento telefónico y por WhatsApp incluido'
    ],
    duration: 'Sesión inicial de 90 min',
    modality: 'A domicilio o Virtual',
    badge: 'Sesión diagnóstica etológica'
  },
  {
    id: 'cursos',
    title: 'Cursos Grupales',
    cardSubtitle: 'GRUPOS REDUCIDOS · SOCIALIZACIÓN',
    shortDesc: 'Aprendizaje dinámico en comunidad y socialización controlada.',
    longDesc: 'Talleres prácticos y clases grupales de socialización, obediencia bajo distracción y estimulación en entornos reales controlados. Es el espacio ideal para que tu perro aprenda a gestionar su atención en presencia de otros canes y personas, compartiendo con una comunidad de familias responsables.',
    icon: 'UserGroupIcon',
    image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?auto=format&fit=crop&q=80&w=600',
    color: 'var(--honey-gold)',
    features: [
      'Grupos reducidos (máximo 5 perros por instructor)',
      'Prácticas guiadas en parques y espacios reales',
      'Socialización estructurada y libre de riesgos',
      'Material complementario en PDF y video'
    ],
    duration: 'Ciclos de 4 encuentros',
    modality: 'Espacios públicos autorizados',
    badge: 'Cupos limitados'
  },
  {
    id: 'paseos',
    title: 'Paseos funcionales',
    cardSubtitle: 'ESTIMULACIÓN Y CALMA',
    shortDesc: 'Paseos estructurados enfocados en la estimulación cognitiva y conductas de calma.',
    longDesc: 'Nuestros paseos funcionales no buscan simplemente "cansar" al perro físicamente corriendo kilómetros. Siguiendo la filosofía de la empresa, diseñamos paseos individuales o grupales muy reducidos orientados a la estimulación cognitiva, la propiocepción, el olfato y las conductas de calma, ayudando a canalizar su energía de manera prolija y a reforzar su equilibrio emocional en entornos reales.',
    icon: 'MapIcon',
    image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&q=80&w=600',
    color: 'var(--verde)',
    features: [
      'Paseos individuales o de parejas compatibles',
      'Foco en estimulación cognitiva y olfato',
      'Gestión emocional y conductas de calma',
      'Uso de arnés en H (bienestar físico y sin tirones)'
    ],
    duration: 'Sesiones de 45 a 60 min',
    modality: 'Zonas seguras de Tandil',
    badge: 'Paseo cognitivo y funcional'
  },
  {
    id: 'traslados',
    title: 'Traslados',
    cardSubtitle: 'PUERTA A PUERTA · 100% SEGURO',
    shortDesc: 'Transporte seguro puerta a puerta para tu tranquilidad.',
    longDesc: 'Servicio de traslado puerta a puerta adaptado para las necesidades y comodidad de tu perro. Contamos con equipamiento seguro y homologado para traslados veterinarios, visitas familiares, guarderías o urgencias, garantizando un viaje tranquilo y sin niveles de estrés innecesarios.',
    icon: 'TruckIcon',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600',
    color: 'var(--tangerine)',
    features: [
      'Vehículo climatizado y adaptado',
      'Cajas transportadoras homologadas de alta seguridad',
      'Chofer con formación en comportamiento canino',
      'Acompañamiento a consultas veterinarias'
    ],
    duration: 'Trayectos locales y regionales',
    modality: 'Puerta a puerta (Tandil y zona)',
    badge: 'Seguridad garantizada'
  },
];

const ServicesSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('adiestramiento');
  const selectedService = services.find((s) => s.id === selectedId) || services[0];

  return (
    <section id="servicios" className="py-24 px-4 md:px-8 bg-[#fdfbf7] relative overflow-hidden">
      {/* CSS float keyframes for cards */}
      <style>{`
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-delay-0 { animation: cardFloat 6s ease-in-out infinite; }
        .float-delay-1 { animation: cardFloat 6.5s ease-in-out infinite; animation-delay: -1.3s; }
        .float-delay-2 { animation: cardFloat 5.8s ease-in-out infinite; animation-delay: -2.6s; }
        .float-delay-3 { animation: cardFloat 6.2s ease-in-out infinite; animation-delay: -3.9s; }
        .float-delay-4 { animation: cardFloat 7s ease-in-out infinite; animation-delay: -5.2s; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-verde font-bold tracking-widest uppercase text-xs mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
            Todo lo que tu perro necesita, <br className="hidden md:block" />
            <span className="text-honey-gold">en un solo lugar.</span>
          </h2>
          <p className="text-slate-500 font-medium text-base md:text-lg max-w-2xl mx-auto">
            Desde educación y modificación de conducta hasta paseos y traslados seguros.
            Haz clic en las tarjetas de abajo para explorar cada servicio en detalle.
          </p>
        </motion.div>

        {/* Premium Floating Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 px-2 md:px-6 mb-16 justify-center">
          {services.map((service, index) => {
            const isSelected = selectedId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className={`relative aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-500 bg-charcoal group float-delay-${index} ${
                  isSelected ? 'scale-[1.03] ring-4 ring-offset-2' : ''
                }`}
                style={{
                  '--tw-ring-color': service.color,
                  '--tw-ring-offset-width': '2px',
                  '--tw-ring-offset-color': '#fdfbf7',
                } as React.CSSProperties}
              >
                {/* Background Image with opacity transition */}
                <div className="absolute inset-0 w-full h-full">
                  <AppImage
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                      isSelected
                        ? 'opacity-100 saturate-100'
                        : 'opacity-55 saturate-50 group-hover:opacity-100 group-hover:saturate-100'
                    }`}
                  />
                </div>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-85" />

                {/* Card Text Content (At the bottom, centered) */}
                <div className="absolute bottom-6 left-4 right-4 text-center z-10 flex flex-col items-center">
                  <h3 className="font-serif font-semibold text-lg md:text-xl text-white mb-1 drop-shadow-sm">
                    {service.title}
                  </h3>
                  <p className="text-[10px] md:text-[11px] font-bold text-white/70 uppercase tracking-wider leading-none">
                    {service.cardSubtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Panel */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white rounded-[2.5rem] border border-[#eae6db] p-6 md:p-10 lg:p-12 shadow-xl relative overflow-hidden"
            >
              {/* Decorative dynamic color stripe at top */}
              <div 
                className="absolute top-0 left-0 right-0 h-2 transition-colors duration-500" 
                style={{ backgroundColor: selectedService.color }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                
                {/* Left Side: Photo + Badges */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                  <div className="relative aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-md group min-h-[220px]">
                    <AppImage
                      src={selectedService.image}
                      alt={selectedService.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                    
                    {/* Floating Premium Icon Badge */}
                    <div 
                      className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md bg-white/90 shadow-lg text-charcoal border border-white/20"
                      style={{ color: selectedService.color }}
                    >
                      <Icon name={selectedService.icon} size={24} />
                    </div>

                    {/* Top Floating Badge */}
                    {selectedService.badge && (
                      <span 
                        className="absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full text-white shadow-md backdrop-blur-sm"
                        style={{ backgroundColor: selectedService.color }}
                      >
                        {selectedService.badge}
                      </span>
                    )}
                  </div>

                  {/* Quick stats grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#fdfbf7] border border-[#eae6db]/60 rounded-2xl p-4 flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white text-slate-500 border border-[#eae6db]/50">
                        <Icon name="MapPinIcon" size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Ubicación</p>
                        <p className="text-xs font-bold text-charcoal leading-tight">{selectedService.modality}</p>
                      </div>
                    </div>
                    <div className="bg-[#fdfbf7] border border-[#eae6db]/60 rounded-2xl p-4 flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white text-slate-500 border border-[#eae6db]/50">
                        <Icon name="ClockIcon" size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Duración</p>
                        <p className="text-xs font-bold text-charcoal leading-tight">{selectedService.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Text details + bullet features */}
                <div className="lg:col-span-7 flex flex-col justify-between text-left">
                  <div>
                    <span
                      className="text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-100 shadow-sm inline-block mb-4"
                      style={{ color: selectedService.color }}
                    >
                      Información Detallada
                    </span>
                    <h3 className="font-serif font-bold text-3xl md:text-4xl text-charcoal mb-4">
                      {selectedService.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                      {selectedService.longDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="mb-8">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">¿Qué incluye este servicio?</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedService.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span 
                              className="mt-0.5 rounded-full p-0.5 flex items-center justify-center shrink-0"
                              style={{ backgroundColor: `${selectedService.color}15`, color: selectedService.color }}
                            >
                              <svg className="w-3.5 h-3.5 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-xs md:text-sm font-semibold text-slate-700 leading-tight">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-6 border-t border-[#eae6db]/60 flex flex-col sm:flex-row items-center gap-4 justify-between">
                    <a
                      href="#contacto"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-bold text-sm px-8 py-4 rounded-xl text-white transition-all shadow-lg hover:shadow-xl hover:brightness-110 active:scale-95 text-center cursor-pointer"
                      style={{ 
                        background: selectedService.color,
                        boxShadow: `0 8px 24px ${selectedService.color}25`
                      }}
                    >
                      Solicitar {selectedService.title}
                      <svg className="w-4 h-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    <span className="text-xs font-bold text-slate-400 text-center sm:text-left">
                      * Tarifas y planes adaptados a Tandil y zona de influencia.
                    </span>
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
