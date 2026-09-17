const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const menuLinks = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const statNumbers = document.querySelectorAll(".stat-number");
const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const closeLightboxButton = document.querySelector(".lightbox-close");
const previousLightboxButton = document.querySelector(".lightbox-prev");
const nextLightboxButton = document.querySelector(".lightbox-next");

let activeGalleryIndex = 0;
let previousFocus = null;

const setHeaderShadow = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

const closeMenu = () => {
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation menu");
  document.body.classList.remove("menu-open");
};

const toggleMenu = () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMenu();
    return;
  }

  navLinks.classList.add("is-open");
  navToggle.setAttribute("aria-expanded", "true");
  navToggle.setAttribute("aria-label", "Close navigation menu");
  document.body.classList.add("menu-open");
};

const formatNumber = (value) => {
  return new Intl.NumberFormat("en-US").format(value);
};

const animateCounter = (counter) => {
  const target = Number(counter.dataset.target);
  const suffix = counter.dataset.suffix || "";
  const duration = 1500;
  const startTime = performance.now();

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(easedProgress * target);

    counter.textContent = `${formatNumber(currentValue)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      counter.textContent = `${formatNumber(target)}${suffix}`;
    }
  };

  requestAnimationFrame(update);
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -48px 0px",
  }
);

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.55,
  }
);

const galleryData = galleryItems.map((item) => {
  const image = item.querySelector("img");
  const fullImageSource = image.src.replace("w=600", "w=1200");

  return {
    src: fullImageSource,
    alt: image.alt,
    caption: item.dataset.caption,
  };
});

const updateLightbox = () => {
  const item = galleryData[activeGalleryIndex];

  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxCaption.textContent = item.caption;
};

const openLightbox = (index) => {
  activeGalleryIndex = index;
  previousFocus = document.activeElement;
  updateLightbox();
  lightbox.hidden = false;
  document.body.classList.add("menu-open");
  closeLightboxButton.focus();
};

const downloadImage = async (url, filename, buttonElement) => {
  const originalContent = buttonElement ? buttonElement.innerHTML : null;

  if (buttonElement) {
    buttonElement.disabled = true;
    buttonElement.innerHTML = `
      <svg class="spin-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/></svg>
      <span>Downloading...</span>
    `;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Download request failed");
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = filename || "esther-idisi-foundation-publication.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);

    if (buttonElement) {
      buttonElement.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Downloaded!</span>
      `;
      setTimeout(() => {
        buttonElement.innerHTML = originalContent;
        buttonElement.disabled = false;
      }, 2400);
    }
  } catch (error) {
    console.warn("Direct blob download failed, attempting fallback:", error);
    const fallbackLink = document.createElement("a");
    fallbackLink.href = url;
    fallbackLink.target = "_blank";
    fallbackLink.download = filename || "esther-idisi-foundation-publication.jpg";
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);

    if (buttonElement) {
      buttonElement.innerHTML = originalContent;
      buttonElement.disabled = false;
    }
  }
};

const openSingleImageLightbox = (src, caption) => {
  previousFocus = document.activeElement;
  lightboxImage.src = src;
  lightboxImage.alt = caption || "Publication clipping";
  lightboxCaption.textContent = caption || "";
  previousLightboxButton.style.display = "none";
  nextLightboxButton.style.display = "none";
  lightbox.hidden = false;
  document.body.classList.add("menu-open");
  closeLightboxButton.focus();
};

const restoreLightboxNav = () => {
  previousLightboxButton.style.display = "";
  nextLightboxButton.style.display = "";
};

const closeLightbox = () => {
  lightbox.hidden = true;
  lightboxImage.src = "";
  restoreLightboxNav();
  document.body.classList.remove("menu-open");

  if (previousFocus) {
    previousFocus.focus();
  }
};

const showPreviousImage = () => {
  activeGalleryIndex =
    (activeGalleryIndex - 1 + galleryData.length) % galleryData.length;
  updateLightbox();
};

const showNextImage = () => {
  activeGalleryIndex = (activeGalleryIndex + 1) % galleryData.length;
  updateLightbox();
};

const trapLightboxFocus = (event) => {
  if (lightbox.hidden || event.key !== "Tab") {
    return;
  }

  const focusableItems = [
    closeLightboxButton,
    previousLightboxButton,
    nextLightboxButton,
  ].filter((el) => el.style.display !== "none");

  const firstItem = focusableItems[0];
  const lastItem = focusableItems[focusableItems.length - 1];

  if (event.shiftKey && document.activeElement === firstItem) {
    event.preventDefault();
    lastItem.focus();
  } else if (!event.shiftKey && document.activeElement === lastItem) {
    event.preventDefault();
    firstItem.focus();
  }
};

window.addEventListener("scroll", setHeaderShadow, { passive: true });
window.addEventListener("load", setHeaderShadow);

navToggle.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  trapLightboxFocus(event);

  if (event.key === "Escape") {
    closeMenu();

    if (!lightbox.hidden) {
      closeLightbox();
    }
  }

  if (!lightbox.hidden && event.key === "ArrowLeft" && previousLightboxButton.style.display !== "none") {
    event.preventDefault();
    showPreviousImage();
  }

  if (!lightbox.hidden && event.key === "ArrowRight" && nextLightboxButton.style.display !== "none") {
    event.preventDefault();
    showNextImage();
  }
});

revealItems.forEach((item) => revealObserver.observe(item));
statNumbers.forEach((number) => statObserver.observe(number));

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    restoreLightboxNav();
    openLightbox(index);
  });
});

// Publication downloads & previews
const downloadButtons = document.querySelectorAll(".download-pub-btn");
downloadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const url = button.dataset.downloadUrl;
    const filename = button.dataset.filename;
    downloadImage(url, filename, button);
  });
});

const downloadAllBtn = document.querySelector("#download-all-publications");
if (downloadAllBtn) {
  downloadAllBtn.addEventListener("click", async () => {
    const buttons = Array.from(document.querySelectorAll(".download-pub-btn"));
    const originalContent = downloadAllBtn.innerHTML;

    downloadAllBtn.disabled = true;
    downloadAllBtn.innerHTML = `
      <svg class="spin-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/></svg>
      <span>Downloading All...</span>
    `;

    for (let i = 0; i < buttons.length; i++) {
      const btn = buttons[i];
      const url = btn.dataset.downloadUrl;
      const filename = btn.dataset.filename;
      await downloadImage(url, filename, null);
      await new Promise((resolve) => setTimeout(resolve, 400));
    }

    downloadAllBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      <span>All Downloaded!</span>
    `;

    setTimeout(() => {
      downloadAllBtn.innerHTML = originalContent;
      downloadAllBtn.disabled = false;
    }, 2800);
  });
}

const pubPreviewButtons = document.querySelectorAll(
  ".publication-preview-btn, .publication-card-preview-btn"
);
pubPreviewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const fullSrc = btn.dataset.fullSrc;
    const caption = btn.dataset.caption;
    openSingleImageLightbox(fullSrc, caption);
  });
});

closeLightboxButton.addEventListener("click", closeLightbox);
previousLightboxButton.addEventListener("click", showPreviousImage);
nextLightboxButton.addEventListener("click", showNextImage);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});
