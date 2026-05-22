import React from "react";
import Image from "next/image";
import Icon from "@/components/ui/AppIcon";

const Footer: React.FC = () => {
  return (
    <footer
      className="pt-20 pb-10 px-4 md:px-8 relative overflow-hidden text-white"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-verde/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-honey-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Columna 1: Logo e Info (Ocupa más espacio en desktop) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Contenedor blanco para el logo transparente */}
            <div className="bg-white p-4 rounded-2xl shadow-xl mb-6 inline-block">
              <Image
                src="/assets/images/f331e164-448f-4333-9346-824f8a6f981f-1779450193447.png"
                alt="Impronta Canina logo"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
              Más que adiestramiento, construimos relaciones sanas y duraderas entre las familias y sus perros a través del respeto y el refuerzo positivo.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-honey-gold hover:text-charcoal transition-all duration-300">
                {/* SVG genérico de Instagram para no depender de iconos externos específicos */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tangerine hover:text-white transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-verde hover:text-white transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="lg:col-span-3 lg:col-start-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-honey-gold font-bold text-lg mb-6">Explorar</h4>
            <ul className="space-y-4">
              <li><a href="#servicios" className="text-slate-300 hover:text-white transition-colors">Nuestros Servicios</a></li>
              <li><a href="#adiestramiento" className="text-slate-300 hover:text-white transition-colors">Adiestramiento Positivo</a></li>
              <li><a href="#cursos" className="text-slate-300 hover:text-white transition-colors">Cursos Grupales</a></li>
              <li><a href="#testimonios" className="text-slate-300 hover:text-white transition-colors">Historias de Éxito</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-honey-gold font-bold text-lg mb-6">Contacto Directo</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Icon name="MapPinIcon" size={18} className="text-tangerine shrink-0" />
                <span>Buenos Aires, Argentina (Atención a domicilio)</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Icon name="PhoneIcon" size={18} className="text-tangerine shrink-0" />
                <span>+54 9 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Icon name="EnvelopeIcon" size={18} className="text-tangerine shrink-0" />
                <span>hola@improntacanina.com</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start mt-2">
                <Icon name="ClockIcon" size={18} className="text-tangerine shrink-0" />
                <span>Lun - Sab: 09:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium border-t border-white/10 text-slate-400">
          <p>© 2026 Impronta Canina. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-honey-gold transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-honey-gold transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
