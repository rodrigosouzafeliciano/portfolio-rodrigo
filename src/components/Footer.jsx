/* ═══════════════════════════════════════════════════════════════
   FOOTER — Rodapé com links
   ═══════════════════════════════════════════════════════════════ */

import { contato } from '../data/profileData'

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© {ano} RODRIGO SOUZA FELICIANO // LAGUNA, SC, BRASIL</div>
        <div className="footer-links">
          <a
            href={contato.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-magenta"
            style={{ transition: 'opacity 0.2s' }}
          >
            LINKEDIN
          </a>
          <a
            href={contato.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-blue"
            style={{ transition: 'opacity 0.2s' }}
          >
            GITHUB
          </a>
          <a
            href={`mailto:${contato.email}`}
            className="text-neon-green"
            style={{ transition: 'opacity 0.2s' }}
          >
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  )
}
