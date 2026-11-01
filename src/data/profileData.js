/* ═══════════════════════════════════════════════════════════════
   DADOS DO PERFIL - Fonte única de verdade para todo o sistema
   ═══════════════════════════════════════════════════════════════ */

export const profile = {
  nome: 'Rodrigo Souza Feliciano',
  titulo: 'Desenvolvedor de Software Full Stack | Analista de QA',
  localizacao: 'Laguna, SC, Brasil',
  idade: 22,
  nascimento: '11 de agosto de 2004',
  nacionalidade: 'Brasileira',
  naturalidade: 'Laguna, Santa Catarina, Brasil',
  disponibilidade: '100% Remoto (Brasil e Internacional)',
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
  'Desenvolvedor full stack e analista de QA com 1 ano e 4 meses na Orbe Soft, atuando em desenvolvimento web, planos de teste de regressão e suporte técnico N2/N3.',
  'Desenvolve back-ends em Node.js (Koa.js e Express.js) e PostgreSQL, interfaces em React, Next.js, TypeScript e Tailwind CSS, e aplicativos móveis em React Native.',
  'Projetou o Kanghoo, plataforma de gestão de transporte escolar com Clean Architecture, injeção de dependências com Awilix, telemetria GPS em tempo real (Socket.IO e Redis), Docker Compose e observabilidade com Prometheus e Grafana.',
  'Graduando em Análise e Desenvolvimento de Sistemas (Universidade Pitágoras Unopar Anhanguera, 2026 a 2028) com nota 100/100 em Programação Python, somado a 600 horas de qualificações profissionais pelo SENAC.',
]

export const stats = [
  { valor: '1A 4M', label: 'EXP_ORBE_SOFT', cor: 'magenta' },
  { valor: '23+ API', label: 'ROTAS_KANGHOO', cor: 'blue' },
  { valor: '93% B2+', label: 'INGLÊS_WORKANA', cor: 'blue' },
  { valor: 'ADS+600H', label: 'FORMAÇÃO_TÉCNICA', cor: 'magenta' },
]

/* ── Stack Técnico ── */
export const categoriasTech = [
  'TODOS',
  'FRONTEND',
  'MOBILE',
  'BACKEND',
  'DEVOPS',
  'DATA_QA',
]

export const tecnologias = [
  // Frontend Web
  { nome: 'REACT.JS', desc: 'Arquitetura orientada a componentes, hooks, estado e consumo de APIs REST e WebSockets.', categoria: 'FRONTEND', icone: 'code', cor: 'blue', versao: '19.x' },
  { nome: 'NEXT.JS', desc: 'Aplicações React full stack com App Router e Pages Router, SEO técnico e atenção ao desempenho.', categoria: 'FRONTEND', icone: 'layers', cor: 'blue', versao: 'SSR/APP' },
  { nome: 'TYPESCRIPT', desc: 'Tipagem estática, interfaces e contratos claros entre front-end e back-end.', categoria: 'FRONTEND', icone: 'data_object', cor: 'blue', versao: 'TS' },
  { nome: 'JAVASCRIPT (ES6+)', desc: 'Programação assíncrona, manipulação de DOM, eventos e integração com serviços web.', categoria: 'FRONTEND', icone: 'bolt', cor: 'green', versao: 'ES6+' },
  { nome: 'TAILWIND CSS', desc: 'Estilização utilitária responsiva, microinterações e otimização de assets.', categoria: 'FRONTEND', icone: 'style', cor: 'blue', versao: 'UTIL' },
  { nome: 'HTML5 & CSS3', desc: 'Marcação HTML5 semântica, CSS Grid, Flexbox, variáveis nativas e design responsivo.', categoria: 'FRONTEND', icone: 'palette', cor: 'magenta', versao: 'W3C' },
  { nome: 'VITE', desc: 'Bundler moderno com HMR rápido e build otimizado para produção.', categoria: 'FRONTEND', icone: 'flash_on', cor: 'blue', versao: '6.x' },
  { nome: 'WEBFLOW', desc: 'Desenvolvimento e publicação de portais institucionais corporativos.', categoria: 'FRONTEND', icone: 'web', cor: 'magenta', versao: 'CMS' },

  // Mobile
  { nome: 'REACT NATIVE', desc: 'Aplicativos móveis multiplataforma (iOS e Android) com componentes nativos e persistência local.', categoria: 'MOBILE', icone: 'smartphone', cor: 'magenta', versao: 'IOS/AND' },

  // Backend & Tempo Real
  { nome: 'NODE.JS', desc: 'Desenvolvimento de APIs REST e monólitos modulares com Clean Architecture.', categoria: 'BACKEND', icone: 'dns', cor: 'green', versao: '20+' },
  { nome: 'KOA.JS & EXPRESS', desc: 'Roteamento HTTP, middlewares de segurança, rate limiting e injeção de dependências com Awilix.', categoria: 'BACKEND', icone: 'settings_ethernet', cor: 'blue', versao: 'HTTP' },
  { nome: 'POSTGRESQL', desc: 'Modelagem relacional, normalização de esquemas, constraints, integridade referencial e consultas SQL.', categoria: 'BACKEND', icone: 'database', cor: 'magenta', versao: '14+' },
  { nome: 'REDIS', desc: 'Cache de rotas em memória, sessões temporárias e aceleração de leitura em tempo real.', categoria: 'BACKEND', icone: 'memory', cor: 'green', versao: '7+' },
  { nome: 'SOCKET.IO', desc: 'Comunicação bidirecional via WebSockets para telemetria GPS contínua de baixa latência.', categoria: 'BACKEND', icone: 'sync_alt', cor: 'blue', versao: 'WS' },
  { nome: 'JWT & BCRYPT', desc: 'Autenticação stateless, hash seguro de senhas e controle de perfis de acesso.', categoria: 'BACKEND', icone: 'security', cor: 'magenta', versao: 'AUTH' },

  // DevOps & Observabilidade
  { nome: 'DOCKER & COMPOSE', desc: 'Conteinerização de API, banco, cache, proxy e monitoramento com paridade entre dev e prod.', categoria: 'DEVOPS', icone: 'deployed_code', cor: 'blue', versao: 'CONTAINERS' },
  { nome: 'NGINX & SSL/TLS', desc: 'Configuração de proxy reverso com SSL/TLS para tráfego HTTP e WebSocket.', categoria: 'DEVOPS', icone: 'cloud_upload', cor: 'green', versao: 'PROXY' },
  { nome: 'PROMETHEUS & GRAFANA', desc: 'Coleta de métricas e visualização da integridade dos nós em tempo real.', categoria: 'DEVOPS', icone: 'monitoring', cor: 'magenta', versao: 'METRICS' },
  { nome: 'LINUX, GIT & CI/CD', desc: 'Distribuições Debian/Ubuntu, automação via shell, controle de versão Git/GitHub e fluxos de CI/CD.', categoria: 'DEVOPS', icone: 'terminal', cor: 'white', versao: 'OPS' },

  // Qualidade, Dados & Requisitos
  { nome: 'QA & TESTES', desc: 'Planos de teste funcionais, de regressão e aceitação (UAT), ciclo de vida de bugs e matrizes de rastreabilidade.', categoria: 'DATA_QA', icone: 'verified', cor: 'green', versao: 'ZERO-DEFECT' },
  { nome: 'PYTHON & DADOS', desc: 'Scripts, automação e análise de dados com Pandas, NumPy, Matplotlib, Seaborn e TensorFlow.', categoria: 'DATA_QA', icone: 'analytics', cor: 'blue', versao: '100/100' },
  { nome: 'BPMN & UML', desc: 'Modelagem de processos de negócio, engenharia de requisitos e gestão documental.', categoria: 'DATA_QA', icone: 'account_tree', cor: 'magenta', versao: 'MODEL' },
]

/* ── Experiência Profissional & Projetos ── */
export const experiencia = {
  empresa: 'Orbe Soft · Consultoria Independente · Projeto Kanghoo',
  descricao: 'Desenvolvimento Full Stack, Qualidade de Software (QA) e Suporte N2/N3',
  periodo: '2025 - 2026',
  duracao: '1 ano e 4 meses na Orbe Soft',
  resumo: 'Atuação combinando desenvolvimento web em Next.js, TypeScript e React, planos de teste de regressão, suporte técnico N2/N3 em produção e arquitetura back-end em Node.js, PostgreSQL e Redis.',
  cargos: [
    {
      titulo: 'SOFTWARE DEVELOPER & QA ANALYST // ORBE SOFT',
      periodo: 'MAI 2025 - AGO 2026',
      cor: 'blue',
      atividades: [
        'Desenvolveu e publicou landing pages de conversão e aplicações web com Next.js, TypeScript e Tailwind CSS, com arquitetura de componentes e atenção ao desempenho de carregamento.',
        'Implementou e publicou portais institucionais corporativos em Webflow para clientes do setor de energia, reduzindo o tempo de entrega e mantendo a integração com sistemas existentes.',
        'Estruturou e executou planos de teste funcionais, de regressão e de aceitação para fluxos críticos de software, com foco em releases de produção sem defeitos (padrão zero-defeito).',
        'Administrou o ciclo completo de tratamento de bugs e criou matrizes de cobertura e rastreabilidade ligando requisitos funcionais aos casos de teste executados.',
        'Diagnosticou e resolveu incidentes em produção (Suporte N2/N3) por meio de análise de logs e depuração de código, reduzindo o tempo de indisponibilidade dos serviços (MTTR).',
      ],
    },
    {
      titulo: 'DESENVOLVEDOR FULL STACK // INDEPENDENTE (WORKANA & CONSULTORIA)',
      periodo: 'REMOTO',
      cor: 'magenta',
      atividades: [
        'Desenvolveu aplicações web full stack e MVPs de plataformas SaaS sob demanda, da modelagem do banco de dados relacional (PostgreSQL) às interfaces reativas em React e Next.js.',
        'Construiu aplicativos móveis multiplataforma (iOS e Android) com React Native, incluindo componentes nativos, consumo de APIs REST e persistência local de dados.',
        'Projetou landing pages com SEO técnico, microinterações e otimização de assets com Tailwind CSS, com foco no índice de desempenho no Google Lighthouse.',
        'Integrou sistemas de terceiros e gateways de pagamento por APIs REST, com validação de dados para evitar inconsistências transacionais.',
      ],
    },
    {
      titulo: 'ARQUITETO & FULL STACK // PROJETO KANGHOO (CAPSTONE)',
      periodo: 'FEV 2025 - DEZ 2025',
      cor: 'green',
      atividades: [
        'Projetou o back-end com Clean Architecture (Domain, Application, Infrastructure e Interface) e injeção de dependências com Awilix, isolando regras de negócio em mais de 23 rotas e controladores.',
        'Modelou o esquema relacional em PostgreSQL para rotas escolares, confirmação de embarque/desembarque e perfis hierárquicos (motoristas, responsáveis e administradores).',
        'Implementou telemetria GPS em tempo real com WebSockets (Socket.IO) e cache em Redis, além de autenticação JWT, Bcrypt e rate limiting.',
        'Conteinerizou os serviços com Docker e Docker Compose, configurou Nginx com SSL/TLS e integrou Prometheus e Grafana para observabilidade em tempo real.',
      ],
    },
  ],
}

/* ── Formação Acadêmica ── */
export const formacao = [
  {
    titulo: 'TECNÓLOGO EM ANÁLISE E DESENV. DE SISTEMAS (ADS)',
    instituicao: 'Universidade Pitágoras Unopar Anhanguera',
    periodo: 'Ago 2026 - Dez 2028 (Previsto)',
    cargaHoraria: '2.200H',
    cor: 'blue',
    arquivo: 'ADS_SUPERIOR.LOG',
    descricao: 'Engenharia de Software, Modelagem de Dados, Computação em Nuvem e Automação de Testes. Disciplina de Python concluída com nota 100/100, Pandas, Matplotlib, Seaborn e TensorFlow.',
    tags: ['PYTHON 100/100', 'ENG. SOFTWARE', 'SQL', 'CLOUD', 'QA'],
    destaque: true,
  },
  {
    titulo: 'PROGRAMADOR WEB (QUALIFICAÇÃO PROFISSIONAL)',
    instituicao: 'SENAC',
    periodo: 'Jul 2025 - Dez 2025',
    cargaHoraria: '240H',
    cor: 'magenta',
    arquivo: 'PROG_WEB.LOG',
    descricao: 'Desenvolvimento web full stack (front-end, back-end e deploy em produção), elaboração de projetos e publicação de aplicações web, concluído com o Projeto Integrador.',
    tags: ['FULL STACK', 'FRONT-END', 'BACK-END', 'DEPLOY'],
  },
  {
    titulo: 'PROGRAMADOR DE SISTEMAS (QUALIFICAÇÃO PROFISSIONAL)',
    instituicao: 'SENAC',
    periodo: 'Fev 2025 - Jul 2025',
    cargaHoraria: '200H',
    cor: 'blue',
    arquivo: 'SYS_PROG.LOG',
    descricao: 'Metodologias de análise de sistemas, implementação de banco de dados, técnicas formais de teste e manutenção de software e desenvolvimento do projeto Kanghoo.',
    tags: ['ANÁLISE', 'BANCO DE DADOS', 'TESTES', 'KANGHOO'],
  },
  {
    titulo: 'ASSISTENTE ADMINISTRATIVO (QUALIFICAÇÃO PROFISSIONAL)',
    instituicao: 'SENAC',
    periodo: 'Ago 2020 - Dez 2020',
    cargaHoraria: '160H',
    cor: 'green',
    arquivo: 'ADMIN_ASSIST.LOG',
    descricao: 'Organização de processos corporativos, elaboração e controle de documentos da organização e alinhamento entre soluções de software e necessidades de negócio.',
    tags: ['PROCESSOS', 'DOCUMENTAÇÃO', 'NEGÓCIOS'],
  },
]

/* ── Competências Comportamentais ── */
export const competencias = [
  {
    titulo: 'ARQUITETURA & CÓDIGO LIMPO',
    descricao: 'Isolamento de regras de negócio com Clean Architecture, injeção de dependências e componentes modulares de fácil manutenção.',
    icone: 'architecture',
    cor: 'blue',
    grande: true,
  },
  {
    titulo: 'PADRÃO ZERO-DEFEITO (QA)',
    descricao: 'Planos de teste funcionais, de regressão e aceitação combinados com matrizes de cobertura e rastreabilidade.',
    icone: 'verified',
    cor: 'magenta',
    grande: true,
  },
  {
    titulo: 'VISÃO PONTA A PONTA',
    descricao: 'Vivência integrada entre desenvolvimento full stack, validação de qualidade e diagnóstico de incidentes N2/N3 em produção.',
    icone: 'swap_horiz',
  },
  {
    titulo: 'DOCUMENTAÇÃO & RASTREABILIDADE',
    descricao: 'Escrita técnica clara para decisões arquiteturais, catálogos de APIs, manuais operacionais e alinhamento de equipes.',
    icone: 'edit_note',
  },
  {
    titulo: 'OBSERVABILIDADE & OPERAÇÃO',
    descricao: 'Foco em estabilidade de produção, redução de MTTR, conteinerização com Docker e métricas em tempo real.',
    icone: 'hub',
  },
  {
    titulo: 'COLABORAÇÃO REMOTA',
    descricao: 'Comunicação assíncrona estruturada em português e inglês (B2+) para equipes distribuídas no Brasil e no exterior.',
    icone: 'auto_awesome',
  },
]

/* ── Idiomas ── */
export const idiomas = [
  {
    idioma: 'PORTUGUÊS',
    nivel: 'Nativo',
    descricao: 'Comunicação oral e escrita em nível nativo, incluindo documentação de engenharia e alinhamento com stakeholders.',
    cor: 'green',
  },
  {
    idioma: 'INGLÊS',
    nivel: 'Intermediário Alto (B2+ · 93% Workana)',
    descricao: 'Leitura técnica, redação de documentação e conversação profissional. Teste de Inglês Workana (2026): 93%.',
    cor: 'blue',
  },
  {
    idioma: 'ESPANHOL',
    nivel: 'Básico',
    descricao: 'Compreensão de leitura e comunicação básica para colaboração com equipes na América Latina.',
    cor: 'magenta',
  },
]
