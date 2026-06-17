import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import PROFILE from '../data/profile';
import { slugify, scrollTo, whatsappHref } from '../utils/helpers';

const NAV_ITEMS = [
  'Home', 'About', 'Expertise', 'Projects',
  'Experience', 'Education', 'Certifications', 'Services', 'Contact',
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (item) => {
    scrollTo(slugify(item));
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">

        {/* Logo */}
        <button onClick={() => scrollTo('home')} className="flex items-center gap-3 text-left" aria-label="Go to home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-blue text-lg font-black text-white shadow-lg shadow-electric/20">
            MK
          </span>
          <span>
            <span className="block font-heading text-sm font-bold uppercase tracking-[0.25em] text-white">{PROFILE.full_name}</span>
            <span className="block text-xs text-slate-400">Electrical & Embedded Systems</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button key={item} onClick={() => handleNav(item)} className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white">
              {item}
            </button>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a href={whatsappHref()} target="_blank" rel="noreferrer" className="hidden rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange/20 transition hover:-translate-y-0.5 hover:bg-orange/90 md:inline-flex">
          WhatsApp
        </a>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen((v) => !v)} className="rounded-xl border border-white/10 p-2 text-white lg:hidden" aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-navy px-4 pb-4 lg:hidden">
          <div className="grid gap-2 pt-3">
            {NAV_ITEMS.map((item) => (
              <button key={item} onClick={() => handleNav(item)} className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-200 hover:bg-white/10">
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
