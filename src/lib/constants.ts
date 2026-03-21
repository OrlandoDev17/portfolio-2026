// Tipos
import type {
  NavItem,
  SocialLink,
  ExperienceItem,
  WorkflowStep,
} from "./types";
// Animaciones
import { fadeLeft, fadeRight, fadeUp } from "./animations";

// Constantes
export const NAV_ITEMS: NavItem[] = [
  {
    label: "Inicio",
    href: "#",
    icon: "tabler:home",
  },
  {
    label: "Experiencia",
    href: "#experience",
    icon: "tabler:briefcase",
  },
  {
    label: "Workflow",
    href: "#workflow",
    icon: "tabler:workflow",
  },
  {
    label: "Habilidades",
    href: "#skills",
    icon: "tabler:tools",
  },
  {
    label: "Sobre mí",
    href: "#about",
    icon: "tabler:user",
  },
];

export const SOCIAL_ITEMS: SocialLink[] = [
  {
    id: "github",
    href: "https://github.com/OrlandoDev17",
    icon: "simple-icons:github",
    animation: fadeRight,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/orlando-l%C3%B3pez1707/",
    icon: "simple-icons:linkedin",
    animation: fadeUp,
  },
  {
    id: "whatsapp",
    href: "https://wa.me/+584242860846",
    icon: "simple-icons:whatsapp",
    animation: fadeLeft,
  },
];

export const BRAND_LIST = [
  {
    name: "React",
    icon: "simple-icons:react",
  },
  {
    name: "Next.js",
    icon: "simple-icons:nextdotjs",
  },
  {
    name: "TanStack Query",
    icon: "simple-icons:tanstack",
  },
  {
    name: "TypeScript",
    icon: "simple-icons:typescript",
  },
  {
    name: "Tailwind CSS",
    icon: "simple-icons:tailwindcss",
  },
  {
    name: "Astro",
    icon: "simple-icons:astro",
  },
  {
    name: "Docker",
    icon: "simple-icons:docker",
  },
  {
    name: "n8n",
    icon: "simple-icons:n8n",
  },
  {
    name: "Node.js",
    icon: "simple-icons:nodedotjs",
  },
  {
    name: "PostgreSQL",
    icon: "simple-icons:postgresql",
  },
  {
    name: "Figma",
    icon: "simple-icons:figma",
  },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "dulces-ideas",
    title: "Sistema POS Dulces Ideas — Transformación Digital",
    role: "Desarrollador Fullstack (Solo proyect)",
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
      { icon: "logos:supabase-icon", name: "Supabase" },
      { icon: "simple-icons:framer", name: "Framer Motion" },
    ],
    links: {
      github: "https://github.com/OrlandoDev17/dulces-ideas-app",
      live: "https://dulces-ideas-app-web.vercel.app/",
    },
    logo: "/images/dulces-ideas-logo.webp",
  },
  {
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
    roadmap: [
      "Optimización de Latencia en IA: Refactorización del motor de inferencia para reducir tiempos.",
      "Motor de Notificaciones Multicanal: Integración de WhatsApp y Telegram vía n8n para alertas.",
      "Asignación Heurística por Roles: Evolución del agente para identificación inteligente de perfiles.",
      "Dashboard de Productividad con IA: Gráficas de rendimiento para detectar cuellos de botella.",
    ],
    logo: "/images/worklyst-logo.svg",
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: "Descubrimiento",
    description:
      "Entiendo el problema del negocio antes de una línea de código. Mi enfoque es el descubrimiento de la necesidad del cliente y la definición de objetivos claros. ¿Qué problema real estamos resolviendo y cómo sabremos que lo logramos?",
    icon: "tabler:search",
    color: "violet",
    className: "lg:col-start-1 lg:row-start-1 lg:col-span-2 lg:row-span-1",
    iconClasses: "text-primary-500",
    layout: "horizontal",
    tags: ["Análisis", "Empatía", "Objetivos"],
  },
  {
    step: 2,
    title: "Diseño y UX",
    description:
      "Diseño la solución integral: desde el árbol de componentes reutilizables, la arquitectura de carpetas, el flujo de datos del backend (si aplica) hasta el prototipo UX/UI. Es el 'plano de construcción' que asegura escalabilidad y mantenibilidad.",
    icon: "tabler:palette",
    color: "blue",
    className: "lg:col-start-3 lg:row-start-1 lg:col-span-2 lg:row-span-2",
    iconClasses: "text-blue-500",
    layout: "vertical",
    tags: ["Figma", "Arquitectura", "Prototipado"],
  },
  {
    step: 3,
    title: "Desarrollo",
    description:
      "Construcción robusta y tipada. Implemento la solución con las tecnologías más adecuadas (Vite, React, n8n) según el proyecto. No solo escribo código, diseño un sistema de diseño de componentes listos para el futuro.",
    icon: "tabler:code",
    color: "primary",
    className: "lg:col-start-1 lg:row-start-2 lg:col-span-2 lg:row-span-3",
    iconClasses: "text-white",
    layout: "vertical",
    tags: ["React", "TS", "Git"],
  },
  {
    step: 4,
    title: "Calidad y QA",
    description:
      "Aseguro que cada componente sea resiliente, accesible y libre de errores mediante pruebas rigurosas y auditorías de performance, garantizando una experiencia de usuario impecable.",
    icon: "tabler:checklist",
    color: "orange",
    className: "lg:col-start-3 lg:row-start-3 lg:col-span-1 lg:row-span-2",
    iconClasses: "text-orange-500",
    layout: "vertical",
    tags: ["Vitest", "Lighthouse", "QA"],
  },
  {
    step: 5,
    title: "Despliegue",
    description:
      "Puesta en producción mediante pipelines CI/CD automatizados. Tras el lanzamiento, monitoreo el rendimiento y aplico optimizaciones finales para garantizar la mejor experiencia de usuario.",
    icon: "tabler:rocket",
    color: "lime",
    className: "lg:col-start-4 lg:row-start-3 lg:col-span-1 lg:row-span-2",
    iconClasses: "text-accent-500",
    layout: "vertical",
    tags: ["Vercel", "CI/CD", "Monitoreo"],
  },
];
