export default function About() {
  return (
    <section
      className="section about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="section-inner about-grid">
        <div className="about-copy reveal">
          <p className="section-kicker">About the foundation</p>
          <h2 id="about-title">Who Was Esther Idisi?</h2>
          <p>
            Esther Idisi dedicated her life to practical compassion. She
            advocated for abused women, supported orphanages, prepared meals,
            and cared for the less privileged with dignity and tenderness.
          </p>
          <p>
            The foundation established in her honour continues that same work
            through community support and a yearly basic medical outreach for
            families who need care most.
          </p>
          <blockquote>
            She did not wait to be called. She simply showed up.
          </blockquote>
        </div>
        <figure className="about-image reveal">
          <img
            src="https://res.cloudinary.com/dmddjqgfd/image/upload/v1783282853/WhatsApp_Image_2026-07-02_at_9.19.28_PM_fcssoq.jpg"
            alt="A dignified portrait representing Esther Idisi's legacy of care"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
