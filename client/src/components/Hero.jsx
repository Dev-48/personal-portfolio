
import {
  ArrowRight,
  Download,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import PROFILE from "../data/profile";
import { scrollTo, whatsappHref } from "../utils/helpers";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-navy text-white"
    >
      {/* Main section background effects */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_12%_20%,rgba(14,165,233,0.15),transparent_34%),radial-gradient(circle_at_88%_70%,rgba(249,115,22,0.08),transparent_30%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:55px_55px]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-48 top-20 -z-10 h-[480px] w-[480px] rounded-full bg-electric/15 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-52 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue/20 blur-[140px]"
      />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1.08fr_0.92fr] lg:gap-4 lg:px-8 lg:pb-0">
        {/* Left content */}
        <div className="relative z-20 py-8 lg:py-14">
          {/* Availability status */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-sm font-semibold text-electric backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange" />
            </span>

            {PROFILE.availability}
          </div>

          {/* Profession */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-electric" />

            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-electric sm:text-sm">
              {PROFILE.subtitle}
            </p>
          </div>

          {/* Name */}
          <h1 className="mt-5 max-w-4xl font-heading text-5xl font-black uppercase leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-[4.6rem] xl:text-[5rem]">
            {PROFILE.full_name}
          </h1>

          {/* Role */}
          <h2 className="mt-6 max-w-3xl font-heading text-2xl font-bold leading-tight text-slate-100 sm:text-3xl">
            {PROFILE.role_line}
          </h2>

          {/* Tagline */}
          <p className="mt-5 flex max-w-3xl items-start gap-2 text-lg font-semibold leading-8 text-electric sm:items-center sm:text-xl">
            <Sparkles className="mt-1 h-5 w-5 shrink-0 sm:mt-0" />
            {PROFILE.tagline}
          </p>

          {/* Summary */}
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {PROFILE.summary}
          </p>

          {/* Location */}
          <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 shrink-0 text-orange" />
            <span>{PROFILE.quick_info.Location}</span>
          </div>

          {/* Skill tags */}
          <div className="mt-7 flex max-w-3xl flex-wrap gap-2.5">
            {PROFILE.skill_tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-electric/40 hover:bg-electric/10 hover:text-electric"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 font-bold text-navy shadow-xl shadow-electric/20 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
            >
              View Projects

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="/Mahadev_cv.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-electric/40 hover:bg-white/10"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download CV
            </a>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 font-bold text-white shadow-xl shadow-orange/20 transition duration-300 hover:-translate-y-1 hover:bg-orange/90 hover:shadow-2xl"
            >
              <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              WhatsApp
            </a>
          </div>

          {/* Counters */}
          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {PROFILE.counters.map((counter) => (
              <div
                key={counter.label}
                className="group rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-electric/30 hover:bg-white/[0.08]"
              >
                <strong className="block font-heading text-3xl font-black text-white">
                  {counter.value}
                </strong>

                <span className="mt-1 block text-xs leading-5 text-slate-400">
                  {counter.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right profile image */}
        <div className="relative z-10 mx-auto flex min-h-[540px] w-full items-end justify-center sm:min-h-[660px] lg:min-h-[820px] lg:justify-end">
          {/* Subtle glow only, no image card */}
          <div
            aria-hidden="true"
            className="absolute bottom-32 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-electric/10 blur-[100px] sm:h-[480px] sm:w-[480px] lg:h-[560px] lg:w-[560px]"
          />

          {/* Very light outline behind person */}
          <div
            aria-hidden="true"
            className="absolute bottom-24 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-electric/10 sm:h-[460px] sm:w-[460px] lg:h-[540px] lg:w-[540px]"
          />

          {/* Image wrapper */}
          <div className="relative h-[570px] w-full max-w-[500px] sm:h-[700px] sm:max-w-[600px] lg:h-[830px] lg:max-w-[700px] xl:h-[880px]">
            <img
              src="/profile.png"
              alt={`${PROFILE.full_name}, Electrical Engineering student`}
              loading="eager"
              fetchPriority="high"
              draggable="false"
              className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_30px_35px_rgba(0,0,0,0.40)] sm:scale-[1.03] lg:scale-[1.08]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 73%, rgba(0,0,0,0.98) 79%, rgba(0,0,0,0.76) 87%, rgba(0,0,0,0.28) 95%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 73%, rgba(0,0,0,0.98) 79%, rgba(0,0,0,0.76) 87%, rgba(0,0,0,0.28) 95%, transparent 100%)",
              }}
            />

            {/* Main cloudy effect around legs */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 left-1/2 z-20 h-52 w-[125%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(8,30,67,0.98)_0%,rgba(8,30,67,0.85)_28%,rgba(8,30,67,0.48)_52%,rgba(8,30,67,0.16)_70%,transparent_84%)] blur-2xl"
            />

            {/* Light fog layer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-3 left-1/2 z-30 h-28 w-[100%] -translate-x-1/2 rounded-full bg-slate-300/[0.07] blur-3xl"
            />

            {/* Side fog */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 left-[-10%] z-30 h-32 w-52 rounded-full bg-navy/90 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 right-[-10%] z-30 h-32 w-52 rounded-full bg-navy/90 blur-3xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
    </section>
  );
}
