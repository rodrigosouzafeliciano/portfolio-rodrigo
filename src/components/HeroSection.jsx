/* ═══════════════════════════════════════════════════════════════
   HERO SECTION — Seção inicial com typing effect e CTAs
   ═══════════════════════════════════════════════════════════════ */

import { useState, useEffect } from 'react'
import { profile, contato } from '../data/profileData'

export default function HeroSection() {
  const fullText = profile.titulo
  const [displayText, setDisplayText] = useState('')
  const [isTypingDone, setIsTypingDone] = useState(false)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTypingDone(true)
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-spacer" id="inicio">
      <div className="terminal-window animate-fade-in-up">
        <div className="terminal-header">
          <span>ROOT_SHELL &gt; WELCOME.TXT</span>
          <span>SESSION: ATIVA</span>
        </div>
        <div className="terminal-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Status Badge */}
          <div className="status-badge">
            <span className="status-dot" />
            STATUS: ONLINE // DISPONÍVEL PARA OPORTUNIDADES
          </div>

          {/* Nome e Título */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p className="text-neon-blue" style={{ fontSize: '0.9rem' }}>
              &gt; INITIALIZING PROFILE...
            </p>

            <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', lineHeight: 1.2 }}>
              <span
                className="text-white glitch-text"
                data-text="RODRIGO SOUZA"
              >
                RODRIGO SOUZA
              </span>
              <br />
              <span className="text-neon-magenta">FELICIANO</span>
            </h1>

            <div
              style={{
                fontSize: 'clamp(1rem, 3vw, 1.6rem)',
                borderLeft: '4px solid var(--neon-magenta)',
                paddingLeft: '1rem',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                background: 'rgba(255, 0, 255, 0.04)',
                boxShadow: '-4px 0 0 var(--neon-magenta)',
              }}
            >
              <span className="text-white">C:\&gt; </span>
              <span className={isTypingDone ? '' : 'typing-cursor'}>
                {displayText}
              </span>
            </div>
          </div>

          {/* Bio curta */}
          <p
            style={{
              maxWidth: '42rem',
              fontSize: '1.15rem',
              opacity: 0.9,
              borderTop: '1px solid rgba(57, 255, 20, 0.2)',
              paddingTop: '1rem',
              fontWeight: 500,
            }}
          >
            Transformando visões complexas em experiências digitais fluidas.
            Especialista em ecossistemas React, mobile com React Native e
            garantia de qualidade com rigor técnico. 600h+ de formação SENAC.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '0.5rem' }}>
            <a className="btn-retro" href="#download" onClick={(e) => { e.preventDefault(); alert('Em breve o PDF estará disponível!'); }} id="btn-download-cv">
              <span className="material-symbols-outlined">download</span>
              BAIXAR_CURRICULO.PDF
            </a>
            <a className="btn-retro btn-magenta" href={contato.whatsapp} target="_blank" rel="noopener noreferrer" id="btn-whatsapp">
              <span className="material-symbols-outlined">terminal</span>
              CONTATO_PROMPT
            </a>
          </div>

          {/* Links sociais */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '1rem',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-mono)',
              opacity: 0.8,
            }}
          >
            <a href={contato.github} target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s' }}>
              @github
            </a>
            <a href={contato.linkedin} target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s' }}>
              @linkedin
            </a>
            <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s' }}>
              @whatsapp
            </a>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {profile.localizacao.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
