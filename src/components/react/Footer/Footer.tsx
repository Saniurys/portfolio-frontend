import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Saniurys Villazana — Built with React & Astro
        </p>
        <p className="footer-text">
          Buenos Aires, Argentina 🇦🇷
        </p>
      </div>
    </footer>
  );
};

export default Footer;