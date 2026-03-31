/* ═══════════════════════════════════════════════════════════════
   EXPERIENCE SECTION — Timeline da Orbe Soft
   ═══════════════════════════════════════════════════════════════ */

import { experiencia } from '../data/profileData'

export default function ExperienceSection() {
  const getTimelineClass = (cor) => {
    const map = {
      blue: '',
      magenta: 'timeline-magenta',
      green: 'timeline-green',
    }
    return map[cor] || ''
  }

  const getTitleClass = (cor) => {
    const map = {
      blue: 'text-neon-blue',
      magenta: 'text-neon-magenta',
      green: 'text-neon-green',
    }
    return map[cor] || 'text-neon-green'
  }

  const getBadgeClass = (cor) => {
    const map = {
      blue: 'badge-blue',
      magenta: 'badge-magenta',
      green: 'badge-green',
    }
    return map[cor] || 'badge-green'
  }

  return (
    <section className="section-spacer" id="experiencia">
      <div className="terminal-window border-magenta">
        <div className="terminal-header header-magenta">
          <span>XP_HISTORY.EXE</span>
        </div>
        <div className="terminal-content">
          {/* Título */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 className="text-neon-magenta" style={{ fontSize: '1.3rem' }}>
              EXPERIÊNCIA_PROFISSIONAL
            </h2>
            <p className="text-white" style={{ fontSize: '0.7rem', marginTop: '0.5rem' }}>
              {experiencia.empresa.toUpperCase()} // {experiencia.duracao.toUpperCase()} DE OPERAÇÃO
            </p>
            <p
              style={{
                fontSize: '0.85rem',
                opacity: 0.8,
                marginTop: '0.75rem',
                maxWidth: '40rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                fontWeight: 500,
              }}
            >
              {experiencia.resumo}
            </p>
          </div>

          {/* Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {experiencia.cargos.map((cargo, i) => (
              <div
                className={`timeline-item ${getTimelineClass(cargo.cor)}`}
                key={i}
              >
                <div className="timeline-dot" />

                <div className="timeline-header">
                  <span className={`timeline-title ${getTitleClass(cargo.cor)}`}>
                    {cargo.titulo}
                  </span>
                  <span className={`timeline-badge ${getBadgeClass(cargo.cor)}`}>
                    {cargo.periodo}
                  </span>
                </div>

                <ul className="timeline-list">
                  {cargo.atividades.map((atividade, j) => (
                    <li key={j}>{atividade}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
