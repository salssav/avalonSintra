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
    familyAccess: "Contacto do Doente com Família e Amigos",
    beliefs: "Aquilo em que Acreditamos",
    origin: "Como Nasceu a Avalon",
    medicalTeam: "Equipa Clínica",
    joinTeam: "Junte-se à Nossa Equipa"
  },

  /* ---- O apelo à ação, discreto e sempre presente ------------------------ */
  cta: {
    eyebrow: "As admissões estão abertas",
    title: "Entre na lista de espera.",
    body: "A Avalon ainda não abriu. A lista de espera é a forma de mantermos contacto com quem quer um lugar quando abrir — e é a maneira mais simples de iniciar uma conversa connosco. Não o compromete a absolutamente nada.",
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
    /* PLACEHOLDER: confirmar o endereço de email e o telefone públicos antes do lançamento. */
    email: "[PLACEHOLDER: endereço de email]",
    phone: "[PLACEHOLDER: número de telefone]",
    /* PLACEHOLDER: confirmar a morada a publicar, se alguma, durante a obra. */
    address: "Sintra, Portugal <ph>morada a confirmar</ph>",
    legalNote: "A Avalon é uma clínica em desenvolvimento. Nada neste site constitui uma oferta de tratamento nem substitui aconselhamento clínico individual.",
    copyright: "Avalon. Todos os direitos reservados.",
    /* PLACEHOLDER: política de privacidade e termos a redigir antes do lançamento. */
    privacy: "Política de Privacidade <ph>brevemente</ph>",
    terms: "Termos <ph>brevemente</ph>"
  },

  /* ---- Aviso de crise — obrigatório em qualquer site de saúde mental ----- */
  crisis: {
    title: "Se precisa de ajuda agora",
    /* PLACEHOLDER: confirmar estes números com a equipa clínica antes do
       lançamento. O 112 é o número europeu de emergência; a SNS 24 é a linha
       nacional de saúde em Portugal. */
    body: "A Avalon não é um serviço de emergência e não pode responder a uma situação de crise. Se você ou alguém que ama estiver em perigo imediato, ligue 112. Em Portugal pode também contactar a SNS 24 através do 808 24 24 24, a qualquer hora, para aconselhamento de saúde, incluindo saúde mental. <ph>números a confirmar</ph>"
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
    consent: "Usaremos os seus dados apenas para lhe responder sobre a Avalon. Não os partilharemos com mais ninguém.",
    errorRequired: "Preencha este campo para que possamos responder.",
    errorEmail: "Verifique este endereço de email.",
    errorSelect: "Escolha uma opção.",
    /* PLACEHOLDER: ainda não há backend ligado ao formulário. As submissões são
       tratadas apenas no browser e não são enviadas nem guardadas em lado nenhum. */
    demoNotice: "Este formulário ainda não está ligado a uma caixa de correio. <ph>backend a ligar</ph>",
    waitlistConfirmTitle: "Obrigado. Ficámos com os seus dados.",
    waitlistConfirmBody: [
      "Alguém da Avalon irá escrever-lhe pessoalmente. Não é uma sequência automática nem uma chamada comercial — é uma resposta real de uma pessoa real, para que possa perguntar aquilo que realmente quer perguntar.",
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
    pageTitle: "Avalon — DBT residencial para a Perturbação da Personalidade Borderline, Sintra",
    metaDescription: "A Avalon é uma clínica residencial em Sintra, Portugal, especializada em Terapia Comportamental Dialética para a Perturbação da Personalidade Borderline, com cuidados para depressão, ansiedade e PSPT.",

    heroEyebrow: "Sintra, Portugal",
    heroTitle: "Uma casa feita para o trabalho de ficar melhor.",
    heroLede: "A Avalon é uma clínica residencial especializada em Terapia Comportamental Dialética para a Perturbação da Personalidade Borderline — com cuidados dedicados à depressão, à ansiedade e à PSPT.",
    /* PLACEHOLDER: data de abertura por confirmar. */
    heroCaption: "A casa, construída em 1887, vista do terraço superior. Em obras neste momento, abertura em <ph>data a confirmar</ph>",
    heroScrollHint: "Deslize",

    missionEyebrow: "Porque existimos",
    missionStatement: "Portugal quase não tem capacidade residencial especializada para a Perturbação da Personalidade Borderline. A Avalon existe para fechar essa lacuna.",

    introEyebrow: "O que é a Avalon",
    introTitle: "Uma clínica, um protocolo, três níveis de intensidade.",
    introParagraphs: [
      "A Avalon é uma clínica residencial privada a ganhar forma numa casa histórica acima de Sintra. Oferece um continuum completo de cuidados — residencial, hospital de dia e ambulatório — organizado em torno da Terapia Comportamental Dialética, o tratamento mais amplamente validado que existe para a Perturbação da Personalidade Borderline.",
      "Os nossos doentes são adultos que vêm voluntariamente e que estão clinicamente estáveis no momento em que chegam. A Avalon não é um serviço de crise. As pessoas em crise aguda, ou em tratamento involuntário, são encaminhadas para os cuidados adequados noutro lugar.",
      "A casa está em obras neste momento. A lista de espera está aberta, e entrar nela não o compromete a nada."
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
    cardTreatmentsText: "Borderline, depressão, ansiedade e PSPT — o que são, e porque é que o tratamento especializado muda o desfecho.",
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
    sintraBandBody: "Os ambientes urbanos densos mantêm a amígdala ativada — a mesma estrutura que está por baixo da desregulação emocional na Perturbação da Personalidade Borderline. A proximidade a espaços verdes está associada ao contrário. É esse o argumento a favor de Sintra.",
    sintraBandLink: "Leia o raciocínio",

    quoteEyebrow: "Do nosso fundador",
    /* PLACEHOLDER: a citação do fundador é texto provisório. A escrever ou a
       aprovar pelo fundador antes do lançamento. Atribuição também pendente. */
    quoteText: "Há pessoas neste país a quem foi dito, vezes sem conta, que não há para onde ir. Estamos a construir esse lugar.",
    quoteAttribution: "[NOME DO FUNDADOR], Fundador <ph>citação e atribuição pendentes</ph>",

    aboutEyebrow: "Sobre nós",
    aboutTitle: "Construído por quem não conseguiu encontrar este lugar, e decidiu fazê-lo.",
    aboutBody: "A Avalon nasceu como resposta a uma lacuna fácil de enunciar e difícil de viver: um país de dez milhões de pessoas com cerca de quatro ou cinco camas residenciais especializadas para uma das condições psiquiátricas graves mais tratáveis que existem.",
    aboutLink: "Sobre a Avalon"
  },

  /* ======================================================================
     OS NOSSOS PROGRAMAS
     ====================================================================== */

  programs: {
    pageTitle: "Os Nossos Programas — Avalon",
    metaDescription: "Residência, Hospital de Dia, Ambulatório, atividades e terapias na Avalon, uma clínica residencial de DBT em Sintra, Portugal.",

    heroEyebrow: "Os Nossos Programas",
    heroTitle: "Cuidados que baixam de intensidade, nunca de qualidade.",
    heroLede: "Um programa clínico, aplicado em três níveis de intensidade, para que o tratamento possa acompanhar a pessoa à medida que estabiliza — sem a obrigar a recomeçar com uma equipa nova.",

    introParagraphs: [
      "A maioria das pessoas não precisa da mesma intensidade de cuidados durante toda a recuperação, e a maioria dos sistemas lida mal com isso: a pessoa melhora, tem alta, e vai parar a um sítio completamente diferente, com outra equipa e outro modelo, perdendo grande parte do que tinha construído.",
      "A Avalon foi desenhada como um só continuum. O protocolo, a linguagem e — tanto quanto possível — as pessoas mantêm-se as mesmas à medida que a intensidade desce."
    ],

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
    /* PLACEHOLDER: sem número de camas, duração do internamento ou horário
       diário até confirmação pela equipa clínica. */
    residencePlaceholder: "Duração do programa e capacidade residencial <ph>brevemente</ph>",

    dayHospitalTitle: "Hospital de Dia",
    dayHospitalLead: "Intensidade clínica completa, noites em casa.",
    dayHospitalParagraphs: [
      "O Programa de Dia é um programa de tratamento em saúde mental intensivo e estruturado, no qual as pessoas recebem apoio terapêutico e clínico abrangente durante o dia, continuando a viver em casa ou na sua própria comunidade.",
      "O programa proporciona um ambiente terapêutico estruturado sem exigir internamento residencial. Permite que as pessoas participem num tratamento intensivo mantendo as suas rotinas familiares, escolares, profissionais e sociais sempre que isso seja clinicamente adequado.",
      "O programa inclui habitualmente avaliação individualizada, psicoterapia individual e de grupo, seguimento psiquiátrico quando indicado, treino de competências, psicoeducação, trabalho de regulação emocional, envolvimento da família e monitorização clínica contínua.",
      "O objetivo é oferecer apoio intensivo, reforçar as competências de coping e de regulação emocional, melhorar o funcionamento diário e ajudar as pessoas a regressar progressivamente a maior independência e estabilidade no seu dia a dia."
    ],
    /* PLACEHOLDER: horário exato a confirmar. */
    dayHospitalPlaceholder: "Horário diário e semanal exato <ph>brevemente</ph>",

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
    /* PLACEHOLDER: ainda não há lista concreta de atividades. */
    activitiesPlaceholder: "Programa específico de atividades <ph>brevemente</ph>",

    therapiesTitle: "Terapias",
    therapiesLead: "O que acontece, de facto, semana a semana.",
    therapiesIntro: "A DBT completa não é uma única terapia, mas um conjunto de componentes que só funcionam devidamente em conjunto. A Avalon assegura-os a todos.",

    therapyIndividualTitle: "Terapia DBT individual",
    therapyIndividualText: "Cada doente trabalha com um terapeuta DBT individual. É este o fio que atravessa tudo o resto: uma sessão semanal estruturada onde as competências deixam de ser abstratas e passam a aplicar-se ao que está realmente a acontecer na vida da pessoa nesta semana.",

    therapySkillsTitle: "Grupos de competências DBT",
    therapySkillsText: "As competências são ensinadas em grupo, em quatro módulos. Muitas pessoas esperam que o grupo seja a parte difícil e acabam por descobrir que é a parte de que mais sentem falta depois.",

    moduleMindfulnessTitle: "Mindfulness",
    moduleMindfulnessText: "Reparar no que está a acontecer, dentro e à sua volta, sem ter de agir imediatamente sobre isso.",
    moduleDistressTitle: "Tolerância ao Mal-Estar",
    moduleDistressText: "Atravessar os piores momentos sem os agravar — competências de sobrevivência à crise, e a prática mais difícil de aceitar aquilo que não pode ser mudado agora.",
    moduleEmotionTitle: "Regulação Emocional",
    moduleEmotionText: "Compreender o que as emoções estão a fazer, reduzir a vulnerabilidade a elas e mudar aquelas que não correspondem aos factos.",
    moduleInterpersonalTitle: "Eficácia Interpessoal",
    moduleInterpersonalText: "Pedir aquilo de que precisa, dizer não, e manter intactos tanto a relação como o respeito por si próprio enquanto o faz.",

    therapyPsychiatryTitle: "Consulta de psiquiatria",
    therapyPsychiatryText: "A avaliação psiquiátrica regular acompanha a terapia, não se sobrepõe a ela. A medicação é ponderada onde ajuda e questionada onde não ajuda.",

    therapyConsultTitle: "A equipa de consultadoria clínica",
    therapyConsultText: "Uma vez por semana, os clínicos que o acompanham reúnem-se em equipa — não por razões administrativas, mas para se ajudarem mutuamente a aplicar a terapia como deve ser. Em DBT isto não é opcional: a equipa de consultadoria é uma parte formal do modelo de tratamento, assente no princípio de que os terapeutas que fazem este trabalho também precisam de apoio. Mencionamo-lo porque é um dos sinais mais claros de se um programa está genuinamente a fazer DBT, ou apenas a usar o nome."
  },

  /* ======================================================================
     A CASA
     ====================================================================== */

  house: {
    pageTitle: "A Casa — Avalon, Sintra",
    metaDescription: "Uma casa de 1887 em Sintra com um jardim histórico de cerca de 5 557 metros quadrados: quartos, áreas comuns, espaços exteriores, e porque foi Sintra a escolha.",

    heroEyebrow: "A Casa",
    heroTitle: "Uma casa de 1887, e o jardim que veio com ela.",
    heroLede: "A Avalon está a ganhar forma dentro de um solar histórico em Sintra. A compra foi concluída em maio de 2026; a casa está agora em obras.",
    heroCaption: "A fachada vista da rua abaixo. Fotografada durante a compra, antes do início das obras.",

    introParagraphs: [
      "O edifício data de 1887 e tem as proporções da sua época: pés-direitos altos, janelas profundas, uma escadaria que não tem pressa, azulejo pintado nas soleiras. Muito pouco nesta casa é neutro, e isso é deliberado — uma pessoa em tratamento não é ajudada por se sentir num sítio institucional.",
      "As obras estão a decorrer. As fotografias desta página mostram a casa tal como foi comprada, e não como irá abrir. Estão aqui porque são honestas, e porque a estrutura do lugar é a razão pela qual foi escolhido."
    ],

    roomsTitle: "Quartos",
    /* PLACEHOLDER: sem número de quartos, tipologias ou pormenores de interior
       até a obra e a adaptação clínica estarem confirmadas. Apenas linguagem
       geral e acolhedora. */
    roomsParagraphs: [
      "Espaços pensados com cuidado para o descanso e a recuperação — silenciosos, privados, e feitos para se dormir realmente neles e não apenas para acomodar alguém.",
      "Os quartos estão a ser redesenhados no âmbito da obra, com a equipa clínica envolvida na especificação desde o início."
    ],
    roomsPlaceholder: "Detalhe, número e fotografia dos quartos <ph>brevemente</ph>",
    roomsMediaNote: "Fotografia dos quartos acabados brevemente",

    commonAreasTitle: "Áreas Comuns",
    /* PLACEHOLDER: apenas descrição geral até a obra estar concluída. */
    commonAreasParagraphs: [
      "Salas partilhadas para comer juntos, estar juntos, e estar em silêncio no mesmo espaço que outras pessoas sem ter de representar seja o que for. Num programa residencial, estas salas pesam mais do que aparentam.",
      "O salão, a sala de jantar e os corredores superiores estão a ser restaurados, e não substituídos."
    ],
    commonAreasPlaceholder: "Disposição final e utilização das salas comuns <ph>brevemente</ph>",

    outdoorTitle: "Espaços Exteriores",
    outdoorLead: "Um jardim histórico de cerca de 5 557 metros quadrados.",
    outdoorParagraphs: [
      "A propriedade inclui um jardim histórico de aproximadamente 5 557 metros quadrados, disposto ao longo da encosta em socalcos de pedra. Há muros antigos de pedra a segurar os níveis, tanques de água e um poço — a infraestrutura de trabalho de um jardim sintrense do século XIX, quase toda ainda no lugar.",
      "Degraus descem por entre a vegetação desde a casa até ao nível inferior. Em alguns pontos o jardim cresceu completamente sobre si próprio; camélias, fetos e árvores adultas tiveram décadas para fazer o que lhes apeteceu. Restaurá-lo faz parte do projeto e não é um pormenor dele.",
      "Isto importa clinicamente tanto como esteticamente. Um jardim desta dimensão significa que uma pessoa pode sair, caminhar e estar genuinamente sozinha sem sair da propriedade nem pedir licença a ninguém."
    ],

    sintraTitle: "Porquê Sintra",
    sintraLead: "Escolhida por razões clínicas antes de razões estéticas.",
    sintraParagraphs: [
      "Existe hoje um corpo consistente de investigação sobre o efeito dos ambientes no sistema de ameaça do cérebro, e é suficientemente específico para se construir a partir dele.",
      "A vida urbana densa está associada a hiperativação sustentada da amígdala — a mesma estrutura que, na Perturbação da Personalidade Borderline, é repetidamente encontrada como sobrerreativa e lenta a acalmar. A amígdala é, em sentido literal, o substrato neurobiológico da desregulação emocional. Pedir a alguém que faça o trabalho psicológico mais difícil da sua vida num ambiente que mantém esse sistema ligado é uma forma estranha de começar.",
      "O achado correspondente é o mais útil. A proximidade a espaços verdes está associada a menor ativação da amígdala e a diferenças estruturais mensuráveis nas regiões cerebrais envolvidas na regulação das emoções.",
      "É esse o argumento a favor de Sintra: floresta, ar atlântico vindo da Serra, e um microclima que há dois séculos traz pessoas até aqui para recuperar. Nada disto substitui o tratamento. É a terapia que faz o trabalho. Mas é o lugar que decide quanto da capacidade de uma pessoa fica disponível para o fazer."
    ],
    sintraCaption: "Vista para norte a partir do terraço, na direção do Castelo dos Mouros."
  },

  /* ======================================================================
     ADMISSÕES
     ====================================================================== */

  admissions: {
    pageTitle: "Admissões — Avalon",
    metaDescription: "Para quem é a Avalon, como funciona o processo de admissão, como se mede a evolução, e como entrar na lista de espera.",

    heroEyebrow: "Admissões",
    heroTitle: "Como alguém chega à Avalon.",
    heroLede: "A admissão é uma conversa antes de ser uma decisão. Nada no primeiro passo é vinculativo, e ninguém é avaliado com base num formulário.",

    criteriaTitle: "Para quem é a Avalon",
    criteriaLead: "Ser claro sobre isto desde cedo poupa às pessoas uma conversa difícil mais tarde.",
    criteriaIntro: "A Avalon admite adultos que:",
    criteriaList: [
      "tenham 18 anos ou mais;",
      "venham voluntariamente, e queiram estar aqui;",
      "estejam clinicamente estabilizados e não em crise aguda no momento da admissão;",
      "não tenham uma perturbação por uso de substâncias como diagnóstico principal."
    ],
    criteriaNote: "Se a Avalon não for o contexto certo, dizemo-lo, e procuraremos indicar algo que o seja. Não ser admitido aqui não é um juízo sobre o valor ou a seriedade de ninguém — é um juízo sobre adequação, e errar nisso não ajuda ninguém.",

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
      "DBT como programa residencial de transição — um modelo residencial intermédio para pessoas que precisam de estrutura e apoio antes de regressar à vida quotidiana.",
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
      "Práticas alimentares — kosher, vegetariana, ou outras restrições.",
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
    /* PLACEHOLDER: os instrumentos específicos e os intervalos de medição a
       confirmar e a nomear pela equipa clínica. */
    progressPlaceholder: "Instrumentos e intervalos de medição <ph>a confirmar</ph>",

    waitlistTitle: "Entrar na Nossa Lista de Espera",
    waitlistLead: "É breve, e não o compromete a nada.",
    waitlistParagraphs: [
      "A Avalon ainda não abriu, por isso a lista de espera é a forma de mantermos contacto com quem quer um lugar quando abrir. É também, na prática, a forma como começa a maioria das conversas connosco.",
      "Cinco campos. Sem questionário de admissão, sem histórico, nada para que tenha de ganhar coragem. Se preferir apenas falar com alguém antes de mais, diga-o na mensagem e é isso que faremos."
    ]
  },

  /* ======================================================================
     TRATAMENTOS
     ====================================================================== */

  treatments: {
    pageTitle: "Tratamentos — Avalon",
    metaDescription: "Explicações acessíveis sobre a Perturbação da Personalidade Borderline, a depressão, a ansiedade e a PSPT, e porque importa o tratamento especializado.",

    heroEyebrow: "Tratamentos",
    heroTitle: "O que tratamos, explicado com clareza.",
    heroLede: "Escrito para quem está a tentar perceber o que lhe está a acontecer, ou o que acontece a alguém que ama — e não para um público clínico.",

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
      "O custo de errar são anos — anos de tratamento dirigido ao alvo errado, e a conclusão razoável, do lado do doente, de que nada funciona e de que o problema é ele.",
      "Vale a pena dizê-lo com clareza: a Perturbação da Personalidade Borderline é uma das condições psiquiátricas graves mais tratáveis, e a evidência disso é forte. Muitas pessoas cumprem critérios num momento da vida e não noutro. O prognóstico é genuinamente bom quando o tratamento é o certo."
    ],
    bpdWhySpecialistTitle: "Porque importa o tratamento especializado",
    bpdWhySpecialistParagraphs: [
      "Os cuidados gerais de saúde mental não foram desenhados para isto. A terapia de apoio sem estrutura tende a não ajudar e pode tornar as coisas mais difíceis; a medicação isolada não tem uma base de evidência sólida para a própria Perturbação da Personalidade Borderline.",
      "O que tem evidência é a terapia estruturada e guiada por protocolo — sobretudo a DBT, que foi desenvolvida especificamente para esta população e foi testada mais aprofundadamente do que qualquer alternativa.",
      "É esse todo o argumento a favor de um contexto especializado. Não um edifício mais bonito: uma equipa formada num modelo, a aplicá-lo por inteiro, com a estrutura de supervisão que o mantém honesto."
    ],
    /* PLACEHOLDER: os dados de mortalidade e suicídio aparecem uma única vez,
       com cuidado, num enquadramento de apoio, e nunca são repetidos nem usados
       como frase de abertura — conforme o briefing. Redação a rever pela equipa
       clínica. */
    bpdCalloutParagraphs: [
      "A Perturbação da Personalidade Borderline comporta um risco real de suicídio, e não vamos fingir o contrário numa página escrita para quem vive com ela. Dizemo-lo uma vez, aqui, e apenas por esta razão: esse risco desce substancialmente com tratamento adequado. Se está neste momento num lugar escuro, é exatamente para essa circunstância que este tipo de cuidados existe. Por favor, fale hoje com alguém — um médico, uma linha de apoio, ou connosco."
    ],

    /* ---- Depressão ---- */
    depressionTitle: "Depressão",
    depressionLead: "Mais do que tristeza, e tratável.",
    depressionWhatParagraphs: [
      "A depressão pode afetar gradualmente a forma como uma pessoa se sente, pensa, se relaciona com os outros e vive o dia a dia. Pode envolver tristeza persistente, anestesia emocional, perda de interesse ou de prazer, exaustão, dificuldade de concentração, alterações do sono, ou uma sensação de desesperança.",
      "A depressão não é simplesmente falta de motivação ou uma tristeza passageira. É uma condição complexa que pode ter dimensões biológicas, psicológicas e ambientais. Com tratamento e apoio adequados, a recuperação e o reencontro com a vida são possíveis."
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
      "A depressão é muito comum a par da Perturbação da Personalidade Borderline, e as duas são frequentemente confundidas — o que importa, porque precisam de coisas diferentes. A depressão que é, na realidade, parte de uma perturbação da regulação emocional responde mal aos antidepressivos isolados, e bem ao tratamento baseado em competências.",
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
      "A ansiedade responde bem a tratamento estruturado e baseado na evidência, e vários dos módulos de competências da DBT — em particular a tolerância ao mal-estar e o mindfulness — visam exatamente os mecanismos que a mantêm.",
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
    pageTitle: "Soluções — DBT, EMDR e Mindfulness na Avalon",
    metaDescription: "Terapia Comportamental Dialética, EMDR e mindfulness na Avalon: o que é cada método, e como é usado no programa.",

    heroEyebrow: "Soluções",
    heroTitle: "Os métodos de que o programa é feito.",
    heroLede: "A Avalon não é eclética. Um modelo sustenta o tratamento, e tudo o resto serve de apoio.",

    /* ---- DBT ---- */
    dbtTitle: "Terapia Comportamental Dialética",
    dbtLead: "O núcleo de tudo o que a Avalon faz.",
    dbtWhatTitle: "O que é a DBT?",
    dbtWhatParagraphs: [
      "A Terapia Comportamental Dialética (DBT) é uma forma de psicoterapia estruturada e baseada na evidência, concebida para ajudar as pessoas a compreender e a gerir melhor emoções intensas, a lidar com situações difíceis e a construir relações mais saudáveis. A DBT fornece competências práticas de regulação emocional, tolerância ao mal-estar, mindfulness e eficácia interpessoal, ajudando as pessoas a responder a experiências exigentes com maior consciência e flexibilidade.",
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
    /* PLACEHOLDER: manter a secção da DBT na Avalon em termos gerais até a
       equipa e a estrutura do programa estarem confirmadas. Sem nomes de
       clínicos, rácios ou horários. */
    dbtAtAvalonPlaceholder: "Estrutura do programa e detalhe da equipa <ph>brevemente</ph>",
    dbtLink: "Ver as terapias do programa",

    /* ---- EMDR ---- */
    emdrTitle: "EMDR",
    emdrLead: "Dessensibilização e Reprocessamento através dos Movimentos Oculares.",
    emdrWhatTitle: "O que é o EMDR?",
    emdrWhatParagraphs: [
      "O EMDR (Eye Movement Desensitisation and Reprocessing) é uma psicoterapia focada no trauma que ajuda as pessoas a processar experiências angustiantes ou traumáticas que continuam a influenciar a forma como se sentem, pensam, se relacionam ou reagem no presente. O objetivo é ajudar a processar a memória de modo a reduzir a sua intensidade emocional e a torná-la menos perturbadora no dia a dia.",
      "O EMDR tem o seu maior suporte na investigação no tratamento da Perturbação de Stress Pós-Traumático (PSPT) e é recomendado pelas principais orientações clínicas internacionais. Pode ajudar a reduzir sintomas como memórias intrusivas, sofrimento emocional, evitamento, hiperativação e outras reações relacionadas com o trauma.",
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
    /* PLACEHOLDER: clínicos de EMDR e equipa ainda por confirmar. */
    emdrAtAvalonPlaceholder: "Detalhe da equipa de EMDR <ph>brevemente</ph>",

    /* ---- Mindfulness ---- */
    mindfulnessTitle: "Mindfulness na Avalon",
    mindfulnessLead: "Yoga, meditação e workshops, a par do trabalho clínico.",
    mindfulnessParagraphs: [
      "O mindfulness é uma prática terapêutica central que ajuda a desenvolver a consciência do momento presente, a regulação emocional e a capacidade de responder a experiências difíceis com maior estabilidade. Na Avalon é um apoio importante à DBT, e pode também ajudar a construir o enraizamento, a consciência e a disponibilidade emocional necessários na preparação para o EMDR.",
      "Tem, por isso, duas vidas aqui. É um dos quatro módulos de competências da DBT, ensinado clinicamente e praticado como competência — e é também uma camada mais silenciosa, não clínica, que acompanha o programa.",
      "Essa segunda camada não é tratamento e não é apresentada como tratamento. Existe porque um dia feito só de terapia é um dia difícil, e porque a atenção, a respiração e o movimento são coisas úteis de praticar num sítio que não seja um consultório. É opcional, e é suposto sê-lo."
    ],
    /* PLACEHOLDER: a oferta específica de mindfulness e bem-estar fica
       intencionalmente leve até confirmação. */
    mindfulnessPlaceholder: "Horário e profissionais <ph>brevemente</ph>",

    offersTitle: "A nossa oferta",
    offersIntro: "A camada não clínica, tal como está neste momento.",
    /* PLACEHOLDER: as três ofertas abaixo estão nomeadas mas ainda não
       descritas. Conteúdo, horário e profissionais a confirmar. */
    offerMeditationTitle: "Meditação",
    offerMeditationText: "Descrição <ph>brevemente</ph>",
    offerYogaTitle: "Yoga",
    offerYogaText: "Descrição <ph>brevemente</ph>",
    offerWorkshopsTitle: "Workshops",
    offerWorkshopsText: "Descrição <ph>brevemente</ph>"
  },

  /* ======================================================================
     FAMÍLIA E PESSOAS PRÓXIMAS
     ====================================================================== */

  family: {
    pageTitle: "Família e Pessoas Próximas — Avalon",
    metaDescription: "Apoio e psicoeducação para as famílias e pessoas próximas de quem está em tratamento na Avalon.",

    heroEyebrow: "Família e Pessoas Próximas",
    heroTitle: "Não está do lado de fora disto.",
    heroLede: "As famílias chegam normalmente exaustas muito antes de alguém chegar a um serviço especializado, e raramente lhes é oferecido algo que seja seu.",

    introParagraphs: [
      "Se ama alguém com Perturbação da Personalidade Borderline, é provável que já lhe tenham dito muito sobre o que está a fazer mal, e muito pouco sobre o que realmente ajuda. Pode ter passado anos a reagir a emergências, a pisar ovos, ou a ser tratado alternadamente como a única pessoa segura e como a origem do problema.",
      "Isso não é uma falha de amor nem de esforço. É o que acontece quando se pede a pessoas que giram uma condição clínica grave sem formação e sem apoio."
    ],

    resourcesTitle: "Recursos para Família e Amigos",
    resourcesLead: "Psicoeducação, porque saber o que se está a passar muda o que se faz.",
    resourcesParagraphs: [
      "Apoiar alguém que está a sofrer emocionalmente pode ser exigente, e as famílias também precisam de apoio. Na Avalon damos às famílias recursos práticos para compreenderem melhor aquilo que a pessoa que amam está a viver, e como responder de formas úteis e compassivas.",
      "Com um enfoque particular no apoio informado pela DBT, as famílias podem aprender competências de validação, comunicação mais saudável, regulação emocional, limites, e de gestão de momentos difíceis. Damos também orientação e psicoeducação a famílias que apoiam alguém com depressão, ansiedade, PSPT ou PSPT Complexa.",
      "O nosso objetivo é ajudar as famílias a sentirem-se mais informadas, mais apoiadas e melhor preparadas para caminhar ao lado de quem amam ao longo do processo de recuperação."
    ],
    /* PLACEHOLDER: o programa exato para famílias — formato, duração, se
       abrange familiares de não-doentes — não está confirmado. Não prometer
       aquilo que não se pode cumprir. */
    resourcesPlaceholder: "Formato, calendário e condições de acesso <ph>brevemente</ph>",

    accessTitle: "Contacto do Doente com Família e Amigos",
    accessLead: "A ligação faz parte da recuperação, não é uma recompensa por ela.",
    /* PLACEHOLDER: política concreta de visitas e comunicação a definir.
       Deliberadamente geral, conforme o briefing. */
    accessParagraphs: [
      "A ligação a quem se ama faz parte da recuperação, e a Avalon apoia essa ligação ao longo de todo o tratamento.",
      "O contacto com a família e os amigos é tratado como clinicamente importante, e não como um privilégio a ganhar ou a retirar. Quando é útil haver alguma estrutura em torno do contacto, essa estrutura é acordada com o doente e explicada, em vez de imposta."
    ],
    accessPlaceholder: "Política concreta de visitas e comunicação <ph>brevemente</ph>",

    ctaTitle: "Se é você quem procura ajuda em nome de outra pessoa",
    ctaBody: "Essa é uma das opções do formulário da lista de espera, e uma forma muito comum de as pessoas chegarem até nós. Não precisa da autorização da pessoa para nos fazer uma pergunta."
  },

  /* ======================================================================
     SOBRE NÓS
     ====================================================================== */

  about: {
    pageTitle: "Sobre Nós — Avalon",
    metaDescription: "Aquilo em que a Avalon acredita, como começou, a equipa clínica, e como juntar-se a ela.",

    heroEyebrow: "Sobre Nós",
    heroTitle: "Porque está este lugar a ser construído.",
    heroLede: "Um país de dez milhões de pessoas tem cerca de quatro ou cinco camas residenciais especializadas para uma das condições psiquiátricas graves mais tratáveis que existem. Todas públicas, todas partilhadas com uma população de doentes diferente.",

    beliefsTitle: "Aquilo em que Acreditamos",
    beliefsLead: "Existem abordagens abrangentes e integrativas para responder ao sofrimento emocional e às perturbações psicológicas.",
    beliefsParagraphs: [
      "Acreditamos que existem abordagens abrangentes e integrativas para responder ao sofrimento emocional e às perturbações psicológicas.",
      "O nosso trabalho reúne algumas das técnicas de psicoterapia baseadas na evidência mais eficazes, tendo a Terapia Comportamental Dialética (DBT) como pilar fundamental, sobretudo no tratamento da Perturbação da Personalidade Borderline.",
      "A nossa abordagem procura responder à pessoa como um todo, integrando ferramentas terapêuticas que apoiam a regulação emocional, a resiliência, as relações interpessoais e um bem-estar psicológico duradouro."
    ],

    originTitle: "Como Nasceu a Avalon",
    /* PLACEHOLDER: história da fundação a acrescentar. Não inventar narrativa. */
    originParagraphs: [
      "[PLACEHOLDER: história da fundação a acrescentar.]"
    ],
    originPlaceholder: "História da fundação por escrever <ph>conteúdo pendente</ph>",
    originNote: "Esta secção está deliberadamente vazia. A história verdadeira será escrita por quem lhe pertence.",

    teamTitle: "Equipa Clínica",
    teamLead: "A ser constituída neste momento.",
    /* PLACEHOLDER: sem nomes, fotografias ou biografias até as contratações
       estarem confirmadas. A grelha abaixo está estruturada para que um cartão
       (foto, nome, credencial, uma linha) possa ser inserido diretamente. */
    teamParagraphs: [
      "A equipa clínica da Avalon está a ser construída segundo padrões alinhados com a DBT Linehan Board of Certification, com supervisão semanal estruturada e uma equipa de consultadoria formal como parte do modelo, e não como um acrescento.",
      "As biografias com nomes serão publicadas à medida que as contratações forem confirmadas."
    ],
    teamPlaceholder: "Nomes, fotografias e biografias da equipa <ph>brevemente</ph>",
    teamCardPhotoLabel: "Fotografia brevemente",
    teamCardNameOne: "[Nome]",
    teamCardCredentialOne: "Médico Psiquiatra",
    teamCardNameTwo: "[Nome]",
    teamCardCredentialTwo: "Psicólogo Clínico, DBT",
    teamCardNameThree: "[Nome]",
    teamCardCredentialThree: "Diretor Clínico",
    teamCardNameFour: "[Nome]",
    teamCardCredentialFour: "Enfermeiro de Saúde Mental",

    joinTitle: "Junte-se à Nossa Equipa",
    joinLead: "Um dos únicos percursos estruturados de formação em DBT em Portugal.",
    joinParagraphs: [
      "Esta é a parte do projeto a que os clínicos costumam responder primeiro. A Avalon está a construir um dos únicos percursos estruturados de formação e supervisão em DBT em Portugal, em parceria com um instituto afiliado ao Behavioral Tech Institute — a organização de formação fundada por Marsha Linehan, criadora da DBT.",
      "Se é um clínico português que sempre quis formar-se devidamente em DBT, já conhece o problema: quase não houve onde o fazer no país. Chegar a um padrão genuíno tem geralmente significado ir para o estrangeiro, a expensas próprias, e regressar a um sistema sem estrutura de supervisão onde praticar.",
      "É isso que este percurso existe para mudar. Formação estruturada, supervisão a sério, e uma equipa de consultadoria que se reúne todas as semanas — tanto pelos clínicos como pelos doentes.",
      "Gostaríamos de receber contactos de médicos psiquiatras, psicólogos clínicos, psicoterapeutas e enfermeiros de saúde mental. Se tem interesse mas não tem a certeza de já ter as qualificações, escreva na mesma e diga-o."
    ],
    /* PLACEHOLDER: instituto parceiro a nomear quando o acordo for público;
       funções, contratos e datas de início a confirmar. */
    joinPlaceholder: "Instituto parceiro, vagas abertas e datas de início <ph>a confirmar</ph>"
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
    altRoomMap: "Um quarto num piso superior, fotografado antes das obras.",
    altRoomGuest: "Um quarto de hóspedes da casa, fotografado antes das obras.",
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
