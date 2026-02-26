import { motion } from "framer-motion";
import { EDUCATION_CONTENT } from "./constants";
import "./styles.css";

const Education = () => {
  const { header, education, languages } = EDUCATION_CONTENT;

  return (
    <section className="education-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-primary tracking-widest mb-2">
            {header.tag}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            {header.title}<span className="text-primary">{header.dot}</span>
          </h2>
        </motion.div>

        <motion.div
          className="education-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Card de Educación */}
          <div className="edu-card">
            <p className="font-mono text-xs text-primary mb-2 uppercase tracking-tighter">Educación</p>
            <h3 className="text-lg font-bold text-foreground">{education.degree}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {education.institution} — {education.year}
            </p>
          </div>

          {/* Card de Idiomas */}
          <div className="edu-card">
            <p className="font-mono text-xs text-primary mb-2 uppercase tracking-tighter">Idiomas</p>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-foreground font-medium">{lang.name}</span>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase">{lang.level}</span>
                  </div>
                  <div className="progress-container">
                    <motion.div
                      className="progress-bar bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      style={{ 
                        backgroundColor: lang.percentage < 100 ? 'hsl(var(--primary) / 0.6)' : 'hsl(var(--primary))' 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;