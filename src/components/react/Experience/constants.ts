import type { Experience } from "./types";

export const EXPERIENCE_CONTENT = {
  header: {
    tag: "// experience",
    title: "Experiencia",
    titleAccent: "Profesional"
  },
  experiences: [
    {
      company: "BBVA",
      via: "",
      role: "Senior Frontend Engineer",
      period: "Sep 2019 – Presente",
      highlights: [
        "Migración de módulos bancarios críticos de AngularJS a React del homebanking argentino.",
        "Implementación de pruebas unitarias (Jest/Karma) y E2E (Cucumber) para banca online.",
        "Arquitectura de Microfrontends para despliegues independientes.",
        "Desarrollo de componentes UI escalables con LitElement y framework Cells.",
        "Global Code Reviewer para Argentina, México y España.",
        "CI/CD con Jenkins y despliegues a producción.",
      ],
    },
    {
      company: "DPS Sistemas y Consultoría",
      role: "Software Developer",
      period: "Sep 2018 – Jun 2019",
      highlights: [
        "Desarrollo de sistemas de facturación y gestión administrativa.",
        "Optimización de capas de persistencia con XPO.",
        "Automatización de procesos de negocio.",
      ],
    },
  ] as Experience[]
};