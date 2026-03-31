/* ═══════════════════════════════════════════════════════════════
   CRT OVERLAY — Efeito de monitor CRT (scanlines + distorção)
   ═══════════════════════════════════════════════════════════════ */

export default function CRTOverlay() {
  return (
    <>
      <div className="crt-overlay" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="pixel-grid" aria-hidden="true" />
    </>
  )
}
