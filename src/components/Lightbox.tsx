"use client";

import { useEffect, useRef } from "react";

export interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  isOpen: boolean;
  items: LightboxItem[];
  currentIndex: number;
  isSingle?: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  isOpen,
  items,
  currentIndex,
  isSingle = false,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.classList.add("menu-open");
      closeBtnRef.current?.focus();
    } else {
      document.body.classList.remove("menu-open");
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (!isSingle && e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev();
      } else if (!isSingle && e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
      } else if (e.key === "Tab") {
        const focusableElements = [
          closeBtnRef.current,
          !isSingle ? prevBtnRef.current : null,
          !isSingle ? nextBtnRef.current : null,
        ].filter(Boolean) as HTMLElement[];

        if (!focusableElements.length) return;
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isSingle, onClose, onPrev, onNext]);

  if (!isOpen || !items.length) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div
      className="lightbox"
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-caption"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        ref={closeBtnRef}
        className="lightbox-close"
        type="button"
        aria-label="Close gallery image"
        onClick={onClose}
      >
        &times;
      </button>

      {!isSingle && (
        <button
          ref={prevBtnRef}
          className="lightbox-nav lightbox-prev"
          type="button"
          aria-label="Previous image"
          onClick={onPrev}
        >
          &#8249;
        </button>
      )}

      <figure className="lightbox-content">
        <img
          src={currentItem.src}
          alt={currentItem.alt}
          id="lightbox-image"
        />
        <figcaption id="lightbox-caption">{currentItem.caption}</figcaption>
      </figure>

      {!isSingle && (
        <button
          ref={nextBtnRef}
          className="lightbox-nav lightbox-next"
          type="button"
          aria-label="Next image"
          onClick={onNext}
        >
          &#8250;
        </button>
      )}
    </div>
  );
}
