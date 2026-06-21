import { BriefcaseBusiness } from 'lucide-react';
import { SERVICES } from '../data/misc';
import { SectionHeading } from './SectionHeading';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Services" title="Engineering Support for Practical Projects">
          Prototype, simulation, documentation and mentoring services for practical electrical and embedded systems work.
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.id} className="rounded-[2rem] border border-white/10 bg-navy/75 p-6">
              <BriefcaseBusiness className="mb-5 h-9 w-9 text-orange" />
              <h3 className="font-heading text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
