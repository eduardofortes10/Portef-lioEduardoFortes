import {
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Layout,
  MessageCircle,
  Palette,
  ShoppingBag,
  Utensils,
} from 'lucide-react';

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
    title: 'Sistemas web personalizados',
    description:
      'Soluções sob medida para pedidos, agendas, cadastros, catálogos, reservas e outros fluxos do seu negócio.',
    icon: ClipboardList,
  },
  {
    title: 'Portfólios pessoais',
    description: 'Portfólios organizados para profissionais apresentarem trabalhos, serviços e contatos.',
    icon: Palette,
  },
  {
    title: 'Cardápios e pedidos online',
    description: 'Modelos digitais para restaurantes, pizzarias e lanchonetes receberem pedidos com mais praticidade.',
    icon: Utensils,
  },
  {
    title: 'Agendas e páginas de agendamento',
    description: 'Interfaces para apresentar horários, serviços e facilitar solicitações de consulta ou atendimento.',
    icon: CalendarCheck,
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
        <h2 className="section-title mt-3">Soluções para presença digital e sistemas web</h2>
        <p className="section-description">
          Serviços pensados para profissionais autônomos e pequenos negócios que precisam de sites,
          páginas claras ou sistemas simples para organizar pedidos, agendas e atendimentos.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
