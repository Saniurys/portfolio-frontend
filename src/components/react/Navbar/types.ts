export interface NavItem {
  label: string;
  href: string;
}

export interface AnimationVariant {
  initial: Record<string, number | string>;
  animate: Record<string, number | string>;
  transition?: Record<string, number | string>;
  exit?: Record<string, number | string>;
}

export interface AnimationConfig {
  navbar: AnimationVariant;
  mobileMenu: AnimationVariant;
}