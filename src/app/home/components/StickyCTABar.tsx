'use client';
import React, { useEffect, useState } from 'react';

interface StickyCTABarProps {
  triggerAfterCard: number;
}

const StickyCTABar: React.FC<StickyCTABarProps> = ({ triggerAfterCard }) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      const trigger = document.getElementById(`card-${triggerAfterCard}`);
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      if (rect.bottom < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed, triggerAfterCard]);

  if (dismissed) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 sticky-cta ${visible ? 'visible' : ''}`}>
      <div
        className="flex items-center justify-between gap-4 px-6 py-4 mx-4 mb-4 rounded-2xl shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #E8B800 0%, #C49A00 100%)',
          border: '2px solid rgba(200,40,30,0.45)',
        }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-2xl shrink-0">🐾</span>
          <div className="min-w-0">
            <p className="font-bold text-sm leading-tight truncate" style={{ color: '#1A1A1A' }}>
              Impronta Canina — Un aprendizaje que deja huella
            </p>
            <p className="text-xs" style={{ color: 'rgba(26,26,26,0.65)' }}>
              Adiestramiento · Asesoramiento · Cursos · Paseos · Traslados
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            className="btn-tangerine text-white font-bold text-sm px-5 py-2.5 rounded-xl whitespace-nowrap"
            onClick={() => {
              const el = document.getElementById('contacto');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Consulta Gratis
          </button>
          <button
            onClick={() => {
              setVisible(false);
              setDismissed(true);
            }}
            className="hover:opacity-70 transition-opacity p-1"
            style={{ color: '#1A1A1A' }}
            aria-label="Cerrar"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path
                d="M12 4L4 12M4 4l8 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTABar;
