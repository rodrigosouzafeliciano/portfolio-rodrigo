<div align="center">

<img src="./assets/portfolio-banner.svg" width="100%" alt="Rodrigo Souza Feliciano - Interactive Developer Portfolio Banner" />

<br />

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-portfolio--rodrigo--pink.vercel.app-00E5FF?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-rodrigo-pink.vercel.app)
[![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite 6](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Online Resume](https://img.shields.io/badge/RESUME_REPO-curriculo--online-10B981?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rodrigosouzafeliciano/curriculo-online)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rodrigosouzafeliciano/)

<br />

**[English (EN-US)](#-english-en-us--interactive-developer-portfolio)** · **[Português (PT-BR)](#-português-pt-br--portfólio-interativo-de-engenharia)**

</div>

---

# 🇺🇸 English (EN-US) | Interactive Developer Portfolio

An interactive, retro-terminal inspired personal engineering portfolio built with **React 19** and **Vite 6**, deployed continuously on **Vercel**. Designed with a custom cyberpunk CRT aesthetic, hardware-accelerated CSS animations, and a centralized single-source-of-truth data layer (`src/data/profileData.js`).

🔗 **Live Production URL:** [https://portfolio-rodrigo-pink.vercel.app](https://portfolio-rodrigo-pink.vercel.app)

---

### ✨ Key Features & Architecture

| Feature | Technical Implementation |
| :--- | :--- |
| **Single Source of Truth** | All career history, categorized technologies, academic credentials, and contact links live in `src/data/profileData.js` for instant updates across all UI components. |
| **Interactive Tech Arsenal** | Real-time category filtering (`TODOS`, `FRONTEND`, `MOBILE`, `BACKEND`, `DEVOPS`, `AI_IA`) displaying 24+ production tools and frameworks. |
| **Retro-Terminal & CRT Design System** | Custom CSS tokens (`variables.css`), scanline CRT overlay (`CRTOverlay.jsx`), glitch typography, typewriter hero prompt, and scroll progress telemetry bar. |
| **Direct ATS Resume Download** | Integrated download CTAs serving the latest verified PDF curriculum directly from `/public/docs/`. |
| **Zero-Bloat Performance** | Built on React 19 + Vite 6 with zero external UI component libraries, ensuring sub-second load times and smooth 60fps animations. |

---

### 📂 Project Structure

```text
portfolio-rodrigo/
├── assets/
│   └── portfolio-banner.svg          # Animated SVG repository header
├── public/
│   ├── docs/
│   │   └── Currículo - Rodrigo S. Feliciano.pdf
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                # Fixed terminal navigation bar
│   │   ├── ScrollProgress.jsx        # Real-time scroll progress bar
│   │   ├── CRTOverlay.jsx            # Scanline & CRT monitor visual layer
│   │   ├── HeroSection.jsx           # Typewriter prompt + primary CTAs
│   │   ├── AboutSection.jsx          # Engineering bio + key metric cards
│   │   ├── TechSection.jsx           # Filterable Full Stack technology grid
│   │   ├── ExperienceSection.jsx     # Career timeline (Full Stack, Frontend & QA)
│   │   ├── EducationSection.jsx      # Higher Education (ADS) & SENAC credentials
│   │   ├── SkillsSection.jsx         # Core engineering competencies (Bento Grid)
│   │   ├── LanguagesSection.jsx      # Language proficiency matrix
│   │   ├── ContactSection.jsx        # Direct contact channels + CV download
│   │   └── Footer.jsx                # Terminal footer
│   ├── data/
│   │   └── profileData.js            # Centralized profile data source
│   ├── styles/
│   │   ├── variables.css             # Design tokens & neon color palette
│   │   ├── global.css                # Reset, base typography & layout
│   │   ├── components.css            # Terminal windows, buttons, cards & grids
│   │   └── animations.css            # Keyframe animations & glitch effects
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

### 🚀 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/rodrigosouzafeliciano/portfolio-rodrigo.git
cd portfolio-rodrigo

# 2. Install dependencies
npm install

# 3. Start the Vite development server
npm run dev

# 4. Build for production
npm run build
```

---
---

# 🇧🇷 Português (PT-BR) | Portfólio Interativo de Engenharia

Portfólio pessoal interativo inspirado em terminais retrô e estética cyberpunk CRT, desenvolvido com **React 19** e **Vite 6**, com deploy contínuo na **Vercel**. Construído com arquitetura modular, animações CSS aceleradas por hardware e camada de dados centralizada (`src/data/profileData.js`).

🔗 **Acesse em Produção:** [https://portfolio-rodrigo-pink.vercel.app](https://portfolio-rodrigo-pink.vercel.app)

---

### ✨ Funcionalidades e Arquitetura

| Recurso | Implementação Técnica |
| :--- | :--- |
| **Fonte Única de Verdade (Single Source of Truth)** | Todo o histórico profissional, tecnologias categorizadas, formação acadêmica e links de contato estão centralizados em `src/data/profileData.js`. |
| **Arsenal Tecnológico Filtrável** | Filtro interativo em tempo real por domínio (`TODOS`, `FRONTEND`, `MOBILE`, `BACKEND`, `DEVOPS`, `AI_IA`) cobrindo mais de 24 tecnologias do ecossistema Full Stack. |
| **Design System Terminal & CRT** | Tokens CSS customizados (`variables.css`), overlay de scanlines (`CRTOverlay.jsx`), efeito de digitação no terminal principal e barra de progresso de leitura. |
| **Download Direto de Currículo** | Botões de ação (CTAs) integrados para download imediato do currículo atualizado em PDF (`/public/docs/`). |
| **Alta Performance (Zero-Bloat)** | Construído com React 19 + Vite 6 e CSS puro modularizado, sem bibliotecas pesadas de componentes, garantindo carregamento instantâneo. |

---

### 🛠️ Como Executar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/rodrigosouzafeliciano/portfolio-rodrigo.git
cd portfolio-rodrigo

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Gere o build otimizado de produção
npm run build
```

---

<div align="center">

**Rodrigo Souza Feliciano** · Full Stack Software Developer
[Portfolio](https://portfolio-rodrigo-pink.vercel.app) · [LinkedIn](https://www.linkedin.com/in/rodrigosouzafeliciano/) · [Online Resume](https://github.com/rodrigosouzafeliciano/curriculo-online) · [Email](mailto:rodrigo.souza.f3liciano@gmail.com)

</div>
