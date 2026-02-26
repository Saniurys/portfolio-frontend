import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { HeroContent } from "./types";
import { HERO_CONTENT, TYPING_CONFIG } from "./constants";
import "./styles.css";

const TypingText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = HERO_CONTENT.roles[roleIndex];
    
    const handleTyping = () => {
      if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), TYPING_CONFIG.pauseDuration);
        return;
      }
      
      if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % HERO_CONTENT.roles.length);
        return;
      }

      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    };

    const timeout = setTimeout(
      handleTyping, 
      deleting ? TYPING_CONFIG.deletingSpeed : TYPING_CONFIG.typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="font-mono text-primary">
      {HERO_CONTENT.roles[roleIndex].slice(0, charIndex)}
      <motion.span 
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        ▌
      </motion.span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="intro-section">
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      <motion.div
        className="glow-orb"
        animate={{ x: [0, 50, -30, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p 
          className="font-mono text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >
          {HERO_CONTENT.portfolioTag}
        </motion.p>

        <motion.h1 
          className="intro-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-foreground">{HERO_CONTENT.name}</span>
          <br />
          <span className="text-gradient">{HERO_CONTENT.lastName}</span>
        </motion.h1>

        <div className="text-xl sm:text-2xl mb-8 h-8">
          <TypingText />
        </div>

        <motion.p 
          className="text-muted-foreground max-w-xl mx-auto mb-10 text-base sm:text-lg"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        >
          {HERO_CONTENT.description}
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href={HERO_CONTENT.ctas.explore.href} className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm">
            {HERO_CONTENT.ctas.explore.label}
          </a>
          <a href={HERO_CONTENT.ctas.contact.href} className="px-8 py-3 border border-glow text-primary font-semibold rounded-sm">
            {HERO_CONTENT.ctas.contact.label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;