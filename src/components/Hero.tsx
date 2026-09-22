export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="section-kicker hero-kicker">Community care in Nigeria</p>
        <h1 id="hero-title">
          Serving With <span className="accent-underline">Love</span>, Honouring a
          Legacy
        </h1>
        <p className="hero-text">
          The Esther Idisi Foundation provides a yearly basic medical
          outreach and community support in Nigeria.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-outline" href="#about">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
