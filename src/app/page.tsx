"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import Gallery, { galleryImages } from "@/components/Gallery";
import Publications from "@/components/Publications";
import Outreach from "@/components/Outreach";
import Shirt from "@/components/Shirt";
import Involve from "@/components/Involve";
import Directors from "@/components/Directors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Lightbox, { LightboxItem } from "@/components/Lightbox";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    items: LightboxItem[];
    currentIndex: number;
    isSingle: boolean;
  }>({
    isOpen: false,
    items: [],
    currentIndex: 0,
    isSingle: false,
  });

  const handleOpenGallery = (index: number) => {
    setLightboxState({
      isOpen: true,
      items: galleryImages,
      currentIndex: index,
      isSingle: false,
    });
  };

  const handlePreviewPublication = (src: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      items: [
        {
          src,
          alt: caption,
          caption,
        },
      ],
      currentIndex: 0,
      isSingle: true,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const handlePrevImage = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex - 1 + prev.items.length) % prev.items.length,
    }));
  };

  const handleNextImage = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.items.length,
    }));
  };

  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Work />
        <Gallery onOpenImage={handleOpenGallery} />
        <Publications onPreviewImage={handlePreviewPublication} />
        <Outreach />
        <Shirt />
        <Directors />
      <Involve />
        <Contact />
      </main>
      <Footer />

      <Lightbox
        isOpen={lightboxState.isOpen}
        items={lightboxState.items}
        currentIndex={lightboxState.currentIndex}
        isSingle={lightboxState.isSingle}
        onClose={handleCloseLightbox}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </>
  );
}
