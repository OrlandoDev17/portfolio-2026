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
