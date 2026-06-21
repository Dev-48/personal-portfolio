import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../data/misc';
import PROFILE from '../data/profile';
import { SectionHeading } from './SectionHeading';

export default function EducationSection() {
  return (
    <section id="education" className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Education" title="Academic Background" />

        <div className="grid gap-5 lg:grid-cols-2">
          {EDUCATION.map((item) => (
            <article key={item.id} className="rounded-[2rem] border border-white/10 bg-navy/70 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/15 text-electric">
                <GraduationCap />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange">{item.kind}</p>
              <h3 className="mt-2 font-heading text-2xl font-bold">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.institution}</p>
              <p className="mt-2 text-sm font-semibold text-electric">{item.period}</p>
              <p className="mt-4 leading-7 text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
}
