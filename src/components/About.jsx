export default function About() {
  return (
    <section id="sobre" className="section-padding bg-slate-50">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase text-brand-600">Sobre mim</span>
          <h2 className="section-title mt-3">Conheça meu trabalho</h2>
        </div>
        <div className="card-base p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-700">
            Sou formado no Ensino Médio Técnico em Informática e atualmente curso Engenharia da
            Computação. Tenho interesse em desenvolvimento web, tecnologia e criação de soluções
            digitais. Meu foco é criar páginas modernas, responsivas e organizadas para pequenos
            negócios e profissionais autônomos.
          </p>
        </div>
      </div>
    </section>
  );
}
