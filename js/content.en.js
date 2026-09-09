/* ==========================================================================
   AVALON — English content
   --------------------------------------------------------------------------
   ALL user-facing copy on the site lives in this file. Nothing is hardcoded
   into the HTML. The markup carries `data-i18n="someKey"` attributes; i18n.js
   looks each key up here and writes the text in.

   TO EDIT COPY: change the strings below. Do not touch the HTML.

   Every open item is marked with the token [PLACEHOLDER: ...] inside the
   string itself AND with a "PLACEHOLDER:" comment on the line above, so both
   a reader of the site and a reader of the code can find every one. The full
   index is in PLACEHOLDERS.md.

   Value types understood by i18n.js:
     "a string"        -> written as text
     ["a", "b"]        -> written as a sequence of <p> or <li> elements
   The token <ph>...</ph> inside a string renders as the small dashed
   "placeholder" tag on the page.
   ========================================================================== */

window.avalonContent = window.avalonContent || {};

window.avalonContent.en = {

  /* ======================================================================
     GLOBAL — brand, navigation, footer, forms
     ====================================================================== */

  brand: {
    /* PLACEHOLDER: logo not final. This text wordmark stands in for it. */
    wordmark: "Avalon",
    footerBlurb: "A residential clinic for Dialectical Behaviour Therapy, taking shape in an 1887 house in the hills of Sintra."
  },

  nav: {
    home: "Home",
    programs: "Our Programs",
    house: "The House",
    admissions: "Admissions",
    treatments: "Treatments",
    solutions: "Solutions",
    family: "Family",
    familyLong: "Family and Loved Ones",
    about: "About Us",
    waitlist: "Join the waitlist",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
    switchToEnglish: "Switch to English",
    switchToPortuguese: "Mudar para portugues",
    skipToContent: "Skip to main content"
  },

  navSub: {
    residence: "Residence",
    dayHospital: "Day Hospital",
    outpatient: "Outpatient",
    activities: "Activities",
    therapies: "Therapies",
    rooms: "Rooms",
    commonAreas: "Common Areas",
    outdoorSpaces: "Outdoor Spaces",
    whySintra: "Why Sintra",
    admissionProcess: "Admission Process",
    trackProgress: "How We Track Progress",
    waitlistForm: "Join Our Waitlist",
    bpd: "BPD",
    bpdLong: "Borderline Personality Disorder",
    depression: "Depression",
    anxiety: "Anxiety",
    ptsd: "PTSD",
    dbt: "DBT",
    emdr: "EMDR",
    mindfulness: "Mindfulness",
    familyResources: "Resources for Family and Friends",
    familyAccess: "Patient Access to Family and Friends",
    beliefs: "What We Believe In",
    origin: "How Avalon Started",
    medicalTeam: "Medical Team",
    joinTeam: "Join Our Team"
  },

  /* ---- The soft, ever-present call to action ---------------------------- */
  cta: {
    eyebrow: "Admissions are open",
    title: "Join the waitlist.",
    body: "Avalon is not open yet. The waitlist is how we stay in touch with the people who want a place when it is — and it is the simplest way to start a conversation with us. It commits you to nothing at all.",
    button: "Join the waitlist",
    secondary: "Read how admission works",
    aside: "If you would rather just talk to someone first, say so in the message field. That is a completely normal way to begin."
  },

  /* ---- Footer ----------------------------------------------------------- */
  footer: {
    navigateTitle: "Explore",
    programsTitle: "Our Programs",
    careTitle: "Care",
    contactTitle: "Contact",
    /* PLACEHOLDER: confirm the public contact address and phone number before launch. */
    email: "[PLACEHOLDER: email address]",
    phone: "[PLACEHOLDER: phone number]",
    /* PLACEHOLDER: confirm the street address to publish, if any, during renovation. */
    address: "Sintra, Portugal <ph>address to confirm</ph>",
    legalNote: "Avalon is a clinic in development. Nothing on this site is an offer of treatment or a substitute for individual clinical advice.",
    copyright: "Avalon. All rights reserved.",
    /* PLACEHOLDER: privacy policy and terms pages to be drafted before launch. */
    privacy: "Privacy Policy <ph>to follow</ph>",
    terms: "Terms <ph>to follow</ph>"
  },

  /* ---- Crisis notice — required on any mental health site ---------------- */
  crisis: {
    title: "If you need help right now",
    /* PLACEHOLDER: confirm these numbers with the clinical team before launch.
       112 is the European emergency number; SNS 24 is Portugal's national
       health line. */
    body: "Avalon is not an emergency service and cannot respond to a crisis. If you or someone you love is in immediate danger, call 112. In Portugal you can also reach SNS 24 on 808 24 24 24, at any hour, for health advice including mental health. <ph>numbers to confirm</ph>"
  },

  /* ---- Forms ------------------------------------------------------------ */
  forms: {
    labelName: "Full name",
    labelEmail: "Email",
    labelPhone: "Phone",
    labelRelationship: "I am enquiring as",
    labelMessage: "Anything you would like us to know",
    labelSpecialty: "Area of specialty",
    labelNote: "A short note, or a link to your CV",
    optional: "optional",
    relationshipDefault: "Please choose",
    relationshipSelf: "Myself",
    relationshipFamily: "A family member or loved one",
    relationshipClinician: "A referring clinician",
    /* PLACEHOLDER: specialty list to be confirmed with the clinical team. */
    specialtyDefault: "Please choose",
    specialtyPsychiatry: "Psychiatry",
    specialtyPsychology: "Clinical psychology",
    specialtyNursing: "Mental health nursing",
    specialtyPsychotherapy: "Psychotherapy",
    specialtyOther: "Something else",
    submitWaitlist: "Join the waitlist",
    submitTeam: "Send your interest",
    consent: "We will only use your details to reply to you about Avalon. We will not share them with anyone else.",
    errorRequired: "Please fill this in so we can reply.",
    errorEmail: "Please check this email address.",
    errorSelect: "Please choose an option.",
    /* PLACEHOLDER: no form backend is connected yet. Submissions are handled
       in the browser only and are not sent or stored anywhere. */
    demoNotice: "This form is not connected to a mailbox yet. <ph>backend to connect</ph>",
    waitlistConfirmTitle: "Thank you. We have you.",
    waitlistConfirmBody: [
      "Someone from Avalon will write to you personally. Not an automated sequence, and not a sales call — a real reply from a real person, so you can ask whatever you actually want to ask.",
      "Reaching out is often the hardest part, and you have done it. There is nothing else you need to do today."
    ],
    teamConfirmTitle: "Thank you for getting in touch.",
    teamConfirmBody: [
      "We will come back to you about where things stand with the clinical team and the training pathway.",
      "Avalon is being built slowly and deliberately, so timelines are honest rather than urgent. We would rather tell you exactly where we are than rush you."
    ]
  },

  /* ======================================================================
     HOME
     ====================================================================== */

  home: {
    pageTitle: "Avalon — Residential DBT for Borderline Personality Disorder, Sintra",
    metaDescription: "Avalon is a residential clinic in Sintra, Portugal, specialising in Dialectical Behaviour Therapy for Borderline Personality Disorder, with care for depression, anxiety and PTSD.",

    heroEyebrow: "Sintra, Portugal",
    heroTitle: "A house built for the work of getting better.",
    heroLede: "Avalon is a residential clinic specialising in Dialectical Behaviour Therapy for Borderline Personality Disorder — with dedicated care for depression, anxiety and PTSD.",
    /* PLACEHOLDER: opening date not confirmed. */
    heroCaption: "The house, built in 1887, seen from its upper terrace. In renovation now, opening <ph>date to confirm</ph>",
    heroScrollHint: "Scroll",

    missionEyebrow: "Why we exist",
    missionStatement: "Portugal has almost no specialist residential capacity for Borderline Personality Disorder. Avalon exists to close that gap.",

    introEyebrow: "What Avalon is",
    introTitle: "One clinic, one protocol, three levels of intensity.",
    introParagraphs: [
      "Avalon is a private residential clinic taking shape in a historic house above Sintra. It offers a full continuum of care — residential, day hospital and outpatient — organised around Dialectical Behaviour Therapy, the most extensively validated treatment there is for Borderline Personality Disorder.",
      "Our patients are adults who come voluntarily, and who are clinically stable at the point they arrive. Avalon is not a crisis service. People in acute crisis, or under involuntary treatment, are helped towards the right care elsewhere.",
      "The house is in renovation now. The waitlist is open, and joining it commits you to nothing."
    ],
    introLink: "Read about our programs",

    trustOneLabel: "DBT Linehan Board aligned",
    trustOneText: "Clinical training and supervision built to standards aligned with the DBT Linehan Board of Certification.",
    trustTwoLabel: "Evidence-based, and measured",
    trustTwoText: "One validated protocol, delivered properly, with progress tracked using the same instruments used in DBT research.",
    trustThreeLabel: "Sintra, Portugal",
    trustThreeText: "An 1887 house and a historic garden of roughly 5,557 square metres, in the hills of the Serra de Sintra.",

    exploreEyebrow: "Explore Avalon",
    exploreTitle: "Where to start.",
    exploreLead: "Six ways into the same place. Take whichever one matches the question you actually came here with.",

    cardProgramsTitle: "Our Programs",
    cardProgramsText: "Residential, day hospital and outpatient care, delivered by one team, at the intensity a person needs right now.",
    cardTreatmentsTitle: "Treatments",
    cardTreatmentsText: "BPD, depression, anxiety and PTSD — what they are, and why specialist treatment changes the outcome.",
    cardSolutionsTitle: "Solutions",
    cardSolutionsText: "DBT, EMDR and mindfulness: the methods the programme is actually built from.",
    cardHouseTitle: "The House",
    cardHouseText: "An 1887 mansion, its rooms and common spaces, and a garden of some 5,557 square metres.",
    cardFamilyTitle: "Family and Loved Ones",
    cardFamilyText: "Recovery rarely happens in isolation. Support for the people standing alongside it.",
    cardAdmissionsTitle: "Admissions",
    cardAdmissionsText: "Who Avalon is for, how admission works, and the one short form that starts it.",
    cardLinkLabel: "Read more",

    sintraBandEyebrow: "Why Sintra",
    sintraBandTitle: "The setting was a clinical decision before it was an aesthetic one.",
    sintraBandBody: "Dense urban environments sustain activation in the amygdala — the same structure that sits underneath emotional dysregulation in BPD. Proximity to green space is associated with the opposite. That is the argument for Sintra.",
    sintraBandLink: "Read the reasoning",

    quoteEyebrow: "From our founder",
    /* PLACEHOLDER: founder quote is holding text. To be written or approved by
       the founder before launch. Attribution also pending. */
    quoteText: "There are people in this country who have been told, over and over, that there is nowhere for them to go. We are building the place.",
    quoteAttribution: "[FOUNDER NAME], Founder <ph>quote and attribution pending</ph>",

    aboutEyebrow: "About us",
    aboutTitle: "Built by people who could not find this place, so decided to make it.",
    aboutBody: "Avalon began as a response to a gap that is easy to state and hard to live with: a country of ten million people with roughly four or five specialist residential beds for one of the most treatable serious psychiatric conditions there is.",
    aboutLink: "About Avalon"
  },

  /* ======================================================================
     OUR PROGRAMS
     ====================================================================== */

  programs: {
    pageTitle: "Our Programs — Avalon",
    metaDescription: "Residence, Day Hospital, Outpatient care, activities and therapies at Avalon, a residential DBT clinic in Sintra, Portugal.",

    heroEyebrow: "Our Programs",
    heroTitle: "Care that steps down in intensity, never in quality.",
    heroLede: "One clinical programme, delivered at three levels of intensity, so treatment can follow a person as they steady — without making them start again with a new team.",

    introParagraphs: [
      "Most people do not need the same intensity of care for the whole of their recovery, and most systems handle that badly: a person improves, is discharged, and lands somewhere else entirely, with a different team and a different model, and loses much of what they had built.",
      "Avalon is designed as one continuum. The protocol, the language and — as far as possible — the people stay the same as intensity comes down."
    ],

    residenceTitle: "Residence",
    residenceLead: "The residential program.",
    residenceParagraphs: [
      "Avalon's residential program is for adults who are ready for structured, immersive treatment away from daily pressures, while remaining fully voluntary participants in their own care.",
      "Residential treatment is not about being removed from your life. It is about being given enough room, and enough support, to practise new skills before you take them back into a life that will test them."
    ],
    /* PLACEHOLDER: no bed count, room detail, length of stay or daily schedule
       until confirmed by the clinical team. Kept intentionally general. */
    residencePlaceholder: "Programme length, daily structure and residential capacity <ph>to follow</ph>",

    dayHospitalTitle: "Day Hospital",
    dayHospitalLead: "Full clinical intensity, evenings at home.",
    dayHospitalParagraphs: [
      "For patients who need intensive treatment during the day but can return home or to independent living in the evening, Avalon's Day Hospital offers the same clinical intensity as the residential program on a nine to five schedule.",
      "For many people this is the right first step. For others it is the natural step down from residence, and a way of testing new skills against real evenings and real weekends while the full weight of the programme is still behind them."
    ],
    /* PLACEHOLDER: exact schedule to follow. */
    dayHospitalPlaceholder: "Exact daily and weekly schedule <ph>to follow</ph>",

    outpatientTitle: "Outpatient",
    outpatientLead: "The same protocol, at the pace of an ordinary life.",
    outpatientParagraphs: [
      "As patients progress, care steps down in intensity, not in quality. Outpatient consultations and therapy continue the same evidence-based protocol at a pace suited to daily life outside the clinic.",
      "Individual therapy, skills work and psychiatric review continue — around a job, a family, a degree. This is usually where the gains made in more intensive care get consolidated into something durable."
    ],

    activitiesTitle: "Activities",
    activitiesLead: "Treatment is not the only thing that happens here.",
    activitiesParagraphs: [
      "Alongside clinical treatment, Avalon offers a program of therapeutic and community activities designed to support recovery in daily life."
    ],
    /* PLACEHOLDER: no specific activities list yet. */
    activitiesPlaceholder: "Specific activities programme <ph>to follow</ph>",

    therapiesTitle: "Therapies",
    therapiesLead: "What actually happens, week to week.",
    therapiesIntro: "Full DBT is not a single therapy but a set of components that only work properly together. Avalon delivers all of them.",

    therapyIndividualTitle: "Individual DBT therapy",
    therapyIndividualText: "Every patient works with an individual DBT therapist. This is the thread that runs through everything else: a structured weekly session where skills stop being abstract and get applied to whatever is actually happening in a person's life this week.",

    therapySkillsTitle: "DBT skills groups",
    therapySkillsText: "Skills are taught in a group, in four modules. People often expect the group to be the hard part and find it is the part they miss most afterwards.",

    moduleMindfulnessTitle: "Mindfulness",
    moduleMindfulnessText: "Noticing what is happening, inside and around you, without immediately having to act on it.",
    moduleDistressTitle: "Distress Tolerance",
    moduleDistressText: "Getting through the worst moments without making them worse — crisis survival skills, and the harder practice of accepting what cannot be changed right now.",
    moduleEmotionTitle: "Emotion Regulation",
    moduleEmotionText: "Understanding what emotions are doing, reducing vulnerability to them, and changing the ones that do not fit the facts.",
    moduleInterpersonalTitle: "Interpersonal Effectiveness",
    moduleInterpersonalText: "Asking for what you need, saying no, and keeping both the relationship and your self-respect intact while you do it.",

    therapyPsychiatryTitle: "Psychiatric consultation",
    therapyPsychiatryText: "Regular psychiatric review sits alongside the therapy, not above it. Medication is considered where it helps and questioned where it does not.",

    therapyConsultTitle: "The clinical consultation team",
    therapyConsultText: "Once a week, the clinicians treating you meet as a team — not for administration, but to help each other deliver the therapy properly. In DBT this is not optional; the consultation team is a formal part of the treatment model, on the principle that therapists doing this work need support too. We mention it because it is one of the clearest signals of whether a programme is genuinely doing DBT, or borrowing the name."
  },

  /* ======================================================================
     THE HOUSE
     ====================================================================== */

  house: {
    pageTitle: "The House — Avalon, Sintra",
    metaDescription: "An 1887 house in Sintra with a historic garden of roughly 5,557 square metres: rooms, common areas, outdoor spaces, and why Sintra was chosen.",

    heroEyebrow: "The House",
    heroTitle: "An 1887 house, and the garden that came with it.",
    heroLede: "Avalon is taking shape inside a historic mansion in Sintra. The purchase completed in May 2026; the house is in renovation now.",
    heroCaption: "The facade from the lane below. Photographed during the purchase, before renovation began.",

    introParagraphs: [
      "The building dates from 1887 and has the proportions of its period: high ceilings, deep windows, a staircase that takes its time, painted tile at the thresholds. Very little about it is neutral, and that is deliberate — a person in treatment is not helped by feeling institutional.",
      "Renovation is underway. The photographs on this page show the house as it was bought, not as it will open. They are here because they are honest, and because the bones of the place are the reason it was chosen."
    ],

    roomsTitle: "Rooms",
    /* PLACEHOLDER: no room counts, room types, or interior specifics until the
       renovation and clinical fit-out are confirmed. Warm general language only. */
    roomsParagraphs: [
      "Thoughtfully designed spaces for rest and recovery — quiet, private, and made for actually sleeping in rather than merely being accommodated in.",
      "The rooms are being redesigned as part of the renovation, with the clinical team involved in the specification from the start."
    ],
    roomsPlaceholder: "Room detail, numbers and photography <ph>to follow</ph>",
    roomsMediaNote: "Photography of the finished rooms to follow",

    commonAreasTitle: "Common Areas",
    /* PLACEHOLDER: general only until the renovation is complete. */
    commonAreasParagraphs: [
      "Shared rooms for eating together, sitting together, and being quietly in the same space as other people without having to perform anything. In a residential program these rooms carry more weight than they look like they do.",
      "The salon, the dining room and the upper corridors are being restored rather than replaced."
    ],
    commonAreasPlaceholder: "Final layout and use of the common rooms <ph>to follow</ph>",

    outdoorTitle: "Outdoor Spaces",
    outdoorLead: "A historic garden of roughly 5,557 square metres.",
    outdoorParagraphs: [
      "The property includes a historic garden of approximately 5,557 square metres, laid out across the slope in stone terraces. There are old stone walls holding the levels, water tanks, and a well — the working infrastructure of a nineteenth-century Sintra garden, most of it still in place.",
      "Steps run down through the planting from the house to the lower level. In places the garden has grown over itself completely; camellias, ferns and mature trees have had decades to do as they liked. Restoring it is part of the project rather than a detail of it.",
      "It matters clinically as well as aesthetically. A garden this size means a person can go outside, walk, and be genuinely alone without leaving the property or asking anyone's permission."
    ],

    sintraTitle: "Why Sintra",
    sintraLead: "Chosen on clinical grounds before aesthetic ones.",
    sintraParagraphs: [
      "There is now a consistent body of research on what environments do to the brain's threat system, and it is specific enough to build on.",
      "Dense urban living is associated with sustained hyperactivation of the amygdala — the same structure that, in Borderline Personality Disorder, is repeatedly found to be over-reactive and slow to settle. The amygdala is, in a real sense, the neurobiological substrate of emotional dysregulation. Asking someone to do the hardest psychological work of their life in an environment that keeps that system switched on is a strange way to begin.",
      "The corresponding finding is the more useful one. Proximity to green space is associated with reduced amygdala activation, and with measurable structural differences in the brain regions involved in regulating emotion.",
      "That is the argument for Sintra: woodland, Atlantic air off the Serra, and a microclimate that has drawn people here to recover for two centuries. None of this replaces treatment. The therapy does the work. But the setting decides how much of a person's capacity is available to do it with."
    ],
    sintraCaption: "Looking north from the terrace towards the Castelo dos Mouros."
  },

  /* ======================================================================
     ADMISSIONS
     ====================================================================== */

  admissions: {
    pageTitle: "Admissions — Avalon",
    metaDescription: "Who Avalon is for, how the admission process works, how progress is measured, and how to join the waitlist.",

    heroEyebrow: "Admissions",
    heroTitle: "How someone comes to Avalon.",
    heroLede: "Admission is a conversation before it is a decision. Nothing about the first step is binding, and nobody is assessed on the strength of a form.",

    criteriaTitle: "Who Avalon is for",
    criteriaLead: "Being clear about this early spares people a difficult conversation later.",
    criteriaIntro: "Avalon admits adults who:",
    criteriaList: [
      "are 18 or over;",
      "are coming voluntarily, and want to be here;",
      "are clinically stabilised rather than in acute crisis at the point of admission;",
      "do not have a primary substance use disorder as their presenting diagnosis."
    ],
    criteriaNote: "If Avalon is not the right setting, we will say so, and we will try to point towards something that is. Being turned down here is not a judgement about anyone's worth or seriousness — it is a judgement about fit, and getting it wrong helps nobody.",

    processTitle: "Admission Process",
    processLead: "Four steps, at a human pace.",
    /* PLACEHOLDER: the operational detail of each step — who leads it, how long
       it takes, what documentation is required — must be confirmed with the
       clinical team before launch. The shape below is standard and safe. */
    processPlaceholder: "Exact operational steps <ph>confirm with clinical team before launch</ph>",

    stepOneTitle: "Initial contact",
    stepOneText: "You write to us, or join the waitlist, or a clinician refers you. Someone replies personally. Nothing is assessed at this stage; it is a first conversation about whether this is worth pursuing.",
    stepTwoTitle: "Clinical screening call",
    stepTwoText: "A call with a clinician to understand the situation, the history and what has already been tried, and to answer whatever you want to ask. This is as much about you assessing us as us assessing you.",
    stepThreeTitle: "Assessment",
    stepThreeText: "A fuller assessment, in person or remotely, covering diagnosis, risk, current stability, and what level of care actually fits. Family are often involved here, with the patient's agreement.",
    stepFourTitle: "Admission decision",
    stepFourText: "A clear answer, with the reasoning behind it, and — if Avalon is right — a start date and a plan. If it is not right, a considered view of what would be.",

    progressTitle: "How We Track Progress",
    progressLead: "Progress should never be only a feeling.",
    progressParagraphs: [
      "Avalon tracks outcomes using validated clinical measures, taken at intervals across treatment. These are the same standardised instruments used in DBT research worldwide, which means your progress can be compared against something other than an impression.",
      "In practice this is quiet and undramatic: short, structured questionnaires at set points, reviewed with your therapist. The point is not to grade anyone. It is so that when treatment is working we can show you where, and when it is not working we find out early enough to change it.",
      "We measure what matters, with the same tools the research uses — so progress is never just a feeling, it is tracked."
    ],
    /* PLACEHOLDER: the specific instruments and measurement intervals to be
       confirmed and named by the clinical team. */
    progressPlaceholder: "Named instruments and measurement intervals <ph>to confirm</ph>",

    waitlistTitle: "Join Our Waitlist",
    waitlistLead: "Short, and it commits you to nothing.",
    waitlistParagraphs: [
      "Avalon is not open yet, so the waitlist is how we keep in touch with the people who want a place when it is. It is also, in practice, how most conversations with us start.",
      "Five fields. No intake questionnaire, no history, nothing you have to steel yourself to write. If you would rather just talk to someone before anything else, say that in the message and we will do that instead."
    ]
  },

  /* ======================================================================
     TREATMENTS
     ====================================================================== */

  treatments: {
    pageTitle: "Treatments — Avalon",
    metaDescription: "Patient-facing explanations of Borderline Personality Disorder, depression, anxiety and PTSD, and why specialist treatment matters.",

    heroEyebrow: "Treatments",
    heroTitle: "What we treat, explained plainly.",
    heroLede: "Written for someone trying to understand what is happening to them, or to someone they love — not for a clinical audience.",

    introParagraphs: [
      "A diagnosis is a useful shorthand, not a description of a person. What follows is meant to be recognisable rather than exhaustive: enough to know whether you are in the right place, and what specialist treatment would actually involve.",
      "None of it is a substitute for an assessment by a clinician who knows your situation."
    ],

    /* ---- BPD ---- */
    bpdTitle: "Borderline Personality Disorder",
    bpdLead: "The condition Avalon was built around.",
    bpdWhatTitle: "What it is",
    bpdWhatParagraphs: [
      "Borderline Personality Disorder is a disorder of emotional regulation. The emotional system responds faster, harder and for longer than it does in most people — feelings arrive at full volume, and take much longer to come back down.",
      "Almost everything else follows from that. Relationships become intense and precarious, because the fear of being left is not a mild worry but a genuine emergency. Identity becomes unstable, because it is difficult to build a settled sense of who you are on ground that keeps moving. Impulsive behaviour, self-harm and a chronic feeling of emptiness are often, at bottom, attempts to manage emotion that has become unbearable.",
      "None of this reflects a flaw in someone's character, and it is not manipulation, and it is not attention-seeking. It is a nervous system doing too much, without the skills to bring itself back down — and skills can be taught."
    ],
    bpdSignsTitle: "Common signs",
    bpdSignsList: [
      "Emotions that arrive suddenly, at full intensity, and take hours or days to settle",
      "Intense, unstable relationships that swing between closeness and rupture",
      "Real fear of abandonment, and frantic efforts to avoid it",
      "An unstable or shifting sense of who you are",
      "Impulsive behaviour that makes sense in the moment and not afterwards",
      "Self-harm, or recurring thoughts of it",
      "Chronic emptiness",
      "Anger that feels disproportionate even to you",
      "Feeling disconnected from yourself or from reality when under stress"
    ],
    bpdMisdiagnosisTitle: "Why it is so often missed",
    bpdMisdiagnosisParagraphs: [
      "BPD is frequently misdiagnosed, most often as bipolar disorder, depression, or treatment-resistant anxiety. The reasons are understandable: the mood shifts look similar from the outside, depression genuinely is present much of the time, and the person in front of the clinician is usually there because of a crisis rather than a pattern.",
      "The cost of getting it wrong is years — years of treatment aimed at the wrong target, and the reasonable conclusion, on the patient's side, that nothing works and they are the problem.",
      "It is worth saying plainly: BPD is one of the more treatable serious psychiatric conditions, and the evidence for that is strong. Many people meet criteria at one point in their lives and not at another. The prognosis is genuinely good when the treatment is the right one."
    ],
    bpdWhySpecialistTitle: "Why specialist treatment matters",
    bpdWhySpecialistParagraphs: [
      "General mental health care is not designed for this. Supportive therapy without structure tends not to help and can make things harder; medication alone has no strong evidence base for BPD itself.",
      "What does have evidence is structured, protocol-driven therapy — above all DBT, which was developed specifically for this population and has been tested more thoroughly than any alternative.",
      "That is the whole argument for a specialist setting. Not a nicer building: a team trained in one model, delivering it completely, with the supervision structure that keeps it honest."
    ],
    /* PLACEHOLDER: mortality and suicide data appears once, gently, with a
       supportive frame, and is never repeated or used as an opening line —
       per the brief. Wording to be reviewed by the clinical team. */
    bpdCalloutParagraphs: [
      "BPD carries a real risk of suicide, and we are not going to pretend otherwise on a page written for people living with it. We say it once, here, and only for this reason: that risk falls substantially with proper treatment. If you are somewhere dark right now, that is exactly the circumstance this kind of care exists for. Please talk to someone today — a doctor, a crisis line, or us."
    ],

    /* ---- Depression ---- */
    depressionTitle: "Depression",
    depressionLead: "More than low mood, and treatable.",
    depressionWhatParagraphs: [
      "Depression is a persistent change in mood, energy and thinking that lasts weeks or months and interferes with ordinary life. It is not sadness, and it does not lift because circumstances improve or because someone tries harder.",
      "Its most misleading feature is that it argues in its own favour. It tells you that this is simply what life is, that you have always been like this, and that nothing would help. Those are symptoms, presenting themselves as conclusions."
    ],
    depressionSignsTitle: "Common signs",
    depressionSignsList: [
      "Low or flat mood most of the day, most days, for two weeks or longer",
      "Loss of interest or pleasure in things that used to matter",
      "Exhaustion out of proportion to activity",
      "Sleeping much more or much less than usual",
      "Appetite and weight changes",
      "Difficulty concentrating or making ordinary decisions",
      "Guilt or worthlessness that does not respond to reassurance",
      "Thoughts of death or of not wanting to be here"
    ],
    depressionWhyParagraphs: [
      "Depression is very common alongside BPD, and the two are often confused — which matters, because they need different things. Depression that is really part of an emotional regulation disorder responds poorly to antidepressants alone, and well to skills-based treatment.",
      "At Avalon, depression is treated in its own right where it is the primary problem, and treated as part of the whole picture where it is not."
    ],

    /* ---- Anxiety ---- */
    anxietyTitle: "Anxiety",
    anxietyLead: "A threat system that will not stand down.",
    anxietyWhatParagraphs: [
      "Anxiety is a normal and useful system running when there is nothing to run from. The body prepares for danger — heart, breath, muscles, attention — and the mind supplies a reason afterwards.",
      "It becomes a disorder when it is persistent, out of proportion, and shaping decisions: when life narrows around the things being avoided. That narrowing is usually the real damage, more than the fear itself."
    ],
    anxietySignsTitle: "Common signs",
    anxietySignsList: [
      "Worry that is difficult to stop or control",
      "Physical symptoms: racing heart, tight chest, breathlessness, nausea, tension",
      "Panic attacks that peak within minutes and feel like a medical emergency",
      "Avoiding places, people or situations, and a life that keeps getting smaller",
      "Disturbed sleep and constant scanning for what might go wrong",
      "Exhaustion from vigilance that never switches off"
    ],
    anxietyWhyParagraphs: [
      "Anxiety responds well to structured, evidence-based treatment, and several of the DBT skill modules — distress tolerance and mindfulness in particular — target exactly the mechanisms that keep it going.",
      "Where anxiety sits alongside BPD or trauma, treating it in isolation tends to disappoint. Treating it as part of one formulation works better."
    ],

    /* ---- PTSD ---- */
    ptsdTitle: "PTSD",
    ptsdLead: "When the nervous system has not been told it is over.",
    ptsdWhatParagraphs: [
      "Post-Traumatic Stress Disorder can follow an event, or a long period, in which a person was overwhelmed, frightened or unsafe. The memory does not settle into the past the way other memories do; it stays live, and can be triggered into the present with all its original force.",
      "People often assume PTSD requires a single dramatic event. It does not. Prolonged or repeated experiences — particularly early ones, particularly in relationships that were supposed to be safe — are among the most common origins, and are strongly represented among people who also meet criteria for BPD."
    ],
    ptsdSignsTitle: "Common signs",
    ptsdSignsList: [
      "Intrusive memories, flashbacks or nightmares",
      "Reacting to reminders as though the event is happening now",
      "Avoiding people, places or conversations connected to it",
      "Feeling permanently on guard, startling easily, unable to settle",
      "Numbness, or a sense of watching yourself from outside",
      "Sleep that does not restore anything",
      "Beliefs formed at the time that have never been revisited: that it was your fault, that you are damaged, that nowhere is safe"
    ],
    ptsdWhyParagraphs: [
      "Trauma treatment has to be sequenced properly. Processing traumatic memory before a person has the capacity to tolerate the distress it raises can destabilise them, which is why Avalon treats stabilisation and skills as the ground floor rather than a preliminary.",
      "Once that ground is there, EMDR and other trauma-focused work can begin, at a pace the person sets."
    ],
    ptsdLink: "Read about EMDR"
  },

  /* ======================================================================
     SOLUTIONS
     ====================================================================== */

  solutions: {
    pageTitle: "Solutions — DBT, EMDR and Mindfulness at Avalon",
    metaDescription: "Dialectical Behaviour Therapy, EMDR and mindfulness at Avalon: what each method is, and how it is used in the programme.",

    heroEyebrow: "Solutions",
    heroTitle: "The methods the programme is built from.",
    heroLede: "Avalon is not eclectic. One model carries the treatment, and everything else supports it.",

    /* ---- DBT ---- */
    dbtTitle: "Dialectical Behaviour Therapy",
    dbtLead: "The core of everything Avalon does.",
    dbtWhatTitle: "What DBT is",
    dbtWhatParagraphs: [
      "DBT was developed by Marsha Linehan, a clinical psychologist who built it for people other treatments were failing — and who later disclosed that she had been one of them. It is the most extensively validated protocol that exists for Borderline Personality Disorder.",
      "Its central move is in the name. Dialectical means holding two apparently opposed things at once: you are doing the best you can with what you have, and you need to change. Most therapies lean to one side. Treatments that only push for change feel invalidating and people leave; treatments that only offer acceptance feel warm and change nothing. DBT insists on both, deliberately, all the way through.",
      "In practice it is highly structured: individual therapy, skills training in four modules, coaching for the moments when skills are needed outside a session, and a consultation team supporting the clinicians. Its results come from delivering all of those components, not a selection of them."
    ],
    dbtModulesTitle: "The four skill modules",
    dbtModulesIntro: "The skills are the part people carry out of treatment with them.",
    dbtAtAvalonTitle: "DBT at Avalon",
    dbtAtAvalonParagraphs: [
      "Avalon delivers comprehensive DBT rather than DBT-informed care — a distinction that sounds like semantics and is not. Clinical training and supervision are built to standards aligned with the DBT Linehan Board of Certification, the body that certifies adherence to the model as it was actually tested.",
      "The treating team meets weekly as a formal clinical consultation team. This is a structural requirement of the model, not an optional extra, and it is one of the few reliable outward signs that a programme is doing the real thing."
    ],
    /* PLACEHOLDER: keep DBT-at-Avalon general until staffing and programme
       structure are confirmed. No named clinicians, ratios or schedules. */
    dbtAtAvalonPlaceholder: "Programme structure and team detail <ph>to follow</ph>",
    dbtLink: "See the therapies in the programme",

    /* ---- EMDR ---- */
    emdrTitle: "EMDR",
    emdrLead: "Eye Movement Desensitisation and Reprocessing.",
    emdrWhatParagraphs: [
      "EMDR is an evidence-based therapy for trauma. It works from the premise that some memories are stored unprocessed — held in the nervous system in their original, undigested form, which is why they can be triggered into the present with all their initial intensity.",
      "In a session, the person brings the memory to mind while following a repeated side-to-side stimulus, usually eye movements, sometimes taps or tones. Over repetitions, the memory typically loses its charge. It is still remembered; it stops behaving like something that is happening now.",
      "The mechanism is still debated. The outcomes are not: EMDR is recommended for PTSD by major clinical guidelines internationally, and it does not require anyone to narrate their trauma in detail, which for some people is the difference between starting treatment and not."
    ],
    emdrAtAvalonTitle: "EMDR at Avalon",
    /* PLACEHOLDER: EMDR provision at Avalon is not yet detailed. */
    emdrAtAvalonParagraphs: [
      "EMDR will be offered as part of the programme, sequenced after stabilisation and skills, at a pace the patient sets."
    ],
    emdrAtAvalonPlaceholder: "EMDR provision and staffing detail <ph>to follow</ph>",

    /* ---- Mindfulness ---- */
    mindfulnessTitle: "Mindfulness",
    mindfulnessLead: "Yoga, meditation and workshops, alongside the clinical work.",
    mindfulnessParagraphs: [
      "Mindfulness has two lives at Avalon. It is one of the four DBT skill modules, taught clinically and practised as a skill — and it is also a quieter, non-clinical layer running alongside the programme: yoga, meditation, and workshops.",
      "That second layer is not treatment and is not presented as treatment. It exists because a day made only of therapy is a hard day, and because attention, breath and movement are useful things to practise somewhere other than a consulting room.",
      "It is optional, and it is meant to be."
    ],
    /* PLACEHOLDER: specific mindfulness and wellness offering intentionally
       light until confirmed. */
    mindfulnessPlaceholder: "Schedule and practitioners <ph>to follow</ph>"
  },

  /* ======================================================================
     FAMILY AND LOVED ONES
     ====================================================================== */

  family: {
    pageTitle: "Family and Loved Ones — Avalon",
    metaDescription: "Support and psychoeducation for the families and loved ones of people in treatment at Avalon.",

    heroEyebrow: "Family and Loved Ones",
    heroTitle: "You are not on the outside of this.",
    heroLede: "Families are usually exhausted long before anyone reaches a specialist service, and are rarely offered anything of their own.",

    introParagraphs: [
      "If you love someone with BPD, you have probably been told a great deal about what you are doing wrong, and very little about what actually helps. You may have spent years reacting to emergencies, walking on eggshells, or being cast alternately as the only safe person and the source of the problem.",
      "That is not a failure of love or of effort. It is what happens when people are asked to manage a serious clinical condition with no training and no support."
    ],

    resourcesTitle: "Resources for Family and Friends",
    resourcesLead: "Psychoeducation, because knowing what is happening changes what you do.",
    resourcesParagraphs: [
      "Avalon's programme includes family psychoeducation, in the spirit of established programmes such as Family Connections — the structured, evidence-informed course developed specifically for the relatives of people with BPD.",
      "The content is practical rather than theoretical: what emotional dysregulation actually is, why validation works when reassurance does not, how to respond to crisis without escalating it, and how to set limits that hold without severing the relationship.",
      "There is a second aim, which families often say matters more. Meeting other people in the same position tends to end a particular kind of isolation quite quickly."
    ],
    /* PLACEHOLDER: the exact family programme — format, length, whether it runs
       for relatives of non-patients — is not confirmed. No overpromising. */
    resourcesPlaceholder: "Format, schedule and eligibility <ph>to follow</ph>",

    accessTitle: "Patient Access to Family and Friends",
    accessLead: "Connection is part of recovery, not a reward for it.",
    /* PLACEHOLDER: specific visiting and communication policy to follow.
       Deliberately general per the brief. */
    accessParagraphs: [
      "Connection to loved ones is part of recovery, and Avalon supports that connection throughout treatment.",
      "Contact with family and friends is treated as clinically important, not as a privilege to be earned or withdrawn. Where structure around contact is useful, it is agreed with the patient and explained, rather than imposed."
    ],
    accessPlaceholder: "Specific visiting and communication policy <ph>to follow</ph>",

    ctaTitle: "If you are the one looking for help on someone else's behalf",
    ctaBody: "That is one of the options on the waitlist form, and a very common way for people to reach us. You do not need the person's permission to ask us a question."
  },

  /* ======================================================================
     ABOUT US
     ====================================================================== */

  about: {
    pageTitle: "About Us — Avalon",
    metaDescription: "What Avalon believes in, how it started, the clinical team, and how to join it.",

    heroEyebrow: "About Us",
    heroTitle: "Why this place is being built.",
    heroLede: "A country of ten million people has roughly four or five specialist residential beds for one of the most treatable serious psychiatric conditions there is. All of them public, all shared with a different patient population.",

    beliefsTitle: "What We Believe In",
    /* PLACEHOLDER: draft copy, written from the three commitments in the
       stakeholder document and rewritten into a first-person mission voice.
       For the founder to personally rewrite or approve. Not final. */
    beliefsPlaceholder: "Draft for the founder to rewrite or approve <ph>not final copy</ph>",
    beliefsLead: "Three commitments, in our own words.",

    beliefOneTitle: "We treat the people who have nowhere else to go.",
    beliefOneText: "Not the most straightforward cases, and not the ones that make a service look good on paper. The people who have been passed between services, told they are too complex, too risky or too much, and who have often concluded that the problem is them. That is who this is for.",

    beliefTwoTitle: "We build the capacity Portugal does not have.",
    beliefTwoText: "It is not enough to run one good clinic. Specialist DBT capacity in this country barely exists, which means training clinicians, holding to a real standard of supervision, and being open about what we are doing so that others can do it too. A clinic that hoards its expertise has misunderstood the problem.",

    beliefThreeTitle: "We measure success by people going home.",
    beliefThreeText: "Not by occupancy, not by length of stay. The point of treatment is to return someone to their family, their work and their own life — with skills they keep. If people are not leaving better than they arrived, nothing else we do counts for much.",

    originTitle: "How Avalon Started",
    /* PLACEHOLDER: founding story to be added. Do not invent a narrative. */
    originParagraphs: [
      "[PLACEHOLDER: founding story to be added.]"
    ],
    originPlaceholder: "Founding story to be written <ph>content pending</ph>",
    originNote: "This section is deliberately empty. The real story will be written by the people it belongs to.",

    teamTitle: "Medical Team",
    teamLead: "Being assembled now.",
    /* PLACEHOLDER: no staff names, photographs or biographies until
       appointments are confirmed. The grid below is structured so that a card
       (photo, name, credential, one line) can be dropped straight in. */
    teamParagraphs: [
      "Avalon's clinical team is being built to standards aligned with the DBT Linehan Board of Certification, with structured weekly supervision and a formal consultation team as part of the model rather than an addition to it.",
      "Named biographies will follow as appointments are confirmed."
    ],
    teamPlaceholder: "Team names, photographs and biographies <ph>to follow</ph>",
    teamCardPhotoLabel: "Photograph to follow",
    teamCardNameOne: "[Name]",
    teamCardCredentialOne: "Consultant Psychiatrist",
    teamCardNameTwo: "[Name]",
    teamCardCredentialTwo: "Clinical Psychologist, DBT",
    teamCardNameThree: "[Name]",
    teamCardCredentialThree: "Clinical Lead",
    teamCardNameFour: "[Name]",
    teamCardCredentialFour: "Mental Health Nurse",

    joinTitle: "Join Our Team",
    joinLead: "One of the only structured DBT training pathways in Portugal.",
    joinParagraphs: [
      "This is the part of the project that clinicians tend to respond to first. Avalon is building one of the only structured DBT training and supervision pathways in Portugal, in partnership with an institute affiliated with the Behavioral Tech Institute — the training organisation founded by Marsha Linehan, who developed DBT.",
      "If you are a Portuguese clinician who has wanted to train properly in DBT, you will already know the problem: there has been almost nowhere in the country to do it. Getting to a genuine standard has generally meant going abroad, at your own expense, and coming back to a system with no supervision structure to practise inside.",
      "That is what this pathway exists to change. Structured training, real supervision, and a consultation team that meets every week — for the clinicians as much as for the patients.",
      "We would like to hear from psychiatrists, clinical psychologists, psychotherapists and mental health nurses. If you are interested but not sure you are qualified yet, write anyway and say so."
    ],
    /* PLACEHOLDER: partner institute to be named once the agreement is public;
       roles, contracts and start dates to be confirmed. */
    joinPlaceholder: "Partner institute, open roles and start dates <ph>to confirm</ph>"
  },

  /* ======================================================================
     IMAGE ALT TEXT
     Real, descriptive alt text — this is a healthcare site.
     ====================================================================== */

  media: {
    altHeroTerrace: "View from Avalon's upper terrace over the wooded hills of Sintra, with the town below and a stone balustrade in the foreground.",
    altFacade: "The 1887 house seen from the cobbled lane below, its pink render and tiled frieze framed by plane trees.",
    altCastleView: "Looking out from the tiled terrace through a stone arch towards the Castelo dos Mouros on the hill opposite.",
    altSalon: "The main salon, with a coffered ceiling, panelled walls and tall doors opening through to the dining room.",
    altDiningRoom: "The dining room, with a long table, carved sideboards and a period chandelier under high windows.",
    altDiningRoomTwo: "A second view of the dining room, looking back towards the doors to the salon.",
    altSittingRoom: "A shared sitting room in the house, with tall windows and original mouldings.",
    altStaircase: "The main staircase of the house, turning on a half landing beneath a tall window.",
    altCorridor: "The second-floor corridor, with doors along one side and light from the far end.",
    altRoomPrincipal: "One of the principal bedrooms, with a window looking out into the trees.",
    altRoomMap: "A bedroom on an upper floor, photographed before renovation.",
    altRoomGuest: "A guest bedroom in the house, photographed before renovation.",
    altRoomWindow: "Light coming through the shutters of a bedroom window onto a wooden floor.",
    altGardenPath: "A stone path running down through the garden beneath mature trees, with the pool visible below.",
    altGardenSteps: "Old stone steps in the garden, overgrown with ivy and ferns between high stone walls.",
    altGardenFountain: "A stone water tank in the garden, almost entirely grown over with foliage.",
    altGardenBench: "A quiet corner of the garden with a bench beneath the trees.",
    altGardenVista: "A view across the garden's planting towards the neighbouring hillside.",
    altGardenUndergrowth: "Dense green undergrowth and hanging vines in the older part of the garden.",
    altGardenPavilion: "A small stone outbuilding standing among the trees in the garden.",
    altGardenWalledPath: "A narrow walled path through the garden, the stonework covered in moss and ivy.",
    altTerraceUpper: "The upper terrace of the house, looking out over the treetops.",
    altSideEntrance: "The side entrance of the house, with an iron balustrade and azulejo tiling beside the steps."
  }
};
