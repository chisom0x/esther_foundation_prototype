import { LightboxItem } from "./Lightbox";

export const galleryImages: LightboxItem[] = [
  {
    src: "https://res.cloudinary.com/dmddjqgfd/image/upload/v1783284087/WhatsApp_Image_2026-06-23_at_9.27.53_AM_iayitu.jpg",
    alt: "Photo from the Esther Idisi Foundation annual medical outreach",
    caption: "Annual Medical Outreach",
  },
  {
    src: "https://res.cloudinary.com/dmddjqgfd/image/upload/v1783284085/WhatsApp_Image_2026-06-23_at_9.27.52_AM_4_ncgsxy.jpg",
    alt: "Community members receiving support during the foundation outreach",
    caption: "Community Health Checks",
  },
  {
    src: "https://res.cloudinary.com/dmddjqgfd/image/upload/v1783284084/WhatsApp_Image_2026-06-23_at_9.27.51_AM_qszydy.jpg",
    alt: "Outreach moment from the foundation's basic medical support programme",
    caption: "Eye Care Support",
  },
  {
    src: "https://res.cloudinary.com/dmddjqgfd/image/upload/v1783284082/WhatsApp_Image_2026-06-23_at_9.27.50_AM_1_wcwsmh.jpg",
    alt: "Foundation outreach supplies for community medical support",
    caption: "Supplements and Vitamins",
  },
  {
    src: "https://res.cloudinary.com/dmddjqgfd/image/upload/v1783284087/WhatsApp_Image_2026-06-23_at_9.27.53_AM_5_b0guew.jpg",
    alt: "Community outreach moment connected to free medicated glasses support",
    caption: "Free Medicated Glasses",
  },
  {
    src: "https://res.cloudinary.com/dmddjqgfd/image/upload/v1783284084/WhatsApp_Image_2026-06-23_at_9.27.52_AM_2_bh2ibw.jpg",
    alt: "Care moment from the Esther Idisi Foundation outreach",
    caption: "Outreach Care Moment",
  },
  {
    src: "https://res.cloudinary.com/dmddjqgfd/image/upload/v1783284082/WhatsApp_Image_2026-06-23_at_9.27.50_AM_t4pnca.jpg",
    alt: "The Esther Idisi Foundation team during a community outreach",
    caption: "Foundation Outreach Team",
  },
  {
    src: "https://res.cloudinary.com/dmddjqgfd/image/upload/v1783284085/WhatsApp_Image_2026-06-23_at_9.27.52_AM_3_jerznb.jpg",
    alt: "Service moment from the Esther Idisi Foundation outreach",
    caption: "Outreach Service Moment",
  },
];

interface GalleryProps {
  onOpenImage: (index: number) => void;
}

export default function Gallery({ onOpenImage }: GalleryProps) {
  return (
    <section
      className="section gallery-section"
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="section-inner">
        <div className="section-heading reveal">
          <p className="section-kicker">Gallery</p>
          <h2 id="gallery-title">Moments From Our Programmes</h2>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <button
              key={index}
              className="gallery-item reveal"
              type="button"
              data-caption={item.caption}
              onClick={() => onOpenImage(index)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span>{item.caption}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
