const services = [
  {
    icon: '⚖',
    title: 'Reclamação Trabalhista',
    description:
      'Você tem direitos que não foram respeitados? Representamos trabalhadores na Justiça do Trabalho para garantir o que é seu por lei.',
  },
  {
    icon: '📋',
    title: 'Verbas Rescisórias',
    description:
      'Aviso prévio, saldo de salário, 13º proporcional, férias vencidas e proporcionais — analisamos tudo para que você não saia no prejuízo.',
  },
  {
    icon: '🕐',
    title: 'Horas Extras',
    description:
      'Trabalhou além do horário e não recebeu? Ou tem banco de horas irregular? Calculamos e cobramos o que você realmente é devido.',
  },
  {
    icon: '🤝',
    title: 'Rescisão Indireta',
    description:
      'Quando o empregador descumpre o contrato, você pode pedir demissão com todos os direitos da demissão sem justa causa. Entenda se é o seu caso.',
  },
  {
    icon: '🛡',
    title: 'Assédio Moral no Trabalho',
    description:
      'Situações de humilhação, pressão abusiva ou discriminação no ambiente de trabalho geram direito a indenização. Fale conosco com segurança.',
  },
  {
    icon: '📑',
    title: 'Reconhecimento de Vínculo',
    description:
      'Trabalhou como "autônomo" ou "PJ" mas na prática era empregado? É possível reconhecer o vínculo e garantir todos os seus direitos.',
  },
  {
    icon: '💰',
    title: 'FGTS, Férias e 13º Salário',
    description:
      'Depósitos irregulares de FGTS, férias não pagas ou 13º salário em atraso são violações que têm solução jurídica. Não deixe passar.',
  },
  {
    icon: '🔍',
    title: 'Orientação Preventiva',
    description:
      'Antes de assinar qualquer documento ou tomar uma decisão importante na sua vida profissional, consulte um especialista. Previna-se.',
  },
]

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-24 md:py-32 bg-cream-50"
      aria-labelledby="servicos-heading"
    >
      {/* Left accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/15 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-divider" />
            <span className="section-label">Áreas de Atuação</span>
          </div>
          <h2
            id="servicos-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-navy-900 leading-tight mb-5"
          >
            O que você pode resolver com nossa ajuda
          </h2>
          <p className="font-body text-navy-500 text-lg leading-relaxed">
            Atuamos nas principais demandas do Direito do Trabalho, sempre
            com linguagem clara e foco no resultado que você precisa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-100">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="card-service group"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className="text-2xl mb-4 w-10 h-10 flex items-center justify-center bg-cream-100 group-hover:bg-gold-500/10 border border-navy-100 group-hover:border-gold-500/40 transition-all duration-300"
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3 className="font-display text-base font-semibold text-navy-800 group-hover:text-gold-400 transition-colors duration-300 mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-navy-500 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://wa.me/5511959876073?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20meus%20direitos%20trabalhistas."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Tirar dúvida pelo WhatsApp"
          >
            Tirar minha dúvida agora
          </a>
          <span className="font-sans text-xs text-navy-400 italic">
            Consulta inicial com análise do seu caso.
          </span>
        </div>
      </div>
    </section>
  )
}