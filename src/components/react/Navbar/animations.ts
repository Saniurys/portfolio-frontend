import type { AnimationConfig } from "./types";

export const ANIMATION_CONFIG: AnimationConfig = {
  navbar: {
    initial: { y: -80 },
    animate: { y: 0 },
    transition: { delay: 0.5, duration: 0.5 },
  },
  mobileMenu: {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  },
};