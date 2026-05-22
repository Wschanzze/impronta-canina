import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer
      className="border-t-4 py-16 px-4 md:px-8 bg-white"
      style={{ borderColor: "var(--honey-gold)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Left: Logo + tagline */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image
            src="/assets/images/f331e164-448f-4333-9346-824f8a6f981f-1779450193447.png"
            alt="Impronta Canina logo"
            width={140}
            height={140}
            className="object-contain"
          />
          <p
            className="text-sm font-bold mt-1 max-w-xs text-center md:text-left"
            style={{ color: "var(--tangerine)" }}
          >
            Un aprendizaje que deja huella.
          </p>
        </div>

        {/* Right: Links */}
        <div
          className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3 text-sm font-semibold"
          style={{ color: "var(--verde)" }}
        >
          <a
            href="#servicios"
            className="hover:text-honey-dark transition-colors"
            style={{ color: "var(--verde)" }}
          >
            Servicios
          </a>
          <a
            href="#adiestramiento"
            className="hover:text-honey-dark transition-colors"
            style={{ color: "var(--verde)" }}
          >
            Adiestramiento
          </a>
          <a
            href="#cursos"
            className="hover:text-honey-dark transition-colors"
            style={{ color: "var(--verde)" }}
          >
            Cursos
          </a>
          <a
            href="#paseos"
            className="hover:text-honey-dark transition-colors"
            style={{ color: "var(--verde)" }}
          >
            Paseos
          </a>
          <a
            href="#contacto"
            className="hover:text-honey-dark transition-colors"
            style={{ color: "var(--verde)" }}
          >
            Contacto
          </a>
          <a
            href="#"
            className="hover:text-honey-dark transition-colors"
            style={{ color: "var(--verde)" }}
          >
            Privacidad
          </a>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-medium"
        style={{
          borderTop: "1px solid rgba(232,184,0,0.3)",
          color: "var(--slate-mid)",
        }}
      >
        <span>© 2026 Impronta Canina. Todos los derechos reservados.</span>
        <span>Hecho con amor por y para los perros y sus familias.</span>
      </div>
    </footer>
  );
};

export default Footer;
