const NEW_COMPOUNDS_3 = [
  {
    id: "bpc-157",
    name: "BPC-157",
    aliases: ["Body Protection Compound 157", "PL 14736"],
    categories: ["recovery", "performance"],
    classification: "Synthetic pentadecapeptide",
    whatItIs: "BPC-157 is a synthetic 15-amino acid peptide derived from a region of human gastric juice protein. It does not occur naturally in this exact form but is modeled on a sequence found endogenously. It has been studied primarily in animal models for its effects on tissue healing and gastroprotection.",
    mechanism: [
      { text: "Upregulates VEGF (vascular endothelial growth factor) expression, promoting angiogenesis in injured tissue", confidence: "hypothesized" },
      { text: "Modulates nitric oxide (NO) synthesis pathways, influencing vasodilation and tissue perfusion", confidence: "hypothesized" },
      { text: "Interacts with the FAK-paxillin pathway involved in cytoskeletal organization and cell migration", confidence: "hypothesized" },
      { text: "Exhibits gastroprotective effects via interactions with the gastric mucosa, best-established mechanism", confidence: "established" },
      { text: "May stabilize gut microbiome composition through mucosal interaction", confidence: "hypothesized" }
    ],
    studies: {
      human: [],
      animal: [
        {
          title: "BPC-157 accelerates tendon-to-bone healing in a rat model",
          summary: "Sprague-Dawley rats with surgically severed tendons showed significantly faster healing and collagen organization in the BPC-157 treatment group vs. saline control over 14 days.",
          outcome: "positive",
          citation: "Pevec D et al. (2010). Eur J Pharmacol. 644(1-3):110-119.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/20621079"
        },
        {
          title: "Gastroprotective effects in NSAID-induced ulcer models",
          summary: "BPC-157 demonstrated protective effects against ethanol- and indomethacin-induced gastric lesions in rodent models, with dose-dependent efficacy.",
          outcome: "positive",
          citation: "Sikiric P et al. (2018). Curr Pharm Des. 24(18):1990-2001.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/29998801"
        }
      ],
      vitro: [
        {
          title: "BPC-157 promotes fibroblast proliferation in cell culture",
          summary: "In vitro studies showed dose-dependent increases in fibroblast proliferation and migration, relevant to wound healing mechanisms, though translation to humans is unknown.",
          outcome: "positive",
          citation: "Chang CH et al. (2011). J Appl Physiol. 110(3):764-771.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/21148341"
        }
      ],
      anecdotal: [
        {
          title: "Widespread user reports of accelerated injury recovery",
          summary: "Online communities report subjective improvements in joint pain, tendon injuries, and gut symptoms. These reports are uncontrolled, unverified, and cannot establish causation.",
          outcome: "mixed"
        }
      ]
    },
    effects: [
      "Accelerated tendon and ligament healing (animal data)",
      "Reduced gastric ulcer formation (animal data)",
      "Increased angiogenesis at injury sites (animal data)",
      "Possible anti-inflammatory effects at wound sites",
      "Reported subjective reduction in joint discomfort (anecdotal only)"
    ],
    sideEffects: [
      "No human clinical safety data available",
      "Nausea and dizziness reported anecdotally",
      "Unknown interactions with medications",
      "Long-term effects are completely unstudied in humans",
      "Potential immunomodulatory effects, implications unclear"
    ],
    legal: {
      fda: "Not FDA approved. Not a licensed drug.",
      prescription: "Not available via prescription",
      classification: "Research chemical / peptide",
      sports: "Prohibited by WADA under S0 category (unapproved substances)"
    },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [
      {
        myth: "BPC-157 is a natural compound found in the human body",
        correction: "BPC-157 is a synthetic analog derived from a sequence found in gastric juice. The specific 15-amino acid peptide does not exist endogenously in this form."
      },
      {
        myth: "Animal study results directly translate to human outcomes",
        correction: "Rat and mouse models of wound healing often fail to predict human outcomes. No human clinical trials have established therapeutic efficacy for BPC-157."
      }
    ],
    references: [
      { text: "Sikiric P et al. (2018). Stable gastric pentadecapeptide BPC 157. Curr Pharm Des.", url: "https://pubmed.ncbi.nlm.nih.gov/29998801" },
      { text: "Pevec D et al. (2010). Impact of pentadecapeptide BPC 157 on muscle healing. Eur J Pharmacol.", url: "https://pubmed.ncbi.nlm.nih.gov/20621079" },
      { text: "Chang CH et al. (2011). BPC 157 promotes fibroblast proliferation. J Appl Physiol.", url: "https://pubmed.ncbi.nlm.nih.gov/21148341" }
    ]
  },

  {
    id: "tb-500",
    name: "TB-500",
    aliases: ["Thymosin Beta-4 fragment", "Tβ4"],
    categories: ["recovery", "performance"],
    classification: "Synthetic peptide fragment",
    whatItIs: "TB-500 is a synthetic analog of the naturally occurring peptide Thymosin Beta-4 (Tβ4), which is produced endogenously in virtually all human and animal cells. The full Tβ4 protein plays roles in actin sequestration, cell migration, and tissue repair. TB-500 isolates what is believed to be the active region of the molecule.",
    mechanism: [
      { text: "Sequesters G-actin monomers, regulating actin polymerization and cytoskeletal dynamics", confidence: "established" },
      { text: "Promotes keratinocyte and endothelial cell migration, relevant to wound healing", confidence: "established" },
      { text: "Downregulates inflammatory cytokines including IL-1β and TNF-α in preclinical models", confidence: "hypothesized" },
      { text: "May stimulate stem cell recruitment to injury sites via SDF-1/CXCR4 axis", confidence: "hypothesized" }
    ],
    studies: {
      human: [
        {
          title: "Phase II trial of Tβ4 in venous leg ulcers",
          summary: "A small Phase II randomized controlled trial showed numerically greater wound closure in the Tβ4 treatment group vs. placebo, but did not reach statistical significance. Results were inconclusive.",
          outcome: "mixed",
          citation: "Guarnera G et al. (2010). J Tissue Viability. 19(3):97-102.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/20447826"
        }
      ],
      animal: [
        {
          title: "Thymosin Beta-4 promotes cardiac repair after myocardial infarction in mice",
          summary: "Tβ4 treatment in a murine MI model showed improved ejection fraction and reduced infarct size. Cardioprotective effects were observed with early administration.",
          outcome: "positive",
          citation: "Bock-Marquette I et al. (2004). Nature. 432(7016):466-472.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/15543148"
        }
      ],
      vitro: [],
      anecdotal: [
        {
          title: "Community use for muscle and tendon injuries",
          summary: "TB-500 is widely self-administered in fitness communities for reported recovery from muscle tears and tendinopathies. No controlled evidence supports these applications.",
          outcome: "mixed"
        }
      ]
    },
    effects: [
      "Improved wound closure rates (limited human data, mixed results)",
      "Accelerated soft tissue repair in animal models",
      "Possible anti-inflammatory effects (animal/in vitro)",
      "Cardiac protection in MI models (animal data only)"
    ],
    sideEffects: [
      "Very limited human safety data available",
      "Fatigue and flu-like symptoms reported anecdotally",
      "Unknown carcinogenic potential with long-term use",
      "Regulatory status and purity of available forms varies widely"
    ],
    legal: {
      fda: "Not FDA approved",
      prescription: "No prescription formulation available",
      classification: "Research peptide",
      sports: "Prohibited by WADA (peptide hormones and related substances)"
    },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [
      {
        myth: "TB-500 and Thymosin Beta-4 are the same compound",
        correction: "TB-500 is a fragment of Tβ4 targeting the amino acid sequence thought to be biologically active. Efficacy and safety of the fragment may differ from the full protein."
      }
    ],
    references: [
      { text: "Guarnera G et al. (2010). Thymosin beta4 in venous ulcers. J Tissue Viability.", url: "https://pubmed.ncbi.nlm.nih.gov/20447826" },
      { text: "Bock-Marquette I et al. (2004). Thymosin β4 activates integrin-linked kinase. Nature.", url: "https://pubmed.ncbi.nlm.nih.gov/15543148" }
    ]
  },

  {
    id: "semax",
    name: "Semax",
    aliases: ["ACTH(4-7)PGP", "MSH/ACTH analog"],
    categories: ["cognition"],
    classification: "Synthetic neuropeptide",
    whatItIs: "Semax is a synthetic heptapeptide derived from a fragment of adrenocorticotropic hormone (ACTH). Developed in Russia in the 1980s, it has been used clinically in Russia and Ukraine for neurological conditions including stroke recovery and cognitive impairment, though it lacks regulatory approval in Western markets.",
    mechanism: [
      { text: "Stimulates BDNF (brain-derived neurotrophic factor) expression, supporting neuronal plasticity", confidence: "established" },
      { text: "Upregulates NGF (nerve growth factor), relevant to memory consolidation and neuroprotection", confidence: "established" },
      { text: "Inhibits enkephalin-degrading enzymes, modulating endogenous opioid activity", confidence: "hypothesized" },
      { text: "Influences dopaminergic and serotonergic neurotransmitter systems, though exact mechanisms are unclear", confidence: "hypothesized" },
      { text: "Reduces oxidative stress markers in brain tissue (animal models)", confidence: "hypothesized" }
    ],
    studies: {
      human: [
        {
          title: "Semax in ischemic stroke recovery: Russian clinical trial",
          summary: "A Russian clinical study (n=190) found improved neurological recovery metrics in post-stroke patients receiving intranasal Semax vs. control. Methodology limitations prevent strong conclusions by Western standards.",
          outcome: "positive",
          citation: "Mjasoedov NF et al. (1999). Zh Nevrol Psikhiatr Im S S Korsakova. 99(5):6-10."
        },
        {
          title: "Cognitive performance in healthy subjects: pilot study",
          summary: "A small uncontrolled Russian pilot study suggested improved attention and memory measures with intranasal Semax administration. Study lacked proper blinding and control conditions.",
          outcome: "mixed",
          citation: "Ashmarin IP et al. (1997). Zh Vyssh Nerv Deiat Im I P Pavlova. 47(2):420-430."
        }
      ],
      animal: [
        {
          title: "Semax prevents neuronal death in rodent ischemia models",
          summary: "Multiple rodent studies demonstrate significant neuroprotective effects of Semax in ischemia models, including reduction in infarct volume and improved motor recovery.",
          outcome: "positive",
          citation: "Grivennikov IA et al. (2008). Biopolymers. 90(3):237-243.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/17879357"
        }
      ],
      vitro: [],
      anecdotal: [
        {
          title: "Nootropic community use for focus and memory",
          summary: "Semax is popular among self-experimenting nootropic users who report subjective improvements in focus, verbal fluency, and working memory. Effects are highly variable and unverifiable.",
          outcome: "mixed"
        }
      ]
    },
    effects: [
      "Neuroprotection in ischemia (animal data)",
      "Upregulation of BDNF and NGF (animal/in vitro data)",
      "Possible improvement in post-stroke recovery (limited human data)",
      "Reported subjective cognitive enhancement (anecdotal)"
    ],
    sideEffects: [
      "Generally reported as well-tolerated in Russian studies, but methodology limits conclusions",
      "Possible temporary mood alteration or irritability",
      "Unknown long-term effects on BDNF/NGF regulation",
      "Limited safety pharmacology data in healthy individuals"
    ],
    legal: {
      fda: "Not FDA approved",
      prescription: "Approved in Russia for clinical use; unregulated elsewhere",
      classification: "Research peptide in most Western countries",
      sports: "Not explicitly listed by WADA, but may fall under peptide hormone category"
    },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Low" },
    misconceptions: [
      {
        myth: "Russian clinical approval means Semax is proven safe and effective",
        correction: "Regulatory standards in Russia differ from FDA or EMA requirements. Russian clinical trials for Semax have been criticized for small samples, lack of blinding, and publication in non-indexed journals."
      },
      {
        myth: "Stimulating BDNF always improves cognition",
        correction: "BDNF's role is context-dependent. Acute vs. chronic changes, brain region specificity, and individual variation all affect outcomes. Elevated BDNF is not universally beneficial."
      }
    ],
    references: [
      { text: "Grivennikov IA et al. (2008). Neuroprotective peptides. Biopolymers.", url: "https://pubmed.ncbi.nlm.nih.gov/17879357" },
      { text: "Mjasoedov NF et al. (1999). Use of semax in the treatment of patients with ischemic stroke. Zh Nevrol Psikhiatr." }
    ]
  },

  {
    id: "epithalon",
    name: "Epithalon",
    aliases: ["Epitalon", "Epithalamin fragment", "Ala-Glu-Asp-Gly"],
    categories: ["longevity"],
    classification: "Synthetic tetrapeptide",
    whatItIs: "Epithalon is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) originally derived from the pineal gland peptide epithalamin. Developed by Russian gerontologist Vladimir Khavinson, it has been studied primarily in the context of aging and telomere biology. It is not approved as a drug in any major Western jurisdiction.",
    mechanism: [
      { text: "Activates telomerase enzyme, potentially elongating telomeres in somatic cells", confidence: "hypothesized" },
      { text: "Regulates melatonin and cortisol circadian rhythms via pineal gland influence", confidence: "hypothesized" },
      { text: "Exhibits antioxidant activity, reduces lipid peroxidation markers in aged animal models", confidence: "hypothesized" },
      { text: "Possible modulation of p53 tumor suppressor pathway, implications unclear and potentially concerning", confidence: "hypothesized" }
    ],
    studies: {
      human: [
        {
          title: "Epithalon in elderly patients: observational study",
          summary: "A Russian observational study in elderly patients (n=79) reported improved immune markers and reduced free radical levels over 3 years. The study design, lack of blinding, and non-indexed publication make conclusions unreliable.",
          outcome: "mixed",
          citation: "Khavinson VKh et al. (2003). Ann N Y Acad Sci. 1057:522-535."
        }
      ],
      animal: [
        {
          title: "Epithalon extends lifespan in fruit flies and rodents",
          summary: "Multiple studies in Drosophila and rodent models report lifespan extension of 10-27% with Epithalon treatment. Mechanistic explanations remain incomplete.",
          outcome: "positive",
          citation: "Anisimov VN et al. (2003). Biogerontology. 4(5):297-306.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/14646022"
        }
      ],
      vitro: [
        {
          title: "Telomerase activation in human somatic cell cultures",
          summary: "In vitro experiments in fetal human fibroblasts showed increased telomerase activity following Epithalon treatment, with cells exceeding the Hayflick limit. Results have not been independently replicated at scale.",
          outcome: "positive",
          citation: "Khavinson V et al. (2003). Bull Exp Biol Med. 135(6):590-592.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/12937717"
        }
      ],
      anecdotal: [
        {
          title: "Online longevity community use",
          summary: "Epithalon is used by longevity enthusiasts based on telomere-extension rationale. Subjective reports are highly variable and cannot be considered evidence.",
          outcome: "neutral"
        }
      ]
    },
    effects: [
      "Potential telomerase activation in vitro",
      "Lifespan extension in invertebrate and rodent models",
      "Antioxidant effects in aged animals",
      "Possible melatonin regulation"
    ],
    sideEffects: [
      "No systematic human safety data exists",
      "Telomerase activation raises theoretical cancer risk concerns (cells with unlimited division capacity)",
      "Unknown effects in individuals with existing neoplastic conditions",
      "Long-term hormonal effects unknown"
    ],
    legal: {
      fda: "Not FDA approved, not classified as a drug",
      prescription: "No prescription formulation in any Western country",
      classification: "Research peptide",
      sports: "Not explicitly listed by WADA"
    },
    evidenceScore: { human: "Low", mechanism: "Low", safety: "Low" },
    misconceptions: [
      {
        myth: "Longer telomeres caused by Epithalon will extend human lifespan",
        correction: "The relationship between telomere length and human lifespan is complex and not causal. Some cancers are associated with telomerase overactivation. In vitro results in cells do not predict outcomes in whole organisms."
      },
      {
        myth: "Because it is 'natural' (derived from the pineal gland) it is safe",
        correction: "Synthetic replication of a biologically-inspired sequence does not confer the safety profile of naturally occurring processes. Dose, context, and systemic effects are entirely distinct."
      }
    ],
    references: [
      { text: "Anisimov VN et al. (2003). Epithalon slows aging and extends lifespan of Drosophila. Biogerontology.", url: "https://pubmed.ncbi.nlm.nih.gov/14646022" },
      { text: "Khavinson V et al. (2003). Epithalon activates telomerase in fibroblasts. Bull Exp Biol Med.", url: "https://pubmed.ncbi.nlm.nih.gov/12937717" }
    ]
  },

  {
    id: "ghrp-6",
    name: "GHRP-6",
    aliases: ["Growth Hormone Releasing Peptide-6", "His-DTrp-Ala-Trp-DPhe-Lys-NH2"],
    categories: ["performance", "fat-loss"],
    classification: "Synthetic hexapeptide secretagogue",
    whatItIs: "GHRP-6 is a synthetic hexapeptide that acts as a growth hormone secretagogue, a compound that stimulates the release of endogenous growth hormone from the pituitary gland. It binds to the ghrelin receptor (GHSR-1a) and was one of the first synthetic GH secretagogues developed, emerging from research in the 1980s.",
    mechanism: [
      { text: "Agonist at the ghrelin receptor (GHSR-1a) in the pituitary, stimulating GH pulse release", confidence: "established" },
      { text: "Inhibits somatostatin, the endogenous inhibitor of GH release, amplifying net GH output", confidence: "established" },
      { text: "Stimulates appetite via hypothalamic ghrelin receptor activation, significant effect", confidence: "established" },
      { text: "Secondary elevation of IGF-1 downstream of GH pulse, magnitude variable", confidence: "established" }
    ],
    studies: {
      human: [
        {
          title: "GHRP-6 increases GH secretion in healthy adults",
          summary: "Controlled studies in healthy adults confirmed that intravenous GHRP-6 stimulates significant GH pulsatile release with a rapid onset. The relevance of acute GH spikes to long-term physiological outcomes has not been established.",
          outcome: "positive",
          citation: "Bowers CY et al. (1991). J Endocrinol Invest. 14(12):979-983."
        }
      ],
      animal: [
        {
          title: "GH secretagogue effects in rat models",
          summary: "Rodent studies confirm robust pituitary GH release and downstream IGF-1 elevation. Chronic administration leads to GH receptor desensitization in some models.",
          outcome: "positive",
          citation: "Smith RG et al. (1997). Science. 267(5201):1188-1191.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/7855596"
        }
      ],
      vitro: [],
      anecdotal: [
        {
          title: "Bodybuilding community use for muscle and fat",
          summary: "Widely self-administered in bodybuilding communities, often combined with GHRH analogs. Users report significant appetite stimulation, which limits some applications.",
          outcome: "mixed"
        }
      ]
    },
    effects: [
      "Reliable acute growth hormone pulse induction (human data)",
      "Significant appetite increase (ghrelin receptor mechanism)",
      "Secondary IGF-1 elevation with repeated administration",
      "Possible adipose tissue metabolism effects via GH (mechanism plausible, clinical data sparse)"
    ],
    sideEffects: [
      "Strong appetite stimulation, may counteract intended fat loss goals",
      "Water retention from GH elevation",
      "Transient hypoglycemia possible with high doses",
      "Potential GH receptor desensitization with chronic use",
      "Unknown long-term effects on GH axis"
    ],
    legal: {
      fda: "Not approved. No licensed formulation exists.",
      prescription: "Not a prescription medicine",
      classification: "Research peptide",
      sports: "Prohibited by WADA (Growth Hormone Releasing Peptides category)"
    },
    evidenceScore: { human: "Medium", mechanism: "High", safety: "Low" },
    misconceptions: [
      {
        myth: "Raising GH levels with GHRP-6 is equivalent to GH therapy",
        correction: "Pulsatile GH release from secretagogues differs pharmacokinetically from exogenous GH administration. The physiological relevance of peptide-induced GH spikes vs. therapeutic GH has not been established in comparative trials."
      },
      {
        myth: "GHRP-6 is better than other GH secretagogues because it is 'older and studied'",
        correction: "More research does not equate to more safety evidence. Most human GHRP-6 studies measured acute GH release, not long-term health outcomes."
      }
    ],
    references: [
      { text: "Smith RG et al. (1997). A nonpeptidyl growth hormone secretagogue. Science.", url: "https://pubmed.ncbi.nlm.nih.gov/7855596" },
      { text: "Bowers CY et al. (1991). On the actions of GHRP-6. J Endocrinol Invest." }
    ]
  },

  {
    id: "gdf-11",
    name: "GDF-11",
    aliases: ["Growth Differentiation Factor 11", "BMP-11"],
    categories: ["longevity", "performance"],
    classification: "TGF-β superfamily protein",
    whatItIs: "GDF-11 is a member of the TGF-β superfamily of signaling proteins. It gained significant media attention in 2013-2014 following controversial parabiosis studies suggesting it could reverse aspects of aging. Subsequent research has challenged initial findings, and the field remains actively contested.",
    mechanism: [
      { text: "Signals via Smad2/3 pathway downstream of TGF-β/activin receptors", confidence: "established" },
      { text: "Regulates anterior-posterior patterning during embryonic development", confidence: "established" },
      { text: "Initial studies proposed rejuvenating effects on cardiac, skeletal, and brain tissue in aged mice", confidence: "hypothesized" },
      { text: "Subsequent data suggest GDF-11 may increase with age rather than decrease, opposite of initial claims", confidence: "hypothesized" }
    ],
    studies: {
      human: [],
      animal: [
        {
          title: "Young blood parabiosis reverses cardiac hypertrophy: initial report",
          summary: "A 2013 Science paper reported that GDF-11 was responsible for cardiac rejuvenation in heterochronic parabiosis models. These findings sparked enormous interest in GDF-11 as an anti-aging target.",
          outcome: "positive",
          citation: "Loffredo FS et al. (2013). Science. 344(6184):649-652.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/23929979"
        },
        {
          title: "Replication attempt fails to confirm anti-aging effects",
          summary: "Multiple independent labs failed to replicate initial GDF-11 findings. One Nature Medicine report found GDF-11 levels increase with age and that GDF-11 may impair muscle regeneration.",
          outcome: "negative",
          citation: "Egerman MA et al. (2015). Cell Metab. 22(1):164-174.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/26001423"
        }
      ],
      vitro: [],
      anecdotal: []
    },
    effects: [
      "Role in embryonic patterning (established)",
      "Proposed cardiac rejuvenation, not replicated",
      "Potentially inhibitory for muscle regeneration (contradictory data)"
    ],
    sideEffects: [
      "No human safety data exists",
      "Potential inhibition of muscle satellite cell activity",
      "Effects on cancer progression unknown, TGF-β family members have complex tumor biology",
      "Dose-response relationships not established in humans"
    ],
    legal: {
      fda: "Not approved for any use",
      prescription: "No available formulation",
      classification: "Research protein",
      sports: "Prohibited under WADA growth factor category"
    },
    evidenceScore: { human: "Low", mechanism: "Low", safety: "Low" },
    misconceptions: [
      {
        myth: "GDF-11 is a proven anti-aging protein based on 2014 studies",
        correction: "The initial GDF-11 findings have been substantially challenged and failed independent replication. The scientific consensus on GDF-11's role in aging has shifted significantly since 2014."
      },
      {
        myth: "Young blood transfusions work because of GDF-11",
        correction: "Parabiosis effects likely involve multiple factors. GDF-11 as the primary active agent was a hypothesis that has not been confirmed, and several studies contradicted the initial mechanism."
      }
    ],
    references: [
      { text: "Loffredo FS et al. (2013). Growth differentiation factor 11 is a circulating factor. Science.", url: "https://pubmed.ncbi.nlm.nih.gov/23929979" },
      { text: "Egerman MA et al. (2015). GDF11 increases with age and inhibits regeneration. Cell Metab.", url: "https://pubmed.ncbi.nlm.nih.gov/26001423" }
    ]
  },

  {
    id: "copper-peptide-ghk-cu",
    name: "GHK-Cu",
    aliases: ["Copper tripeptide-1", "Glycyl-L-histidyl-L-lysine copper"],
    categories: ["skin", "longevity"],
    classification: "Endogenous copper-binding tripeptide",
    whatItIs: "GHK-Cu is a naturally occurring copper peptide found in human plasma, saliva, and urine. Its concentration declines with age. It has been researched for wound healing, anti-inflammatory activity, and skin repair since the 1970s, and is a common active ingredient in cosmetic skincare formulations.",
    mechanism: [
      { text: "Promotes collagen, elastin, and glycosaminoglycan synthesis in fibroblasts", confidence: "established" },
      { text: "Stimulates superoxide dismutase (SOD) and antioxidant enzyme expression", confidence: "established" },
      { text: "Modulates gene expression, proposed to regulate hundreds of genes related to inflammation and tissue repair", confidence: "hypothesized" },
      { text: "Chelates copper ions, facilitating enzymatic reactions requiring copper cofactors", confidence: "established" },
      { text: "May act as a feedback signal for tissue damage, modulating immune response", confidence: "hypothesized" }
    ],
    studies: {
      human: [
        {
          title: "GHK-Cu in wound healing: clinical observations",
          summary: "Several small clinical studies and case series have reported improved wound healing parameters with topical GHK-Cu application. Effect sizes are modest and studies lack rigorous blinding in most cases.",
          outcome: "mixed",
          citation: "Pickart L et al. (2015). Biomolecules. 5(3):1616-1630.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/26270780"
        }
      ],
      animal: [
        {
          title: "GHK-Cu accelerates wound healing in murine models",
          summary: "Multiple rodent wound healing studies show significantly faster closure rates and improved collagen organization with topical GHK-Cu vs. controls.",
          outcome: "positive",
          citation: "Pickart L & Margolina A. (2018). Rejuvenation Res. 21(2):97-108.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/29369056"
        }
      ],
      vitro: [
        {
          title: "GHK-Cu induces collagen synthesis in human fibroblast cultures",
          summary: "In vitro studies consistently demonstrate that GHK-Cu increases collagen type I and III synthesis in human fibroblast cell cultures in a dose-dependent manner.",
          outcome: "positive",
          citation: "Maquart FX et al. (1993). FEBS Lett. 238(2):343-346."
        }
      ],
      anecdotal: [
        {
          title: "Cosmetic skincare community use",
          summary: "GHK-Cu is widely used in skincare routines for anti-aging purposes. User reports suggest skin texture improvements but are subject to placebo effects and formulation variability.",
          outcome: "mixed"
        }
      ]
    },
    effects: [
      "Collagen and elastin synthesis stimulation (in vitro established)",
      "Improved wound healing metrics in animal models",
      "Antioxidant enzyme upregulation",
      "Possible reduction in skin laxity with topical application (limited human data)"
    ],
    sideEffects: [
      "Generally considered safe for topical use at cosmetic concentrations",
      "Potential for skin irritation at high concentrations",
      "Copper toxicity theoretically possible with very high systemic doses",
      "Injectable forms lack safety validation"
    ],
    legal: {
      fda: "Listed as a cosmetic ingredient (topical). Not approved as a drug.",
      prescription: "Not a prescription compound",
      classification: "Cosmetic active ingredient (topical); research compound (injectable)",
      sports: "Not banned"
    },
    evidenceScore: { human: "Low", mechanism: "Medium", safety: "Medium" },
    misconceptions: [
      {
        myth: "GHK-Cu reverses aging as comprehensively as its proponents claim",
        correction: "While in vitro data on collagen synthesis is robust, human clinical data is limited, uncontrolled, and primarily from the compound's primary researcher. Independent large-scale RCTs are lacking."
      }
    ],
    references: [
      { text: "Pickart L et al. (2015). GHK-Cu, human tripeptide. Biomolecules.", url: "https://pubmed.ncbi.nlm.nih.gov/26270780" },
      { text: "Pickart L & Margolina A. (2018). Regenerative and protective actions of GHK-Cu. Rejuvenation Res.", url: "https://pubmed.ncbi.nlm.nih.gov/29369056" }
    ]
  },

  {
    id: "rapamycin",
    name: "Rapamycin",
    aliases: ["Sirolimus", "Rapamune", "AY-9944"],
    categories: ["longevity"],
    classification: "mTOR inhibitor / macrolide",
    whatItIs: "Rapamycin (sirolimus) is an FDA-approved immunosuppressant derived from the bacterium Streptomyces hygroscopicus, discovered in soil samples from Easter Island (Rapa Nui). It is approved for organ transplant rejection prevention and some cancers. It is the most studied compound for lifespan extension in model organisms and inhibits the mTOR signaling pathway, a conserved regulator of growth, metabolism, and aging.",
    mechanism: [
      { text: "Binds FKBP12 to form a complex that inhibits mTORC1, suppressing protein synthesis and promoting autophagy", confidence: "established" },
      { text: "Upregulates autophagy, cellular 'self-cleaning' process that clears damaged organelles and proteins", confidence: "established" },
      { text: "Reduces senescent cell burden by inducing autophagy of damaged cells (preclinical data)", confidence: "hypothesized" },
      { text: "Inhibits mTORC2 with chronic use, mechanism of many side effects, less desirable", confidence: "established" }
    ],
    studies: {
      human: [
        {
          title: "Rapamycin improves immune response to influenza vaccine in elderly",
          summary: "A randomized placebo-controlled trial found that low-dose RAD001 (everolimus, rapamycin analog) significantly improved immune response to influenza vaccination in adults over 65. A landmark early human longevity-relevant study.",
          outcome: "positive",
          citation: "Mannick JB et al. (2014). Sci Transl Med. 6(268):268ra179.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/25540326"
        }
      ],
      animal: [
        {
          title: "Rapamycin extends lifespan in middle-aged mice",
          summary: "An NIA Interventions Testing Program study found rapamycin extended median and maximum lifespan in genetically heterogeneous mice, even when treatment began at 600 days of age (middle-aged). One of the most robust mammalian longevity findings.",
          outcome: "positive",
          citation: "Harrison DE et al. (2009). Nature. 460(7253):392-395.",
          pubmed: "https://pubmed.ncbi.nlm.nih.gov/19587680"
        }
      ],
      vitro: [],
      anecdotal: [
        {
          title: "Off-label use in longevity community",
          summary: "Increasing off-label self-administration in longevity communities, sometimes under physician oversight. Self-reporters frequently use intermittent dosing protocols. Observational data collection is ongoing in some communities.",
          outcome: "neutral"
        }
      ]
    },
    effects: [
      "Robust lifespan extension in multiple mouse studies",
      "Improved immune function in elderly humans (limited data)",
      "mTOR suppression and autophagy upregulation",
      "Reduced cancer incidence in animal studies"
    ],
    sideEffects: [
      "Immunosuppression, increased infection risk",
      "Impaired wound healing",
      "Glucose intolerance and insulin resistance (metabolic side effects)",
      "Hyperlipidemia (elevated triglycerides and cholesterol)",
      "mTORC2 inhibition with chronic use, cardiovascular and metabolic implications",
      "Aphthous ulcers (mouth sores) common",
      "Potential effects on fertility"
    ],
    legal: {
      fda: "FDA approved for transplant rejection (Rapamune) and LAM (lymphangioleiomyomatosis)",
      prescription: "Prescription-only in all jurisdictions",
      classification: "Schedule N/Rx pharmaceutical",
      sports: "Not explicitly banned by WADA in non-organ-transplant contexts"
    },
    evidenceScore: { human: "Low", mechanism: "High", safety: "Medium" },
    misconceptions: [
      {
        myth: "Rapamycin is the most proven longevity drug for humans",
        correction: "While rapamycin has the strongest animal longevity data of any compound, human evidence is extremely limited, one immune function study and observational anecdotes. Mechanism is compelling but human extrapolation is not established."
      },
      {
        myth: "Intermittent dosing avoids all side effects of rapamycin",
        correction: "Intermittent dosing is hypothesized to reduce mTORC2 inhibition, but this hypothesis has not been validated in rigorous human trials. Side effects have been reported even with weekly dosing regimens."
      }
    ],
    references: [
      { text: "Harrison DE et al. (2009). Rapamycin fed late in life extends lifespan in mice. Nature.", url: "https://pubmed.ncbi.nlm.nih.gov/19587680" },
      { text: "Mannick JB et al. (2014). mTOR inhibition improves immune function in the elderly. Sci Transl Med.", url: "https://pubmed.ncbi.nlm.nih.gov/25540326" }
    ]
  }
];
