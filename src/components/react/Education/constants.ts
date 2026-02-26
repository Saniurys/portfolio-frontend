import type { Education, Language } from "./types";

export const EDUCATION_CONTENT = {
  header: {
    tag: "// education & languages",
    title: "Formación",
    dot: "."
  },
  education: {
    degree: "Licenciatura en Informática",
    institution: "Universidad de Oriente, Venezuela",
    year: "2017"
  } as Education,
  languages: [
    { name: "Español", level: "Nativo", percentage: 100 },
    { name: "Inglés", level: "Intermedio", percentage: 60 }
  ] as Language[]
};