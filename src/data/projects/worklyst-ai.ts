import type { ExperienceItem } from "@/lib/types";

export const WORKLYST_AI_PROJECT: ExperienceItem = {
  id: "worklyst-ai",
  title: "Worklyst - Ecosistema Inteligente de Gestión",
  role: "Frontend & AI Automation Specialist",
  company: "Proyecto de Grado (TSU)",
  period: "2025 - 2026",
  shortDesc:
    "Diseñé la arquitectura frontend y el orquestador de IA para una plataforma de gestión de proyectos, integrando agentes autónomos para la automatización de flujos de trabajo en tiempo real.",

  fullDesc:
    "Como desarrollador principal de frontend y automatización en un equipo multidisciplinario, desarrollé Worklyst para mi defensa de TSU en Informática. El núcleo del proyecto es un agente de IA que optimiza la creación de tareas, asignación de miembros y resúmenes de proyectos, orquestado mediante n8n y modelos Llama (Groq) para garantizar una distribución de carga de trabajo equitativa y eficiente.",

  challenges: [
    {
      title: "Estabilidad y Consistencia de la IA",
      problem:
        "Prompts frágiles que causaban errores en la ejecución de herramientas del backend.",
      solution:
        "Implementé una arquitectura de prompts en formato XML para mejorar la comprensión del modelo y diseñé un sistema de respuesta JSON que clasifica el output entre 'Message' o 'Action', permitiendo re-renderizados inteligentes solo cuando la IA modifica el estado.",
    },
    {
      title: "Sincronización de Estado en Tiempo Real",
      problem:
        "Latencia percibida al actualizar el tablero Kanban tras la intervención de la IA.",
      solution:
        "Desarrollé un sistema de actualizaciones optimistas (Optimistic Updates) que mueve las cards instantáneamente en la UI antes de confirmar con el servidor, mejorando drásticamente la percepción de velocidad.",
    },
    {
      title: "Optimización de Rendimiento Frontend",
      problem:
        "Necesidad de una interfaz de alto rendimiento con animaciones complejas.",
      solution:
        "Utilicé Next.js 15 (App Router) para balancear componentes SSR y CSR, optimizando la carga crítica. Integré GSAP para micro-interacciones de alto rendimiento, logrando una interfaz fluida y 'viva'.",
    },
    {
      title: "Orquestación de Agentes con n8n",
      problem:
        "Conexión segura y eficiente entre el agente de IA y el API backend de Node.js.",
      solution:
        "Diseñé un flujo de trabajo en n8n basado en Webhooks que consume herramientas personalizadas del backend, permitiendo que la IA cree proyectos y asigne tareas de forma autónoma con validación de datos.",
    },
  ],

  mockup: "/images/worklyst.webp",

  impact: [
    "Aprobación sobresaliente como Proyecto de Grado para el título de TSU en Informática.",
    "Automatización total del proceso de creación y asignación inicial de proyectos.",
    "Implementación de lógica de balanceo de carga para una distribución de tareas equitativa.",
    "Arquitectura escalable que separa la lógica de IA del motor de base de datos Neon (PostgreSQL).",
  ],

  roadmap: [
    "Optimización de Latencia en IA: Refactorización del motor de inferencia para reducir tiempos.",
    "Motor de Notificaciones Multicanal: Integración de WhatsApp y Telegram vía n8n para alertas.",
    "Asignación Heurística por Roles: Evolución del agente para identificación inteligente de perfiles.",
    "Dashboard de Productividad con IA: Gráficas de rendimiento para detectar cuellos de botella.",
  ],

  stack: [
    { icon: "logos:nextjs-icon", name: "Next.js" },
    { icon: "logos:typescript-icon", name: "TypeScript" },
    { icon: "logos:tailwindcss-icon", name: "Tailwind CSS" },
    { icon: "simple-icons:n8n", name: "n8n" },
    { icon: "simple-icons:gsap", name: "GSAP" },
    { icon: "simple-icons:ollama", name: "Ollama" },
  ],

  links: {
    github: "https://github.com/UnetiGrupo/workLyst",
    live: "https://worklyst-smoky.vercel.app/",
  },

  logo: "/images/worklyst-logo.svg",
};