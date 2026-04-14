// Tipos
import type {
  NavItem,
  SocialLink,
  ExperienceItem,
  WorkflowStep,
  SkillItem,
  StatItem,
} from "./types";
// Animaciones
import { fadeLeft, fadeRight, fadeUp } from "./animations";
// Iconos
import {
  Git,
  Nodejs,
  ReactDark,
  TypeScript,
} from "@ridemountainpig/svgl-react";

// Constantes
export const NAV_ITEMS: NavItem[] = [
  {
    label: "Inicio",
    href: "#home",
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
      { icon: "simple-icons:tanstack", name: "Tanstack Query" },
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
      "Analizo el problema de negocio y defino objetivos claros antes de programar.",
    icon: "tabler:search",
    color: "lime",
    className: "lg:col-span-1 lg:row-span-1",
    layout: "vertical",
  },
  {
    step: 2,
    title: "Documentación",
    description:
      "Organizo requisitos técnicos y estratégicos para asegurar una base sólida.",
    icon: "tabler:file-description",
    color: "blue",
    className: "lg:col-span-1 lg:row-span-1",
    layout: "vertical",
  },
  {
    step: 3,
    title: "Diseño y UX",
    description:
      "Diseño la arquitectura de datos, flujos lógicos y prototipos de alta fidelidad.",
    icon: "tabler:brand-figma",
    color: "primary",
    className: "lg:col-span-1 lg:row-span-1",
    layout: "vertical",
  },
  {
    step: 4,
    title: "Desarrollo",
    description:
      "Escribo código limpio, resiliente y escalable usando las mejores prácticas.",
    icon: "tabler:user-code",
    color: "lime",
    className: "lg:col-span-1 lg:row-span-1",
    layout: "vertical",
  },
  {
    step: 5,
    title: "Calidad y QA",
    description:
      "Auditorías de rendimiento y accesibilidad para garantizar una UX impecable.",
    icon: "tabler:test-pipe",
    color: "orange",
    className: "lg:col-span-1 lg:row-span-1",
    layout: "vertical",
  },
  {
    step: 6,
    title: "Lanzamiento",
    description:
      "Despliegue automatizado con pipelines CI/CD y monitoreo constante post-lanzamiento.",
    icon: "tabler:rocket",
    color: "blue",
    className: "lg:col-span-1 lg:row-span-1",
    layout: "vertical",
  },
];

export const SKILLS_LIST: SkillItem[] = [
  {
    title: "Desarrollo Frontend",
    description:
      "Desarrollo interfaces modernas, rápidas y responsivas, enfocadas en la experiencia de usuario",
    brands: [
      {
        icon: "simple-icons:nextdotjs",
        name: "Next.js",
      },
      {
        icon: "simple-icons:react",
        name: "React",
      },
      {
        icon: "simple-icons:tailwindcss",
        name: "Tailwind",
      },
      {
        icon: "simple-icons:tanstack",
        name: "TanStack",
      },
      {
        icon: "simple-icons:astro",
        name: "Astro",
      },
      {
        icon: "simple-icons:typescript",
        name: "TypeScript",
      },
      {
        icon: "simple-icons:framer",
        name: "Motion",
      },
      {
        icon: "simple-icons:vercel",
        name: "Vercel",
      },
    ],
    bigBrand: ReactDark,
    color: "bg-linear-to-br from-primary-200 to-primary-500 text-primary-700",
    shadow: "rgba(122, 92, 250, 0.7)",
    variants: fadeRight,
  },
  {
    title: "Desarrollo Backend",
    description:
      "Construyo sistemas escalables y seguros, integrando APIs y Bases de datos eficientes",
    brands: [
      {
        icon: "simple-icons:nodedotjs",
        name: "Node.js",
      },
      {
        icon: "simple-icons:express",
        name: "Express",
      },
      {
        icon: "simple-icons:supabase",
        name: "Supabase",
      },
      {
        icon: "simple-icons:postgresql",
        name: "PostgreSQL",
      },
      {
        icon: "simple-icons:render",
        name: "Render",
      },
      {
        icon: "simple-icons:railway",
        name: "Railway",
      },
    ],
    bigBrand: Nodejs,
    color: "bg-linear-to-br from-accent-200 to-accent-500 text-accent-700",
    shadow: "rgba(104, 185, 41, 0.7)",
    variants: fadeUp,
  },
  {
    title: "Herramientas de Desarrollo",
    description:
      "Herramientas que optimizan el flujo de trabajo, desde el diseño de interfaces hasta el desarrollo.",
    brands: [
      {
        icon: "material-symbols:antigravity",
        name: "Antigravity",
      },
      {
        icon: "simple-icons:figma",
        name: "Figma",
      },
      {
        icon: "simple-icons:bun",
        name: "Bun",
      },
      {
        icon: "ri:gemini-fill",
        name: "Gemini",
      },
      {
        icon: "simple-icons:n8n",
        name: "n8n",
      },
      {
        icon: "simple-icons:git",
        name: "Git",
      },
    ],
    bigBrand: Git,
    color: "bg-linear-to-br from-orange-200 to-orange-500 text-orange-700",
    shadow: "rgba(237, 137, 54, 0.7)",
    variants: fadeUp,
  },
  {
    title: "Conocimientos Clave",
    description:
      "Además de las tecnologías, manejo conceptos y prácticas que fortalecen la arquitectura y la experiencia del usuario.",
    brands: [
      {
        icon: "tabler:api",
        name: "REST API",
      },
      {
        icon: "tabler:test-pipe",
        name: "QA",
      },
      {
        icon: "tabler:file-description",
        name: "Docs",
      },
      {
        icon: "tabler:stack-2",
        name: "Agile",
      },
      {
        icon: "tabler:route-2",
        name: "Estado",
      },
      {
        icon: "tabler:clipboard-list",
        name: "Análisis",
      },
    ],
    bigBrand: TypeScript,
    color: "bg-linear-to-br from-blue-200 to-blue-500 text-blue-700",
    shadow: "rgba(59, 130, 246, 0.7)",
    variants: fadeLeft,
  },
];

export const STATS_LIST: StatItem[] = [
  {
    label: "Años Exp",
    value: 3,
    prefix: "+",
    color: "bg-white text-primary-500",
    labelColor: "text-gray-600",
    boxShadow: "rgba(122, 92, 250, 0.7)",
  },
  {
    label: "Proyectos",
    value: 2,
    prefix: "",
    color: "bg-accent-300 text-white",
    labelColor: "text-white",
    boxShadow: "rgba(104, 185, 41, 0.7)",
  },
  {
    label: "Calidad",
    value: 100,
    prefix: "%",
    color: "bg-orange-500/10 text-orange-500",
    labelColor: "text-dark",
    boxShadow: "rgba(249, 115, 22, 0.7)",
  },
  {
    label: "Innovación",
    icon: "tabler:bulb",
    color: "bg-primary-500 text-white",
    labelColor: "text-white",
    boxShadow: "rgba(122, 92, 250, 0.7)",
  },
];

// Reemplaza esto con tu Access Key de Web3Forms
export const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
