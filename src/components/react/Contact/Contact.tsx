import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "./constants";
import "./styles.css";

const Contact = () => {
  const { header, links } = CONTACT_CONTENT;

  return (
    <section id="contacto" className="contact-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest mb-2">
            {header.tag}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            {header.title}<span className="text-primary">{header.dot}</span>
          </h2>
        </motion.div>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {links.map((link) => {
            const CardContent = (
              <div className="contact-card group">
                <p className="font-mono text-[10px] uppercase text-muted-foreground mb-1 tracking-tighter">
                  {link.label}
                </p>
                <p className="text-foreground group-hover:text-primary transition-colors font-medium text-sm">
                  {link.value}
                </p>
              </div>
            );

            return link.href ? (
              <a 
                key={link.label} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link-wrapper"
              >
                {CardContent}
              </a>
            ) : (
              <div key={link.label}>{CardContent}</div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;