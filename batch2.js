const NEW_COMPOUNDS_2 = [
  {
    id: "finasteride",
    name: "Finasteride",
    aliases: ["Proscar", "Propecia", "MK-906"],
    categories: ["performance", "skin"],
    classification: "5α-reductase inhibitor / FDA-approved drug",
    whatItIs: "Finasteride is an FDA-approved 5α-reductase type II inhibitor that blocks the conversion of testosterone to dihydrotestosterone (DHT). It is approved at 5mg for BPH and at 1mg for male pattern hair loss. It is used in performance contexts to prevent DHT-related side effects (hair loss, prostate enlargement) during AAS use, and clinically for androgenetic alopecia.",
    mechanism: [
      { text: "Irreversible inhibitor of 5α-reductase type II, reducing DHT synthesis in prostate, hair follicle, and liver", confidence: "established" },
      { text: "Reduces serum DHT by ~70% and prostate DHT by ~90% at 5mg", confidence: "established" },
      { text: "DHT reduction in hair follicles halts androgen-driven miniaturization in androgenetic alopecia", confidence: "established" },
      { text: "Also reduces neurosteroid production (allopregnanolone, 3α-diol), relevant to neurological side effects", confidence: "established" }
    ],
    studies: { human: [{ title: "Finasteride prevents hair loss in men: 5-year RCT", summary: "A 5-year placebo-controlled RCT (n=1553) demonstrated finasteride 1mg/day prevented progression of hair loss in 99% of men and increased hair count vs placebo.", outcome: "positive", citation: "Kaufman KD et al. (1998). J Am Acad Dermatol. 39(4):578-589.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/9777765" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["~70% reduction in serum DHT (established)", "Hair loss prevention/partial reversal (established)", "Prostate volume reduction in BPH (established)"],
    sideEffects: ["Sexual dysfunction: reduced libido, erectile dysfunction, ejaculatory disorders", "Post-finasteride syndrome, persistent sexual and cognitive effects in some men after discontinuation (debated, under investigation)", "Breast tenderness and gynecomastia", "Depression reported in a subset of users", "Reduced PSA levels (may mask prostate cancer diagnosis)"],
    legal: { fda: "FDA approved (1mg for hair loss; 5mg for BPH)", prescription: "Prescription only", classification: "Prescription pharmaceutical", sports: "Prohibited by WADA (S5 diuretics and masking agents)" },
    evidenceScore: { human: "High", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Finasteride side effects are only reported by nocebo-prone individuals", correction: "The FDA updated finasteride's label in 2012 to include persistent sexual dysfunction risks. Mechanistic explanations involving neurosteroid depletion provide biological plausibility beyond nocebo." }],
    references: [{ text: "Kaufman KD et al. (1998). Finasteride for hair loss in men. J Am Acad Dermatol.", url: "https://pubmed.ncbi.nlm.nih.gov/9777765" }]
  },

  {
    id: "follistatin",
    name: "Follistatin",
    aliases: ["FST", "Follistatin-288", "Follistatin-344", "FS"],
    categories: ["performance", "recovery"],
    classification: "Endogenous glycoprotein / myostatin antagonist",
    whatItIs: "Follistatin is a naturally occurring glycoprotein that acts as a broad antagonist of TGF-β superfamily members, most notably myostatin (GDF-8) and activin. It is produced throughout the body and plays critical roles in muscle growth regulation, folliculogenesis, and embryonic development. Genetic overexpression of follistatin in animals results in dramatic muscle hypertrophy. No approved follistatin therapy exists for muscle growth.",
    mechanism: [
      { text: "Binds myostatin (GDF-8) and activin with high affinity, neutralizing their signaling", confidence: "established" },
      { text: "Myostatin neutralization removes brake on muscle satellite cell proliferation and protein synthesis", confidence: "established" },
      { text: "Also antagonizes FSH release in the pituitary by binding activin", confidence: "established" },
      { text: "Gene therapy approaches to deliver follistatin-344 to muscle tissue are in early clinical trials for muscular dystrophy", confidence: "established" }
    ],
    studies: { human: [{ title: "Follistatin gene transfer in Becker muscular dystrophy", summary: "A small Phase I/II study using AAV-delivered follistatin to muscle in BMD/LGMD patients showed modest muscle volume increases and acceptable safety. Not a proof of efficacy for healthy populations.", outcome: "positive", citation: "Mendell JR et al. (2015). Mol Ther. 23(1):192-201.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/25322757" }], animal: [], vitro: [], anecdotal: [{ title: "Underground use of recombinant follistatin peptides", summary: "Synthetic peptide versions (not true follistatin) are sold online. Claims of myostatin inhibition are poorly substantiated, peptide bioavailability is very limited.", outcome: "neutral" }] },
    effects: ["Myostatin and activin antagonism (established)", "Dramatic muscle hypertrophy in transgenic animal models", "Potential therapeutic use in muscle-wasting diseases (early clinical data)"],
    sideEffects: ["No safety data for injected follistatin in healthy humans", "Suppression of FSH could affect reproductive function", "Potential cancer promotion (TGF-β superfamily has tumor-suppressor roles)", "Activin inhibition has broad endocrine effects"],
    legal: { fda: "Not approved. Under clinical investigation for muscular dystrophy.", prescription: "Not available outside clinical trials", classification: "Investigational biologic", sports: "Prohibited by WADA (S2 growth factors)" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "Follistatin supplements or peptides will give dramatic muscle growth like transgenic mice", correction: "Transgenic follistatin overexpression from birth is mechanistically different from periodic dosing of a peptide. Protein bioavailability from injected follistatin is poor, and no human bodybuilding data supports the dramatic effects seen in animals." }],
    references: [{ text: "Mendell JR et al. (2015). Follistatin gene therapy for sporadic inclusion body myositis. Mol Ther.", url: "https://pubmed.ncbi.nlm.nih.gov/25322757" }]
  },

  {
    id: "foxo4-dri",
    name: "FOXO4-DRI",
    aliases: ["FOXO4-p53 interfering peptide", "Senolytic peptide"],
    categories: ["longevity"],
    classification: "Synthetic senolytic peptide",
    whatItIs: "FOXO4-DRI is a synthetic D-retro-inverso peptide designed to interfere with the interaction between FOXO4 and p53 in senescent cells. Senescent cells accumulate with age and resist apoptosis by upregulating FOXO4-p53 interaction. This peptide was designed to selectively induce apoptosis in senescent cells (senolysis) while leaving healthy cells unaffected. It was developed by the group of Peter de Keizer at Utrecht University.",
    mechanism: [
      { text: "Competitively disrupts FOXO4-p53 interaction in senescent cells, releasing p53 to activate apoptotic pathways", confidence: "established" },
      { text: "Senescent cells show nuclear FOXO4 retention that healthy cells lack, basis for selectivity", confidence: "established" },
      { text: "Apoptosis induced specifically in senescent cells due to their dependence on FOXO4-p53 pro-survival signal", confidence: "established" },
      { text: "D-retro-inverso configuration confers resistance to proteolytic degradation", confidence: "established" }
    ],
    studies: { human: [], animal: [{ title: "FOXO4-DRI eliminates senescent cells and restores fitness in aged mice", summary: "Aged mice treated with FOXO4-DRI showed elimination of senescent cells, improved physical fitness, fur density restoration, and liver function improvement. One of the most compelling published senolytic animal studies.", outcome: "positive", citation: "Baar MP et al. (2017). Cell. 169(1):132-147.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/28340339" }], vitro: [], anecdotal: [{ title: "Self-experimentation by longevity enthusiasts", summary: "A small number of well-publicized self-experiments have occurred. No controlled outcomes data available.", outcome: "neutral" }] },
    effects: ["Selective senescent cell clearance in animal models", "Improved physical fitness and tissue function in aged mice", "Possible systemic rejuvenation via SASP (senescence-associated secretory phenotype) reduction"],
    sideEffects: ["No human safety data", "Potential for off-target apoptosis in non-senescent cells not fully characterized", "Unknown effects on tissue homeostasis with senescent cell depletion", "Requires injection (no oral bioavailability)"],
    legal: { fda: "Not approved. Not scheduled.", prescription: "Research compound only", classification: "Research peptide", sports: "Prohibited under WADA S0" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "FOXO4-DRI has been proven in humans based on the 2017 Cell study", correction: "The 2017 Cell study was entirely in mice. Human pharmacology, safety, dosing, and efficacy are completely unknown." }],
    references: [{ text: "Baar MP et al. (2017). Targeted apoptosis of senescent cells restores tissue homeostasis. Cell.", url: "https://pubmed.ncbi.nlm.nih.gov/28340339" }]
  },

  {
    id: "galantamine",
    name: "Galantamine",
    aliases: ["Razadyne", "Nivalin", "Reminyl"],
    categories: ["cognition"],
    classification: "Acetylcholinesterase inhibitor / nicotinic receptor modulator",
    whatItIs: "Galantamine is an FDA-approved drug for Alzheimer's disease treatment derived originally from the Caucasian snowdrop plant (Galanthus caucasicus). It is used off-label as a nootropic and by some researchers for its potential in lucid dreaming induction via cholinergic mechanisms. It has a dual mechanism unique among acetylcholinesterase inhibitors.",
    mechanism: [
      { text: "Reversible competitive inhibitor of acetylcholinesterase, increasing synaptic acetylcholine", confidence: "established" },
      { text: "Allosteric potentiating ligand (APL) at nicotinic acetylcholine receptors (nAChR), unique dual mechanism", confidence: "established" },
      { text: "nAChR sensitization may confer neuroprotective effects beyond cholinesterase inhibition", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "Galantamine in Alzheimer's disease: RCT meta-analysis", summary: "A Cochrane review of multiple RCTs confirmed galantamine significantly improved cognition, global function, and activities of daily living in mild-to-moderate Alzheimer's disease vs placebo.", outcome: "positive", citation: "Loy C & Schneider L. (2006). Cochrane Database Syst Rev.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/16437430" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Improved cognition in Alzheimer's disease (established)", "Acetylcholine system enhancement (established)", "Possible lucid dream induction via REM-stage cholinergic activation"],
    sideEffects: ["Nausea, vomiting, diarrhea (cholinergic, dose-dependent)", "Bradycardia and syncope", "Anorexia and weight loss", "Should not be used with other cholinergics simultaneously", "Cholinergic crisis at overdose"],
    legal: { fda: "FDA approved for Alzheimer's disease", prescription: "Prescription only", classification: "Prescription pharmaceutical", sports: "Not banned by WADA" },
    evidenceScore: { human: "High", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Galantamine safely enhances cognition in healthy young people", correction: "Evidence is specifically in Alzheimer's patients. Healthy individuals with normal cholinergic function may experience side effects without proportional cognitive benefit." }],
    references: [{ text: "Loy C & Schneider L. (2006). Galantamine for Alzheimer's disease. Cochrane Database Syst Rev.", url: "https://pubmed.ncbi.nlm.nih.gov/16437430" }]
  },

  {
    id: "ghrp-2",
    name: "GHRP-2",
    aliases: ["Growth Hormone Releasing Peptide-2", "Pralmorelin", "KP-102"],
    categories: ["performance", "recovery"],
    classification: "Synthetic hexapeptide GH secretagogue",
    whatItIs: "GHRP-2 is a synthetic hexapeptide growth hormone secretagogue and ghrelin receptor agonist. It is more potent than GHRP-6 for GH release and causes less appetite stimulation, making it popular in the performance and anti-aging communities. Unlike GHRP-6, it does not strongly activate the ghrelin receptor in the hypothalamus, resulting in less pronounced hunger.",
    mechanism: [
      { text: "Agonist at GHS-R1a (ghrelin receptor) in the pituitary, stimulating GH pulse release", confidence: "established" },
      { text: "Inhibits somatostatin release, amplifying GH response", confidence: "established" },
      { text: "Weaker appetite stimulation than GHRP-6 due to comparatively less hypothalamic ghrelin receptor activation", confidence: "established" },
      { text: "Downstream IGF-1 elevation from repeated GH stimulation", confidence: "established" }
    ],
    studies: { human: [{ title: "GHRP-2 stimulates GH secretion in healthy volunteers and GH-deficient patients", summary: "Studies confirm robust GH secretion following IV and subcutaneous GHRP-2 administration. GH peak amplitude is greater than with GHRP-6. Long-term functional effects not studied.", outcome: "positive", citation: "Popovic V et al. (1995). J Clin Endocrinol Metab. 80(10):2953-2959.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/7559875" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["GH pulse stimulation (human data)", "IGF-1 elevation with repeated use", "Less appetite stimulation than GHRP-6", "Water retention from GH effects"],
    sideEffects: ["Water retention", "Elevated cortisol and prolactin (co-stimulation with GH pulse)", "Unknown long-term effects on GH axis", "Potential GH receptor desensitization", "Acromegalic effects with chronic excess"],
    legal: { fda: "Not approved", prescription: "Research compound", classification: "Research peptide", sports: "Prohibited by WADA (S2)" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "GHRP-2 is equivalent to growth hormone therapy", correction: "GHRP-2 stimulates endogenous GH pulses; it does not replace therapeutic GH. Pulsatility, magnitude, and downstream effects differ from exogenous GH." }],
    references: [{ text: "Popovic V et al. (1995). GH-releasing hexapeptide: a potent GH-releasing agent in man. J Clin Endocrinol Metab.", url: "https://pubmed.ncbi.nlm.nih.gov/7559875" }]
  },

  {
    id: "guanfacine",
    name: "Guanfacine",
    aliases: ["Intuniv", "Tenex"],
    categories: ["cognition"],
    classification: "α2A adrenergic receptor agonist / antihypertensive",
    whatItIs: "Guanfacine is an FDA-approved α2A adrenergic receptor agonist approved for ADHD (extended-release) and hypertension (immediate-release). It is used off-label in cognitive enhancement contexts for its prefrontal cortex (PFC) effects, specifically for improving working memory and impulse control via norepinephrine signaling optimization without stimulant side effects.",
    mechanism: [
      { text: "Selectively activates postsynaptic α2A adrenergic receptors in the prefrontal cortex", confidence: "established" },
      { text: "Strengthens PFC network connectivity by closing HCN channels on dendritic spines, improves working memory", confidence: "established" },
      { text: "Reduces 'noise' in PFC signaling, improving signal-to-noise for attention and impulse control", confidence: "established" },
      { text: "Lower doses enhance PFC function; higher doses sedate (inverted-U dose-response)", confidence: "established" }
    ],
    studies: { human: [{ title: "Guanfacine extended-release for ADHD in children", summary: "Multiple RCTs demonstrate guanfacine ER significantly reduces ADHD symptoms including inattention and hyperactivity in children and adolescents vs placebo.", outcome: "positive", citation: "Sallee FR et al. (2009). J Am Acad Child Adolesc Psychiatry. 48(2):155-165.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/19106773" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Improved working memory and impulse control in ADHD (established)", "PFC network strengthening (established mechanistically)", "Antihypertensive effects", "Non-stimulant cognitive modulation"],
    sideEffects: ["Sedation and somnolence (dose-dependent)", "Blood pressure reduction and bradycardia", "Rebound hypertension on abrupt discontinuation", "Dizziness", "Not recommended for acute cognitive tasks requiring vigilance at higher doses"],
    legal: { fda: "FDA approved for ADHD and hypertension", prescription: "Prescription only", classification: "Prescription pharmaceutical", sports: "Not banned by WADA" },
    evidenceScore: { human: "High", mechanism: "High", safety: "High" },
    misconceptions: [{ myth: "Guanfacine will improve cognition in all healthy adults", correction: "Guanfacine's PFC-enhancing effects are most pronounced when PFC function is disrupted (ADHD, stress, aging). In healthy young adults with optimal catecholamine tone, benefits are smaller and sedation more prominent." }],
    references: [{ text: "Sallee FR et al. (2009). Guanfacine extended release in children and adolescents with ADHD. J Am Acad Child Adolesc Psychiatry.", url: "https://pubmed.ncbi.nlm.nih.gov/19106773" }]
  },

  {
    id: "hcg",
    name: "Human Chorionic Gonadotropin",
    aliases: ["HCG", "hCG", "Pregnyl", "Choragon", "Novarel"],
    categories: ["performance"],
    classification: "Peptide hormone / LH analogue",
    whatItIs: "Human chorionic gonadotropin (HCG) is a glycoprotein hormone produced naturally during pregnancy. It shares structural and functional similarity with luteinizing hormone (LH), binding to the same receptor (LHCGR) on Leydig cells in the testes to stimulate testosterone production. It is FDA-approved for certain fertility disorders and is used off-label in men to prevent testicular atrophy during TRT or to stimulate recovery of testicular function post-AAS cycle.",
    mechanism: [
      { text: "Binds LHCGR (LH/HCG receptor) on testicular Leydig cells, stimulating testosterone biosynthesis", confidence: "established" },
      { text: "Maintains intratesticular testosterone levels (ITT) during exogenous testosterone use", confidence: "established" },
      { text: "Stimulates testicular spermatogenesis indirectly via Sertoli cell paracrine effects", confidence: "established" }
    ],
    studies: { human: [{ title: "HCG maintains intratesticular testosterone during TRT", summary: "A controlled trial showed that adding low-dose HCG to testosterone replacement therapy maintained intratesticular testosterone and spermatogenesis, which decline with TRT alone.", outcome: "positive", citation: "Coviello AD et al. (2005). J Clin Endocrinol Metab. 90(5):2595-2602.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/15713727" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Maintained testicular testosterone production during TRT (established)", "Preserved testicular volume and spermatogenesis", "Testosterone restoration post-AAS cycle (used in PCT)"],
    sideEffects: ["Acne and oily skin (from testosterone stimulation)", "Gynecomastia (via increased testicular estrogen production)", "Desensitization of Leydig cell LH receptors with chronic high-dose use", "Fluid retention", "Injection site reactions"],
    legal: { fda: "FDA approved for fertility and cryptorchidism. Off-label for hypogonadism.", prescription: "Prescription only", classification: "Prescription pharmaceutical", sports: "Prohibited by WADA (S2)" },
    evidenceScore: { human: "High", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "HCG is a reliable way to restart the HPG axis after AAS use", correction: "HCG stimulates the testes directly, bypassing the HPG axis. Without concurrent SERM therapy to restore pituitary LH/FSH secretion, HCG alone does not rehabilitate HPG axis function." }],
    references: [{ text: "Coviello AD et al. (2005). Low-dose human chorionic gonadotropin maintains intratesticular testosterone. J Clin Endocrinol Metab.", url: "https://pubmed.ncbi.nlm.nih.gov/15713727" }]
  },

  {
    id: "hexarelin",
    name: "Hexarelin",
    aliases: ["Examorelin", "EP-23905", "MF-6003"],
    categories: ["performance", "recovery"],
    classification: "Synthetic hexapeptide GH secretagogue",
    whatItIs: "Hexarelin is a synthetic hexapeptide GH secretagogue and the most potent peptide-based GH-releasing compound studied in humans. It produces significantly greater GH release than GHRP-2 or GHRP-6. However, it also causes rapid desensitization of the pituitary to its effects with repeated use, limiting its practical utility for sustained GH elevation. It also has cardioprotective properties independent of GH release.",
    mechanism: [
      { text: "Agonist at GHS-R1a (ghrelin receptor) in the pituitary, most potent peptide-based agonist known", confidence: "established" },
      { text: "Inhibits somatostatin release, amplifying GH pulse", confidence: "established" },
      { text: "Rapid pituitary desensitization occurs with repeated dosing, significant limitation", confidence: "established" },
      { text: "Cardioprotective effects via CD36 receptor binding, independent of GH secretion", confidence: "established" }
    ],
    studies: { human: [{ title: "Hexarelin produces dose-dependent GH release in humans", summary: "Early clinical studies established hexarelin as the most potent GH secretagogue in human subjects. Desensitization was observed within days of continuous dosing.", outcome: "positive", citation: "Ghigo E et al. (1994). J Clin Endocrinol Metab. 78(3):693-698.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/8126143" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Potent acute GH release (human data)", "Cardioprotection in ischemia models (animal data)", "Less appetite stimulation than GHRP-6"],
    sideEffects: ["Rapid desensitization, limits sustained use", "Cortisol and prolactin co-release", "Water retention from GH", "Unknown long-term effects"],
    legal: { fda: "Not approved", prescription: "Research peptide", classification: "Research peptide", sports: "Prohibited by WADA (S2)" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "Hexarelin is the best GH secretagogue because it is the most potent", correction: "Potency at the receptor does not translate to superior outcomes. Hexarelin's rapid pituitary desensitization limits its practical usefulness for sustained GH elevation compared to other secretagogues." }],
    references: [{ text: "Ghigo E et al. (1994). Hexarelin, a potent GHRP. J Clin Endocrinol Metab.", url: "https://pubmed.ncbi.nlm.nih.gov/8126143" }]
  },

  {
    id: "honokiol",
    name: "Honokiol",
    aliases: ["Magnolia bark extract", "3',5-di-(2-propenyl)-1,1'-biphenyl-2,2'-diol"],
    categories: ["cognition", "longevity"],
    classification: "Plant-derived polyphenol / neolignane",
    whatItIs: "Honokiol is a polyphenolic compound extracted from the bark, seed cones, and leaves of Magnolia species. It has been used in traditional Chinese and Japanese medicine for centuries. Modern research has explored its broad pharmacological profile including anxiolytic, neuroprotective, anti-inflammatory, and potential anti-cancer properties. It crosses the blood-brain barrier.",
    mechanism: [
      { text: "Positive allosteric modulator of GABA-A receptors, contributes to anxiolytic effects", confidence: "established" },
      { text: "Activates SIRT3 in mitochondria, promoting mitochondrial biogenesis and reducing ROS", confidence: "established" },
      { text: "Inhibits NF-κB inflammatory signaling", confidence: "established" },
      { text: "Anti-cancer mechanisms via multiple pathways (apoptosis induction, mTOR inhibition), studied extensively in vitro", confidence: "hypothesized" }
    ],
    studies: { human: [], animal: [{ title: "Honokiol reduces anxiety in rodent models", summary: "Multiple studies in rodents demonstrate anxiolytic effects comparable to diazepam in some models, with less motor impairment. Mechanism appears primarily GABA-A mediated.", outcome: "positive", citation: "Kuribara H et al. (1999). J Pharm Pharmacol. 51(1):97-103." }], vitro: [], anecdotal: [] },
    effects: ["Anxiolytic effects (animal data)", "SIRT3 activation and mitochondrial support", "Anti-inflammatory via NF-κB inhibition", "Potential neuroprotection"],
    sideEffects: ["Generally considered safe in traditional use", "No human RCTs for most proposed effects", "Possible sedation at higher doses", "Drug interactions via CYP enzyme inhibition"],
    legal: { fda: "Not approved as drug. Sold as supplement.", prescription: "OTC supplement", classification: "Dietary supplement / herbal extract", sports: "Not banned" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Medium" },
    misconceptions: [{ myth: "Honokiol's extensive traditional use proves it is effective and safe", correction: "Traditional use is not a substitute for controlled clinical trials. Mechanism data is promising but human clinical evidence is largely absent." }],
    references: [{ text: "Kuribara H et al. (1999). The anxiolytic effect of honokiol, a minor constituent of magnolia bark. J Pharm Pharmacol." }]
  },

  {
    id: "humanin",
    name: "Humanin",
    aliases: ["HN", "HNG", "Humanin G"],
    categories: ["longevity", "cognition"],
    classification: "Mitochondria-derived peptide (MDP)",
    whatItIs: "Humanin is a small 21-amino acid peptide encoded within the mitochondrial genome (16S rRNA region). It was discovered in 2001 in screening for factors protecting against Alzheimer's-associated neurodegeneration. It is a founding member of a class of molecules called mitochondria-derived peptides (MDPs). Circulating levels decline with age and are being studied as a longevity biomarker.",
    mechanism: [
      { text: "Binds FPRL1 (formyl peptide receptor-like 1) and IL-6 receptor complex on cell surfaces", confidence: "established" },
      { text: "Inhibits Bax-mediated mitochondrial apoptosis pathway", confidence: "established" },
      { text: "Activates STAT3 signaling pathway with downstream anti-apoptotic and metabolic effects", confidence: "established" },
      { text: "Improves insulin sensitivity in animal models via IGF-1 receptor interaction", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "Humanin levels correlate with longevity in humans", summary: "An observational study found higher circulating humanin levels in centenarian offspring compared to age-matched controls, and levels correlated inversely with metabolic disease risk.", outcome: "positive", citation: "Muzumdar RH et al. (2009). Aging Cell. 8(2):194-202.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/19178663" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Neuroprotection against Alzheimer's-related amyloid toxicity (in vitro/animal)", "Anti-apoptotic effects in multiple cell types", "Improved insulin sensitivity in animal models", "Possible longevity biomarker association"],
    sideEffects: ["No clinical trial safety data for exogenous humanin", "Receptor interactions have broad downstream effects", "Unknown effects of chronic systemic humanin elevation"],
    legal: { fda: "Not approved", prescription: "Research compound", classification: "Research peptide", sports: "Prohibited under WADA S0" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [{ myth: "Because humanin declines with age, supplementing it will slow aging", correction: "Correlation between humanin levels and longevity does not establish causation. Exogenous humanin has not been tested in human clinical trials for any indication." }],
    references: [{ text: "Muzumdar RH et al. (2009). Humanin: a novel central regulator of peripheral insulin action. Aging Cell.", url: "https://pubmed.ncbi.nlm.nih.gov/19178663" }]
  },

  {
    id: "huperzine-a",
    name: "Huperzine A",
    aliases: ["Hup A", "Qian Ceng Ta extract", "(-)-Huperzine A"],
    categories: ["cognition"],
    classification: "Plant alkaloid / acetylcholinesterase inhibitor",
    whatItIs: "Huperzine A is a naturally occurring alkaloid extracted from the Chinese club moss Huperzia serrata, used in traditional Chinese medicine. It is one of the most potent natural acetylcholinesterase inhibitors known and has been studied for Alzheimer's disease treatment. It is sold as a supplement in the US and is approved as a drug for Alzheimer's in China.",
    mechanism: [
      { text: "Reversible, highly selective inhibitor of acetylcholinesterase, more selective for AChE than BuChE vs. some synthetic inhibitors", confidence: "established" },
      { text: "Crosses the blood-brain barrier effectively", confidence: "established" },
      { text: "NMDA receptor antagonism may contribute to neuroprotective effects", confidence: "hypothesized" },
      { text: "Longer duration of action than physostigmine at equivalent doses", confidence: "established" }
    ],
    studies: { human: [{ title: "Huperzine A in Alzheimer's disease: meta-analysis", summary: "A meta-analysis of 6 RCTs (n=454) found huperzine A produced modest improvements in cognition and daily function in Alzheimer's patients. Study quality was generally low.", outcome: "positive", citation: "Yang G et al. (2013). PLoS ONE. 8(9):e74916.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/24066130" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Acetylcholinesterase inhibition (well-established)", "Modest cognitive improvement in Alzheimer's (limited human data)", "Possible neuroprotection via NMDA antagonism"],
    sideEffects: ["Nausea, diarrhea, vomiting (cholinergic, dose-dependent)", "Bradycardia and hypotension", "Cholinergic toxicity at high doses", "Interactions with other cholinergic drugs", "Cycled use recommended to prevent tolerance"],
    legal: { fda: "Sold as dietary supplement in USA. Approved drug in China.", prescription: "OTC supplement (USA)", classification: "Dietary supplement (USA); pharmaceutical (China)", sports: "Not banned by WADA" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Huperzine A is safe because it is 'natural'", correction: "Huperzine A is a potent cholinesterase inhibitor, the same class as Alzheimer's drugs. Natural origin does not reduce the risk of cholinergic side effects or drug interactions." }],
    references: [{ text: "Yang G et al. (2013). Huperzine A for Alzheimer's disease: a systematic review and meta-analysis. PLoS ONE.", url: "https://pubmed.ncbi.nlm.nih.gov/24066130" }]
  },

  {
    id: "idra-21",
    name: "IDRA-21",
    aliases: ["7-Chloro-3-methyl-3,4-dihydro-2H-1,2,4-benzothiadiazine-1,1-dioxide"],
    categories: ["cognition"],
    classification: "Benzothiadiazine / AMPA receptor positive allosteric modulator",
    whatItIs: "IDRA-21 is a benzothiadiazine derivative that acts as a positive allosteric modulator of AMPA receptors. It is structurally related to aniracetam but significantly more potent. Animal studies suggest effects on cognitive enhancement and reversal of cognitive deficits. No human clinical trials have been conducted.",
    mechanism: [
      { text: "Potent positive allosteric modulator of AMPA receptors, inhibiting receptor desensitization", confidence: "established" },
      { text: "Enhances long-term potentiation (LTP) in hippocampal slices, mechanism of learning enhancement", confidence: "established" },
      { text: "Increases BDNF expression via AMPA receptor-dependent transcription", confidence: "hypothesized" }
    ],
    studies: { human: [], animal: [{ title: "IDRA-21 reverses cognitive deficits induced by alprazolam in monkeys", summary: "A notable primate study showed IDRA-21 reversed alprazolam-induced cognitive impairment in rhesus monkeys at doses well below those causing side effects. The primate model is considered more translatable than rodents.", outcome: "positive", citation: "Bhagwagar Z et al. (1998). Psychopharmacology. 138(3):396-398." }], vitro: [], anecdotal: [{ title: "Rare self-experimentation in nootropic community", summary: "Extremely limited community use due to high potency and lack of safety data. Most users report it as overstimulating.", outcome: "mixed" }] },
    effects: ["AMPA receptor potentiation (established)", "Cognitive deficit reversal in primate models", "LTP enhancement in hippocampus"],
    sideEffects: ["Convulsant risk at higher doses (AMPA potentiation can cause seizures)", "No human safety data", "Overstimulation reported anecdotally", "Unknown pharmacokinetics in humans"],
    legal: { fda: "Not approved. Not scheduled.", prescription: "Unregulated research chemical", classification: "Research chemical", sports: "Not explicitly banned" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [{ myth: "IDRA-21 is a more powerful aniracetam", correction: "While it shares AMPA modulation, IDRA-21 is far more potent and has convulsant potential. The risk-benefit profile is entirely different from aniracetam." }],
    references: [{ text: "Bhagwagar Z et al. (1998). Effects of AMPA receptor positive modulators in primates. Psychopharmacology." }]
  },

  {
    id: "idebenone",
    name: "Idebenone",
    aliases: ["Catena", "Mnesis", "CV-2619"],
    categories: ["cognition", "longevity"],
    classification: "Synthetic CoQ10 analogue",
    whatItIs: "Idebenone is a synthetic short-chain analogue of coenzyme Q10 (CoQ10). It was developed as an improvement on CoQ10 due to better solubility and ability to function as an electron carrier under hypoxic (low-oxygen) conditions where CoQ10 cannot. It has been approved in some countries for Alzheimer's disease and used in dermatology as a topical antioxidant.",
    mechanism: [
      { text: "Accepts electrons from Complex I in the electron transport chain under normoxic conditions, similar to CoQ10", confidence: "established" },
      { text: "Unlike CoQ10, idebenone can donate electrons to Complex III even under hypoxia, maintaining ATP production", confidence: "established" },
      { text: "Direct antioxidant, scavenges hydroxyl and superoxide radicals", confidence: "established" },
      { text: "Inhibits lipid peroxidation in neuronal membranes", confidence: "established" }
    ],
    studies: { human: [{ title: "Idebenone in Friedreich's ataxia: MICONOS trial", summary: "A Phase III RCT of idebenone in Friedreich's ataxia did not significantly reduce cardiac hypertrophy (primary endpoint) but showed neurological benefit in a subgroup. Results mixed overall.", outcome: "mixed", citation: "Lynch DR et al. (2010). Arch Neurol. 67(8):941-947.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/20697043" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Mitochondrial electron transport chain support under hypoxia (established)", "Antioxidant neuroprotection", "Possible cognitive support in neurodegeneration (limited/mixed human data)"],
    sideEffects: ["Generally well-tolerated in studies", "Nausea and GI discomfort", "Some concern about pro-oxidant activity under certain conditions", "Topical formulation: skin sensitivity"],
    legal: { fda: "Not FDA approved. Approved in Italy for Alzheimer's (historically).", prescription: "Supplement in USA; prescription elsewhere historically", classification: "Dietary supplement / orphan drug (Raxone for LHON in EU)", sports: "Not banned" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Idebenone is simply a better version of CoQ10 for all purposes", correction: "Idebenone's advantages are specifically under hypoxic conditions. Under normal oxygen availability, CoQ10 and idebenone have similar function. Idebenone may even be pro-oxidant in some tissue contexts." }],
    references: [{ text: "Lynch DR et al. (2010). A0001 in Friedreich ataxia. Arch Neurol.", url: "https://pubmed.ncbi.nlm.nih.gov/20697043" }]
  },

  {
    id: "igf-1-lr3",
    name: "IGF-1 LR3",
    aliases: ["Long R3 IGF-1", "LR3-IGF-1", "Long arginine 3 insulin-like growth factor 1"],
    categories: ["performance", "recovery"],
    classification: "Recombinant IGF-1 analogue",
    whatItIs: "IGF-1 LR3 is a recombinant analogue of insulin-like growth factor 1 (IGF-1) with an N-terminal arginine extension and substitution of glutamic acid at position 3 with arginine. These modifications reduce its binding affinity to IGF binding proteins (IGFBPs), extending its half-life from minutes to approximately 20–30 hours compared to native IGF-1. It is used as a research tool and illicitly in bodybuilding.",
    mechanism: [
      { text: "Binds and activates the IGF-1 receptor (IGF-1R) with potency similar to native IGF-1", confidence: "established" },
      { text: "Reduced IGFBP binding extends systemic half-life from <30 minutes to ~20 hours", confidence: "established" },
      { text: "IGF-1R activation promotes protein synthesis via PI3K/Akt/mTOR and ERK pathways", confidence: "established" },
      { text: "Stimulates muscle satellite cell proliferation and differentiation (hyperplasia potential)", confidence: "established" }
    ],
    studies: { human: [], animal: [{ title: "IGF-1 LR3 promotes muscle hypertrophy and satellite cell activation in rodents", summary: "Rodent studies demonstrate increased muscle mass and satellite cell number with IGF-1 LR3 treatment, suggesting both hypertrophic and hyperplastic mechanisms.", outcome: "positive", citation: "Owino V et al. (2001). FEBS Lett. 505(2):211-215." }], vitro: [], anecdotal: [{ title: "Widespread illicit use in competitive bodybuilding", summary: "IGF-1 LR3 is among the most used performance drugs in elite bodybuilding, reportedly for site-specific muscle hypertrophy when injected into muscle. No controlled human data.", outcome: "mixed" }] },
    effects: ["IGF-1 receptor activation and anabolic signaling (established)", "Muscle hypertrophy and satellite cell activation (animal data)", "Extended duration vs native IGF-1"],
    sideEffects: ["Hypoglycemia, IGF-1R has insulin-like metabolic effects", "Potential cancer growth promotion, IGF-1R overexpression is associated with cancer", "Acromegaly-related side effects with chronic use", "No human clinical trial safety data for this indication"],
    legal: { fda: "Not approved for human performance use", prescription: "Research compound only", classification: "Research chemical", sports: "Prohibited by WADA (S2 peptide hormones)" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "IGF-1 LR3 causes muscle hyperplasia (new muscle cells) in humans", correction: "Satellite cell hyperplasia has been shown in animals but this has not been confirmed or quantified in humans. Claims of 'permanent gains' from hyperplasia lack human evidence." }],
    references: [{ text: "Owino V et al. (2001). Age-related loss of specific force is partially explained by the lack of regional specificity in older rats. FEBS Lett." }]
  },

  {
    id: "igf-2",
    name: "IGF-2",
    aliases: ["Insulin-like Growth Factor 2", "Somatomedin A"],
    categories: ["performance", "longevity"],
    classification: "Endogenous growth factor / imprinted gene product",
    whatItIs: "IGF-2 (insulin-like growth factor 2) is an endogenous growth peptide structurally related to IGF-1 and insulin. Unlike IGF-1, which is primarily GH-regulated postnatally, IGF-2 is most highly expressed during fetal development and is subject to genomic imprinting (expressed primarily from the paternal allele). It has attracted research interest for memory enhancement and muscle effects, and plays roles in brain development.",
    mechanism: [
      { text: "Binds IGF-1R and IR (insulin receptor) with different relative affinities than IGF-1", confidence: "established" },
      { text: "Specifically binds the imprinted IGF-2R (mannose-6-phosphate receptor), serves as a clearance receptor, reducing active IGF-2", confidence: "established" },
      { text: "Memory consolidation enhancement via hippocampal IGF-2 upregulation post-learning", confidence: "established" },
      { text: "Enhances synaptic plasticity via BDNF-independent mechanisms", confidence: "hypothesized" }
    ],
    studies: { human: [], animal: [{ title: "IGF-2 enhances memory consolidation in rats", summary: "Hippocampal IGF-2 administration immediately after training significantly enhanced long-term memory in multiple rat behavioral paradigms. Effects were dose-dependent and time-sensitive.", outcome: "positive", citation: "Chen DY et al. (2011). Nature. 469(7331):491-497.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/21270894" }], vitro: [], anecdotal: [] },
    effects: ["Memory consolidation enhancement (animal data)", "Anabolic effects via IGF-1R (similar to IGF-1)", "Fetal growth regulation (established)"],
    sideEffects: ["Hypoglycemia risk (insulin receptor activity)", "IGF-2 overexpression associated with Wilms tumor and hepatocellular carcinoma", "No human safety data for supplemental use"],
    legal: { fda: "Not approved for any indication in this context", prescription: "Research compound", classification: "Research protein", sports: "Prohibited by WADA (S2)" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [{ myth: "IGF-2 is a safe memory enhancer based on animal data", correction: "IGF-2 has complex biology including cancer associations and insulin-like effects. Extrapolation of rat memory enhancement to human use is premature and unsupported by clinical data." }],
    references: [{ text: "Chen DY et al. (2011). A critical role for IGF-II in memory consolidation and enhancement. Nature.", url: "https://pubmed.ncbi.nlm.nih.gov/21270894" }]
  },

  {
    id: "ipamorelin",
    name: "Ipamorelin",
    aliases: ["NNC 26-0161"],
    categories: ["performance", "recovery", "longevity"],
    classification: "Synthetic pentapeptide GH secretagogue",
    whatItIs: "Ipamorelin is a synthetic pentapeptide GH secretagogue and selective ghrelin receptor agonist. It is notable for having high selectivity for GH release with minimal effect on cortisol and prolactin, two common co-secreted hormones with GHRP-2 and GHRP-6. This selectivity profile makes it one of the more commonly studied and used GH-releasing peptides.",
    mechanism: [
      { text: "Selective agonist at GHS-R1a (ghrelin receptor) in the pituitary", confidence: "established" },
      { text: "Highly selective for GH release, minimal co-stimulation of cortisol and prolactin vs. other GHRPs", confidence: "established" },
      { text: "Does not affect appetite significantly (low ghrelin-like effects in hypothalamus)", confidence: "established" },
      { text: "GH pulse amplitude dependent on GHRH tone, synergistic with GHRH analogues", confidence: "established" }
    ],
    studies: { human: [{ title: "Ipamorelin stimulates GH release in healthy adults", summary: "Clinical studies confirm ipamorelin reliably stimulates GH pulse release in healthy adults with a favorable cortisol and prolactin sparing profile compared to GHRP-2 and GHRP-6.", outcome: "positive", citation: "Raun K et al. (1998). Eur J Endocrinol. 139(5):552-561.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/9854482" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Selective GH pulse stimulation (human data)", "Minimal cortisol and prolactin elevation", "IGF-1 increase with repeated use", "Low appetite stimulation"],
    sideEffects: ["Water retention from GH elevation", "Facial flushing and tingling after injection", "Unknown long-term effects on pituitary and GH axis", "Injection-related site reactions"],
    legal: { fda: "Not approved", prescription: "Research compound", classification: "Research peptide", sports: "Prohibited by WADA (S2)" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "Ipamorelin's selectivity makes it essentially side-effect free", correction: "Selectivity for cortisol/prolactin sparing does not eliminate risks from chronically elevated GH and IGF-1, including potential effects on cancer growth and carbohydrate metabolism." }],
    references: [{ text: "Raun K et al. (1998). Ipamorelin, the first selective growth hormone secretagogue. Eur J Endocrinol.", url: "https://pubmed.ncbi.nlm.nih.gov/9854482" }]
  },

  {
    id: "j-147",
    name: "J-147",
    aliases: ["Curcumin-cyclohexyl ketone", "CAD-031 precursor"],
    categories: ["cognition", "longevity"],
    classification: "Synthetic curcumin derivative / ATP synthase modulator",
    whatItIs: "J-147 is a synthetic compound derived structurally from curcumin and cyclohexyl amine, developed at the Salk Institute. It was designed to have improved drug-like properties over curcumin. It has shown remarkable effects in Alzheimer's mouse models and in accelerated aging models. Its primary molecular target was identified as mitochondrial ATP synthase (specifically the alpha subunit of F-ATP synthase).",
    mechanism: [
      { text: "Binds mitochondrial ATP synthase alpha subunit, modulating mitochondrial membrane potential", confidence: "established" },
      { text: "Reduces oxidative stress markers and increases BDNF in brain tissue (animal data)", confidence: "established" },
      { text: "Activates AMPK via mitochondrial signaling", confidence: "hypothesized" },
      { text: "Reduces amyloid precursor protein processing and Aβ levels in Alzheimer's models", confidence: "established" }
    ],
    studies: { human: [], animal: [{ title: "J-147 reverses cognitive deficits in Alzheimer's and rapidly aged mice", summary: "In two different mouse models, Alzheimer's transgenic and a rapid aging model, J-147 reversed multiple features of aging including cognitive deficits, inflammatory markers, and energy metabolism disruption.", outcome: "positive", citation: "Prior M et al. (2013). Aging Cell. 12(6):1042-1054.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/24020959" }], vitro: [], anecdotal: [] },
    effects: ["Cognitive rescue in Alzheimer's and aging mouse models", "Mitochondrial ATP synthase modulation (established)", "BDNF upregulation in brain (animal)", "Anti-inflammatory effects in neuronal tissue"],
    sideEffects: ["No human data exists", "Mitochondrial ATP synthase is a critical enzyme, perturbation could have broad effects", "Unknown pharmacokinetics in humans"],
    legal: { fda: "Not approved. Preclinical only.", prescription: "Research compound", classification: "Research chemical", sports: "Prohibited under WADA S0" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [{ myth: "J-147 is ready for human use based on the Alzheimer's mouse data", correction: "J-147 is in preclinical stages only. Alzheimer's mouse models have a notoriously poor track record of predicting human clinical outcomes." }],
    references: [{ text: "Prior M et al. (2013). J-147 reverses cognitive impairment in aged Alzheimer's disease mice via a neuroprotective mechanism dependent on modulation of metabolic processes. Aging Cell.", url: "https://pubmed.ncbi.nlm.nih.gov/24020959" }]
  },

  {
    id: "kisspeptin-10",
    name: "Kisspeptin-10",
    aliases: ["Kp-10", "Metastin(112-121)", "Kiss1"],
    categories: ["performance"],
    classification: "Endogenous neuropeptide / GnRH regulator",
    whatItIs: "Kisspeptin-10 is the C-terminal decapeptide fragment of kisspeptin-54 (metastin), the endogenous ligand for the GPR54/KISS1R receptor. Kisspeptin is a critical regulator of the hypothalamic-pituitary-gonadal (HPG) axis, it is the primary stimulator of GnRH release from the hypothalamus. It is under clinical investigation for hypogonadism, fertility, and as a tool to understand HPG axis regulation.",
    mechanism: [
      { text: "Binds KISS1R (GPR54) on hypothalamic GnRH neurons, triggering GnRH pulse release", confidence: "established" },
      { text: "GnRH pulses drive LH and FSH secretion from the pituitary, stimulating gonadal function", confidence: "established" },
      { text: "Kisspeptin neurons integrate metabolic, circadian, and stress signals to regulate reproductive axis", confidence: "established" },
      { text: "Continuous kisspeptin causes receptor desensitization, pulsatile administration required for sustained LH response", confidence: "established" }
    ],
    studies: { human: [{ title: "Kisspeptin-10 stimulates LH pulsatility in hypogonadotropic hypogonadism", summary: "IV kisspeptin-10 infusion restored LH pulsatility in men with hypogonadotropic hypogonadism in a Phase I/II study. Effect required pulsatile, not continuous, administration.", outcome: "positive", citation: "Young J et al. (2012). J Clin Endocrinol Metab. 97(3):E400-E404.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/22189552" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["GnRH and LH pulse stimulation (human data)", "HPG axis activation in hypogonadotropic hypogonadism", "Potential fertility restoration in hypothalamic amenorrhea"],
    sideEffects: ["Flushing", "Receptor desensitization with continuous dosing", "Potential effects on reproductive hormone feedback loops", "No established long-term safety data in healthy individuals"],
    legal: { fda: "Investigational. Not approved.", prescription: "Clinical trial only", classification: "Investigational drug", sports: "Prohibited by WADA (S2)" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "Kisspeptin is a natural testosterone booster that can be used like HCG", correction: "Kisspeptin acts upstream of GnRH and requires pulsatile administration to avoid receptor desensitization. Its pharmacology as a subcutaneous peptide is very different from HCG, and no established dosing protocol exists for performance use." }],
    references: [{ text: "Young J et al. (2012). Kisspeptin restores pulsatile LH secretion in patients with neurokinin B signaling deficiencies. J Clin Endocrinol Metab.", url: "https://pubmed.ncbi.nlm.nih.gov/22189552" }]
  },

  {
    id: "kpv",
    name: "KPV",
    aliases: ["Lys-Pro-Val", "α-MSH C-terminal tripeptide"],
    categories: ["recovery", "skin"],
    classification: "Melanocortin-derived anti-inflammatory tripeptide",
    whatItIs: "KPV is a tripeptide (Lys-Pro-Val) derived from the C-terminal end of alpha-melanocyte stimulating hormone (α-MSH), which itself is a fragment of ACTH. It retains the anti-inflammatory properties of α-MSH while having greater stability. It has been studied for inflammatory bowel disease, skin inflammation, and wound healing, and is a current focus of research for IBD treatment.",
    mechanism: [
      { text: "Activates melanocortin receptors (MC1R, MC3R) to trigger anti-inflammatory signaling", confidence: "established" },
      { text: "Inhibits NF-κB nuclear translocation, reducing pro-inflammatory cytokine production", confidence: "established" },
      { text: "Reduces IL-1β, IL-6, and TNF-α production in macrophages and intestinal epithelial cells", confidence: "established" },
      { text: "Penetrates intestinal epithelium effectively when administered orally, unusual for a peptide", confidence: "established" }
    ],
    studies: { human: [], animal: [{ title: "KPV reduces inflammation in murine colitis models", summary: "Oral and intracolonic KPV significantly reduced colitis severity in multiple mouse models, including dextran sulfate sodium (DSS) and IL-10 knockout colitis.", outcome: "positive", citation: "Kannengiesser K et al. (2008). Inflamm Bowel Dis. 14(3):312-324.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/18026987" }], vitro: [], anecdotal: [{ title: "IBD community use based on animal data", summary: "Growing self-use among IBD patients based on animal data and theoretical safety. No human trials completed.", outcome: "neutral" }] },
    effects: ["Anti-inflammatory via melanocortin receptors (established)", "Colitis reduction in multiple animal models", "Possible gut barrier protection"],
    sideEffects: ["No human clinical trial data", "Melanocortin receptor activation has pigmentation and appetite effects", "Unknown systemic effects with long-term use"],
    legal: { fda: "Not approved. Investigational.", prescription: "Research compound", classification: "Research peptide", sports: "Not explicitly banned" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "KPV is proven for IBD based on the animal studies", correction: "Mouse IBD models have repeatedly failed to translate to human clinical benefit. No human RCT data exists for KPV." }],
    references: [{ text: "Kannengiesser K et al. (2008). Melanocyte-stimulating hormone as candidate therapy for inflammatory bowel disease. Inflamm Bowel Dis.", url: "https://pubmed.ncbi.nlm.nih.gov/18026987" }]
  },

  {
    id: "l-dopa",
    name: "L-DOPA",
    aliases: ["Levodopa", "L-3,4-dihydroxyphenylalanine", "Sinemet (with carbidopa)"],
    categories: ["cognition"],
    classification: "Dopamine precursor / Parkinson's disease drug",
    whatItIs: "L-DOPA (levodopa) is the direct biosynthetic precursor to dopamine and the most effective treatment for Parkinson's disease. It crosses the blood-brain barrier (unlike dopamine itself) and is converted to dopamine by aromatic amino acid decarboxylase (AADC). In nootropic and performance contexts, it is used for dopaminergic enhancement, growth hormone release stimulation, and cognitive effects.",
    mechanism: [
      { text: "Crosses blood-brain barrier via large neutral amino acid transporters (LAT1)", confidence: "established" },
      { text: "Decarboxylated to dopamine by AADC in brain tissue, directly replenishing dopamine", confidence: "established" },
      { text: "Peripheral conversion to dopamine and norepinephrine contributes to systemic side effects (mitigated by carbidopa)", confidence: "established" },
      { text: "High-dose L-DOPA stimulates GH release via hypothalamic dopamine receptor activation", confidence: "established" }
    ],
    studies: { human: [{ title: "L-DOPA in Parkinson's disease: decades of evidence", summary: "L-DOPA has been the gold standard for Parkinson's disease symptom management since the 1960s. Its efficacy for motor symptoms is unequivocal across thousands of studies.", outcome: "positive", citation: "Cotzias GC et al. (1969). N Engl J Med. 280(7):337-345.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/4178641" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Dopamine replenishment (established)", "Motor function improvement in Parkinson's (established)", "GH release stimulation at high doses", "Cognitive and mood effects via dopaminergic enhancement"],
    sideEffects: ["Nausea and vomiting (especially without carbidopa)", "Dyskinesias with long-term use in Parkinson's", "Orthostatic hypotension", "Hallucinations and psychosis", "Impulse control disorders", "Wearing-off effects requiring dosing escalation"],
    legal: { fda: "FDA approved for Parkinson's disease (with carbidopa)", prescription: "Prescription only", classification: "Prescription pharmaceutical", sports: "Not banned by WADA" },
    evidenceScore: { human: "High", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Taking L-DOPA as a supplement is a safe way to boost dopamine", correction: "L-DOPA is a powerful pharmaceutical with significant side effect potential including dyskinesias, hallucinations, and impulse control disorders. Unsupervised use in healthy individuals is not evidence-supported." }],
    references: [{ text: "Cotzias GC et al. (1969). Modification of parkinsonism: chronic treatment with L-DOPA. NEJM.", url: "https://pubmed.ncbi.nlm.nih.gov/4178641" }]
  },

  {
    id: "lgd-4033",
    name: "Ligandrol",
    aliases: ["LGD-4033", "VK5211", "Anabolicum"],
    categories: ["performance"],
    classification: "Selective Androgen Receptor Modulator (SARM)",
    whatItIs: "Ligandrol (LGD-4033) is a non-steroidal SARM developed by Ligand Pharmaceuticals and subsequently by Viking Therapeutics (VK5211). It is one of the most potent SARMs ever developed and has advanced to Phase II human clinical trials for hip fracture recovery. Despite not being approved, it is one of the most widely used SARMs in bodybuilding communities.",
    mechanism: [
      { text: "High-affinity selective agonist of the androgen receptor in muscle and bone tissue", confidence: "established" },
      { text: "Full agonist activity in muscle (unlike partial agonists such as Andarine)", confidence: "established" },
      { text: "Dose-dependent suppression of LH and FSH via HPG axis negative feedback", confidence: "established" },
      { text: "Lower androgenic activity in prostate and skin vs. testosterone (selectivity basis)", confidence: "established" }
    ],
    studies: { human: [{ title: "LGD-4033 Phase I: dose-dependent lean mass increase", summary: "A Phase I placebo-controlled trial in healthy men (n=76) showed dose-dependent increases in lean body mass, stairclimb power, and well-being over 21 days with acceptable safety. Testosterone suppression was noted.", outcome: "positive", citation: "Basaria S et al. (2013). J Gerontol A Biol Sci Med Sci. 68(1):87-95.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/23051807" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Lean mass accrual (human data, short-term)", "Improved physical function markers", "Bone density support (animal/early clinical data)"],
    sideEffects: ["Significant HPG axis suppression, testosterone suppression observed at all doses", "HDL cholesterol reduction", "Elevated liver enzymes reported", "No long-term safety data", "Serious liver injury cases reported in case reports"],
    legal: { fda: "Not approved. Under clinical investigation.", prescription: "Not available legally for performance use", classification: "Investigational drug; unapproved substance", sports: "Prohibited by WADA (S1)" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "SARMs like LGD-4033 are safe because they are 'selective'", correction: "Selectivity reduces (but does not eliminate) androgenic side effects. HPG axis suppression and liver toxicity are documented even in the Phase I trial. 'Selective' does not mean safe or risk-free." }],
    references: [{ text: "Basaria S et al. (2013). The safety, pharmacokinetics, and effects of LGD-4033 on human skeletal muscle in healthy young men. J Gerontol A Biol Sci Med Sci.", url: "https://pubmed.ncbi.nlm.nih.gov/23051807" }]
  },

  {
    id: "ll-37",
    name: "LL-37",
    aliases: ["CAP18/LL-37", "Human cathelicidin antimicrobial peptide", "hCAP18"],
    categories: ["recovery", "skin"],
    classification: "Endogenous cathelicidin antimicrobial peptide",
    whatItIs: "LL-37 is the only human cathelicidin-derived antimicrobial peptide, processed from the precursor hCAP18. It is produced by neutrophils, epithelial cells, and other immune cells. Beyond its antimicrobial role, it is a multifunctional peptide involved in wound healing, immune modulation, and angiogenesis. Interest exists in its therapeutic potential for wound healing and skin conditions.",
    mechanism: [
      { text: "Forms amphipathic helices that disrupt bacterial and viral membrane integrity", confidence: "established" },
      { text: "Activates EGFR (epidermal growth factor receptor) on keratinocytes to promote wound re-epithelialization", confidence: "established" },
      { text: "Stimulates angiogenesis via VEGF and FGF receptor activation", confidence: "established" },
      { text: "Modulates innate immune response, can both stimulate and suppress inflammation context-dependently", confidence: "established" }
    ],
    studies: { human: [{ title: "LL-37 expression in chronic wounds", summary: "Clinical studies show LL-37 levels are reduced in chronic non-healing wounds vs. acute wounds. Topical LL-37 application in venous leg ulcers improved healing parameters in a small controlled study.", outcome: "positive", citation: "Ramos R et al. (2011). J Invest Dermatol. 131(7):1561-1567.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/21430703" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Antimicrobial activity against bacteria and viruses (established)", "Wound healing promotion via EGFR (established)", "Angiogenesis stimulation", "Immune modulation"],
    sideEffects: ["Cytotoxicity at high concentrations", "Potential to promote autoimmune conditions (implicated in lupus and psoriasis pathogenesis)", "No systemic injection safety data in humans", "Cancer promotion potential via EGFR activation (theoretical)"],
    legal: { fda: "Not approved for therapeutic use", prescription: "Research compound", classification: "Research peptide", sports: "Not explicitly banned" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "LL-37 is purely beneficial because it is an endogenous immune peptide", correction: "LL-37 is implicated in the pathogenesis of psoriasis and lupus, it can promote autoimmunity when dysregulated. Its concentration-dependent cytotoxicity and pro-inflammatory capacity mean exogenous administration carries meaningful risk." }],
    references: [{ text: "Ramos R et al. (2011). LL-37 in wounds. J Invest Dermatol.", url: "https://pubmed.ncbi.nlm.nih.gov/21430703" }]
  },

  {
    id: "meldonium",
    name: "Meldonium",
    aliases: ["Mildronate", "THP", "3-(2,2,2-trimethylhydrazinium)propionate"],
    categories: ["performance"],
    classification: "GAMB inhibitor / cardioprotective drug",
    whatItIs: "Meldonium (mildronate) is a drug developed in Latvia and approved in several Eastern European countries for heart failure, angina, and myocardial infarction. It inhibits carnitine biosynthesis, reducing fatty acid transport into mitochondria and shifting energy metabolism toward glucose, a more oxygen-efficient substrate. It gained worldwide attention when Maria Sharapova tested positive for it in 2016 after WADA added it to the prohibited list.",
    mechanism: [
      { text: "Inhibits gamma-butyrobetaine hydroxylase (GAMB), blocking the final step in carnitine biosynthesis", confidence: "established" },
      { text: "Reduced carnitine reduces long-chain fatty acid transport into mitochondria, shifting to glucose metabolism", confidence: "established" },
      { text: "Glucose oxidation is more O2-efficient per ATP produced, beneficial during ischemia", confidence: "established" },
      { text: "Possible NO-dependent vasodilatory effects", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "Meldonium in stable angina: RCT", summary: "Multiple Eastern European RCTs demonstrate improved exercise tolerance and reduced angina frequency in patients with ischemic heart disease treated with meldonium.", outcome: "positive", citation: "Sjakste N et al. (2005). Drug Metabol Drug Interact. 21(1):51-68." }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Improved exercise tolerance in ischemic heart disease (Eastern European data)", "Metabolic shift from fat to glucose oxidation", "Cardioprotection under ischemic conditions"],
    sideEffects: ["GI side effects (nausea, dyspepsia)", "Long-term carnitine depletion, implications in non-ischemic contexts unknown", "Data primarily from Eastern European trials with limited external validation"],
    legal: { fda: "Not FDA approved. Not available in USA.", prescription: "Approved in Baltic states, Russia, Ukraine", classification: "Pharmaceutical (Eastern Europe); prohibited substance (sports)", sports: "Prohibited by WADA since 2016 (S4 metabolic modulators)" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Meldonium is a proven performance-enhancing drug", correction: "The evidence for performance enhancement in healthy athletes (vs. ischemic patients) is absent. WADA added it to the list based on physiological mechanism and anecdotal athlete use, not controlled performance enhancement trials." }],
    references: [{ text: "Sjakste N et al. (2005). Mildronate: an antiischemic drug for neurological indications. Drug Metabol Drug Interact." }]
  },

  {
    id: "melanotan-2",
    name: "Melanotan II",
    aliases: ["MT-II", "MT-2", "Melanotan 2"],
    categories: ["skin", "performance"],
    classification: "Synthetic melanocortin receptor agonist",
    whatItIs: "Melanotan II is a synthetic analogue of alpha-melanocyte stimulating hormone (α-MSH) that was originally developed as a potential sunless tanning agent and for sexual dysfunction. Clinical development was discontinued due to safety concerns. It is now widely sold illegally online for tanning and sexual enhancement. Bremelanotide (PT-141), a derivative, was FDA-approved for female hypoactive sexual desire disorder.",
    mechanism: [
      { text: "Non-selective agonist of melanocortin receptors MC1R, MC3R, MC4R, and MC5R", confidence: "established" },
      { text: "MC1R activation in melanocytes increases eumelanin (dark pigment) production, tanning effect", confidence: "established" },
      { text: "MC4R activation in the hypothalamus, primary mechanism of sexual arousal and erection", confidence: "established" },
      { text: "MC3R/MC4R activation also reduces appetite (anorectic effect)", confidence: "established" }
    ],
    studies: { human: [{ title: "Melanotan II induces tanning and erections: early trials", summary: "Phase I/II trials confirmed Melanotan II increased skin pigmentation and spontaneous erections in men. Multiple adverse events including nausea, facial flushing, and automatic erections led to development of the more selective PT-141.", outcome: "mixed", citation: "Dorr RT et al. (1996). Life Sci. 58(20):1777-1784.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/8637402" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Skin tanning via MC1R-driven melanogenesis (established)", "Penile erection and sexual arousal via MC4R (established)", "Appetite suppression (established)", "Spontaneous erections (not dose-controlled)"],
    sideEffects: ["Nausea, very common", "Facial flushing", "Automatic/unwanted erections", "Yawning and stretching (MC4R effects)", "Darkening of existing moles (requires monitoring)", "New nevi formation, melanoma risk cannot be excluded", "No long-term safety data; clinical development abandoned"],
    legal: { fda: "Not approved. FDA has issued multiple warnings.", prescription: "Illegal; not available as a licensed drug", classification: "Unapproved drug; illegal in most jurisdictions", sports: "Prohibited by WADA (S4)" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "Melanotan II is a safe tanning alternative because it mimics a natural process", correction: "MT-II's non-selective receptor activation causes multiple physiological effects beyond tanning, including uncontrolled erections and concerns about melanocytic change. Clinical development was abandoned specifically due to safety concerns." }],
    references: [{ text: "Dorr RT et al. (1996). Evaluation of melanotan-II, a superpotent cyclic melanotropic peptide in a pilot phase-I clinical study. Life Sci.", url: "https://pubmed.ncbi.nlm.nih.gov/8637402" }]
  },

  {
    id: "methylene-blue",
    name: "Methylene Blue",
    aliases: ["MB", "Methylthioninium chloride", "3,7-bis(dimethylamino)phenothiazin-5-ium chloride"],
    categories: ["cognition", "longevity"],
    classification: "Phenothiazine dye / mitochondrial electron carrier",
    whatItIs: "Methylene blue is a synthetic phenothiazine compound with a history dating to the 19th century. It is FDA-approved for methemoglobinemia treatment. It functions as an alternative electron carrier in the mitochondrial electron transport chain, bypassing dysfunctional Complex I and III, and has been studied for neuroprotection, cognitive enhancement, and various other applications including anti-aging.",
    mechanism: [
      { text: "Acts as an electron cycling agent, accepts electrons from NADH and transfers them to cytochrome c, bypassing Complex I-III", confidence: "established" },
      { text: "Reduces methemoglobin to hemoglobin via NADPH-dependent methemoglobin reductase", confidence: "established" },
      { text: "MAO inhibitor at higher doses (>1 μg/mL plasma), serotonin and dopamine elevation", confidence: "established" },
      { text: "Reduces tau and amyloid pathology in Alzheimer's models (also as LMT-X)", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "Methylene blue improves cognitive performance: placebo-controlled trial", summary: "A single-dose crossover study (n=26) found low-dose methylene blue (280mg) improved episodic memory and processing speed on fMRI tasks vs. placebo.", outcome: "positive", citation: "Wrubel KM et al. (2007). Behav Brain Res. 176(1):210-213." }, { title: "LMTX (leuco-methylthioninium) in Alzheimer's: Phase III", summary: "Phase III RCT of LMTX (reduced MB form) as add-on therapy in Alzheimer's failed to show benefit. Possible benefit seen only in a small monotherapy subgroup.", outcome: "mixed", citation: "Gauthier S et al. (2016). Lancet. 388(10048):1062-1063.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/27237706" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Alternative electron carrier in mitochondria (established)", "Methemoglobin reduction (established)", "Possible cognitive enhancement at low doses (limited human data)", "MAO inhibition at higher doses"],
    sideEffects: ["Turns urine and sometimes skin blue/green", "MAO inhibition at higher doses, drug interaction risk (serotonin syndrome)", "Oxidative damage at excessive doses (pro-oxidant above threshold)", "Contraindicated in G6PD deficiency"],
    legal: { fda: "FDA approved for methemoglobinemia. Off-label for other uses.", prescription: "Prescription for IV use; available OTC as supplement in some forms", classification: "Approved pharmaceutical (IV); supplement (oral low-dose)", sports: "Not banned by WADA" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Low-dose methylene blue is completely safe because it is FDA approved", correction: "FDA approval is for methemoglobinemia treatment via IV. Oral low-dose supplementation is off-label, and the compound has a narrow dose-dependent risk profile including pro-oxidant effects at high doses and MAO inhibition." }],
    references: [{ text: "Gauthier S et al. (2016). Efficacy and safety of tau-aggregation inhibitor therapy in patients with mild or mild-to-moderate Alzheimer's disease. Lancet.", url: "https://pubmed.ncbi.nlm.nih.gov/27237706" }]
  },

  {
    id: "modafinil",
    name: "Modafinil",
    aliases: ["Provigil", "Alertec", "Modavigil"],
    categories: ["cognition"],
    classification: "Wakefulness-promoting agent / Schedule IV controlled substance",
    whatItIs: "Modafinil is an FDA-approved wakefulness-promoting agent consisting of a racemic mixture of R- and S-enantiomers (R-modafinil = armodafinil). It is approved for narcolepsy, shift work sleep disorder, and obstructive sleep apnea. It is among the most widely used and studied cognitive enhancers in both clinical and healthy populations.",
    mechanism: [
      { text: "Primary mechanism: inhibits dopamine reuptake transporter (DAT), increases extracellular dopamine", confidence: "established" },
      { text: "Does not cause dopamine release (unlike amphetamines), lower abuse liability", confidence: "established" },
      { text: "Histaminergic activation in the hypothalamus via orexin/hypocretin pathway", confidence: "established" },
      { text: "Norepinephrine reuptake inhibition in prefrontal cortex contributes to cognitive effects", confidence: "established" }
    ],
    studies: { human: [{ title: "Modafinil for cognitive enhancement in healthy non-sleep-deprived adults", summary: "A 2015 systematic review of 24 placebo-controlled studies found modafinil improved attention, executive function, and learning in healthy non-sleep-deprived adults, particularly on complex task performance.", outcome: "positive", citation: "Battleday RM & Brem AK. (2015). Eur Neuropsychopharmacol. 25(11):1865-1881.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/26381811" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Sustained wakefulness (established)", "Improved complex cognitive task performance (human data)", "Reduced fatigue without major cardiovascular effects", "Lower abuse potential than amphetamines"],
    sideEffects: ["Headache (most common)", "Insomnia if dosed late", "Nausea and reduced appetite", "Rare serious skin reactions (SJS/TEN)", "Drug interactions via CYP3A4/CYP2C19 inhibition", "Schedule IV controlled substance"],
    legal: { fda: "FDA approved for narcolepsy, SWD, OSA", prescription: "Schedule IV controlled substance", classification: "Prescription pharmaceutical", sports: "Not currently banned by WADA" },
    evidenceScore: { human: "High", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Modafinil is a safe 'smart drug' with no addiction potential", correction: "Modafinil is Schedule IV with documented dependence cases. While abuse liability is lower than amphetamines, it is not zero. Dependence on it for wakefulness can develop with chronic use." }],
    references: [{ text: "Battleday RM & Brem AK. (2015). Modafinil for cognitive neuroenhancement in healthy non-sleep-deprived subjects. Eur Neuropsychopharmacol.", url: "https://pubmed.ncbi.nlm.nih.gov/26381811" }]
  },

  {
    id: "mots-c",
    name: "MOTS-c",
    aliases: ["Mitochondrial ORF of the 12S rRNA type-c", "MOTS c"],
    categories: ["longevity", "fat-loss", "performance"],
    classification: "Mitochondria-derived peptide (MDP)",
    whatItIs: "MOTS-c is a 16-amino acid mitochondria-derived peptide (MDP) encoded in the mitochondrial 12S rRNA. Discovered in 2015 by Pinchas Cohen's group at USC, it regulates nuclear gene expression and metabolic homeostasis. Circulating MOTS-c levels decline with aging and metabolic disease. It is being investigated as an exercise mimetic and metabolic therapeutic.",
    mechanism: [
      { text: "Translocates to the nucleus during metabolic stress, regulating antioxidant gene expression (ARE pathway)", confidence: "established" },
      { text: "Activates AMPK, increasing glucose uptake, fatty acid oxidation, and insulin sensitivity", confidence: "established" },
      { text: "Inhibits the folate cycle and de novo purine biosynthesis, activating AMPK via AICAR accumulation", confidence: "established" },
      { text: "Exercise increases circulating MOTS-c; exogenous MOTS-c mimics some exercise adaptations in mice", confidence: "established" }
    ],
    studies: { human: [{ title: "MOTS-c levels decline with aging and metabolic disease", summary: "Observational studies show MOTS-c plasma levels are lower in older adults, obese individuals, and those with type 2 diabetes. Levels correlate positively with insulin sensitivity.", outcome: "neutral", citation: "Lee C et al. (2015). Cell Metab. 21(3):443-454.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/25738459" }], animal: [{ title: "MOTS-c improves insulin sensitivity and prevents obesity in mice", summary: "Exogenous MOTS-c administration prevented high-fat diet-induced obesity and insulin resistance in mice, with exercise-like metabolic adaptations.", outcome: "positive", citation: "Lee C et al. (2015). Cell Metab. 21(3):443-454.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/25738459" }], vitro: [], anecdotal: [] },
    effects: ["AMPK activation and improved insulin sensitivity (animal/mechanistic)", "Obesity prevention in mouse models", "Exercise mimetic properties (preclinical)", "Antioxidant gene regulation via ARE pathway"],
    sideEffects: ["No human clinical trial data for exogenous MOTS-c", "Unknown pharmacokinetics and bioavailability in humans", "AMPK activation effects are broad, unknown systemic consequences"],
    legal: { fda: "Not approved. Preclinical only.", prescription: "Research compound", classification: "Research peptide", sports: "Prohibited under WADA S0" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "MOTS-c is a validated exercise mimetic for humans", correction: "Exercise mimetic effects have only been demonstrated in mice. Human clinical trials have not been conducted for exogenous MOTS-c." }],
    references: [{ text: "Lee C et al. (2015). MOTS-c: A mitochondrial-derived peptide regulating muscle and fat metabolism. Cell Metab.", url: "https://pubmed.ncbi.nlm.nih.gov/25738459" }]
  },

  {
    id: "noopept",
    name: "Noopept",
    aliases: ["N-phenylacetyl-L-prolylglycine ethyl ester", "GVS-111", "Omberacetam"],
    categories: ["cognition"],
    classification: "Dipeptide nootropic / prodrug",
    whatItIs: "Noopept is a synthetic dipeptide (N-phenylacetyl-L-prolylglycine ethyl ester) developed in Russia, approved in Russia for cognitive impairment treatment. It is a prodrug that is hydrolyzed to cycloprolylglycine (CPG), an endogenous neuropeptide, after absorption. It is often marketed as up to 1000x more potent than piracetam on a gram-for-gram basis, though this is a rough approximation.",
    mechanism: [
      { text: "Metabolized to cycloprolylglycine (CPG), an endogenous dipeptide that acts on AMPA and NMDA receptors", confidence: "established" },
      { text: "Increases expression of BDNF and NGF in the hippocampus", confidence: "established" },
      { text: "Positive allosteric modulation of AMPA receptors via CPG metabolite", confidence: "established" },
      { text: "Anxiolytic and mood-brightening effects observed in animal models via still-unclear mechanisms", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "Noopept in cognitive impairment post-traumatic brain injury", summary: "Russian RCTs report improved cognitive outcomes in patients with post-TBI and post-stroke cognitive impairment. Studies are not published in peer-reviewed Western journals and lack external validation.", outcome: "positive", citation: "Ostrovskaya RU et al. (2012). Zh Nevrol Psikhiatr Im S S Korsakova. 112(9):16-21." }], animal: [], vitro: [], anecdotal: [] },
    effects: ["AMPA receptor potentiation via CPG metabolite", "BDNF and NGF upregulation in hippocampus", "Cognitive improvement in impaired patients (Russian data)", "Possible anxiolytic effects"],
    sideEffects: ["Generally well-tolerated at typical doses", "Irritability, headache at higher doses", "Limited independent safety data", "Russian-only clinical evidence limits external validity"],
    legal: { fda: "Not FDA approved. Not scheduled in USA.", prescription: "Prescription in Russia; unregulated in USA", classification: "Research chemical (USA); pharmaceutical (Russia)", sports: "Not explicitly banned by WADA" },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Medium" },
    misconceptions: [{ myth: "Noopept is 1000x more potent than piracetam, therefore far more effective", correction: "Potency refers to dose required, not effect magnitude. The comparison is based on animal behavioral studies and does not imply noopept produces larger or better cognitive effects than piracetam in humans." }],
    references: [{ text: "Ostrovskaya RU et al. (2012). Neuroprotective effect of novel cognitive enhancer noopept on AD-related cellular model. J Biomed Sci." }]
  },

  {
    id: "nmn",
    name: "Nicotinamide Mononucleotide",
    aliases: ["NMN", "β-NMN", "NMN supplement"],
    categories: ["longevity", "cognition"],
    classification: "NAD+ precursor / endogenous nucleotide",
    whatItIs: "Nicotinamide mononucleotide (NMN) is a naturally occurring nucleotide and direct precursor to NAD+ in the Preiss-Handler pathway. It is produced endogenously from nicotinamide and ribose-5-phosphate. Oral NMN supplementation aims to restore age-related NAD+ decline in tissues. It has advanced further into human clinical trials than most NAD+ precursors and is one of the most commercially promoted longevity supplements.",
    mechanism: [
      { text: "Converted to NAD+ via the Preiss-Handler pathway (NMNAT enzymes)", confidence: "established" },
      { text: "Raises blood and tissue NAD+ levels in humans, confirmed in RCTs", confidence: "established" },
      { text: "Elevated NAD+ activates sirtuins (SIRT1-7) and PARP enzymes", confidence: "established" },
      { text: "Slr1t1 (Slc12a8) transporter may enable direct cellular NMN uptake in the gut, mechanistic debate ongoing", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "NMN raises blood NAD+ and improves insulin sensitivity in older women", summary: "A 10-week double-blind RCT (n=25 per group) showed NMN supplementation significantly raised blood NAD+ levels and improved muscle insulin signaling in overweight older women, though primary outcomes were not all statistically significant.", outcome: "mixed", citation: "Yoshino M et al. (2021). Science. 372(6547):1224-1229.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/34112745" }, { title: "NMN supplementation improves aerobic capacity in amateur runners", summary: "A 6-week RCT in 48 trained runners showed NMN improved aerobic capacity and blood oxygen utilization vs placebo.", outcome: "positive", citation: "Yi L et al. (2023). Front Physiol. 12:796237.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/35153805" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["NAD+ elevation in blood and tissues (established human data)", "Possible improvement in insulin sensitivity in older women (limited RCT)", "Aerobic capacity improvement in athletes (small RCT)", "Downstream sirtuin and PARP activation (mechanistic)"],
    sideEffects: ["Generally well-tolerated in short-term studies", "Nausea and GI discomfort at high doses", "Long-term effects of chronically elevated NAD+ unknown", "Cancer biology implications (NAD+ is required by cancer cells too)"],
    legal: { fda: "Sold as dietary supplement. FDA issued guidance that NMN may not qualify as a supplement due to prior drug investigation.", prescription: "Supplement in most countries (regulatory status evolving)", classification: "Dietary supplement (contested)", sports: "Not banned by WADA" },
    evidenceScore: { human: "Medium", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "NMN supplementation has been proven to extend human lifespan", correction: "No human longevity outcome data exists. Human trials confirm NAD+ elevation but have not demonstrated meaningful anti-aging effects beyond surrogate biomarkers in small populations." }],
    references: [{ text: "Yoshino M et al. (2021). Nicotinamide mononucleotide increases muscle insulin sensitivity in prediabetic women. Science.", url: "https://pubmed.ncbi.nlm.nih.gov/34112745" }]
  },

  {
    id: "nr",
    name: "Nicotinamide Riboside",
    aliases: ["NR", "Niagen", "Tru Niagen"],
    categories: ["longevity"],
    classification: "NAD+ precursor / vitamin B3 derivative",
    whatItIs: "Nicotinamide Riboside (NR) is a naturally occurring form of vitamin B3 that serves as a highly bioavailable NAD+ precursor. It was discovered as a NAD+ precursor in 2004 by Charles Brenner. NR is commercially available as Niagen/Tru Niagen and has been the subject of numerous human clinical trials. Unlike NMN, NR must be dephosphorylated before cellular uptake.",
    mechanism: [
      { text: "Converted to NMN and then to NAD+ intracellularly via nicotinamide riboside kinase (NRK) enzymes", confidence: "established" },
      { text: "Raises blood and tissue NAD+ levels in humans, well-established in RCTs", confidence: "established" },
      { text: "Less efficient than NMN at raising NAD+ in some tissues due to conversion steps required", confidence: "hypothesized" },
      { text: "Downstream sirtuin and PARP activation from elevated NAD+", confidence: "established" }
    ],
    studies: { human: [{ title: "NR supplementation raises blood NAD+ in healthy adults", summary: "Multiple RCTs confirm NR supplementation (250-2000mg/day) dose-dependently raises blood NAD+ levels in healthy adults. Conversion efficiency varies between individuals.", outcome: "positive", citation: "Trammell SA et al. (2016). Nat Commun. 7:12948.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/27669236" }, { title: "NR does not improve mitochondrial or metabolic function in aged muscle", summary: "A well-designed RCT found NR supplementation raised muscle NAD+ metabolites but did not improve mitochondrial biogenesis, exercise capacity, or muscle function in older adults.", outcome: "negative", citation: "Elhassan YS et al. (2019). Cell Rep. 28(7):1717-1728.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/31412242" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Blood and tissue NAD+ elevation (established human data)", "Sirtuin and PARP activation (mechanistic)", "No demonstrated functional benefit in aged muscle (RCT data)"],
    sideEffects: ["Generally well-tolerated", "Nausea and flushing (less than niacin)", "Long-term safety with chronically elevated NAD+ not established"],
    legal: { fda: "Dietary supplement (generally regarded as safe by FDA)", prescription: "OTC supplement", classification: "Dietary supplement", sports: "Not banned" },
    evidenceScore: { human: "Medium", mechanism: "High", safety: "High" },
    misconceptions: [{ myth: "Raising NAD+ with NR supplements is proven to improve muscle function in aging", correction: "The most rigorous human RCT found no improvement in muscle mitochondrial function or exercise capacity in older adults despite successful NAD+ elevation. NAD+ biomarker improvement does not automatically translate to functional benefit." }],
    references: [{ text: "Elhassan YS et al. (2019). Nicotinamide riboside augments the aged human skeletal muscle NAD+ metabolome and induces transcriptomic and anti-inflammatory signatures. Cell Rep.", url: "https://pubmed.ncbi.nlm.nih.gov/31412242" }]
  },

  {
    id: "nsi-189",
    name: "NSI-189",
    aliases: ["NSI-189 phosphate", "Neuralstem compound 189"],
    categories: ["cognition"],
    classification: "Neurogenic compound / hippocampal proliferation stimulator",
    whatItIs: "NSI-189 is a synthetic small molecule developed by Neuralstem Inc. that was shown to stimulate neurogenesis in the hippocampus in preclinical models. It advanced to Phase I and II clinical trials for major depressive disorder (MDD) and cognitive impairment. The compound's mechanism of action remains incompletely characterized.",
    mechanism: [
      { text: "Stimulates neural stem cell proliferation in the hippocampus in rodent models", confidence: "established" },
      { text: "Increases hippocampal volume in rodents, potential relevance to depression and cognition", confidence: "established" },
      { text: "Exact molecular target not definitively identified, mechanism incompletely understood", confidence: "hypothesized" },
      { text: "May interact with PI3K/Akt and MAPK/ERK pathways relevant to neuronal survival", confidence: "hypothesized" }
    ],
    studies: { human: [{ title: "NSI-189 Phase II trial in major depressive disorder", summary: "A Phase II RCT (n=220) failed to significantly improve the primary depression outcome (HDRS scale) vs. placebo. Some secondary cognitive measures showed modest improvement. Development status uncertain.", outcome: "negative", citation: "Fava M et al. (2016). Mol Psychiatry. 21(10):1412-1420.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/26809840" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Hippocampal neurogenesis stimulation (animal models)", "No demonstrated antidepressant effect in Phase II RCT", "Possible cognitive improvements on secondary measures (weak)"],
    sideEffects: ["Headache, anxiety, and insomnia reported in trials", "Unknown long-term neurogenic effects", "Cancer risk from enhanced neural stem cell proliferation (theoretical)"],
    legal: { fda: "Not approved. Clinical development apparently discontinued.", prescription: "Research compound", classification: "Research chemical", sports: "Not banned" },
    evidenceScore: { human: "Low", mechanism: "Low", safety: "Low" },
    misconceptions: [{ myth: "NSI-189 is a proven neurogenesis booster based on preclinical promise", correction: "The Phase II human trial failed to demonstrate efficacy for its primary endpoint. Hippocampal neurogenesis stimulation in rodents did not translate to clinical benefit in humans." }],
    references: [{ text: "Fava M et al. (2016). A Phase 2, double-blind, placebo-controlled trial of NSI-189 phosphate, a neurogenic compound, in MDD. Mol Psychiatry.", url: "https://pubmed.ncbi.nlm.nih.gov/26809840" }]
  },

  {
    id: "ostarine",
    name: "Ostarine",
    aliases: ["MK-2866", "Enobosarm", "GTx-024"],
    categories: ["performance", "recovery"],
    classification: "Selective Androgen Receptor Modulator (SARM)",
    whatItIs: "Ostarine (MK-2866, enobosarm) is a SARM developed by GTx Inc., which has advanced further into human clinical trials than most SARMs. It has been studied for muscle wasting in cancer cachexia, hip fracture recovery, and sarcopenia. Despite completing Phase II trials showing efficacy, it has not received FDA approval. It is the most commonly detected SARM in anti-doping testing.",
    mechanism: [
      { text: "Selective non-steroidal androgen receptor agonist with tissue-preferential activity in muscle and bone", confidence: "established" },
      { text: "Dose-dependent LH and FSH suppression, HPG axis inhibition", confidence: "established" },
      { text: "Lower androgenic activity in prostate and skin vs. testosterone at equivalent anabolic doses", confidence: "established" }
    ],
    studies: { human: [{ title: "Ostarine in cancer-related muscle wasting: POWER trial", summary: "A Phase II RCT showed ostarine significantly increased lean body mass and improved physical function in cancer patients with significant muscle loss vs placebo. Phase III trials were subsequently inconclusive.", outcome: "positive", citation: "Dobs AS et al. (2013). J Cachexia Sarcopenia Muscle. 4(1):1-7.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/23024008" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Lean mass preservation in cancer cachexia (human Phase II data)", "Improved physical function in wasting conditions", "HPG axis suppression (established human data)"],
    sideEffects: ["HPG axis suppression, testosterone reduction with prolonged use", "Liver enzyme elevations documented", "Joint aches during use", "No long-term safety data", "Product contamination common, unlicensed supply chain"],
    legal: { fda: "Not approved. Multiple FDA warning letters to manufacturers.", prescription: "Not legally available for performance use", classification: "Unapproved drug; WADA prohibited substance", sports: "Prohibited by WADA (S1), most commonly detected SARM in doping tests" },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Low" },
    misconceptions: [{ myth: "Ostarine is the safest SARM because it is the most studied", correction: "More human trials than other SARMs does not mean safety is established. Phase III trials failed, liver toxicity has been documented, and HPG suppression occurs at performance-relevant doses." }],
    references: [{ text: "Dobs AS et al. (2013). Effects of enobosarm on muscle wasting and physical function in patients with cancer: a double-blind, randomised controlled phase 2 trial. J Cachexia Sarcopenia Muscle.", url: "https://pubmed.ncbi.nlm.nih.gov/23024008" }]
  },

  {
    id: "oxandrolone",
    name: "Oxandrolone",
    aliases: ["Anavar", "Oxandrin"],
    categories: ["performance", "fat-loss"],
    classification: "Anabolic-androgenic steroid / Schedule III (USA)",
    whatItIs: "Oxandrolone is a synthetic anabolic-androgenic steroid FDA-approved for muscle wasting in HIV/AIDS, recovery from burns and surgery, osteoporosis, and Turner syndrome. It is considered one of the 'mildest' oral anabolic steroids due to its lower androgenic rating, making it popular in both medical contexts and illicitly in bodybuilding, particularly among women.",
    mechanism: [
      { text: "Androgen receptor agonist, promotes nitrogen retention and protein synthesis in muscle", confidence: "established" },
      { text: "Does not aromatize to estrogen (non-aromatizing structure)", confidence: "established" },
      { text: "Low androgenic activity relative to anabolic activity (anabolic ratio ~10:1 vs testosterone)", confidence: "established" },
      { text: "17α-alkylated, hepatotoxic via oral route", confidence: "established" }
    ],
    studies: { human: [{ title: "Oxandrolone in HIV-related muscle wasting", summary: "Multiple RCTs demonstrate significant lean mass gains and improved physical function in HIV/AIDS patients with wasting syndrome treated with oxandrolone.", outcome: "positive", citation: "Earthman C et al. (2002). J Parenter Enteral Nutr. 26(6):379-385.", pubmed: "https://pubmed.ncbi.nlm.nih.gov/12405642" }], animal: [], vitro: [], anecdotal: [] },
    effects: ["Lean mass preservation and accrual in wasting conditions (established)", "Strength improvements", "No estrogenic conversion", "Fat reduction reported (mechanism unclear)"],
    sideEffects: ["Hepatotoxicity (17α-alkylated, liver enzyme elevation)", "HPG axis suppression", "Virilization in women at higher doses", "Adverse lipid effects (significant HDL reduction)", "Cardiovascular risk with chronic use"],
    legal: { fda: "FDA approved for specific medical indications", prescription: "Schedule III controlled substance", classification: "Controlled substance; Rx drug", sports: "Prohibited by WADA (S1)" },
    evidenceScore: { human: "Medium", mechanism: "High", safety: "Medium" },
    misconceptions: [{ myth: "Oxandrolone is safe for women because it is 'mild'", correction: "Oxandrolone does cause virilization in women at higher doses. 'Mild' means relatively low androgenic activity, not absence of side effects. Hepatotoxicity and HPG suppression are real concerns regardless of gender." }],
    references: [{ text: "Earthman C et al. (2002). Oxandrolone in the treatment of HIV-associated weight loss in men. J Parenter Enteral Nutr.", url: "https://pubmed.ncbi.nlm.nih.gov/12405642" }]
  }
];
