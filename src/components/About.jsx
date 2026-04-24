export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 md:py-32 bg-charcoal-900"
      aria-labelledby="sobre-heading"
    >
      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-16 items-center">

          {/* LEFT — Photo block */}
          <div className="md:col-span-4 flex justify-center md:justify-start" aria-hidden="true">
            <div className="relative w-56 h-72 md:w-64 md:h-80 shrink-0">
              <div className="absolute inset-0 bg-charcoal-800 border border-charcoal-700 flex flex-col items-center justify-center gap-3">
                <PersonIcon />
                <span className="font-sans text-xs text-charcoal-500 tracking-wider uppercase">
                  Foto do Advogado
                </span>
              </div>
              {/* Gold accent corners */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r border-b border-gold-500/50" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t border-gold-500/50" />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="md:col-span-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="gold-divider" />
              <span className="section-label">Sobre</span>
            </div>

            <h2
              id="sobre-heading"
              className="font-display text-3xl md:text-4xl font-medium text-charcoal-50 leading-tight"
            >
              Advocacia com <span className="italic text-gold-400">propósito</span> e compromisso real
            </h2>

            <div className="space-y-4 font-body text-charcoal-300 text-lg leading-relaxed">
              <p>
                Sou advogado especializado em Direito do Trabalho e Processo do Trabalho,
                com atuação dedicada à defesa de trabalhadores que enfrentam situações de
                injustiça ou irregularidade nas relações de emprego.
              </p>
              <p>
                Acredito que cada caso carrega uma história — e que entender essa história
                é o primeiro passo para encontrar a melhor solução. Por isso, meu atendimento
                é direto, acessível e sem rodeios: explico o que está acontecendo, quais são
                as suas opções e o que podemos fazer juntos.
              </p>
              <p>
                Meu compromisso é com você — não com processos em pilha ou respostas
                automáticas. Se você chegou até aqui, já deu o primeiro passo.
              </p>
            </div>

            {/* Credentials bar — restrained */}
            <div className="pt-6 border-t border-charcoal-700 grid sm:grid-cols-3 gap-6">
              {[
                { value: 'OAB/SP', label: 'Nº [000.000]' },
                { value: 'Especialista', label: 'Direito do Trabalho' },
                { value: '[N]+ anos', label: 'de Experiência' },
              ].map(item => (
                <div key={item.label} className="space-y-1">
                  <p className="font-display text-xl font-semibold text-gold-400">{item.value}</p>
                  <p className="font-sans text-xs text-charcoal-400 tracking-wide">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function PersonIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B3852D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  )
}
