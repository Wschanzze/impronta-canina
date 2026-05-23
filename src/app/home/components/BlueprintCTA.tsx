'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlueprintCTA: React.FC = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleConsulta = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Contact / Consultation Gate */}
        <motion.div
          id="contacto-form"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
          className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            background: 'var(--honey-light)',
            border: '2px solid rgba(232,184,0,0.45)',
          }}
        >
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.07]"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative z-10">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-3"
            >
              <div className="text-4xl">🐾</div>
              <h3 className="font-serif font-bold text-2xl text-verde">
                ¡Gracias, {name}! Pronto te contactamos.
              </h3>
              <p className="text-slate-mid text-sm">
                Revisá tu bandeja de entrada. Te escribimos en menos de 24 horas.
              </p>
            </motion.div>
          ) : (
            <>
              <div
                className="inline-block tag-badge px-4 py-1.5 rounded-full mb-4 font-bold text-xs uppercase tracking-wide"
                style={{ background: 'var(--tangerine)', color: '#ffffff' }}
              >
                Consulta
              </div>
              <h3
                className="font-serif font-bold text-2xl md:text-3xl text-charcoal mb-3"
                style={{ letterSpacing: '-0.01em' }}
              >
                ¿No sabés por dónde empezar? Hablemos.
              </h3>
              <p className="text-slate-mid text-sm mb-8 max-w-lg mx-auto">
                Contanos sobre tu perro y te asesoramos de forma personalizada. Cada historia es única — y cada
                solución también.
              </p>
              <form
                onSubmit={handleConsulta}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre y el de tu perro"
                  className="email-input flex-1 px-5 py-3.5 rounded-xl text-sm font-medium border-2 transition-all focus:outline-none focus:ring-2 focus:ring-tangerine/50"
                  style={{
                    background: 'white',
                    color: 'var(--charcoal)',
                    borderColor: 'rgba(232,184,0,0.5)',
                  }}
                  required
                />
                <button
                  type="submit"
                  className="btn-tangerine text-white font-bold text-sm px-6 py-3.5 rounded-xl whitespace-nowrap shadow-tangerine-glow transition-transform hover:scale-105 active:scale-95"
                >
                  Consultar
                </button>
              </form>
              <p className="text-silver text-xs mt-3">
                Sin spam. Tu información es confidencial y solo la usamos para contactarte.
              </p>
            </>
          )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlueprintCTA;
