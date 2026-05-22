'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-md shadow-verde-glow border-b border-verde/20'
          : 'bg-white border-b border-verde/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => router.push('/')}>
          <Image
            src="/assets/images/b7d66566-7b41-43ea-9cc1-dd65415791db-1779449981971.png"
            alt="Impronta Canina logo"
            width={120}
            height={40}
            className="object-contain h-10 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold" style={{ color: 'var(--verde)' }}>
          <a href="#servicios" className="transition-colors hover:opacity-70">Servicios</a>
          <a href="#adiestramiento" className="transition-colors hover:opacity-70">Adiestramiento</a>
          <a href="#cursos" className="transition-colors hover:opacity-70">Cursos</a>
          <a href="#contacto" className="transition-colors hover:opacity-70">Contacto</a>
        </div>

        <button
          className="btn-tangerine text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-tangerine-glow"
          onClick={() => {
            const el = document.getElementById('contacto');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Consulta Gratuita
        </button>
      </div>
    </nav>
  );
};

export default Header;