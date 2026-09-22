"use client";

import { useEffect, useRef, useState } from "react";

interface StatProps {
  target: number;
  suffix?: string;
  label: string;
  alignCenter?: boolean;
}

function StatItem({ target, suffix = "", label, alignCenter }: StatProps) {
  const [displayValue, setDisplayValue] = useState<string>("0" + suffix);
  const itemRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef<boolean>(false);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const formatNumber = (val: number) => {
      return new Intl.NumberFormat("en-US").format(val);
    };

    const animateCounter = () => {
      const duration = 1500;
      const startTime = performance.now();

      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easedProgress * target);

        setDisplayValue(`${formatNumber(currentValue)}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setDisplayValue(`${formatNumber(target)}${suffix}`);
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            animateCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.55,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target, suffix]);

  return (
    <article
      ref={itemRef}
      className="stat-item"
      style={alignCenter ? { textAlign: "center" } : undefined}
    >
      <strong className="stat-number">{displayValue}</strong>
      <span>{label}</span>
    </article>
  );
}

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Foundation impact statistics">
      <div
        className="stats-grid reveal"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <StatItem target={1} suffix="+" label="Years of Service" alignCenter />
        <StatItem target={200} suffix="+" label="People Served" />
        <StatItem target={1} label="Annual Outreach Programme" />
      </div>
    </section>
  );
}
