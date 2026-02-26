import type { SkillCategory } from "./types";

export const SKILLS_CONTENT = {
  header: {
    tag: "// skills",
    title: "Habilidades",
    titleAccent: "Técnicas"
  },
  categories: [
    {
      title: "Frontend Core",
      icon: "⚡",
      skills: ["React", "JavaScript (ES6+)", "LitElement", "Web Components", "Polymer", "AngularJS", "HTML5", "CSS3"],
    },
    {
      title: "Testing & Calidad",
      icon: "🧪",
      skills: ["Jest", "Karma", "Cucumber (BDD)", "Unit Testing", "Integration Testing", "E2E Testing"],
    },
    {
      title: "Arquitectura",
      icon: "🏗️",
      skills: ["Microfrontends", "Design Systems", "Component Libraries", "Code Governance"],
    },
    {
      title: "Backend & Tools",
      icon: "🔧",
      skills: ["Node.js", "Java Spring Boot", "REST APIs", "Jenkins (CI/CD)", "Git/GitHub"],
    },
    {
      title: "Metodologías",
      icon: "🔄",
      skills: ["Scrum", "Agile", "Code Review", "Mentoría Técnica"],
    },
  ] as SkillCategory[]
};

export const ANIMATION_VARIANTS = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  },
  card: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};