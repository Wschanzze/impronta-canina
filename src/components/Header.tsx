"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Adiestramiento", href: "#adiestramiento" },
    { name: "Cursos", href: "#cursos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-warm-md border-b border-honey-gold/20 py-2"
            : "bg-white/95 border-b border-verde/10 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="cursor-pointer flex items-center" onClick={() => router.push("/")}>
            <Image
              src="/assets/images/b7d66566-7b41-43ea-9cc1-dd65415791db-1779449981971.png"
              alt="Impronta Canina logo"
              width={140}
              height={45}
              className={`object-contain transition-all duration-500 ease-in-out ${
                scrolled ? "h-10" : "h-12 md:h-14"
              } w-auto`}
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-verde-dark">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group transition-colors hover:text-tangerine"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tangerine transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <button
              className="btn-tangerine text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-tangerine-glow transition-transform hover:scale-105 active:scale-95"
              onClick={() => {
                const el = document.getElementById("contacto");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Consulta Gratuita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 text-verde-dark hover:text-tangerine transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[70px] left-0 right-0 z-[90] bg-white border-b border-verde/10 shadow-lg md:hidden"
          >
            <div className="flex flex-col px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-lg font-semibold text-verde-dark hover:bg-honey-light/50 hover:text-tangerine rounded-xl transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-4">
                <button
                  className="w-full btn-tangerine text-white text-base font-bold px-6 py-3 rounded-xl shadow-tangerine-glow"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById("contacto");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Consulta Gratuita
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
