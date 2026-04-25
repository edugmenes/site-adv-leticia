import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Início',        href: '#inicio' },
  { label: 'Serviços',      href: '#servicos' },
  { label: 'Sobre',         href: '#sobre' },
  { label: 'Diferenciais',  href: '#diferenciais' },
  { label: 'Contato',       href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-sm border-b border-navy-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-none group" onClick={close}>
          <span className="font-display text-sm font-semibold text-cream-50 tracking-wide group-hover:text-gold-400 transition-colors duration-300">
            Dra. Letícia Bertolini
          </span>
          <span className="font-sans text-[10px] tracking-widest text-gold-500 uppercase mt-0.5">
            Advogada Trabalhista
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-xs tracking-wide text-navy-200 hover:text-gold-400 transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="https://wa.me/5511959876073?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-primary text-xs"
          aria-label="Agendar consulta via WhatsApp"
        >
          Agendar Consulta
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className={`block w-6 h-px bg-cream-100 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-cream-100 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-cream-100 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 border-b border-navy-800' : 'max-h-0'
        } bg-navy-950/98 backdrop-blur-sm`}
      >
        <ul className="flex flex-col py-4 px-6 gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="block py-3 font-sans text-sm text-navy-200 hover:text-gold-400 transition-colors border-b border-navy-800"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="https://wa.me/5511959876073?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
              onClick={close}
            >
              <WhatsAppIcon />
              Agendar Consulta
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
