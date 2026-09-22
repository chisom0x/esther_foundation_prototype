"use client";

import { useState } from "react";

interface PublicationsProps {
  onPreviewImage?: (src: string, caption: string) => void;
}

export default function Publications({ onPreviewImage }: PublicationsProps) {
  const [downloadState, setDownloadState] = useState<"idle" | "downloading" | "downloaded">("idle");

  const pubImage =
    "https://res.cloudinary.com/dmddjqgfd/image/upload/v1783284087/WhatsApp_Image_2026-06-23_at_9.27.54_AM_1_uzpwp4.jpg";
  const filename = "Esther-Idisi-Foundation-Press-Recognition.jpg";
  const headline = "National Press Coverage: Community Medical Outreach";

  const handleDownload = async () => {
    if (downloadState === "downloading") return;
    setDownloadState("downloading");

    try {
      const response = await fetch(pubImage);
      if (!response.ok) throw new Error("Download request failed");
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);

      setDownloadState("downloaded");
      setTimeout(() => {
        setDownloadState("idle");
      }, 2400);
    } catch (error) {
      console.warn("Direct blob download failed, attempting fallback:", error);
      const fallbackLink = document.createElement("a");
      fallbackLink.href = pubImage;
      fallbackLink.target = "_blank";
      fallbackLink.download = filename;
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);

      setDownloadState("idle");
    }
  };

  const handlePreview = () => {
    if (onPreviewImage) {
      onPreviewImage(pubImage, headline);
    }
  };

  return (
    <section
      className="section publications-section"
      id="publications"
      aria-labelledby="publications-title"
    >
      <div className="section-inner">
        <div className="section-heading centered reveal">
          <p className="section-kicker">Media & Press</p>
          <h2 id="publications-title">Press Recognition</h2>
          <p className="section-lede">
            Official newspaper publication recognizing the Esther Idisi
            Foundation&apos;s health missions and community impact. Download the
            official media clipping below.
          </p>
        </div>

        <div className="publications-single-container">
          <article className="publication-card publication-card-single reveal">
            <div
              className="publication-media"
              style={{ cursor: "pointer" }}
              onClick={handlePreview}
              title="Click to preview publication"
            >
              <img
                src={pubImage}
                alt="Newspaper publication acknowledging Esther Idisi Foundation outreach"
                loading="lazy"
              />
              <span className="publication-badge">Newspaper Print</span>
            </div>
            <div className="publication-content">
              <div className="publication-meta">
                <span className="publication-source">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    <path d="M18 14h-8" />
                    <path d="M15 18h-5" />
                    <path d="M10 6h8v4h-8z" />
                  </svg>
                  Press Recognition
                </span>
                <span className="publication-tag">High-Resolution</span>
              </div>
              <h3 className="publication-headline">{headline}</h3>
              <p className="publication-summary">
                Official news feature detailing our annual healthcare outreach,
                free medicated glasses distribution, and dedicated welfare
                assistance in Delta State.
              </p>
              <div className="publication-actions">
                <button
                  type="button"
                  className="button button-primary download-pub-btn"
                  onClick={handleDownload}
                  disabled={downloadState === "downloading"}
                  aria-label="Download Newspaper Publication Image"
                >
                  {downloadState === "downloading" ? (
                    <>
                      <svg
                        className="spin-icon"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path
                          d="M12 2a10 10 0 0 1 10 10"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span>Downloading...</span>
                    </>
                  ) : downloadState === "downloaded" ? (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      <span>Download</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
