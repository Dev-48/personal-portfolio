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

  // Duplicate certificates to create a smooth infinite loop
  const scrollingCertificates = [...CERTIFICATIONS, ...CERTIFICATIONS];

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return undefined;

    const autoScroll = () => {
      if (!isPaused) {
        slider.scrollLeft += 0.6;

        // Restart from the beginning after reaching the duplicated section
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
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
    sliderRef.current?.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="certifications"
      className="overflow-hidden bg-navy px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading and controls */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            kicker="Certifications"
            title="Training & Certificates"
          />

        </div>

        {/* Horizontal certificate slider */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="
            flex gap-6 overflow-x-auto scroll-smooth pb-6
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {scrollingCertificates.map((cert, index) => (
            <article
              key={`${cert.id}-${index}`}
              className="
                group w-[300px] flex-none overflow-hidden rounded-3xl
                border border-white/10 bg-white/[0.04]
                backdrop-blur-sm transition-all duration-300
                hover:-translate-y-2 hover:border-electric/40
                hover:shadow-2xl hover:shadow-electric/10
                sm:w-[350px] lg:w-[380px]
              "
            >
              {/* Certificate image */}
              <a
                href={cert.certificate_url}
                target="_blank"
                rel="noreferrer"
                className="relative block aspect-[4/3] overflow-hidden"
                aria-label={`Open ${cert.title} certificate`}
              >
                <img
                  src={cert.certificate_url}
                  alt={`${cert.title} certificate`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />

                <div className="absolute right-4 top-4 rounded-full bg-electric p-2 shadow-lg">
                  <Award className="h-5 w-5 text-navy" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-navy/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
                    View Certificate
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </a>

              {/* Certificate information */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold leading-snug text-white">
                  {cert.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-orange">
                  {cert.issuer}
                </p>

                <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-300">
                  {cert.note}
                </p>

                <a
                  href={cert.certificate_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric transition hover:text-orange"
                >
                  Open certificate
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
}
