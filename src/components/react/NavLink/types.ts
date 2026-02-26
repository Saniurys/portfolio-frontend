import type { ReactNode } from "react";

export interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void; // Añadimos esto para que sirva en el menú móvil
}