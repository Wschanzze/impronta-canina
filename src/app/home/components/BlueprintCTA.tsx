"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";

const ServicesMockup: React.FC = () => (
  <div className="relative w-full max-w-xs mx-auto">
    {/* Back cards (fanned) */}
    <div
      className="absolute top-2 left-4 w-full h-full rounded-2xl border-2 border-honey-gold/40"
      style={{
        background: "linear-gradient(135deg, #E8B800 0%, #C49A00 100%)",
        transform: "rotate(6deg)",
        opacity: 0.6,
      }}
    />
    <div
      className="absolute top-1 left-2 w-full h-full rounded-2xl border-2 border-honey-gold/40"
      style={{
        background: "linear-gradient(135deg, #C8281E 0%, #A01F16 100%)",
        transform: "rotate(3deg)",
        opacity: 0.5,
      }}
    />

    {/* Main card */}
    <div
      className="blueprint-mockup relative w-full rounded-2xl overflow-hidden border-2 border-verde/40 shadow-warm-lg"
      style={{
        background: "linear-gradient(135deg, #1B7A3E 0%, #2E9E55 100%)",
        aspectRatio: "3/4",
      }}
    >
      <div className="p-8 h-full flex flex-col justify-between">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-6 h-6 rounded-full"
              style={{ background: "var(--honey-gold)" }}
            />
            <span className="text-honey-gold text-xs font-bold uppercase tracking-widest">
              Impronta Canina
            </span>
          </div>
          <h3 className="font-serif font-bold text-white text-xl leading-tight mb-2">
            Un aprendizaje que deja huella
          </h3>
          <p className="text-verde-light text-xs">
            Educación canina profesional
          </p>
        </div>

        {/* Middle illustration */}
        <div className="flex items-center justify-center py-4">
          <svg viewBox="0 0 120 80" width="120" height="80" fill="none">
            {/* Dog silhouette */}
            <ellipse
              cx="60"
              cy="50"
              rx="30"
              ry="18"
              fill="#E8B800"
              opacity="0.8"
            />
            <ellipse
              cx="88"
              cy="38"
              rx="15"
              ry="13"
              fill="#E8B800"
              opacity="0.8"
            />
            <ellipse
              cx="100"
              cy="43"
              rx="9"
              ry="7"
              fill="#C8281E"
              opacity="0.7"
            />
            <path
              d="M32 46 Q18 30 22 18 Q25 10 29 14 Q27 24 36 34"
              fill="#E8B800"
              opacity="0.7"
            />
            <rect
              x="68"
              y="62"
              width="8"
              height="14"
              rx="4"
              fill="#E8B800"
              opacity="0.8"
            />
            <rect
              x="78"
              y="62"
              width="8"
              height="14"
              rx="4"
              fill="#E8B800"
              opacity="0.8"
            />
            <rect
              x="44"
              y="62"
              width="8"
              height="14"
              rx="4"
              fill="#E8B800"
              opacity="0.8"
            />
            <rect
              x="54"
              y="62"
              width="8"
              height="14"
              rx="4"
              fill="#E8B800"
              opacity="0.8"
            />
            {/* Paw prints */}
            <ellipse
              cx="15"
              cy="20"
              rx="5"
              ry="4"
              fill="#C8281E"
              opacity="0.6"
            />
            <ellipse
              cx="10"
              cy="12"
              rx="3"
              ry="3.5"
              fill="#C8281E"
              opacity="0.5"
            />
            <ellipse
              cx="20"
              cy="12"
              rx="3"
              ry="3.5"
              fill="#C8281E"
              opacity="0.5"
            />
            {/* Green leaf accent */}
            <ellipse
              cx="105"
              cy="15"
              rx="6"
              ry="9"
              fill="#A8E6BE"
              opacity="0.6"
              transform="rotate(-20 105 15)"
            />
          </svg>
        </div>

        {/* Services preview */}
        <div className="space-y-1.5">
          {[
            "Adiestramiento Individual",
            "Asesoramiento Personalizado",
            "Cursos Grupales",
            "Paseos Profesionales",
            "Traslados Seguros",
          ].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background:
                    i === 4
                      ? "#A8E6BE"
                      : i % 2 === 0
                        ? "var(--honey-gold)"
                        : "var(--tangerine)",
                }}
              />
              <span className="text-verde-light text-xs font-medium">{s}</span>
            </div>
          ))}
        </div>

        {/* CTA tag */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-honey-gold font-serif font-bold text-lg">
            Consulta gratis
          </span>
          <span className="text-verde-light/60 text-xs">Sin compromiso</span>
        </div>
      </div>
    </div>
  </div>
);

const BlueprintCTA: React.FC = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleConsulta = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div
          className="rounded-4xl overflow-hidden p-8 md:p-16 mb-12"
          style={{
            background: "linear-gradient(135deg, #E8B800 0%, #C49A00 100%)",
            border: "3px solid rgba(200,40,30,0.35)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Services Mockup */}
            <div className="flex justify-center lg:justify-end">
              <ServicesMockup />
            </div>

            {/* Right: Copy */}
            <div className="space-y-6">
              <div
                className="inline-block tag-badge px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide"
                style={{ background: "var(--tangerine)", color: "#ffffff" }}
              >
                🐾 Educación Canina Profesional
              </div>
              <h2
                className="font-serif font-bold text-3xl md:text-5xl leading-tight"
                style={{ letterSpacing: "-0.02em", color: "#1A1A1A" }}
              >
                La relación que tu perro y vos merecen.
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(26,26,26,0.75)" }}
              >
                En Impronta Canina creemos que cada aprendizaje deja una marca.
                Trabajamos con método, amor y ciencia del comportamiento para
                que esa marca sea positiva, duradera y transformadora.
              </p>

              {/* Services */}
              <ul className="space-y-3">
                {[
                  {
                    text: "Adiestramiento individual y familiar",
                    color: "#1A1A1A",
                  },
                  {
                    text: "Asesoramiento conductual personalizado",
                    color: "#C8281E",
                  },
                  { text: "Cursos grupales de obediencia", color: "#1A1A1A" },
                  {
                    text: "Paseos profesionales con seguimiento",
                    color: "#1B7A3E",
                  },
                  {
                    text: "Traslados seguros a veterinarios y más",
                    color: "#C8281E",
                  },
                ].map((f) => (
                  <li
                    key={f.text}
                    className="flex items-center gap-3 text-sm font-medium"
                    style={{ color: "#1A1A1A" }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: `${f.color}33` }}
                    >
                      <Icon
                        name="CheckIcon"
                        size={12}
                        style={{ color: f.color }}
                      />
                    </div>
                    {f.text}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  className="btn-tangerine text-white font-bold text-base px-8 py-4 rounded-2xl w-full sm:w-auto text-center"
                  onClick={() => {
                    const el = document.getElementById("contacto-form");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Quiero una consulta gratuita
                </button>
                <p
                  className="text-xs font-medium"
                  style={{ color: "rgba(26,26,26,0.55)" }}
                >
                  Sin compromiso. Te respondemos en 24 hs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact / Free Consultation Gate */}
        <div
          id="contacto-form"
          className="rounded-3xl p-8 md:p-12 text-center"
          style={{
            background: "var(--honey-light)",
            border: "2px solid rgba(232,184,0,0.45)",
          }}
        >
          {submitted ? (
            <div className="space-y-3">
              <div className="text-4xl">🐾</div>
              <h3 className="font-serif font-bold text-2xl text-verde">
                ¡Gracias, {name}! Pronto te contactamos.
              </h3>
              <p className="text-slate-mid text-sm">
                Revisá tu bandeja de entrada. Te escribimos en menos de 24
                horas.
              </p>
            </div>
          ) : (
            <>
              <div
                className="inline-block tag-badge px-4 py-1.5 rounded-full mb-4 font-bold text-xs uppercase tracking-wide"
                style={{ background: "var(--tangerine)", color: "#ffffff" }}
              >
                Consulta Gratuita
              </div>
              <h3
                className="font-serif font-bold text-2xl md:text-3xl text-charcoal mb-3"
                style={{ letterSpacing: "-0.01em" }}
              >
                ¿No sabés por dónde empezar? Hablemos.
              </h3>
              <p className="text-slate-mid text-sm mb-8 max-w-lg mx-auto">
                Contanos sobre tu perro y te asesoramos sin costo. Cada historia
                es única — y cada solución también.
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
                  className="email-input flex-1 px-5 py-3.5 rounded-xl text-sm font-medium border-2 transition-all"
                  style={{
                    background: "white",
                    color: "var(--charcoal)",
                    borderColor: "rgba(232,184,0,0.5)",
                  }}
                  required
                />
                <button
                  type="submit"
                  className="btn-tangerine text-white font-bold text-sm px-6 py-3.5 rounded-xl whitespace-nowrap"
                >
                  Consultar Gratis
                </button>
              </form>
              <p className="text-silver text-xs mt-3">
                Sin spam. Tu información es confidencial y solo la usamos para
                contactarte.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlueprintCTA;
