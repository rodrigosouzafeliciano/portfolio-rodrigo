/* ═══════════════════════════════════════════════════════════════
   TECH SECTION — Arsenal tecnológico com filtros funcionais
   ═══════════════════════════════════════════════════════════════ */

import { useState } from 'react'
import { tecnologias, categoriasTech } from '../data/profileData'

export default function TechSection() {
  const [filtroAtivo, setFiltroAtivo] = useState('TODOS')

  const techFiltradas =
    filtroAtivo === 'TODOS'
      ? tecnologias
      : tecnologias.filter((t) => t.categoria === filtroAtivo)

  const getIconColor = (cor) => {
    const map = {
      blue: 'text-neon-blue',
      magenta: 'text-neon-magenta',
      green: 'text-neon-green',
      white: 'text-white',
    }
    return map[cor] || 'text-neon-green'
  }

  const totalModulos = tecnologias.length

  return (
    <section className="section-spacer" id="tecnologias">
      <div className="terminal-window">
        <div className="terminal-header">
          <span>ARSENAL_TECH.DB</span>
        </div>
        <div className="terminal-content">
          {/* Título */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2
              className="glitch-text"
              data-text="TECH_ARSENAL"
              style={{ fontSize: '1.3rem' }}
            >
              TECH_ARSENAL
            </h2>
            <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '0.5rem' }}>
              FERRAMENTAS_MODERNAS_PARA_PRODUTIVIDADE_EXTREMA
            </p>
          </div>

          {/* Filtros */}
          <div className="filter-buttons">
            {categoriasTech.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filtroAtivo === cat ? 'active' : ''}`}
                onClick={() => setFiltroAtivo(cat)}
              >
                [ {cat} ]
              </button>
            ))}
          </div>

          {/* Grid de Tecnologias */}
          <div className="grid-4 stagger-children" key={filtroAtivo}>
            {techFiltradas.map((tech, i) => (
              <div className="tech-card" key={`${filtroAtivo}-${tech.nome}`}>
                <div className="tech-card-header">
                  <span className={`material-symbols-outlined ${getIconColor(tech.cor)}`}>
                    {tech.icone}
                  </span>
                  <span className={`tech-version ${getIconColor(tech.cor)}`}>
                    {tech.versao}
                  </span>
                </div>
                <h3>{tech.nome}</h3>
                <p>{tech.desc}</p>
              </div>
            ))}
          </div>

          {/* Rodapé */}
          {filtroAtivo === 'TODOS' && (
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                border: '1px solid rgba(57, 255, 20, 0.2)',
                background: 'rgba(57, 255, 20, 0.03)',
                textAlign: 'center',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                boxShadow: 'inset 0 0 10px rgba(57, 255, 20, 0.05)',
              }}
            >
              {totalModulos} MÓDULOS CARREGADOS
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
