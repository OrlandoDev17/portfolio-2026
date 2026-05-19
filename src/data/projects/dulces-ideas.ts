import type { ExperienceItem } from "@/lib/types";

export const DULCES_IDEAS_PROJECT: ExperienceItem = {
  id: "dulces-ideas",
  title: "Sistema POS Dulces Ideas — Transformación Digital",
  role: "Desarrollador Fullstack (Solo проекта)",
  company: "Dulces Ideas",
  period: "2026 - Presente",
  shortDesc:
    "Diseñé e implementé la transformación digital integral de un local físico, sustituyendo procesos manuales por un sistema POS 'offline-first' con motor de divisas automatizado.",

  fullDesc:
    "Desarrollé la primera infraestructura digital para el negocio, sustituyendo el registro manual de ventas por un ecosistema integral. El sistema garantiza la integridad financiera mediante un motor de conversión USD/Bs y persistencia de datos en entornos de conectividad inestable.",

  challenges: [
    {
      title: "Resiliencia de Datos en Redes Inestables",
      problem: "Pérdida de registros por fallas de internet constantes.",
      solution:
        "Arquitectura basada en TanStack Query e IndexedDB; los cambios se reflejan al instante y se sincronizan con la BD de forma asíncrona al recuperar conexión.",
    },
    {
      title: "Automatización de Divisas (USD/Bs)",
      problem:
        "Discrepancias en ingresos mensuales por cálculos manuales de tasa de cambio.",
      solution:
        "Motor de conversión en tiempo real que automatiza el cuadre de caja, eliminando el error humano en el flujo de ventas.",
    },
    {
      title: "Omnicanalidad y UX Adaptativa",
      problem:
        "Necesidad de operar el sistema desde cualquier dispositivo (Móvil/Tablet/Desktop).",
      solution:
        "Interfaz 100% responsiva diseñada para alta velocidad de uso, permitiendo la gestión de ventas y encargos desde el teléfono del personal.",
    },
    {
      title: "Gestión de Encargos y Reportes",
      problem:
        "Dificultad para rastrear pedidos pendientes y cierres de caja.",
      solution:
        "Módulo de gestión de encargos y exportación automatizada de reportes diarios en PDF para auditoría inmediata.",
    },
  ],

  mockup: "/images/dulces-ideas-pos.webp",

  impact: [
    "Cero pérdida de registros de venta gracias a la persistencia local robusta.",
    "Eliminación total de discrepancias en el flujo de caja multi-moneda.",
    "Reducción drástica del tiempo de cierre diario mediante reportes PDF automatizados.",
    "Sistematización de preventa y encargos, mejorando la organización del inventario.",
  ],

  roadmap: [
    "Panel Administrativo Avanzado: Dashboard con analítica histórica y predicción de ventas.",
    "Gráficos Estadísticos: Visualización de métricas de ventas y horas pico en tiempo real.",
    "Gestión de Inventario CRUD: Módulo completo de stock con alertas y ranking de ventas.",
  ],

  stack: [
    { icon: "logos:nextjs-icon", name: "Next.js" },
    { icon: "logos:tailwindcss-icon", name: "Tailwind" },
    { icon: "logos:react", name: "React" },
    { icon: "logos:typescript-icon", name: "TypeScript" },
    { icon: "simple-icons:tanstack", name: "TanStack Query" },
    { icon: "logos:supabase-icon", name: "Supabase" },
    { icon: "logos:framer", name: "Framer Motion" },
  ],

  links: {
    github: "https://github.com/OrlandoDev17/dulces-ideas-app",
    live: "https://dulces-ideas-app-web.vercel.app/",
  },

  logo: "/images/dulces-ideas-logo.webp",
};