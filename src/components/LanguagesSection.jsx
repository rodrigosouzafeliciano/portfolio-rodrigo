/* ═══════════════════════════════════════════════════════════════
   LANGUAGES SECTION — Idiomas
   ═══════════════════════════════════════════════════════════════ */

import { idiomas } from '../data/profileData'

export default function LanguagesSection() {
  const getTextClass = (cor) => {
    const map = {
      green: 'text-neon-green',
      blue: 'text-neon-blue',
      magenta: 'text-neon-magenta',
    }
    return map[cor] || 'text-neon-green'
  }

  return (
    <section className="section-spacer" id="idiomas">
      <div className="terminal-window">
        <div className="terminal-header">
          <span>LANGUAGE_PACK.DLL</span>
        </div>
        <div className="terminal-content">
          <h2
            style={{
              fontSize: '0.7rem',
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            IDIOMAS_DISPONÍVEIS
          </h2>

          <div className="language-grid">
            {idiomas.map((lang, i) => (
              <div className="language-card" key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3
                    className={getTextClass(lang.cor)}
                    style={{ fontSize: '0.7rem' }}
                  >
                    {lang.idioma}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 'bold',
                      padding: '2px 8px',
                      border: `1px solid ${lang.cor === 'green' ? 'var(--neon-green)' : 'var(--neon-blue)'}`,
                    }}
                    className={getTextClass(lang.cor)}
                  >
                    {lang.nivel.toUpperCase()}
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', opacity: 0.85, fontWeight: 500 }}>
                  {lang.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
