const differentials = [
  {
    number: '01',
    title: 'Atendimento humanizado',
    description:
      'Você não é um número de processo. Cada caso é tratado com atenção individual, escuta ativa e respeito pela sua situação.',
  },
  {
    number: '02',
    title: 'Clareza em cada etapa',
    description:
      'Explicamos tudo em linguagem simples: o que está acontecendo, o que vamos fazer e quais são as perspectivas reais do seu caso.',
  },
  {
    number: '03',
    title: 'Especialização focada',
    description:
      'Trabalhamos exclusivamente com Direito do Trabalho. Isso significa maior profundidade técnica e mais resultados para quem nos procura.',
  },
  {
    number: '04',
    title: 'Ética e transparência',
    description:
      'Desde a primeira conversa, somos honestos sobre as chances do seu caso. Sem promessas vazias ou expectativas infladas.',
  },
  {
    number: '05',
    title: 'Foco em soluções reais',
    description:
      'Nosso objetivo não é prolongar processos — é encontrar o caminho mais eficiente para resolver a sua situação da melhor forma possível.',
  },
  {
    number: '06',
    title: 'Presença em todo o processo',
    description:
      'Você terá suporte e respostas durante todo o trâmite. Não desaparecemos após a contratação — estamos com você do início ao fim.',
  },
]

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative py-24 md:py-32 bg-charcoal-950"
      aria-labelledby="diferenciais-heading"
    >
      {/* Background accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/15 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 grid md:grid-cols-2 gap-10 items-end">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-divider" />
              <span className="section-label">Diferenciais</span>
            </div>
            <h2
              id="diferenciais-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-50 leading-tight"
            >
              Por que escolher este escritório?
            </h2>
          </div>
          <p className="font-body text-charcoal-400 text-lg leading-relaxed md:max-w-sm md:ml-auto">
            Estes são os princípios que guiam cada atendimento e cada decisão que tomamos
            em nome dos nossos clientes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {differentials.map(item => (
            <article key={item.number} className="group">
              <div className="flex items-start gap-5">
                {/* Number */}
                <span
                  className="font-display text-4xl font-light text-gold-500/25 group-hover:text-gold-500/50 transition-colors duration-300 leading-none mt-1 shrink-0 select-none"
                  aria-hidden="true"
                >
                  {item.number}
                </span>
                <div className="space-y-3">
                  <h3 className="font-display text-base font-semibold text-charcoal-100 group-hover:text-gold-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-charcoal-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              {/* Divider */}
              <div className="mt-6 h-px bg-charcoal-800 group-hover:bg-gold-500/20 transition-colors duration-300" />
            </article>
          ))}
        </div>

        {/* Pull quote */}
        <blockquote className="mt-20 md:mt-24 border-l-2 border-gold-500 pl-8 max-w-2xl mx-auto text-center md:text-left">
          <p className="font-display text-xl md:text-2xl italic text-charcoal-200 leading-relaxed">
            "A advocacia que acredito é aquela em que o cliente sai sabendo
            exatamente o que aconteceu e sente que foi tratado com respeito."
          </p>
          <footer className="mt-4 font-sans text-xs text-charcoal-500 tracking-wide uppercase">
            Dr. [Nome do Advogado]
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
