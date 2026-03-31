/* ═══════════════════════════════════════════════════════════════
   NAVBAR — Navegação fixa estilo terminal
   ═══════════════════════════════════════════════════════════════ */

export default function Navbar() {
  const links = [
    { href: '#inicio', label: 'INÍCIO' },
    { href: '#sobre', label: 'SOBRE' },
    { href: '#tecnologias', label: 'TECH' },
    { href: '#experiencia', label: 'XP' },
    { href: '#formacao', label: 'FORMAÇÃO' },
    { href: '#contato', label: 'CONEXÃO', special: true },
  ]

  return (
    <header className="navbar" id="navbar">
      <div className="terminal-window border-blue" style={{ marginBottom: 0 }}>
        <div className="terminal-header header-blue">
          <span>SYSTEM_NAV_V2.0.exe</span>
          <div className="terminal-header-dots">
            <div className="terminal-header-dot" />
            <div className="terminal-header-dot" />
            <div className="terminal-header-dot filled" />
          </div>
        </div>
        <nav className="navbar-inner" aria-label="Navegação principal">
          <div className="navbar-brand glitch-text" data-text="RODRIGO_FELICIANO">
            RODRIGO_FELICIANO
          </div>
          <div className="navbar-links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={link.special ? 'link-magenta' : ''}
              >
                [ {link.label} ]
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
