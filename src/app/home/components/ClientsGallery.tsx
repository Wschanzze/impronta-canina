'use client';
import React from 'react';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

interface DogClient {
  id: number;
  name: string;
  story: string;
  image: string;
  gridClasses: string;
}

const dogClients: DogClient[] = [
  {
    id: 1,
    name: 'Max',
    story:
      'Max destruía todos los muebles de la casa. Tras 4 semanas de adiestramiento en positivo, ahora canaliza su energía en juegos de olfato y largos paseos. ¡Un cambio de 180 grados!',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9',
    gridClasses: 'col-span-1 md:col-span-2 md:row-span-2', // Grande en Desktop
  },
  {
    id: 2,
    name: 'Luna',
    story:
      'Luna tenía terror a los ruidos fuertes y los coches. Con el protocolo de desensibilización, hoy pasea tranquila por el centro de la ciudad.',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
    gridClasses: 'col-span-1 md:col-span-1 md:row-span-1', // Normal
  },
  {
    id: 3,
    name: 'Rocky',
    story:
      'Reactividad extrema con otros perros. Nos tomó tiempo y paciencia, pero ahora Rocky puede cruzar la calle junto a otros peludos sin ladrar.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
    gridClasses: 'col-span-1 md:col-span-1 md:row-span-2', // Alto
  },
  {
    id: 4,
    name: 'Bella',
    story:
      'Tiraba de la correa hasta ahogarse. Aprendió a caminar junto a su dueño usando refuerzo positivo y ahora los paseos son el mejor momento del día.',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d',
    gridClasses: 'col-span-1 md:col-span-1 md:row-span-1', // Normal
  },
  {
    id: 5,
    name: 'Thor',
    story:
      'Ansiedad por separación. Lloraba sin parar cuando se quedaba solo. Creamos rutinas de independencia y hoy puede quedarse en casa relajado.',
    image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530',
    gridClasses: 'col-span-1 md:col-span-2 lg:col-span-1 md:row-span-1', // Ancho en Tablet, Normal en Desktop
  },
];

const BalloonDogIcon: React.FC<{ className?: string; color?: string }> = ({
  className,
  color = 'currentColor',
}) => (
  <svg viewBox="0 0 120 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="55" cy="42" rx="28" ry="16" fill={color} opacity="0.95" />
    <ellipse cx="84" cy="32" rx="14" ry="12" fill={color} opacity="0.95" />
    <ellipse cx="96" cy="36" rx="8" ry="6" fill={color} opacity="0.9" />
    <ellipse cx="103" cy="37" rx="3" ry="2.5" fill={color} opacity="0.8" />
    <ellipse
      cx="82"
      cy="22"
      rx="7"
      ry="9"
      fill={color}
      opacity="0.8"
      transform="rotate(-15 82 22)"
    />
    <rect x="62" y="54" width="8" height="14" rx="4" fill={color} opacity="0.9" />
    <rect x="74" y="54" width="8" height="14" rx="4" fill={color} opacity="0.9" />
    <rect x="34" y="54" width="8" height="14" rx="4" fill={color} opacity="0.9" />
    <rect x="44" y="54" width="8" height="14" rx="4" fill={color} opacity="0.9" />
    <path d="M28 40 Q10 25 15 15 Q18 8 22 12 Q20 20 30 30" fill={color} opacity="0.85" />
  </svg>
);

const PawPrintIcon: React.FC<{ className?: string; color?: string }> = ({
  className,
  color = 'currentColor',
}) => (
  <svg viewBox="0 0 24 24" className={className} fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14c-1.66 0-3 1.34-3 3 0 2 2 3.5 3 3.5s3-1.5 3-3.5c0-1.66-1.34-3-3-3z" />
    <circle cx="7" cy="11" r="2" />
    <circle cx="10.5" cy="8" r="2" />
    <circle cx="13.5" cy="8" r="2" />
    <circle cx="17" cy="11" r="2" />
  </svg>
);

const ClientsGallery: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-block tag-badge px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-4"
            style={{ background: 'var(--verde)', color: '#ffffff' }}
          >
            Nuestros Clientes
          </div>
          <h2
            className="font-serif font-bold text-3xl md:text-5xl leading-tight"
            style={{ color: 'var(--charcoal)' }}
          >
            Cada foto cuenta una <span style={{ color: 'var(--tangerine)' }}>historia.</span>
          </h2>
          <p className="text-slate-500 font-medium mt-4 max-w-2xl mx-auto">
            Detrás de cada perro feliz hay dedicación, paciencia y mucho amor. Descubre las
            historias de los peludos que pasaron por Impronta Canina.
          </p>
        </motion.div>

        {/* Stable CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {dogClients.map((dog, index) => (
            <motion.div
              key={dog.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl group shadow-lg overflow-hidden ${dog.gridClasses}`}
            >
              {/* Balloon Dog / Paw Icon POP-UP on top border when hovering */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-20">
                <div
                  className="px-2.5 py-1 rounded-full bg-white shadow-md border flex items-center justify-center"
                  style={{ borderColor: 'var(--honey-gold)' }}
                >
                  {index % 2 === 0 ? (
                    <BalloonDogIcon className="w-7 h-4" color="var(--honey-gold)" />
                  ) : (
                    <PawPrintIcon className="w-4 h-4" color="var(--honey-gold)" />
                  )}
                </div>
              </div>

              {/* Inner wrapper to support overflow clipping of rounded corners */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden w-full h-full">
                <AppImage
                  src={dog.image}
                  alt={dog.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay y Texto (Aparece en Hover) */}
                <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-2xl font-bold text-honey-gold mb-2">
                      {dog.name}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
                      {dog.story}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsGallery;
