import { useRef, useEffect } from 'react'
import foto01 from '../images/foto_01.jpeg'

export default function About() {
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up')
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="sobre"
      className="relative min-h-screen flex items-center bg-navy-50"
      aria-labelledby="sobre-heading"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 md:pt-36 md:pb-28 w-full">
        <span className="section-label block mb-10">Sobre</span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT — Photo block */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start" aria-hidden="true">
            <div ref={imgRef} className="relative w-64 h-80 md:w-80 md:h-[420px] shrink-0 opacity-0">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  src={foto01}
                  alt="Dra. Letícia Bertolini — Advogada Trabalhista"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r border-b border-gold-500/50 rounded-br-[32px]" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t border-gold-500/50 rounded-tl-[32px]" />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="lg:col-span-8 space-y-8">
            <h2
              id="sobre-heading"
              className="font-display text-3xl md:text-4xl font-medium text-navy-900 leading-tight"
            >
              Advocacia com <span className="italic text-gold-400">propósito</span> e compromisso real
            </h2>

            <div className="mt-12 space-y-4 font-body text-navy-600 text-lg leading-relaxed">
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
            <div className="pt-6 grid sm:grid-cols-3 gap-6">
              {[
                { value: 'Especialista', label: 'Direito do Trabalho e Processo do Trabalho' },
                { value: '+3 Anos de', label: 'de Experiência' },
                { value: '+20 Casos', label: 'Bem Sucedidos' },
              ].map(item => (
                <div key={item.label} className="space-y-1 text-center">
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