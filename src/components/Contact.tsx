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
            <span>No. 14 Health Mission Road</span>
            <span>Delta State, Nigeria</span>
            <a href="tel:+2348000000000">+234 800 000 0000</a>
            <a href="mailto:hello@estheridisifoundation.org">
              hello@estheridisifoundation.org
            </a>
          </address>
          <div className="social-links" aria-label="Social media links">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-1 .4-1 1-1Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h5l4 5 4-5h3l-6 7 7 9h-5l-5-6-5 6H3l7-8L4 4Zm4 2 9 12h2L10 6H8Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
