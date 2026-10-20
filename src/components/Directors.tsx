export default function Directors() {
  return (
    <section
      className="section directors-section"
      id="directors"
      aria-labelledby="directors-title"
    >
      <div className="section-inner">
        <div className="section-heading centered reveal">
          <p className="section-kicker">Leadership</p>
          <h2 id="directors-title">Meet Our Directors</h2>
        </div>
        <div className="directors-grid">
          <div className="director-card reveal">
            <div className="director-img-wrap">
              <img src="/assets/directors/choice.jpeg" alt="Choice O. Idonije" />
            </div>
            <p className="director-name">Choice O. Idonije</p>
          </div>
          <div className="director-card reveal">
            <div className="director-img-wrap">
              <img src="/assets/directors/Odemero.png" alt="Odemero Onome Uloho" />
            </div>
            <p className="director-name">Odemero Onome Uloho</p>
          </div>
          <div className="director-card reveal">
            <div className="director-img-wrap">
              <img src="/assets/directors/blessing.jpeg" alt="Blessing Uloho-Omagbemi" />
            </div>
            <p className="director-name">Blessing Uloho-Omagbemi</p>
          </div>
          <div className="director-card reveal">
            <div className="director-img-wrap">
              <img src="/assets/directors/imontie%202.jpg" alt="Imonitie Israel Omokhodion" />
            </div>
            <p className="director-name">Imonitie Israel Omokhodion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
