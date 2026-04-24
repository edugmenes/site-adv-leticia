Site profissional para Dra. Letícia Bertolini, especializado em Direito do Trabalho e Processo do Trabalho.

### Stack
- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- Google Fonts: Playfair Display, Source Serif 4, DM Sans

### Estrutura do Projeto
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

### Formulário de Contato
O formulário em `Contact.jsx` abre o cliente de e-mail padrão do usuário via `mailto:`.
Para envio real pelo servidor, integre com:
- [Formspree](https://formspree.io) — simples, sem backend
- [EmailJS](https://www.emailjs.com) — envio direto do frontend
- Qualquer API de backend própria

### Deploy
O projeto pode ser publicado em qualquer serviço de hospedagem estática:
- **Vercel**: `vercel deploy`
- **Netlify**: arraste a pasta `dist/` ou conecte o repositório
- **GitHub Pages**: use `gh-pages` com `base` configurado no Vite

### Paleta de Cores
| Nome         | Hex        | Uso                          |
|--------------|------------|------------------------------|
| gold-500     | `#B3852D`  | Accent principal             |
| gold-400     | `#C4952E`  | Hover / destaques            |
| charcoal-950 | `#0D0C0A`  | Background principal         |
| charcoal-900 | `#141210`  | Background secundário        |
| charcoal-50  | `#F5F5F4`  | Texto principal              |
| charcoal-300 | `#A8A49D`  | Texto de suporte             |