import type { ExperienceItem } from "@/lib/types";

export const BLAZE_MOTION_PROJECT: ExperienceItem = {
  id: "blaze-motion",
  title: "Blaze Motion — Librería de Animaciones para React",
  role: "Desarrollador de Software",
  company: "Proyecto Propio",
  period: "2026 - Presente",
  shortDesc:
    "Librería de código abierto con presets de animaciones y componentes listos para usar sobre Motion (Framer Motion).",

  fullDesc:
    "Blaze Motion es una librería de código abierto que proporciona presets de animaciones fluidas y componentes listos para usar, construidos sobre Motion (anteriormente Framer Motion). El proyecto busca simplificar la implementación de animaciones profesionales en aplicaciones React, ofreciendo una API intuitiva y flexible. Crear animaciones fluidas y profesionales en React puede ser tedioso: configurar manualmente cada animación desde cero, calcular distancias, duraciones y funciones de easing, implementar efectos complejos como stagger o textos animados, y mantener consistencia visual entre múltiples componentes. Blaze Motion elimina esta fricción al proporcionar soluciones probadas y listas para producción.",

  challenges: [
    {
      title: "API Pública desde el Inicio",
      problem: "Construir una librería reusable sin pensar en la API pública desde el inicio causaría fricción para los usuarios.",
      solution:
        "Diseñé la API pensando en los desarrolladores desde el inicio, creando funciones tipo factory (fade, parentVariants) que son intuitivas y flexibles, permitiendo configuración sin sacrificar simplicidad.",
    },
    {
      title: "Documentación como Producto",
      problem: "Una librería sin documentación es prácticamente inutilizable.",
      solution:
        "Creé un sitio de documentación completo con TanStack Start (SSR + TanStack Router), incluyendo ejemplos interactivos en vivo, landing page profesional y navegación lateral responsive.",
    },
    {
      title: "Build y Distribución",
      problem: "Configurar el build para generar tipos TypeScript y bundle optimizado sin complicar el desarrollo.",
      solution:
        "Utilicé Tsup para la generación automática de tipos .d.ts y bundle optimizado, configuré workspaces npm para el monorepo.",
    },
    {
      title: "Velocidad en Desarrollo",
      problem: "El workflow de desarrollo y build necesitaba ser lo más rápido posible.",
      solution:
        "Adopté Bun como runtime para velocidad en desarrollo y build, reduciendo significativamente los tiempos de iteración comparado con Node.js.",
    },
  ],

  mockup: "./images/blaze-motion.webp",

  impact: [
    "API estable con versionamiento semántico (v1.x).",
    "Documentación completa en español.",
    "Comunidad activa en GitHub.",
    "Monorepo modular con paquetes separados para la librería y la documentación.",
  ],

  roadmap: [
    "Más componentes: nuevos presets y animaciones pre-configuradas.",
    "Integración con más frameworks (Vue, Svelte).",
    "Themes personalizables para las animaciones.",
  ],

stack: [
    { icon: "logos:bun", name: "Bun" },
    { icon: "logos:react", name: "React" },
    { icon: "logos:typescript-icon", name: "TypeScript" },
    { icon: "logos:framer", name: "Motion" },
    { icon: "simple-icons:vite", name: "Vite" },
    { icon: "simple-icons:tanstack", name: "TanStack Start" },
    { icon: "logos:tailwindcss-icon", name: "Tailwind CSS" },
  ],

  links: {
    github: "https://github.com/OrlandoDev17/blaze-motion",
    live: "https://blaze-motion.vercel.app/",
  },
};