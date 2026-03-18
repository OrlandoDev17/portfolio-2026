// Tipos
import type { NavItem, SocialLink } from "./types";
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
    label: "Proyectos",
    href: "#projects",
    icon: "tabler:folder",
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
    href: "https://wa.me/584241371828",
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
