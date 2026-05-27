import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const contactLinks = {
  whatsapp: 'https://wa.me/5519999387274',
  email: 'mailto:eduardo.fortes1108@gmail.com',
  linkedin:
    'https://www.linkedin.com/in/eduardo-fortes-8b6103390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  github: 'https://github.com/eduardofortes10',
};

export default function Contact() {
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-page">
        <div className="grid gap-10 rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:grid-cols-[1fr_0.85fr] lg:p-12">
          <div>
            <span className="text-sm font-semibold uppercase text-brand-600">Contato</span>
            <h2 className="section-title mt-3">Vamos conversar sobre seu site?</h2>
            <p className="section-description">
              Me chame para falar sobre sua ideia, seu negócio ou o modelo de site que você quer
              adaptar. Posso ajudar com uma página moderna, responsiva e clara para seus clientes.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button w-full"
            >
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </a>
            <a href={contactLinks.email} className="secondary-button w-full">
              <Mail size={18} />
              Enviar e-mail
            </a>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button w-full"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={contactLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button w-full"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
