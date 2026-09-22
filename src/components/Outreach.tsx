export default function Outreach() {
  return (
    <section
      className="section clinic-section"
      id="outreach"
      aria-labelledby="outreach-title"
    >
      <div className="section-inner clinic-grid">
        <div className="clinic-copy reveal">
          <p className="section-kicker">Annual outreach</p>
          <h2 id="outreach-title">Our Yearly Basic Medical Outreach</h2>
          <p>
            The outreach is the foundation&apos;s current medical programme,
            created to bring basic checks, eye care, vitamins, supplements,
            and free medicated glasses to community members at no cost.
          </p>
          <dl className="clinic-details">
            <div>
              <dt>Schedule</dt>
              <dd>Held yearly, with dates announced ahead of each outreach</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Shared with the community before each outreach day</dd>
            </div>
          </dl>
          <a className="button button-primary" href="#contact">
            Contact for Updates
          </a>
        </div>
        <aside className="services-card reveal" aria-labelledby="services-title">
          <h3 id="services-title">Outreach Services</h3>
          <ul>
            <li>Eye Checkups</li>
            <li>Free Medicated Glasses</li>
            <li>Blood Pressure Checks</li>
            <li>Supplements</li>
            <li>Vitamins</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
