# Portfólio Eduardo Fortes

Site de portfólio profissional para Eduardo Fortes, desenvolvedor front-end júnior. O projeto foi criado para apresentar serviços freelancer, tecnologias conhecidas e modelos de sites publicados para clientes em potencial.

## Tecnologias usadas

- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide React

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois, acesse a URL exibida no terminal.

## Como alterar os links dos projetos

Os projetos ficam no arquivo `src/components/Projects.jsx`, dentro do array `projects`.

Troque os valores de `demoUrl` pelos links reais da Vercel e os valores de `githubUrl` pelos links reais dos repositórios no GitHub.

```js
demoUrl: "https://seu-projeto.vercel.app",
githubUrl: "https://github.com/seu-usuario/seu-projeto"
```

## Como alterar os links de contato

Os links de WhatsApp, e-mail, LinkedIn e GitHub ficam em `src/components/Contact.jsx`.

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Acesse [https://vercel.com](https://vercel.com).
3. Clique em `Add New Project`.
4. Importe o repositório.
5. Mantenha o framework como `Vite`.
6. Clique em `Deploy`.

## Observação

Este é um portfólio profissional pensado para apresentar modelos de sites freelancer de forma limpa, responsiva e confiável.
