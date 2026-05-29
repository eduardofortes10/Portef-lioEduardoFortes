const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Automações', href: '#automacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-bold text-ink">Eduardo Fortes</p>
          <p className="mt-1 text-sm text-muted">Desenvolvedor Front-end Júnior</p>
          <p className="mt-3 text-sm text-muted">
            © {new Date().getFullYear()} Eduardo Fortes. Todos os direitos reservados.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4" aria-label="Links rápidos">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
