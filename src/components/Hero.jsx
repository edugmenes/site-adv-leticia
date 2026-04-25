// Hero sits on deep navy background — keeps the dark/elegant feel as the visual anchor
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900"
      aria-label="Seção principal"
    >
      {/* Background geometric pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Squares hidden on mobile to avoid overlapping hero text */}
        <div className="hidden md:block absolute -right-32 top-1/2 -translate-y-1/2 w-[560px] h-[560px] border border-gold-500/10 rotate-12" />
        <div className="hidden md:block absolute -right-20 top-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-gold-500/8 rotate-12" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #B3852D 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
        {/* Subtle navy-to-cream transition at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-navy-950/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT — content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4 animate-fade-up" style={{ opacity: 0 }}>
              <div className="gold-divider" />
              <span className="section-label" style={{ color: '#C4952E' }}>Direito do Trabalho e Processo do Trabalho</span>
            </div>

            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] font-medium text-cream-50 text-balance animate-fade-up animate-delay-100"
              style={{ opacity: 0 }}
            >
              Seus direitos <br />
              <span className="italic text-gold-400">trabalhistas</span> merecem<br />
              defesa qualificada.
            </h1>

            <p
              className="font-body text-lg md:text-xl text-navy-200 leading-relaxed max-w-xl animate-fade-up animate-delay-200"
              style={{ opacity: 0 }}
            >
              Se você foi demitido, não recebeu o que é seu por direito, ou enfrenta
              alguma irregularidade no trabalho — eu posso ajudar. Atendimento claro,
              ético e próximo, do início ao fim do processo.
            </p>

            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up animate-delay-300"
              style={{ opacity: 0 }}
            >
              <a
                href="https://wa.me/5511959876073?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20trabalhista."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="Falar no WhatsApp"
              >
                <WhatsAppIcon />
                Falar pelo WhatsApp
              </a>
              <a href="#servicos" className="btn-outline">
                Conhecer os Serviços
              </a>
            </div>

            {/* Trust bar */}
            <div
              className="pt-4 border-t border-navy-700 flex flex-wrap gap-6 animate-fade-up animate-delay-400"
              style={{ opacity: 0 }}
            >
              {[
                'Atendimento humanizado',
                'Atuação especializada',
                'Ética e transparência',
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold-500" />
                  <span className="font-sans text-xs text-navy-300 tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — visual block */}
          <div
            className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end animate-fade-up animate-delay-500"
            style={{ opacity: 0 }}
            aria-hidden="true"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-[420px]">
              <img
                src="src/images/foto_03.jpeg"
                alt="Dra. Letícia Bertolini — Advogada Trabalhista"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-gold-500/60" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-gold-500/60" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
