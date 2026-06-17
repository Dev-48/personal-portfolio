import PROFILE from '../data/profile';

export default function About() {
  return (
    <section id="about" className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">

        {/* Bio */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.35em] text-electric">About</p>
          <h2 className="mt-4 font-heading text-4xl font-black">Electrical engineering student focused on practical prototypes.</h2>
          <p className="mt-5 leading-8 text-slate-300">
            Mahadev Kumar is an 8th-semester B.E. Electrical Engineering student at MUET Jamshoro with interests in power systems, renewable energy, industrial energy recovery, automation, IoT and smart energy management.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            His project workflow highlights circuit design, simulation, firmware, fabrication, testing and troubleshooting, with attention to documentation and prototype readiness.
          </p>
        </div>

        {/* Quick info grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(PROFILE.quick_info).map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-navy/70 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-electric">{label}</p>
              <p className="mt-3 text-lg font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
