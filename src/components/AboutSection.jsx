/* ═══════════════════════════════════════════════════════════════
   ABOUT SECTION — Bio completa + Cards de estatísticas
   ═══════════════════════════════════════════════════════════════ */

import { bio, stats } from '../data/profileData'

export default function AboutSection() {
  const getColorClass = (cor) => {
    const map = { magenta: 'border-magenta', blue: 'border-blue', green: '' }
    return map[cor] || ''
  }

  const getTextClass = (cor) => {
    const map = {
      magenta: 'text-neon-magenta',
      blue: 'text-neon-blue',
      green: 'text-neon-green',
    }
    return map[cor] || 'text-neon-green'
  }

  const getFontSize = (valor) => {
    if (valor.length <= 2) return '1.8rem'
    if (valor.length <= 5) return '1.2rem'
    return '1rem'
  }

  return (
    <section className="section-spacer about-grid" id="sobre">
      {/* Bio */}
      <div className="terminal-window border-blue" style={{ marginBottom: 0 }}>
        <div className="terminal-header header-blue">
          <span>BIO_DATA.LOG</span>
        </div>
        <div className="terminal-content" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2
            className="text-neon-blue"
            style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}
          >
            ARQUITETO_DE_CÓDIGO
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.05rem', fontWeight: 500 }}>
            {bio.map((paragraph, i) => (
              <p key={i}>&gt; {paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="stat-grid">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`terminal-window stat-card ${getColorClass(stat.cor)}`}
            style={{ marginBottom: 0 }}
          >
            <span
              className={`stat-value ${getTextClass(stat.cor)}`}
              style={{ fontSize: getFontSize(stat.valor) }}
            >
              {stat.valor}
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
