const ScaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 3v18M3 7l4 8H3m14-8 4 8h-4M3 15h4M17 15h4M7 7h10" />
  </svg>
)

const ClipboardCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M8 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2" />
    <path d="m9 13 2 2 4-4" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
)

const FileXIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m9.5 14.5 5 5M14.5 14.5l-5 5" />
  </svg>
)

const ShieldAlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 2 3 6.5V12c0 4.5 3.6 8.7 9 10 5.4-1.3 9-5.5 9-10V6.5L12 2z" />
    <path d="M12 8v4M12 16h.01" />
  </svg>
)

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

const WalletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <circle cx="16" cy="13" r="1" fill="currentColor" />
  </svg>
)

const SearchCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.35-4.35" />
    <path d="m8.5 11 2 2 4-4" />
  </svg>
)

const services = [
  {
    icon: <ScaleIcon />,
    title: 'Reclamação Trabalhista',
    description:
      'Você tem direitos que não foram respeitados? Representamos trabalhadores na Justiça do Trabalho para garantir o que é seu por lei.',
  },
  {
    icon: <ClipboardCheckIcon />,
    title: 'Verbas Rescisórias',
    description:
      'Aviso prévio, saldo de salário, 13º proporcional, férias vencidas e proporcionais — analisamos tudo para que você não saia no prejuízo.',
  },
  {
    icon: <ClockIcon />,
    title: 'Horas Extras',
    description:
      'Trabalhou além do horário e não recebeu? Ou tem banco de horas irregular? Calculamos e cobramos o que você realmente é devido.',
  },
  {
    icon: <FileXIcon />,
    title: 'Rescisão Indireta',
    description:
      'Quando o empregador descumpre o contrato, você pode pedir demissão com todos os direitos da demissão sem justa causa. Entenda se é o seu caso.',
  },
  {
    icon: <ShieldAlertIcon />,
    title: 'Assédio Moral no Trabalho',
    description:
      'Situações de humilhação, pressão abusiva ou discriminação no ambiente de trabalho geram direito a indenização. Fale conosco com segurança.',
  },
  {
    icon: <LinkIcon />,
    title: 'Reconhecimento de Vínculo',
    description:
      'Trabalhou como "autônomo" ou "PJ" mas na prática era empregado? É possível reconhecer o vínculo e garantir todos os seus direitos.',
  },
  {
    icon: <WalletIcon />,
    title: 'FGTS, Férias e 13º Salário',
    description:
      'Depósitos irregulares de FGTS, férias não pagas ou 13º salário em atraso são violações que têm solução jurídica. Não deixe passar.',
  },
  {
    icon: <SearchCheckIcon />,
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

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <span className="section-label block mb-6">Áreas de Atuação</span>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="card-service group"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className="mb-4 w-10 h-10 flex items-center justify-center bg-cream-100 group-hover:bg-gold-500/10 rounded-xl text-navy-400 group-hover:text-gold-500 transition-all duration-300"
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
            className="btn-primary !bg-navy-800 hover:!bg-navy-700"
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