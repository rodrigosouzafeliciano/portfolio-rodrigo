/* ═══════════════════════════════════════════════════════════════
   EDUCATION SECTION — Formação acadêmica SENAC
   ═══════════════════════════════════════════════════════════════ */

import { formacao } from '../data/profileData'

export default function EducationSection() {
  const getColorClass = (cor) => {
    const map = {
      blue: 'border-blue',
      magenta: 'border-magenta',
      green: '',
    }
    return map[cor] || ''
  }

  const getHeaderClass = (cor) => {
    const map = {
      blue: 'header-blue',
      magenta: 'header-magenta',
      green: '',
    }
    return map[cor] || ''
  }

  const getTextClass = (cor) => {
    const map = {
      blue: 'text-neon-blue',
      magenta: 'text-neon-magenta',
      green: 'text-neon-green',
    }
    return map[cor] || 'text-neon-green'
  }

  const getTagClass = (cor) => {
    const map = {
      blue: 'tag-blue',
      magenta: 'tag-magenta',
      green: 'tag-green',
    }
    return map[cor] || 'tag-green'
  }

  return (
    <section className="section-spacer" id="formacao">
      <h2
        className="glitch-text"
        data-text="EDUCAÇÃO_CONTINUADA"
        style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '2.5rem' }}
      >
        EDUCAÇÃO_CONTINUADA
      </h2>

      <div className="education-grid">
        {formacao.map((curso, i) => (
          <div
            className={`education-card ${curso.destaque ? 'featured' : ''}`}
            key={i}
          >
            <div className={`terminal-window ${getColorClass(curso.cor)}`} style={{ marginBottom: 0 }}>
              <div className={`terminal-header ${getHeaderClass(curso.cor)}`}>
                <span>{curso.arquivo}</span>
              </div>
              <div className="terminal-content" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '0.6rem' }}>{curso.titulo}</h3>
                <p
                  className={getTextClass(curso.cor)}
                  style={{ fontSize: '0.65rem', fontWeight: 'bold' }}
                >
                  {curso.instituicao} • {curso.cargaHoraria}
                </p>
                <p style={{ fontSize: '0.8rem', opacity: 0.9, fontWeight: 500 }}>
                  {curso.descricao}
                </p>
                <div className="education-tags" style={{ marginTop: '0.5rem' }}>
                  {curso.tags.map((tag) => (
                    <span
                      className={`education-tag ${getTagClass(curso.cor)}`}
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
