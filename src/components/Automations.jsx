import { ArrowUpRight, Bot, Workflow } from 'lucide-react';

// Adicione novos modelos de automação neste array.
const automations = [
  {
    title: 'Assistente para Petshop',
    niche: 'Automação para atendimento',
    description:
      'Modelo de assistente automatizado para petshop, pensado para responder clientes, orientar sobre serviços e facilitar o primeiro contato. Pode ser adaptado para integração com WhatsApp, Instagram ou outros canais de comunicação.',
    tools: ['Typebot', 'WhatsApp', 'Instagram', 'Atendimento'],
    demoUrl: 'https://typebot.co/assistente-petshop-orm7t6t',
  },
];

export default function Automations() {
  return (
    <section id="automacoes" className="section-padding bg-white">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase text-brand-600">Automações</span>
            <h2 className="section-title mt-3">Modelos de automações para negócios</h2>
            <p className="section-description">
              Catálogo de automações criadas para melhorar o atendimento, organizar pedidos,
              responder clientes e facilitar processos do dia a dia. Os fluxos podem ser adaptados
              para funcionar com WhatsApp, Instagram, formulários, links de atendimento ou outros
              meios de comunicação usados pelo negócio.
            </p>
          </div>
          <a href="#contato" className="secondary-button w-full sm:w-fit">
            Criar uma automação
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {automations.map((automation) => (
            <article key={automation.title} className="card-base flex flex-col p-6">
              <div className="flex-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                  <Bot size={24} />
                </div>
                <p className="mt-5 text-sm font-semibold text-brand-600">{automation.niche}</p>
                <h3 className="mt-3 text-2xl font-bold text-ink">{automation.title}</h3>
                <p className="mt-4 leading-7 text-muted">{automation.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {automation.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={automation.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button w-full"
                >
                  Ver automação
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5">
          <Workflow className="mt-1 shrink-0 text-brand-600" size={22} />
          <p className="leading-7 text-muted">
            Também desenvolvo automações personalizadas para restaurantes, agendas, pedidos,
            reservas, atendimento inicial e outros fluxos. A ideia é conectar a automação ao canal
            que o cliente já usa, como WhatsApp, Instagram, site, formulário ou link direto.
          </p>
        </div>
      </div>
    </section>
  );
}
