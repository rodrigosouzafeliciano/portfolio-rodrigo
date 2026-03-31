/* ═══════════════════════════════════════════════════════════════
   SKILLS SECTION — Competências comportamentais (Bento Grid)
   ═══════════════════════════════════════════════════════════════ */

import { competencias } from '../data/profileData'

export default function SkillsSection() {
  return (
    <section className="section-spacer">
      <div className="terminal-window">
        <div className="terminal-header">
          <span>BENTO_GRID_V1.0</span>
        </div>
        <div className="terminal-content">
          <h2
            style={{
              fontSize: '0.7rem',
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            COMPETÊNCIAS_DE_ATITUDE
          </h2>

          <div className="bento-grid">
            {competencias.map((comp, i) => {
              const isLarge = comp.grande
              const colorClass = comp.cor === 'blue'
                ? 'bento-blue'
                : comp.cor === 'magenta'
                ? 'bento-magenta'
                : ''

              const sizeClass = isLarge ? 'bento-wide' : 'bento-third'

              const iconClass = comp.cor === 'blue'
                ? 'text-neon-blue'
                : comp.cor === 'magenta'
                ? 'text-neon-magenta'
                : ''

              return (
                <div
                  className={`bento-item ${colorClass} ${sizeClass}`}
                  key={i}
                >
                  {comp.icone && (
                    <span className={`material-symbols-outlined ${iconClass}`}>
                      {comp.icone}
                    </span>
                  )}
                  <h3>{comp.titulo}</h3>
                  <p>{comp.descricao}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
