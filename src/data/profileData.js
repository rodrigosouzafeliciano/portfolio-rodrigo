/* ═══════════════════════════════════════════════════════════════
   DADOS DO PERFIL - Fonte única de verdade para todo o sistema
   ═══════════════════════════════════════════════════════════════ */

export const profile = {
  nome: 'Rodrigo Souza Feliciano',
  titulo: 'Desenvolvedor Full Stack (React · Next.js · Node.js · TypeScript)',
  localizacao: 'Laguna, SC, Brasil',
  idade: 22,
  nascimento: '11 de agosto de 2004',
  nacionalidade: 'Brasileira',
  naturalidade: 'Laguna, Santa Catarina, Brasil',
  disponibilidade: 'Remoto · Híbrido · Presencial · Internacional',
}

export const contato = {
  email: 'rodrigo.souza.f3liciano@gmail.com',
  linkedin: 'https://linkedin.com/in/rodrigosouzafeliciano',
  linkedinLabel: 'linkedin.com/in/rodrigosouzafeliciano',
  github: 'https://github.com/rodrigosouzafeliciano',
  githubLabel: 'github.com/rodrigosouzafeliciano',
  whatsapp: 'https://wa.me/5548999263583',
  whatsappLabel: '+55 48 99926-3583',
  site: 'https://github.com/rodrigosouzafeliciano/curriculo-online',
  siteLabel: 'portfolio-rodrigo-pink.vercel.app',
}

export const bio = [
  'Desenvolvedor Full Stack com experiência prática na construção, teste e operação de aplicações web, APIs em tempo real e aplicativos móveis em produção utilizando React, Next.js, TypeScript, Node.js (Express/Koa), PostgreSQL, Redis, Socket.IO, Docker e React Native.',
  'Trajetória multifuncional iniciada na Orbe Soft (Maio de 2025 a Agosto de 2026), evoluindo do suporte técnico N2/N3 e Quality Assurance (QA) até o desenvolvimento de interfaces web, somada à engenharia ponta a ponta do ecossistema Kanghoo (rastreamento GPS veicular em tempo real, 23+ rotas REST e Clean Architecture).',
  'Graduando em Análise e Desenvolvimento de Sistemas (Unopar Anhanguera, 2026 a 2028) e formado tecnicamente pelo SENAC com mais de 600 horas de capacitação prática em programação web e desenvolvimento de sistemas.',
  'Fortemente inserido no ecossistema de Inteligência Artificial aplicada à engenharia de software, integrando Claude, Codex, Figma Make, Stitch e Antigravity ao fluxo de desenvolvimento para elevar a produtividade e a qualidade técnica.',
]

export const stats = [
  { valor: '22', label: 'ANOS_IDADE', cor: 'magenta' },
  { valor: 'LAGUNA', label: 'RESIDÊNCIA', cor: 'blue' },
  { valor: '23+ API', label: 'ROTAS_EM_PRODUÇÃO', cor: 'blue' },
  { valor: 'ADS+600H', label: 'FORMAÇÃO_TÉCNICA', cor: 'magenta' },
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
  { nome: 'REACT', desc: 'Interfaces componentizadas com hooks, gerenciamento de estado e integração com APIs REST e WebSockets.', categoria: 'FRONTEND', icone: 'code', cor: 'blue', versao: '19.x' },
  { nome: 'NEXT.JS', desc: 'Aplicações React full-stack com App Router, SSR, otimização de performance e SEO avançado.', categoria: 'FRONTEND', icone: 'layers', cor: 'blue', versao: '16.x' },
  { nome: 'TYPESCRIPT', desc: 'Tipagem estática rigorosa, interfaces, contratos de API e refatoração segura em projetos escaláveis.', categoria: 'FRONTEND', icone: 'data_object', cor: 'blue', versao: '5.x' },
  { nome: 'JAVASCRIPT', desc: 'ES6+, async/await, manipulação de DOM, eventos em tempo real e integrações assíncronas.', categoria: 'FRONTEND', icone: 'bolt', cor: 'green', versao: 'ES6+' },
  { nome: 'TAILWIND CSS', desc: 'Design systems responsivos, estilização utilitária de alta performance e prototipação ágil.', categoria: 'FRONTEND', icone: 'style', cor: 'blue', versao: '4.x' },
  { nome: 'VUE.JS', desc: 'SPAs com Composition API, reatividade declarativa e arquitetura modular.', categoria: 'FRONTEND', icone: 'eco', cor: 'green', versao: '3.x' },
  { nome: 'HTML5 & CSS3', desc: 'Marcação semântica acessível, CSS Grid, Flexbox, variáveis nativas e animações fluidas.', categoria: 'FRONTEND', icone: 'palette', cor: 'magenta', versao: 'W3C' },
  { nome: 'VITE', desc: 'Bundler moderno com HMR instantâneo e pipeline de build otimizado para produção.', categoria: 'FRONTEND', icone: 'flash_on', cor: 'blue', versao: 'FAST' },

  // Mobile
  { nome: 'REACT NATIVE', desc: 'Aplicativos móveis multiplataforma integrados a GPS em tempo real, câmera, mapas e notificações push.', categoria: 'MOBILE', icone: 'smartphone', cor: 'magenta', versao: 'EXPO' },

  // Backend
  { nome: 'NODE.JS', desc: 'Arquitetura server-side escalável em Clean Architecture com Express.js e Koa.js.', categoria: 'BACKEND', icone: 'dns', cor: 'green', versao: 'LTS' },
  { nome: 'POSTGRESQL', desc: 'Modelagem relacional normalizada, migrações versionadas, índices, JOINs e transações ACID.', categoria: 'BACKEND', icone: 'database', cor: 'magenta', versao: '15+' },
  { nome: 'REDIS', desc: 'Cache em memória de baixa latência, controle de sessões, filas assíncronas e pub/sub.', categoria: 'BACKEND', icone: 'memory', cor: 'green', versao: '7.x' },
  { nome: 'SOCKET.IO', desc: 'Comunicação bidirecional via WebSockets para telemetria GPS e eventos em tempo real.', categoria: 'BACKEND', icone: 'sync_alt', cor: 'blue', versao: 'RT' },
  { nome: 'REST & JWT', desc: 'APIs RESTful documentadas (Swagger/OpenAPI) com autenticação JWT, RBAC e validação Joi/Zod.', categoria: 'BACKEND', icone: 'security', cor: 'magenta', versao: 'AUTH' },
  { nome: 'PYTHON', desc: 'Scripts de automação, processamento de dados e ferramentas de apoio ao desenvolvimento.', categoria: 'BACKEND', icone: 'terminal', cor: 'blue', versao: '3.x' },

  // DevOps & Qualidade
  { nome: 'DOCKER', desc: 'Containerização multi-serviço (Docker Compose) com isolamento de rede, volumes e healthchecks.', categoria: 'DEVOPS', icone: 'deployed_code', cor: 'blue', versao: 'COMPOSE' },
  { nome: 'GITHUB ACTIONS', desc: 'Pipelines de CI/CD automatizados para build, testes, lint e deploy contínuo.', categoria: 'DEVOPS', icone: 'hub', cor: 'white', versao: 'CI/CD' },
  { nome: 'NGINX & AWS', desc: 'Proxy reverso, SSL/TLS, balanceamento de carga e operação de infraestrutura em nuvem (EC2/Vercel).', categoria: 'DEVOPS', icone: 'cloud_upload', cor: 'green', versao: 'CLOUD' },
  { nome: 'PROMETHEUS & GRAFANA', desc: 'Observabilidade, coleta de métricas de telemetria, logs estruturados e dashboards de saúde.', categoria: 'DEVOPS', icone: 'monitoring', cor: 'magenta', versao: 'OBS' },
  { nome: 'JEST & QA', desc: 'Testes unitários, funcionais, de integração (Supertest) e regressão com rastreabilidade completa.', categoria: 'DEVOPS', icone: 'verified', cor: 'green', versao: 'TEST' },
  { nome: 'GIT & LINUX', desc: 'Versionamento semântico, revisão de PRs, administração de servidores Linux e automação em Bash.', categoria: 'DEVOPS', icone: 'merge', cor: 'white', versao: 'CLI' },

  // IA
  { nome: 'CLAUDE', desc: 'Engenharia assistida por IA para revisão arquitetural, refatoração e documentação técnica.', categoria: 'AI_IA', icone: 'psychology', cor: 'magenta', versao: 'ANTHROPIC' },
  { nome: 'CODEX & GEMINI', desc: 'Aceleração de desenvolvimento, geração de testes automatizados e análise de código multi-stack.', categoria: 'AI_IA', icone: 'smart_toy', cor: 'blue', versao: 'LLM' },
  { nome: 'FIGMA MAKE & STITCH', desc: 'Prototipação de interfaces de alta fidelidade e design systems orientados a componentes.', categoria: 'AI_IA', icone: 'draw', cor: 'green', versao: 'DESIGN' },
  { nome: 'ANTIGRAVITY', desc: 'Orquestração de agentes e automação avançada no fluxo de engenharia de software.', categoria: 'AI_IA', icone: 'rocket_launch', cor: 'blue', versao: 'AGENT' },
]

/* ── Experiência Profissional ── */
export const experiencia = {
  empresa: 'Orbe Soft & Projetos de Engenharia Full Stack',
  descricao: 'Desenvolvimento de Software, Arquitetura Backend/Frontend e Garantia de Qualidade (QA)',
  periodo: 'Fevereiro de 2025 - Presente',
  duracao: '1+ ano',
  resumo: 'Atuação completa no ciclo de engenharia de software: arquitetura de APIs REST e sistemas em tempo real, desenvolvimento web/mobile com React, Next.js e TypeScript, garantia de qualidade (QA) e operação em produção com Docker e CI/CD.',
  cargos: [
    {
      titulo: 'DESENVOLVEDOR FULL STACK // PROJETOS INDEPENDENTES (KANGHOO)',
      periodo: '2025 - PRESENTE',
      cor: 'blue',
      atividades: [
        'Arquitetura e desenvolvimento ponta a ponta da plataforma Kanghoo (transporte escolar e excursões com telemetria GPS em tempo real) aplicando Clean Architecture.',
        'Construção de API RESTful em Node.js e TypeScript com mais de 23 rotas documentadas, autenticação JWT, controle de acesso por perfis (RBAC) e integração de pagamentos (Stripe/Mercado Pago).',
        'Implementação de motor de rastreamento veicular ao vivo utilizando Socket.IO, Redis e PostgreSQL, além de containerização multi-serviço com Docker Compose, Nginx, Prometheus e Grafana.',
        'Desenvolvimento de aplicações web e mobile modernas com React 19, Next.js, TypeScript, Tailwind CSS e React Native.',
      ],
    },
    {
      titulo: 'DESENVOLVEDOR WEB FRONTEND // ORBE SOFT',
      periodo: 'MAI 2025 - AGO 2026',
      cor: 'magenta',
      atividades: [
        'Desenvolvimento e manutenção de interfaces web responsivas e Landing Pages de alta conversão utilizando React, HTML5, CSS3, JavaScript e Webflow.',
        'Elaboração de documentações técnicas de projetos internos, padronizando fluxos de entrega e facilitando a manutenção entre equipes.',
        'Colaboração direta com times de design e produto para garantir fidelidade visual, acessibilidade e desempenho.',
        'Participação ativa em revisões de código (Code Review), versionamento com Git/GitHub e alinhamentos técnicos ágeis.',
      ],
    },
    {
      titulo: 'QA TESTER & SUPORTE TÉCNICO N2/N3 // ORBE SOFT',
      periodo: 'MAI 2025 - AGO 2026',
      cor: 'green',
      atividades: [
        'Planejamento e execução de suítes de testes funcionais, exploratórios, de regressão e de aceitação antes de publicações em produção.',
        'Identificação, documentação e rastreamento de bugs com passos detalhados de reprodução, evidências técnicas e classificação de severidade.',
        'Triagem e resolução de incidentes técnicos em produção, diagnóstico de falhas e validação de correções junto à equipe de engenharia.',
      ],
    },
  ],
}

/* ── Formação Acadêmica ── */
export const formacao = [
  {
    titulo: 'TECNÓLOGO EM ANÁLISE E DESENV. DE SISTEMAS',
    instituicao: 'Unopar Anhanguera (Ensino Superior)',
    periodo: '2026 - 2028 (Em andamento)',
    cargaHoraria: 'SUPERIOR',
    cor: 'blue',
    arquivo: 'ADS_DEGREE.LOG',
    descricao: 'Graduação tecnológica em Engenharia de Software, Arquitetura de Sistemas, Modelagem de Dados, Cloud Computing, Segurança e Qualidade de Software.',
    tags: ['ENG. SOFTWARE', 'ARQUITETURA', 'SQL', 'CLOUD', 'QA'],
    destaque: true,
  },
  {
    titulo: 'PROGRAMADOR WEB',
    instituicao: 'SENAC Tubarão, SC',
    periodo: 'Concluído em 2025',
    cargaHoraria: '240H',
    cor: 'magenta',
    arquivo: 'PROG_WEB.LOG',
    descricao: 'Formação técnica intensiva em desenvolvimento web full-stack: interfaces responsivas, lógica server-side, integração com banco de dados e deploy.',
    tags: ['HTML/CSS', 'JS', 'REACT', 'NODE.JS', 'SQL'],
  },
  {
    titulo: 'PROGRAMADOR DE SISTEMAS',
    instituicao: 'SENAC Tubarão, SC',
    periodo: 'Concluído em 2025',
    cargaHoraria: '200H',
    cor: 'blue',
    arquivo: 'SYS_PROG.LOG',
    descricao: 'Desenvolvimento de sistemas orientados a objetos, modelagem de bancos de dados relacionais (DER/MER), SQL e práticas de teste de software.',
    tags: ['POO', 'SQL', 'ARQUITETURA', 'TESTES'],
  },
  {
    titulo: 'ASSISTENTE ADMINISTRATIVO',
    instituicao: 'SENAC Criciúma, SC',
    periodo: 'Concluído em Dezembro de 2020',
    cargaHoraria: '160H',
    cor: 'green',
    arquivo: 'ADMIN_ASSIST.LOG',
    descricao: 'Gestão de processos organizacionais, rotinas corporativas, documentação técnica e comunicação profissional.',
    tags: ['PROCESSOS', 'GESTÃO', 'DOCUMENTAÇÃO'],
  },
]

/* ── Competências Comportamentais ── */
export const competencias = [
  {
    titulo: 'ARQUITETURA & CÓDIGO LIMPO',
    descricao: 'Construção de sistemas modulares aplicando Clean Architecture, separação de responsabilidades, tipagem estática e contratos de API bem definidos.',
    icone: 'architecture',
    cor: 'blue',
    grande: true,
  },
  {
    titulo: 'MENTALIDADE DE QA & CONFIABILIDADE',
    descricao: 'Prevenção de defeitos desde o design do código, combinando testes automatizados, validação rigorosa de entradas e observabilidade em produção.',
    icone: 'verified',
    cor: 'magenta',
    grande: true,
  },
  {
    titulo: 'ENGENHARIA PONTA A PONTA',
    descricao: 'Domínio do ciclo completo: da modelagem PostgreSQL e APIs Node.js ao frontend React/Next.js e deploy em Docker.',
    icone: 'swap_horiz',
  },
  {
    titulo: 'COMUNICAÇÃO ASSÍNCRONA',
    descricao: 'Escrita técnica clara, documentação de APIs e alinhamento eficiente em equipes remotas nacionais e internacionais.',
    icone: 'edit_note',
  },
  {
    titulo: 'VISÃO DE PRODUTO',
    descricao: 'Foco em desempenho, experiência do usuário, segurança e impacto real de cada funcionalidade no negócio.',
    icone: 'hub',
  },
  {
    titulo: 'PRODUTIVIDADE COM IA',
    descricao: 'Uso estratégico de ferramentas de IA generativa e agentes para acelerar entregas sem abrir mão do rigor técnico.',
    icone: 'auto_awesome',
  },
]

/* ── Idiomas ── */
export const idiomas = [
  {
    idioma: 'PORTUGUÊS',
    nivel: 'Nativo / Fluente',
    descricao: 'Comunicação oral e escrita em nível pleno para atuação técnica, documentação de arquitetura e alinhamento executivo.',
    cor: 'green',
  },
  {
    idioma: 'INGLÊS',
    nivel: 'Intermediário (Leitura Técnica Avançada)',
    descricao: 'Leitura fluente de documentações, RFCs e código; escrita técnica para commits, Pull Requests e colaboração assíncrona.',
    cor: 'blue',
  },
  {
    idioma: 'ESPANHOL',
    nivel: 'Básico',
    descricao: 'Compreensão de leitura técnica e comunicação básica para colaboração com equipes na América Latina.',
    cor: 'magenta',
  },
]
