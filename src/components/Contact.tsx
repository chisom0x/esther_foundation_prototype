export default function Contact() {
  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="section-inner contact-grid">
        <div className="contact-info reveal">
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">We Would Love to Hear From You</h2>
          <address>
            <span>Delta State, Nigeria</span>
            <a href="tel:+2349081131303">+234 908 113 1303</a>
          </address>
          <div className="social-links" aria-label="Social media links">
            <a href="https://www.facebook.com/share/18ziVyZP9J/" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-1 .4-1 1-1Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
