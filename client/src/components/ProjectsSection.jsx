import { useMemo, useState } from 'react';
import { ExternalLink, Eye, Filter, X } from 'lucide-react';
import PROJECTS, { MINI_PROJECTS } from '../data/projects';
import { SectionHeading } from './SectionHeading';

// ── Project detail modal ──────────────────────────────────────────────────────

function ProjectModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-4 backdrop-blur"
      role="dialog"
      aria-modal="true"
    >
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-navy p-6 text-white shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-electric">
              {project.status}
            </p>

            <h3 className="mt-2 font-heading text-3xl font-bold">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-white/10 p-2 hover:bg-white/10"
            aria-label="Close project details"
          >
            <X />
          </button>
        </div>

        <p className="mt-5 leading-8 text-slate-300">
          {project.overview}
        </p>

        <p className="mt-5 text-slate-300">
          <strong className="text-white">Role:</strong> {project.role}
        </p>

        {project.key_features?.length > 0 && (
          <>
            <h4 className="mt-7 font-heading text-xl font-bold">
              Key features
            </h4>

            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {project.key_features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-2xl bg-white/5 p-4 text-sm text-slate-200"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

// ── Diagram lightbox ──────────────────────────────────────────────────────────

function DiagramLightbox({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
        aria-label="Close diagram"
      >
        <X />
      </button>

      <figure className="w-full max-w-5xl">
        <img
          src={project.diagram_url}
          alt={`${project.title} diagram`}
          className="max-h-[78vh] w-full rounded-3xl object-contain"
        />

        <figcaption className="mt-4 text-center font-heading text-xl font-bold text-white">
          {project.title}
        </figcaption>
      </figure>
    </div>
  );
}

// ── Main Projects section ─────────────────────────────────────────────────────

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxProject, setLightboxProject] = useState(null);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))],
    []
  );

  const filtered =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Projects"
          title="Selected electrical and embedded systems work"
        />

        {/* Category filter */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300">
            <Filter className="h-4 w-4" />
            Filter
          </span>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                filter === cat
                  ? 'bg-electric text-navy'
                  : 'border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main project cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-navy/80 shadow-2xl shadow-black/20"
            >
              <button
                onClick={() => setLightboxProject(project)}
                className="block w-full overflow-hidden"
                aria-label={`View ${project.title} diagram`}
              >
                <img
                  src={project.image_url}
                  alt={project.title}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                />
              </button>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-orange/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange">
                    {project.status}
                  </span>

                  <span className="rounded-full bg-electric/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-electric">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {project.overview}
                </p>

                <p className="mt-4 text-sm text-slate-400">
                  <strong className="text-white">Role:</strong>{' '}
                  {project.role}
                </p>

                {project.tags?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-electric px-5 py-3 font-bold text-navy transition hover:bg-white"
                  >
                    <Eye className="h-4 w-4" />
                    View Details
                  </button>

                  <button
                    onClick={() => setLightboxProject(project)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 font-bold text-white transition hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Diagram
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Collapsible Mini Projects */}
        <details className="group mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10 sm:p-8">
          <summary className="cursor-pointer list-none">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-electric">
                  Additional Project Work
                </p>

                <h3 className="mt-2 font-heading text-2xl font-black text-white sm:text-3xl">
                  {MINI_PROJECTS.length} Mini Projects
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                  Arduino, digital electronics, electrical machines, sensors,
                  circuit analysis and IEEE SSCS microcontroller proficiency
                  projects.
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex rounded-full bg-electric px-5 py-3 text-sm font-bold text-navy transition group-open:hidden">
                  View Mini Projects ↓
                </span>

                <span className="hidden rounded-full bg-white px-5 py-3 text-sm font-bold text-navy transition group-open:inline-flex">
                  Hide Mini Projects ↑
                </span>
              </div>
            </div>
          </summary>

          <div className="mt-8 border-t border-white/10 pt-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {MINI_PROJECTS.map((project) => (
                <article
                  key={project.id}
                  className="rounded-2xl border border-white/10 bg-navy/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-electric/40"
                >
                  <h4 className="font-heading text-lg font-bold text-white">
                    {project.title}
                  </h4>

                  <p className="mt-1 text-sm text-sky-300">
                    {project.area}
                  </p>

                  {project.date && (
                    <p className="mt-3 text-xs font-medium text-slate-500">
                      {project.date}
                    </p>
                  )}

                  {project.note && (
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {project.note}
                    </p>
                  )}

                  {project.technologies?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </details>
      </div>

      {/* Project details modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Diagram lightbox */}
      {lightboxProject && (
        <DiagramLightbox
          project={lightboxProject}
          onClose={() => setLightboxProject(null)}
        />
      )}
    </section>
  );
}