import { motion } from "framer-motion";
import { SKILLS_CONTENT, ANIMATION_VARIANTS } from "./constants";
import "./styles.css";

const Skills = () => {
  return (
    <section id="habilidades" className="skills-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest mb-2">
            {SKILLS_CONTENT.header.tag}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            {SKILLS_CONTENT.header.title}{" "}
            <span className="text-gradient">{SKILLS_CONTENT.header.titleAccent}</span>
          </h2>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILLS_CONTENT.categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={ANIMATION_VARIANTS.card}
              className="skill-card group"
            >
              <div className="text-2xl mb-3">{cat.icon}</div>
              <h3 className="font-mono text-sm text-primary mb-4 tracking-wide uppercase">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;