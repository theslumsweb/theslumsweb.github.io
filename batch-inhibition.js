/** Inhibition-lowering / GABA-ergic compounds (educational; not alcohol). */
const NEW_COMPOUNDS_INHIBITION = [
  {
    id: "pregabalin",
    name: "Pregabalin",
    aliases: ["Lyrica"],
    categories: ["inhibition-lowering", "cognition"],
    classification: "Gabapentinoid (α2δ ligand)",
    cardSummary: "Calms overactive nerve signaling by binding α2δ subunits of voltage-gated calcium channels—less “GABA pill,” more damped excitatory traffic.",
    whatItIs:
      "Pregabalin is a prescription gabapentinoid used for neuropathic pain, fibromyalgia, and adjunctive therapy for partial seizures. It is structurally related to GABA but does not bind GABA-A or GABA-B receptors directly; its primary action is binding the α2δ auxiliary subunit of presynaptic voltage-gated calcium channels, reducing excitatory neurotransmitter release.",
    mechanism: [
      {
        text: "Binds α2δ-1 and α2δ-2 subunits of voltage-gated calcium channels, reducing calcium influx and release of glutamate, noradrenaline, and substance P in hyperexcited circuits",
        confidence: "established",
      },
      { text: "Does not act as a direct GABA receptor agonist despite structural resemblance to GABA", confidence: "established" },
      { text: "Downstream effects resemble “disinhibition of anxiety” only indirectly—net effect is reduced neuronal excitability", confidence: "established" },
    ],
    studies: {
      human: [
        {
          title: "Pregabalin in generalized anxiety disorder",
          summary: "RCT evidence supports efficacy in GAD; sedation and dizziness are common adverse effects.",
          outcome: "positive",
          citation: "See PubMed reviews: pregabalin generalized anxiety",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/?term=pregabalin+generalized+anxiety+disorder",
        },
      ],
      animal: [],
      vitro: [],
      anecdotal: [
        {
          title: "Off-label / grey-market discussion",
          summary: "Some communities discuss pregabalin for social anxiety or sleep; dependence and withdrawal syndromes are reported with misuse.",
          outcome: "mixed",
        },
      ],
    },
    effects: ["Reduced neuropathic pain (approved indications)", "Anxiolytic effects in GAD (where approved)", "Sedation, dizziness"],
    sideEffects: ["Dependence and withdrawal with prolonged or high-dose use", "Suicidal ideation warning (class)", "Cognitive slowing", "Weight gain", "Angioedema (rare)"],
    legal: {
      fda: "Approved (Lyrica) for specific indications",
      prescription: "Prescription-only (Schedule V in USA; varies elsewhere)",
      classification: "Controlled in many jurisdictions",
      sports: "May be restricted; check WADA if competing",
    },
    evidenceScore: { human: "High", mechanism: "High", safety: "Medium" },
    misconceptions: [
      {
        myth: "Pregabalin is just a safer benzo",
        correction: "Different receptor targets and risk profile; gabapentinoids carry their own dependence, misuse, and respiratory depression risk especially with opioids or CNS depressants.",
      },
    ],
    references: [{ text: "FDA prescribing information: pregabalin", url: "https://www.accessdata.fda.gov/scripts/cder/daf/" }],
    dosing: {
      summary:
        "Dosing is indication-specific and must follow local labeling and a prescriber. For neuropathic pain in adults, product literature often describes divided daily totals (e.g. 150–600 mg/day in 2–3 doses) titrated by response and tolerability. For GAD, label ranges differ by region. Always use the current FDA/EMA SmPC for your formulation.",
      routes: ["Oral (capsules / oral solution)"],
      reconstitutionDefaults: null,
    },
  },
  {
    id: "baclofen",
    name: "Baclofen",
    aliases: ["Lioresal"],
    categories: ["inhibition-lowering", "recovery"],
    classification: "GABA-B receptor agonist",
    cardSummary: "Spasm relief via GABA-B—presynaptic inhibition in spinal cord circuits, with oral and intrathecal formulations for different severities.",
    whatItIs:
      "Baclofen is a muscle relaxant and antispastic agent that acts as a selective agonist at GABA-B receptors. It is used for spasticity in multiple sclerosis, spinal cord injury, and cerebral palsy, among other indications. Intrathecal baclofen is used for severe spasticity when oral therapy is insufficient or poorly tolerated.",
    mechanism: [
      { text: "Agonism at GABA-B receptors on presynaptic terminals, reducing calcium influx and excitatory transmitter release", confidence: "established" },
      { text: "Postsynaptic GABA-B activation increases potassium conductance, hyperpolarizing motor neurons and interneurons", confidence: "established" },
      { text: "Net effect: reduced spinal reflex excitability and muscle tone", confidence: "established" },
    ],
    studies: {
      human: [
        {
          title: "Oral baclofen for spasticity",
          summary: "Long clinical use in MS and spinal cord injury spasticity; dose titration required to balance efficacy vs sedation.",
          outcome: "positive",
          citation: "Cochrane / reviews on baclofen spasticity",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/?term=baclofen+spasticity+randomized",
        },
      ],
      animal: [],
      vitro: [],
      anecdotal: [
        {
          title: "Low-dose interest for anxiety or alcohol-use disorder",
          summary: "Some research programs have explored baclofen for alcohol dependence; this remains highly jurisdiction- and protocol-specific—not DIY dosing territory.",
          outcome: "mixed",
        },
      ],
    },
    effects: ["Reduced spasticity and painful spasms (approved uses)", "Sedation at higher doses"],
    sideEffects: ["Withdrawal can provoke seizures if stopped abruptly", "Hypotonia, confusion", "Respiratory depression when combined with sedatives"],
    legal: {
      fda: "Approved oral and intrathecal formulations",
      prescription: "Prescription-only",
      classification: "Medication (not scheduled like opioids in most regions)",
      sports: "Check WADA status for competition",
    },
    evidenceScore: { human: "High", mechanism: "High", safety: "Medium" },
    misconceptions: [
      {
        myth: "You can stop baclofen anytime if muscle stiffness returns",
        correction: "Abrupt discontinuation can cause severe withdrawal including seizures; taper only under medical supervision.",
      },
    ],
    references: [{ text: "PubMed: baclofen spasticity", url: "https://pubmed.ncbi.nlm.nih.gov/?term=baclofen+spasticity" }],
    dosing: {
      summary:
        "Oral baclofen is almost always started low (e.g. 5 mg 2–3 times daily in adults in many labels) and titrated slowly (often weekly) toward the lowest effective antispastic dose, commonly cited maintenance ranges on the order of 30–80 mg/day divided—but intrathecal dosing is entirely different and label-driven. Follow the prescribing information for your indication and region.",
      routes: ["Oral", "Intrathecal pump (specialist)"],
      reconstitutionDefaults: null,
    },
  },
];
