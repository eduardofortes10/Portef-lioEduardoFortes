import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Comunicação clara',
  'Sites responsivos',
  'Visual moderno',
  'Organização no código',
  'Entrega com GitHub e Vercel',
  'Foco em pequenos negócios',
];

export default function WhyHireMe() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="rounded-lg bg-ink px-6 py-10 text-white sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase text-brand-100">Diferenciais</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Por que me contratar?</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Trabalho com páginas objetivas, bem organizadas e pensadas para ajudar pequenos
                negócios a se apresentarem melhor na internet.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 rounded-md bg-white/8 p-4">
                  <CheckCircle2 className="shrink-0 text-brand-100" size={22} />
                  <span className="font-semibold text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
