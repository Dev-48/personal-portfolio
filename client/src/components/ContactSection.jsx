import { useCallback, useState } from 'react';
import { ArrowRight, Download, ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import PROFILE from '../data/profile';
import { whatsappHref } from '../utils/helpers';
import { SectionHeading } from './SectionHeading';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [error, setError] = useState('');

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("EMAIL SENT!")
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(`Server responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  }, [form]);


  return (
    <section id="contact" className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Contact" title="Discuss an opportunity or technical project" />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Direct channels */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <h3 className="font-heading text-2xl font-bold">Direct channels</h3>
            <div className="mt-6 grid gap-4">
              <a href={whatsappHref()} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-orange px-5 py-4 font-bold text-white transition hover:-translate-y-1">
                <MessageCircle /> WhatsApp
              </a>
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 font-semibold text-slate-200 hover:bg-white/10">
                <Mail /> {PROFILE.email}
              </a>
              <a href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 font-semibold text-slate-200 hover:bg-white/10">
                <Phone /> {PROFILE.phone}
              </a>
              <a href={PROFILE.linkedin_url} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 font-semibold text-slate-200 hover:bg-white/10">
                <ExternalLink /> LinkedIn
              </a>
              <a href="Mahadev_cv.pdf" download className="flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 font-semibold text-slate-200 hover:bg-white/10">
                <Download /> CV PDF
              </a>
            </div>
            <p className="mt-6 flex items-start gap-2 text-sm leading-6 text-slate-400">
              <MapPin className="mt-1 h-4 w-4 text-electric" /> Hyderabad, Sindh, Pakistan
            </p>
          </div>

          {/* Contact form — submits via mailto */}
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-200">
                Name
                <input value={form.name} onChange={(e) => update('name', e.target.value)} className="mt-2 w-full rounded-2xl border border-white/10 bg-navy px-4 py-3 text-white outline-none focus:border-electric" required />
              </label>
              <label className="block text-sm font-semibold text-slate-200">
                Email
                <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className="mt-2 w-full rounded-2xl border border-white/10 bg-navy px-4 py-3 text-white outline-none focus:border-electric" required />
              </label>
            </div>
            <label className="mt-4 block text-sm font-semibold text-slate-200">
              Subject
              <input value={form.subject} onChange={(e) => update('subject', e.target.value)} className="mt-2 w-full rounded-2xl border border-white/10 bg-navy px-4 py-3 text-white outline-none focus:border-electric" required />
            </label>
            <label className="mt-4 block text-sm font-semibold text-slate-200">
              Message
              <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={5} className="mt-2 w-full rounded-2xl border border-white/10 bg-navy px-4 py-3 text-white outline-none focus:border-electric" required />
            </label>
            {error && <p className="mt-4 rounded-2xl bg-red-500/15 px-4 py-3 text-sm text-red-200">{error}</p>}
            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 font-bold text-navy transition hover:bg-white">
              Send via Email <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
