import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MosaicHero from '@/app/home/components/MosaicHero';
import dynamic from 'next/dynamic';

const BrandPillars = dynamic(() => import('@/app/home/components/BrandPillars'));
const ServicesSection = dynamic(() => import('@/app/home/components/ServicesSection'));

const BlueprintCTA = dynamic(() => import('@/app/home/components/BlueprintCTA'));
const DidYouKnowRibbon = dynamic(() => import('@/app/home/components/DidYouKnowRibbon'));
const ClientsGallery = dynamic(() => import('@/app/home/components/ClientsGallery'));

export default function HomePage() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* 1. Photo Grid Mosaic Hero */}
        <div className="pt-16">
          <MosaicHero />
        </div>

        {/* 2. Brand Pillars & Values */}
        <BrandPillars />

        {/* Did You Know Ribbon #1 - Impronta */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 bg-white">
          <DidYouKnowRibbon
            fact="La palabra 'impronta' describe el período crítico en que un cachorro aprende a relacionarse con el mundo. Lo que se aprende en esas semanas deja una huella para toda la vida."
            temperature="warm"
            index={0}
          />
        </div>

        {/* 3. Services Visual Tabs */}
        <ServicesSection />



        {/* Did You Know Ribbon #2 - Obediencia */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 bg-white">
          <DidYouKnowRibbon
            fact="Los perros no desobedecen por capricho — desobedecen porque nadie les enseñó lo que se espera de ellos. El adiestramiento no cambia al perro: cambia la comunicación."
            temperature="cool"
            index={1}
          />
        </div>

        {/* Did You Know Ribbon #3 - Refuerzo Positivo */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 bg-white">
          <DidYouKnowRibbon
            fact="El refuerzo positivo no es solo dar premios. Es construir confianza, motivación y un vínculo basado en el respeto mutuo. Eso es lo que hace que el aprendizaje deje huella."
            temperature="hot"
            index={2}
          />
        </div>

        {/* Clients Gallery */}
        <ClientsGallery />

        {/* 7. CTA + Contacto */}
        <BlueprintCTA />
      </main>

      <Footer />
    </div>
  );
}
