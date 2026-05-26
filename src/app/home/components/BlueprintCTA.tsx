'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlueprintCTA: React.FC = () => {
  const [name, setName] = useState('');
  const [motivo, setMotivo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConsulta = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !motivo) return;

    setIsSubmitting(true);

    const phoneNumber = '5492494331717';
    const message = `¡Hola Impronta Canina! 🐾\nMe gustaría hacer una consulta.\n\n👤 *Mi nombre y el de mi perro:* ${name}\n📋 *Motivo de la consulta:* ${motivo}\n\n¡Quedo a la espera de su respuesta, muchas gracias!`;
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Redirect to whatsapp
    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="relative w-full min-h-[60vh] flex items-center justify-center py-12 md:py-16 px-4 md:px-8 overflow-hidden">
      {/* Translucent Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/images/footer2.jpg")' }}
      />
      {/* Dark & blurred overlay for readability and premium feel */}
      <div className="absolute inset-0 z-0 bg-charcoal/85 backdrop-blur-[5px]" />

      {/* Subtle background glow behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-tangerine/15 blur-[90px] pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-40px' }}
        className="relative z-10 w-full max-w-2xl mx-auto"
      >
        <div
          id="contacto-form"
          className="rounded-[2rem] p-6 md:p-10 text-center relative overflow-hidden bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
        >
          <div
            className="inline-block px-3 py-1 rounded-full mb-4 font-bold text-[10px] uppercase tracking-widest shadow-sm"
            style={{ background: 'var(--tangerine)', color: '#ffffff' }}
          >
            Consulta Directa
          </div>
          
          <h3 className="font-serif font-bold text-3xl md:text-4xl text-white mb-2 leading-tight">
            ¿Listos para dar <span style={{ color: 'var(--honey-gold)' }}>el primer paso?</span>
          </h3>
          
          <p className="text-white/80 text-sm md:text-base mb-6 max-w-lg mx-auto font-medium leading-relaxed">
            Contanos sobre tu perro y qué servicio estás buscando. Te responderemos rápidamente por WhatsApp para asesorarte de forma personalizada.
          </p>

          <form
            onSubmit={handleConsulta}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-bold text-white/90 ml-1 uppercase tracking-wider">
                Tu nombre y el de tu perro
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Juan y Max"
                className="w-full px-4 py-3 rounded-xl text-sm font-medium border border-white/15 bg-white/95 text-charcoal placeholder-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-tangerine focus:border-tangerine focus:bg-white"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="motivo" className="text-xs font-bold text-white/90 ml-1 uppercase tracking-wider">
                Servicio de interés
              </label>
              <div className="relative">
                <select
                  id="motivo"
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm font-medium border border-white/15 bg-white/95 text-charcoal transition-all focus:outline-none focus:ring-2 focus:ring-tangerine focus:border-tangerine focus:bg-white cursor-pointer appearance-none"
                  required
                >
                  <option value="" disabled>Selecciona un servicio</option>
                  <option value="Adiestramiento">Adiestramiento</option>
                  <option value="Asesoramiento (Conducta)">Asesoramiento (Conducta)</option>
                  <option value="Cursos Grupales">Cursos Grupales</option>
                  <option value="Paseos">Paseos</option>
                  <option value="Traslados">Traslados</option>
                  <option value="Otro / Consulta General">Otro / Consulta General</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 text-white font-bold text-base px-6 py-3 rounded-xl shadow-lg shadow-tangerine/20 transition-all hover:scale-[1.01] hover:brightness-110 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                style={{ background: 'var(--tangerine)' }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar a WhatsApp
              </button>
            </div>
          </form>
          
          <p className="text-white/60 font-medium text-[11px] mt-4">
            Al consultar, serás redirigido a WhatsApp para continuar la conversación con nuestro equipo.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default BlueprintCTA;
