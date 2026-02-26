import { motion } from "framer-motion";
import { PROJECTS_CONTENT } from "./constants";
import "./styles.css";

const Projects = () => {
  return (
    <section id="proyectos" className="projects-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest mb-2">
            {PROJECTS_CONTENT.header.tag}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            {PROJECTS_CONTENT.header.title}{" "}
            <span className="text-gradient">{PROJECTS_CONTENT.header.titleAccent}</span>
          </h2>
        </motion.div>

        <div className="project-grid">
          {PROJECTS_CONTENT.cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="project-card group"
            >
              <div className="card-glow-effect" />

              <div className="relative z-10">
                <span className="text-4xl mb-4 block" role="img" aria-label="icon">
                  {card.icon}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {card.label}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {card.description}
                </p>
                <span className="status-badge">
                  {card.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;