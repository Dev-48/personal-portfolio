
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  MapPin,
} from "lucide-react";

import { EXPERIENCE } from "../data/misc";
import { SectionHeading } from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-navy px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Experience" title="Industrial Experience" />

        <div className="relative mt-12 border-l border-electric/25 pl-6 sm:pl-8">
          {EXPERIENCE.map((item) => (
            <article
              key={item.id}
              className="relative mb-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-electric/40 sm:p-8"
            >
              <span className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-4 border-navy bg-electric sm:-left-[41px]" />

              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-electric/20 bg-electric/10 text-electric">
                    <BriefcaseBusiness className="h-6 w-6" />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange">
                    {item.type}
                  </p>

                  <h3 className="mt-3 font-heading text-2xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-lg font-medium text-slate-300">
                    {item.organisation}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <span className="inline-flex items-center gap-2 rounded-full bg-orange/15 px-4 py-2 text-sm font-bold text-orange">
                    <CalendarDays className="h-4 w-4" />
                    {item.period}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-300">
                    {item.duration}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-electric" />
                {item.location}
              </div>

              <p className="mt-5 leading-8 text-slate-300">
                {item.description}
              </p>

              {item.highlights?.length > 0 && (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.highlights.map((point) => (
                    <div
                      key={point}
                      className="flex gap-3 text-sm leading-7 text-slate-300"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-electric" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}

              {item.skills?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {item.certificate_url && (
                <a
                  href={item.certificate_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-electric px-5 py-3 text-sm font-bold text-navy transition hover:-translate-y-1 hover:bg-white"
                >
                  <Award className="h-4 w-4" />
                  View Internship Certificate
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}