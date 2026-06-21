
import { useEffect, useRef, useState } from "react";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

import { CERTIFICATIONS } from "../data/misc";
import { SectionHeading } from "./SectionHeading";

export default function CertificationsSection() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  /*
    We duplicate only for smooth visual looping.
    Duplicate cards are hidden from screen readers and keyboard focus.
  */
  const scrollingCertificates = [...CERTIFICATIONS];

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || CERTIFICATIONS.length === 0) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return undefined;

    const autoScroll = () => {
      if (!isPaused) {
        slider.scrollLeft += 0.45;

        const halfwayPoint = slider.scrollWidth / 2;

        if (slider.scrollLeft >= halfwayPoint) {
          slider.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const scrollLeft = () => {
    setIsPaused(true);

    sliderRef.current?.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    setIsPaused(true);

    sliderRef.current?.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="certifications"
      className="scroll-mt-24 overflow-hidden bg-navy px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            kicker="Certifications"
            title="Training, Workshops & Achievements"
          />

          <div className="flex gap-3">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Scroll certificates left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition hover:border-electric/40 hover:bg-electric hover:text-navy"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={scrollRight}
              aria-label="Scroll certificates right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition hover:border-electric/40 hover:bg-electric hover:text-navy"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="
            flex gap-6 overflow-x-auto scroll-smooth pb-6
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {scrollingCertificates.map((cert, index) => {
            const isDuplicate = index >= CERTIFICATIONS.length;

            return (
              <article
                key={`${cert.id}-${index}`}
                aria-hidden={isDuplicate}
                className="
                  group w-[300px] flex-none overflow-hidden rounded-3xl
                  border border-white/10 bg-white/[0.04]
                  backdrop-blur-sm transition-all duration-300
                  hover:-translate-y-2 hover:border-electric/40
                  hover:shadow-2xl hover:shadow-electric/10
                  sm:w-[360px] lg:w-[390px]
                "
              >
                <a
                  href={cert.certificate_url}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={isDuplicate ? -1 : 0}
                  className="relative block aspect-[4/3] overflow-hidden bg-white"
                  aria-label={`Open ${cert.title} certificate`}
                >
                  <img
                    src={cert.certificate_url}
                    alt={isDuplicate ? "" : `${cert.title} certificate`}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy via-navy/55 to-transparent" />

                  <div className="absolute right-4 top-4 rounded-full bg-electric p-2 shadow-lg">
                    <Award className="h-5 w-5 text-navy" />
                  </div>

                  {cert.year && (
                    <div className="absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                      {cert.year}
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center bg-navy/65 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
                      View Certificate
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </a>

                <div className="p-6">
                  {cert.category && (
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-electric">
                      {cert.category}
                    </p>
                  )}

                  <h3 className="font-heading text-xl font-bold leading-snug text-white">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold leading-6 text-orange">
                    {cert.issuer}
                  </p>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-300">
                    {cert.note}
                  </p>

                  <a
                    href={cert.certificate_url}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={isDuplicate ? -1 : 0}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric transition hover:text-orange"
                  >
                    Open certificate
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-2 text-center text-xs text-slate-500">
          Hover, focus or touch to pause the certificate slider.
        </p>
      </div>
    </section>
  );
}

