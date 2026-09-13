/* ==========================================================================
   AVALON — Portuguese content (português europeu)
   --------------------------------------------------------------------------
   A key-for-key mirror of js/content.en.js. English is the default language;
   this file is what the PT toggle switches to. Any key missing here falls
   back silently to the English value, so the site never breaks — but it also
   means a missing key is invisible. Run `npm run check` after editing: it
   compares the two files key by key and fails on any difference.

   TO EDIT COPY: change the strings below. Do not rename or remove keys, and
   do not touch the HTML.

   Clinical terminology used consistently throughout:
     DBT   — Terapia Comportamental Dialética
     BPD   — Perturbação da Personalidade Borderline
     PSPT  — Perturbação de Stress Pós-Traumático
     EMDR  — kept in English, as it is in Portuguese clinical practice

   Value types understood by i18n.js:
     "a string"        -> written as text
     ["a", "b"]        -> written as a sequence of <p> or <li> elements
   The token <ph>...</ph> inside a string renders as the small dashed
   "placeholder" tag on the page. Items still marked [PLACEHOLDER: ...] are
   open in English too — see PLACEHOLDERS.md.
   ========================================================================== */

window.avalonContent = window.avalonContent || {};

window.avalonContent.pt = {

  /* ======================================================================
     GLOBAL — marca, navegação, rodapé, formulários
     ====================================================================== */

  brand: {
    /* O logótipo é artwork (images/brand/avalonLogo.svg). Esta string é o nome
       acessível da ligação que o envolve. */
    wordmark: "Avalon",
    footerBlurb: "Uma clínica residencial de Terapia Comportamental Dialética, a ganhar forma numa casa de 1887 nas colinas de Sintra."
  },

  nav: {
    home: "Início",
    programs: "Os Nossos Programas",
    house: "A Casa",
    admissions: "Admissões",
    treatments: "Tratamentos",
    solutions: "Soluções",
    family: "Família",
    familyLong: "Família e Pessoas Próximas",
    about: "Sobre Nós",
    waitlist: "Entrar na lista de espera",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    languageLabel: "Idioma",
    switchToEnglish: "Mudar para inglês",
    switchToPortuguese: "Mudar para português",
    skipToContent: "Saltar para o conteúdo principal"
  },

  navSub: {
    residence: "Residência",
    dayHospital: "Hospital de Dia",
    outpatient: "Ambulatório",
    activities: "Atividades",
    therapies: "Terapias",
    rooms: "Quartos",
    commonAreas: "Áreas Comuns",
    outdoorSpaces: "Espaços Exteriores",
    whySintra: "Porquê Sintra",
    admissionProcess: "Processo de Admissão",
    trackProgress: "Como Acompanhamos a Evolução",
    waitlistForm: "Entrar na Lista de Espera",
    bpd: "Borderline",
    bpdLong: "Perturbação da Personalidade Borderline",
    depression: "Depressão",
    anxiety: "Ansiedade",
    ptsd: "PSPT",
    cptsd: "PSPT-C",
    dbt: "DBT",
    emdr: "EMDR",
    mindfulness: "Mindfulness",
    familyResources: "Recursos para Família e Amigos",
    beliefs: "Aquilo em que Acreditamos",
    joinTeam: "Junte-se à Nossa Equipa"
  },

  /* ---- O apelo à ação, discreto e sempre presente ------------------------ */
  cta: {
    eyebrow: "As admissões estão abertas",
    title: "Entre na lista de espera.",
    body: "A Avalon ainda não abriu. A lista de espera é a forma de mantermos contacto com quem quer um lugar quando abrir, e é a maneira mais simples de iniciar uma conversa connosco. <strong>Não o compromete a absolutamente nada.</strong>",
    button: "Entrar na lista de espera",
    secondary: "Saiba como funciona a admissão",
    aside: "Se preferir apenas falar primeiro com alguém, diga-o no campo da mensagem. É uma forma perfeitamente normal de começar."
  },

  /* ---- Rodapé ----------------------------------------------------------- */
  footer: {
    navigateTitle: "Explorar",
    programsTitle: "Os Nossos Programas",
    careTitle: "Cuidados",
    contactTitle: "Contacto",
    email: "alfredov@avalonsintra.com",
    phone: "+351 912 102 647",
    address: "Sintra, Portugal",
    copyright: "Avalon. Todos os direitos reservados.",
  },

  /* ---- Formulários ------------------------------------------------------ */
  forms: {
    labelName: "Nome completo",
    labelEmail: "Email",
    labelPhone: "Telefone",
    labelRelationship: "Contacto-vos na qualidade de",
    labelMessage: "Algo que queira que saibamos",
    labelSpecialty: "Área de especialidade",
    labelNote: "Uma nota breve, ou uma ligação para o seu CV",
    optional: "opcional",
    relationshipDefault: "Escolha uma opção",
    relationshipSelf: "Próprio",
    relationshipFamily: "Familiar ou pessoa próxima",
    relationshipClinician: "Clínico que encaminha",
    /* PLACEHOLDER: lista de especialidades a confirmar com a equipa clínica. */
    specialtyDefault: "Escolha uma opção",
    specialtyPsychiatry: "Psiquiatria",
    specialtyPsychology: "Psicologia clínica",
    specialtyNursing: "Enfermagem de saúde mental",
    specialtyPsychotherapy: "Psicoterapia",
    specialtyOther: "Outra área",
    submitWaitlist: "Entrar na lista de espera",
    submitTeam: "Enviar a minha candidatura",
    consent: "Usaremos os seus dados apenas para lhe responder sobre a Avalon. <strong>Não os partilharemos com mais ninguém.</strong>",
    errorRequired: "Preencha este campo para que possamos responder.",
    errorEmail: "Verifique este endereço de email.",
    errorSelect: "Escolha uma opção.",
    waitlistConfirmTitle: "Obrigado. Ficámos com os seus dados.",
    waitlistConfirmBody: [
      "Alguém da Avalon irá escrever-lhe pessoalmente. Não é uma sequência automática nem uma chamada comercial. É uma resposta real de uma pessoa real, para que possa perguntar aquilo que realmente quer perguntar.",
      "Dar o primeiro passo costuma ser a parte mais difícil, e já o deu. Não há mais nada que tenha de fazer hoje."
    ],
    teamConfirmTitle: "Obrigado pelo seu contacto.",
    teamConfirmBody: [
      "Entraremos em contacto para lhe dizer em que ponto está a equipa clínica e o percurso de formação.",
      "A Avalon está a ser construída devagar e de forma deliberada, pelo que os prazos são honestos em vez de urgentes. Preferimos dizer-lhe exatamente onde estamos a apressá-lo."
    ]
  },

  /* ======================================================================
     INÍCIO
     ====================================================================== */

  home: {
    pageTitle: "Avalon | DBT residencial para a Perturbação da Personalidade Borderline, Sintra",
    metaDescription: "A Avalon é uma clínica residencial em Sintra, Portugal, especializada em Terapia Comportamental Dialética para a Perturbação da Personalidade Borderline, com cuidados para depressão, ansiedade e PSPT.",

    heroEyebrow: "Sintra, Portugal",
    heroTitle: "Um refúgio seguro nas montanhas de Portugal.",
    heroLede: "A Avalon é uma clínica especializada em <strong>terapia DBT para a Perturbação da Personalidade Borderline</strong>, com cuidados dedicados à depressão, à ansiedade e à PSPT.",
    heroScrollHint: "Deslize",

    introTitle: "Três programas diferentes: Residência, Hospital de Dia e Ambulatório.",
    introParagraphs: [
      "Os nossos doentes são adultos que vêm <strong>voluntariamente</strong> e que estão <strong>clinicamente estáveis</strong> no momento em que chegam.",
      "<strong>A lista de espera está aberta.</strong>"
    ],
    introLink: "Conheça os nossos programas",

    trustOneLabel: "Alinhados com a DBT Linehan Board",
    trustOneText: "Formação e supervisão clínicas construídas segundo padrões alinhados com a DBT Linehan Board of Certification.",
    trustTwoLabel: "Baseado na evidência, e medido",
    trustTwoText: "Um protocolo validado, aplicado como deve ser, com a evolução acompanhada através dos mesmos instrumentos usados na investigação em DBT.",
    trustThreeLabel: "Sintra, Portugal",
    trustThreeText: "Uma casa de 1887 e um jardim histórico de cerca de 5 557 metros quadrados, nas colinas da Serra de Sintra.",

    exploreEyebrow: "Explorar a Avalon",
    exploreTitle: "Por onde começar.",
    exploreLead: "Seis entradas para o mesmo lugar. Escolha a que corresponde à pergunta com que realmente veio até aqui.",

    cardProgramsTitle: "Os Nossos Programas",
    cardProgramsText: "Cuidados residenciais, em hospital de dia e em ambulatório, prestados por uma só equipa, na intensidade de que a pessoa precisa neste momento.",
    cardTreatmentsTitle: "Tratamentos",
    cardTreatmentsText: "Borderline, depressão, ansiedade e PSPT: o que são, e porque é que o tratamento especializado muda o desfecho.",
    cardSolutionsTitle: "Soluções",
    cardSolutionsText: "DBT, EMDR e mindfulness: os métodos de que o programa é realmente feito.",
    cardHouseTitle: "A Casa",
    cardHouseText: "Um solar de 1887, os seus quartos e espaços comuns, e um jardim de cerca de 5 557 metros quadrados.",
    cardFamilyTitle: "Família e Pessoas Próximas",
    cardFamilyText: "A recuperação raramente acontece em isolamento. Apoio para quem caminha ao lado.",
    cardAdmissionsTitle: "Admissões",
    cardAdmissionsText: "Para quem é a Avalon, como funciona a admissão, e o formulário breve que a inicia.",
    cardLinkLabel: "Ler mais",

    sintraBandEyebrow: "Porquê Sintra",
    sintraBandTitle: "O lugar foi uma decisão clínica antes de ser uma decisão estética.",
    sintraBandBody: "Os ambientes urbanos densos mantêm a amígdala ativada, a mesma estrutura que está por baixo da desregulação emocional na Perturbação da Personalidade Borderline. <strong>A proximidade a espaços verdes está associada ao contrário.</strong> É esse o argumento a favor de Sintra.",
    sintraBandLink: "Leia o raciocínio",

    aboutEyebrow: "Sobre nós",
    aboutTitle: "Construído por quem não conseguiu encontrar este lugar, e decidiu fazê-lo.",
    aboutBody: "A Avalon nasceu como resposta a uma lacuna fácil de enunciar e difícil de viver: um país de dez milhões de pessoas com <strong>cerca de quatro ou cinco camas residenciais especializadas</strong> para uma das condições psiquiátricas graves mais tratáveis que existem.",
    aboutLink: "Sobre a Avalon"
  },

  /* ======================================================================
     OS NOSSOS PROGRAMAS
     ====================================================================== */

  programs: {
    pageTitle: "Os Nossos Programas | Avalon",
    metaDescription: "Residência, Hospital de Dia, Ambulatório, atividades e terapias na Avalon, uma clínica residencial de DBT em Sintra, Portugal.",

    heroEyebrow: "Os Nossos Programas",
    heroTitle: "Cuidados que baixam de intensidade, nunca de qualidade.",
    heroLede: "Um programa clínico, aplicado em três níveis de intensidade, para que o tratamento possa acompanhar a pessoa à medida que estabiliza, <em>sem a obrigar a recomeçar com uma equipa nova.</em>",

    residenceTitle: "Residência",
    residenceLead: "Um programa de tratamento intensivo, vivido por dentro.",
    residenceParagraphs: [
      "Na Avalon, oferecemos um programa de tratamento intensivo em que a pessoa vive temporariamente num contexto terapêutico enquanto recebe cuidados multidisciplinares.",
      "O nosso programa inclui objetivos definidos, fases de tratamento, avaliação contínua e um plano de regresso à vida quotidiana. Os nossos objetivos comuns são estabilizar sintomas, garantir segurança, melhorar as estratégias de coping, responder ao consumo de substâncias ou a necessidades médicas, reforçar rotinas diárias e envolver a rede de apoio da pessoa."
    ],
    residenceStepsIntro: "O nosso programa inclui habitualmente:",

    residenceStepOneTitle: "Avaliação",
    residenceStepOneText: "Analisamos as necessidades psiquiátricas, médicas, sociais e de segurança de cada pessoa.",
    residenceStepTwoTitle: "Estabilização",
    residenceStepTwoText: "Desenvolvemos planos de segurança, estabelecemos rotinas diárias, gerimos a medicação quando adequado e apoiamos o envolvimento terapêutico.",
    residenceStepThreeTitle: "Tratamento ativo",
    residenceStepThreeText: "Asseguramos terapia individual e de grupo, trabalho com a família, psicoeducação e treino de competências de vida.",
    residenceStepFourTitle: "Preparação da alta",
    residenceStepFourText: "Revemos a evolução, desenvolvemos estratégias de prevenção de recaída e articulamos necessidades de habitação, trabalho, educação e cuidados na comunidade.",
    residenceStepFiveTitle: "Transição e seguimento",
    residenceStepFiveText: "Ligamos cada pessoa a serviços de ambulatório e a apoio continuado.",

    residenceClosingParagraphs: [
      "Ajustamos regularmente cada plano de tratamento de acordo com os sintomas, os riscos, as preferências e a evolução da pessoa.",
      "Na Avalon, baseamos a admissão, a continuidade do internamento, a transferência e a alta na necessidade clínica e na segurança, respeitando a dignidade, a autonomia e a participação ativa de cada pessoa nos seus cuidados."
    ],
    dayHospitalTitle: "Hospital de Dia",
    dayHospitalLead: "Intensidade clínica completa, noites em casa.",
    dayHospitalParagraphs: [
      "O Programa de Dia é um programa de tratamento em saúde mental intensivo e estruturado, no qual as pessoas recebem apoio terapêutico e clínico abrangente durante o dia, continuando a viver em casa ou na sua própria comunidade.",
      "O programa proporciona um ambiente terapêutico estruturado sem exigir internamento residencial. Permite que as pessoas participem num tratamento intensivo mantendo as suas rotinas familiares, escolares, profissionais e sociais sempre que isso seja clinicamente adequado.",
      "O programa inclui habitualmente avaliação individualizada, psicoterapia individual e de grupo, seguimento psiquiátrico quando indicado, treino de competências, psicoeducação, trabalho de regulação emocional, envolvimento da família e monitorização clínica contínua.",
      "O objetivo é oferecer apoio intensivo, reforçar as competências de coping e de regulação emocional, melhorar o funcionamento diário e ajudar as pessoas a regressar progressivamente a maior independência e estabilidade no seu dia a dia."
    ],
    outpatientTitle: "Ambulatório",
    outpatientLead: "O mesmo protocolo, ao ritmo de uma vida normal.",
    outpatientParagraphs: [
      "O nosso Programa de Ambulatório oferece cuidados de saúde mental personalizados a pessoas que não necessitam de tratamento residencial ou em hospital de dia. Os utentes comparecem a sessões de terapia agendadas, continuando a viver de forma independente e a manter as suas rotinas diárias.",
      "O tratamento pode incluir psicoterapia individual, terapia de grupo e abordagens especializadas como a DBT e o EMDR, de acordo com as necessidades e os objetivos terapêuticos de cada pessoa."
    ],

    activitiesTitle: "Atividades",
    activitiesLead: "O tratamento não é a única coisa que acontece aqui.",
    activitiesParagraphs: [
      "A par do tratamento clínico, a Avalon oferece um programa de atividades terapêuticas e comunitárias pensado para apoiar a recuperação na vida quotidiana."
    ],
    therapiesTitle: "Terapias",
    therapiesLead: "O que acontece, de facto, semana a semana.",
    therapiesIntro: "A DBT completa não é uma única terapia, mas um conjunto de componentes que <strong>só funcionam devidamente em conjunto</strong>. A Avalon assegura-os a todos.",

    therapyIndividualTitle: "Terapia DBT individual",
    therapyIndividualText: "Cada doente trabalha com um terapeuta DBT individual. É este o fio que atravessa tudo o resto: uma sessão semanal estruturada onde as competências deixam de ser abstratas e passam a aplicar-se ao que está realmente a acontecer na vida da pessoa nesta semana.",

    therapySkillsTitle: "Grupos de competências DBT",
    therapySkillsText: "As competências são ensinadas em grupo, em quatro módulos. Muitas pessoas esperam que o grupo seja a parte difícil e acabam por descobrir que é a parte de que mais sentem falta depois.",

    moduleMindfulnessTitle: "Mindfulness",
    moduleMindfulnessText: "Reparar no que está a acontecer, dentro e à sua volta, sem ter de agir imediatamente sobre isso.",
    moduleDistressTitle: "Tolerância ao Mal-Estar",
    moduleDistressText: "Atravessar os piores momentos sem os agravar: competências de sobrevivência à crise, e a prática mais difícil de aceitar aquilo que não pode ser mudado agora.",
    moduleEmotionTitle: "Regulação Emocional",
    moduleEmotionText: "Compreender o que as emoções estão a fazer, reduzir a vulnerabilidade a elas e mudar aquelas que não correspondem aos factos.",
    moduleInterpersonalTitle: "Eficácia Interpessoal",
    moduleInterpersonalText: "Pedir aquilo de que precisa, dizer não, e manter intactos tanto a relação como o respeito por si próprio enquanto o faz.",

    therapyPsychiatryTitle: "Consulta de psiquiatria",
    therapyPsychiatryText: "A avaliação psiquiátrica regular acompanha a terapia, não se sobrepõe a ela. A medicação é ponderada onde ajuda e questionada onde não ajuda.",

    therapyConsultTitle: "A equipa de consultadoria clínica",
    therapyConsultText: "Uma vez por semana, os clínicos que o acompanham reúnem-se em equipa, não por razões administrativas, mas para se ajudarem mutuamente a aplicar a terapia como deve ser. Em DBT isto <em>não</em> é opcional: a equipa de consultadoria é uma parte formal do modelo de tratamento, assente no princípio de que os terapeutas que fazem este trabalho também precisam de apoio. Mencionamo-lo porque é um dos sinais mais claros de se um programa está genuinamente a fazer DBT, ou apenas a usar o nome."
  },

  /* ======================================================================
     A CASA
     ====================================================================== */

  house: {
    pageTitle: "A Casa | Avalon, Sintra",
    metaDescription: "Uma casa de 1887 em Sintra com um jardim histórico de cerca de 5 557 metros quadrados: quartos, áreas comuns, espaços exteriores, e porque foi Sintra a escolha.",

    heroEyebrow: "A Casa",
    roomsTitle: "Quartos",
    roomsParagraphs: [
      "Espaços pensados com cuidado para o descanso e a recuperação. Oferecemos <strong>suites independentes com casa de banho privativa, varanda e vista para o castelo</strong>. Todos os espaços são desenhados com o envolvimento da equipa clínica."
    ],
    commonAreasTitle: "Áreas Comuns",
    commonAreasParagraphs: [
      "Salas partilhadas para comer em conjunto, conviver, brincar e descansar."
    ],
    outdoorTitle: "Espaços Exteriores",
    outdoorParagraphs: [
      "A propriedade inclui um jardim histórico de <strong>aproximadamente 5 557 metros quadrados</strong> e uma piscina com vista para o castelo. O jardim servirá de espaço para workshops ao ar livre e para momentos de relaxamento."
    ],

    sintraTitle: "Porquê Sintra",
    sintraParagraphs: [
      "Sintra é considerada <strong>um dos lugares mais mágicos de Portugal</strong>, com acesso a jardins e castelos e perto tanto da costa como de Lisboa. É o local perfeito para recuperar e para se concentrar num novo capítulo."
    ],
  },

  /* ======================================================================
     ADMISSÕES
     ====================================================================== */

  admissions: {
    pageTitle: "Admissões | Avalon",
    metaDescription: "Para quem é a Avalon, como funciona o processo de admissão, como se mede a evolução, e como entrar na lista de espera.",

    heroEyebrow: "Admissões",
    heroTitle: "Como alguém chega à Avalon.",
    heroLede: "A admissão é uma conversa antes de ser uma decisão. <strong>Nada no primeiro passo é vinculativo</strong>, e ninguém é avaliado com base num formulário.",

    criteriaTitle: "Para quem é a Avalon",
    criteriaLead: "Ser claro sobre isto desde cedo poupa às pessoas uma conversa difícil mais tarde.",
    criteriaIntro: "A Avalon admite adultos que:",
    criteriaList: [
      "tenham 18 anos ou mais;",
      "venham voluntariamente, e queiram estar aqui;",
      "estejam clinicamente estabilizados e não em crise aguda no momento da admissão;",
      "não tenham uma perturbação por uso de substâncias como diagnóstico principal."
    ],
    criteriaNote: "Se a Avalon não for o contexto certo, dizemo-lo, e procuraremos indicar algo que o seja. Não ser admitido aqui <em>não</em> é um juízo sobre o valor ou a seriedade de ninguém. É um juízo sobre adequação, e errar nisso não ajuda ninguém.",

    processTitle: "Processo de Admissão",
    processLead: "Seis etapas, do primeiro telefonema ao dia da chegada.",

    stepOneTitle: "Contacto inicial",
    stepOneList: [
      "Primeiro contacto com a Avalon.",
      "Participação voluntária. Admitimos apenas pessoas dispostas a envolver-se no processo e a fazer mudanças. Não aceitamos ninguém que tenha sido coagido a vir, ou que esteja ambivalente quanto a estar aqui.",
      "Compromisso comportamental: uma atitude e uma disponibilidade para mudar.",
      "Critérios de admissão: sem consumo de substâncias, não estar em situação crítica ou de emergência, não necessitar de internamento hospitalar, e não estar a ser pressionado por outra pessoa.",
      "Uma avaliação preliminar, que conduz à etapa de avaliação descrita abaixo.",
      "O Coordenador de Admissões realiza uma avaliação telefónica do histórico clínico e das necessidades da pessoa, para determinar se a Avalon tem um programa adequado para ela."
    ],

    stepTwoTitle: "Avaliação",
    stepTwoText: "É exigida avaliação psicométrica padronizada. Quando a pessoa ainda não a tem, a Avalon realiza uma avaliação psiquiátrica e neuropsiquiátrica abrangente, em formato intensivo, de modo a chegar a um diagnóstico rigoroso.",

    stepThreeTitle: "Programa de tratamento",
    stepThreeText: "A avaliação determina qual o programa adequado:",
    stepThreeList: [
      "DBT como programa residencial de transição: um modelo residencial intermédio para pessoas que precisam de estrutura e apoio antes de regressar à vida quotidiana.",
      "DBT como programa de transição em hospital de dia."
    ],

    stepFourTitle: "Requisitos financeiros e de admissão",
    stepFourText: "São confirmados os requisitos financeiros, de admissão e de pagamento.",

    stepFiveTitle: "Cobertura de seguro de saúde",
    stepFiveText: "É exigido seguro de saúde, conforme obrigam os regulamentos. Não se destina a servir de meio de pagamento do programa através do seguro.",

    stepSixTitle: "Sessão de admissão e preparação do internamento",
    stepSixText: "Uma sessão final trata dos aspetos práticos da chegada:",
    stepSixList: [
      "Requisitos de vestuário, incluindo restrições específicas como sapatilhas sem atacadores ou calças sem cordões.",
      "Alergias alimentares.",
      "Preferências alimentares e disponibilidade.",
      "Práticas alimentares: kosher, vegetariana, ou outras restrições.",
      "Objetos não permitidos."
    ],

    progressTitle: "Como Acompanhamos a Evolução?",
    progressLead: "Recuperar é mais do que reduzir sintomas.",
    progressParagraphs: [
      "Na Avalon, a evolução é entendida como mudança significativa na forma como uma pessoa se sente, funciona, se relaciona com os outros e gere a vida quotidiana.",
      "Combinamos observação clínica, medidas psicológicas validadas, objetivos terapêuticos individualizados e o funcionamento na vida real para compreender a evolução de cada pessoa ao longo do tempo."
    ],
    progressDomainsIntro: "Olhamos para mudanças em:",

    progressEmotionTitle: "Regulação emocional",
    progressEmotionText: "A capacidade de compreender, tolerar e gerir emoções difíceis, e de recuperar mais eficazmente do sofrimento emocional.",
    progressSymptomsTitle: "Sintomas",
    progressSymptomsText: "Mudanças na depressão, na ansiedade, nos sintomas relacionados com trauma, na instabilidade emocional e noutras dificuldades relevantes para as necessidades clínicas de cada pessoa.",
    progressFunctioningTitle: "Funcionamento diário",
    progressFunctioningText: "Sono, rotinas, autocuidado, responsabilidades, e a capacidade de participar de forma mais consistente na vida quotidiana.",
    progressRelationshipsTitle: "Relações e ligação",
    progressRelationshipsText: "Comunicação, limites, gestão de conflitos, confiança, e a capacidade de desenvolver ligações mais saudáveis com os outros.",
    progressAutonomyTitle: "Autonomia",
    progressAutonomyText: "Confiança e capacidade crescentes para tomar decisões, gerir responsabilidades e funcionar com maior independência.",
    progressQualityTitle: "Qualidade de vida",
    progressQualityText: "No fim, evoluir significa mais do que sofrer menos. Significa ser cada vez mais capaz de construir e participar numa vida que se sente estável, com sentido, e que vale a pena viver.",

    progressClosing: "A evolução é revista ao longo de todo o programa através de medidas clínicas baseadas na evidência e de avaliação multidisciplinar regular, permitindo que cada plano de tratamento evolua à medida que as necessidades e os objetivos da pessoa mudam.",
    waitlistTitle: "Entrar na Nossa Lista de Espera",
  },

  /* ======================================================================
     TRATAMENTOS
     ====================================================================== */

  treatments: {
    pageTitle: "Tratamentos | Avalon",
    metaDescription: "Explicações acessíveis sobre a Perturbação da Personalidade Borderline, a depressão, a ansiedade e a PSPT, e porque importa o tratamento especializado.",

    heroEyebrow: "Tratamentos",
    heroTitle: "O que tratamos, explicado com clareza.",
    heroLede: "Escrito para quem está a tentar perceber o que lhe está a acontecer, ou o que acontece a alguém que ama, e <em>não</em> para um público clínico.",

    introParagraphs: [
      "Um diagnóstico é uma abreviatura útil, não a descrição de uma pessoa. O que se segue pretende ser reconhecível e não exaustivo: o suficiente para saber se está no sítio certo, e o que envolveria de facto um tratamento especializado.",
      "Nada disto substitui uma avaliação feita por um clínico que conheça a sua situação."
    ],

    /* ---- Borderline ---- */
    bpdTitle: "Perturbação da Personalidade Borderline",
    bpdLead: "A condição em torno da qual a Avalon foi construída.",
    bpdWhatTitle: "O que é",
    bpdWhatParagraphs: [
      "A Perturbação da Personalidade Borderline pode tornar as emoções excecionalmente intensas e difíceis de regular. Pode afetar as relações, a imagem de si, o controlo dos impulsos e a capacidade de se sentir emocionalmente seguro. As pessoas podem sentir grande sensibilidade à rejeição ou ao abandono, mudanças rápidas de humor, ou períodos de sofrimento avassalador.",
      "Com o apoio terapêutico certo, a regulação emocional e a estabilidade interpessoal podem melhorar significativamente. Abordagens baseadas na evidência como a DBT oferecem ferramentas práticas para construir uma vida mais equilibrada e gratificante."
    ],
    bpdSignsTitle: "Sinais comuns",
    bpdSignsList: [
      "Emoções que chegam de repente, com intensidade máxima, e demoram horas ou dias a assentar",
      "Relações intensas e instáveis, que oscilam entre a proximidade e a rutura",
      "Medo real do abandono, e esforços desesperados para o evitar",
      "Um sentido de identidade instável ou em constante mudança",
      "Comportamentos impulsivos que fazem sentido no momento e deixam de fazer depois",
      "Automutilação, ou pensamentos recorrentes sobre ela",
      "Vazio crónico",
      "Raiva que parece desproporcionada até para si próprio",
      "Sentir-se desligado de si mesmo ou da realidade sob stress"
    ],
    bpdMisdiagnosisTitle: "Porque passa tantas vezes despercebida",
    bpdMisdiagnosisParagraphs: [
      "A Perturbação da Personalidade Borderline é frequentemente mal diagnosticada, na maioria das vezes como perturbação bipolar, depressão, ou ansiedade resistente ao tratamento. As razões são compreensíveis: as oscilações de humor parecem semelhantes vistas de fora, a depressão está genuinamente presente grande parte do tempo, e a pessoa que chega ao clínico está ali habitualmente por causa de uma crise e não de um padrão.",
      "O custo de errar são anos. Anos de tratamento dirigido ao alvo errado, e a conclusão razoável, do lado do doente, de que nada funciona e de que o problema é ele.",
      "Vale a pena dizê-lo com clareza: a Perturbação da Personalidade Borderline é <strong>uma das condições psiquiátricas graves mais tratáveis</strong>, e a evidência disso é forte. Muitas pessoas cumprem critérios num momento da vida e não noutro. O prognóstico é genuinamente bom quando o tratamento é o certo."
    ],
    bpdWhySpecialistTitle: "Porque importa o tratamento especializado",
    bpdWhySpecialistParagraphs: [
      "Os cuidados gerais de saúde mental não foram desenhados para isto. A terapia de apoio sem estrutura tende a não ajudar e pode tornar as coisas mais difíceis; a medicação isolada não tem uma base de evidência sólida para a própria Perturbação da Personalidade Borderline.",
      "O que tem evidência é a terapia estruturada e guiada por protocolo, sobretudo a DBT, que foi desenvolvida especificamente para esta população e foi testada mais aprofundadamente do que qualquer alternativa.",
      "É esse todo o argumento a favor de um contexto especializado. <em>Não um edifício mais bonito:</em> uma equipa formada num modelo, a aplicá-lo por inteiro, com a estrutura de supervisão que o mantém honesto."
    ],
    /* PLACEHOLDER: os dados de mortalidade e suicídio aparecem uma única vez,
       com cuidado, num enquadramento de apoio, e nunca são repetidos nem usados
       como frase de abertura — conforme o briefing. Redação a rever pela equipa
       clínica. */
    bpdCalloutParagraphs: [
      "A Perturbação da Personalidade Borderline comporta um risco real de suicídio, e não vamos fingir o contrário numa página escrita para quem vive com ela. Dizemo-lo uma vez, aqui, e apenas por esta razão: <strong>esse risco desce substancialmente com tratamento adequado</strong>. Se está neste momento num lugar escuro, é exatamente para essa circunstância que este tipo de cuidados existe. Por favor, fale hoje com alguém: um médico, uma linha de apoio, ou connosco."
    ],

    /* ---- Depressão ---- */
    depressionTitle: "Depressão",
    depressionLead: "Mais do que tristeza, e tratável.",
    depressionWhatParagraphs: [
      "A depressão pode afetar gradualmente a forma como uma pessoa se sente, pensa, se relaciona com os outros e vive o dia a dia. Pode envolver tristeza persistente, anestesia emocional, perda de interesse ou de prazer, exaustão, dificuldade de concentração, alterações do sono, ou uma sensação de desesperança.",
      "A depressão <em>não</em> é simplesmente falta de motivação ou uma tristeza passageira. É uma condição complexa que pode ter dimensões biológicas, psicológicas e ambientais. Com tratamento e apoio adequados, a recuperação e o reencontro com a vida são possíveis."
    ],
    depressionSignsTitle: "Sinais comuns",
    depressionSignsList: [
      "Humor baixo ou apagado a maior parte do dia, quase todos os dias, durante duas semanas ou mais",
      "Perda de interesse ou de prazer em coisas que antes importavam",
      "Exaustão desproporcionada em relação à atividade",
      "Dormir muito mais ou muito menos do que o habitual",
      "Alterações do apetite e do peso",
      "Dificuldade em concentrar-se ou em tomar decisões banais",
      "Culpa ou sentimento de inutilidade que não cede a garantias",
      "Pensamentos sobre a morte ou sobre não querer estar aqui"
    ],
    depressionWhyParagraphs: [
      "A depressão é muito comum a par da Perturbação da Personalidade Borderline, e as duas são frequentemente confundidas. Isso importa, porque precisam de coisas diferentes. A depressão que é, na realidade, parte de uma perturbação da regulação emocional responde mal aos antidepressivos isolados, e bem ao tratamento baseado em competências.",
      "Na Avalon, a depressão é tratada por direito próprio quando é o problema principal, e tratada como parte do quadro global quando não é."
    ],

    /* ---- Ansiedade ---- */
    anxietyTitle: "Ansiedade",
    anxietyLead: "Um sistema de ameaça que não se desliga.",
    anxietyWhatParagraphs: [
      "A ansiedade é a resposta da mente e do corpo a uma ameaça percebida ou a uma incerteza. Quando se torna persistente ou avassaladora, pode interferir com o sono, a concentração, as relações e a capacidade de estar presente no dia a dia.",
      "A ansiedade pode surgir como preocupação excessiva, tensão física, inquietação, medo, ou uma sensação constante de estar em alerta. A terapia pode ajudar a identificar os padrões que mantêm a ansiedade, e a desenvolver novas formas de responder à incerteza, ao stress e às emoções difíceis."
    ],
    anxietySignsTitle: "Sinais comuns",
    anxietySignsList: [
      "Preocupação difícil de travar ou de controlar",
      "Sintomas físicos: coração acelerado, aperto no peito, falta de ar, náuseas, tensão",
      "Ataques de pânico que atingem o pico em minutos e parecem uma emergência médica",
      "Evitar lugares, pessoas ou situações, e uma vida que vai ficando cada vez mais pequena",
      "Sono perturbado e vigilância constante para o que possa correr mal",
      "Exaustão de um estado de alerta que nunca se desliga"
    ],
    anxietyWhyParagraphs: [
      "A ansiedade responde bem a tratamento estruturado e baseado na evidência, e vários dos módulos de competências da DBT, em particular a tolerância ao mal-estar e o mindfulness, visam exatamente os mecanismos que a mantêm.",
      "Quando a ansiedade coexiste com a Perturbação da Personalidade Borderline ou com trauma, tratá-la isoladamente tende a desiludir. Tratá-la como parte de uma formulação única funciona melhor."
    ],

    /* ---- PSPT ---- */
    ptsdTitle: "Perturbação de Stress Pós-Traumático",
    ptsdLead: "Quando ninguém disse ao sistema nervoso que já acabou.",
    ptsdWhatParagraphs: [
      "A PSPT pode ocorrer quando o sistema nervoso permanece afetado por uma experiência que foi avassaladora, ameaçadora ou traumática. A pessoa pode ter memórias intrusivas, pesadelos, evitamento, estado de alerta aumentado, reatividade emocional, ou uma dificuldade persistente em sentir-se segura.",
      "Estas respostas são muitas vezes a tentativa do sistema nervoso de proteger a pessoa de um perigo que já passou. O tratamento especializado e informado pelo trauma pode ajudar a processar o que aconteceu, e a restaurar gradualmente uma maior sensação de segurança, ligação e controlo."
    ],
    ptsdSignsTitle: "Sinais comuns",
    ptsdSignsList: [
      "Memórias intrusivas, flashbacks ou pesadelos",
      "Reagir a gatilhos como se o acontecimento estivesse a dar-se agora",
      "Evitar pessoas, lugares ou conversas ligadas ao que aconteceu",
      "Sentir-se permanentemente em guarda, sobressaltar-se com facilidade, não conseguir assentar",
      "Anestesia emocional, ou a sensação de se observar a si próprio de fora",
      "Sono que não repõe nada",
      "Crenças formadas na altura e nunca revistas: que a culpa foi sua, que está danificado, que nenhum lugar é seguro"
    ],
    ptsdWhyParagraphs: [
      "O tratamento do trauma tem de ser sequenciado corretamente. Processar memória traumática antes de a pessoa ter capacidade para tolerar o sofrimento que isso levanta pode desestabilizá-la, e é por isso que a Avalon trata a estabilização e as competências como o piso térreo e não como um preliminar.",
      "Assente esse alicerce, o EMDR e outro trabalho focado no trauma podem começar, ao ritmo que a pessoa define."
    ],
    ptsdLink: "Saiba mais sobre o EMDR",

    /* ---- Trauma complexo / PSPT-C ---- */
    cptsdTitle: "Trauma Complexo e PSPT Complexa",
    cptsdLead: "Quando a adversidade foi prolongada, e aconteceu dentro de relações.",
    cptsdWhatParagraphs: [
      "O trauma complexo desenvolve-se frequentemente no contexto de experiências de adversidade prolongadas ou repetidas, sobretudo quando ocorrem dentro de relações ou durante períodos importantes do desenvolvimento.",
      "Os seus efeitos podem ir além das memórias traumáticas, influenciando a regulação emocional, o valor próprio, as relações, a confiança, e o sentido de identidade ou de segurança da pessoa. A PSPT Complexa pode, por isso, exigir uma abordagem terapêutica mais ampla e mais individualizada.",
      "O tratamento pode ajudar a reconstruir a estabilidade interna, a fortalecer as relações, e a desenvolver formas mais saudáveis de se relacionar consigo próprio e com o mundo."
    ]
  },

  /* ======================================================================
     SOLUÇÕES
     ====================================================================== */

  solutions: {
    pageTitle: "Soluções | DBT, EMDR e Mindfulness na Avalon",
    metaDescription: "Terapia Comportamental Dialética, EMDR e mindfulness na Avalon: o que é cada método, e como é usado no programa.",

    heroEyebrow: "Soluções",
    heroTitle: "Os métodos de que o programa é feito.",
    heroLede: "A Avalon não é eclética. Um modelo sustenta o tratamento, e tudo o resto serve de apoio.",

    /* ---- DBT ---- */
    dbtTitle: "Terapia Comportamental Dialética",
    dbtLead: "O núcleo de tudo o que a Avalon faz.",
    dbtWhatTitle: "O que é a DBT?",
    dbtWhatParagraphs: [
      "A Terapia Comportamental Dialética (DBT) é uma <strong>forma de psicoterapia estruturada e baseada na evidência</strong>, concebida para ajudar as pessoas a compreender e a gerir melhor emoções intensas, a lidar com situações difíceis e a construir relações mais saudáveis. A DBT fornece competências práticas de regulação emocional, tolerância ao mal-estar, mindfulness e eficácia interpessoal, ajudando as pessoas a responder a experiências exigentes com maior consciência e flexibilidade.",
      "Originalmente desenvolvida para a Perturbação da Personalidade Borderline, a DBT é hoje usada para apoiar pessoas com uma grande variedade de dificuldades emocionais e comportamentais, incluindo impulsividade, sobrecarga emocional, dificuldades relacionais e dificuldade em lidar com o sofrimento. A abordagem equilibra aceitação e compaixão com mudança comportamental significativa, ajudando as pessoas a desenvolver maior estabilidade, autoconhecimento e confiança na gestão das suas vidas."
    ],
    dbtModulesTitle: "Os quatro módulos de competências",
    dbtModulesIntro: "As competências são a parte que as pessoas levam consigo quando saem do tratamento.",
    dbtAtAvalonTitle: "A DBT na Avalon",
    dbtAtAvalonParagraphs: [
      "Na Avalon, a DBT está no centro da nossa abordagem terapêutica. Oferecemos um ambiente acolhedor e de apoio onde pode desenvolver competências práticas para compreender e regular emoções, fortalecer relações e enfrentar os desafios do dia a dia com mais confiança.",
      "Os nossos programas são conduzidos por clínicos experientes, com muitos anos de prática clínica, apoiados por formação avançada e certificações reconhecidas internacionalmente. Mantemo-nos próximos da investigação atual e da prática baseada na evidência, oferecendo cuidados atentos, individualizados e assentes nos mais elevados padrões clínicos.",
      "Você está no centro de tudo o que fazemos. O nosso objetivo não é apenas reduzir sintomas, mas ajudá-lo a construir maior estabilidade, ligação, independência e, em última análise, uma vida que valha a pena viver."
    ],
    dbtLink: "Ver as terapias do programa",

    /* ---- EMDR ---- */
    emdrTitle: "EMDR",
    emdrLead: "Dessensibilização e Reprocessamento através dos Movimentos Oculares.",
    emdrWhatTitle: "O que é o EMDR?",
    emdrWhatParagraphs: [
      "O EMDR (Eye Movement Desensitisation and Reprocessing) é uma psicoterapia focada no trauma que ajuda as pessoas a processar experiências angustiantes ou traumáticas que continuam a influenciar a forma como se sentem, pensam, se relacionam ou reagem no presente. O objetivo é ajudar a processar a memória de modo a reduzir a sua intensidade emocional e a torná-la menos perturbadora no dia a dia.",
      "O EMDR tem <strong>o seu maior suporte na investigação</strong> no tratamento da Perturbação de Stress Pós-Traumático (PSPT) e é recomendado pelas principais orientações clínicas internacionais. Pode ajudar a reduzir sintomas como memórias intrusivas, sofrimento emocional, evitamento, hiperativação e outras reações relacionadas com o trauma.",
      "O EMDR pode também ser integrado no tratamento da PSPT Complexa (PSPT-C), da Perturbação da Personalidade Borderline, da depressão e da ansiedade, em particular quando experiências traumáticas ou adversas, memórias angustiantes ou gatilhos específicos contribuem para as dificuldades atuais.",
      "Na Perturbação da Personalidade Borderline, o EMDR pode complementar tratamentos como a DBT ao abordar experiências traumáticas ou adversas que continuam a contribuir para a desregulação emocional, para crenças negativas sobre si próprio, para dificuldades interpessoais e para respostas emocionais intensificadas. Enquanto a DBT se centra em desenvolver competências para gerir emoções e comportamentos no presente, o EMDR pode ajudar a processar experiências do passado que continuam a influenciar essas respostas.",
      "A utilização do EMDR é individualizada de acordo com as necessidades clínicas, a história, a estabilidade e os objetivos terapêuticos de cada pessoa."
    ],
    emdrSafetyTitle: "Segurança e preparação",
    emdrSafetyParagraphs: [
      "O EMDR é introduzido quando é clinicamente adequado e a um ritmo que tem em conta a preparação, a estabilidade emocional e a capacidade de gerir o sofrimento de cada pessoa. A preparação, a avaliação contínua e o apoio adequado estão presentes ao longo de todo o processo, para ajudar a garantir que o processamento do trauma é conduzido de forma segura e responsável."
    ],
    emdrAtAvalonTitle: "O EMDR na Avalon",
    emdrAtAvalonParagraphs: [
      "Na Avalon, o EMDR é aplicado com sensibilidade, experiência e respeito pela história individual de cada pessoa. O trabalho com trauma exige confiança e segurança, e é por isso que ponderamos cuidadosamente a preparação, as necessidades e a estabilidade emocional de cada pessoa ao longo de todo o processo.",
      "Os nossos clínicos de EMDR trazem muitos anos de experiência, formação avançada e certificações reconhecidas internacionalmente, mantendo-se comprometidos com a investigação atual, a prática baseada na evidência e os mais elevados padrões de cuidado clínico.",
      "O EMDR é integrado com critério no tratamento de cada pessoa quando é clinicamente adequado, e a um ritmo seguro e comportável. O nosso objetivo é ajudar a reduzir o impacto de experiências dolorosas do passado, e apoiar cada pessoa a caminhar para uma vida mais estável, ligada e gratificante."
    ],
    /* ---- Mindfulness ---- */
    mindfulnessTitle: "Mindfulness na Avalon",
    mindfulnessLead: "Yoga, meditação e workshops, a par do trabalho clínico.",
    mindfulnessParagraphs: [
      "O mindfulness é uma prática terapêutica central que ajuda a desenvolver a consciência do momento presente, a regulação emocional e a capacidade de responder a experiências difíceis com maior estabilidade. Na Avalon é um apoio importante à DBT, e pode também ajudar a construir o enraizamento, a consciência e a disponibilidade emocional necessários na preparação para o EMDR.",
      "Tem, por isso, duas vidas aqui. É um dos quatro módulos de competências da DBT, ensinado clinicamente e praticado como competência. É também uma camada mais silenciosa, não clínica, que acompanha o programa.",
      "Essa segunda camada não é tratamento e não é apresentada como tratamento. Existe porque um dia feito só de terapia é um dia difícil, e porque a atenção, a respiração e o movimento são coisas úteis de praticar num sítio que não seja um consultório. É opcional, e é suposto sê-lo."
    ],
    offersTitle: "A nossa oferta",
    offersIntro: "A camada não clínica, tal como está neste momento.",
    /* PLACEHOLDER: as três ofertas abaixo estão nomeadas mas ainda não
       descritas. Conteúdo, horário e profissionais a confirmar. */
    offerMeditationTitle: "Meditação",
    offerYogaTitle: "Yoga",
    offerWorkshopsTitle: "Workshops",
  },

  /* ======================================================================
     FAMÍLIA E PESSOAS PRÓXIMAS
     ====================================================================== */

  family: {
    pageTitle: "Família e Pessoas Próximas | Avalon",
    metaDescription: "Apoio e psicoeducação para as famílias e pessoas próximas de quem está em tratamento na Avalon.",

    heroEyebrow: "Família e Pessoas Próximas",
    heroTitle: "Não está sozinho.",
    heroLede: "Sabemos como pode ser difícil ver alguém de quem gosta a viver com uma condição de saúde mental.",

    introParagraphs: [
      "Se ama alguém com Perturbação da Personalidade Borderline, é provável que já lhe tenham dito muito sobre o que está a fazer mal, e muito pouco sobre o que realmente ajuda. Pode ter passado anos a reagir a emergências, a pisar ovos, ou a ser tratado alternadamente como a única pessoa segura e como a origem do problema.",
      "<strong>Isso não é uma falha de amor nem de esforço.</strong> É o que acontece quando se pede a pessoas que giram uma condição clínica grave sem formação e sem apoio."
    ],

    resourcesTitle: "Recursos para Família e Amigos",
    resourcesParagraphs: [
      "Na Avalon damos às famílias recursos práticos para compreenderem melhor aquilo que a pessoa que amam está a viver, e como responder de formas úteis e compassivas.",
      "Com um enfoque particular no apoio informado pela DBT, as famílias podem aprender competências de validação, comunicação mais saudável, regulação emocional, limites, e de gestão de momentos difíceis. Damos também orientação e psicoeducação a famílias que apoiam alguém com depressão, ansiedade, PSPT ou PSPT Complexa.",
      "O nosso objetivo é ajudar as famílias a sentirem-se <strong>mais informadas, mais apoiadas e melhor preparadas</strong> para caminhar ao lado de quem amam ao longo do processo de recuperação."
    ],
    ctaTitle: "Se é você quem procura ajuda em nome de outra pessoa",
    ctaBody: "Essa é uma das opções do formulário da lista de espera, e uma forma muito comum de as pessoas chegarem até nós. Não precisa da autorização da pessoa para nos fazer uma pergunta."
  },

  /* ======================================================================
     SOBRE NÓS
     ====================================================================== */

  about: {
    pageTitle: "Sobre Nós | Avalon",
    metaDescription: "Aquilo em que a Avalon acredita, como começou, a equipa clínica, e como juntar-se a ela.",

    heroEyebrow: "Sobre Nós",
    heroTitle: "Porque está este lugar a ser construído.",
    heroLede: "Um país de dez milhões de pessoas tem <strong>cerca de quatro ou cinco camas residenciais especializadas</strong> para uma das condições psiquiátricas graves mais tratáveis que existem. Todas públicas, todas partilhadas com uma população de doentes diferente.",

    beliefsTitle: "Aquilo em que Acreditamos",
    beliefsLead: "Existem abordagens abrangentes e integrativas para responder ao sofrimento emocional e às perturbações psicológicas.",
    beliefsParagraphs: [
      "Acreditamos que existem abordagens abrangentes e integrativas para responder ao sofrimento emocional e às perturbações psicológicas.",
      "O nosso trabalho reúne algumas das técnicas de psicoterapia baseadas na evidência mais eficazes, tendo a <strong>Terapia Comportamental Dialética (DBT) como pilar fundamental</strong>, sobretudo no tratamento da Perturbação da Personalidade Borderline.",
      "A nossa abordagem procura responder à pessoa como um todo, integrando ferramentas terapêuticas que apoiam a regulação emocional, a resiliência, as relações interpessoais e um bem-estar psicológico duradouro."
    ],

    joinTitle: "Junte-se à Nossa Equipa",
    joinLead: "Um dos únicos percursos estruturados de formação em DBT em Portugal.",
  },

  /* ======================================================================
     TEXTO ALTERNATIVO DAS IMAGENS
     Alt text real e descritivo — isto é um site de saúde.
     ====================================================================== */

  media: {
    altHeroTerrace: "Vista do terraço superior da Avalon sobre as colinas arborizadas de Sintra, com a vila em baixo e uma balaustrada de pedra em primeiro plano.",
    altFacade: "A casa de 1887 vista da rua calcetada em baixo, com o seu reboco rosa e friso de azulejo emoldurados por plátanos.",
    altCastleView: "Vista do terraço azulejado através de um arco de pedra na direção do Castelo dos Mouros, na colina em frente.",
    altSalon: "O salão principal, com teto de caixotões, paredes almofadadas e portas altas que abrem para a sala de jantar.",
    altDiningRoom: "A sala de jantar, com uma mesa comprida, aparadores entalhados e um lustre de época sob janelas altas.",
    altDiningRoomTwo: "Uma segunda vista da sala de jantar, olhando na direção das portas do salão.",
    altSittingRoom: "Uma sala de estar partilhada da casa, com janelas altas e molduras originais.",
    altStaircase: "A escadaria principal da casa, virando num patamar intermédio sob uma janela alta.",
    altCorridor: "O corredor do segundo piso, com portas ao longo de um dos lados e luz vinda do fundo.",
    altRoomPrincipal: "Um dos quartos principais, com uma janela virada para as árvores.",
    altRoomWindow: "Luz a entrar pelas portadas de uma janela de quarto sobre um soalho de madeira.",
    altGardenPath: "Um caminho de pedra a descer pelo jardim sob árvores adultas, com a piscina visível em baixo.",
    altGardenSteps: "Degraus antigos de pedra no jardim, cobertos de hera e fetos entre muros altos de pedra.",
    altGardenFountain: "Um tanque de pedra no jardim, quase totalmente coberto de vegetação.",
    altGardenBench: "Um recanto tranquilo do jardim com um banco sob as árvores.",
    altGardenVista: "Uma vista sobre a vegetação do jardim na direção da encosta vizinha.",
    altGardenUndergrowth: "Vegetação rasteira densa e trepadeiras suspensas na parte mais antiga do jardim.",
    altGardenPavilion: "Uma pequena construção de pedra entre as árvores do jardim.",
    altGardenWalledPath: "Um caminho estreito entre muros no jardim, com a pedra coberta de musgo e hera.",
    altTerraceUpper: "O terraço superior da casa, com vista sobre as copas das árvores.",
    altSideEntrance: "A entrada lateral da casa, com uma balaustrada de ferro e azulejo junto aos degraus."
  }
};
