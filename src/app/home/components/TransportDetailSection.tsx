'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

interface TransportFeature {
  title: string;
  description: string;
  icon: string;
}

const transportFeatures: TransportFeature[] = [
  {
    title: 'Vehículo Adaptado y Seguro',
    description: 'Equipado con aire acondicionado, rampas de acceso para perros mayores o con movilidad reducida, arneses de seguridad homologados y caniles espaciosos de diferentes tamaños.',
    icon: 'TruckIcon',
  },
  {
    title: 'Traslados sin Acompañante',
    description: '¿No podés salir del trabajo? Nos encargamos de retirar a tu mascota, asistimos a la consulta veterinaria o peluquería, y la devolvemos a tu hogar informándote en todo momento.',
    icon: 'UserGroupIcon',
  },
  {
    title: 'Tandil y Provincia de Bs. As.',
    description: 'Cubrimos traslados urbanos en Tandil, viajes a campos, estancias de la zona, y traslados de larga distancia a Capital Federal u otras ciudades bonaerenses.',
    icon: 'MapIcon',
  },
  {
    title: 'Higiene y Sanitización Estricta',
    description: 'Limpieza profunda del vehículo antes y después de cada viaje utilizando desinfectantes veterinarios biodegradables y seguros para la salud respiratoria de las mascotas.',
    icon: 'ShieldCheckIcon',
  },
];

const TransportDetailSection: React.FC = () => {
  return (
    <section id="transporte-detalle" className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background visual element (Soft gradient circle) */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-honey-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column: Headline and Info */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span
                className="inline-block tag-badge px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide"
                style={{ background: 'var(--honey-light)', color: 'var(--honey-gold)' }}
              >
                Movilidad Especializada
              </span>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-charcoal leading-tight">
                Transporte de Mascotas <br />
                <span style={{ color: 'var(--tangerine)' }}>en Tandil, Buenos Aires</span>
              </h2>
              <p className="text-slate-mid font-medium text-sm md:text-base leading-relaxed">
                Entendemos que la movilidad de tu mascota requiere cuidado, puntualidad y sobre todo, mucha paciencia. Ofrecemos un servicio premium puerta a puerta diseñado para evitar el estrés del traslado y garantizar el máximo confort.
              </p>
            </motion.div>

            {/* Quick Badge list */}
            <div className="flex flex-wrap gap-3">
              {['Atención a domicilio', 'Tandil urbano', 'Viajes de larga distancia', 'Actualizaciones por WhatsApp'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-600 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-tangerine" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Call to action */}
            <div className="pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('contacto-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-tangerine text-white font-bold text-base px-8 py-4 rounded-2xl shadow-tangerine-glow transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Icon name="CalendarIcon" size={20} />
                Agendar un traslado
              </button>
            </div>
          </div>

          {/* Right Column: Key Features Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {transportFeatures.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100/70 hover:bg-white hover:shadow-warm-md hover:border-slate-200/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-tangerine/10 text-tangerine flex items-center justify-center mb-4">
                    <Icon name={feat.icon} size={20} />
                  </div>
                  <h4 className="font-bold text-charcoal text-base mb-2">{feat.title}</h4>
                  <p className="text-slate-mid text-xs font-medium leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportDetailSection;
