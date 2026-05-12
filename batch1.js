const NEW_COMPOUNDS_1 = [
  {
    id: "adrenosterone",
    name: "Adrenosterone",
    aliases: ["11-oxo-androstenolone", "11-OXO", "11-Ketotestosterone"],
    categories: ["fat-loss", "performance"],
    classification: "Endogenous adrenal steroid / cortisol inhibitor",
    whatItIs: "Adrenosterone is a naturally occurring steroid hormone produced by the adrenal cortex. It acts as an inhibitor of 11β-hydroxysteroid dehydrogenase type 1 (11β-HSD1), the enzyme that converts cortisone into active cortisol in peripheral tissues. Interest in adrenosterone centers on its potential to reduce local cortisol activity in fat and muscle tissue.",
    mechanism: [
      { text: "Competitive inhibitor of 11β-HSD1, reducing local conversion of cortisone to cortisol in adipose and muscle tissue", confidence: "established" },
      { text: "Does not significantly suppress systemic cortisol via HPA axis, effect is peripheral, not central", confidence: "established" },
      { text: "Reduced local cortisol may attenuate cortisol-driven lipogenesis and muscle catabolism", confidence: "hypothesized" },
      { text: "Weak androgenic activity via conversion to 11-ketotestosterone, a bioactive androgen", confidence: "hypothesized" }
    ],
    studies: {
      human: [],
      animal: [
        { title: "11β-HSD1 inhibition reduces visceral fat in rodent models", summary: "Rodent studies show that pharmacological 11β-HSD1 inhibition reduces visceral adiposity and improves insulin sensitivity. Adrenosterone is one of several inhibitors studied in this context.", outcome: "positive", citation: "Morton NM et al. (2004). J Biol Chem. 279(30):31148-31156.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/15155756" }
      ],
      vitro: [
        { title: "Adrenosterone inhibits 11β-HSD1 in adipose cell cultures", summary: "In vitro experiments confirm competitive inhibition of 11β-HSD1 by adrenosterone in human adipose tissue cell lines, reducing local cortisol production.", outcome: "positive", citation: "Monder C et al. (1994). Endocrinology. 135(3):891-895." }
      ],
      anecdotal: [
        { title: "Bodybuilding community use for cortisol control", summary: "Used in fitness communities as a 'cortisol blocker' to preserve muscle during caloric deficits. Claims of effect are highly anecdotal.", outcome: "mixed" }
      ]
    },
    effects: ["Local cortisol reduction in adipose tissue (in vitro)", "Possible improvement in body composition via cortisol modulation (animal data)", "Weak androgenic activity via 11-ketotestosterone metabolite"],
    sideEffects: ["No human clinical trials; safety unknown", "Potential androgenic side effects at high doses", "Long-term HPA axis effects unstudied", "Product purity and dosing unregulated"],
    legal: { fda: "Not FDA approved. Not scheduled.", prescription: "Not a controlled substance in most jurisdictions", classification: "Research steroid / unscheduled in most countries", sports: "Prohibited by WADA (S1 anabolic agents)" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [
      { myth: "Adrenosterone fully blocks cortisol", correction: "It inhibits a peripheral enzyme that activates cortisol locally. It does not block cortisol synthesis or systemic cortisol significantly." }
    ],
    references: [{ text: "Morton NM et al. (2004). Novel adipose tissue-mediated resistance to diet-induced visceral obesity. J Biol Chem.", url: "https://pubmed.ncbi.nlm.nih.gov/15155756" }]
  },

  {
    id: "1-testosterone",
    name: "1-Testosterone",
    aliases: ["Dihydroboldenone", "DHB", "1-Test"],
    categories: ["performance"],
    classification: "Synthetic anabolic-androgenic steroid",
    whatItIs: "1-Testosterone (dihydroboldenone, DHB) is a synthetic anabolic-androgenic steroid structurally related to testosterone but with a double bond at the 1-2 position. It is a Schedule III controlled substance in the United States. It has never been approved for medical use and is used illicitly in bodybuilding for its reportedly high anabolic-to-androgenic ratio.",
    mechanism: [
      { text: "Binds androgen receptor with high affinity, stimulating anabolic gene transcription", confidence: "established" },
      { text: "Does not convert to estrogen via aromatase, non-aromatizing structure", confidence: "established" },
      { text: "Resistant to 5α-reduction, maintaining its potency profile in androgen-sensitive tissues", confidence: "established" }
    ],
    studies: { human: [], animal: [{ title: "Myotrophic activity of 1-testosterone in rodent bioassays", summary: "Classic rodent myotrophic/androgenic assays demonstrate high anabolic-to-androgenic ratios for DHB compared to testosterone.", outcome: "positive", citation: "Vida JA. (1969). Androgens and Anabolic Agents. Academic Press." }], vitro: [], anecdotal: [{ title: "Widespread illicit use in bodybuilding", summary: "DHB is reported to produce lean muscle gains with less water retention than testosterone. Side effects including post-injection pain are frequently reported.", outcome: "mixed" }] },
    effects: ["Androgen receptor activation and anabolic signaling", "Lean mass accrual reported in users", "No estrogenic conversion"],
    sideEffects: ["Severe post-injection pain reported (oil-based preparations)", "Androgenic side effects: hair loss, acne, virilization", "Suppression of natural testosterone production", "Unknown long-term cardiovascular effects", "Hepatotoxicity risk unknown"],
    legal: { fda: "Not approved. Schedule III controlled substance (USA).", prescription: "Controlled substance, no legal prescription formulation", classification: "Schedule III AAS (USA)", sports: "Prohibited by WADA (S1)" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [{ myth: "DHB is safer than testosterone because it doesn't aromatize", correction: "Absence of estrogenic conversion does not make a compound safe. Androgenic side effects, HPTA suppression, and cardiovascular risks remain concerns with all AAS." }],
    references: [{ text: "Vida JA. (1969). Androgens and Anabolic Agents: Chemistry and Pharmacology. Academic Press." }]
  },

  {
    id: "dnp",
    name: "2,4-Dinitrophenol",
    aliases: ["DNP", "2,4-DNP"],
    categories: ["fat-loss"],
    classification: "Industrial chemical / mitochondrial uncoupler",
    whatItIs: "2,4-Dinitrophenol (DNP) is an industrial chemical with a history of illicit use as a weight loss agent. It works by uncoupling oxidative phosphorylation in mitochondria, causing energy to be released as heat rather than stored as ATP. DNP has caused numerous fatalities and has no therapeutic window that makes it safe for human use. It is included here strictly as a documented dangerous substance.",
    mechanism: [
      { text: "Transports protons across the inner mitochondrial membrane, bypassing ATP synthase and dissipating the proton gradient as heat", confidence: "established" },
      { text: "Dramatically increases metabolic rate, whole-body thermogenesis increases proportionally to dose", confidence: "established" },
      { text: "Has no ceiling effect, increasing dose continues increasing uncoupling until fatal hyperthermia", confidence: "established" }
    ],
    studies: { human: [{ title: "Historical use and fatality case series", summary: "DNP was used as a weight loss agent in the 1930s before being withdrawn due to deaths. Modern case reports continue to document fatalities from DNP purchased online. Estimated lethal dose in humans is approximately 20–40 mg/kg, but individual variation is high.", outcome: "negative", citation: "Grundlingh J et al. (2011). J Med Toxicol. 7(3):205-212.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/21739343" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Massive increase in metabolic rate (established)", "Rapid fat oxidation (established)", "Profuse sweating and hyperthermia", "Multiple organ failure at high doses"],
    sideEffects: ["Fatal hyperthermia, no safe dose established in humans", "Cataracts with chronic use", "Agranulocytosis", "Severe dehydration and electrolyte imbalance", "Multiple documented human fatalities"],
    legal: { fda: "Not approved. Banned for human consumption by the FDA.", prescription: "Illegal for human use", classification: "Industrial chemical; banned substance", sports: "Prohibited by WADA" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "DNP is safe if you use a low dose and stay hydrated", correction: "DNP has a narrow and unpredictable toxicity window. Individual variation in metabolism means that a dose considered 'low' by one person can be fatal in another. No dose of DNP has been established as safe for human use." }],
    references: [{ text: "Grundlingh J et al. (2011). 2,4-dinitrophenol (DNP): A Weight Loss Agent with Significant Acute Toxicity and Risk of Death. J Med Toxicol.", url: "https://pubmed.ncbi.nlm.nih.gov/21739343" }]
  },

  {
    id: "t2",
    name: "3,5-Diiodo-L-thyronine",
    aliases: ["T2", "3,5-T2"],
    categories: ["fat-loss", "longevity"],
    classification: "Endogenous thyroid hormone metabolite",
    whatItIs: "3,5-Diiodo-L-thyronine (T2) is a naturally occurring metabolite of thyroid hormones T3 and T4. Unlike T3, T2 does not act via classical nuclear thyroid hormone receptors but appears to stimulate mitochondrial metabolism through distinct mechanisms. It is studied as a potential thermogenic agent that may not suppress the hypothalamic-pituitary-thyroid (HPT) axis as strongly as T3.",
    mechanism: [
      { text: "Directly stimulates mitochondrial respiration via interaction with cytochrome c oxidase (Complex IV)", confidence: "established" },
      { text: "Activates mitochondrial deiodinase, increasing local T3 production in some tissues", confidence: "hypothesized" },
      { text: "Does not significantly activate nuclear thyroid hormone receptors (TRα/TRβ) at physiological concentrations", confidence: "established" },
      { text: "May reduce HPT axis suppression compared to T3 supplementation", confidence: "hypothesized" }
    ],
    studies: { human: [], animal: [{ title: "T2 reduces fat mass without HPT axis suppression in rats", summary: "Hypothyroid rats treated with T2 showed reduced fat mass and improved lipid profiles without the HPT axis suppression seen with T3. Results have not been replicated in humans.", outcome: "positive", citation: "Lombardi A et al. (2009). J Endocrinol. 203(2):159-167.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/19620254" }], vitro: [], anecdotal: [{ title: "Use as T3 alternative in fitness community", summary: "Used as a 'safer' alternative to T3 for thyroid-stimulated fat loss. No human safety data exists.", outcome: "neutral" }] },
    effects: ["Increased mitochondrial respiration (animal data)", "Fat mass reduction without HPT suppression (animal data)", "Improved lipid profiles in animal models"],
    sideEffects: ["No human safety data exists", "Potential cardiac effects (thyroid hormones affect heart rate and rhythm)", "Unknown interaction with thyroid disease", "Unregulated product purity"],
    legal: { fda: "Not approved for human use", prescription: "Not a controlled substance but unregulated", classification: "Research chemical", sports: "Prohibited by WADA (S2 hormones)" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [{ myth: "T2 is a safe version of T3 for fat loss", correction: "T2 has not been studied in humans for safety or efficacy. The assumption that it avoids HPT suppression is based on animal data and has not been validated in human clinical studies." }],
    references: [{ text: "Lombardi A et al. (2009). 3,5-diiodo-l-thyronine rapidly enhances mitochondrial fatty acid oxidation. J Endocrinol.", url: "https://pubmed.ncbi.nlm.nih.gov/19620254" }]
  },

  {
    id: "5-amino-1mq",
    name: "5-Amino-1MQ",
    aliases: ["5-Amino-1-methylquinolinium", "5A1MQ"],
    categories: ["fat-loss", "longevity"],
    classification: "Synthetic small molecule / NNMT inhibitor",
    whatItIs: "5-Amino-1MQ is a small molecule inhibitor of nicotinamide N-methyltransferase (NNMT), an enzyme that methylates nicotinamide (vitamin B3) and plays a role in cellular energy regulation. NNMT is overexpressed in obesity and certain cancers. By inhibiting NNMT, 5-Amino-1MQ is hypothesized to shift cellular metabolism toward fat oxidation and increase NAD+ availability.",
    mechanism: [
      { text: "Inhibits NNMT, reducing methylation of nicotinamide and thereby increasing NAD+ and SAM availability", confidence: "established" },
      { text: "NNMT inhibition in adipocytes increases SIRT1 activity via NAD+ elevation", confidence: "hypothesized" },
      { text: "May upregulate fatty acid oxidation genes in adipose tissue via epigenetic mechanisms", confidence: "hypothesized" }
    ],
    studies: { human: [], animal: [{ title: "5-Amino-1MQ reduces adiposity in diet-induced obese mice", summary: "A mouse study showed that 5-Amino-1MQ treatment reduced fat mass and improved metabolic markers in diet-induced obese mice without affecting food intake significantly.", outcome: "positive", citation: "Neelakantan H et al. (2019). Nat Commun. 10(1):4291.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/31541152" }], vitro: [], anecdotal: [{ title: "Growing use in biohacking community", summary: "Adopted by longevity and fat loss communities based on mouse data. No human pharmacokinetic or safety data published.", outcome: "neutral" }] },
    effects: ["Reduced adiposity in obese mouse models", "Improved metabolic markers in animals", "NNMT inhibition and downstream NAD+ effects (mechanistic)"],
    sideEffects: ["No human data whatsoever", "Unknown pharmacokinetics in humans", "NNMT plays roles in cancer biology, implications of inhibition uncertain", "Unregulated supply chain"],
    legal: { fda: "Not approved", prescription: "Not regulated", classification: "Research chemical", sports: "Prohibited by WADA (S0)" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [{ myth: "Mouse fat loss data proves 5-Amino-1MQ will work in humans", correction: "Mouse obesity models frequently fail to translate to humans. No human data on pharmacokinetics, efficacy, or safety exists for 5-Amino-1MQ." }],
    references: [{ text: "Neelakantan H et al. (2019). Selective and membrane-permeable small molecule inhibitors of nicotinamide N-methyltransferase. Nat Commun.", url: "https://pubmed.ncbi.nlm.nih.gov/31541152" }]
  },

  {
    id: "7-keto-dhea",
    name: "7-Keto-DHEA",
    aliases: ["7-Keto", "3β-acetyl-7-oxo-dehydroepiandrosterone", "7-oxo-DHEA"],
    categories: ["fat-loss", "longevity"],
    classification: "Endogenous DHEA metabolite",
    whatItIs: "7-Keto-DHEA is a naturally occurring metabolite of DHEA (dehydroepiandrosterone) produced in the adrenal glands, brain, and skin. Unlike DHEA, it does not convert to sex hormones (estrogen/testosterone), making it of interest as a thermogenic and immune-supporting agent without androgenic/estrogenic activity.",
    mechanism: [
      { text: "Activates thermogenic enzymes (NADH oxidase, malic enzyme, fatty acyl-CoA oxidase) in the liver", confidence: "established" },
      { text: "Does not convert to androgens or estrogens, lacks the 3β-hydroxy group required for that conversion", confidence: "established" },
      { text: "May support immune function via modulation of immune cell activity", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "7-Keto-DHEA and weight loss: RCT", summary: "A small double-blind RCT (n=30) found that 7-Keto-DHEA (100mg twice daily) combined with exercise and diet produced significantly greater weight loss than placebo over 8 weeks. Study was small and industry-funded.", outcome: "positive", citation: "Zenk JL et al. (2002). Curr Ther Res. 63(4):263-272." }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Thermogenic enzyme activation (in vitro/animal)", "Modest weight loss augmentation when combined with diet/exercise (limited human data)", "No conversion to sex hormones"],
    sideEffects: ["Generally well-tolerated in short-term studies", "Potential thyroid hormone elevation at high doses", "Long-term effects unknown", "Industry funding limits trial interpretation"],
    legal: { fda: "Sold as dietary supplement in the USA", prescription: "Available OTC", classification: "Dietary supplement", sports: "Prohibited by WADA (S1 related compounds)" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Medium" },
    misconceptions: [{ myth: "7-Keto is as effective as DHEA without the hormonal risks", correction: "7-Keto lacks androgenic conversion but its efficacy evidence is weak and primarily from small, industry-sponsored trials." }],
    references: [{ text: "Zenk JL et al. (2002). HUM5007, a novel combination of thermogenic compounds, and 3-acetyl-7-oxo-dehydroepiandrosterone. Curr Ther Res." }]
  },

  {
    id: "9-me-bc",
    name: "9-Methyl-β-carboline",
    aliases: ["9-Me-BC", "9-Methyl-beta-carboline"],
    categories: ["cognition"],
    classification: "Synthetic β-carboline / MAO inhibitor",
    whatItIs: "9-Methyl-β-carboline (9-Me-BC) is a synthetic derivative of β-carbolines, a class of compounds found in some plants and formed endogenously via metabolism of tryptophan. It has been studied in preclinical models for neuroprotective and pro-dopaminergic effects. It is not approved for human use and has no human clinical trials.",
    mechanism: [
      { text: "Inhibits monoamine oxidase (MAO), increases dopamine, serotonin, and norepinephrine availability", confidence: "established" },
      { text: "Stimulates dopaminergic neuron growth and dendritic arborization in vitro", confidence: "hypothesized" },
      { text: "Upregulates BDNF and GDNF expression in neuronal cultures", confidence: "hypothesized" },
      { text: "Potential neuroprotective effects against dopaminergic neurotoxins (MPTP) in animal models", confidence: "hypothesized" }
    ],
    studies: { human: [], animal: [{ title: "9-Me-BC promotes neurogenesis and cognitive improvement in rats", summary: "Rat studies showed improved spatial learning and increased neurogenesis with 9-Me-BC administration. Results are from a small number of studies by a limited group of researchers.", outcome: "positive", citation: "Gruss M et al. (2012). J Neural Transm. 119(1):71-80.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/21751075" }], vitro: [], anecdotal: [{ title: "Use in nootropic communities", summary: "Self-experimenters report mood elevation and cognitive effects. MAO inhibitor activity presents serious drug interaction risks that are often underappreciated by users.", outcome: "mixed" }] },
    effects: ["MAO inhibition (established in vitro)", "Dopaminergic neuron stimulation (preclinical)", "Pro-neurogenic effects in animal models"],
    sideEffects: ["MAO inhibition creates serious drug and food interaction risks (tyramine crisis)", "No human safety data", "Serotonin syndrome risk if combined with serotonergic drugs", "Phototoxicity reported", "Unknown carcinogenicity"],
    legal: { fda: "Not approved", prescription: "Unregulated research chemical", classification: "Research chemical", sports: "Not explicitly banned but may fall under WADA S6 stimulants" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [{ myth: "9-Me-BC is a safe nootropic dopamine booster", correction: "Its MAO inhibitory activity makes it potentially dangerous in combination with many common foods and medications. It is far from safe by any established standard." }],
    references: [{ text: "Gruss M et al. (2012). 9-Methyl-β-carboline-induced cognitive enhancement. J Neural Transm.", url: "https://pubmed.ncbi.nlm.nih.gov/21751075" }]
  },

  {
    id: "aicar",
    name: "AICAR",
    aliases: ["Acadesine", "5-Aminoimidazole-4-carboxamide ribonucleotide", "AICA riboside"],
    categories: ["performance", "longevity"],
    classification: "Adenosine analogue / AMPK activator",
    whatItIs: "AICAR (acadesine) is a cell-permeable nucleotide analogue that activates AMP-activated protein kinase (AMPK), a master regulator of cellular energy homeostasis. It has been investigated clinically for cardiac ischemia and is occasionally studied in the context of metabolic disease. It gained notoriety when Salk Institute research showed exercise-mimicking effects in sedentary mice.",
    mechanism: [
      { text: "Converted intracellularly to ZMP, an AMP analogue that activates AMPK", confidence: "established" },
      { text: "AMPK activation increases fatty acid oxidation, glucose uptake, and mitochondrial biogenesis", confidence: "established" },
      { text: "Upregulates genes involved in oxidative metabolism (PGC-1α pathway)", confidence: "established" },
      { text: "Reduced mTORC1 signaling downstream of AMPK activation", confidence: "established" }
    ],
    studies: { human: [{ title: "AICAR in cardiac surgery: ERA trial", summary: "A large RCT evaluated acadesine for reducing adverse cardiac outcomes in bypass surgery patients. The compound did not significantly reduce the primary composite endpoint.", outcome: "negative", citation: "Mangano DT et al. (2010). Anesthesiology. 112(5):1108-1119.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/20395839" }], animal: [{ title: "AICAR enhances endurance without exercise in mice", summary: "A landmark Salk Institute study showed AICAR increased endurance by 44% in sedentary mice via AMPK activation and oxidative gene upregulation, prompting widespread interest.", outcome: "positive", citation: "Narkar VA et al. (2008). Cell. 134(3):405-415.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/18674809" }], vitro: [], anecdotal: [] },
    effects: ["AMPK activation and downstream metabolic shifts (established)", "Increased endurance in sedentary mice (animal data)", "Enhanced fatty acid oxidation", "Cardioprotection in ischemia models (animal/some human data)"],
    sideEffects: ["Hypoglycemia, AMPK activation increases glucose uptake", "IV administration required for clinical use; oral bioavailability poor", "Not studied for long-term use in healthy humans", "Cardiac outcomes trial was neutral"],
    legal: { fda: "Investigated but not approved for any indication", prescription: "Research compound only", classification: "Research chemical", sports: "Prohibited by WADA (S4 metabolic modulators)" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "AICAR is a proven exercise substitute based on the mouse study", correction: "The famous 2008 mouse study used high doses via injection. Human translation of these findings has not been validated, and human pharmacokinetics differ substantially." }],
    references: [{ text: "Narkar VA et al. (2008). AMPK and PPARδ agonists are exercise mimetics. Cell.", url: "https://pubmed.ncbi.nlm.nih.gov/18674809" }, { text: "Mangano DT et al. (2010). Effects of acadesine on myocardial infarction. Anesthesiology.", url: "https://pubmed.ncbi.nlm.nih.gov/20395839" }]
  },

  {
    id: "alpha-gpc",
    name: "Alpha-GPC",
    aliases: ["Alpha-glycerophosphocholine", "L-alpha glycerylphosphorylcholine", "Choline alfoscerate"],
    categories: ["cognition"],
    classification: "Choline prodrug / nootropic",
    whatItIs: "Alpha-GPC (L-alpha glycerylphosphorylcholine) is a choline-containing compound that serves as a highly bioavailable source of choline. It occurs naturally in the brain and is a breakdown product of phosphatidylcholine. It is approved as a prescription drug for cognitive impairment in several European countries and is widely used as an OTC supplement in the US.",
    mechanism: [
      { text: "Increases acetylcholine synthesis and release in the brain by providing choline substrate to choline acetyltransferase", confidence: "established" },
      { text: "Rapidly crosses the blood-brain barrier, superior CNS choline delivery vs. choline bitartrate", confidence: "established" },
      { text: "May stimulate GH release via cholinergic stimulation of GHRH neurons", confidence: "hypothesized" },
      { text: "Neuroprotective effects observed in models of cognitive decline", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "Alpha-GPC improves cognitive function in Alzheimer's disease", summary: "A meta-analysis of three Italian RCTs (n=1570 total) showed significant improvements in cognitive function and global assessment in Alzheimer's patients treated with alpha-GPC 1200mg/day for up to 180 days.", outcome: "positive", citation: "De Jesus Moreno Moreno M. (2003). Clin Ther. 25(1):178-193.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/12637119" }, { title: "Observational cohort: Alpha-GPC and stroke risk", summary: "A large Korean observational study (n=62,717) found an association between higher alpha-GPC use and increased stroke risk. Causality not established; confounding likely.", outcome: "mixed", citation: "Yun HR et al. (2021). Age Ageing. 50(6):2083-2091.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/34389867" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Increased brain acetylcholine levels", "Cognitive improvement in Alzheimer's/MCI patients (human data)", "Possible GH secretion stimulation", "Memory and learning support in cognitively impaired populations"],
    sideEffects: ["Generally well-tolerated; headache, dizziness, nausea reported", "Possible increase in stroke risk suggested by one large observational study (mechanism unclear)", "TMAO production from choline may affect cardiovascular risk with long-term use", "Should be used cautiously in those at cardiovascular risk"],
    legal: { fda: "Generally Recognized as Safe (GRAS) as supplement. Prescription drug in Italy.", prescription: "OTC supplement in USA; Rx in some EU countries", classification: "Dietary supplement (USA); pharmaceutical (EU)", sports: "Not banned by WADA" },
    evidenceScore: { human: "Medium", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Alpha-GPC is equally effective as a nootropic in healthy young people as in Alzheimer's patients", correction: "Human evidence is primarily in cognitively impaired populations. Benefits in healthy individuals with normal cholinergic function are poorly established." }],
    references: [{ text: "De Jesus Moreno Moreno M. (2003). Cognitive improvement in mild to moderate Alzheimer's dementia after treatment with the acetylcholine precursor choline alfoscerate. Clin Ther.", url: "https://pubmed.ncbi.nlm.nih.gov/12637119" }]
  },

  {
    id: "anastrozole",
    name: "Anastrozole",
    aliases: ["Arimidex", "ZD1033"],
    categories: ["performance"],
    classification: "Non-steroidal aromatase inhibitor / FDA-approved drug",
    whatItIs: "Anastrozole is an FDA-approved non-steroidal aromatase inhibitor used primarily to treat estrogen receptor-positive breast cancer in postmenopausal women. In men, it is used off-label to reduce estrogen levels, particularly in the context of testosterone replacement therapy or illicit anabolic steroid use. It potently suppresses estrogen synthesis.",
    mechanism: [
      { text: "Reversible competitive inhibitor of aromatase (CYP19A1), the enzyme that converts androgens to estrogens", confidence: "established" },
      { text: "Reduces systemic estrogen levels by up to 85% in postmenopausal women", confidence: "established" },
      { text: "In men on testosterone therapy, reduces estradiol to physiological range when elevated", confidence: "established" }
    ],
    studies: { human: [{ title: "ATAC trial: Anastrozole vs tamoxifen in breast cancer", summary: "A landmark 9,366-patient RCT showed anastrozole was superior to tamoxifen for disease-free survival in postmenopausal women with hormone receptor-positive early breast cancer.", outcome: "positive", citation: "ATAC Trialists Group (2002). Lancet. 359(9324):2131-2139.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/12090977" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Potent estrogen suppression (established)", "Reduced breast cancer recurrence in appropriate patients", "Restoration of LH/FSH in hypogonadal men by reducing estrogen negative feedback"],
    sideEffects: ["Bone density loss (significant with long-term use)", "Joint pain and stiffness", "Hot flashes", "Elevated cardiovascular risk with excessive estrogen suppression in men", "Mood disturbance with very low estrogen", "Lipid profile changes"],
    legal: { fda: "FDA approved for breast cancer. Off-label use in men.", prescription: "Prescription only", classification: "Prescription pharmaceutical", sports: "Prohibited by WADA (S4 hormone modulators)" },
    evidenceScore: { human: "High", mechanism: "High", safety: "High" },
    misconceptions: [{ myth: "More estrogen suppression is better when using anabolic steroids", correction: "Estrogen serves essential functions in men including bone health, cardiovascular protection, and libido. Excessive aromatase inhibition causes more harm than modest elevation." }],
    references: [{ text: "ATAC Trialists Group (2002). Anastrozole alone or in combination with tamoxifen versus tamoxifen alone for adjuvant treatment of postmenopausal women with early breast cancer. Lancet.", url: "https://pubmed.ncbi.nlm.nih.gov/12090977" }]
  },

  {
    id: "andarine-s4",
    name: "Andarine",
    aliases: ["S4", "GTx-007"],
    categories: ["performance", "fat-loss"],
    classification: "Selective Androgen Receptor Modulator (SARM)",
    whatItIs: "Andarine (S4) is one of the first SARMs developed, originally by GTx Inc. for potential treatment of muscle wasting and osteoporosis. It was never approved for human use and development was halted. It remains widely used illicitly in bodybuilding and fitness communities.",
    mechanism: [
      { text: "Partial agonist of the androgen receptor with tissue selectivity, higher affinity in muscle and bone than prostate", confidence: "established" },
      { text: "Suppresses LH/FSH and endogenous testosterone via negative feedback on HPG axis", confidence: "established" },
      { text: "Active metabolite (M1) binds to ocular androgen receptors, causing visual disturbances", confidence: "established" }
    ],
    studies: { human: [], animal: [{ title: "S4 preserves lean mass and bone density in animal models", summary: "Preclinical studies showed S4 preserved muscle and bone mass in orchidectomized (castrated) rats with reduced effects on prostate weight compared to testosterone.", outcome: "positive", citation: "Jasuja R et al. (2005). J Steroid Biochem Mol Biol. 97(3):241-253." }], vitro: [], anecdotal: [{ title: "Widespread fitness community use", summary: "Users report improved body composition. Yellow vision and visual disturbances are widely reported and are attributable to M1 metabolite binding retinal androgen receptors.", outcome: "mixed" }] },
    effects: ["Androgen receptor activation in muscle and bone (preclinical)", "Improved body composition reported anecdotally", "HPG axis suppression similar to AAS"],
    sideEffects: ["Visual disturbances (yellow tint, difficulty adapting to light/dark), well-documented", "HPG axis suppression and testosterone reduction", "Unknown long-term carcinogenic potential", "No long-term human safety data", "Product contamination risk from unregulated supply"],
    legal: { fda: "Not approved. Banned as an unapproved drug.", prescription: "Illegal for human use in many jurisdictions", classification: "Unapproved drug / research chemical", sports: "Prohibited by WADA (S1)" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [{ myth: "SARMs like S4 are safe because they are selective", correction: "Selectivity is relative and partial. S4 still suppresses the HPG axis, causes documented visual side effects, and has no established human safety profile." }],
    references: [{ text: "Jasuja R et al. (2005). Pharmacological evidence of pure anabolic activity of andarine (S4). J Steroid Biochem Mol Biol." }]
  },

  {
    id: "aniracetam",
    name: "Aniracetam",
    aliases: ["Draganon", "Sarpul", "Ampamet", "N-anisoyl-2-pyrrolidinone"],
    categories: ["cognition"],
    classification: "Racetam / AMPA receptor modulator",
    whatItIs: "Aniracetam is a fat-soluble racetam nootropic first synthesized in the 1970s. It is approved as a prescription drug for cognitive impairment in Japan and some European countries. In the US it is sold as an unregulated supplement. It acts primarily as an AMPA receptor positive allosteric modulator and has documented anxiolytic effects in animals.",
    mechanism: [
      { text: "Positive allosteric modulator of AMPA receptors, slowing receptor desensitization and enhancing glutamatergic transmission", confidence: "established" },
      { text: "Increases release of acetylcholine in frontal cortex and hippocampus", confidence: "established" },
      { text: "Anxiolytic effects mediated via modulation of AMPA receptors and downstream BDNF release", confidence: "hypothesized" },
      { text: "Increases dopamine and serotonin release in cortical regions in animal studies", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "Aniracetam in post-stroke cognitive impairment", summary: "Italian RCTs and European studies showed modest improvements in cognitive tests in elderly patients with post-stroke cognitive impairment. Effect sizes were generally small and study quality varied.", outcome: "mixed", citation: "Senin U et al. (1991). Arch Gerontol Geriatr. 12(2):163-173." }], animal: [], vitro: [], anecdotal: [] },
    effects: ["AMPA receptor potentiation (established)", "Mild cognitive improvement in impaired elderly (limited human data)", "Anxiolytic effects in animal models", "Increased cortical acetylcholine release"],
    sideEffects: ["Generally well-tolerated; headache, nausea, anxiety at high doses", "Short half-life (~1-2 hours) requires frequent dosing", "Fat-soluble, must be taken with food", "Long-term safety in healthy individuals not established"],
    legal: { fda: "Not FDA approved. Sold as supplement in USA.", prescription: "Prescription in Japan and parts of Europe", classification: "Dietary supplement (USA); pharmaceutical (elsewhere)", sports: "Not banned by WADA" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Medium" },
    misconceptions: [{ myth: "Aniracetam definitively improves memory in healthy users", correction: "Human evidence is limited to cognitively impaired patients. Evidence of cognitive enhancement in healthy individuals is largely anecdotal." }],
    references: [{ text: "Senin U et al. (1991). Aniracetam in the treatment of senile dementia of Alzheimer type. Arch Gerontol Geriatr." }]
  },

  {
    id: "armodafinil",
    name: "Armodafinil",
    aliases: ["Nuvigil", "R-modafinil"],
    categories: ["cognition"],
    classification: "Wakefulness-promoting agent / Schedule IV (USA)",
    whatItIs: "Armodafinil is the R-enantiomer of modafinil, FDA-approved for narcolepsy, shift work sleep disorder, and obstructive sleep apnea. It has a longer half-life than modafinil and is considered more potent per milligram. It is widely used off-label as a cognitive enhancer and is among the most studied wakefulness agents in healthy populations.",
    mechanism: [
      { text: "Inhibits dopamine reuptake transporter (DAT), increasing extracellular dopamine, primary mechanism", confidence: "established" },
      { text: "Unlike amphetamines, does not trigger dopamine release, only reuptake inhibition", confidence: "established" },
      { text: "Increases histamine in the hypothalamus, promoting wakefulness via orexin/hypocretin pathways", confidence: "established" },
      { text: "Modest norepinephrine and serotonin reuptake inhibition also observed", confidence: "established" }
    ],
    studies: { human: [{ title: "Armodafinil improves wakefulness in shift work sleep disorder", summary: "A large multi-center RCT demonstrated significant improvement in wakefulness and reduced sleepiness in patients with shift work sleep disorder compared to placebo.", outcome: "positive", citation: "Czeisler CA et al. (2005). N Engl J Med. 353(5):476-486.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/16079370" }, { title: "Cognitive effects of modafinil/armodafinil in healthy adults", summary: "A systematic review of 24 studies found modafinil and armodafinil improved performance on complex tasks requiring attention, executive function, and learning in healthy non-sleep-deprived individuals.", outcome: "positive", citation: "Battleday RM & Brem AK. (2015). Eur Neuropsychopharmacol. 25(11):1865-1881.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/26381811" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Sustained wakefulness and alertness (established)", "Improved performance on complex cognitive tasks (meta-analytic evidence)", "Reduced fatigue in sleep-deprived individuals", "Lower abuse potential than amphetamines"],
    sideEffects: ["Headache, most common side effect", "Insomnia if taken late in the day", "Reduced appetite", "Anxiety and palpitations at higher doses", "Rare serious skin reactions (Stevens-Johnson syndrome)", "Schedule IV, controlled substance with abuse potential"],
    legal: { fda: "FDA approved for narcolepsy, SWD, OSA", prescription: "Schedule IV controlled substance", classification: "Prescription pharmaceutical", sports: "Not currently banned by WADA (was removed from prohibited list)" },
    evidenceScore: { human: "High", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Armodafinil is a safe, non-addictive 'smart drug' with no abuse potential", correction: "While lower risk than classical stimulants, armodafinil is a Schedule IV controlled substance with documented dependence cases. It is not classified as 'non-addictive.'" }],
    references: [{ text: "Czeisler CA et al. (2005). Modafinil for excessive sleepiness associated with shift-work sleep disorder. NEJM.", url: "https://pubmed.ncbi.nlm.nih.gov/16079370" }, { text: "Battleday RM & Brem AK. (2015). Modafinil for cognitive neuroenhancement in healthy non-sleep-deprived subjects. Eur Neuropsychopharmacol.", url: "https://pubmed.ncbi.nlm.nih.gov/26381811" }]
  },

  {
    id: "cabergoline",
    name: "Cabergoline",
    aliases: ["Dostinex", "Cabaser"],
    categories: ["performance", "longevity"],
    classification: "Dopamine agonist / ergoline derivative",
    whatItIs: "Cabergoline is an FDA-approved long-acting dopamine D2/D3 receptor agonist, primarily used to treat hyperprolactinemia and Parkinson's disease. In the context of performance and longevity, it is used off-label to suppress prolactin (which can rise with AAS use), improve dopamine signaling, and in some longevity research contexts for potential lifespan effects observed in animal studies.",
    mechanism: [
      { text: "Potent agonist at dopamine D2 receptors in the pituitary, suppressing prolactin secretion", confidence: "established" },
      { text: "D2/D3 agonism in striatum and limbic system, dopaminergic effects on mood and reward", confidence: "established" },
      { text: "Extended half-life (~65 hours) allows once or twice weekly dosing", confidence: "established" },
      { text: "Animal studies suggest dopaminergic interventions extend lifespan, mechanism unclear in mammals", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "Cabergoline normalizes prolactin and restores gonadal function", summary: "Multiple RCTs confirm cabergoline effectively reduces hyperprolactinemia and restores menstrual function and gonadal hormone levels in affected patients.", outcome: "positive", citation: "Webster J et al. (1994). N Engl J Med. 331(14):904-909.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/8078535" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Prolactin suppression (established)", "Restoration of gonadal function in hyperprolactinemia", "Dopaminergic mood effects", "Improved erectile function in hyperprolactinemic men"],
    sideEffects: ["Nausea and vomiting (especially at initiation)", "Cardiac valvulopathy with long-term high-dose use", "Orthostatic hypotension", "Impulse control disorders (gambling, hypersexuality), dopamine agonist class effect", "Sleep disturbances"],
    legal: { fda: "FDA approved for hyperprolactinemia", prescription: "Prescription only", classification: "Prescription pharmaceutical", sports: "Prohibited by WADA (S2 peptide hormones)" },
    evidenceScore: { human: "High", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Cabergoline is a safe way to boost dopamine and extend lifespan", correction: "Cabergoline is a potent pharmaceutical with significant side effects including cardiac valvulopathy and impulse control disorders. Animal longevity data has not been validated in humans." }],
    references: [{ text: "Webster J et al. (1994). Cabergoline vs bromocriptine for hyperprolactinemia. NEJM.", url: "https://pubmed.ncbi.nlm.nih.gov/8078535" }]
  },

  {
    id: "cardarine",
    name: "Cardarine",
    aliases: ["GW-501516", "GW501516", "Endurobol"],
    categories: ["fat-loss", "performance"],
    classification: "PPARδ agonist (abandoned pharmaceutical)",
    whatItIs: "Cardarine (GW-501516) is a PPARδ (peroxisome proliferator-activated receptor delta) agonist developed by GlaxoSmithKline and Ligand Pharmaceuticals. Clinical development was halted in 2007 after preclinical studies showed it rapidly caused cancer in multiple organ systems in rodents at doses relevant to human use. It is widely misrepresented online as a 'SARM' despite not acting on androgen receptors.",
    mechanism: [
      { text: "Agonist at PPARδ nuclear receptor, upregulating genes involved in fatty acid oxidation", confidence: "established" },
      { text: "Increases expression of ABCA1 and other reverse cholesterol transport genes", confidence: "established" },
      { text: "Activates genes promoting oxidative muscle fiber adaptation (endurance phenotype)", confidence: "established" },
      { text: "Proproliferative signaling via PPARδ in multiple tissue types, mechanism behind carcinogenicity", confidence: "established" }
    ],
    studies: { human: [], animal: [{ title: "GW-501516 causes rapid multi-organ carcinogenesis in rodents", summary: "Long-term toxicology studies in rodents showed GW-501516 produced tumors in multiple organs (liver, bladder, skin, intestine) at all doses tested, including those equivalent to proposed human doses. This led to clinical termination.", outcome: "negative", citation: "GSK Internal Toxicology Reports (2007); confirmed in Oliver WR Jr et al. (2001). PNAS. 98(9):5306-5311.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/11309497" }], vitro: [], anecdotal: [] },
    effects: ["Fatty acid oxidation upregulation (established in animals)", "Endurance improvement in rodents without exercise", "HDL elevation and lipid profile modification"],
    sideEffects: ["Carcinogenicity in multiple organ systems in animal studies, primary reason for clinical termination", "No human safety data, development stopped before human trials", "PPARδ agonism promotes proliferation of pre-existing cancer cells", "Unknown interactions with human carcinogenesis"],
    legal: { fda: "Not approved. Abandoned due to safety. FDA has issued warnings.", prescription: "Not a legal medication anywhere", classification: "Abandoned research compound; banned substance", sports: "Prohibited by WADA (S4 metabolic modulators)" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "Cardarine is a SARM that is safe for endurance and fat loss", correction: "Cardarine is not a SARM, it acts on PPARδ, not the androgen receptor. More critically, it caused cancer in every animal model studied, including at proposed human equivalent doses. Its development was formally abandoned for this reason." }],
    references: [{ text: "Oliver WR Jr et al. (2001). A selective peroxisome proliferator-activated receptor delta agonist promotes reverse cholesterol transport. PNAS.", url: "https://pubmed.ncbi.nlm.nih.gov/11309497" }]
  },

  {
    id: "cerebrolysin",
    name: "Cerebrolysin",
    aliases: ["FPF 1070", "Cere"],
    categories: ["cognition", "longevity"],
    classification: "Peptide mixture / neurotrophic agent",
    whatItIs: "Cerebrolysin is a standardized mixture of low molecular weight neuropeptides and amino acids derived from purified porcine brain proteins. It is approved for use in stroke and dementia in over 50 countries (though not the FDA), and has been extensively studied for neuroprotection, neuroregeneration, and cognitive enhancement. It is administered by IV or IM injection only, oral absorption is negligible.",
    mechanism: [
      { text: "Contains peptide fragments that mimic neurotrophic factors (BDNF, NGF, CNTF, GDNF) activity", confidence: "hypothesized" },
      { text: "Reduces glutamate excitotoxicity and calcium-mediated neuronal death in ischemia models", confidence: "established" },
      { text: "Stimulates neurogenesis and synaptic plasticity in animal models", confidence: "established" },
      { text: "Exact active components and primary mechanism of action remain incompletely characterized", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "Cerebrolysin in acute ischemic stroke: CASTA trial", summary: "A large multinational RCT (n=1,070) found no significant difference between cerebrolysin and placebo on functional outcomes after ischemic stroke. A subsequent meta-analysis suggested possible benefit in some subgroups.", outcome: "mixed", citation: "Muresanu DF et al. (2016). JAMA Neurol. 73(11):1308-1316.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/27618559" }, { title: "Cerebrolysin in Alzheimer's disease: systematic review", summary: "A Cochrane review of 6 RCTs found cerebrolysin improved global clinical status and cognitive function versus placebo in Alzheimer's patients, but noted high risk of bias in many studies.", outcome: "positive", citation: "Chen N et al. (2013). Cochrane Database Syst Rev.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/23440786" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Neuroprotection in ischemia (animal/limited human data)", "Modest cognitive improvement in Alzheimer's (limited human data)", "Neurotrophic and neurogenic effects", "Possible benefit in stroke recovery (evidence inconclusive)"],
    sideEffects: ["Generally well-tolerated in studies", "Nausea, dizziness, and agitation reported", "Allergic reactions possible (porcine-derived)", "Injection-site reactions", "Long-term safety in healthy individuals not studied"],
    legal: { fda: "Not FDA approved. Approved in 50+ other countries.", prescription: "Prescription in countries where approved", classification: "Pharmaceutical (international); research compound (USA)", sports: "Not banned by WADA" },
    evidenceScore: { human: "Medium", mechanism: "Medium", safety: "Medium" },
    misconceptions: [{ myth: "Cerebrolysin is proven to improve cognition based on its international approval", correction: "International approval does not equal FDA-standard evidence. The largest RCT (CASTA) failed to show significant benefit in stroke patients, and Alzheimer's trials carry high bias risk." }],
    references: [{ text: "Muresanu DF et al. (2016). CASTA trial: Cerebrolysin for acute ischemic stroke. JAMA Neurol.", url: "https://pubmed.ncbi.nlm.nih.gov/27618559" }]
  },

  {
    id: "cjc-1295",
    name: "CJC-1295",
    aliases: ["CJC1295", "Drug Affinity Complex-Growth Hormone-Releasing Factor"],
    categories: ["performance", "longevity"],
    classification: "Synthetic GHRH analogue",
    whatItIs: "CJC-1295 is a synthetic analogue of growth hormone-releasing hormone (GHRH) with modifications to extend its half-life. The version without DAC (Drug Affinity Complex) has a half-life of ~30 minutes, similar to natural GHRH. The DAC version binds to albumin and extends activity to ~8 days. It stimulates pituitary GH release and is used illicitly in combination with GHRPs.",
    mechanism: [
      { text: "Binds GHRH receptor (GHRHR) on somatotrophs in the pituitary, stimulating GH synthesis and secretion", confidence: "established" },
      { text: "DAC modification binds covalently to albumin via reactive maleimide group, extending half-life significantly", confidence: "established" },
      { text: "Preserves pulsatile GH release pattern (unlike exogenous GH administration)", confidence: "established" },
      { text: "Downstream IGF-1 elevation follows elevated GH, variable magnitude", confidence: "established" }
    ],
    studies: { human: [{ title: "CJC-1295 DAC elevates GH and IGF-1 in healthy adults", summary: "A dose-escalation study in healthy adults showed CJC-1295 with DAC produced sustained elevation of GH and IGF-1 for up to 2 weeks after a single injection, with dose-dependent effects.", outcome: "positive", citation: "Teichman SL et al. (2006). J Clin Endocrinol Metab. 91(3):799-805.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/16352683" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["GH pulse stimulation and sustained elevation (human data)", "IGF-1 elevation (human data)", "Preservation of pulsatile GH release pattern"],
    sideEffects: ["Water retention from GH elevation", "Injection site reactions", "Flushing and tingling shortly after injection", "Unknown long-term effects on GH axis and IGF-1 elevation", "Potential acromegalic effects with chronic overuse"],
    legal: { fda: "Not approved", prescription: "Research compound only", classification: "Research peptide", sports: "Prohibited by WADA (S2 peptide hormones)" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "CJC-1295 is a safer version of HGH", correction: "CJC-1295 stimulates endogenous GH release rather than providing exogenous GH, but chronically elevated IGF-1 and GH from any source carry similar theoretical risks. Long-term human safety has not been studied." }],
    references: [{ text: "Teichman SL et al. (2006). Prolonged stimulation of growth hormone and insulin-like growth factor I secretion by CJC-1295. J Clin Endocrinol Metab.", url: "https://pubmed.ncbi.nlm.nih.gov/16352683" }]
  },

  {
    id: "clenbuterol",
    name: "Clenbuterol",
    aliases: ["Clen", "Spiropent", "Ventipulmin"],
    categories: ["fat-loss", "performance"],
    classification: "β2-adrenergic agonist / bronchodilator",
    whatItIs: "Clenbuterol is a long-acting β2-adrenergic agonist approved in some countries as a bronchodilator for asthma and as a veterinary drug for horses. It is not FDA-approved for human use in the USA. It is widely used illicitly for fat loss and muscle preservation due to its thermogenic and mild anabolic properties.",
    mechanism: [
      { text: "Agonist at β2-adrenergic receptors in bronchial smooth muscle, bronchodilation", confidence: "established" },
      { text: "β2 receptor stimulation in adipose tissue activates lipolysis via cAMP/PKA pathway", confidence: "established" },
      { text: "Anabolic effects in skeletal muscle via β2 receptor, activates protein synthesis and inhibits proteolysis", confidence: "established" },
      { text: "Increases basal metabolic rate via thermogenic mechanisms", confidence: "established" }
    ],
    studies: { human: [{ title: "Clenbuterol in chronic obstructive pulmonary disease", summary: "Studies in COPD patients demonstrate bronchodilatory efficacy and some lean mass preservation. Cardiac side effects limit dosing.", outcome: "mixed", citation: "Martineau L et al. (1992). Clin Sci. 83(5):601-607." }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Bronchodilation (established)", "Increased lipolysis and thermogenesis", "Modest lean mass preservation", "Appetite suppression"],
    sideEffects: ["Cardiac hypertrophy with chronic use, potentially irreversible", "Tachycardia and palpitations", "Tremors and muscle cramps", "Electrolyte imbalance (hypokalemia)", "Receptor downregulation requiring cycling", "Insomnia"],
    legal: { fda: "Not approved for human use in USA. Approved for horses.", prescription: "Controlled/restricted in most countries", classification: "Veterinary drug; prohibited human drug in USA", sports: "Prohibited by WADA (S3 beta-2 agonists)" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "Clenbuterol is safe for fat loss because athletes have used it for decades", correction: "Long-term use is associated with cardiac hypertrophy, an enlargement of the heart muscle that may be permanent. This risk is well-documented and is not mitigated by cycling protocols." }],
    references: [{ text: "Martineau L et al. (1992). Clenbuterol, a beta-2-adrenergic agonist, increases lean muscle mass in elderly men. Clin Sci." }]
  },

  {
    id: "citicoline",
    name: "Citicoline",
    aliases: ["CDP-choline", "Cytidine diphosphocholine", "Cognizin"],
    categories: ["cognition"],
    classification: "Nucleotide / choline prodrug",
    whatItIs: "Citicoline (CDP-choline) is an endogenous nucleotide and choline prodrug that is a key intermediate in the biosynthesis of phosphatidylcholine, a major phospholipid component of cell membranes. It is approved as a drug for stroke and cognitive impairment in many countries. In the US it is sold as a supplement under the trade name Cognizin.",
    mechanism: [
      { text: "Hydrolyzed to cytidine and choline after oral administration; choline crosses the BBB to support acetylcholine synthesis", confidence: "established" },
      { text: "Cytidine converts to uridine in the body, which supports neuronal membrane synthesis", confidence: "established" },
      { text: "Increases dopamine receptor density in the striatum in animal models", confidence: "hypothesized" },
      { text: "Neuroprotective effects via membrane stabilization during ischemic insult", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "Citicoline in acute ischemic stroke: ICTUS trial", summary: "A large multinational RCT (n=2,298) found no significant improvement in functional outcomes at 90 days with citicoline vs placebo in ischemic stroke. Previous smaller trials had been positive.", outcome: "negative", citation: "Dávalos A et al. (2012). Lancet. 380(9839):349-357.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/22691567" }, { title: "Citicoline improves attention and memory in healthy adults", summary: "A double-blind RCT in healthy older adults (n=60) found significant improvements in attention, psychomotor speed, and executive function with citicoline 250-500mg/day.", outcome: "positive", citation: "McGlade E et al. (2012). Food Nutr Sci. 3(6):769-773." }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Choline supply for acetylcholine synthesis", "Neuronal membrane phospholipid support", "Modest cognitive improvement in some populations (human data)", "Neuroprotection in ischemia (inconsistent)"],
    sideEffects: ["Generally well-tolerated; headache, nausea, GI upset at high doses", "Blood pressure changes possible", "Insomnia at high doses", "TMAO cardiovascular risk with long-term choline supplementation (theoretical)"],
    legal: { fda: "OTC supplement in USA. Drug in many countries.", prescription: "Prescription in parts of Europe; OTC in USA", classification: "Dietary supplement (USA)", sports: "Not banned by WADA" },
    evidenceScore: { human: "Medium", mechanism: "High", safety: "High" },
    misconceptions: [{ myth: "Citicoline is proven to prevent or reverse stroke damage based on its approval in some countries", correction: "The ICTUS trial, the largest and most rigorous study, found no benefit in ischemic stroke. Regulatory approval in some countries predated this evidence." }],
    references: [{ text: "Dávalos A et al. (2012). Citicoline in the treatment of acute ischaemic stroke. Lancet.", url: "https://pubmed.ncbi.nlm.nih.gov/22691567" }]
  },

  {
    id: "clomiphene",
    name: "Clomiphene",
    aliases: ["Clomid", "Serophene", "Clomifene"],
    categories: ["performance"],
    classification: "Selective Estrogen Receptor Modulator (SERM) / fertility drug",
    whatItIs: "Clomiphene is an FDA-approved SERM used primarily for female infertility. In men, it is used off-label to stimulate the HPG axis and increase endogenous testosterone production. Unlike testosterone replacement therapy, clomiphene preserves testicular function and spermatogenesis, making it attractive for men wishing to maintain fertility while treating low testosterone.",
    mechanism: [
      { text: "Antagonizes estrogen receptors in the hypothalamus and pituitary, blocking estrogen negative feedback", confidence: "established" },
      { text: "Increased GnRH pulse frequency → elevated LH and FSH → stimulated testosterone production by Leydig cells", confidence: "established" },
      { text: "Mixed agonist/antagonist, zuclomiphene (trans-isomer) has estrogenic activity and may offset benefits", confidence: "established" }
    ],
    studies: { human: [{ title: "Clomiphene citrate increases testosterone in hypogonadal men", summary: "Multiple studies and retrospective analyses confirm clomiphene 25-50mg/day or every other day significantly raises testosterone levels in men with secondary hypogonadism while maintaining spermatogenesis.", outcome: "positive", citation: "Ramasamy R et al. (2015). BJU Int. 115(2):310-315.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/24684722" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Elevated LH, FSH, and endogenous testosterone in hypogonadal men", "Preserved spermatogenesis (unlike TRT)", "HPG axis stimulation maintaining testicular function"],
    sideEffects: ["Visual disturbances (blurred vision, halos), indicates need for cessation", "Mood changes, estrogenic activity of zuclomiphene isomer", "Hot flashes", "Long-term use may lead to pituitary adenoma in rare cases", "Not effective in primary hypogonadism (testicular failure)"],
    legal: { fda: "FDA approved for female infertility; off-label use in men", prescription: "Prescription only", classification: "Prescription pharmaceutical", sports: "Prohibited by WADA (S4 hormone modulators)" },
    evidenceScore: { human: "Medium", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Clomiphene is a natural testosterone booster with no risks", correction: "Clomiphene is a pharmaceutical drug with real side effects including visual disturbances and mood disruption. It is not a supplement and should be used under medical supervision." }],
    references: [{ text: "Ramasamy R et al. (2015). Testosterone supplementation versus clomiphene citrate for hypogonadism: an age matched comparison. BJU Int.", url: "https://pubmed.ncbi.nlm.nih.gov/24684722" }]
  },

  {
    id: "coluracetam",
    name: "Coluracetam",
    aliases: ["BCI-540", "MKC-231"],
    categories: ["cognition"],
    classification: "Racetam / high-affinity choline uptake enhancer",
    whatItIs: "Coluracetam is a synthetic racetam that primarily enhances high-affinity choline uptake (HACU), the rate-limiting step in acetylcholine synthesis. Unlike other racetams, its primary mechanism targets choline transporter activity rather than AMPA receptor modulation. It was originally developed by Mitsubishi Tanabe Pharma for Alzheimer's disease research.",
    mechanism: [
      { text: "Enhances high-affinity choline uptake (HACU) at the choline transporter in nerve terminals", confidence: "established" },
      { text: "Increases acetylcholine synthesis by increasing substrate availability at the transporter level", confidence: "established" },
      { text: "May enhance AMPA receptor activity (shared racetam class effect)", confidence: "hypothesized" },
      { text: "Possible anxiolytic effects via mGluR2/3 (metabotropic glutamate receptor) modulation", confidence: "hypothesized" }
    ],
    studies: { human: [], animal: [{ title: "Coluracetam reverses AF64A-induced cholinergic deficits in rats", summary: "Coluracetam reversed cognitive deficits in a rat model of cholinergic lesions (AF64A neurotoxin), correlating with restored HACU activity.", outcome: "positive", citation: "Pellegri G et al. (1996). Neuroscience. 75(1):167-180." }], vitro: [], anecdotal: [{ title: "Community reports of anxiolytic and visual effects", summary: "Users report reduced anxiety and intensified visual perception (color enhancement). No controlled human evidence.", outcome: "mixed" }] },
    effects: ["Enhanced choline uptake (preclinical)", "Cognitive improvement in cholinergic deficit models", "Reported anxiolytic and visual effects (anecdotal)"],
    sideEffects: ["No human clinical trials conducted", "Potential cholinergic overactivation (nausea, GI cramping) at high doses", "Unknown long-term effects", "Poorly studied pharmacokinetics in humans"],
    legal: { fda: "Not approved. Not scheduled.", prescription: "Unregulated in USA", classification: "Research chemical", sports: "Not explicitly banned" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [{ myth: "Coluracetam is interchangeable with other racetams", correction: "Coluracetam has a distinct primary mechanism (HACU enhancement) that differs from piracetam's AMPA modulation. Effects and side effect profiles may differ significantly." }],
    references: [{ text: "Pellegri G et al. (1996). Effect of MKC-231 on choline uptake in rat cholinergic neurons. Neuroscience." }]
  },

  {
    id: "desmopressin",
    name: "Desmopressin",
    aliases: ["DDAVP", "Minirin", "Stimate", "dDAVP"],
    categories: ["cognition"],
    classification: "Synthetic vasopressin analogue / antidiuretic hormone analogue",
    whatItIs: "Desmopressin is a synthetic analogue of vasopressin (antidiuretic hormone), FDA-approved for diabetes insipidus, nocturia, and von Willebrand disease. In cognitive research contexts, vasopressin receptor signaling has been linked to memory consolidation, and intranasal desmopressin is occasionally studied or used off-label for potential memory-enhancing effects. Note: this is one of the most well-established mechanisms in neuroendocrinology for memory modulation.",
    mechanism: [
      { text: "Binds V2 receptors in the kidney, promoting water reabsorption (primary pharmacological effect)", confidence: "established" },
      { text: "V1a receptor activation in the brain (amygdala, hippocampus) modulates memory consolidation and social behavior", confidence: "established" },
      { text: "Intranasal administration may provide direct CNS delivery bypassing blood-brain barrier", confidence: "hypothesized" },
      { text: "Interaction with oxytocin-related pathways in social memory formation", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "Intranasal vasopressin/desmopressin and memory in healthy subjects", summary: "Several small studies show modest improvements in verbal memory tasks with intranasal vasopressin analogues, particularly in consolidation phases. Effect sizes are small and results inconsistent.", outcome: "mixed", citation: "Perras B et al. (1997). J Sleep Res. 6(4):252-261." }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Antidiuresis and water balance regulation (established)", "Possible memory consolidation support via V1a receptors", "V1a-mediated effects on social cognition"],
    sideEffects: ["Hyponatremia, potentially fatal if fluid intake not restricted", "Headache and nausea", "Water retention and edema", "Nasal irritation with intranasal use", "Cardiovascular effects at high doses (blood pressure changes)"],
    legal: { fda: "FDA approved for DI, nocturia, and vWD. Off-label for memory.", prescription: "Prescription only", classification: "Prescription pharmaceutical", sports: "Not banned by WADA" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Medium" },
    misconceptions: [{ myth: "Desmopressin is an effective memory enhancer based on vasopressin receptor research", correction: "Mechanistic plausibility does not equal clinical efficacy. Human studies on memory enhancement are small, inconsistent, and do not support routine use for this purpose." }],
    references: [{ text: "Perras B et al. (1997). Vasopressin and memory in humans. J Sleep Res." }]
  },

  {
    id: "dextroamphetamine",
    name: "Dextroamphetamine",
    aliases: ["D-amphetamine", "Dexedrine", "Zenzedi"],
    categories: ["cognition"],
    classification: "CNS stimulant / Schedule II controlled substance",
    whatItIs: "Dextroamphetamine is the dextrorotatory isomer of amphetamine and is FDA-approved for ADHD and narcolepsy. It is among the most powerful and well-studied cognitive-enhancing compounds available, with decades of research on both therapeutic use and abuse. It has significantly greater CNS potency than the levo-isomer.",
    mechanism: [
      { text: "Reverses dopamine and norepinephrine transporters (DAT/NET), causing active release of dopamine and NE into synapses", confidence: "established" },
      { text: "Inhibits vesicular monoamine transporter (VMAT2), displacing dopamine stores into cytoplasm for release", confidence: "established" },
      { text: "Blocks MAO, reducing monoamine breakdown", confidence: "established" },
      { text: "Net effect: massive increase in synaptic dopamine, norepinephrine, and to a lesser extent serotonin", confidence: "established" }
    ],
    studies: { human: [{ title: "Dextroamphetamine improves cognitive performance in healthy adults", summary: "Controlled studies demonstrate improvements in sustained attention, working memory, and processing speed in healthy adults. Effect sizes are larger for cognitively demanding tasks.", outcome: "positive", citation: "Wiegmann DA et al. (1996). Hum Factors. 38(1):44-56." }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Dramatically improved attention, focus, and processing speed", "Reduced fatigue and appetite suppression", "Mood elevation and increased motivation", "Effective for ADHD symptom management (established)"],
    sideEffects: ["High addiction and dependence potential (Schedule II)", "Cardiovascular strain, increased heart rate and blood pressure", "Appetite suppression and weight loss", "Anxiety, paranoia at high doses", "Sleep disruption", "Psychosis with chronic high-dose use", "Withdrawal syndrome"],
    legal: { fda: "FDA approved for ADHD and narcolepsy", prescription: "Schedule II controlled substance", classification: "Prescription pharmaceutical; controlled substance", sports: "Prohibited by WADA (S6 stimulants) without TUE" },
    evidenceScore: { human: "High", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Dextroamphetamine enhances cognitive function in everyone proportionally", correction: "Effects are dose-dependent and vary by baseline dopamine function. Those with normal dopaminergic tone may show inverted-U dose-response curves, where too much impairs performance. ADHD patients may experience qualitatively different effects than neurotypical users." }],
    references: [{ text: "Wiegmann DA et al. (1996). The effects of dextroamphetamine on pilot performance. Hum Factors." }]
  },

  {
    id: "dihexa",
    name: "Dihexa",
    aliases: ["PNB-0408", "N-hexanoic-Tyr-Ile-(6)-aminohexanoic amide"],
    categories: ["cognition"],
    classification: "Angiotensin-derived peptide / HGF/MET activator",
    whatItIs: "Dihexa is a small peptide derived from angiotensin IV developed by Washington State University researchers. It has demonstrated remarkable potency in animal models for cognitive enhancement, reportedly millions of times more potent than BDNF in stimulating synaptogenesis. No human clinical trials have been conducted. It acts by facilitating hepatocyte growth factor (HGF) binding to its MET receptor.",
    mechanism: [
      { text: "Binds heparin-binding epidermal growth factor to facilitate HGF-MET receptor engagement", confidence: "established" },
      { text: "MET receptor activation promotes synaptogenesis and dendritic spine formation", confidence: "established" },
      { text: "Reverses cognitive deficits in rodent models of neurodegeneration at very low doses", confidence: "established" },
      { text: "Potential oncogenic risk via MET receptor activation, MET is a proto-oncogene", confidence: "hypothesized" }
    ],
    studies: { human: [], animal: [{ title: "Dihexa rescues cognitive function in aged rats", summary: "Subcutaneous and oral Dihexa administration rescued object recognition memory in aged rats and in a scopolamine-induced amnesia model. Effects were observed at nanomolar doses.", outcome: "positive", citation: "Benoist CC et al. (2011). J Pharmacol Exp Ther. 339(2):358-370.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/21862584" }], vitro: [], anecdotal: [{ title: "Early adopter use in nootropic community", summary: "Dihexa is used in small quantities by nootropic experimenters based on animal potency data. No pharmacokinetic or safety data exists in humans.", outcome: "neutral" }] },
    effects: ["Synaptogenesis and dendritic spine formation (animal/in vitro)", "Cognitive rescue in aged and amnesic rodent models", "Very high potency in preclinical models"],
    sideEffects: ["MET proto-oncogene activation, theoretical cancer promotion risk", "No human safety data whatsoever", "Unknown pharmacokinetics in humans", "Unknown blood-brain barrier penetration at oral doses"],
    legal: { fda: "Not approved. Not scheduled.", prescription: "Unregulated research chemical", classification: "Research peptide", sports: "Prohibited under WADA S0" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [{ myth: "Because Dihexa is millions of times more potent than BDNF, it must be highly effective in humans", correction: "Potency in cell culture and rodent models does not predict human efficacy. Additionally, MET receptor activation carries oncogenic risk that may outweigh potential cognitive benefits." }],
    references: [{ text: "Benoist CC et al. (2011). Facilitation of hippocampal synaptogenesis and spatial memory by C-terminal truncated Nle1-angiotensin IV analogues. J Pharmacol Exp Ther.", url: "https://pubmed.ncbi.nlm.nih.gov/21862584" }]
  },

  {
    id: "dsip",
    name: "DSIP",
    aliases: ["Delta Sleep-Inducing Peptide"],
    categories: ["cognition", "recovery"],
    classification: "Endogenous neuropeptide",
    whatItIs: "Delta sleep-inducing peptide (DSIP) is a naturally occurring nonapeptide found in the brain, peripheral organs, and blood. Discovered in 1974, it was named for its ability to induce delta-wave sleep in rabbits. Subsequent research has produced inconsistent results. It is studied for potential roles in sleep regulation, stress response, and pain modulation.",
    mechanism: [
      { text: "Modulates delta-wave sleep induction via interaction with hypothalamic sleep regulatory centers", confidence: "hypothesized" },
      { text: "Interacts with ACTH/CRH stress axis, potentially attenuating stress responses", confidence: "hypothesized" },
      { text: "Possible interaction with opioid receptors contributing to analgesia", confidence: "hypothesized" },
      { text: "No specific receptor has been definitively identified, mechanism remains poorly characterized", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "DSIP in insomnia: small clinical studies", summary: "Small European clinical studies in the 1980s reported improved sleep quality and reduced cortisol in insomnia patients. Effect sizes were modest and studies lacked rigorous blinding.", outcome: "mixed", citation: "Schoenenberger GA. (1984). Eur Neurol. 23(5):321-345." }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Possible delta-wave sleep induction (inconsistent)", "Stress hormone modulation", "Potential analgesic effects"],
    sideEffects: ["Limited human safety data", "No receptor identified, mechanism of action unclear", "Effects not reliably reproduced across studies", "Long-term effects unknown"],
    legal: { fda: "Not approved", prescription: "Unregulated research peptide", classification: "Research peptide", sports: "Not explicitly banned" },
    evidenceScore: { human: "Low", mechanism: "Low", safety: "Low" },
    misconceptions: [{ myth: "DSIP is a proven sleep aid because it is named 'sleep-inducing'", correction: "The name is based on original rabbit experiments that have not been consistently replicated. No human study has reliably demonstrated delta-wave sleep induction with DSIP." }],
    references: [{ text: "Schoenenberger GA. (1984). Characterization, properties and multivariate functions of delta-sleep-inducing peptide. Eur Neurol." }]
  },

  {
    id: "elamipretide",
    name: "Elamipretide",
    aliases: ["SS-31", "MTP-131", "Bendavia", "D-Arg-2'6'-dimethylTyr-Lys-Phe-NH2"],
    categories: ["longevity", "performance", "recovery"],
    classification: "Synthetic mitochondria-targeting peptide",
    whatItIs: "Elamipretide (SS-31) is a synthetic tetrapeptide that selectively targets the inner mitochondrial membrane. It interacts with cardiolipin, a phospholipid essential for mitochondrial cristae structure and electron transport chain function. It has been in clinical trials for heart failure, dry AMD, Barth syndrome, and mitochondrial myopathies. It represents one of the most mechanistically advanced mitochondria-targeting therapeutics.",
    mechanism: [
      { text: "Selectively concentrates in the inner mitochondrial membrane by interacting electrostatically with cardiolipin", confidence: "established" },
      { text: "Stabilizes cardiolipin, preserving cristae structure and electron transport chain (Complex I-IV) integrity", confidence: "established" },
      { text: "Reduces mitochondrial reactive oxygen species (ROS) production without acting as a direct antioxidant", confidence: "established" },
      { text: "Restores ATP synthesis efficiency in aged or dysfunctional mitochondria", confidence: "established" }
    ],
    studies: { human: [{ title: "SS-31 in heart failure with preserved ejection fraction: PIROUETTE trial", summary: "A Phase II RCT of elamipretide in HFpEF showed improvement in quality of life and exercise capacity, but did not meet the primary endpoint of left ventricular end-systolic volume reduction.", outcome: "mixed", citation: "Daubert MA et al. (2020). Circ Heart Fail. 13(2):e006089.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/32024393" }, { title: "Elamipretide in Barth syndrome", summary: "A small open-label study in Barth syndrome (mitochondrial cardiomyopathy) showed significant improvement in exercise capacity and cardiac function with daily SS-31 injections.", outcome: "positive", citation: "Thompson WR et al. (2021). JACC Basic Transl Sci. 6(4):317-328.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/33997421" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Mitochondrial cristae stabilization (established)", "Reduced mitochondrial ROS (established)", "Improved exercise capacity in mitochondrial disease (limited human data)", "Possible improvement in HFpEF symptoms (mixed evidence)"],
    sideEffects: ["Injection site reactions (subcutaneous delivery)", "Generally well-tolerated in clinical trials", "Long-term safety data limited", "No oral bioavailability, requires injection"],
    legal: { fda: "Under clinical investigation. Not approved.", prescription: "Clinical trial access only", classification: "Investigational drug", sports: "Prohibited under WADA S0" },
    evidenceScore: { human: "Medium", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "SS-31/Elamipretide is a proven anti-aging mitochondrial therapy", correction: "While preclinical data is compelling and clinical trials are ongoing, no indication has received FDA approval. The largest human trial had mixed primary endpoint results." }],
    references: [{ text: "Daubert MA et al. (2020). Novel mitochondria-targeting peptide in heart failure. Circ Heart Fail.", url: "https://pubmed.ncbi.nlm.nih.gov/32024393" }]
  },

  {
    id: "emoxypine",
    name: "Emoxypine",
    aliases: ["Mexidol", "Mexicor", "2-Ethyl-6-methyl-3-hydroxypyridine succinate"],
    categories: ["cognition", "longevity"],
    classification: "Antioxidant neuroprotective agent",
    whatItIs: "Emoxypine (mexidol) is a synthetic antioxidant and anxiolytic developed in Russia, approved for clinical use in Russia and some CIS countries for stroke, anxiety, and cognitive disorders. It is a derivative of pyridoxine (vitamin B6) combined with succinic acid. It is not approved in Western countries and most clinical evidence comes from Russian studies with limited external validation.",
    mechanism: [
      { text: "Inhibits lipid peroxidation by free radical scavenging in cell membranes", confidence: "established" },
      { text: "Activates succinate dehydrogenase (Complex II) and improves mitochondrial energy production via succinate", confidence: "established" },
      { text: "GABA-A receptor modulation contributing to anxiolytic effects", confidence: "hypothesized" },
      { text: "Membrane-stabilizing effects on neuronal phospholipids", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "Emoxypine in acute ischemic stroke: Russian RCTs", summary: "Multiple Russian RCTs report improved neurological recovery in stroke patients treated with emoxypine. Studies are not indexed in major Western databases and have not been independently replicated.", outcome: "positive", citation: "Voronina TA. (2009). Pharm Chem J. 43(5):256-261." }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Antioxidant membrane protection", "Improved mitochondrial energy metabolism (preclinical)", "Anxiolytic effects (Russian clinical data)", "Neuroprotection in ischemia (Russian trial data)"],
    sideEffects: ["Nausea and dry mouth", "Dizziness", "Allergic reactions", "Long-term effects not well-characterized outside Russia"],
    legal: { fda: "Not approved. Not scheduled.", prescription: "Prescription in Russia; unregulated elsewhere", classification: "Pharmaceutical (Russia); research compound (West)", sports: "Not banned" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Medium" },
    misconceptions: [{ myth: "Russian approval means emoxypine is proven effective", correction: "Russian regulatory standards and trial methodology differ from FDA/EMA standards. Independent replication in well-controlled trials is lacking." }],
    references: [{ text: "Voronina TA. (2009). Mexidol: spectrum of pharmacological effects. Pharm Chem J." }]
  },

  {
    id: "enclomiphene",
    name: "Enclomiphene",
    aliases: ["Trans-clomiphene", "Androxal", "Enclomifene"],
    categories: ["performance"],
    classification: "SERM / estrogen receptor antagonist",
    whatItIs: "Enclomiphene is the trans-isomer of clomiphene, which is the active component responsible for LH/FSH stimulation. Unlike racemic clomiphene (Clomid), it lacks the estrogenic zuclomiphene isomer, potentially providing a cleaner testosterone-stimulating effect with fewer estrogenic side effects in men. It was under FDA review for secondary hypogonadism but approval was not granted.",
    mechanism: [
      { text: "Competitive estrogen receptor antagonist in the hypothalamus and pituitary, blocking estrogen negative feedback", confidence: "established" },
      { text: "Increased GnRH → elevated LH and FSH → increased testicular testosterone production", confidence: "established" },
      { text: "Unlike racemic clomiphene, lacks the estrogenic zuclomiphene isomer, theoretically cleaner profile", confidence: "established" }
    ],
    studies: { human: [{ title: "Enclomiphene restores testosterone while maintaining spermatogenesis", summary: "Phase III trials showed enclomiphene significantly increased morning testosterone levels in men with secondary hypogonadism and preserved sperm counts, unlike TRT which reduces sperm count.", outcome: "positive", citation: "Kim ED et al. (2016). BJU Int. 117(4):677-685.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/25808233" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Testosterone restoration in secondary hypogonadism (human data)", "Preserved spermatogenesis", "Less estrogenic activity than clomiphene"],
    sideEffects: ["Hot flashes", "Visual disturbances (less common than racemic clomiphene)", "Mood changes", "Not FDA approved, access limited to research/off-label"],
    legal: { fda: "Not FDA approved (CRL issued). Off-label use.", prescription: "Prescription off-label in USA", classification: "Investigational drug / off-label Rx", sports: "Prohibited by WADA (S4)" },
    evidenceScore: { human: "Medium", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Enclomiphene is FDA-approved for hypogonadism", correction: "Despite promising Phase III data, enclomiphene received a Complete Response Letter from FDA requesting additional studies. It is not approved." }],
    references: [{ text: "Kim ED et al. (2016). Oral enclomiphene citrate raises testosterone and preserves sperm counts. BJU Int.", url: "https://pubmed.ncbi.nlm.nih.gov/25808233" }]
  },

  {
    id: "ephedrine",
    name: "Ephedrine",
    aliases: ["Ephedra alkaloid", "L-ephedrine"],
    categories: ["fat-loss", "performance"],
    classification: "Sympathomimetic amine / α and β adrenergic agonist",
    whatItIs: "Ephedrine is a sympathomimetic alkaloid found naturally in Ephedra plants and also produced synthetically. It has a long history as a decongestant and bronchodilator, and in some countries is still used for these purposes. In the fitness world it is used as a thermogenic and performance agent, often combined with caffeine. Ephedra-containing dietary supplements were banned by the FDA in 2004 following reports of cardiovascular events and deaths.",
    mechanism: [
      { text: "Directly activates α and β adrenergic receptors, increasing sympathetic nervous system tone", confidence: "established" },
      { text: "Indirectly stimulates norepinephrine release from nerve terminals", confidence: "established" },
      { text: "β3 receptor stimulation in adipose tissue activates thermogenesis and lipolysis", confidence: "established" },
      { text: "β2 receptor stimulation causes bronchodilation", confidence: "established" }
    ],
    studies: { human: [{ title: "Ephedrine-caffeine combination for weight loss: meta-analysis", summary: "A 2003 RAND Corporation meta-analysis of 52 trials found the ephedrine-caffeine combination produced modest weight loss (~0.9 kg/month) but was associated with 2-3x increased risk of adverse events.", outcome: "mixed", citation: "Shekelle PG et al. (2003). JAMA. 289(12):1537-1545.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/12672771" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Thermogenesis and increased metabolic rate", "Fat oxidation and lipolysis", "Mild performance enhancement (stimulant effects)", "Bronchodilation"],
    sideEffects: ["Tachycardia and arrhythmias", "Hypertension", "Stroke and myocardial infarction reported", "Anxiety and insomnia", "Rapid tolerance development", "Ephedra supplements banned by FDA"],
    legal: { fda: "Ephedra supplements banned (2004). Pharmaceutical ephedrine available OTC for congestion in limited doses.", prescription: "OTC in limited formulations; Rx for other uses", classification: "OTC drug (low dose); Rx drug (higher dose)", sports: "In-competition prohibition above threshold by WADA" },
    evidenceScore: { human: "Medium", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "Ephedrine is safe because it comes from a natural plant", correction: "Natural origin does not confer safety. Ephedra-based supplements caused multiple deaths and serious cardiovascular events, leading to FDA prohibition. Ephedrine has a narrow therapeutic window." }],
    references: [{ text: "Shekelle PG et al. (2003). Efficacy and safety of ephedra and ephedrine for weight loss and athletic performance. JAMA.", url: "https://pubmed.ncbi.nlm.nih.gov/12672771" }]
  },

  {
    id: "epicatechin",
    name: "Epicatechin",
    aliases: ["(-)-Epicatechin", "EC"],
    categories: ["performance", "recovery", "longevity"],
    classification: "Flavanol / plant polyphenol",
    whatItIs: "(-)-Epicatechin is a flavanol polyphenol found in high concentrations in dark chocolate, green tea, and some fruits. It has attracted research interest due to its proposed myostatin-inhibiting properties, potential for improving mitochondrial biogenesis, and cardiovascular benefits. It is one of the more actively studied 'natural' compounds for muscle-related outcomes.",
    mechanism: [
      { text: "Increases nitric oxide bioavailability via eNOS activation, improving blood flow", confidence: "established" },
      { text: "Proposed to reduce myostatin levels, studies show mixed results", confidence: "hypothesized" },
      { text: "Promotes mitochondrial biogenesis via PGC-1α pathway", confidence: "hypothesized" },
      { text: "Antioxidant effects via direct free radical scavenging and indirect Nrf2 pathway activation", confidence: "established" }
    ],
    studies: { human: [{ title: "Epicatechin improves skeletal muscle function in heart failure", summary: "A small RCT in heart failure patients showed improved skeletal muscle strength and 6-minute walk test with epicatechin supplementation, correlating with improved mitochondrial markers.", outcome: "positive", citation: "Gutiérrez-Salmeán G et al. (2014). Clin Transl Sci. 7(4):347-352.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/24698696" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Improved nitric oxide signaling (established)", "Possible myostatin reduction (inconsistent)", "Mitochondrial biogenesis (preclinical/limited human)", "Cardiovascular benefits (mostly food-based studies)"],
    sideEffects: ["Generally well-tolerated as a supplement", "Very high doses may interfere with iron absorption", "Potential for GI discomfort at high doses", "Most safety data from dietary intake, not supplemental doses"],
    legal: { fda: "Sold as dietary supplement. Not approved as drug.", prescription: "OTC supplement", classification: "Dietary supplement", sports: "Not banned by WADA" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "High" },
    misconceptions: [{ myth: "Epicatechin significantly inhibits myostatin and builds muscle", correction: "Myostatin-inhibiting effects of epicatechin in humans are inconsistent and of unclear clinical magnitude. It is not a validated myostatin inhibitor in the way that genetic knockouts or antibody treatments are." }],
    references: [{ text: "Gutiérrez-Salmeán G et al. (2014). Effects of (-)-epicatechin on molecular modulators of skeletal muscle growth and differentiation. Clin Transl Sci.", url: "https://pubmed.ncbi.nlm.nih.gov/24698696" }]
  },

  {
    id: "fasoracetam",
    name: "Fasoracetam",
    aliases: ["NS-105", "LAM-105", "NFC-1"],
    categories: ["cognition"],
    classification: "Racetam / mGluR modulator",
    whatItIs: "Fasoracetam is a racetam compound that has been in clinical development for ADHD (particularly in patients with mutations in mGluR network genes) and was also studied for cognitive impairment. Unlike other racetams, it primarily modulates metabotropic glutamate receptors (mGluR) and is a functional upregulator of GABA-B receptors.",
    mechanism: [
      { text: "Activates mGluR1 and mGluR5 (Group I metabotropic glutamate receptors)", confidence: "established" },
      { text: "Upregulates GABA-B receptor function, potentially explaining anxiolytic and anti-addictive properties", confidence: "established" },
      { text: "May counteract mGluR network disruptions relevant to certain ADHD subtypes", confidence: "hypothesized" },
      { text: "Choline uptake enhancement (shared racetam effect)", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "Fasoracetam in ADHD with mGluR gene mutations", summary: "A small open-label clinical trial showed fasoracetam reduced ADHD symptoms in adolescents with mGluR network gene variants. The study was small (n=30) and lacked placebo control.", outcome: "positive", citation: "Stahl SM et al. (2018). Mol Psychiatry. 23(6):1490-1498.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/29030697" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["mGluR modulation (established)", "Possible GABA-B upregulation (established)", "ADHD symptom improvement in specific genetic subtype (limited human data)"],
    sideEffects: ["Generally well-tolerated in studies", "Headache and GI discomfort at high doses", "GABA-B upregulation may attenuate effects of phenibut and baclofen", "Limited long-term data"],
    legal: { fda: "Not approved. Under clinical investigation.", prescription: "Research compound / off-label", classification: "Research chemical", sports: "Not explicitly banned" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Medium" },
    misconceptions: [{ myth: "Fasoracetam works for all ADHD types", correction: "The human evidence is specifically in patients with mutations in mGluR network genes, a genetic subset of ADHD. Evidence does not support general use in all ADHD presentations." }],
    references: [{ text: "Stahl SM et al. (2018). NFC-1 for mGluR-related rare genetic disorders of adolescents with ADHD. Mol Psychiatry.", url: "https://pubmed.ncbi.nlm.nih.gov/29030697" }]
  },

  {
    id: "fgf-21",
    name: "FGF-21",
    aliases: ["Fibroblast Growth Factor 21", "FGF21"],
    categories: ["fat-loss", "longevity"],
    classification: "Endogenous hormone / FGF superfamily member",
    whatItIs: "FGF-21 (Fibroblast Growth Factor 21) is an endogenous endocrine hormone secreted primarily by the liver in response to fasting, cold, and metabolic stress. It acts as a metabolic regulator promoting fatty acid oxidation, ketogenesis, and insulin sensitivity. Recombinant FGF-21 analogues are in active clinical development for NASH (non-alcoholic steatohepatitis) and obesity.",
    mechanism: [
      { text: "Activates FGFR1c/βKlotho receptor complex in adipose tissue, promoting fatty acid oxidation and UCP1 expression", confidence: "established" },
      { text: "Hepatic action promotes ketogenesis and fatty acid oxidation during fasting", confidence: "established" },
      { text: "Central effects via hypothalamic FGFR1/βKlotho reduce appetite and sweet craving", confidence: "established" },
      { text: "Improves insulin sensitivity via adiponectin-dependent mechanism in fat tissue", confidence: "established" }
    ],
    studies: { human: [{ title: "Pegbelfermin (FGF-21 analogue) in NASH: FALCON 1 trial", summary: "A Phase IIb RCT of pegbelfermin (PEGylated FGF-21) in NASH showed significant improvement in hepatic steatosis and NASH resolution vs placebo, with an acceptable safety profile.", outcome: "positive", citation: "Sanyal AJ et al. (2023). N Engl J Med. 389(22):2018-2032.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/38007780" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Hepatic steatosis reduction (human data with analogues)", "Fatty acid oxidation and ketogenesis promotion", "Appetite and sweet craving reduction", "Improved insulin sensitivity"],
    sideEffects: ["Bone density reduction with long-term FGF-21 excess (rodent data)", "Diarrhea and nausea (clinical trials)", "Injection site reactions", "Long-term endocrine effects unclear"],
    legal: { fda: "FGF-21 analogues under Phase III investigation. Not approved.", prescription: "Clinical trial access only", classification: "Investigational drug", sports: "Prohibited under WADA S0/S2" },
    evidenceScore: { human: "Medium", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Natural FGF-21 supplements can replicate the effects of FGF-21 analogues", correction: "Endogenous FGF-21 levels are regulated and tightly controlled. There are no oral supplements that meaningfully elevate FGF-21 to pharmacological levels. Clinical effects are achieved with engineered long-acting analogues administered by injection." }],
    references: [{ text: "Sanyal AJ et al. (2023). Pegbelfermin in patients with nonalcoholic steatohepatitis and compensated cirrhosis. NEJM.", url: "https://pubmed.ncbi.nlm.nih.gov/38007780" }]
  }
];
