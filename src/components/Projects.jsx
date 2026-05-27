import { ArrowUpRight } from 'lucide-react';

// Troque demoUrl pelos links reais da Vercel quando publicar novos modelos.
const projects = [
  {
    title: 'Barbearia Prime Cut',
    niche: 'Landing page para barbearia',
    description:
      'Modelo moderno e responsivo para barbearias, com serviços, preços, galeria e botão de agendamento pelo WhatsApp.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://modelobarbearia-zeta.vercel.app/',
  },
  {
    title: 'Clínica / Saúde',
    niche: 'Site para clínica e área da saúde',
    description:
      'Modelo profissional para apresentar serviços, especialidades, informações da clínica e contato para agendamento.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://modelo-sa-de-portof-7fnyvsg8w-eduardofortes10s-projects.vercel.app/',
  },
  {
    title: 'Clínica Odontológica',
    niche: 'Site para dentista',
    description:
      'Modelo profissional para consultórios odontológicos, com apresentação dos tratamentos, diferenciais e chamada para agendamento.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://modelo-dentista-peach.vercel.app/',
  },
  {
    title: 'Aluguel de Quadras',
    niche: 'Sistema visual para aluguel de quadras',
    description:
      'Projeto de TCC para apresentar quadras disponíveis, informações do serviço e experiência simples para usuários.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://aluguel-de-quadras-xomr.vercel.app/',
  },
  {
    title: 'Pizzaria Bella Massa',
    niche: 'Landing page para pizzaria',
    description:
      'Modelo comercial para pizzaria com cardápio, combos, avaliações, localização e botão de pedido pelo WhatsApp.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://modelo-pizzaria-mu.vercel.app/',
  },
  {
    title: 'Petshop',
    niche: 'Site para petshop',
    description:
      'Modelo para apresentar serviços de banho e tosa, produtos, diferenciais da loja e contato para agendamento.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://modelo-petshop-d5hj0hn9t-eduardofortes10s-projects.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="section-padding bg-slate-50">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase text-brand-600">Projetos</span>
            <h2 className="section-title mt-3">Modelos de sites para clientes reais</h2>
            <p className="section-description">
              Acesse os modelos publicados e veja exemplos de páginas que podem ser adaptadas para
              diferentes negócios.
            </p>
          </div>
          <a href="#contato" className="secondary-button w-full sm:w-fit">
            Solicitar orçamento
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="card-base flex flex-col p-6">
              <div className="flex-1">
                <p className="text-sm font-semibold text-brand-600">{project.niche}</p>
                <h3 className="mt-3 text-2xl font-bold text-ink">{project.title}</h3>
                <p className="mt-4 leading-7 text-muted">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button w-full"
                >
                  Ver site
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
