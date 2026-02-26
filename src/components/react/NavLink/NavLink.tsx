import type { NavLinkProps } from "./types";
import "./NavLink.css";

export const NavLink = ({ href, children, className = "", onClick }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      className={`nav-link-base ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};