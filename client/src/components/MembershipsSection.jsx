import {
  Award,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

import { PROFESSIONAL_MEMBERSHIPS } from "../data/misc";
import { SectionHeading } from "./SectionHeading";

export default function MembershipsSection() {
  return (
    <section
      id="memberships"
      className="scroll-mt-24 bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Memberships"
          title="Professional Memberships"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PROFESSIONAL_MEMBERSHIPS.map((membership) => (
            <article
              key={membership.id}
              className="group rounded-[2rem] border border-white/10 bg-navy/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-electric/40 hover:bg-navy"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-electric/20 bg-electric/10 text-electric transition group-hover:bg-electric group-hover:text-navy">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange">
                {membership.status}
              </p>

              <h3 className="mt-3 font-heading text-xl font-black leading-snug text-white">
                {membership.title}
              </h3>

              <p className="mt-3 text-sm font-semibold leading-6 text-electric">
                {membership.organisation}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {membership.period}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {membership.note}
              </p>

              {membership.certificate_url && (
                <a
                  href={membership.certificate_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-electric transition hover:text-orange"
                >
                  <Award className="h-4 w-4" />
                  View Membership Certificate
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