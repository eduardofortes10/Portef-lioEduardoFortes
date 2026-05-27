import { BriefcaseBusiness, Layout, MessageCircle, Palette, ShoppingBag, Utensils } from 'lucide-react';

const services = [
  {
    title: 'Landing pages',
    description: 'Páginas objetivas para divulgar serviços, campanhas e ofertas com foco em conversão.',
    icon: Layout,
  },
  {
    title: 'Sites para pequenos negócios',
    description: 'Sites institucionais modernos para apresentar sua empresa com mais credibilidade.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Portfólios pessoais',
    description: 'Portfólios organizados para profissionais apresentarem trabalhos, serviços e contatos.',
    icon: Palette,
  },
  {
    title: 'Cardápios online',
    description: 'Modelos digitais simples e responsivos para restaurantes, pizzarias e lanchonetes.',
    icon: Utensils,
  },
  {
    title: 'Páginas com botão para WhatsApp',
    description: 'Estruturas com chamada clara para atendimento, orçamento ou agendamento pelo WhatsApp.',
    icon: MessageCircle,
  },
  {
    title: 'Manutenção visual de sites',
    description: 'Ajustes de layout, organização de conteúdo e melhorias na aparência de páginas existentes.',
    icon: ShoppingBag,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-page">
        <span className="text-sm font-semibold uppercase text-brand-600">Serviços</span>
        <h2 className="section-title mt-3">Soluções para presença digital</h2>
        <p className="section-description">
          Serviços pensados para profissionais autônomos e pequenos negócios que precisam de uma
          página clara, bonita e fácil de acessar.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className="card-base p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 leading-7 text-muted">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
