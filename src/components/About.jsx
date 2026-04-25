import foto01 from '../images/foto_01.jpeg'

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 md:py-32 bg-navy-50"
      aria-labelledby="sobre-heading"
    >
      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT — Photo block */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start" aria-hidden="true">
            <div className="relative w-56 h-72 md:w-64 md:h-80 shrink-0">
              <img
                src={foto01}
                alt="Dra. Letícia Bertolini — Advogada Trabalhista"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gold accent corners */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r border-b border-gold-500/50" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t border-gold-500/50" />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="gold-divider" />
              <span className="section-label">Sobre</span>
            </div>

            <h2
              id="sobre-heading"
              className="font-display text-3xl md:text-4xl font-medium text-navy-900 leading-tight"
            >
              Advocacia com <span className="italic text-gold-400">propósito</span> e compromisso real
            </h2>

            <div className="space-y-4 font-body text-navy-600 text-lg leading-relaxed">
              <p>
                Sou advogada especializada em Direito do Trabalho e Processo do Trabalho,
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
            <div className="pt-6 border-t border-navy-100 grid sm:grid-cols-3 gap-6">
              {[
                { value: 'Especialista', label: 'Direito do Trabalho' },
                { value: '+3 Anos de', label: 'de Experiência' },
                { value: '+20 Casos', label: 'Bem Sucedidos' },
              ].map(item => (
                <div key={item.label} className="space-y-1">
                  <p className="font-display text-xl font-semibold text-gold-400">{item.value}</p>
                  <p className="font-sans text-xs text-navy-400 tracking-wide">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}