// Tipos
import type {
  NavItem,
  SocialLink,
  ExperienceItem,
  WorkflowStep,
  SkillItem,
  StatItem,
} from "./types";
// Proyectos
import {
  BLAZE_MOTION_PROJECT,
  DULCES_IDEAS_PROJECT,
  WORKLYST_AI_PROJECT,
} from "@/data/projects";
// Animaciones
import { fade } from "@blaze-motion/motion";
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
    animation: fade({ direction: "right", distance: 20 }),
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/orlando-l%C3%B3pez1707/",
    icon: "simple-icons:linkedin",
    animation: fade({ direction: "up", distance: 20 }),
  },
  {
    id: "whatsapp",
    href: "https://wa.me/+584242860846",
    icon: "simple-icons:whatsapp",
    animation: fade({ direction: "left", distance: 20 }),
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
  BLAZE_MOTION_PROJECT,
  DULCES_IDEAS_PROJECT,
  WORKLYST_AI_PROJECT,
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
    variants: fade({ direction: "right", distance: 30 }),
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
    variants: fade({ direction: "up", distance: 30 }),
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
    variants: fade({ direction: "up", distance: 30 }),
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
    variants: fade({ direction: "left", distance: 30 }),
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
