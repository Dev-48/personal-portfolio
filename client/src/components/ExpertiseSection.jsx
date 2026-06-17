import { BriefcaseBusiness, Cpu, Sparkles, Zap } from 'lucide-react';
import EXPERTISE from '../data/expertise';
import PROFILE from '../data/profile';
import { SectionHeading } from './SectionHeading';

const ICON_MAP = {
  power: <Zap className="h-6 w-6" />,
  embedded: <Cpu className="h-6 w-6" />,
  service: <BriefcaseBusiness className="h-6 w-6" />,
};

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Expertise" title="Technical domains and toolchain">
          Power, renewable-energy and embedded systems capability supported by simulation, hardware build and documentation tools.
        </SectionHeading>

        {/* Expertise cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE.map((item) => (
            <article key={item.id} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-electric/50 hover:bg-white/[0.07]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/15 text-electric group-hover:bg-electric group-hover:text-navy">
                {ICON_MAP[item.icon] ?? <Sparkles className="h-6 w-6" />}
              </div>
              <h3 className="font-heading text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>

        {/* Tools */}
        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <h3 className="font-heading text-2xl font-bold">Tools</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {PROFILE.tools.map((tool) => (
              <span key={tool} className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
