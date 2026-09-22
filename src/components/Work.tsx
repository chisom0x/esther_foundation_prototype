export default function Work() {
  return (
    <section
      className="section work-section"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-inner">
        <div className="section-heading reveal">
          <p className="section-kicker">Our work</p>
          <h2 id="work-title">What We Do</h2>
          <p className="section-lede">
            A yearly outreach offering practical basic health support,
            wellness supplies, and eye care for families in the community.
          </p>
        </div>
        <div className="work-layout">
          <article className="work-feature reveal">
            <div className="work-feature-copy">
              <p className="work-eyebrow">Free medical outreach</p>
              <h3>Free Basic Medical Outreach</h3>
              <p>
                For now, the foundation hosts an annual basic medical
                outreach where community members can receive simple health
                checks, wellness support, vitamins, supplements, and eye care
                at no cost.
              </p>
              <ul className="work-highlights">
                <li>Supplements and vitamins</li>
                <li>Free medicated glasses</li>
                <li>Eye checkups and basic vision support</li>
                <li>Blood pressure checks</li>
                <li>Care offered with dignity and warmth</li>
              </ul>
              <a className="button button-primary" href="#outreach">
                See Outreach Details
              </a>
            </div>
            <figure className="work-feature-media">
              <img
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=900&auto=format&fit=crop&q=80"
                alt="A medical worker checking a patient's blood pressure during a medical outreach"
                loading="lazy"
              />
              <figcaption>
                <span>Yearly outreach</span>
                <strong>Basic health support made easier to reach</strong>
              </figcaption>
            </figure>
          </article>
          <div
            className="work-card-grid"
            aria-label="How the outreach supports families"
          >
            <article className="work-card reveal">
              <span className="work-card-marker" aria-hidden="true">
                01
              </span>
              <h3>Wellness Support</h3>
              <p>
                Families receive vitamins, supplements, and basic health
                guidance to support everyday wellbeing.
              </p>
            </article>
            <article className="work-card reveal">
              <span className="work-card-marker" aria-hidden="true">
                02
              </span>
              <h3>Eye Care</h3>
              <p>
                Eye checkups and free medicated glasses help community
                members see more clearly without the barrier of cost.
              </p>
            </article>
            <article className="work-card reveal">
              <span className="work-card-marker" aria-hidden="true">
                03
              </span>
              <h3>Basic Checks</h3>
              <p>
                Blood pressure checks and simple screenings help people better
                understand their health and seek care when needed.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
