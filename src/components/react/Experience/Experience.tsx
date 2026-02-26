import { motion } from "framer-motion";
import { EXPERIENCE_CONTENT } from "./constants";
import "./styles.css";

const Experience = () => {
  return (
    <section id="experiencia" className="experience-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest mb-2">
            {EXPERIENCE_CONTENT.header.tag}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            {EXPERIENCE_CONTENT.header.title}{" "}
            <span className="text-gradient">{EXPERIENCE_CONTENT.header.titleAccent}</span>
          </h2>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line" />

          <div className="space-y-12">
            {EXPERIENCE_CONTENT.experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="experience-item"
              >
                <div className="timeline-dot" />

                <div className="experience-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.company}
                        {exp.via && (
                          <span className="text-muted-foreground font-normal text-sm ml-2">
                            ({exp.via})
                          </span>
                        )}
                      </h3>
                      <p className="text-primary font-mono text-sm">{exp.role}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-secondary-foreground flex gap-3">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;