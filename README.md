# Site — Advogado Trabalhista

Site profissional para advogado especializado em Direito do Trabalho e Processo do Trabalho.

## Stack
- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- Google Fonts: Playfair Display, Source Serif 4, DM Sans

## Estrutura do Projeto

```
lawyer-site/
├── index.html                  # HTML raiz com SEO e Google Fonts
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                # Ponto de entrada React
    ├── App.jsx                 # Composição das seções
    ├── index.css               # Tailwind + estilos globais
    └── components/
        ├── Navbar.jsx          # Navegação fixa com menu mobile
        ├── Hero.jsx            # Seção principal com CTA
        ├── Services.jsx        # Serviços / áreas de atuação
        ├── About.jsx           # Sobre o advogado
        ├── Differentials.jsx   # Diferenciais / por que escolher
        ├── Contact.jsx         # Contato com form + WhatsApp
        ├── Footer.jsx          # Rodapé
        └── WhatsAppFloat.jsx   # Botão flutuante WhatsApp
```

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Gerar build de produção
npm run build

# 4. Prévia do build
npm run preview
```

## Personalização — Checklist

Busque e substitua `[...]` em todos os arquivos:

| Placeholder                      | O que colocar                        |
|----------------------------------|--------------------------------------|
| `[Nome do Advogado]`             | Nome completo do advogado            |
| `[000.000]`                      | Número da OAB                        |
| `5511999999999`                  | Número de WhatsApp (com DDI+DDD)     |
| `contato@[seuemail].com.br`      | E-mail profissional                  |
| `@[perfil]`                      | Perfil do Instagram                  |
| `https://instagram.com/`         | URL completa do Instagram            |
| `[N]+ anos`                      | Anos de experiência                  |
| `São Paulo/SP`                   | Cidade de atuação                    |

## Fotos
Substitua os placeholders de foto nos componentes `Hero.jsx` e `About.jsx`
por uma `<img>` real com a foto do advogado:

```jsx
// Exemplo — substitua o bloco de placeholder por:
<img
  src="/foto-advogado.jpg"
  alt="Dr. [Nome] — Advogado Trabalhista"
  className="absolute inset-0 w-full h-full object-cover"
/>
```

## Formulário de Contato
O formulário em `Contact.jsx` abre o cliente de e-mail padrão do usuário via `mailto:`.
Para envio real pelo servidor, integre com:
- [Formspree](https://formspree.io) — simples, sem backend
- [EmailJS](https://www.emailjs.com) — envio direto do frontend
- Qualquer API de backend própria

## Deploy
O projeto pode ser publicado em qualquer serviço de hospedagem estática:
- **Vercel**: `vercel deploy`
- **Netlify**: arraste a pasta `dist/` ou conecte o repositório
- **GitHub Pages**: use `gh-pages` com `base` configurado no Vite

## Paleta de Cores

| Nome         | Hex        | Uso                          |
|--------------|------------|------------------------------|
| gold-500     | `#B3852D`  | Accent principal             |
| gold-400     | `#C4952E`  | Hover / destaques            |
| charcoal-950 | `#0D0C0A`  | Background principal         |
| charcoal-900 | `#141210`  | Background secundário        |
| charcoal-50  | `#F5F5F4`  | Texto principal              |
| charcoal-300 | `#A8A49D`  | Texto de suporte             |
