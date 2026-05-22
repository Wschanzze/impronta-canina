'use client';
import React from 'react';

interface RibbonProps {
  fact: string;
  temperature: 'warm' | 'cool' | 'hot';
  index: number;
}

const GoldenSilhouette: React.FC<{ color: string }> = ({ color }) => (
  <svg
    viewBox="0 0 120 70"
    className="golden-silhouette"
    width="120"
    height="70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="55" cy="42" rx="28" ry="16" fill={color} opacity="0.9" />
    <ellipse cx="84" cy="32" rx="14" ry="12" fill={color} opacity="0.9" />
    <ellipse cx="96" cy="36" rx="8" ry="6" fill={color} opacity="0.85" />
    <ellipse cx="103" cy="37" rx="3" ry="2.5" fill={color} opacity="0.7" />
    <ellipse
      cx="82"
      cy="22"
      rx="7"
      ry="9"
      fill={color}
      opacity="0.7"
      transform="rotate(-15 82 22)"
    />
    <rect x="62" y="54" width="8" height="14" rx="4" fill={color} opacity="0.85" />
    <rect x="74" y="54" width="8" height="14" rx="4" fill={color} opacity="0.85" />
    <rect x="34" y="54" width="8" height="14" rx="4" fill={color} opacity="0.85" />
    <rect x="44" y="54" width="8" height="14" rx="4" fill={color} opacity="0.85" />
    <path
      d="M28 40 Q10 25 15 15 Q18 8 22 12 Q20 20 30 30"
      fill={color}
      opacity="0.8"
      className="golden-tail"
    />
  </svg>
);

const GeometricHex: React.FC<{ color: string }> = ({ color }) => (
  <svg viewBox="0 0 60 60" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="hex-outer">
      <polygon
        points="30,3 55,17 55,43 30,57 5,43 5,17"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
    </g>
    <g className="hex-inner">
      <polygon
        points="30,12 48,22 48,38 30,48 12,38 12,22"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
    </g>
    <circle cx="30" cy="30" r="5" fill={color} opacity="0.8" />
  </svg>
);

const DidYouKnowRibbon: React.FC<RibbonProps> = ({ fact, temperature, index }) => {
  let bg = '';
  let silhouetteColor = '';
  let hexColor = '';
  let textColor = '';
  let badgeBg = '';
  let badgeText = '';

  if (temperature === 'warm') {
    // Amarillo / Dorado
    bg = 'linear-gradient(135deg, #E8B800 0%, #C49A00 60%, #A88000 100%)';
    silhouetteColor = '#1A1A1A';
    hexColor = 'rgba(26,26,26,0.35)';
    textColor = '#1A1A1A';
    badgeBg = 'var(--tangerine)';
    badgeText = '#ffffff';
  } else if (temperature === 'cool') {
    // Verde
    bg = 'linear-gradient(135deg, #1B7A3E 0%, #145E2F 60%, #0F4A25 100%)';
    silhouetteColor = '#E8B800';
    hexColor = 'rgba(232,184,0,0.45)';
    textColor = '#FFFFFF';
    badgeBg = 'rgba(232,184,0,0.22)';
    badgeText = '#E8B800';
  } else if (temperature === 'hot') {
    // Rojo
    bg = 'linear-gradient(135deg, #C8281E 0%, #A01F16 60%, #80160F 100%)';
    silhouetteColor = '#E8B800';
    hexColor = 'rgba(232,184,0,0.45)';
    textColor = '#FFFFFF';
    badgeBg = 'rgba(232,184,0,0.22)';
    badgeText = '#E8B800';
  }

  return (
    <div
      className="w-full rounded-3xl overflow-hidden relative flex items-center justify-between px-8 md:px-16 py-10 gap-6"
      style={{ background: bg, minHeight: '120px' }}
    >
      {/* Left geometric decorations */}
      <div className="hidden md:flex items-center gap-4 shrink-0">
        <GeometricHex color={hexColor} />
        <GoldenSilhouette color={silhouetteColor} />
      </div>

      {/* Center fact */}
      <div className="flex-1 text-center">
        <div
          className="inline-block tag-badge px-4 py-1 rounded-full mb-3 font-bold"
          style={{
            background: badgeBg,
            color: badgeText,
          }}
        >
          🐾 ¿Sabías que? #{index + 1}
        </div>
        <p
          className="font-serif font-bold text-lg md:text-xl leading-snug max-w-2xl mx-auto"
          style={{ letterSpacing: '-0.01em', color: textColor }}
        >
          {fact}
        </p>
      </div>

      {/* Right decorations */}
      <div
        className="hidden md:flex items-center gap-4 shrink-0"
        style={{ transform: 'scaleX(-1)' }}
      >
        <GoldenSilhouette color={silhouetteColor} />
        <GeometricHex color={hexColor} />
      </div>
    </div>
  );
};

export default DidYouKnowRibbon;
