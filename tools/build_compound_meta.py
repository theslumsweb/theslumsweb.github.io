#!/usr/bin/env python3
"""Generate compound-meta.js with human-readable copy for thin batch entries."""

from __future__ import annotations

import csv
import json
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

THIN_PATTERNS = (
    re.compile(r"Primary mechanism/class:", re.I),
    re.compile(r"listed in the project compound inventory", re.I),
    re.compile(r"^.{0,60}$"),
)


def slugify(name: str) -> str:
    s = unicodedata.normalize("NFKD", name)
    s = s.lower().replace("'", "").replace("–", "-").replace("—", "-")
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return re.sub(r"-+", "-", s).strip("-") or "compound"


def strip_parens(name: str) -> str:
    return re.sub(r"\s*\([^)]*\)", "", name).strip()


def is_thin(what: str) -> bool:
    w = (what or "").strip()
    if not w:
        return True
    return any(p.search(w) for p in THIN_PATTERNS)


def load_csv() -> dict[str, dict]:
    path = ROOT / "entries.csv"
    out: dict[str, dict] = {}
    with path.open(encoding="utf-8", newline="") as f:
        for row in csv.DictReader(f):
            name = (row.get("Name") or "").strip()
            if not name:
                continue
            rec = {
                "name": name,
                "type": (row.get("Type") or "").strip(),
                "classification": (row.get("Primary Mechanism / Class") or "").strip(),
            }
            for key in {slugify(name), slugify(strip_parens(name))}:
                out[key] = rec
    return out


def _matching_close_brace(s: str, open_idx: int) -> int:
    depth = 0
    i = open_idx
    while i < len(s):
        c = s[i]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return i
        elif c in "\"'":
            quote = c
            i += 1
            while i < len(s):
                if s[i] == "\\":
                    i += 2
                    continue
                if s[i] == quote:
                    break
                i += 1
        i += 1
    return -1


def _split_objects(inner: str) -> list[str]:
    objs: list[str] = []
    i = 0
    n = len(inner)
    while i < n:
        while i < n and inner[i] in ", \t\n\r":
            i += 1
        if i >= n:
            break
        if inner[i] != "{":
            i += 1
            continue
        end = _matching_close_brace(inner, i)
        if end < 0:
            break
        objs.append(inner[i : end + 1])
        i = end + 1
    return objs


def load_batch_ids() -> dict[str, dict]:
    """id -> {name, categories, classification, whatItIs} from all batch files."""
    found: dict[str, dict] = {}
    decl = re.compile(r"const\s+NEW_COMPOUNDS_\w+\s*=\s*\[")
    for path in sorted(ROOT.glob("batch*.js")):
        text = path.read_text(encoding="utf-8")
        m = decl.search(text)
        if not m:
            continue
        start = text.index("[", m.end() - 1)
        end = text.index("];", start)
        for chunk in _split_objects(text[start + 1 : end]):
            cid_m = re.search(r'\bid\s*:\s*"([^"]*)"', chunk)
            if not cid_m:
                continue
            cid = cid_m.group(1)
            name_m = re.search(r'name:\s*"([^"]*)"', chunk)
            what_m = re.search(r'whatItIs:\s*"([^"]*)"', chunk)
            class_m = re.search(r'classification:\s*"([^"]*)"', chunk)
            cats_m = re.search(r"categories:\s*\[([^\]]*)\]", chunk)
            cats = re.findall(r'"([^"]+)"', cats_m.group(1)) if cats_m else []
            found[cid] = {
                "name": name_m.group(1) if name_m else cid,
                "whatItIs": what_m.group(1) if what_m else "",
                "classification": class_m.group(1) if class_m else "",
                "categories": cats,
            }
    return found


RECOVERY = (
    "repair", "bpc", "tb-500", "thymosin", "regenerat", "angiogen", "tissue", "wound",
    "collagen", "ghk", "sdkp", "migration", "healing",
)
FAT = (
    "lipoly", "fat", "appetite", "glp", "incretin", "semaglutide", "tirzepatide", "retatrutide",
    "melanotan", "clenbuterol", "dnp", "thyroid", "t3", "t4", "adipotide", "aod", "fragment 176",
    "leptin", "amylin", "pramlintide", "metabolic", "uncoupl", "beta-2", "satiety", "orexigen",
)
COGNITION = (
    "cognitive", "nootropic", "semax", "selank", "noopept", "cerebrolysin", "neuro", "brain",
    "sleep", "dsip", "pinealon", "cortexin", "tuftsin", "focus", "stimulant", "adhd",
)
SKIN = ("skin", "melanogenesis", "argireline", "matrixyl", "copper peptide", "ghk", "topical", "tanning")
LONGEVITY = ("telomerase", "epitalon", "epithalon", "senolytic", "mitochondrial", "humanin", "mots-c", "foxo4", "ss-31", "elamipretide")
HAIR = ("finasteride", "dutasteride", "ru58841", "minoxidil", "hair", "5-alpha", "5alpha", "anti-androgen")
PERF = (
    "anabolic", "androgen", " sarm", "testosterone", "trenbolone", "nandrolone", "boldenone",
    "drostanolone", "methenolone", "stanozolol", "oxandrolone", "igf", "myostatin", "follistatin",
    "ghrh", "ghrp", "secretagog", "hgh", "somatropin", "mk-677", "ibutamoren", "ment ", "dianabol",
)
INHIBITION = ("gaba", "inhibition", "anxiolytic", "phenibut", "baclofen", "benzodiazepine")


def infer_categories(type_: str, classification: str, name: str) -> list[str]:
    t = type_.lower()
    cl = classification.lower()
    n = name.lower()
    blob = f"{t} {cl} {n}"
    cats: list[str] = []

    if "peptide" in t or t in ("glp-1 peptide", "glp-1/gip peptide", "triple agonist", "ghs (non-peptide)"):
        cats.append("peptides")
    if "steroid" in t or "aas" in t:
        cats.extend(["performance", "hormones"])
    if "sarm" in t or "ppar" in t:
        cats.append("performance")
    if "ancillary" in t:
        cats.append("hormones")
    if "metabolic" in t:
        cats.append("fat-loss")
    if "nootropic" in t:
        cats.append("cognition")
    if "inhibition" in t or "gaba" in t:
        cats.append("inhibition-lowering")

    def add_kw(keys: tuple[str, ...], cat: str) -> None:
        if any(k in blob for k in keys) and cat not in cats:
            cats.append(cat)

    add_kw(RECOVERY, "recovery")
    add_kw(FAT, "fat-loss")
    add_kw(COGNITION, "cognition")
    add_kw(SKIN, "skin")
    add_kw(LONGEVITY, "longevity")
    add_kw(HAIR, "hair")
    add_kw(PERF, "performance")
    add_kw(INHIBITION, "inhibition-lowering")

    if "looks" not in cats and any(k in blob for k in ("melanotan", "tanning", "libido", "pt-141", "bremelanotide")):
        cats.append("looks")

    if not cats:
        clean = re.sub(r"[^a-z0-9]+", "-", t).strip("-")
        if clean:
            cats.append(clean)
        else:
            cats.append("performance")
    # normalize peptide singular
    if "peptide" in cats:
        cats = [c for c in cats if c != "peptide"]
        if "peptides" not in cats:
            cats.insert(0, "peptides")
    return list(dict.fromkeys(cats))


def plain_class(classification: str) -> str:
    cl = classification.strip()
    if not cl:
        return ""
    cl = re.sub(r"\s+", " ", cl)
    cl = cl[0].upper() + cl[1:] if cl else cl
    return cl


def peptide_blurb(name: str, classification: str) -> str:
    cl = classification.lower()
    n = name.lower()
    pc = plain_class(classification)

    rules: list[tuple[tuple[str, ...], str]] = [
        (("bpc-157", "bpc 157"), f"{name} is a gastric pentadecapeptide fragment people use for tendon, gut, and general tissue-repair claims. Lab work points at growth-factor signaling and angiogenesis; human RCT data for the gray-market version is basically absent."),
        (("tb-500", "thymosin beta-4"), f"{name} is a thymosin beta-4–related peptide tied to cell migration and blood-vessel formation — the reason it gets stacked with BPC-157 in injury-recovery protocols. Evidence is mostly preclinical."),
        (("ipamorelin",), f"{name} is a selective GH secretagogue (GHRP-class) that pushes growth hormone with less hunger and cortisol drama than GHRP-6. Typical use cases online: sleep, recovery, mild recomposition — not a substitute for checking IGF-1 and glucose."),
        (("ghrp-2", "ghrp-6", "hexarelin"), f"{name} is a growth hormone–releasing peptide that mimics ghrelin at the pituitary. Expect appetite and GH pulses; desensitization is a real concern with the stronger GHRPs."),
        (("sermorelin", "mod grf", "cjc-1295", "tesamorelin", "grf"), f"{name} is a GHRH analog — it tells the pituitary to release GH in pulses rather than flooding the system like exogenous HGH. Lipodystrophy-approved versions exist medically; gym use is mostly off-label speculation."),
        (("somatropin", "human growth hormone", "hgh"), f"{name} is recombinant human growth hormone: direct GH replacement, not a secretagogue. Medically used for GH deficiency; cosmetic and performance use raises insulin resistance, edema, and cancer-surveillance concerns."),
        (("fragment 176", "aod9604", "aod-9604"), f"{name} is a fragment of the GH molecule marketed for fat loss without full GH side effects. The lipolytic story is mechanistic; human outcome trials are weak."),
        (("melanotan",), f"{name} is a melanocortin receptor agonist — tanning and libido effects get most of the attention. UV exposure still matters for actual pigment; nausea and mole changes are reported."),
        (("pt-141", "bremelanotide"), f"{name} is a melanocortin agonist aimed at central sexual arousal pathways (FDA-approved as bremelanotide for hypoactive desire in women). Blood pressure spikes and nausea are common limits."),
        (("epitalon", "epithalon"), f"{name} is a synthetic pineal tetrapeptide marketed around telomerase and circadian regulation. Almost all compelling data is Russian-lab or in vitro — treat longevity claims skeptically."),
        (("selank", "semax"), f"{name} is a Russian-developed neuropeptide analog discussed for anxiety, focus, and neuroprotection. Human data exists but mostly in non-English trials; sourcing purity is the practical bottleneck."),
        (("semaglutide", "tirzepatide", "retatrutide", "liraglutide", "exenatide"), f"{name} is an incretin-based injectable used medically for diabetes and/or obesity — appetite and weight loss come from gut–brain hormone signaling. GI side effects dominate early weeks; this is chronic therapy, not a casual cut cycle."),
        (("igf-1", "igf 1", "mgf", "mechano growth"), f"{name} is an insulin-like growth factor variant discussed for local hypertrophy and recovery. Hypoglycemia risk and mitogenic concerns are why this stays firmly in 'experimental' territory."),
        (("follistatin", "myostatin", "ace-031"), f"{name} sits in the myostatin/activin signaling lane — the idea is unlocking muscle growth by blocking negative regulators. Powerful on paper; infection and tendon issues show up in animal knockout models."),
        (("ghk-cu", "copper peptide"), f"{name} is a copper-binding tripeptide (GHK) used in skin and wound-healing contexts. Collagen and matrix remodeling are the mechanistic hook; cosmeceutical evidence > bodybuilding evidence."),
        (("dsip",), f"{name} (delta sleep-inducing peptide) is a neuropeptide people trial for sleep architecture and stress — human data is old and sparse, but it's one of the few 'sleep peptides' with any clinical footprint at all."),
        (("kisspeptin", "gonadorelin", "gnrh", "hcg", "hmg"), f"{name} works the reproductive axis — GnRH/LH/FSH signaling for fertility protocols or restart attempts after suppression. Dose timing matters enormously; this is not a casual daily peptide."),
        (("thymosin alpha", "thymalin", "thymopentin"), f"{name} is an immune-modulating thymic peptide class with history in viral and immune-deficiency research (especially outside the US). Evidence quality varies; immunostimulation isn't free lunch."),
        (("adipotide", "ftpp"), f"{name} is an experimental peptidomimetic that targets blood supply to white fat — dramatic fat loss in monkeys, also kidney toxicity that killed the hype. Not a viable human drug candidate despite forum nostalgia."),
        (("ss-31", "elamipretide"), f"{name} is a mitochondrial-targeting peptide (elamipretide) studied for heart failure and mitochondrial myopathies. Longevity boards borrow the mechanism; approved indications are narrow."),
        (("mots-c", "humanin"), f"{name} is a mitochondria-derived peptide discussed for metabolic flexibility and cellular stress resistance — fascinating rodent metabolism papers, very little human pharmacology."),
    ]

    for keys, text in rules:
        if any(k in n or k in cl for k in keys):
            return text

    if "monoclonal" in cl or "antibody" in cl:
        return f"{name} is a monoclonal antibody biologic — a lab-made immune protein that locks onto one molecular target (cytokine, receptor, or cancer marker). These are prescription injectables with real immunogenicity and infection-risk tradeoffs, not gym peptides."

    if "insulin" in n:
        return f"{name} is a recombinant insulin formulation with a specific onset/duration profile. Medically indispensable; recreational or 'cutting' use is hypoglycemia roulette and not something to improvise from forum doses."

    if "ghrh" in cl or "ghrp" in cl or "secretagog" in cl:
        return f"{name} is a growth-hormone axis peptide — class: {pc}. Secretagogues and GHRH analogs get used for recovery and sleep, but GH/IGF-1 feedback, glucose, and long-term mitogenic risk still need monitoring."

    if "immunomodul" in cl or "immune" in cl or "interleukin" in cl:
        return f"{name} is an immunomodulatory peptide/protein — {pc}. These can shift cytokine balance in specific diseases; self-experimentation risks flares, infections, and unpredictable autoimmunity."

    if "gastro" in cl or "intestinal" in cl or "gut" in cl:
        return f"{name} is a gut-active peptide — {pc}. Satiety, motility, and secretion effects dominate; systemic absorption and infection risk depend heavily on the exact sequence."

    if "neuro" in cl or "neuropeptide" in cl or "brain" in cl:
        return f"{name} is a neuropeptide signaling compound — {pc}. CNS penetration and receptor selectivity determine whether effects are real or theoretical; most gray-market neuropeptides lack solid human PK data."

    return (
        f"{name} is a research peptide in the '{pc}' family. People reach for it when that mechanism maps to recovery, metabolism, or looks goals — "
        f"but published human trials for this exact sequence are thin, so treat dosing threads as folklore until you read primary papers."
    )


def steroid_blurb(name: str, classification: str) -> str:
    n = name.lower()
    pc = plain_class(classification)
    base = strip_parens(name)

    if "testosterone" in n:
        if "undecanoate" in n:
            extra = "Very long undecanoate ester — think weeks between injections, used in TRT depots."
        elif "cypionate" in n or "enanthate" in n:
            extra = "Long ester for weekly or twice-weekly injections; the workhorse TRT and cycle base in North America."
        elif "propionate" in n or "acetate" in n:
            extra = "Short ester with faster rise and fall — more injection frequency, less water guessing on timing."
        elif "base" in n or base.lower() == n.strip().lower():
            extra = "No ester attached — fast spike, often painful or topical/transdermal in research prep."
        else:
            extra = "Testosterone ester/variant with pharmacokinetics set by the ester chain length."
        return (
            f"{base} is an anabolic-androgenic testosterone preparation ({pc}). {extra} "
            f"Converts to estrogen via aromatase and to DHT via 5α-reductase — gyno, BP, lipids, and HPTA shutdown are the usual monitoring list."
        )

    if "trenbolone" in n:
        return (
            f"{name} is a potent 19-nor synthetic steroid ({pc}) with strong binding at the androgen and progesterone receptors. "
            f"Night sweats, insomnia, anxiety, and lipid wreckage are common talk-track sides; it's veterinary-origin chemistry, not an approved human drug."
        )
    if "nandrolone" in n:
        return (
            f"{name} is a 19-nor anabolic ({pc}) with relatively low androgenic hair-skin punch but progestogenic metabolites that can still suppress HPTA hard. "
            f"Deca is famous for 'deca dick' and months-long metabolite detection."
        )
    if "boldenone" in n or "equipoise" in n:
        return (
            f"{name} is a testosterone-derived anabolic ({pc}) with slow-acting esters and mild aromatization. "
            f"EQ gets described as 'lean' gains with appetite and RBC increases — hematocrit monitoring isn't optional."
        )
    if "drostanolone" in n or "masteron" in n:
        return (
            f"{name} is a DHT-derived anabolic ({pc}) that doesn't aromatize — cosmetic hardness and dryness when you're already lean. "
            f"Hair loss and prostate symptoms track with DHT lineage."
        )
    if "methenolone" in n or "primobolan" in n:
        return (
            f"{name} is a DHT-family anabolic ({pc}) valued for mildness relative to testosterone on paper. "
            f"Oral primo is 1-methylated; injectable enanthate is the classic 'expensive but polite' compound in old-school cycles."
        )
    if "oxandrolone" in n or "anavar" in n:
        return f"{name} is a 17α-alkylated oral DHT derivative ({pc}) — medically used for wasting recovery; liver stress and HDL crush still apply despite the 'mild' reputation."
    if "stanozolol" in n or "winstrol" in n:
        return f"{name} is a 17α-alkylated DHT steroid ({pc}) — dry look, joint dryness, and brutal lipid shifts; oral and suspension versions are both hepatotoxic."
    if "methandrostenolone" in n or "dianabol" in n:
        return f"{name} is the classic 17α-oral testosterone derivative ({pc}) — fast watery mass and strength, aromatizes to estrogen, liver support debates never end."
    if "oxymetholone" in n or "anadrol" in n:
        return f"{name} is a potent oral AAS ({pc}) that can add mass even in hypercaloric-deficit states medically — appetite, BP, and liver enzymes spike quickly."

    return (
        f"{name} is a synthetic anabolic-androgenic steroid ({pc}). "
        f"These drugs bind the androgen receptor to drive muscle protein synthesis and suppress your own testosterone axis — dose, ester, and stack determine estrogenic, androgenic, and cardiovascular fallout."
    )


def sarm_blurb(name: str, classification: str) -> str:
    pc = plain_class(classification)
    n = name.lower()
    if "cardarine" in n or "gw-501516" in n or "gw501516" in n:
        return f"{name} is a PPARδ agonist (often miscalled a SARM) that shifts fuel use toward fatty acids — endurance animal studies were impressive; cancer concerns in rodent models kept it from becoming a drug."
    if "stenabolic" in n or "sr-9009" in n or "sr9009" in n:
        return f"{name} is a Rev-ErbA agonist discussed for circadian metabolism and endurance — bioavailability is poor orally, so a lot of 'results' online may be placebo plus training."
    if "yk-11" in n:
        return f"{name} is a steroidal SARM that also hits myostatin-related pathways on paper — highly suppressive in practice; not a mild beginner SARM despite marketing."
    return (
        f"{name} is a selective androgen receptor modulator ({pc}) — tissue-selective AR signaling in theory, "
        f"less prostate load than testosterone in some models, but suppression, lipids, and vision sides (S4) still show up. None are approved for physique use."
    )


def ancillary_blurb(name: str, classification: str) -> str:
    n = name.lower()
    pc = plain_class(classification)
    if "aromatase" in pc.lower() or "ai" in pc.lower() or any(x in n for x in ("anastrozole", "letrozole", "exemestane")):
        return f"{name} is an aromatase inhibitor ({pc}) — blocks conversion of testosterone to estrogen. Useful medically; on cycle it can crash E2 into joint pain and lipid hell if overdosed."
    if "serm" in pc.lower() or any(x in n for x in ("tamoxifen", "clomiphene", "raloxifene", "toremifene")):
        return f"{name} is a selective estrogen receptor modulator ({pc}) — tissue-specific estrogen block/activation. PCT and fertility protocols use SERMs to wake the pituitary; vision sides and mood swings happen."
    if "finasteride" in n or "dutasteride" in n or "5-alpha" in pc.lower() or "5alpha" in pc.lower():
        return f"{name} blocks 5α-reductase ({pc}), lowering DHT — great for prostate and hair loss medically; sexual sides and 'brain fog' debates are loud in post-finasteride communities."
    if "hcg" in n or "gonadotropin" in n:
        return f"{name} mimics LH at the testes ({pc}) — keeps intratesticular testosterone during TRT or jump-starts atrophy after suppression. Desensitization and estrogen spikes need monitoring."
    if "cabergoline" in n or "pramipexole" in n or "bromocriptine" in n:
        return f"{name} is a dopamine agonist ({pc}) used to knock down prolactin — gyno from 19-nors or lactation sides sometimes gets managed here; nausea and impulse-control issues are real."

    return f"{name} is an ancillary hormone-modulating compound ({pc}) — used to tune estrogen, DHT, prolactin, or gonadotropin signaling around a cycle or TRT. These are prescription tools, not 'just in case' supplements."


def metabolic_blurb(name: str, classification: str) -> str:
    n = name.lower()
    pc = plain_class(classification)
    if "clenbuterol" in n or "albuterol" in n or "salbutamol" in n:
        return f"{name} is a beta-2 adrenergic agonist ({pc}) — bronchodilator medically, fat-loss stimulant illicitly. Tremor, tachycardia, hypokalemia, and tachyphylaxis make it a poor long-term strategy."
    if "dnp" in n or "dinitrophenol" in n:
        return f"{name} uncouples mitochondrial respiration ({pc}) — you literally waste calories as heat. Documented human fatalities make this a hard no regardless of influencer nostalgia."
    if "t3" in n or "t4" in n or "thyroid" in pc.lower() or "liothyronine" in n or "levothyroxine" in n:
        return f"{name} is exogenous thyroid hormone ({pc}). Medically replaces hypo states; abuse for cutting risks muscle loss, arrhythmia, and bone density hits — rebound hypothyroid after stopping isn't rare."
    return f"{name} is a metabolic-modulating agent ({pc}) — shifts energy expenditure, substrate use, or thermogenesis. Cardiovascular and electrolyte monitoring matter more than forum 'fat burner' stacks suggest."


def generic_blurb(name: str, type_: str, classification: str, categories: list[str]) -> str:
    t = type_ or "compound"
    pc = plain_class(classification)
    cat = categories[0] if categories else "performance"

    cat_context = {
        "cognition": "focus, stimulant, or nootropic angles",
        "fat-loss": "weight and metabolic endpoints",
        "performance": "strength, muscle, or endurance goals",
        "recovery": "tissue repair and injury comebacks",
        "longevity": "aging-biology and cellular stress pathways",
        "skin": "skin quality and collagen-adjacent effects",
        "hair": "androgenic alopecia and scalp signaling",
        "hormones": "endocrine and fertility modulation",
        "peptides": "peptide signaling mechanisms",
        "inhibition-lowering": "GABAergic or inhibition-related effects",
    }
    ctx = cat_context.get(cat, "physique and health optimization")

    if pc and pc.lower() not in ("bioactive small molecule or pharmaceutical", ""):
        mech_bit = f" Mechanistically it's discussed as {pc.lower()}."
    else:
        mech_bit = ""

    return (
        f"{name} is a {t.lower()} that shows up around {ctx}.{mech_bit} "
        f"Evidence in humans may be prescription-only, mixed, or mostly absent — read primary studies before treating forum logs as data."
    )


def build_mechanism(classification: str, name: str, type_: str) -> list[dict]:
    cl = plain_class(classification)
    blob = f"{name} {classification}".lower()
    out: list[dict] = []

    if cl:
        out.append({"text": cl, "confidence": "hypothesized"})

    extras: list[tuple[tuple[str, ...], str]] = [
        (("ghrh", "grf", "cjc", "sermorelin"), "Stimulates pituitary GH release via GHRH receptor signaling"),
        (("ghrp", "ghrelin", "ipamorelin", "hexarelin", "mk-677", "ibutamoren"), "Activates ghrelin/GH secretagogue pathways to pulse growth hormone"),
        (("glp-1", "incretin", "semaglutide", "tirzepatide"), "Agonizes incretin receptors to slow gastric emptying and reduce appetite"),
        (("aromatase",), "Inhibits aromatase, lowering estrogen synthesis from androgens"),
        (("5-alpha", "5alpha", "finasteride", "dutasteride"), "Blocks 5α-reductase, reducing DHT formation"),
        (("androgen receptor", "anabolic", "testosterone", "trenbolone"), "Binds androgen receptor to drive anabolic and androgenic gene programs"),
        (("sarm", "ostarine", "ligandrol", "rad-140"), "Selective androgen receptor modulation in muscle vs prostate (imperfect in practice)"),
        (("bpc", "tb-500", "thymosin"), "Promotes cell migration, angiogenesis, and tissue remodeling signaling"),
        (("mitochondri", "ss-31", "mots-c", "dnp"), "Alters mitochondrial energy coupling or membrane potential"),
        (("melanocortin", "melanotan", "pt-141"), "Activates melanocortin receptors (pigmentation, libido, appetite effects)"),
        (("myostatin", "follistatin", "activin"), "Interferes with myostatin/activin inhibition of muscle growth"),
    ]
    for keys, text in extras:
        if any(k in blob for k in keys) and not any(e["text"] == text for e in out):
            out.append({"text": text, "confidence": "hypothesized"})

    if len(out) < 2:
        out.append({
            "text": "Human efficacy and safety outside approved indications are often poorly characterized in public trials",
            "confidence": "established",
        })
    return out[:4]


def build_effects(categories: list[str], classification: str, name: str) -> list[str]:
    blob = f"{' '.join(categories)} {classification} {name}".lower()
    effects: list[str] = []

    def add(s: str) -> None:
        if s not in effects:
            effects.append(s)

    if "recovery" in categories or any(k in blob for k in RECOVERY):
        add("Tissue repair and injury-recovery claims (mostly preclinical)")
    if "fat-loss" in categories or any(k in blob for k in FAT):
        add("Appetite or fat-mass modulation (varies widely by agent)")
    if "performance" in categories or any(k in blob for k in PERF):
        add("Lean mass, strength, or endurance signaling (context-dependent)")
    if "cognition" in categories or any(k in blob for k in COGNITION):
        add("Focus, arousal, or sleep-quality effects discussed")
    if "skin" in categories or "looks" in categories:
        add("Skin quality, tanning, or collagen-adjacent cosmetic effects")
    if "hair" in categories:
        add("Scalp DHT/androgen modulation for hair retention")
    if "longevity" in categories:
        add("Cellular stress and aging-pathway speculation")
    if "hormones" in categories:
        add("Shifts estrogen, androgen, or gonadotropin balance")
    if "inhibition-lowering" in categories:
        add("GABAergic or inhibition-related subjective effects")

    if not effects:
        add("Effects depend on indication and are not well established off-label")
    add("Gray-market purity and dosing uncertainty")
    return effects[:5]


def card_summary(name: str, categories: list[str], classification: str) -> str:
    labels = [c.replace("-", " ") for c in categories if c not in ("peptides", "peptide")]
    if not labels:
        labels = ["peptide"]
    tag = ", ".join(labels[:2])
    pc = plain_class(classification)
    if pc:
        short = pc if len(pc) <= 70 else pc[:67] + "…"
        return f"{tag.capitalize()} · {short}"
    return tag.capitalize()


def human_what_it_is(name: str, type_: str, classification: str, categories: list[str]) -> str:
    t = type_.lower()
    if "peptide" in t or t.startswith("glp") or t == "triple agonist" or "ghs" in t:
        return peptide_blurb(name, classification)
    if "steroid" in t or "aas" in t:
        return steroid_blurb(name, classification)
    if "sarm" in t or "ppar" in t or "rev-erba" in t:
        return sarm_blurb(name, classification)
    if "ancillary" in t:
        return ancillary_blurb(name, classification)
    if "metabolic" in t:
        return metabolic_blurb(name, classification)
    return generic_blurb(name, type_, classification, categories)


PHARMA_KNOWLEDGE: dict[str, dict] = {
    "dexmethylphenidate": {
        "type": "Stimulant",
        "classification": "d-isomer methylphenidate (ADHD)",
        "categories": ["cognition"],
        "whatItIs": "Dexmethylphenidate (Focalin) is the active d-threo enantiomer of methylphenidate — basically Ritalin with the less-active mirror image removed. It blocks dopamine and norepinephrine reuptake for ADHD; non-medical use for cramming or appetite suppression brings the usual stimulant cardiovascular baggage.",
    },
    "dutasteride": {
        "type": "Ancillary (5α-IR)",
        "classification": "Dual 5α-reductase inhibitor",
        "categories": ["hair", "hormones"],
        "whatItIs": "Dutasteride blocks both type I and II 5α-reductase, crushing DHT harder than finasteride. Medically used for BPH and hair loss; sexual sides and post-drug syndrome reports get as heated here as with fin.",
    },
    "dmaa": {
        "type": "Stimulant",
        "classification": "Indirect sympathomimetic",
        "categories": ["fat-loss", "performance"],
        "whatItIs": "DMAA (1,3-dimethylamylamine) is an old pre-workout stimulant that squeezes norepinephrine release for energy and appetite suppression. Banned or restricted in many countries after stroke and death case reports — not worth the nostalgia.",
    },
    "dmha": {
        "type": "Stimulant",
        "classification": "DMAA successor sympathomimetic",
        "categories": ["fat-loss", "performance"],
        "whatItIs": "DMHA (2-aminoisoheptane) is the 'replacement' stimulant that filled DMAA-shaped holes in fat burners. Similar push on heart rate and BP with an even thinner safety literature.",
    },
    "empagliflozin": {
        "type": "SGLT2 inhibitor",
        "classification": "Renal glucose reabsorption blocker",
        "categories": ["fat-loss", "performance"],
        "whatItIs": "Empagliflozin (Jardiance) is an SGLT2 inhibitor that dumps glucose into the urine — diabetes drug that also pulls water weight and has cardio outcome data. Ketoacidosis risk and UTIs are the reminders it's a real prescription, not a diuretic meme.",
    },
    "enzalutamide": {
        "type": "Anti-androgen",
        "classification": "Androgen receptor signaling inhibitor",
        "categories": ["hormones", "performance"],
        "whatItIs": "Enzalutamide is a potent AR antagonist used in prostate cancer — it blocks androgen receptor signaling systemically. Not a bodybuilding drug; included because AR biology intersects with every 'cycle' conversation.",
    },
    "everolimus": {
        "type": "mTOR inhibitor",
        "classification": "Rapamycin-class immunosuppressant",
        "categories": ["longevity"],
        "whatItIs": "Everolimus (Afinitor) inhibits mTOR — transplant and oncology drug that longevity crowds watch for rapalog-style aging biology. Immunosuppression and metabolic sides make DIY use a bad idea.",
    },
    "exemestane": {
        "type": "Ancillary (AI)",
        "classification": "Suicidal aromatase inhibitor",
        "categories": ["hormones", "performance"],
        "whatItIs": "Exemestane (Aromasin) permanently binds aromatase until new enzyme is made — steroidal AI used in breast cancer and sometimes on-cycle estrogen control. Joint dryness and lipid hits still happen if you nuke E2.",
    },
    "finasteride": {
        "type": "Ancillary (5α-IR)",
        "classification": "Type II 5α-reductase inhibitor",
        "categories": ["hair", "hormones"],
        "whatItIs": "Finasteride (Propecia) lowers DHT ~70% for hair loss and prostate — the most prescribed hair drug on earth. Libido, depression, and post-finasteride syndrome threads are impossible to ignore even if incidence is debated.",
    },
    "fluoxymesterone": {
        "type": "Steroid (AAS)",
        "classification": "17α-oral highly androgenic AAS",
        "categories": ["performance", "hormones"],
        "whatItIs": "Fluoxymesterone (Halotestin) is a brutally androgenic oral AAS used medically for breast cancer and strength sports cheating — aggression and liver stress without much pleasant anabolism.",
    },
    "fulvestrant": {
        "type": "SERM/ER antagonist",
        "classification": "Pure estrogen receptor degrader",
        "categories": ["hormones"],
        "whatItIs": "Fulvestrant (Faslodex) is an injectable ER degrader for breast cancer — full estrogen blockade in tissue, not the partial dance of tamoxifen.",
    },
    "drostanolone": {
        "type": "Steroid (AAS)",
        "classification": "DHT-derived anabolic",
        "categories": ["performance", "hormones"],
        "whatItIs": "Drostanolone (Masteron) is a DHT-derivative that hardens look when you're already lean — cosmetic polish, not a mass builder. Propionate and enanthate esters change injection cadence, not the core androgenic profile.",
    },
}


def enrich_record(cid: str, batch: dict, csv: dict[str, dict]) -> dict | None:
    name = batch["name"]
    key = slugify(name)
    src = csv.get(key) or csv.get(slugify(strip_parens(name))) or PHARMA_KNOWLEDGE.get(cid) or PHARMA_KNOWLEDGE.get(key)

    if not is_thin(batch.get("whatItIs", "")) and not src:
        return None

    if src:
        type_ = src.get("type", "")
        classification = src.get("classification", batch.get("classification", ""))
        categories = src.get("categories") or infer_categories(type_, classification, name)
        what = src.get("whatItIs") or human_what_it_is(name, type_, classification, categories)
    else:
        type_ = batch.get("classification", "") or "compound"
        classification = batch.get("classification", "")
        categories = infer_categories("", classification, name)
        if batch.get("categories"):
            categories = list(dict.fromkeys(batch["categories"] + categories))
        what = human_what_it_is(name, type_, classification, categories)

    return {
        "categories": categories,
        "classification": plain_class(classification) or batch.get("classification", ""),
        "whatItIs": what,
        "cardSummary": card_summary(name, categories, classification),
        "mechanism": build_mechanism(classification, name, type_),
        "effects": build_effects(categories, classification, name),
    }


def main() -> None:
    csv = load_csv()
    batches = load_batch_ids()
    meta: dict[str, dict] = {}

    for cid, batch in batches.items():
        rec = enrich_record(cid, batch, csv)
        if rec:
            meta[cid] = rec

    # Also pre-build meta for all CSV rows (covers deduped-away variants)
    for key, row in csv.items():
        if key in meta:
            continue
        cid = slugify(row["name"])
        if cid in meta:
            continue
        cats = infer_categories(row["type"], row["classification"], row["name"])
        meta[cid] = {
            "categories": cats,
            "classification": plain_class(row["classification"]),
            "whatItIs": human_what_it_is(row["name"], row["type"], row["classification"], cats),
            "cardSummary": card_summary(row["name"], cats, row["classification"]),
            "mechanism": build_mechanism(row["classification"], row["name"], row["type"]),
            "effects": build_effects(cats, row["classification"], row["name"]),
        }

    out_path = ROOT / "compound-meta.js"
    payload = json.dumps(meta, ensure_ascii=False, indent=2)
    out_path.write_text(f"const COMPOUND_META = {payload};\n", encoding="utf-8")
    print(f"Wrote {len(meta)} entries to {out_path.name}")


if __name__ == "__main__":
    main()
