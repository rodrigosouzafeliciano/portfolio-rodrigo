/* ═══════════════════════════════════════════════════════════════
   APP — Componente raiz da aplicação
   Rodrigo Souza Feliciano · Portfólio Terminal Retro
   ═══════════════════════════════════════════════════════════════ */

import CRTOverlay from './components/CRTOverlay'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import TechSection from './components/TechSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import SkillsSection from './components/SkillsSection'
import LanguagesSection from './components/LanguagesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* ── Efeitos visuais globais ── */}
      <CRTOverlay />
      <ScrollProgress />

      {/* ── Navegação fixa ── */}
      <Navbar />

      {/* ── Conteúdo principal ── */}
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <LanguagesSection />
        <ContactSection />
      </main>

      {/* ── Rodapé ── */}
      <Footer />
    </>
  )
}
