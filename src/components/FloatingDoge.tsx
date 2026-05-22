'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Spline from '@splinetool/react-spline';

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
      <Spline 
        scene="https://prod.spline.design/s9g1TxN4LH2UhLFS6U10FRVI/scene.splinecode" 
        className="w-full h-full"
      />
    </div>
  );
}
