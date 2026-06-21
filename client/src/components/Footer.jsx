
import PROFILE from "../data/profile";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6.5 8.2H3V21h3.5V8.2ZM4.75 3A2.03 2.03 0 1 0 4.75 7.06 2.03 2.03 0 0 0 4.75 3ZM21 13.65c0-3.86-2.06-5.66-4.81-5.66a4.16 4.16 0 0 0-3.75 2.06V8.2H9V21h3.44v-6.34c0-1.67.32-3.29 2.39-3.29 2.04 0 2.06 1.91 2.06 3.4V21H21v-7.35Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.59 5.95L.08 24l6.3-1.65a11.86 11.86 0 0 0 5.69 1.45h.01C18.64 23.8 24 18.46 24 11.9c0-3.18-1.24-6.17-3.48-8.42ZM12.08 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.87 9.87 0 0 1-1.52-5.28C2.18 6.44 6.62 2 12.08 2a9.84 9.84 0 0 1 7 2.9A9.84 9.84 0 0 1 22 11.9c0 5.46-4.45 9.9-9.92 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-1.76-.88-2.92-1.57-4.09-3.57-.31-.53.31-.49.88-1.63.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

export default function Footer() {
  const whatsappLink = `${PROFILE.whatsapp_url}?text=${encodeURIComponent(
    PROFILE.whatsapp_prefill
  )}`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-slate-300">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Call-to-action panel */}
        <div className="mb-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-1 shadow-2xl shadow-cyan-950/20">
          <div className="flex flex-col gap-6 rounded-[22px] bg-slate-950/80 px-6 py-8 backdrop-blur-xl md:flex-row md:items-center md:justify-between md:px-10">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>

                <span className="text-sm font-medium text-emerald-300">
                  {PROFILE.availability}
                </span>
              </div>

              <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Have an electrical, IoT or renewable-energy project in mind?
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                Let&apos;s discuss your idea and develop it from circuit design
                and simulation to hardware implementation and testing.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <WhatsAppIcon />
              Discuss a Project
            </a>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand information */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="Go to homepage"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-black text-white shadow-lg shadow-cyan-500/20">
                MK
              </span>

              <span>
                <span className="block text-xl font-bold text-white">
                  {PROFILE.full_name}
                </span>
                <span className="block text-sm text-cyan-300">
                  Electrical Engineering Student & Project Developer
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              {PROFILE.summary}
            </p>

            <p className="mt-4 font-medium text-slate-200">
              {PROFILE.tagline}
            </p>

            {/* Social buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Send email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <EmailIcon />
              </a>

              <a
                href={PROFILE.linkedin_url}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <LinkedInIcon />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Contact on WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition hover:translate-x-1 hover:text-cyan-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-700 transition group-hover:bg-cyan-400" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 text-cyan-400">
                  <EmailIcon />
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm text-slate-300 transition group-hover:text-cyan-300">
                    {PROFILE.email}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 text-cyan-400">
                  <PhoneIcon />
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm text-slate-300 transition group-hover:text-cyan-300">
                    {PROFILE.phone}
                  </span>
                </span>
              </a>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="block text-xs uppercase tracking-wider text-slate-500">
                  Based in
                </span>
                <span className="mt-1 block text-sm text-slate-300">
                  {PROFILE.quick_info.Location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 pt-7 text-sm md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-slate-400">{PROFILE.footer_text}</p>
            <p className="text-xs text-slate-600">
              Designed and developed with React and Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#privacy"
              className="text-slate-500 transition hover:text-cyan-300"
            >
              Privacy
            </a>

            <span className="h-1 w-1 rounded-full bg-slate-700" />

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              Back to top
              <ArrowUpIcon />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
