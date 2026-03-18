import type { Variants } from "motion";

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  id: string;
  href: string;
  icon: string;
  animation?: Variants | undefined;
}

export interface ExperienceChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface TechStackItem {
  icon: string;
  name: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  period: string;
  company: string;
  shortDesc: string;
  fullDesc: string;
  challenges: ExperienceChallenge[];
  mockup: string;
  impact: string[];
  roadmap: string[];
  stack: TechStackItem[];
  links: {
    github: string;
    live: string;
  };
  logo?: string;
}
