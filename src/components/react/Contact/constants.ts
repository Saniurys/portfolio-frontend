import type { ContactLink } from "./types";

export const CONTACT_CONTENT = {
  header: {
    tag: "// contact",
    title: "Conectemos",
    dot: "."
  },
  links: [
    {
      label: "Email",
      value: "saniurys.millan@gmail.com",
      href: "mailto:saniurys.millan@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "saniurys-villazana",
      href: "https://www.linkedin.com/in/saniurys-villazana-833604143",
    },
    {
      label: "Teléfono",
      value: "+54 11 6214-7244",
      href: "tel:+541162147244",
    },
    {
      label: "Ubicación",
      value: "Buenos Aires, Argentina",
      href: null,
    },
  ] as ContactLink[]
};