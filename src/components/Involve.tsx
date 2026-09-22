export default function Involve() {
  return (
    <section
      className="section involve-section"
      id="donate"
      aria-labelledby="involve-title"
    >
      <div className="section-inner">
        <div className="section-heading centered reveal">
          <p className="section-kicker">Get involved</p>
          <h2 id="involve-title">Join Us in Continuing Her Legacy</h2>
        </div>
        <div className="involve-grid">
          <article className="involve-card reveal">
            <h3>Volunteer</h3>
            <p>
              Give your time at outreach days, community visits, or support
              drives. A steady pair of hands can carry a lot of hope.
            </p>
            <a className="text-button" href="#contact">
              Become a Volunteer
            </a>
          </article>
          <article className="involve-card reveal">
            <h3>Donate</h3>
            <p>
              Help us provide supplements, vitamins, eye care, free glasses,
              meals, and care packages for neighbours facing difficult
              seasons.
            </p>
            <a className="text-button" href="#contact">
              Support the Work
            </a>
          </article>
          <article className="involve-card reveal">
            <h3>Partner With Us</h3>
            <p>
              Churches, health providers, schools, and businesses can help
              expand access to care through practical partnership.
            </p>
            <a className="text-button" href="#contact">
              Start a Partnership
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
