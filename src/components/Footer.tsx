import React from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

const Footer: React.FC = () => {
  return (
    <>
      <footer
        className="py-12 px-4 md:px-8 relative overflow-hidden text-white border-t border-white/5"
        style={{ backgroundColor: 'var(--verde)' }}
      >
        {/* Background soft glowing lights */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-6">
            {/* Column 1: Small Logo, Short Bio, Social Links */}
            <div className="lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-white/95 p-2 px-3.5 rounded-xl shadow-md mb-4 inline-block border border-white/20">
                <Image
                  src="/assets/images/f331e164-448f-4333-9346-824f8a6f981f-1779450193447.png"
                  alt="Impronta Canina logo"
                  width={100}
                  height={35}
                  className="object-contain"
                />
              </div>
              <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-6 max-w-sm font-medium">
                Entendemos la educación canina como esa huella en el aprendizaje que forma una estructura emocional sólida y de confianza mutua.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {[
                  {
                    href: '#',
                    svg: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    ),
                  },
                  {
                    href: '#',
                    svg: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    ),
                  },
                  {
                    href: '#',
                    svg: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    ),
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-8.5 h-8.5 rounded-lg bg-white/10 flex items-center justify-center text-white/90 hover:bg-white hover:text-verde hover:scale-105 transition-all duration-300"
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4 pb-1.5 border-b border-white/20 w-full md:w-auto">
                Explorar
              </h4>
              <ul className="space-y-2 text-xs md:text-sm font-medium">
                {[
                  { label: 'Nuestros Servicios', href: '/#servicios' },
                  { label: 'Cursos Grupales', href: '/cursos' },
                  { label: 'Transporte Canino', href: '/#transporte-detalle' },
                  { label: 'Historias de Éxito', href: '/#testimonios' },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/80 hover:text-white transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4 pb-1.5 border-b border-white/20 w-full md:w-auto">
                Contacto
              </h4>
              <ul className="space-y-3 text-white/85 text-xs md:text-sm font-medium">
                <li className="flex items-center gap-2.5 justify-center md:justify-start">
                  <Icon name="MapPinIcon" size={16} className="text-white/70 shrink-0" />
                  <span>Tandil, Buenos Aires, Argentina</span>
                </li>
                <li className="flex items-center gap-2.5 justify-center md:justify-start">
                  <Icon name="PhoneIcon" size={16} className="text-white/70 shrink-0" />
                  <span>+54 9 11 1234-5678</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar: Separate white background strip */}
      <div className="bg-white border-t border-slate-200 py-6 px-4 md:px-8 text-[11px] font-medium text-slate-500 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Impronta Canina. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-1.5">
            <span>Creado por</span>
            <a
              href="https://www.notanother.company/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-verde transition-colors font-bold text-charcoal"
            >
              <span>Not another consultora</span>
              <Image
                src="/assets/images/Gemini_Generated_Image_b89zf1b89zf1b89z__1_-removebg-preview.png"
                alt="Not another consultora logo"
                width={18}
                height={18}
                className="object-contain inline-block ml-0.5 filter brightness-90"
              />
            </a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-charcoal transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-charcoal transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
