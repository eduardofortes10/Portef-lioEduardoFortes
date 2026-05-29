import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Automações', href: '#automacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/92 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#inicio" className="text-lg font-bold text-ink" onClick={closeMenu}>
          Eduardo Fortes
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="primary-button hidden lg:inline-flex">
          Entrar em contato
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-ink transition hover:border-brand-500 hover:text-brand-600 lg:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-2 py-4" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a href="#contato" className="primary-button mt-2 w-full" onClick={closeMenu}>
              Entrar em contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
