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

    const phoneNumber = '5492494248878';
    const message = `¡Hola Impronta Canina! 🐾\nMe gustaría hacer una consulta.\n\n👤 *Mi nombre y el de mi perro:* ${name}\n📋 *Motivo de la consulta:* ${motivo}\n\n¡Quedo a la espera de su respuesta, muchas gracias!`;
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Redirect to whatsapp
    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="relative w-full min-h-[85vh] flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden">
      {/* Translucent Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/images/form.png")' }}
      />
      {/* Dark & blurred overlay for readability and premium feel */}
      <div className="absolute inset-0 z-0 bg-charcoal/80 backdrop-blur-[4px]" />

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <motion.div
          id="contacto-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          className="rounded-[2.5rem] p-8 md:p-14 text-center relative overflow-hidden bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full mb-6 font-bold text-xs uppercase tracking-widest shadow-sm"
            style={{ background: 'var(--tangerine)', color: '#ffffff' }}
          >
            Consulta Directa
          </div>
          
          <h3 className="font-serif font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            ¿Listos para dar <br className="hidden md:block" />
            <span style={{ color: 'var(--honey-gold)' }}>el primer paso?</span>
          </h3>
          
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-xl mx-auto font-medium">
            Contanos sobre tu perro y qué servicio estás buscando. Te responderemos rápidamente por WhatsApp para asesorarte de forma personalizada.
          </p>

          <form
            onSubmit={handleConsulta}
            className="flex flex-col gap-5 max-w-lg mx-auto text-left"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-white/90 ml-1 uppercase tracking-wider">
                Tu nombre y el de tu perro
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Juan y Max"
                className="w-full px-5 py-4 rounded-2xl text-base font-medium border-2 border-white/20 bg-white/90 text-charcoal placeholder-slate-400 transition-all focus:outline-none focus:ring-4 focus:ring-tangerine/30 focus:border-tangerine focus:bg-white"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="motivo" className="text-sm font-bold text-white/90 ml-1 uppercase tracking-wider">
                Servicio de interés
              </label>
              <select
                id="motivo"
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl text-base font-medium border-2 border-white/20 bg-white/90 text-charcoal transition-all focus:outline-none focus:ring-4 focus:ring-tangerine/30 focus:border-tangerine focus:bg-white cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23334155' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.2em'
                }}
                required
              >
                <option value="" disabled>Selecciona el motivo de consulta</option>
                <option value="Adiestramiento">Adiestramiento</option>
                <option value="Asesoramiento (Conducta)">Asesoramiento (Conducta)</option>
                <option value="Cursos Grupales">Cursos Grupales</option>
                <option value="Paseos">Paseos</option>
                <option value="Traslados">Traslados</option>
                <option value="Otro / Consulta General">Otro / Consulta General</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full flex items-center justify-center gap-3 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-tangerine-glow transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ background: 'var(--tangerine)' }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar a WhatsApp
            </button>
          </form>
          
          <p className="text-white/60 font-medium text-xs mt-6">
            Al consultar, serás redirigido a WhatsApp para continuar la conversación con nuestro equipo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlueprintCTA;
