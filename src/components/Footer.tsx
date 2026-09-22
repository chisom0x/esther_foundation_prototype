export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <a className="footer-logo" href="#home">
            Esther Idisi Foundation
          </a>
          <p>Continuing the legacy of compassion.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
          <a href="#gallery">Gallery</a>
          <a href="#publications">Publications</a>
          <a href="#outreach">Outreach</a>
          <a href="#shirt">Shirt</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="copyright">
          &copy; 2026 Esther Idisi Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
