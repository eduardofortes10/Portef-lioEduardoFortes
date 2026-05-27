import { ArrowRight, Code2, Github } from 'lucide-react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'GitHub'];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-brand-50 to-white" />
      <div className="container-page relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div>
          <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
            Desenvolvedor Front-end Júnior
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-normal text-ink sm:text-5xl lg:text-6xl">
            Crio sites modernos, responsivos e profissionais para pequenos negócios.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Desenvolvedor Front-end Júnior focado em landing pages, portfólios e páginas
            comerciais com visual moderno e boa experiência para o usuário.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projetos" className="primary-button">
              Ver projetos
              <ArrowRight size={18} />
            </a>
            <a href="#contato" className="secondary-button">
              Falar comigo
            </a>
          </div>
        </div>

        <div className="card-base p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase text-brand-600">Stack principal</p>
              <h2 className="mt-3 text-2xl font-bold text-ink">Sites rápidos, claros e responsivos</h2>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-ink text-white">
              <Code2 size={24} />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
              >
                {skill}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-md border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <Github className="text-brand-600" size={22} />
              <div>
                <p className="font-semibold text-ink">Pronto para GitHub e Vercel</p>
                <p className="mt-1 text-sm text-muted">Código organizado para publicar e apresentar clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
