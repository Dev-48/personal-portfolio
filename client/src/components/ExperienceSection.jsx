import { EXPERIENCE } from '../data/misc';
import { SectionHeading } from './SectionHeading';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker="Experience" title="Practical engineering exposure" />
        <div className="relative border-l border-electric/25 pl-6">
          {EXPERIENCE.map((item) => (
            <article key={item.id} className="relative mb-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <span className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-4 border-navy bg-electric" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-bold">{item.title}</h3>
                  <p className="mt-1 text-slate-300">{item.organisation}</p>
                </div>
                <span className="rounded-full bg-orange/15 px-4 py-2 text-sm font-bold text-orange">{item.period}</span>
              </div>
              <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
