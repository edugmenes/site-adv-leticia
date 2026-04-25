import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // In production, connect to a form backend (e.g. Formspree, EmailJS, etc.)
    const subject = encodeURIComponent('Contato pelo site — ' + form.nome)
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nE-mail: ${form.email}\n\nMensagem:\n${form.mensagem}`
    )
    window.location.href = `mailto:adv.leticiebertolini@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section
      id="contato"
      className="relative py-24 md:py-32 bg-navy-50"
      aria-labelledby="contato-heading"
    >
      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-16">

          {/* LEFT — contact info */}
          <div className="md:col-span-5 space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-divider" />
                <span className="section-label">Contato</span>
              </div>
              <h2
                id="contato-heading"
                className="font-display text-3xl md:text-4xl font-medium text-navy-900 leading-tight mb-5"
              >
                Vamos conversar sobre o seu caso?
              </h2>
              <p className="font-body text-navy-500 text-lg leading-relaxed">
                Entre em contato pelo canal de sua preferência. O atendimento inicial
                é feito com atenção e sigilo, sem compromisso.
              </p>
            </div>

            {/* WhatsApp — primary CTA */}
            <div className="space-y-4">
              <a
                href="https://wa.me/5511959876073?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20sobre%20meu%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-base py-4"
                aria-label="Contatar pelo WhatsApp"
              >
                <WhatsAppIcon />
                Iniciar conversa no WhatsApp
              </a>
              <p className="font-sans text-xs text-navy-400 text-center">
                Atendimento de segunda a sexta-feira, das 9h às 18h..
              </p>
            </div>

            {/* Contact info list */}
            <ul className="space-y-2.5" aria-label="Informações de contato">
              <ContactItem
                icon={<EmailIcon />}
                label="E-mail"
                value="adv.leticiebertolini@gmail.com"
                href="mailto:adv.leticiebertolini@gmail.com"
              />
              <ContactItem
                icon={<PhoneIcon />}
                label="Telefone / WhatsApp"
                value="(11) 9 5987-6073"
                href="tel:+5511959876073"
              />
              <ContactItem
                icon={<InstagramIcon />}
                label="Instagram"
                value="@adv.leticiabertolini"
                href="https://instagram.com/adv.leticiabertolini"
              />
              <ContactItem
                icon={<LocationIcon />}
                label="Atendimento"
                value="Presencial e Online — Região do ABC/SP"
              />
            </ul>
          </div>

          {/* RIGHT — form */}
          <div className="md:col-span-7">
            <div className="bg-white border border-navy-100 p-8 md:p-10">
              <h3 className="font-display text-xl font-semibold text-navy-800 mb-8">
                Envie uma mensagem
              </h3>

              {sent ? (
                <div className="py-12 text-center space-y-3">
                  <div className="text-gold-400 text-3xl" aria-hidden="true">✓</div>
                  <p className="font-body text-navy-700 text-lg">Mensagem enviada!</p>
                  <p className="font-sans text-sm text-navy-500">
                    Em breve entraremos em contato.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <Field
                    id="nome"
                    label="Nome completo"
                    type="text"
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    id="email"
                    label="E-mail"
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="font-sans text-xs text-navy-500 tracking-wide uppercase">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={5}
                      placeholder="Descreva brevemente sua situação..."
                      value={form.mensagem}
                      onChange={handleChange}
                      required
                      className="w-full bg-cream-50 border border-navy-100 focus:border-gold-500 text-navy-800 placeholder-navy-300 font-sans text-sm px-4 py-3 outline-none transition-colors duration-200 resize-none"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 pt-2">
                    <p className="font-sans text-xs text-navy-400 leading-relaxed max-w-xs">
                      Suas informações são confidenciais e utilizadas apenas para retorno de contato.
                    </p>
                    <button type="submit" className="btn-primary shrink-0">
                      Enviar mensagem
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function Field({ id, label, type, placeholder, value, onChange, required }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="font-sans text-xs text-navy-500 tracking-wide uppercase">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-cream-50 border border-navy-100 focus:border-gold-500 text-navy-800 placeholder-navy-300 font-sans text-sm px-4 py-3 outline-none transition-colors duration-200"
      />
    </div>
  )
}

function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 group">
      <span className="text-gold-500 mt-0.5 shrink-0 group-hover:text-gold-300 transition-colors duration-200">
        {icon}
      </span>
      <div>
        <p className="font-sans text-xs text-navy-400 uppercase tracking-wide mb-0.5">{label}</p>
        <span className="font-body text-navy-600 group-hover:text-gold-600 transition-colors duration-200">
          {value}
        </span>
      </div>
    </div>
  )

  return (
    <li>
      {href
        ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{content}</a>
        : content
      }
    </li>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
function EmailIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 7 10-7"/></svg>
}
function PhoneIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.09 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
}
function InstagramIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
}
function LocationIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
}
