export default function About() {
  return (
    <section id="sobre" className="section-padding bg-slate-50">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase text-brand-600">Sobre mim</span>
          <h2 className="section-title mt-3">Conheça meu trabalho</h2>
        </div>
        <div className="card-base p-6 sm:p-8">
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Sou formado no Ensino Médio Técnico em Informática e atualmente curso Engenharia da
              Computação. Trabalho com desenvolvimento front-end criando páginas modernas,
              responsivas e bem estruturadas para pequenos negócios, profissionais autônomos e
              projetos que precisam de uma presença digital mais profissional.
            </p>
            <p>
              Faço projetos com atenção à organização visual, clareza das informações, boa
              experiência no celular e facilidade de manutenção. Meu objetivo é entregar sites
              objetivos, confiáveis e alinhados com a necessidade de cada cliente, sempre cuidando
              da qualidade do código e da apresentação final.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
