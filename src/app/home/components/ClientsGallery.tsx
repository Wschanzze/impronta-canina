"use client";
import React from "react";
import { motion } from "framer-motion";
import AppImage from "@/components/ui/AppImage";

interface DogClient {
  id: number;
  name: string;
  story: string;
  image: string;
  gridArea: string;
}

const dogClients: DogClient[] = [
  {
    id: 1,
    name: "Max",
    story: "Max destruía todos los muebles de la casa. Tras 4 semanas de adiestramiento en positivo, ahora canaliza su energía en juegos de olfato y largos paseos. ¡Un cambio de 180 grados!",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9",
    gridArea: "span 2 / span 2", // Grande
  },
  {
    id: 2,
    name: "Luna",
    story: "Luna tenía terror a los ruidos fuertes y los coches. Con el protocolo de desensibilización, hoy pasea tranquila por el centro de la ciudad.",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    gridArea: "span 1 / span 2", // Ancho
  },
  {
    id: 3,
    name: "Rocky",
    story: "Reactividad extrema con otros perros. Nos tomó tiempo y paciencia, pero ahora Rocky puede cruzar la calle junto a otros peludos sin ladrar.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    gridArea: "span 2 / span 1", // Alto
  },
  {
    id: 4,
    name: "Bella",
    story: "Tiraba de la correa hasta ahogarse. Aprendió a caminar junto a su dueño usando refuerzo positivo y ahora los paseos son el mejor momento del día.",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
    gridArea: "span 1 / span 1", // Pequeño
  },
  {
    id: 5,
    name: "Thor",
    story: "Ansiedad por separación. Lloraba sin parar cuando se quedaba solo. Creamos rutinas de independencia y hoy puede quedarse en casa relajado.",
    image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530",
    gridArea: "span 1 / span 2", // Ancho
  },
];

const ClientsGallery: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-block tag-badge px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-4"
            style={{ background: "var(--verde)", color: "#ffffff" }}
          >
            Nuestros Clientes
          </div>
          <h2
            className="font-serif font-bold text-3xl md:text-5xl leading-tight"
            style={{ color: "var(--charcoal)" }}
          >
            Cada foto cuenta una{" "}
            <span style={{ color: "var(--tangerine)" }}>historia.</span>
          </h2>
          <p className="text-slate-500 font-medium mt-4 max-w-2xl mx-auto">
            Detrás de cada perro feliz hay dedicación, paciencia y mucho amor. Descubre las historias de los peludos que pasaron por Impronta Canina.
          </p>
        </motion.div>

        {/* Masonry-like Grid */}
        <div
          className="grid gap-4 md:gap-6 auto-rows-[200px]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {dogClients.map((dog, index) => (
            <motion.div
              key={dog.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-3xl overflow-hidden group shadow-lg"
              style={{
                gridArea: typeof window !== "undefined" && window.innerWidth >= 768 ? dog.gridArea : "auto",
                minHeight: "250px",
              }}
            >
              <AppImage
                src={dog.image}
                alt={dog.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay y Texto (Aparece en Hover) */}
              <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <h3 className="font-serif text-2xl font-bold text-honey-gold mb-2">
                    {dog.name}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
                    {dog.story}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsGallery;
