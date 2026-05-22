import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MosaicHero from "@/app/home/components/MosaicHero";
import ServicesSection from "@/app/home/components/ServicesSection";
import CardGrid from "@/app/home/components/CardGrid";
import TestimonialsSection from "@/app/home/components/TestimonialsSection";
import BlueprintCTA from "@/app/home/components/BlueprintCTA";
import StickyCTABar from "@/app/home/components/StickyCTABar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* 1. Photo Grid Mosaic Hero */}
        <div className="pt-16">
          <MosaicHero />
        </div>

        {/* 2. Intro tagline strip */}
        <div
          className="py-8 px-4 text-center"
          style={{
            background: "var(--honey-light)",
            borderBottom: "3px solid var(--honey-gold)",
          }}
        >
          <p className="text-verde text-sm md:text-base font-medium max-w-3xl mx-auto leading-relaxed">
            Para dueños primerizos, familias con perros y amantes de los
            animales — adiestramiento, asesoramiento y acompañamiento canino con
            método, amor y resultados que perduran.
          </p>
        </div>

        {/* 3. Services Visual Tabs */}
        <ServicesSection />

        {/* 4. Modular Card Grid with Ribbons */}
        <CardGrid />

        {/* 5. Testimonials */}
        <TestimonialsSection />

        {/* 6. CTA + Contacto */}
        <BlueprintCTA />
      </main>

      <Footer />

      {/* Sticky bottom CTA */}
      <StickyCTABar triggerAfterCard={6} />
    </div>
  );
}
