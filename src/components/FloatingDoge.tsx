'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function FloatingDoge() {
  const router = useRouter();

  const handleClick = () => {
    // Si estamos en la misma página y existe el elemento
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si estamos en otra página, navegamos a home#contacto
      router.push('/#contacto');
    }
  };

  return (
    <div 
      className="fixed bottom-6 right-6 w-32 h-32 md:w-40 md:h-40 z-[110] cursor-pointer hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
      onClick={handleClick}
      title="¡Hablemos!"
    >
      {/* Spline iframe con pointer-events-none para que el contenedor reciba el click */}
      <iframe 
        src="https://my.spline.design/doge-s9g1TxN4LH2UhLFS6U10FRVI/" 
        frameBorder="0" 
        width="100%" 
        height="100%" 
        className="w-full h-full rounded-full pointer-events-none"
      />
      {/* Capa transparente por encima para asegurar la captura de eventos */}
      <div className="absolute inset-0 z-10 rounded-full" />
    </div>
  );
}
