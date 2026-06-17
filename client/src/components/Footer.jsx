import PROFILE from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-8 text-center text-sm text-slate-400">
      <p>{PROFILE.footer_text}</p>
    </footer>
  );
}
