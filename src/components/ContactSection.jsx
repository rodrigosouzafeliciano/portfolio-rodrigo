/* ═══════════════════════════════════════════════════════════════
   CONTACT SECTION — Seção de contato com CTAs
   ═══════════════════════════════════════════════════════════════ */

import { contato } from '../data/profileData'

export default function ContactSection() {
  const links = [
    {
      href: `mailto:${contato.email}`,
      icon: 'alternate_email',
      label: 'EMAIL',
      cor: 'link-magenta',
    },
    {
      href: contato.linkedin,
      icon: 'work',
      label: 'LINKEDIN',
      cor: 'link-blue',
    },
    {
      href: contato.github,
      icon: 'link',
      label: 'GITHUB',
      cor: 'link-white',
    },
    {
      href: contato.whatsapp,
      icon: 'chat',
      label: 'WHATSAPP',
      cor: 'link-green',
    },
    {
      href: contato.site,
      icon: 'article',
      label: 'CV_ONLINE',
      cor: 'link-white',
    },
  ]

  return (
    <section className="section-spacer" id="contato" style={{ position: 'relative' }}>
      <div className="contact-glow" aria-hidden="true" />

      <div className="terminal-window border-magenta" style={{ background: 'black', position: 'relative', zIndex: 10 }}>
        <div className="terminal-header header-magenta">
          <span>CONNECTION_PORT.EXE</span>
        </div>
        <div
          className="terminal-content"
          style={{
            textAlign: 'center',
            paddingTop: '2.5rem',
            paddingBottom: '2.5rem',
          }}
        >
          <h2
            className="glitch-text"
            data-text="VAMOS CONVERSAR?"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              marginBottom: '1.5rem',
            }}
          >
            VAMOS CONVERSAR?
          </h2>

          <p
            className="text-neon-blue"
            style={{
              fontSize: '1.1rem',
              marginBottom: '3rem',
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}
          >
            ESTOU PRONTO PARA O SEU PRÓXIMO GRANDE DESAFIO TECNOLÓGICO.
          </p>

          {/* Contact Links Grid */}
          <div className="contact-grid">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-link ${link.cor}`}
                id={`contact-${link.label.toLowerCase()}`}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '1.8rem' }}
                >
                  {link.icon}
                </span>
                <span className="contact-link-label">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Status */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div
              className="status-badge animate-pulse-glow"
              style={{
                borderColor: 'var(--neon-green)',
                color: 'var(--neon-green)',
                fontWeight: 'bold',
              }}
            >
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--neon-green)',
                  boxShadow: 'var(--bloom-green)',
                  display: 'inline-block',
                }}
              />
              DISPONÍVEL_AGORA_PARA_NOVOS_PROJETOS
            </div>

            <a
              className="btn-retro btn-magenta"
              href="/docs/Currículo - Rodrigo S. Feliciano.pdf"
              download="Curriculo_Rodrigo_Souza_Feliciano.pdf"
              id="btn-download-cv-footer"
              style={{
                fontSize: '1.3rem',
                padding: '1rem 2.5rem',
                fontFamily: 'var(--font-heading)',
              }}
            >
              [ BAIXAR CURRÍCULO COMPLETO ]
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
