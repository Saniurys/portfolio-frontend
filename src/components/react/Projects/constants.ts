import type { ProjectCard } from "./types";

export const PROJECTS_CONTENT = {
  header: {
    tag: "// projects",
    title: "Próximos",
    titleAccent: "Lanzamientos"
  },
  cards: [
    {
      label: "Mis Aplicaciones",
      description: "Proyectos personales y experimentos frontend con enfoque en UX.",
      status: "Coming Soon",
      icon: "🚀",
    },
    {
      label: "Catálogo de Componentes",
      description: "Librería de Web Components corporativos creados con LitElement.",
      status: "Coming Soon",
      icon: "🧩",
    },
  ] as ProjectCard[]
};