"use client";
import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

interface Tile {
  id: number;
  src: string;
  alt: string;
  colSpan: number;
  rowSpan: number;
  flipContent: "metodo" | "huella" | "vinculo" | null;
}

const tiles: Tile[] = [
  {
    id: 1,
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_106061221-1772093373316.png",
    alt: "Perro mirando atentamente a su entrenador durante sesión de adiestramiento",
    colSpan: 2,
    rowSpan: 2,
    flipContent: "metodo",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1612846392422-24282052e07a",
    alt: "Cachorro aprendiendo su primer comando con entusiasmo",
    colSpan: 1,
    rowSpan: 1,
    flipContent: null,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1665674065241-f7ffb6ee1cb4",
    alt: "Perro corriendo libre y feliz en el campo durante paseo",
    colSpan: 1,
    rowSpan: 2,
    flipContent: "huella",
  },
  {
    id: 4,
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1578a0b03-1772135240762.png",
    alt: "Perro adulto en posición de espera demostrando disciplina aprendida",
    colSpan: 1,
    rowSpan: 1,
    flipContent: null,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1701587444296-9e8ce7f988c5",
    alt: "Cachorro durmiendo tranquilo tras sesión de aprendizaje",
    colSpan: 1,
    rowSpan: 1,
    flipContent: null,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1526489550178-7bd5d9944f4f",
    alt: "Perro mirando con ojos expresivos y confianza a su dueño",
    colSpan: 2,
    rowSpan: 1,
    flipContent: "vinculo",
  },
  {
    id: 7,
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d5031510-1772135239889.png",
    alt: "Grupo de perros en clase de adiestramiento grupal",
    colSpan: 1,
    rowSpan: 2,
    flipContent: null,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1635377748692-131d82f9ff1a",
    alt: "Perro jugando y aprendiendo con juguete durante entrenamiento positivo",
    colSpan: 1,
    rowSpan: 1,
    flipContent: null,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1701722579310-e033b550d55e",
    alt: "Familia con su perro bien educado disfrutando del parque",
    colSpan: 1,
    rowSpan: 1,
    flipContent: null,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1605447730905-a567de50759b",
    alt: "Cachorro en primer día de curso de adiestramiento básico",
    colSpan: 2,
    rowSpan: 1,
    flipContent: null,
  },
];

const MetodoIcon: React.FC = () => (
  <svg
    viewBox="0 0 80 80"
    className="w-16 h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="40"
      cy="40"
      r="32"
      stroke="#E8B800"
      strokeWidth="2.5"
      fill="none"
      opacity="0.6"
    />
    <circle
      cx="40"
      cy="40"
      r="20"
      stroke="#C8281E"
      strokeWidth="2"
      fill="none"
      opacity="0.7"
    />
    <circle cx="40" cy="40" r="8" fill="#E8B800" opacity="0.9" />
    <line
      x1="40"
      y1="8"
      x2="40"
      y2="20"
      stroke="#FFFBEE"
      strokeWidth="2"
      opacity="0.7"
    />
    <line
      x1="40"
      y1="60"
      x2="40"
      y2="72"
      stroke="#FFFBEE"
      strokeWidth="2"
      opacity="0.7"
    />
    <line
      x1="8"
      y1="40"
      x2="20"
      y2="40"
      stroke="#FFFBEE"
      strokeWidth="2"
      opacity="0.7"
    />
    <line
      x1="60"
      y1="40"
      x2="72"
      y2="40"
      stroke="#FFFBEE"
      strokeWidth="2"
      opacity="0.7"
    />
  </svg>
);

const HuellaIcon: React.FC = () => (
  <svg
    viewBox="0 0 80 80"
    className="w-16 h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="40" cy="52" rx="18" ry="16" fill="#E8B800" opacity="0.85" />
    <ellipse cx="16" cy="32" rx="10" ry="12" fill="#E8B800" opacity="0.85" />
    <ellipse cx="64" cy="32" rx="10" ry="12" fill="#E8B800" opacity="0.85" />
    <ellipse cx="28" cy="20" rx="8" ry="10" fill="#FFFBEE" opacity="0.8" />
    <ellipse cx="52" cy="20" rx="8" ry="10" fill="#FFFBEE" opacity="0.8" />
  </svg>
);

const VinculoIcon: React.FC = () => (
  <svg
    viewBox="0 0 100 90"
    className="w-20 h-18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 80 C20 55 5 45 5 30 C5 15 18 8 30 8 C38 8 44 12 50 18 C56 12 62 8 70 8 C82 8 95 15 95 30 C95 45 80 55 50 80Z"
      fill="#C8281E"
      opacity="0.85"
    />
    <path
      d="M50 80 C35 60 25 50 25 35 L50 40 L75 35 C75 50 65 60 50 80Z"
      fill="#1A1A1A"
      opacity="0.3"
    />
    <line
      x1="50"
      y1="20"
      x2="50"
      y2="65"
      stroke="#FFFBEE"
      strokeWidth="1.5"
      opacity="0.6"
    />
    <line
      x1="30"
      y1="40"
      x2="70"
      y2="40"
      stroke="#FFFBEE"
      strokeWidth="1.5"
      opacity="0.6"
    />
    <circle cx="50" cy="40" r="5" fill="#FFFBEE" opacity="0.8" />
  </svg>
);

const MosaicHero: React.FC = () => {
  const flipIndices = [0, 2, 5]; // tiles with flipContent
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    flipIndices.forEach((idx, i) => {
      const flipIn = setTimeout(
        () => {
          const el = tileRefs.current[idx];
          if (el) el.classList.add("flipped");
        },
        1200 + i * 400,
      );

      const flipOut = setTimeout(
        () => {
          const el = tileRefs.current[idx];
          if (el) el.classList.remove("flipped");
        },
        3200 + i * 400,
      );

      timers.push(flipIn, flipOut);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#1A1A1A" }}
    >
      {/* Mosaic Grid */}
      <div
        className="grid mosaic-gap"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(3, 160px)",
          padding: "3px",
        }}
      >
        {/* Tile 1 — 2x2 */}
        <div
          className="mosaic-tile tile-wrapper"
          style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}
        >
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[0] = el;
            }}
          >
            <div className="tile-front">
              <AppImage
                src={tiles[0].src}
                alt={tiles[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="tile-back flex-col gap-3">
              <MetodoIcon />
              <p className="text-xs font-bold text-charcoal uppercase tracking-widest text-center px-4">
                Método Positivo
              </p>
            </div>
          </div>
        </div>

        {/* Tile 2 — 1x1 */}
        <div
          className="mosaic-tile tile-wrapper"
          style={{ gridColumn: "3", gridRow: "1" }}
        >
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[1] = el;
            }}
          >
            <div className="tile-front">
              <AppImage
                src={tiles[1].src}
                alt={tiles[1].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="tile-back">
              <span className="text-charcoal text-2xl">🐾</span>
            </div>
          </div>
        </div>

        {/* Tile 3 — 1x2 (huella) */}
        <div
          className="mosaic-tile tile-wrapper"
          style={{ gridColumn: "4", gridRow: "1 / 3" }}
        >
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[2] = el;
            }}
          >
            <div className="tile-front">
              <AppImage
                src={tiles[2].src}
                alt={tiles[2].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="tile-back flex-col gap-3">
              <HuellaIcon />
              <p className="text-xs font-bold text-charcoal uppercase tracking-widest text-center px-2">
                Deja Huella
              </p>
            </div>
          </div>
        </div>

        {/* Tile 4 — 1x1 */}
        <div
          className="mosaic-tile tile-wrapper"
          style={{ gridColumn: "3", gridRow: "2" }}
        >
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[3] = el;
            }}
          >
            <div className="tile-front">
              <AppImage
                src={tiles[3].src}
                alt={tiles[3].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="tile-back">
              <span className="text-charcoal text-2xl">🎓</span>
            </div>
          </div>
        </div>

        {/* Tile 5 — 1x1 */}
        <div
          className="mosaic-tile tile-wrapper"
          style={{ gridColumn: "1", gridRow: "3" }}
        >
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[4] = el;
            }}
          >
            <div className="tile-front">
              <AppImage
                src={tiles[4].src}
                alt={tiles[4].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="tile-back">
              <span className="text-charcoal text-2xl">💛</span>
            </div>
          </div>
        </div>

        {/* Tile 6 — 2x1 (vinculo) */}
        <div
          className="mosaic-tile tile-wrapper"
          style={{ gridColumn: "2 / 4", gridRow: "3" }}
        >
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[5] = el;
            }}
          >
            <div className="tile-front">
              <AppImage
                src={tiles[5].src}
                alt={tiles[5].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="tile-back flex-col gap-2">
              <VinculoIcon />
              <p className="text-xs font-bold text-charcoal uppercase tracking-widest text-center px-2">
                Vínculo Profundo
              </p>
            </div>
          </div>
        </div>

        {/* Tile 7 — 1x1 */}
        <div
          className="mosaic-tile tile-wrapper"
          style={{ gridColumn: "4", gridRow: "3" }}
        >
          <div
            className="tile-inner"
            ref={(el) => {
              tileRefs.current[6] = el;
            }}
          >
            <div className="tile-front">
              <AppImage
                src={tiles[6].src}
                alt={tiles[6].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="tile-back">
              <span className="text-charcoal text-2xl">🌿</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <div
          className="text-center px-6 py-8 rounded-3xl"
          style={{
            background: "rgba(232, 184, 0, 0.95)",
            backdropFilter: "blur(16px)",
            border: "3px solid rgba(200, 40, 30, 0.55)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.35)",
          }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 font-bold text-xs uppercase tracking-wide"
            style={{ background: "var(--tangerine)", color: "#ffffff" }}
          >
            🐾 Educación Canina Profesional
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-3"
            style={{ letterSpacing: "-0.02em", color: "#1A1A1A" }}
          >
            Un aprendizaje
            <br />
            <em style={{ color: "var(--tangerine)" }}>que deja huella.</em>
          </h1>
          <p
            className="text-base md:text-lg font-medium max-w-lg mx-auto"
            style={{ color: "rgba(26,26,26,0.75)" }}
          >
            Adiestramiento, asesoramiento y cursos caninos diseñados para
            transformar la relación entre tú y tu perro.
          </p>
        </div>
      </div>

      {/* Geometric border lines */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, var(--honey-gold), var(--tangerine), var(--verde), var(--honey-gold))",
        }}
      />
    </section>
  );
};

export default MosaicHero;
