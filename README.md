## Site profissional para Dra. Letícia Bertolini, especialista em Direito do Trabalho e Processo do Trabalho.

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
    ├── images                  # Pasta para armazenar fotos
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