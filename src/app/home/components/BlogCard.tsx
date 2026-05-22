"use client";
import React, { useState } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

export type CardTemperature = "warm" | "neutral" | "cool";
export type MicroAnimation = "paw" | "stat" | "geo";

export interface BlogCardData {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  temperature: CardTemperature;
  microAnimation: MicroAnimation;
  statLabel?: string;
  statValue?: string;
  tag?: string;
}

interface BlogCardProps {
  card: BlogCardData;
}

// Logo-inspired temperature styles:
// warm = yellow/red (primary brand)
// neutral = green touch (sage)
// cool = bright green (verde)
const temperatureStyles: Record<
  CardTemperature,
  { accent: string; bg: string; tagBg: string; tagText: string }
> = {
  warm: {
    accent: "#C8281E", // logo red
    bg: "#E8B800", // logo yellow
    tagBg: "#FFF5CC", // honey-light
    tagText: "#A01F16", // tangerine-dark
  },
  neutral: {
    accent: "#4A7C59", // sage green
    bg: "#5A9068",
    tagBg: "#E8F2EC", // sage-light
    tagText: "#3A6347",
  },
  cool: {
    accent: "#1B7A3E", // verde
    bg: "#2E9E55", // verde-mid
    tagBg: "#D4F5E2", // verde-pale
    tagText: "#145E2F", // verde-dark
  },
};

const PawStamp: React.FC<{ color: string }> = ({ color }) => (
  <svg
    viewBox="0 0 40 40"
    className="w-10 h-10 paw-stamp absolute top-3 right-3 z-10"
    fill={color}
    opacity="0.85"
  >
    <ellipse cx="20" cy="26" rx="9" ry="8" />
    <ellipse cx="8" cy="16" rx="5" ry="6" />
    <ellipse cx="32" cy="16" rx="5" ry="6" />
    <ellipse cx="14" cy="10" rx="4" ry="5" />
    <ellipse cx="26" cy="10" rx="4" ry="5" />
  </svg>
);

const GeoPattern: React.FC<{ color: string }> = ({ color }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg
      viewBox="0 0 200 200"
      className="absolute -right-8 -bottom-8 w-32 h-32 geo-rotate opacity-10"
      fill="none"
    >
      <polygon
        points="100,10 190,55 190,145 100,190 10,145 10,55"
        stroke={color}
        strokeWidth="2"
      />
      <polygon
        points="100,30 170,65 170,135 100,170 30,135 30,65"
        stroke={color}
        strokeWidth="2"
      />
      <polygon
        points="100,50 150,75 150,125 100,150 50,125 50,75"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  </div>
);

const BlogCard: React.FC<BlogCardProps> = ({ card }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [statDisplayed, setStatDisplayed] = React.useState(false);
  const styles = temperatureStyles[card.temperature];

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (card.microAnimation === "stat" && !statDisplayed) {
      setStatDisplayed(true);
    }
  };

  return (
    <article
      className="blog-card relative bg-white rounded-3xl overflow-hidden shadow-card cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? "0 12px 40px rgba(26, 26, 26, 0.14)"
          : "0 4px 20px rgba(26, 26, 26, 0.08)",
      }}
    >
      {/* Geo pattern background */}
      {card.microAnimation === "geo" && <GeoPattern color={styles.accent} />}

      {/* Paw stamp */}
      {card.microAnimation === "paw" && <PawStamp color={styles.accent} />}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={card.image}
          alt={card.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category badge */}
        <div
          className="absolute top-3 left-3 tag-badge px-3 py-1 rounded-full text-xs font-bold"
          style={{ background: styles.tagBg, color: styles.tagText }}
        >
          {card.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 relative z-10">
        <h3
          className="font-serif font-bold text-lg leading-tight mb-2 text-charcoal group-hover:text-graphite transition-colors"
          style={{ letterSpacing: "-0.01em" }}
        >
          {card.title}
        </h3>
        <p className="text-sm text-slate-mid leading-relaxed mb-4 line-clamp-2">
          {card.excerpt}
        </p>

        {/* Stat reveal (on hover) */}
        {card.microAnimation === "stat" && card.statValue && (
          <div className="stat-reveal flex items-center gap-2 mb-3">
            <div
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: styles.tagBg, color: styles.accent }}
            >
              {card.statValue} {card.statLabel}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-xs text-silver font-medium flex items-center gap-1">
            <Icon name="ClockIcon" size={12} className="opacity-60" />
            {card.readTime}
          </span>
          <button
            className="flex items-center gap-1 text-xs font-bold transition-all"
            style={{ color: styles.accent }}
          >
            Leer más
            <Icon name="ArrowRightIcon" size={12} />
          </button>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, ${styles.bg}, ${styles.accent})`,
        }}
      />
    </article>
  );
};

export default BlogCard;
