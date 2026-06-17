import { ArrowRight, Download, MessageCircle } from 'lucide-react';
import PROFILE from '../data/profile';
import { scrollTo, whatsappHref } from '../utils/helpers';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pt-28 text-white sm:pt-32">
      {/* Background blobs */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue/30 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-electric/20 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

        {/* Text */}
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-sm font-semibold text-electric">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange" /> {PROFILE.availability}
          </div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.45em] text-electric">{PROFILE.subtitle}</p>
          <h1 className="mt-4 font-heading text-5xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">{PROFILE.full_name}</h1>
          <h2 className="mt-5 max-w-3xl font-heading text-2xl font-bold text-slate-100 sm:text-3xl">{PROFILE.role_line}</h2>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-electric">{PROFILE.tagline}</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{PROFILE.summary}</p>

          {/* Skill tags */}
          <div className="mt-7 flex flex-wrap gap-3">
            {PROFILE.skill_tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">{tag}</span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button onClick={() => scrollTo('projects')} className="inline-flex items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 font-bold text-navy shadow-xl shadow-electric/20 transition hover:-translate-y-1 hover:bg-white">
              View Projects <ArrowRight className="h-4 w-4" />
            </button>
            <a href="Mahadev_cv.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10">
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a href={whatsappHref()} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 font-bold text-white shadow-xl shadow-orange/20 transition hover:-translate-y-1 hover:bg-orange/90">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          {/* Counters */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {PROFILE.counters.map((counter) => (
              <div key={counter.label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <strong className="block font-heading text-3xl text-white">{counter.value}</strong>
                <span className="mt-1 block text-xs leading-5 text-slate-400">{counter.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile photo */}
        <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -right-4 -top-4 h-40 w-40 rounded-full bg-orange/20 blur-2xl" />
          <div className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-4 shadow-2xl shadow-black/40">
            <img src="profile.jpeg" alt="Mahadev Kumar" loading="eager" className="aspect-[4/5] w-full rounded-[2rem] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
