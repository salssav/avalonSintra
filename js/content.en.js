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
    /* The logo is artwork now (images/brand/avalonLogo.svg). This string is the
       accessible name on the link that wraps it. */
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
    dayHospital: "Day Hospitalisation",
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
    cptsd: "C-PTSD",
    dbt: "DBT",
    emdr: "EMDR",
    mindfulness: "Mindfulness",
    familyResources: "Resources for Family and Friends",
    beliefs: "What We Believe",
    joinTeam: "Join Our Team"
  },

  /* ---- The soft, ever-present call to action ---------------------------- */
  cta: {
    eyebrow: "Admissions are open",
    title: "Join the waitlist.",
    body: "Avalon is not open yet. The waitlist is how we stay in touch with the people who want a place when it is, and it is the simplest way to start a conversation with us. <strong>It commits you to nothing at all.</strong>",
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
    email: "alfredov@avalonsintra.com",
    phone: "+351 912 102 647",
    address: "Sintra, Portugal",
    copyright: "Avalon. All rights reserved.",
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
    consent: "We will only use your details to reply to you about Avalon. <strong>We will not share them with anyone else.</strong>",
    errorRequired: "Please fill this in so we can reply.",
    errorEmail: "Please check this email address.",
    errorSelect: "Please choose an option.",
    waitlistConfirmTitle: "Thank you. We have you.",
    waitlistConfirmBody: [
      "Someone from Avalon will write to you personally. Not an automated sequence, and not a sales call. A real reply from a real person, so you can ask whatever you actually want to ask.",
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
    pageTitle: "Avalon | Residential DBT for Borderline Personality Disorder, Sintra",
    metaDescription: "Avalon is a residential clinic in Sintra, Portugal, specialising in Dialectical Behaviour Therapy for Borderline Personality Disorder, with care for depression, anxiety and PTSD.",

    heroEyebrow: "Sintra, Portugal",
    heroTitle: "A safe haven in Sintra, Portugal, set within the UNESCO World Heritage Cultural Landscape and surrounded by the extraordinary natural beauty of the Sintra mountains.",
    heroParagraphs: [
      "Avalon is a specialised residential treatment program dedicated <strong>exclusively to Borderline Personality Disorder (BPD)</strong> and commonly co-occurring conditions, including depression, anxiety, and post-traumatic stress disorder (PTSD).",
      "Designed as a place of safety, recovery, and transformation, Avalon combines specialised clinical care with the restorative environment of one of Portugal’s most remarkable landscapes."
    ],
    heroScrollHint: "Scroll",

    introTitle: "Three different programs: Residential, Day Hospital and Outpatient.",
    introParagraphs: [
      "Our patients are adults who come <strong>voluntarily</strong>, and who are <strong>clinically stable</strong> at the point they arrive.",
      "<strong>The waitlist is open.</strong>"
    ],
    introLink: "Read about our programs",

    trustOneLabel: "DBT Linehan Board aligned",
    trustOneText: "Clinical training and supervision built to standards aligned with the DBT Linehan Board of Certification.",
    trustTwoLabel: "Evidence-based, and measured",
    trustTwoText: "One validated protocol, delivered properly, with progress tracked using the same instruments used in DBT research.",
    trustThreeLabel: "Sintra, Portugal",
    trustThreeText: "An elegant 1887 residence surrounded by historic gardens, nestled in the hills of the Serra de Sintra.",

    exploreEyebrow: "Explore Avalon",
    exploreTitle: "Where to start.",
    cardProgramsTitle: "Our Programs",
    cardProgramsText: "Residential, day hospital and outpatient care, delivered by one team, at the intensity a person needs right now.",
    cardTreatmentsTitle: "Treatments",
    cardTreatmentsText: "BPD, depression, anxiety and PTSD: what they are, and why specialist treatment changes the outcome.",
    cardSolutionsTitle: "Solutions",
    cardSolutionsText: "DBT, EMDR and mindfulness: the methods the programme is actually built from.",
    cardHouseTitle: "The House",
    cardHouseText: "An 1887 mansion, its rooms and common spaces, and a garden of some 5,557 square metres.",
    cardFamilyTitle: "Family and Loved Ones",
    cardFamilyText: "Recovery rarely happens in isolation. Support for the people standing alongside it.",
    cardAdmissionsTitle: "Admissions",
    cardAdmissionsText: "Who Avalon is for, how admission works, and the one short form that starts it.",
    cardLinkLabel: "Read more",

    aboutEyebrow: "About us",
    aboutTitle: "Built from love, and from knowing how hard it is to face this illness without the right help.",
    aboutBody: [
      "Avalon was born from lived experience. From understanding how deeply BPD can affect not only the person living with it, but also their family and those who care for them.",
      "It was created out of love, and from the conviction that <strong>no one should have to navigate that experience without the right support, understanding and care</strong>.",
      "<em>Avalon is the place we wished had existed when we needed it.</em>"
    ],
    aboutLink: "About Avalon"
  },

  /* ======================================================================
     OUR PROGRAMS
     ====================================================================== */

  programs: {
    pageTitle: "Our Programs | Avalon",
    metaDescription: "Residence, Day Hospital, Outpatient care, activities and therapies at Avalon, a residential DBT clinic in Sintra, Portugal.",

    heroEyebrow: "Our Programs",
    heroTitle: "Care that steps down in intensity, never in quality.",
    heroLede: "One clinical programme, delivered at three levels of intensity, so treatment can follow a person as they steady, <em>without making them start again with a new team.</em>",

    residenceTitle: "Residence",
    residenceLead: "An intensive treatment programme, lived in.",
    residenceParagraphs: [
      "At Avalon, we offer an intensive treatment programme in which a person temporarily lives in a therapeutic setting while receiving multidisciplinary care.",
      "Our programme includes defined goals, treatment phases, ongoing assessment, and a plan for returning to daily life. Our common objectives are to stabilise symptoms, ensure safety, improve coping skills, address substance use or medical needs, strengthen daily routines, and involve the person's support system."
    ],
    residenceStepsIntro: "Our programme typically includes:",

    residenceStepOneTitle: "Assessment",
    residenceStepOneText: "We review each person's psychiatric, medical, social and safety needs.",
    residenceStepTwoTitle: "Stabilisation",
    residenceStepTwoText: "We develop safety plans, establish daily routines, manage medications when appropriate, and support therapeutic engagement.",
    residenceStepThreeTitle: "Active treatment",
    residenceStepThreeText: "We provide individual and group therapy, family work, psychoeducation, and life-skills training.",
    residenceStepFourTitle: "Discharge preparation",
    residenceStepFourText: "We review progress, develop relapse-prevention strategies, and coordinate housing, work, education and community-care needs.",
    residenceStepFiveTitle: "Transition and follow-up",
    residenceStepFiveText: "We connect each person with outpatient services and ongoing support.",

    residenceClosingParagraphs: [
      "We regularly adjust each treatment plan according to the person's symptoms, risks, preferences and progress.",
      "At Avalon, we base admission, continued stay, transfer and discharge on clinical need and safety, while respecting each person's dignity, autonomy and active participation in care."
    ],
    dayHospitalTitle: "Day Hospitalisation",
    dayHospitalLead: "Full clinical intensity, evenings at home.",
    dayHospitalParagraphs: [
      "The Day Programme is an intensive and structured mental health treatment programme in which individuals receive comprehensive therapeutic and clinical support during the day, while continuing to live at home or in their own community.",
      "The programme provides a structured therapeutic environment without requiring residential admission. It allows individuals to participate in intensive treatment while maintaining their family, educational, professional and social routines whenever clinically appropriate.",
      "The programme typically includes individualised assessment, individual and group psychotherapy, psychiatric follow-up when indicated, skills training, psychoeducation, emotional regulation work, family involvement, and ongoing clinical monitoring.",
      "The goal is to provide intensive support, strengthen coping and emotional regulation skills, improve daily functioning, and help individuals progressively return to greater independence and stability in their everyday lives."
    ],
    outpatientTitle: "Outpatient",
    outpatientLead: "The same protocol, at the pace of an ordinary life.",
    outpatientParagraphs: [
      "Our Outpatient Programme provides personalised mental health care for individuals who do not require residential or day treatment. Clients attend scheduled therapy sessions while continuing to live independently and maintain their daily routines.",
      "Treatment may include individual psychotherapy, group therapy, and specialised approaches such as DBT and EMDR, according to each person's individual needs and treatment goals."
    ],

    activitiesTitle: "Activities",
    activitiesLead: "Treatment is not the only thing that happens here.",
    activitiesParagraphs: [
      "Alongside clinical treatment, Avalon offers a program of therapeutic and community activities designed to support recovery in daily life."
    ],
    therapiesTitle: "Therapies",
    therapiesLead: "What actually happens, week to week.",
    therapiesIntro: "Full DBT is not a single therapy but a set of components that <strong>only work properly together</strong>. Avalon delivers all of them.",

    therapyIndividualTitle: "Individual DBT therapy",
    therapyIndividualText: "Every patient works with an individual DBT therapist. This is the thread that runs through everything else: a structured weekly session where skills stop being abstract and get applied to whatever is actually happening in a person's life this week.",

    therapySkillsTitle: "DBT skills groups",
    therapySkillsText: "Skills are taught in a group, in four modules. People often expect the group to be the hard part and find it is the part they miss most afterwards.",

    moduleMindfulnessTitle: "Mindfulness",
    moduleMindfulnessText: "Noticing what is happening, inside and around you, without immediately having to act on it.",
    moduleDistressTitle: "Distress Tolerance",
    moduleDistressText: "Getting through the worst moments without making them worse: crisis survival skills, and the harder practice of accepting what cannot be changed right now.",
    moduleEmotionTitle: "Emotion Regulation",
    moduleEmotionText: "Understanding what emotions are doing, reducing vulnerability to them, and changing the ones that do not fit the facts.",
    moduleInterpersonalTitle: "Interpersonal Effectiveness",
    moduleInterpersonalText: "Asking for what you need, saying no, and keeping both the relationship and your self-respect intact while you do it.",

    therapyPsychiatryTitle: "Psychiatric consultation",
    therapyPsychiatryText: "Regular psychiatric review sits alongside the therapy, not above it. Medication is considered where it helps and questioned where it does not.",

    therapyConsultTitle: "The clinical consultation team",
    therapyConsultText: "Once a week, the clinicians treating you meet as a team, not for administration, but to help each other deliver the therapy properly. In DBT this is <em>not</em> optional; the consultation team is a formal part of the treatment model, on the principle that therapists doing this work need support too. We mention it because it is one of the clearest signals of whether a programme is genuinely doing DBT, or borrowing the name."
  },

  /* ======================================================================
     THE HOUSE
     ====================================================================== */

  house: {
    pageTitle: "The House | Avalon, Sintra",
    metaDescription: "An 1887 house in Sintra with a historic garden of roughly 5,557 square metres: rooms, common areas, outdoor spaces, and why Sintra was chosen.",

    heroEyebrow: "The House",
    roomsTitle: "Rooms",
    elevationsTitle: "The building",
    elevationsLead: "The architect's elevations, north and south.",
    elevationNorthCaption: "North elevation, the entrance front.",
    elevationSouthCaption: "South elevation, facing the garden.",
    roomsParagraphs: [
      "Thoughtfully designed spaces for rest and recovery. We offer <strong>independent suites with their own private bathroom, a balcony and a castle view</strong>. Every space is designed with the clinical team involved."
    ],
    commonAreasTitle: "Common Areas",
    commonAreasParagraphs: [
      "Shared rooms for eating together, spending time with others, playing and resting."
    ],
    outdoorTitle: "Outdoor Spaces",
    outdoorParagraphs: [
      "The property includes a historic garden of <strong>approximately 5,557 square metres</strong>, and a pool with views of the castle. The garden will serve as a space for outdoor workshops and for relaxation."
    ],

    sintraTitle: "Why Sintra",
    sintraParagraphs: [
      "Sintra is considered <strong>one of the most magical places in Portugal</strong>, with access to gardens and castles, and close to both the coast and Lisbon. It is the perfect location to heal and to concentrate on a new chapter."
    ],
  },

  /* ======================================================================
     ADMISSIONS
     ====================================================================== */

  admissions: {
    pageTitle: "Admissions | Avalon",
    metaDescription: "Who Avalon is for, how the admission process works, how progress is measured, and how to join the waitlist.",

    heroEyebrow: "Admissions",
    heroTitle: "How someone comes to Avalon.",
    heroLede: "Admission is a conversation before it is a decision. <strong>Nothing about the first step is binding</strong>, and nobody is assessed on the strength of a form.",

    criteriaTitle: "Who Avalon is for",
    criteriaLead: "Being clear about this early spares people a difficult conversation later.",
    criteriaIntro: "Avalon admits adults who:",
    criteriaList: [
      "are 18 or over;",
      "are coming voluntarily, and want to be here;",
      "are clinically stabilised rather than in acute crisis at the point of admission;",
      "do not have a primary substance use disorder as their presenting diagnosis."
    ],
    criteriaNote: "If Avalon is not the right setting, we will say so, and we will try to point towards something that is. Being turned down here is <em>not</em> a judgement about anyone's worth or seriousness. It is a judgement about fit, and getting it wrong helps nobody.",

    processTitle: "Admission Process",
    processLead: "Six stages, from the first phone call to the day someone arrives.",

    stepOneTitle: "Initial contact",
    stepOneList: [
      "First contact with Avalon.",
      "Voluntary participation. We admit only people who are willing to engage in the process and to make changes. We do not accept anyone who has been coerced into coming, or who is ambivalent about being here.",
      "Behavioural commitment: an attitude and a willingness to change.",
      "Admission criteria: no substance use, not in a critical or emergency condition, not requiring hospitalisation, and not being pressed into it by another person.",
      "A preliminary assessment, which leads into the assessment stage below.",
      "The Admissions Coordinator carries out a telephone assessment of the person's medical records and needs, to determine whether Avalon has a programme appropriate for them."
    ],

    stepTwoTitle: "Assessment",
    stepTwoText: "Standardised psychometric testing is required. Where a person does not already have it, Avalon carries out comprehensive psychiatric and neuropsychiatric assessment in an intensive format, in order to arrive at an accurate diagnosis.",

    stepThreeTitle: "Treatment programme",
    stepThreeText: "The assessment determines which programme fits:",
    stepThreeList: [
      "DBT as a residential bridge programme: an intermediate residential model for people who need structure and support before returning to everyday life.",
      "DBT as a day-treatment bridge programme."
    ],

    stepFourTitle: "Financial and admission requirements",
    stepFourText: "Financial, admission and payment requirements are confirmed.",

    stepFiveTitle: "Health insurance coverage",
    stepFiveText: "Medical insurance is required, as regulations oblige. It is not intended as a means of paying for the programme through insurance.",

    stepSixTitle: "Admission session and preparing for the stay",
    stepSixText: "A final session covers the practical detail of arriving:",
    stepSixList: [
      "Clothing requirements, including specific restrictions such as trainers without laces or trousers without drawstrings.",
      "Food allergies.",
      "Food preferences and availability.",
      "Dietary practice: kosher, vegetarian, or other restrictions.",
      "Restricted items."
    ],

    progressTitle: "How Do We Track Progress?",
    progressLead: "Recovery is more than symptom reduction.",
    progressParagraphs: [
      "At Avalon, progress is understood as meaningful change in how a person feels, functions, relates to others and manages everyday life.",
      "We combine clinical observation, validated psychological measures, individualised treatment goals and real-life functioning to understand each person's progress over time."
    ],
    progressDomainsIntro: "We look at changes in:",

    progressEmotionTitle: "Emotional regulation",
    progressEmotionText: "The ability to understand, tolerate and manage difficult emotions, and to recover more effectively from emotional distress.",
    progressSymptomsTitle: "Symptoms",
    progressSymptomsText: "Changes in depression, anxiety, trauma-related symptoms, emotional instability and other difficulties relevant to each person's clinical needs.",
    progressFunctioningTitle: "Daily functioning",
    progressFunctioningText: "Sleep, routines, self-care, responsibilities, and the ability to participate more consistently in everyday life.",
    progressRelationshipsTitle: "Relationships and connection",
    progressRelationshipsText: "Communication, boundaries, conflict management, trust, and the ability to develop healthier connections with others.",
    progressAutonomyTitle: "Autonomy",
    progressAutonomyText: "Increasing confidence and ability to make decisions, manage responsibilities and function with greater independence.",
    progressQualityTitle: "Quality of life",
    progressQualityText: "Ultimately, progress means more than feeling less distressed. It means being increasingly able to build and participate in a life that feels stable, meaningful and worth living.",

    progressClosing: "Progress is reviewed throughout the programme using evidence-based clinical measures and regular multidisciplinary assessment, allowing each treatment plan to evolve as the person's needs and goals change.",
    waitlistTitle: "Join Our Waitlist",
  },

  /* ======================================================================
     TREATMENTS
     ====================================================================== */

  treatments: {
    pageTitle: "Treatments | Avalon",
    metaDescription: "Patient-facing explanations of Borderline Personality Disorder, depression, anxiety and PTSD, and why specialist treatment matters.",

    heroEyebrow: "Treatments",
    heroTitle: "What we treat, explained plainly.",
    heroLede: "Written for someone trying to understand what is happening to them, or to someone they love, <em>not</em> for a clinical audience.",

    introParagraphs: [
      "A diagnosis is a useful shorthand, not a description of a person. What follows is meant to be recognisable rather than exhaustive: enough to know whether you are in the right place, and what specialist treatment would actually involve.",
      "None of it is a substitute for an assessment by a clinician who knows your situation."
    ],

    /* ---- BPD ---- */
    bpdTitle: "Borderline Personality Disorder",
    bpdLead: "The condition Avalon was built around.",
    bpdWhatTitle: "What it is",
    bpdWhatParagraphs: [
      "Borderline Personality Disorder can make emotions feel exceptionally intense and difficult to regulate. It may affect relationships, self-image, impulse control, and the ability to feel emotionally secure. People may experience strong sensitivity to rejection or abandonment, rapid shifts in mood, or periods of overwhelming distress.",
      "With the right therapeutic support, emotional regulation and interpersonal stability can improve significantly. Evidence-based approaches such as DBT can provide practical tools for creating a more balanced and fulfilling life."
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
      "The cost of getting it wrong is years. Years of treatment aimed at the wrong target, and the reasonable conclusion, on the patient's side, that nothing works and they are the problem.",
      "It is worth saying plainly: BPD is <strong>one of the more treatable serious psychiatric conditions</strong>, and the evidence for that is strong. Many people meet criteria at one point in their lives and not at another. The prognosis is genuinely good when the treatment is the right one."
    ],
    bpdWhySpecialistTitle: "Why specialist treatment matters",
    bpdWhySpecialistParagraphs: [
      "General mental health care is not designed for this. Supportive therapy without structure tends not to help and can make things harder; medication alone has no strong evidence base for BPD itself.",
      "What does have evidence is structured, protocol-driven therapy, above all DBT, which was developed specifically for this population and has been tested more thoroughly than any alternative.",
      "That is the whole argument for a specialist setting. <em>Not a nicer building:</em> a team trained in one model, delivering it completely, with the supervision structure that keeps it honest."
    ],
    /* PLACEHOLDER: mortality and suicide data appears once, gently, with a
       supportive frame, and is never repeated or used as an opening line —
       per the brief. Wording to be reviewed by the clinical team. */
    bpdCalloutParagraphs: [
      "BPD carries a real risk of suicide, and we are not going to pretend otherwise on a page written for people living with it. We say it once, here, and only for this reason: <strong>that risk falls substantially with proper treatment</strong>. If you are somewhere dark right now, that is exactly the circumstance this kind of care exists for. Please talk to someone today: a doctor, a crisis line, or us."
    ],

    /* ---- Depression ---- */
    depressionTitle: "Depression",
    depressionLead: "More than low mood, and treatable.",
    depressionWhatParagraphs: [
      "Depression can gradually affect the way a person feels, thinks, connects with others, and experiences everyday life. It may involve persistent sadness, emotional numbness, loss of interest or pleasure, exhaustion, difficulty concentrating, changes in sleep, or a sense of hopelessness.",
      "Depression is <em>not</em> simply a lack of motivation or a temporary low mood. It is a complex condition that can have biological, psychological and environmental dimensions. With appropriate treatment and support, recovery and renewed engagement with life are possible."
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
      "Depression is very common alongside BPD, and the two are often confused. That matters, because they need different things. Depression that is really part of an emotional regulation disorder responds poorly to antidepressants alone, and well to skills-based treatment.",
      "At Avalon, depression is treated in its own right where it is the primary problem, and treated as part of the whole picture where it is not."
    ],

    /* ---- Anxiety ---- */
    anxietyTitle: "Anxiety",
    anxietyLead: "A threat system that will not stand down.",
    anxietyWhatParagraphs: [
      "Anxiety is the mind and body's response to a perceived threat or uncertainty. When it becomes persistent or overwhelming, it can interfere with sleep, concentration, relationships, and the ability to feel present in everyday life.",
      "Anxiety may appear as excessive worry, physical tension, restlessness, fear, or a constant sense of being on alert. Therapy can help identify the patterns that maintain anxiety, and develop new ways of responding to uncertainty, stress and difficult emotions."
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
      "Anxiety responds well to structured, evidence-based treatment, and several of the DBT skill modules, distress tolerance and mindfulness in particular, target exactly the mechanisms that keep it going.",
      "Where anxiety sits alongside BPD or trauma, treating it in isolation tends to disappoint. Treating it as part of one formulation works better."
    ],

    /* ---- PTSD ---- */
    ptsdTitle: "Post-Traumatic Stress Disorder",
    ptsdLead: "When the nervous system has not been told it is over.",
    ptsdWhatParagraphs: [
      "PTSD can occur when the nervous system remains affected by an experience that was overwhelming, threatening or traumatic. A person may experience intrusive memories, nightmares, avoidance, heightened alertness, emotional reactivity, or a persistent difficulty feeling safe.",
      "These responses are often the nervous system's attempt to protect the individual from danger that has already passed. Specialised trauma-informed treatment can help process what happened, and gradually restore a greater sense of safety, connection and control."
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
    ptsdLink: "Read about EMDR",

    /* ---- Complex trauma / C-PTSD ---- */
    cptsdTitle: "Complex Trauma and Complex PTSD",
    cptsdLead: "When the adversity was prolonged, and happened inside relationships.",
    cptsdWhatParagraphs: [
      "Complex trauma often develops in the context of prolonged or repeated experiences of adversity, particularly when they occur within relationships or during important developmental periods.",
      "Its effects can extend beyond traumatic memories, influencing emotional regulation, self-worth, relationships, trust, and a person's sense of identity or safety. Complex PTSD may therefore require a broader and more individualised therapeutic approach.",
      "Treatment can help rebuild internal stability, strengthen relationships, and develop healthier ways of relating to oneself and the world."
    ]
  },

  /* ======================================================================
     SOLUTIONS
     ====================================================================== */

  solutions: {
    pageTitle: "Solutions | DBT, EMDR and Mindfulness at Avalon",
    metaDescription: "Dialectical Behaviour Therapy, EMDR and mindfulness at Avalon: what each method is, and how it is used in the programme.",

    heroEyebrow: "Solutions",
    heroTitle: "The methods the programme is built from.",
    heroLede: "Avalon is not eclectic. One model carries the treatment, and everything else supports it.",

    /* ---- DBT ---- */
    dbtTitle: "Dialectical Behaviour Therapy",
    dbtLead: "The core of everything Avalon does.",
    dbtWhatTitle: "What is DBT?",
    dbtWhatParagraphs: [
      "Dialectical Behaviour Therapy (DBT) is an <strong>evidence-based, structured form of psychotherapy</strong> designed to help people better understand and manage intense emotions, navigate difficult situations, and build healthier relationships. DBT provides practical skills for emotional regulation, distress tolerance, mindfulness and interpersonal effectiveness, helping individuals respond to challenging experiences with greater awareness and flexibility.",
      "Originally developed for Borderline Personality Disorder (BPD), DBT is now used to support people experiencing a wide range of emotional and behavioural difficulties, including impulsivity, emotional overwhelm, relationship challenges, and difficulty coping with distress. The approach balances acceptance and compassion with meaningful behavioural change, helping individuals develop greater stability, self-understanding and confidence in managing their lives."
    ],
    dbtModulesTitle: "The four skill modules",
    dbtModulesIntro: "The skills are the part people carry out of treatment with them.",
    dbtAtAvalonTitle: "DBT at Avalon",
    dbtAtAvalonParagraphs: [
      "At Avalon, DBT is at the heart of our therapeutic approach. We offer a warm, supportive environment where you can develop practical skills to understand and regulate emotions, strengthen relationships, and navigate everyday challenges with greater confidence.",
      "Our programmes are led by experienced clinicians with many years of clinical practice, supported by advanced training and internationally recognised certifications. We stay closely connected to current research and evidence-based practice, while providing care that is thoughtful, individualised and grounded in the highest clinical standards.",
      "You are at the centre of everything we do. Our goal is not only to reduce symptoms, but to help you build greater stability, connection, independence and, ultimately, a life worth living."
    ],
    dbtLink: "See the therapies in the programme",

    /* ---- EMDR ---- */
    emdrTitle: "EMDR",
    emdrLead: "Eye Movement Desensitisation and Reprocessing.",
    emdrWhatTitle: "What is EMDR?",
    emdrWhatParagraphs: [
      "Eye Movement Desensitisation and Reprocessing (EMDR) is a trauma-focused psychotherapy that helps people process distressing or traumatic experiences that may continue to influence how they feel, think, relate to others, or respond in the present. The goal is to help process the memory in a way that reduces its emotional intensity and allows it to become less disruptive in everyday life.",
      "EMDR has its <strong>strongest research support</strong> for the treatment of Post-Traumatic Stress Disorder (PTSD) and is recommended by major international clinical guidelines. It can help reduce symptoms such as intrusive memories, emotional distress, avoidance, hyperarousal and other trauma-related reactions.",
      "EMDR may also be integrated into the treatment of Complex PTSD (C-PTSD), Borderline Personality Disorder (BPD), depression and anxiety, particularly when traumatic or adverse experiences, distressing memories or specific triggers contribute to current difficulties.",
      "In BPD, EMDR can complement treatments such as DBT by addressing traumatic or adverse experiences that may continue to contribute to emotional dysregulation, negative beliefs about oneself, interpersonal difficulties and heightened emotional responses. While DBT focuses on developing skills to manage emotions and behaviours in the present, EMDR can help process experiences from the past that may continue to influence those responses.",
      "The use of EMDR is individualised according to each person's clinical needs, history, stability and treatment goals."
    ],
    emdrSafetyTitle: "Safety and readiness",
    emdrSafetyParagraphs: [
      "EMDR is introduced when clinically appropriate and at a pace that considers each person's readiness, emotional stability and ability to manage distress. Preparation, ongoing assessment and appropriate support are incorporated throughout the process, to help ensure that trauma processing is conducted safely and responsibly."
    ],
    emdrAtAvalonTitle: "EMDR at Avalon",
    emdrAtAvalonParagraphs: [
      "At Avalon, EMDR is delivered with sensitivity, experience and respect for each person's individual story. Trauma work requires trust and safety, which is why we carefully consider each person's readiness, needs and emotional stability throughout the process.",
      "Our EMDR clinicians bring many years of experience, advanced training and internationally recognised certifications, while remaining committed to current research, evidence-based practice and the highest standards of clinical care.",
      "EMDR is thoughtfully integrated into each person's treatment when clinically appropriate, and at a safe and manageable pace. Our aim is to help reduce the impact of painful experiences from the past, and to support each person in moving toward a more stable, connected and fulfilling life."
    ],
    /* ---- Mindfulness ---- */
    mindfulnessTitle: "Mindfulness at Avalon",
    mindfulnessLead: "Yoga, meditation and workshops, alongside the clinical work.",
    mindfulnessParagraphs: [
      "Mindfulness is a core therapeutic practice that helps develop present-moment awareness, emotional regulation, and the ability to respond to difficult experiences with greater stability. At Avalon it is an important support for DBT, and can also help build the grounding, awareness and emotional readiness needed when preparing for EMDR.",
      "It therefore has two lives here. It is one of the four DBT skill modules, taught clinically and practised as a skill. It is also a quieter, non-clinical layer running alongside the programme.",
      "That second layer is not treatment and is not presented as treatment. It exists because a day made only of therapy is a hard day, and because attention, breath and movement are useful things to practise somewhere other than a consulting room. It is optional, and it is meant to be."
    ],
    offersTitle: "Our offers",
    offersIntro: "The non-clinical layer, as it currently stands.",
    /* PLACEHOLDER: the three offers below are named but not yet described.
       Content, schedule and practitioners to be confirmed. */
    offerMeditationTitle: "Meditation",
    offerYogaTitle: "Yoga",
    offerWorkshopsTitle: "Workshops",
  },

  /* ======================================================================
     FAMILY AND LOVED ONES
     ====================================================================== */

  family: {
    pageTitle: "Family and Loved Ones | Avalon",
    metaDescription: "Support and psychoeducation for the families and loved ones of people in treatment at Avalon.",

    heroEyebrow: "Family and Loved Ones",
    heroTitle: "You are not alone.",
    heroLede: "We know how difficult it can be when someone you care about is struggling with a mental health condition.",

    introParagraphs: [
      "If you love someone with BPD, you have probably been told a great deal about what you are doing wrong, and very little about what actually helps. You may have spent years reacting to emergencies, walking on eggshells, or being cast alternately as the only safe person and the source of the problem.",
      "<strong>That is not a failure of love or of effort.</strong> It is what happens when people are asked to manage a serious clinical condition with no training and no support."
    ],

    resourcesTitle: "Resources for Family and Friends",
    resourcesParagraphs: [
      "At Avalon we provide families with practical resources to better understand what their loved one is experiencing, and how to respond in helpful and compassionate ways.",
      "With a particular focus on DBT-informed support, families can learn skills for validation, healthier communication, emotional regulation, boundaries, and navigating difficult moments. We also provide guidance and psychoeducation for families supporting someone experiencing depression, anxiety, PTSD or Complex PTSD.",
      "Our goal is to help families feel <strong>more informed, supported and better prepared</strong> to walk alongside their loved one through the recovery process."
    ],
    ctaTitle: "If you are the one looking for help on someone else's behalf",
    ctaBody: "That is one of the options on the waitlist form, and a very common way for people to reach us. You do not need the person's permission to ask us a question."
  },

  /* ======================================================================
     ABOUT US
     ====================================================================== */

  about: {
    pageTitle: "About Us | Avalon",
    metaDescription: "What Avalon believes in, how it started, the clinical team, and how to join it.",

    heroEyebrow: "About Us",
    heroTitle: "Why this place is being built.",
    heroLede: "A country of ten million people has <strong>roughly four or five specialist residential beds</strong> for one of the most treatable serious psychiatric conditions there is. All of them public, all shared with a different patient population.",

    beliefsTitle: "What We Believe",
    beliefsLead: "There are comprehensive, integrative approaches to addressing emotional distress and psychological disorders.",
    beliefsParagraphs: [
      "We believe that there are comprehensive, integrative approaches to addressing emotional distress and psychological disorders.",
      "Our work brings together some of the most effective evidence-based psychotherapy techniques, with <strong>Dialectical Behaviour Therapy (DBT) as a fundamental pillar</strong>, particularly in the treatment of Borderline Personality Disorder (BPD).",
      "Our approach seeks to address the person as a whole, integrating therapeutic tools that support emotional regulation, resilience, interpersonal relationships, and lasting psychological well-being."
    ],

    joinTitle: "Join Our Team",
    joinLead: "One of the only structured DBT training pathways in Portugal.",
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
    altSideEntrance: "The side entrance of the house, with an iron balustrade and azulejo tiling beside the steps.",
    altElevationNorth: "Architect's drawing of the north elevation: a three-storey 1887 facade with a central pedimented bay, shuttered windows on each floor and a balustrade at first-floor level.",
    altElevationSouth: "Architect's drawing of the south elevation, facing the garden: a covered veranda on columns at first-floor level, a balustraded terrace, and arched openings at garden level."
  }
};
