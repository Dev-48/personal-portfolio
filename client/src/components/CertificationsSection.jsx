import { Award, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../data/misc';
import { SectionHeading } from './SectionHeading';

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Certifications"
          title="Training & Certificates"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert) => (
            <article
              key={cert.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-electric/40 hover:shadow-2xl hover:shadow-electric/10"
            >
              {/* Certificate Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cert?.certificate_url}
                  alt={cert.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />

                <div className="absolute top-4 right-4 rounded-full bg-electric p-2">
                  <Award className="h-5 w-5 text-navy" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-white">
                  {cert.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-orange">
                  {cert.issuer}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {cert.note}
                </p>

               
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}