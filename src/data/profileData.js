/* ═══════════════════════════════════════════════════════════════
   DADOS DO PERFIL — Extraídos de rodrigo-souza-feliciano.md
   Fonte única de verdade para todo o sistema
   ═══════════════════════════════════════════════════════════════ */

export const profile = {
  nome: 'Rodrigo Souza Feliciano',
  titulo: 'Desenvolvedor Frontend & Mobile (React Native)',
  localizacao: 'Laguna, SC, Brasil',
  idade: 21,
  nascimento: '11 de agosto de 2004',
  nacionalidade: 'Brasileira',
  naturalidade: 'Laguna, Santa Catarina, Brasil',
  disponibilidade: 'Remoto · Híbrido · Presencial · Internacional',
}

export const contato = {
  email: 'rodrigo.souza.f3liciano@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rodrigo-souza-feliciano-312974374/',
  linkedinLabel: 'linkedin.com/in/rodrigo-souza-feliciano',
  github: 'https://github.com/rodrigosouzafeliciano',
  githubLabel: 'github.com/rodrigosouzafeliciano',
  whatsapp: 'https://wa.me/5548999263583',
  whatsappLabel: '+55 48 99926-3583',
  site: 'https://rodrigo-souza-feliciano.vercel.app',
  siteLabel: 'rodrigo-souza-feliciano.vercel.app',
}

export const bio = [
  'Desenvolvedor Junior com especialização em Frontend Web e Mobile (React Native), formado tecnicamente pelo SENAC com 600 horas de capacitação — e com experiência profissional real de um ano na Orbe Soft, empresa de desenvolvimento de software.',
  'Essa trajetória multifuncional proporcionou uma compreensão abrangente do ciclo de vida completo de um produto digital: da especificação e prototipação à construção, validação e publicação em produção.',
  'Fortemente inserido no ecossistema de Inteligência Artificial aplicada ao desenvolvimento de software, incorpora ferramentas de IA de forma estratégica ao fluxo de trabalho — utilizando Claude, Codex, Figma Make, Stitch e Antigravity para ampliar a produtividade e operar na vanguarda do mercado.',
  'Objetivo de carreira: contribuir com equipes dinâmicas, inovadoras e de alto desempenho, com abertura para oportunidades em âmbito nacional ou internacional.',
]

export const stats = [
  { valor: '21', label: 'ANOS_IDADE', cor: 'magenta' },
  { valor: 'LAGUNA', label: 'RESIDÊNCIA', cor: 'blue' },
  { valor: '+1 ANO', label: 'EXP_PROFISSIONAL', cor: 'blue' },
  { valor: '600H+', label: 'FORMAÇÃO_TÉCNICA', cor: 'magenta' },
]

/* ── Stack Técnico ── */
export const categoriasTech = [
  'TODOS',
  'FRONTEND',
  'MOBILE',
  'BACKEND',
  'DEVOPS',
  'AI_IA',
]

export const tecnologias = [
  // Frontend Web
  { nome: 'HTML5', desc: 'Marcação semântica com foco em acessibilidade e hierarquia de conteúdo.', categoria: 'FRONTEND', icone: 'code', cor: 'blue', versao: 'SEMÂNTICO' },
  { nome: 'CSS3', desc: 'Flexbox, Grid, variáveis nativas, animações e design responsivo avançado.', categoria: 'FRONTEND', icone: 'palette', cor: 'magenta', versao: 'AVANÇADO' },
  { nome: 'JAVASCRIPT', desc: 'ES6+, async/await, DOM, APIs REST e programação orientada a eventos.', categoria: 'FRONTEND', icone: 'bolt', cor: 'green', versao: 'ES6+' },
  { nome: 'REACT', desc: 'Interfaces componentizadas com hooks, estado e integração com APIs.', categoria: 'FRONTEND', icone: 'code', cor: 'blue', versao: '19.x' },
  { nome: 'VUE.JS', desc: 'SPAs com Composition API, reatividade declarativa e módulos.', categoria: 'FRONTEND', icone: 'eco', cor: 'green', versao: '3.x' },
  { nome: 'TAILWIND CSS', desc: 'Estilização utilitária com alta produtividade e responsividade nativa.', categoria: 'FRONTEND', icone: 'style', cor: 'blue', versao: 'UTIL' },
  { nome: 'BOOTSTRAP', desc: 'Framework CSS para prototipação ágil com grid responsivo.', categoria: 'FRONTEND', icone: 'grid_view', cor: 'magenta', versao: '5.x' },
  { nome: 'VITE', desc: 'Bundler moderno com HMR ultrarrápido e build otimizado.', categoria: 'FRONTEND', icone: 'flash_on', cor: 'blue', versao: 'FAST' },

  // Mobile
  { nome: 'REACT NATIVE', desc: 'Apps multiplataforma nativos para Android com ecossistema React.', categoria: 'MOBILE', icone: 'smartphone', cor: 'magenta', versao: 'STABLE' },

  // Backend
  { nome: 'NODE.JS', desc: 'APIs RESTful, middlewares e controladores server-side com npm.', categoria: 'BACKEND', icone: 'dns', cor: 'green', versao: 'LTS' },
  { nome: 'PYTHON', desc: 'Scripting, automações e fundamentos de back-end produtivo.', categoria: 'BACKEND', icone: 'terminal', cor: 'blue', versao: '3.x' },
  { nome: 'POSTGRESQL', desc: 'Modelagem relacional, SQL complexo com JOINs e constraints.', categoria: 'BACKEND', icone: 'database', cor: 'magenta', versao: 'SQL' },

  // DevOps
  { nome: 'GIT', desc: 'Branches, commits semânticos, merge, rebase e resolução de conflitos.', categoria: 'DEVOPS', icone: 'merge', cor: 'green', versao: 'VCS' },
  { nome: 'GITHUB', desc: 'Repositórios, PRs, revisão de código e GitHub Actions.', categoria: 'DEVOPS', icone: 'hub', cor: 'white', versao: 'COLLAB' },
  { nome: 'VERCEL', desc: 'Deploy contínuo com integração GitHub e rollback automático.', categoria: 'DEVOPS', icone: 'cloud_upload', cor: 'blue', versao: 'DEPLOY' },
  { nome: 'LINUX', desc: 'Terminal, scripts, permissões e automações em shell.', categoria: 'DEVOPS', icone: 'terminal', cor: 'green', versao: 'CLI' },
  { nome: 'WEBFLOW', desc: 'Sites e LPs no-code/low-code com CMS e interações.', categoria: 'DEVOPS', icone: 'web', cor: 'magenta', versao: 'NO-CODE' },
  { nome: 'GITHUB PAGES', desc: 'Publicação de projetos estáticos direto dos repositórios.', categoria: 'DEVOPS', icone: 'public', cor: 'white', versao: 'STATIC' },

  // IA
  { nome: 'CLAUDE', desc: 'Geração e revisão de código, documentação e arquitetura.', categoria: 'AI_IA', icone: 'psychology', cor: 'magenta', versao: 'ANTHROPIC' },
  { nome: 'CODEX', desc: 'Geração, refatoração e explicação de código multi-linguagem.', categoria: 'AI_IA', icone: 'smart_toy', cor: 'blue', versao: 'OPENAI' },
  { nome: 'FIGMA MAKE', desc: 'Geração de interfaces a partir de linguagem natural.', categoria: 'AI_IA', icone: 'draw', cor: 'green', versao: 'DESIGN' },
  { nome: 'STITCH', desc: 'Prototipação rápida de produtos digitais com IA.', categoria: 'AI_IA', icone: 'auto_fix_high', cor: 'magenta', versao: 'CREATE' },
  { nome: 'ANTIGRAVITY', desc: 'Automação e suporte ao fluxo de desenvolvimento.', categoria: 'AI_IA', icone: 'rocket_launch', cor: 'blue', versao: 'DEV' },
]

/* ── Experiência Profissional ── */
export const experiencia = {
  empresa: 'Orbe Soft',
  descricao: 'Empresa de Tecnologia e Desenvolvimento de Software',
  periodo: 'Maio de 2025 – Maio de 2026',
  duracao: '1 ano',
  resumo: 'Trajetória marcada por crescimento contínuo e evolução progressiva de responsabilidades — do suporte técnico ao desenvolvimento frontend, passando pela garantia de qualidade.',
  cargos: [
    {
      titulo: 'DESENVOLVEDOR WEB FRONTEND',
      periodo: 'MAI 2025 - MAI 2026',
      cor: 'blue',
      atividades: [
        'Desenvolvimento de Landing Pages institucionais e comerciais com HTML, CSS e foco em conversão e experiência do usuário.',
        'Criação e publicação de páginas utilizando Webflow (no-code/low-code) com entrega ágil.',
        'Elaboração de documentações técnicas de projetos internos com clareza e rastreabilidade.',
        'Colaboração com equipes de design e produto para fidelidade ao protótipo.',
        'Participação em revisões de código e alinhamentos técnicos.',
      ],
    },
    {
      titulo: 'QA TESTER',
      periodo: '2025',
      cor: 'magenta',
      atividades: [
        'Planejamento e execução de testes funcionais, de regressão e de aceitação.',
        'Identificação e reporte detalhado de bugs com passos de reprodução e severidade.',
        'Criação de casos de teste e matrizes de cobertura com rastreabilidade.',
        'Acompanhamento do ciclo de vida de defeitos até verificação pós-correção.',
        'Validação e homologação de entregas com redução de retrabalho.',
      ],
    },
    {
      titulo: 'SUPORTE TÉCNICO',
      periodo: '2025',
      cor: 'green',
      atividades: [
        'Triagem e resolução de chamados técnicos com menor tempo de inatividade.',
        'Diagnóstico de falhas em sistemas e registro estruturado de ocorrências.',
        'Identificação de problemas recorrentes e sugestões de melhoria.',
        'Comunicação objetiva com usuários de diferentes perfis técnicos.',
      ],
    },
  ],
}

/* ── Formação Acadêmica ── */
export const formacao = [
  {
    titulo: 'PROGRAMADOR WEB',
    instituicao: 'SENAC Tubarão, SC',
    periodo: '2º Semestre de 2025',
    cargaHoraria: '240H',
    cor: 'blue',
    arquivo: 'PROG_WEB.LOG',
    descricao: 'Formação completa em desenvolvimento web: frontend, backend e publicação de aplicações.',
    tags: ['HTML/CSS', 'JS', 'PHP', 'SQL', 'REACT'],
  },
  {
    titulo: 'PROGRAMADOR DE SISTEMAS',
    instituicao: 'SENAC Tubarão, SC',
    periodo: '1º Semestre de 2025',
    cargaHoraria: '200H',
    cor: 'magenta',
    arquivo: 'SYS_PROG.LOG',
    descricao: 'Desenvolvimento de sistemas, modelagem de banco de dados e práticas de teste e manutenção.',
    tags: ['JAVA', 'C#', 'SQL', 'LÓGICA'],
    destaque: true,
  },
  {
    titulo: 'ASSISTENTE ADMINISTRATIVO',
    instituicao: 'SENAC Criciúma, SC',
    periodo: 'Concluído em Dezembro de 2020',
    cargaHoraria: '160H',
    cor: 'green',
    arquivo: 'ADMIN_ASSIST.LOG',
    descricao: 'Processos organizacionais, documentação administrativa e comunicação interpessoal.',
    tags: ['EXCEL', 'GESTÃO', 'DOCS'],
  },
]

/* ── Competências Comportamentais ── */
export const competencias = [
  {
    titulo: 'APRENDIZADO RÁPIDO',
    descricao: 'Capacidade comprovada de dominar novas stacks e paradigmas em tempo recorde — evidenciada pela evolução progressiva em apenas um ano.',
    icone: 'auto_awesome',
    cor: 'blue',
    grande: true,
  },
  {
    titulo: 'RIGOR TÉCNICO',
    descricao: 'Código limpo, documentado e livre de falhas. Precisão apurada durante atuação como QA Tester.',
    icone: 'architecture',
    cor: 'magenta',
    grande: true,
  },
  {
    titulo: 'VERSATILIDADE',
    descricao: 'Experiência em três funções distintas — do suporte ao core engineering.',
    icone: 'swap_horiz',
  },
  {
    titulo: 'COMUNICAÇÃO',
    descricao: 'Escrita técnica clara e alinhamento de expectativas com públicos diversos.',
    icone: 'edit_note',
  },
  {
    titulo: 'VISÃO SISTÊMICA',
    descricao: 'Entendimento do impacto de cada etapa no negócio pela vivência completa do ciclo.',
    icone: 'hub',
  },
  {
    titulo: 'ATUALIZAÇÃO PROATIVA',
    descricao: 'Acompanhamento ativo de tendências em web, mobile e inteligência artificial.',
    icone: 'trending_up',
  },
]

/* ── Idiomas ── */
export const idiomas = [
  {
    idioma: 'PORTUGUÊS',
    nivel: 'Nativo',
    descricao: 'Comunicação oral e escrita em nível pleno, incluindo redação técnica e formal.',
    cor: 'green',
  },
  {
    idioma: 'INGLÊS',
    nivel: 'Intermediário',
    descricao: 'Leitura fluente de documentações técnicas e repositórios; comunicação escrita funcional.',
    cor: 'blue',
  },
]
