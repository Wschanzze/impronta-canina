"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";
import { LucideIconName } from "@/components/ui/AppIcon";

interface ServiceData {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: LucideIconName;
  image: string;
  color: string;
}

const services: ServiceData[] = [
  {
    id: "adiestramiento",
    title: "Adiestramiento",
    shortDesc: "Educación canina enfocada en positivo.",
    description: "Transforma la relación con tu perro estableciendo límites claros mediante refuerzo positivo. Enseñamos obediencia básica y avanzada construyendo confianza mutua, sin castigos ni estrés.",
    icon: "AcademicCapIcon",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    color: "var(--honey-gold)",
  },
  {
    id: "asesoramiento",
    title: "Asesoramiento",
    shortDesc: "Soluciones a problemas de conducta.",
    description: "Evaluamos casos de ansiedad, miedos, reactividad o agresividad. Creamos protocolos personalizados a medida, abordando la raíz del problema para devolver la armonía a tu hogar.",
    icon: "ChatBubbleOvalLeftEllipsisIcon",
    image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6",
    color: "var(--tangerine)",
  },
  {
    id: "cursos",
    title: "Cursos",
    shortDesc: "Aprendizaje dinámico en comunidad.",
    description: "Clases grupales donde tu perro no solo aprenderá comandos, sino que también socializará de forma controlada y segura con otros animales y personas, algo vital para su equilibrio emocional.",
    icon: "UserGroupIcon",
    image: "https://images.unsplash.com/photo-1560743641-3914f2c45636",
    color: "var(--verde)",
  },
  {
    id: "paseos",
    title: "Paseos",
    shortDesc: "Paseos profesionales y estructurados.",
    description: "Más que solo caminar: nuestros paseos están diseñados para estimular la mente de tu perro y quemar energía de manera eficiente, evitando problemas de ansiedad por encierro.",
    icon: "MapIcon",
    image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8",
    color: "var(--tangerine)",
  },
  {
    id: "traslados",
    title: "Traslados",
    shortDesc: "Transporte seguro puerta a puerta.",
    description: "Vehículo adaptado con todas las medidas de seguridad para llevar a tu perro al veterinario, a la peluquería o a la guardería. Confianza total y actualizaciones durante el viaje.",
    icon: "TruckIcon",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    color: "var(--honey-gold)",
  },
];

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceData>(services[0]);

  return (
    <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-block tag-badge px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-4"
            style={{ background: "var(--tangerine)", color: "#ffffff" }}
          >
            Nuestros Servicios
          </div>
          <h2
            className="font-serif font-bold text-3xl md:text-5xl leading-tight"
            style={{ color: "var(--charcoal)" }}
          >
            Todo lo que tu perro necesita, <br className="hidden md:block" />
            <span style={{ color: "var(--verde)" }}>en un solo lugar.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Lado Izquierdo: Lista de pestañas */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {services.map((service) => {
              const isActive = activeService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  onMouseEnter={() => setActiveService(service)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 border-2 group ${
                    isActive
                      ? "bg-slate-50 border-transparent shadow-lg"
                      : "bg-white border-slate-100 hover:border-slate-200"
                  }`}
                  style={{
                    boxShadow: isActive ? "0 10px 30px -10px rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-slate-500 bg-slate-100 group-hover:bg-slate-200"
                    }`}
                    style={{ background: isActive ? service.color : undefined }}
                  >
                    <Icon name={service.icon} size={24} />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg transition-colors duration-300 ${
                        isActive ? "text-charcoal" : "text-slate-600 group-hover:text-charcoal"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      {service.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Lado Derecho: Contenido Activo (Imagen + Info) */}
          <div className="w-full lg:w-2/3">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/10", minHeight: "400px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <AppImage
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                  />
                  {/* Gradiente oscuro inferior para legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Contenido en la imagen */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ background: activeService.color }}
                        >
                          <Icon name={activeService.icon} size={20} className="text-white" />
                        </div>
                        <h3 className="font-serif font-bold text-3xl md:text-4xl">
                          {activeService.title}
                        </h3>
                      </div>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                        {activeService.description}
                      </p>
                      <button
                        className="mt-8 px-6 py-3 rounded-xl font-bold text-sm text-charcoal bg-white hover:bg-slate-100 transition-colors"
                        onClick={() => {
                          document.getElementById("contacto-form")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Consultar sobre este servicio
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
