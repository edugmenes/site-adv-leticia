const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-700" role="contentinfo">
      {/* Top rule accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-16">
        <div className="grid md:grid-cols-12 gap-12">

          {/* Brand block */}
          <div className="md:col-span-4 space-y-5">
            <div>
              <p className="font-display text-lg font-semibold text-cream-50 tracking-wide">
                Dra. Letícia Bertolini
              </p>
              <p className="font-sans text-xs tracking-widest text-gold-500 uppercase mt-1">
                Advogada Trabalhista
              </p>
            </div>
            <p className="font-sans text-sm text-navy-300 leading-relaxed max-w-xs">
              Especialista em Direito do Trabalho e Processo do Trabalho.
              Defenda seus direitos com quem entende.
            </p>
            <p className="font-sans text-xs text-navy-400">
              OAB/SP nº a preencher
            </p>
          </div>

          {/* Navigation */}
          <nav className="md:col-span-3 md:col-start-6" aria-label="Mapa do site">
            <p className="font-sans text-xs tracking-widest text-gold-500 uppercase mb-5">
              Navegação
            </p>
            <ul className="space-y-3">
              {[
                ['Início',        '#inicio'],
                ['Serviços',      '#servicos'],
                ['Sobre',         '#sobre'],
                ['Diferenciais',  '#diferenciais'],
                ['Contato',       '#contato'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-sans text-sm text-navy-300 hover:text-gold-400 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact quick links */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="font-sans text-xs tracking-widest text-gold-500 uppercase mb-5">
              Contato
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5511959876073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-navy-300 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-gold-500 shrink-0" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:adv.leticiebertolini@gmail.com"
                  className="font-sans text-sm text-navy-300 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-gold-500 shrink-0" aria-hidden="true" />
                  adv.leticiebertolini@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/adv.leticiabertolini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-navy-300 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-gold-500 shrink-0" aria-hidden="true" />
                  Instagram
                </a>
              </li>
              <li className="pt-1">
                <span className="font-sans text-sm text-navy-300 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-navy-600 shrink-0" aria-hidden="true" />
                  São Paulo — SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-navy-400">
            © {currentYear} Dra. Letícia Bertolini — Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-navy-500">
            Este site tem caráter informativo e não constitui consultoria jurídica.
          </p>
        </div>
      </div>
    </footer>
  )
}
