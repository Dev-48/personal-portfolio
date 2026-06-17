export function SectionHeading({ kicker, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.35em] text-electric">{kicker}</p>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-slate-300">{children}</p>}
    </div>
  );
}
