const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Git',
  'GitHub',
  'Vercel',
  'Python básico',
];

export default function Technologies() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-page">
        <span className="text-sm font-semibold uppercase text-brand-600">Tecnologias</span>
        <h2 className="section-title mt-3">Ferramentas que uso nos projetos</h2>
        <p className="section-description">
          Base técnica para criar páginas responsivas, versionadas e prontas para publicação.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-500 hover:text-brand-700"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
