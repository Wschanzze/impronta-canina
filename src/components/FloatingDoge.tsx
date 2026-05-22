'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function FloatingDoge() {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleClick = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contacto');
    }
  };

  useEffect(() => {
    const handleBlur = () => {
      // Damos un pequeño delay para asegurar que el navegador actualice document.activeElement
      setTimeout(() => {
        if (document.activeElement === iframeRef.current) {
          handleClick();
          // Devolvemos el foco a la ventana para permitir futuros clicks
          window.focus();
        }
      }, 150);
    };

    window.addEventListener('blur', handleBlur);
    return () => {
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <div 
      className="fixed bottom-[-60px] right-[-60px] w-[280px] h-[280px] z-[110] cursor-pointer hover:scale-105 transition-transform duration-300 rounded-full overflow-hidden"
      title="¡Hablemos!"
    >
      <iframe 
        ref={iframeRef}
        src="https://my.spline.design/doge-s9g1TxN4LH2UhLFS6U10FRVI/" 
        frameBorder="0" 
        width="100%" 
        height="100%" 
        className="w-full h-full rounded-full"
      />
    </div>
  );
}
