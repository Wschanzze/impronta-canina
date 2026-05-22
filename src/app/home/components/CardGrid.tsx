"use client";
import React from "react";
import { motion } from "framer-motion";
import BlogCard, { BlogCardData } from "./BlogCard";
import DidYouKnowRibbon from "./DidYouKnowRibbon";

const cardData: BlogCardData[] = [
  // Row 1 — Adiestramiento
  {
    id: 1,
    title: "¿Por qué mi perro no me hace caso cuando más lo necesito?",
    excerpt:
      "La desobediencia no es rebeldía — es falta de comunicación. Descubrí cómo el adiestramiento positivo transforma la relación con tu perro desde la primera sesión.",
    category: "Adiestramiento",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    imageAlt:
      "Perro prestando atención a su entrenador durante sesión de adiestramiento al aire libre",
    temperature: "warm",
    microAnimation: "paw",
    tag: "Básico",
  },
  {
    id: 2,
    title: "Los 5 comandos que todo perro debería aprender primero",
    excerpt:
      "Sentado, quieto, ven, suelta y no. Estos cinco comandos son la base de una convivencia armoniosa y el punto de partida de cualquier proceso de educación canina.",
    category: "Adiestramiento",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd",
    imageAlt:
      "Perro en posición sentado mirando a su dueño con atención durante entrenamiento",
    temperature: "warm",
    microAnimation: "geo",
    statLabel: "perros entrenados con este método",
    statValue: "+500",
    tag: "Esencial",
  },
  {
    id: 3,
    title: "Refuerzo positivo: el método que cambia todo",
    excerpt:
      "Premiar lo que queremos ver repetido es la base de la ciencia del comportamiento animal. Conocé por qué el refuerzo positivo es más efectivo y más humano.",
    category: "Método",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    imageAlt:
      "Entrenador premiando a perro con snack tras ejecutar comando correctamente",
    temperature: "warm",
    microAnimation: "stat",
    statLabel: "de efectividad a largo plazo",
    statValue: "94%",
    tag: "Método",
  },
  // Row 2 — Asesoramiento y Cursos
  {
    id: 4,
    title: "Asesoramiento personalizado: cada perro es único",
    excerpt:
      "No existe una solución universal. Nuestro asesoramiento analiza la historia, el temperamento y el entorno de tu perro para diseñar un plan a medida.",
    category: "Asesoramiento",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6",
    imageAlt:
      "Profesional canino conversando con dueño de perro durante sesión de asesoramiento",
    temperature: "warm",
    microAnimation: "paw",
    tag: "Personalizado",
  },
  {
    id: 5,
    title: "Cursos grupales: aprender en comunidad",
    excerpt:
      "Los cursos grupales no solo enseñan comandos — también socializan a tu perro con otros animales y personas, una habilidad fundamental para su bienestar.",
    category: "Cursos",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1560743641-3914f2c45636",
    imageAlt:
      "Grupo de perros y sus dueños participando en clase de adiestramiento grupal en parque",
    temperature: "neutral",
    microAnimation: "geo",
    statLabel: "alumnos en nuestros cursos",
    statValue: "+200",
    tag: "Grupal",
  },
  {
    id: 6,
    title: "Curso de obediencia básica: el primer gran paso",
    excerpt:
      "Diseñado para perros de todas las edades y razas, nuestro curso de obediencia básica sienta las bases de una convivencia feliz y sin conflictos.",
    category: "Cursos",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9",
    imageAlt:
      "Perro joven aprendiendo obediencia básica con entrenador profesional en sesión individual",
    temperature: "neutral",
    microAnimation: "stat",
    statLabel: "semanas para resultados visibles",
    statValue: "4-6",
    tag: "Obediencia",
  },
  // Row 3 — Paseos y Traslados
  {
    id: 7,
    title: "Paseos caninos: mucho más que un simple paseo",
    excerpt:
      "Un paseo bien conducido estimula la mente, libera energía y refuerza el vínculo. Nuestros paseadores están formados en comportamiento canino para garantizar una experiencia segura.",
    category: "Paseos",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8",
    imageAlt:
      "Paseador profesional caminando con varios perros felices por sendero del parque",
    temperature: "neutral",
    microAnimation: "paw",
    tag: "Paseos",
  },
  {
    id: 8,
    title: "Traslados seguros: tu perro en buenas manos",
    excerpt:
      "Llevamos a tu perro al veterinario, al groomer o a donde necesites con total seguridad y cuidado. Vehículo adaptado, trato profesional y actualizaciones en tiempo real.",
    category: "Traslados",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    imageAlt:
      "Perro tranquilo y seguro en vehículo adaptado para traslado canino profesional",
    temperature: "cool",
    microAnimation: "geo",
    statLabel: "traslados realizados sin incidentes",
    statValue: "100%",
    tag: "Traslados",
  },
  {
    id: 9,
    title: "¿Qué es la impronta canina y por qué importa?",
    excerpt:
      "La impronta es el período crítico en el que un cachorro aprende quién es y cómo relacionarse con el mundo. Entender este proceso es la clave de todo lo que hacemos.",
    category: "Educación",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1612846392422-24282052e07a",
    imageAlt:
      "Cachorro en período de impronta explorando su entorno con curiosidad y confianza",
    temperature: "cool",
    microAnimation: "stat",
    statLabel: "semanas de período crítico de impronta",
    statValue: "3-12",
    tag: "Fundamentos",
  },
  {
    id: 10,
    title: "Problemas de conducta: ansiedad, agresividad y miedos",
    excerpt:
      "La mayoría de los problemas de conducta tienen solución con el enfoque correcto. Trabajamos con perros con ansiedad por separación, reactividad y miedos con protocolos específicos.",
    category: "Conducta",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    imageAlt:
      "Perro ansioso siendo trabajado con técnicas de desensibilización por especialista canino",
    temperature: "cool",
    microAnimation: "paw",
    tag: "Conducta",
  },
  {
    id: 11,
    title: "Socialización temprana: la inversión más importante",
    excerpt:
      "Un cachorro bien socializado entre las 3 y 12 semanas de vida tiene muchas más probabilidades de convertirse en un perro equilibrado y confiado. Así lo hacemos.",
    category: "Cachorros",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    imageAlt:
      "Cachorro interactuando positivamente con personas y otros perros en clase de socialización",
    temperature: "cool",
    microAnimation: "geo",
    statLabel: "de problemas evitables con buena socialización",
    statValue: "80%",
    tag: "Cachorros",
  },
  {
    id: 12,
    title: "El vínculo humano-canino: la base de todo",
    excerpt:
      "No entrenamos perros — construimos relaciones. Cuando el vínculo entre humano y perro es sólido, el aprendizaje fluye de manera natural y los resultados son duraderos.",
    category: "Vínculo",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd",
    imageAlt:
      "Dueño y perro mirándose con confianza y afecto tras sesión de adiestramiento exitosa",
    temperature: "cool",
    microAnimation: "stat",
    statLabel: "de nuestros clientes repiten o recomiendan",
    statValue: "97%",
    tag: "Vínculo",
  },
];

const ribbonFacts = [
  "La palabra 'impronta' describe el período crítico en que un cachorro aprende a relacionarse con el mundo. Lo que se aprende en esas semanas deja una huella para toda la vida.",
  "Los perros no desobedecen por capricho — desobedecen porque nadie les enseñó lo que se espera de ellos. El adiestramiento no cambia al perro: cambia la comunicación.",
  "El refuerzo positivo no es solo dar premios. Es construir confianza, motivación y un vínculo basado en el respeto mutuo. Eso es lo que hace que el aprendizaje deje huella.",
];

const CARDS_PER_ROW = 3;

const CardGrid: React.FC = () => {
  const rows: BlogCardData[][] = [];
  for (let i = 0; i < cardData.length; i += CARDS_PER_ROW) {
    rows.push(cardData.slice(i, i + CARDS_PER_ROW));
  }

  let cardIndex = 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="servicios"
      className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-8 bg-white"
    >
      {rows.map((row, rowIdx) => (
        <React.Fragment key={rowIdx}>
          {/* Card row */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {row.map((card) => {
              cardIndex++;
              return (
                <motion.div variants={cardVariants} key={card.id} id={`card-${cardIndex}`}>
                  <BlogCard card={card} />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Ribbon after every row */}
          {rowIdx < ribbonFacts.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <DidYouKnowRibbon
                fact={ribbonFacts[rowIdx]}
                temperature={rowIdx < 1 ? "warm" : "cool"}
                index={rowIdx}
              />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default CardGrid;
