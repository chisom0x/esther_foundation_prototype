export default function Shirt() {
  return (
    <section
      className="section shirt-section"
      id="shirt"
      aria-labelledby="shirt-title"
    >
      <div className="section-inner shirt-grid">
        <figure className="shirt-media reveal">
          <img
            src="https://res.cloudinary.com/dmddjqgfd/image/upload/v1783287059/Gemini_Generated_Image_hbpcv2hbpcv2hbpc-removebg-preview_qdtdzy.png"
            alt="Esther Idisi Foundation support shirt"
            loading="lazy"
          />
        </figure>
        <div className="shirt-copy reveal">
          <p className="section-kicker">Support the foundation</p>
          <h2 id="shirt-title">Buy the Foundation Shirt</h2>
          <p>
            Wear the mission and help fund practical community care. Proceeds
            support the foundation&apos;s yearly basic medical outreach and
            ongoing acts of compassion.
          </p>
          <div className="shirt-purchase">
            <div className="shirt-price" aria-label="Shirt price">
              <span>Price</span>
              <strong>&#8358;10,000</strong>
            </div>
            <a
              className="button button-primary"
              href="https://wa.me/2348167075730?text=Hello%2C%20I%20would%20like%20to%20buy%20the%20Esther%20Idisi%20Foundation%20shirt%20for%20N10%2C000."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy the foundation shirt for 10,000 naira on WhatsApp"
            >
              Buy on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
