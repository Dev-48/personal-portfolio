
import {
  BookOpen,
  Building2,
  CalendarDays,
  GraduationCap,
  Layers3,
  MapPin,
  Sparkles,
  UserRound,
  Zap,
} from "lucide-react";

import PROFILE from "../data/profile";

const INFO_ICONS = {
  Location: MapPin,
  University: Building2,
  Degree: GraduationCap,
  Department: BookOpen,
  Semester: Layers3,
  Status: UserRound,
  Duration: CalendarDays,
  Specialization: Zap,
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-electric/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-orange/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-electric" />

            <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-electric sm:text-sm">
              About Me
            </p>
          </div>

          <h2 className="mt-5 font-heading text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Engineering practical solutions for power, energy and embedded
            systems.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My work covers simulation, circuit design, programming,
            fabrication, testing and technical documentation.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Biography */}
          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-40 w-40 rounded-full bg-electric/10 blur-3xl"
            />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-electric/20 bg-electric/10 text-electric">
                <Sparkles className="h-7 w-7" />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-orange">
                {PROFILE.subtitle}
              </p>

              <h3 className="mt-4 font-heading text-2xl font-black leading-snug text-white sm:text-3xl">
                {PROFILE.role_line}
              </h3>

              <p className="mt-6 text-base leading-8 text-slate-300">
                {PROFILE.summary}
              </p>

              <p className="mt-4 text-base leading-8 text-slate-300">
                My project workflow includes concept development, component
                selection, circuit simulation, embedded programming, hardware
                fabrication, system testing and troubleshooting.
              </p>

              

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>

                <p className="text-sm font-semibold text-slate-200">
                  {PROFILE.availability}
                </p>
              </div>
            </div>
          </article>

          {/* Information cards */}
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
            {Object.entries(PROFILE.quick_info).map(([label, value]) => {
              const Icon = INFO_ICONS[label] || GraduationCap;
              const isWide = label === "Focus Areas";

              return (
                <article
                  key={label}
                  className={`group min-w-0 rounded-3xl border border-white/10 bg-navy/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-electric/40 hover:bg-navy sm:p-6 ${
                    isWide ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-electric/20 bg-electric/10 text-electric transition group-hover:bg-electric group-hover:text-navy">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        {label}
                      </p>

                      <p className="mt-2 break-words text-base font-semibold leading-6 text-white sm:text-lg">
                        {value}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
