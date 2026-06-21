
import { useState } from "react";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import PROFILE from "../data/profile";
import { SectionHeading } from "./SectionHeading";

const WHATSAPP_NUMBER = "923327838365";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "", // honeypot field for basic spam protection
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const update = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (error) setError("");
  };

  const buildWhatsAppMessage = () => {
    return [
      "Hello Mahadev, I want to discuss a project/opportunity.",
      "",
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Subject: ${form.subject.trim()}`,
      "",
      "Message:",
      form.message.trim(),
    ].join("\n");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic anti-spam honeypot
    if (form.website.trim()) {
      return;
    }

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!form.subject.trim()) {
      setError("Please enter a subject.");
      return;
    }

    if (form.message.trim().length < 10) {
      setError("Please write a message of at least 10 characters.");
      return;
    }

    const message = encodeURIComponent(buildWhatsAppMessage());
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-navy px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Contact"
          title="Discuss an opportunity or technical project"
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Direct channels */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-8">
            <h3 className="font-heading text-2xl font-bold">
              Direct Channels
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Contact me for internships, freelance projects, prototype
              development, simulation support or technical documentation.
            </p>

            <div className="mt-6 grid gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  PROFILE.whatsapp_prefill
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-orange px-5 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-orange/90"
              >
                <MessageCircle className="h-6 w-6" />
                WhatsApp
              </a>

              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 font-semibold text-slate-200 transition hover:bg-white/10"
              >
                <Mail className="h-6 w-6 text-electric" />
                <span className="break-all">{PROFILE.email}</span>
              </a>

              <a
                href={`tel:${PROFILE.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 font-semibold text-slate-200 transition hover:bg-white/10"
              >
                <Phone className="h-6 w-6 text-electric" />
                {PROFILE.phone}
              </a>

              <a
                href={PROFILE.linkedin_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 font-semibold text-slate-200 transition hover:bg-white/10"
              >
                <ExternalLink className="h-6 w-6 text-electric" />
                LinkedIn
              </a>

              <a
                href="/Mahadev_cv.pdf"
                download
                className="flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 font-semibold text-slate-200 transition hover:bg-white/10"
              >
                <Download className="h-6 w-6 text-electric" />
                CV PDF
              </a>

              <div className="flex items-center gap-4 px-1 py-2 text-slate-400">
                <MapPin className="h-5 w-5 text-electric" />
                {PROFILE.quick_info.Location}
              </div>
            </div>
          </div>

          {/* WhatsApp form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-8"
          >
            {/* Hidden honeypot field */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={(event) => update("website", event.target.value)}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-slate-200"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  maxLength={60}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-navy px-5 py-4 font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-slate-200"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  maxLength={80}
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-navy px-5 py-4 font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-bold text-slate-200"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(event) => update("subject", event.target.value)}
                maxLength={100}
                placeholder="Project request"
                className="w-full rounded-2xl border border-white/10 bg-navy px-5 py-4 font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-slate-200"
              >
                Message
              </label>

              <textarea
                id="message"
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
                maxLength={600}
                rows={6}
                placeholder="Write your message here..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-navy px-5 py-4 font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
              />

              <p className="mt-2 text-right text-xs text-slate-500">
                {form.message.length}/600
              </p>
            </div>

            {error && (
              <p className="mt-4 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm font-semibold text-red-300">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-7 py-4 font-bold text-navy shadow-xl shadow-electric/20 transition hover:-translate-y-1 hover:bg-white"
            >
              Send on WhatsApp
              <ArrowRight className="h-5 w-5" />
            </button>

            <p className="mt-4 text-center text-xs leading-6 text-slate-500">
              This form opens WhatsApp with your message ready to send.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}