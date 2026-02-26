import type { NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Habilidades", href: "#habilidades" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const LOGO = "<SV />";
export const LOGO_COLOR = "hsl(var(--primary))"; // Desde variables CSS
export const SCROLL_THRESHOLD = 50;

export const MOBILE_MENU_ICONS = {
  open: "[≡]",
  close: "[✕]",
};