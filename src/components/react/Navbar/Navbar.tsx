import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, LOGO, LOGO_COLOR, SCROLL_THRESHOLD, MOBILE_MENU_ICONS } from "./constants";
import { ANIMATION_CONFIG } from "./animations";
import styles from "./styles.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}
      {...ANIMATION_CONFIG.navbar}
    >
      <div className={styles.content}>
        <a href="#" className={styles.logo} style={{ color: LOGO_COLOR }}>
          {LOGO}
        </a>

        {/* Desktop */}
        <div className={styles.menu}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.link}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={styles.toggle}
          aria-label="Toggle menu"
        >
          {mobileOpen ? MOBILE_MENU_ICONS.close : MOBILE_MENU_ICONS.open}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            {...ANIMATION_CONFIG.mobileMenu}
          >
            <div className={styles.mobileContent}>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={styles.mobileLink}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;