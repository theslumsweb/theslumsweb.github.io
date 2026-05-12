
const WEB3FORMS_ACCESS_KEY = "6e8a2430-bcba-4734-8abb-5622a7fcb9d0";

const HARDMAXXING_LIST =
  typeof HARDMAXXING_SECTIONS !== "undefined" && Array.isArray(HARDMAXXING_SECTIONS)
    ? HARDMAXXING_SECTIONS
    : [];

const COMPOUNDS = [
  ...NEW_COMPOUNDS_1,
  ...NEW_COMPOUNDS_2,
  ...NEW_COMPOUNDS_3,
  ...NEW_COMPOUNDS_4,
  ...NEW_COMPOUNDS_5,
  ...NEW_COMPOUNDS_6,
  ...NEW_COMPOUNDS_7,
  ...(typeof NEW_COMPOUNDS_INHIBITION !== "undefined" && Array.isArray(NEW_COMPOUNDS_INHIBITION) ? NEW_COMPOUNDS_INHIBITION : []),
];

const THEME_KEY = "slums_theme";
const BOOKMARK_KEYS = ["slums_bookmarks", "substrate_bookmarks"];
const NOTES_GLOBAL_KEY = "slums_notes_global";
const NOTES_BY_COMPOUND_KEY = "slums_notes_by_compound";
/** Optional richer copy + study picks (esp. GLP-1 class). */
const COMPOUND_OVERRIDES = {
  retatrutide: {
    effectiveness:
      "Phase 2 data in NEJM (2023) showed dose-dependent weight loss with retatrutide, a triple agonist at GIP, GLP-1, and glucagon receptors, with placebo-subtracted reductions that exceeded what is typical for older single-path incretin therapies at comparable stages. Subsequent phase 3 program readouts (TRIUMPH series) reported among the largest mean percentage weight losses published for pharmacologic obesity treatment, generally deeper than semaglutide arms from historical trials and competitive with or beyond tirzepatide in cross-trial comparisons (head-to-head RCTs vs every comparator are not always available). GI tolerability and dose escalation patterns resemble other incretins, with nausea/vomiting dominating early discontinuations.",
    safety:
      "Class effects: GI adverse events, gallbladder disease signals, possible heart-rate increase, and rare pancreatitis concerns mirror other incretins; long-term outcomes beyond trial horizons are still accumulating. Hypoglycemia risk is lower in non-diabetic obesity cohorts but not zero when combined with insulin or sulfonylureas. Pregnancy contraindications and thyroid C-cell tumor warnings (class labeling from rodent findings) apply to GLP-1–based therapies. Check current FDA/EMA labels.",
    recommendedFor: [
      "Adults with obesity or overweight with complications, under specialist prescribing (where approved or in trials)",
      "Scenarios prioritizing maximal incretin-driven weight loss when dual/triple agonism is appropriate",
      "Approved / late-stage obesity pharmacotherapy where prescribed—not research-use peptides.",
    ],
    pros: [
      "Among the strongest published mean weight-loss signals in modern anti-obesity pharmacotherapy",
      "Once-weekly injectable (trial designs) with a mechanism complementary to diet and exercise counseling",
      "Addresses multiple nutrient-stimulated hormone pathways vs single-receptor GLP-1-only drugs",
    ],
    cons: [
      "Substantial GI side-effect burden during titration; dropout from intolerance is real",
      "Cost, access, and insurance coverage constraints where not yet approved",
      "Requires monitoring as for other incretins (pancreatic/biliary symptoms, HR, drug interactions)",
    ],
    communityNotes:
      "Patients and clinicians on obesity medicine forums often describe retatrutide as subjectively ‘stronger’ or faster-acting for appetite suppression than semaglutide or tirzepatide, but individual responses vary and cross-trial comparisons are not the same as head-to-head experience. Expect hype to outrun personal tolerance.",
    studies: [
      {
        title: "Triple-Hormone-Receptor Agonist Retatrutide for Obesity (phase 2 dose-ranging trial)",
        summary:
          "Randomized trial demonstrating meaningful dose-dependent weight reduction with retatrutide over 48 weeks; established proof-of-concept for triple agonism in obesity.",
        outcome: "positive",
        citation: "Jastreboff AM et al. N Engl J Med. 2023.",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/37366315/",
      },
      {
        title: "TRIUMPH phase 3 program: sustained weight loss and cardiometabolic endpoints",
        summary:
          "Industry-reported phase 3 trials (TRIUMPH-1–4) showed high double-digit mean weight loss at maintenance doses; details and secondary outcomes continue to roll out in the literature.",
        outcome: "positive",
        citation: "See NEJM / Lancet publications for TRIUMPH trials (2024–2026).",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/?term=retatrutide+TRIUMPH",
      },
      {
        title: "Indirect comparison context: SURMOUNT-5 tirzepatide vs semaglutide",
        summary:
          "While not a retatrutide head-to-head, SURMOUNT-5 illustrated that dual GIP/GLP-1 agonism (tirzepatide) beat high-dose semaglutide on mean weight change, useful backdrop for why triple agonists generated enthusiasm.",
        outcome: "positive",
        citation: "Aronne LJ et al. N Engl J Med. 2024 (SURMOUNT-5).",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/?term=SURMOUNT-5+tirzepatide+semaglutide",
      },
    ],
    cycling:
      "Obesity meds like this are meant to be long-term with a prescriber titrating you, not a 'blast/cruise' meme. People pause for surgery, pregnancy, money, sides, whatever, but that should be your doc's call, not a Discord checklist. Random 'drug holidays' you saw on a forum aren't a strategy.",
    dosing: {
      summary:
        "Trial programs used once-weekly subcutaneous injection with dose escalation over many weeks; maintenance doses in published obesity trials reached high milligram strengths that differ by region and evolving approvals. Exact titration schedules and caps are label-specific—use the current FDA-approved prescribing information (or your country’s regulator) rather than forum spreadsheets.",
      routes: ["Subcutaneous (injection)"],
      reconstitutionDefaults: null,
    },
  },
  semaglutide: {
    effectiveness:
      "Semaglutide (GLP-1 RA, weekly at obesity doses) has extensive phase 3 data (STEP program): large mean weight losses vs placebo, broad use in type 2 diabetes at lower doses, and established regulatory approvals for obesity in many regions. It remains a reference standard against which newer incretins are compared, though dual/triple agonists have often shown larger mean effects in later trials.",
    safety:
      "GI intolerance is common early; rare severe events (pancreatitis, biliary disease) are class concerns. Thyroid C-cell tumor warnings exist from rodent data. Avoid in pregnancy; caution with other glucose-lowering drugs that can cause hypoglycemia.",
    recommendedFor: [
      "Type 2 diabetes (glycemic and weight endpoints)",
      "Obesity or overweight with weight-related comorbidities where GLP-1 therapy is indicated",
    ],
    pros: ["Large RCT evidence base", "Real-world prescribing experience", "Once-weekly injection (obesity formulation)"],
    cons: ["Nausea/vomiting", "Lean mass drops with the fat for some people (training + protein still matter)", "Cost/access"],
    communityNotes:
      "Patient forums are loud: lots of 'hunger just died' posts, but also reflux, fatigue, and people spiraling about 'Ozempic face'. All vibes/anecdotes, not proof of what happens to you.",
    studies: [
      {
        title: "STEP 1: semaglutide 2.4 mg and lifestyle intervention in obesity",
        summary: "Pivotal trial showing robust placebo-adjusted weight loss at 68 weeks.",
        outcome: "positive",
        citation: "Wilding JPH et al. N Engl J Med. 2021.",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/33567185/",
      },
      {
        title: "STEP program meta-analyses and follow-on trials",
        summary: "Consistent efficacy signal across populations; cardiovascular outcome trials ongoing/rolled out by indication.",
        outcome: "positive",
        citation: "PubMed: STEP semaglutide obesity",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/?term=semaglutide+STEP+obesity",
      },
    ],
    cycling:
      "Chronic therapy for obesity/T2D when tolerated; escalation/de-escalation per prescriber. Not traditionally ‘cycled’ like AAS; some users taper for side effects.",
    dosing: {
      summary:
        "For chronic weight management (e.g. Wegovy), product labeling describes a multi-week titration toward a 2.4 mg once-weekly maintenance dose in many adults, with lower maintenance options if tolerated poorly—pediatric dosing and diabetes-branded strengths differ. For type 2 diabetes (Ozempic), approved doses and titration are lower. Always follow the actual pen/vial strength you were dispensed and your clinician’s plan.",
      routes: ["Subcutaneous (injection)"],
      reconstitutionDefaults: null,
    },
  },
  tirzepatide: {
    effectiveness:
      "Tirzepatide (dual GIP/GLP-1 agonist) put up strong numbers in SURMOUNT / SURPASS. SURMOUNT-5 vs semaglutide in obesity favored tirzepatide on mean weight change, which is basically the argument for 'GIP actually adds something' beyond GLP-1 alone.",
    safety:
      "GI adverse effects similar to GLP-1 class; monitoring for pancreatitis, biliary disease; pregnancy contraindicated; thyroid C-cell warning as class labeling.",
    recommendedFor: ["Obesity", "Type 2 diabetes", "Metabolic syndrome components under specialist care"],
    pros: ["Head-to-head data vs semaglutide in SURMOUNT-5", "Strong mean weight and HbA1c effects"],
    cons: ["GI tolerability", "Cost", "Injectable training and access"],
    communityNotes:
      "Boards love calling it 'stronger' than semaglutide for appetite. Trial averages lean that way for a lot of people, not everyone.",
    studies: [
      {
        title: "SURMOUNT-1: tirzepatide in obesity",
        summary: "Large placebo-controlled obesity trial establishing substantial mean weight loss.",
        outcome: "positive",
        citation: "Jastreboff AM et al. N Engl J Med. 2022.",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/35658024/",
      },
      {
        title: "SURMOUNT-5: tirzepatide vs semaglutide in obesity",
        summary: "Active-comparator trial favoring tirzepatide on mean weight change over 72 weeks.",
        outcome: "positive",
        citation: "Aronne LJ et al. N Engl J Med. 2024.",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/39460657/",
      },
    ],
    cycling:
      "Long-term metabolic therapy with titration; not a recreational cycle drug. Holidays only for medical reasons or intolerance, with clinician input.",
    dosing: {
      summary:
        "Tirzepatide labeling for obesity (e.g. Zepbound) and diabetes (Mounjaro) uses staged weekly dose increases toward maintenance strengths commonly cited up to 15 mg/week for some adults, with starting doses in the low single-digit mg range—subject to region, indication, and renal considerations. This site does not replicate full titration tables; open DailyMed or the EMA SmPC for the exact table that matches your vial concentration.",
      routes: ["Subcutaneous (injection)"],
      reconstitutionDefaults: null,
    },
  },
};

// ──────────────────────────────────────
// STATE
// ──────────────────────────────────────
let activeCategory = null;
let bookmarks = loadBookmarks();
let currentView = "home";
let surgeryPartFilter = null;
let surgerySearchQuery = "";
let lastOpenedCompoundId = null;
let lastOpenedSurgeryId = null;

function loadBookmarks() {
  for (const k of BOOKMARK_KEYS) {
    try {
      const raw = localStorage.getItem(k);
      if (raw) {
        const v = JSON.parse(raw);
        if (Array.isArray(v) && v.length) return v;
      }
    } catch (_) {}
  }
  return [];
}

function saveBookmarks() {
  localStorage.setItem("slums_bookmarks", JSON.stringify(bookmarks));
}

// ──────────────────────────────────────
// VIEW MODEL (effectiveness / safety / studies / cycling)
// ──────────────────────────────────────
function collectStudiesRaw(c) {
  const out = [];
  for (const bucket of ["human", "animal", "vitro", "anecdotal"]) {
    for (const s of c.studies[bucket] || []) {
      out.push({ ...s, _bucket: bucket });
    }
  }
  return out;
}

function deriveRecommended(c) {
  const map = {
    "fat-loss": "Weight / fat-mass goals (research or prescribed contexts)",
    cognition: "Focus, mood, sleep-adjacent performance (highly variable evidence)",
    skin: "Cosmetic or dermatologic goals",
    recovery: "Tissue repair, injury, or training recovery narratives",
    longevity: "Aging-biology interest (often speculative)",
    performance: "Strength, endurance, or body-composition performance contexts",
    "inhibition-lowering": "Anxiety, spasticity, or related clinical contexts (prescription drugs; follow local law and medical guidance)",
  };
  const lines = (c.categories || []).map((cat) => map[cat] || cat);
  lines.push("Check legality where you live and involve a clinician when decisions affect your health.");
  return lines;
}

function deriveEffectiveness(c) {
  const ev = c.evidenceScore || {};
  const tier = ev.human || "Low";
  const fx = (c.effects || []).slice(0, 5);
  let s = `Human trial data (very informal tier): ${tier}. `;
  s += fx.length
    ? `Listed effect themes: ${fx.join(" ")}`
    : "Verify indication-specific outcomes in primary literature.";
  return s;
}

function deriveSafety(c) {
  const ev = c.evidenceScore || {};
  const tier = ev.safety || "Low";
  const se = (c.sideEffects || []).slice(0, 6);
  let s = `Safety reporting in the sources we used: ${tier}. `;
  s += se.length
    ? `Commonly noted concerns: ${se.join(" ")}`
    : "Assume elevated unknown risk for unapproved or grey-market agents.";
  return s;
}

function deriveCommunity(c) {
  const an = c.studies?.anecdotal || [];
  if (an.length) {
    return an
      .map((x) => x.summary)
      .filter(Boolean)
      .join(" ");
  }
  return "Online reports are mixed and unverified—use them only as weak context next to trials and professional advice.";
}

const GLP_CYCLING =
  "GLP-1 therapies for diabetes or obesity are usually long-term care with prescriber-led titration, not informal “cycling.” Pausing or changing dose should be a medical decision.";

function deriveCycling(c) {
  const blob = `${c.name} ${(c.categories || []).join(" ")} ${c.classification || ""}`.toLowerCase();
  if (/semaglutide|tirzepatide|retatrutide|liraglutide|incretin|glp-1/.test(blob)) {
    return GLP_CYCLING;
  }
  if (/sarm|andarine|ostarine|ligandrol|rad-140|yk-11|s-23|steroid|testosterone|tren|nandrolone|anavar|dhb|primo|ment|superdrol|epistane|prohormone/.test(blob)) {
    return "Online PED schedules vary widely and are rarely grounded in individualized medical follow-up—treat any fixed “on/off” template as anecdotal.";
  }
  if (/peptide|bpc|tb-500|sermorelin|ipamorelin|ghrp|thymosin|melanotan/.test(blob)) {
    return "Published long-term schedules for many peptides are thin; forum protocols are often anecdotal and may not match your situation.";
  }
  if (/modafinil|armodafinil|amphetamine|methylphenidate|racetam|phenibut|dmaa|stimulant/.test(blob)) {
    return "Tolerance and dependence can matter; any schedule should follow prescribing guidance when a drug is prescribed.";
  }
  if (/ketoconazole|finasteride|dutasteride|aromatase|tamoxifen|serm/.test(blob)) {
    return "Follow the approved label or your clinician for ancillaries and hormone-axis medications.";
  }
  return "There isn’t a single standard “cycle” for this entry in mainstream guidelines; favor evidence or label-based plans over anonymous protocols.";
}

function enrichStudies(c) {
  let list = collectStudiesRaw(c).filter((s) => s.title);
  if (list.length < 2) {
    list = list.concat([
      {
        title: `Structured literature search: ${c.name}`,
        summary: "Search PubMed or trial registries for reviews and primary studies—this card may be incomplete.",
        outcome: "neutral",
        citation: `PubMed query: ${c.name}`,
        pubmed: `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(c.name)}`,
      },
    ]);
  }
  return list.slice(0, 14);
}

function buildViewModel(c) {
  const ov = COMPOUND_OVERRIDES[c.id];
  const baseStudies = enrichStudies(c);
  const studies = ov?.studies?.length ? ov.studies : baseStudies;
  return {
    effectiveness: ov?.effectiveness ?? deriveEffectiveness(c),
    safety: ov?.safety ?? deriveSafety(c),
    recommendedFor: ov?.recommendedFor ?? deriveRecommended(c),
    pros: ov?.pros ?? (c.effects || []).slice(0, 6),
    cons: ov?.cons ?? (c.sideEffects || []).slice(0, 8),
    communityNotes: ov?.communityNotes ?? deriveCommunity(c),
    studies,
    cycling: ov?.cycling ?? deriveCycling(c),
  };
}

function pubmedSearchUrl(query) {
  return `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(query)}`;
}

/** Broad literature search (Cochrane Library often 403/419 to bots; Europe PMC stays reachable.) */
function broadLiteratureSearchUrl(query) {
  return `https://europepmc.org/search?query=${encodeURIComponent(query)}`;
}

/** Normalize PubMed / PMC links so PMIDs always resolve. */
function normalizeLiteratureUrl(url) {
  let u = String(url == null ? "" : url).trim();
  if (!u) return "";
  if (u.startsWith("//")) u = `https:${u}`;
  if (u.startsWith("http://")) u = `https://${u.slice(7)}`;
  const pm = u.match(/(?:pubmed\.ncbi\.nlm\.nih\.gov\/|ncbi\.nlm\.nih\.gov\/pubmed\/)(\d+)/i);
  if (pm) return `https://pubmed.ncbi.nlm.nih.gov/${pm[1]}/`;
  return u;
}

function escapeAttr(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function studyExternalUrl(s) {
  const primary = normalizeLiteratureUrl(s.pubmed || s.url || "");
  if (primary) return primary;
  const q = (s.title || s.citation || "review").trim().slice(0, 240);
  return pubmedSearchUrl(q);
}

function redditSubSearchUrl(subreddit, query) {
  const sub = String(subreddit).replace(/^r\//i, "").replace(/[^\w]/g, "");
  const q = String(query || "").trim() || sub;
  return `https://www.reddit.com/r/${sub}/search/?q=${encodeURIComponent(q)}&restrict_sr=1&sort=relevance&t=all`;
}

/** Starter links for “what forums say about cycles” — live searches, not scraped claims. */
function forumCycleLinksHtml(c) {
  const name = (c.name || "compound").trim();
  const blob = `${name} ${(c.categories || []).join(" ")} ${c.classification || ""}`.toLowerCase();
  const picks = [];
  if (/semaglutide|tirzepatide|retatrutide|liraglutide|incretin|wegovy|ozempic|mounjaro|zepbound|glp-1/.test(blob)) {
    picks.push({ label: "r/semaglutide", slug: "semaglutide" });
    picks.push({ label: "r/Ozempic", slug: "Ozempic" });
  }
  if (/peptide|bpc|tb-?500|ipamorelin|sermorelin|ghrp|thymosin|melanotan|tesamorelin/.test(blob)) {
    picks.push({ label: "r/Peptides", slug: "Peptides" });
  }
  if (/sarm|ostarine|ligandrol|rad-140|rad140|yk-11|yk11|s-23|s23/.test(blob)) {
    picks.push({ label: "r/PEDs", slug: "PEDs" });
  }
  picks.push({ label: "r/steroids", slug: "steroids" });
  picks.push({ label: "r/PEDs", slug: "PEDs" });
  picks.push({ label: "r/Nootropics", slug: "Nootropics" });

  const seen = new Set();
  const uniq = [];
  for (const p of picks) {
    if (seen.has(p.slug)) continue;
    seen.add(p.slug);
    uniq.push(p);
    if (uniq.length >= 4) break;
  }

  const items = uniq
    .map(
      (p) =>
        `<li><a href="${escapeAttr(redditSubSearchUrl(p.slug, name))}" target="_blank" rel="noopener noreferrer">${escapeHtml(
          p.label
        )}</a></li>`
    )
    .join("");

  return `
    <div class="forum-cycle-suggestions">
      <div class="forum-cycle-label">Quick Reddit searches (same queries you’d type yourself)</div>
      <ul class="forum-cycle-list">${items}</ul>
      <p class="forum-cycle-note">Threads are unmoderated opinion—not evidence. Prefer trials and clinical guidance.</p>
    </div>
  `;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text == null ? "" : String(text);
  return div.innerHTML;
}

/** Style [12] citation markers from the source file */
function decorateRefMarkers(escapedText) {
  return escapedText.replace(/(\[\d+\](?:\s*\[\d+\])*)/g, '<span class="guide-ref">$1</span>');
}

const LABEL_LINE =
  /^([A-Za-z0-9][A-Za-z0-9,\/&'’.\-]{0,48}):\s*(.*)$/;

/**
 * Format atlas plain text into readable HTML (same wording, structured layout).
 */
function formatHardmaxContentToHTML(raw) {
  const lines = raw.replace(/\r/g, "").split("\n");
  const out = [];
  let i = 0;
  let paraBuf = [];

  function flushPara() {
    if (!paraBuf.length) return;
    const t = paraBuf.join(" ").replace(/\s+/g, " ").trim();
    if (t) out.push(`<p class="guide-p">${decorateRefMarkers(escapeHtml(t))}</p>`);
    paraBuf = [];
  }

  function consumeSubsectionKvs(start) {
    let j = start;
    const bits = [];
    while (j < lines.length) {
      const L2 = lines[j].trim();
      if (!L2) {
        j++;
        break;
      }
      const lp = lines[j + 1]?.trim() || "";
      if (!L2.includes(":") && LABEL_LINE.test(lp)) break;
      const m = L2.match(LABEL_LINE);
      if (m && m[2].trim() !== "") {
        bits.push(
          `<div class="guide-kv guide-kv--nested"><span class="guide-k">${escapeHtml(m[1].trim())}</span><span class="guide-v">${decorateRefMarkers(
            escapeHtml(m[2].trim())
          )}</span></div>`
        );
        j++;
        continue;
      }
      break;
    }
    return { html: bits.join("\n"), nextIndex: j };
  }

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      flushPara();
      i++;
      continue;
    }

    const ord = line.match(/^(\d+)\.\s+(.*)$/);
    if (ord) {
      flushPara();
      const items = [];
      while (i < lines.length) {
        const m = lines[i].trim().match(/^(\d+)\.\s+(.*)$/);
        if (!m) break;
        items.push(m[2]);
        i++;
      }
      out.push(
        `<ol class="guide-ol">${items
          .map((t) => `<li>${decorateRefMarkers(escapeHtml(t))}</li>`)
          .join("")}</ol>`
      );
      continue;
    }

    const lab = line.match(LABEL_LINE);
    if (lab) {
      const label = lab[1].trim();
      const rest = lab[2].trim();
      flushPara();

      if (rest === "") {
        i++;
        while (i < lines.length && !lines[i].trim()) i++;
        const fragments = [];
        const simpleBullets = [];

        while (i < lines.length) {
          while (i < lines.length && !lines[i].trim()) i++;
          if (i >= lines.length) break;
          const L = lines[i].trim();
          if (/^\d+\.\s/.test(L)) break;

          const topLab = L.match(LABEL_LINE);
          if (topLab && topLab[2].trim() !== "") break;

          const nextPeek = lines[i + 1]?.trim() || "";
          if (!L.includes(":") && LABEL_LINE.test(nextPeek)) {
            i++;
            const sub = consumeSubsectionKvs(i);
            fragments.push(
              `<div class="guide-subsec"><h4 class="guide-minisub">${escapeHtml(L)}</h4>${sub.html}</div>`
            );
            i = sub.nextIndex;
            continue;
          }

          if (LABEL_LINE.test(L)) break;

          simpleBullets.push(L);
          i++;
        }

        if (fragments.length && simpleBullets.length) {
          out.push(
            `<section class="guide-block"><h4 class="guide-block-title">${escapeHtml(label)}</h4>${fragments.join(
              ""
            )}<ul class="guide-list">${simpleBullets
              .map((t) => `<li>${decorateRefMarkers(escapeHtml(t))}</li>`)
              .join("")}</ul></section>`
          );
        } else if (fragments.length) {
          out.push(
            `<section class="guide-block"><h4 class="guide-block-title">${escapeHtml(label)}</h4>${fragments.join("")}</section>`
          );
        } else if (simpleBullets.length) {
          out.push(
            `<section class="guide-block"><h4 class="guide-block-title">${escapeHtml(label)}</h4><ul class="guide-list">${simpleBullets
              .map((t) => `<li>${decorateRefMarkers(escapeHtml(t))}</li>`)
              .join("")}</ul></section>`
          );
        } else {
          out.push(`<h4 class="guide-block-title guide-block-title--solo">${escapeHtml(label)}</h4>`);
        }
        continue;
      }

      out.push(
        `<div class="guide-kv"><span class="guide-k">${escapeHtml(label)}</span><span class="guide-v">${decorateRefMarkers(
          escapeHtml(rest)
        )}</span></div>`
      );
      i++;
      continue;
    }

    const nextLine = lines[i + 1]?.trim() || "";
    const looksLikeSubheadStart = /^[A-Z]/.test(line) || /^[0-9]+[A-Za-z]/.test(line);
    if (
      looksLikeSubheadStart &&
      line.length < 96 &&
      !line.includes(":") &&
      LABEL_LINE.test(nextLine)
    ) {
      flushPara();
      out.push(`<h3 class="guide-subh">${escapeHtml(line)}</h3>`);
      i++;
      continue;
    }

    paraBuf.push(line);
    i++;
  }
  flushPara();
  return `<article class="guide-article">${out.join("\n")}</article>`;
}

const PART_SWATCH_HUE = [152, 168, 142, 125, 195, 28, 12, 48, 175, 265, 22, 310];

function hardmaxThumbHTML(partNum) {
  const n = Math.max(1, partNum || 1);
  const t = PART_SWATCH_HUE[(n - 1) % PART_SWATCH_HUE.length];
  return `<div class="hardmax-thumb" style="--thumb-hue:${t}"><span>${n}</span></div>`;
}

function buildHardmaxViewModel(sec) {
  const flat = sec.content.replace(/\s+/g, " ").trim();
  const excerpt = flat.slice(0, 420) + (flat.length > 420 ? "…" : "");
  const litQ = `${sec.title} facial aesthetic surgery`;
  const isMeta =
    sec.partNum >= 11 && /recovery|risk|success|cost/i.test(sec.title);

  const effectiveness = isMeta
    ? excerpt || "Overview topics—confirm timelines and outcomes with your surgical team."
    : excerpt || "See below for indications, technique summary, and recovery orientation.";

  const safety = isMeta
    ? "Summaries here don’t replace informed consent or a surgeon’s assessment of your risks."
    : "Elective surgery involves anesthesia, bleeding, infection, nerve injury, asymmetry, scarring, unsatisfactory results, and possible revision. Severity varies by procedure—follow specialist guidance.";

  const recommendedFor = [
    "Adults preparing for specialist consultations",
    "Readers who verify claims against peer-reviewed literature and society guidance",
    "Anyone treating these notes as orientation, not a treatment plan",
  ];

  const pros = isMeta
    ? ["Groups recovery and risk themes in one skim-friendly view", "Good prompt list for questions to ask your team"]
    : [
        "Can address bone and deeper soft tissue in ways non-surgical options cannot",
        "Many procedures have established surgical curricula",
        "A structured consult usually outweighs anecdote threads alone",
      ];

  const cons = isMeta
    ? ["Second-hand; detail varies by region and practice", "May miss nuances of your anatomy or health"]
    : [
        "Many outcomes are lasting or difficult to revise",
        "Real recovery time, cost, and anesthesia exposure",
        "Social trends shouldn’t rush surgical timing",
      ];

  const communityNotes =
    "Patient forums mix honest reports with marketing noise—prioritize long-term follow-ups and complications discussions when you read them, then verify with literature.";

  const studies = [
    {
      title: `PubMed: ${sec.title}`,
      summary: "Try searches combining this procedure with complications, outcomes, meta-analysis, or cohort.",
      outcome: "neutral",
      citation: "PubMed (NIH)",
      pubmed: pubmedSearchUrl(litQ),
    },
    {
      title: `Cochrane: ${sec.title}`,
      summary: "See whether systematic reviews exist before relying on promotional pages.",
      outcome: "neutral",
      citation: "Europe PMC (broad search)",
      pubmed: broadLiteratureSearchUrl(`${sec.title} surgery systematic review`),
    },
  ];

  const recovery = isMeta
    ? "Phase-by-phase stuff is in the atlas entry below. Your surgical team's paperwork beats this site every time."
    : "Recovery details in the atlas entry are background reading only; follow your surgeon’s written protocol.";

  return {
    effectiveness,
    safety,
    recommendedFor,
    pros,
    cons,
    communityNotes,
    studies,
    recovery,
  };
}

// ──────────────────────────────────────
// SEARCH INDEX, ROUTING, NOTES, DOSING HELPERS
// ──────────────────────────────────────
let compoundSearchIndex = [];

function normNickName(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/\u03b2/g, "beta")
    .replace(/\u03b1/g, "alpha")
    .replace(/β/g, "beta")
    .replace(/–|—/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function nickKeysFromLeft(leftStr) {
  const keys = new Set();
  const t = leftStr.trim();
  if (!t) return keys;
  keys.add(normNickName(t));
  const m = t.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (m) {
    keys.add(normNickName(m[1].trim()));
    keys.add(normNickName(m[2].trim()));
  }
  return keys;
}

function parseNicknameRows(raw) {
  const rows = [];
  for (const line of String(raw || "").split(/\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const bits = trimmed.split(/\s+----\s+/);
    if (bits.length < 2) continue;
    const left = bits[0].trim();
    const nickPart = bits.slice(1).join(" ---- ");
    const nicks = nickPart.split(",").map((s) => s.trim()).filter(Boolean);
    rows.push({ left, nicks });
  }
  return rows;
}

function compoundNameMatchesNickKeys(c, keys) {
  const nk = normNickName(c.name);
  if (keys.has(nk)) return true;
  const p = String(c.name || "").match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (p) {
    if (keys.has(normNickName(p[1].trim()))) return true;
    if (keys.has(normNickName(p[2].trim()))) return true;
  }
  const kid = normNickName(String(c.id || "").replace(/-/g, " "));
  if (keys.has(kid)) return true;
  return false;
}

function applyNicknamesFromBundledText() {
  const raw = typeof COMPOUNDS_NICKNAMES_TEXT === "string" ? COMPOUNDS_NICKNAMES_TEXT : "";
  if (!raw.trim()) return;
  const rows = parseNicknameRows(raw);
  for (const { left, nicks } of rows) {
    const keys = nickKeysFromLeft(left);
    let c = null;
    for (const comp of COMPOUNDS) {
      if (compoundNameMatchesNickKeys(comp, keys)) {
        c = comp;
        break;
      }
    }
    if (!c) continue;
    const set = new Set((c.aliases || []).map((a) => String(a).trim()).filter(Boolean));
    const nn = normNickName(c.name);
    for (const nick of nicks) {
      const t = String(nick).trim();
      if (!t) continue;
      if (normNickName(t) === nn) continue;
      set.add(t);
    }
    c.aliases = [...set];
  }
}

function buildCompoundSearchBlob(c) {
  const mech = (c.mechanism || []).map((m) => m.text).join(" ");
  const fx = (c.effects || []).join(" ");
  const se = (c.sideEffects || []).join(" ");
  const what = (c.whatItIs || "").slice(0, 400);
  const bits = [
    c.name,
    ...(c.aliases || []),
    ...(c.categories || []),
    String(c.classification || ""),
    mech,
    fx,
    se,
    what,
    deriveCardFrontSummary(c),
  ];
  return bits.join(" ").toLowerCase();
}

function rebuildCompoundSearchIndex() {
  compoundSearchIndex = COMPOUNDS.map((c) => ({ c, blob: buildCompoundSearchBlob(c) }));
}

function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + cost);
    }
  }
  return matrix[b.length][a.length];
}

function wordTypoScore(qw, nameLower) {
  if (!qw || qw.length < 2) return 0;
  if (qw.length <= 2) {
    const tokens = nameLower.split(/[^a-z0-9]+/).filter(Boolean);
    if (tokens.some((t) => t === qw)) return 40;
    return 0;
  }
  if (nameLower.includes(qw)) return 42;
  const parts = nameLower.split(/[^a-z0-9]+/).filter((x) => x.length > 1);
  let best = 0;
  for (const p of parts) {
    if (p.includes(qw) || qw.includes(p)) {
      best = Math.max(best, 35);
      continue;
    }
    if (qw.length >= 4 && p.length >= 4) {
      const d = levenshtein(qw, p.slice(0, Math.max(qw.length, p.length)));
      if (d <= 1) best = Math.max(best, 28 - d * 8);
      else if (d === 2 && qw.length >= 6) best = Math.max(best, 12);
    }
  }
  const d0 = levenshtein(qw, nameLower.slice(0, Math.min(nameLower.length, qw.length + 3)));
  if (qw.length >= 5 && d0 <= 2) best = Math.max(best, 18 - d0 * 5);
  return best;
}

function scoreCompoundSearch(query, entry) {
  const q = query.trim().toLowerCase();
  if (!q) return 0;
  const { c, blob } = entry;
  const nameLower = (c.name || "").toLowerCase();
  let score = 0;
  if (c.id === q) score += 200;
  if (nameLower === q) score += 180;
  if (nameLower.startsWith(q)) score += 70;
  if (q.length >= 3 && blob.includes(q)) score += 55 + Math.min(q.length, 20);
  const qWords = q.split(/\s+/).filter((w) => w.length > 1);
  for (const w of qWords) {
    if (w.length >= 3 && blob.includes(w)) score += 22;
    if (w.length >= 2) {
      for (const a of c.aliases || []) {
        if (normNickName(a) === w) score += 48;
      }
    }
    score += wordTypoScore(w, nameLower) * 1.1;
    for (const a of c.aliases || []) {
      const al = a.toLowerCase();
      if (w.length >= 3 && al.includes(w)) score += 18;
      score += wordTypoScore(w, al) * 0.85;
    }
  }
  for (const cat of c.categories || []) {
    const cl = cat.toLowerCase().replace(/-/g, " ");
    if (cl.includes(q) || q.includes(cl)) score += 25;
  }
  return score;
}

function deriveCardFrontSummary(c) {
  if (c.cardSummary && String(c.cardSummary).trim()) return String(c.cardSummary).trim();
  const firstMech = c.mechanism && c.mechanism[0] && c.mechanism[0].text;
  const path = (c.classification || "").trim();
  if (firstMech) {
    const short = firstMech.length > 110 ? firstMech.slice(0, 107).trim() + "…" : firstMech;
    return path ? `${short} · ${path}` : short;
  }
  return path || "Open for mechanism, dosing context, and literature.";
}

function getDosingPayload(c) {
  const ov = COMPOUND_OVERRIDES[c.id];
  if (ov && ov.dosing) return ov.dosing;
  if (c.dosing) return c.dosing;
  return {
    summary:
      "No curated dosing paragraph yet—check the official label or prescribing information for approved drugs; research-use agents often lack published human dosing.",
    routes: [],
    reconstitutionDefaults: null,
  };
}

function loadCompoundNotesMap() {
  try {
    const raw = localStorage.getItem(NOTES_BY_COMPOUND_KEY);
    const o = raw ? JSON.parse(raw) : {};
    return o && typeof o === "object" ? o : {};
  } catch (_) {
    return {};
  }
}

function saveCompoundNotesMap(map) {
  try {
    localStorage.setItem(NOTES_BY_COMPOUND_KEY, JSON.stringify(map));
  } catch (_) {}
}

function getCompoundNoteText(id) {
  const m = loadCompoundNotesMap();
  return String(m[id] == null ? "" : m[id]);
}

function setCompoundNoteText(id, text) {
  const m = loadCompoundNotesMap();
  if (text.trim()) m[id] = text;
  else delete m[id];
  saveCompoundNotesMap(m);
}

function resolveDeepLinkFromLocation() {
  const h = (location.hash || "").replace(/^#/, "").trim().toLowerCase();
  if (h) {
    if (COMPOUNDS.some((c) => c.id === h)) return { type: "compound", id: h };
    if (HARDMAXXING_LIST.some((s) => s.id === h)) return { type: "surgery", id: h };
  }
  const parts = location.pathname.split("/").filter(Boolean);
  const last = (parts[parts.length - 1] || "").trim().toLowerCase();
  if (last && last !== "index.html") {
    if (COMPOUNDS.some((c) => c.id === last)) return { type: "compound", id: last };
    if (HARDMAXXING_LIST.some((s) => s.id === last)) return { type: "surgery", id: last };
  }
  return null;
}

function clearAppUrlToNormal() {
  let path = location.pathname || "/";
  const parts = path.split("/").filter(Boolean);
  if (parts.length > 0) {
    const last = parts[parts.length - 1].toLowerCase();
    const isDeepSlug =
      last !== "index.html" &&
      !last.includes(".") &&
      (COMPOUNDS.some((c) => c.id === last) || HARDMAXXING_LIST.some((s) => s.id === last));
    if (isDeepSlug) {
      parts.pop();
      path = parts.length ? "/" + parts.join("/") : "/";
    }
  }
  history.replaceState(null, "", path + (location.search || ""));
}

function setLocationForCompound(id) {
  const clean = (id || "").trim().toLowerCase();
  if (!clean || !COMPOUNDS.some((c) => c.id === clean)) return;
  const url = `${location.pathname}${location.search}#${clean}`;
  history.replaceState(null, "", url);
}

function setLocationForSurgery(id) {
  const sid = String(id || "").trim().toLowerCase();
  if (!sid || !HARDMAXXING_LIST.some((s) => s.id === sid)) return;
  history.replaceState(null, "", `${location.pathname}${location.search}#${sid}`);
}

function applyInitialDeepLink() {
  const hit = resolveDeepLinkFromLocation();
  if (!hit) return;
  queueMicrotask(() => {
    if (hit.type === "compound") openCompound(hit.id, { skipHash: true });
    else openHardmaxSection(hit.id, { skipHash: true });
  });
}

function initDeepLinking() {
  window.addEventListener("hashchange", () => {
    if (currentView === "detailView" || currentView === "surgeryDetailView") return;
    const hit = resolveDeepLinkFromLocation();
    if (!hit) return;
    if (hit.type === "compound") openCompound(hit.id, { skipHash: true });
    else openHardmaxSection(hit.id, { skipHash: true });
  });
}

function initGlobalNotesField() {
  const ta = document.getElementById("globalNotes");
  if (!ta) return;
  try {
    ta.value = localStorage.getItem(NOTES_GLOBAL_KEY) || "";
  } catch (_) {}
  let t = null;
  ta.addEventListener("input", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      try {
        localStorage.setItem(NOTES_GLOBAL_KEY, ta.value);
      } catch (_) {}
    }, 200);
  });
}

function initToolsPanel() {
  const bmiOut = document.getElementById("toolBmiOut");
  document.getElementById("toolBmiRun")?.addEventListener("click", () => {
    const kg = parseFloat(document.getElementById("toolBmiKg").value, 10);
    const cm = parseFloat(document.getElementById("toolBmiCm").value, 10);
    if (!kg || !cm || cm <= 0) {
      bmiOut.textContent = "Enter a realistic weight (kg) and height (cm).";
      return;
    }
    const m = cm / 100;
    const bmi = kg / (m * m);
    const rounded = Math.round(bmi * 10) / 10;
    bmiOut.textContent = `BMI ≈ ${rounded} (kg/m²). Standard cutoffs: underweight <18.5, normal 18.5–24.9, overweight 25–29.9, obesity ≥30 — these are population labels, not a diagnosis.`;
  });

  const cycleOut = document.getElementById("toolCycleOut");
  document.getElementById("toolCycleRun")?.addEventListener("click", () => {
    const label = document.getElementById("toolCycleLabel").value.trim() || "Phase";
    const startStr = document.getElementById("toolCycleStart").value;
    const onW = parseInt(document.getElementById("toolCycleOn").value, 10);
    const offW = parseInt(document.getElementById("toolCycleOff").value, 10);
    const phases = parseInt(document.getElementById("toolCyclePhases").value, 10);
    if (!startStr || !onW || onW < 1 || phases < 1) {
      cycleOut.textContent = "Pick a start date, “on” weeks ≥ 1, and number of phases.";
      return;
    }
    const start = new Date(startStr + "T12:00:00");
    if (Number.isNaN(start.getTime())) {
      cycleOut.textContent = "Invalid start date.";
      return;
    }
    const rows = [];
    let d = new Date(start);
    for (let i = 0; i < phases; i++) {
      const onStart = new Date(d);
      const onEnd = new Date(d);
      onEnd.setDate(onEnd.getDate() + onW * 7 - 1);
      rows.push(
        `<tr><td>${i + 1}</td><td>On</td><td>${onStart.toLocaleDateString()}</td><td>${onEnd.toLocaleDateString()}</td><td>${onW} wk</td></tr>`
      );
      d = new Date(onEnd);
      d.setDate(d.getDate() + 1);
      if (offW > 0) {
        const offStart = new Date(d);
        const offEnd = new Date(d);
        offEnd.setDate(offEnd.getDate() + offW * 7 - 1);
        rows.push(
          `<tr><td>${i + 1}</td><td>Off</td><td>${offStart.toLocaleDateString()}</td><td>${offEnd.toLocaleDateString()}</td><td>${offW} wk</td></tr>`
        );
        d = new Date(offEnd);
        d.setDate(d.getDate() + 1);
      }
    }
    cycleOut.innerHTML = `<div class="tool-table-wrap"><table class="tool-table"><caption>${escapeHtml(
      label
    )} — rough calendar</caption><thead><tr><th>#</th><th>Phase</th><th>Start</th><th>End</th><th>Length</th></tr></thead><tbody>${rows.join(
      ""
    )}</tbody></table></div><p class="tool-fineprint">Not medical scheduling. For prescribed medicines follow your clinician, not this grid.</p>`;
  });

  const reconOut = document.getElementById("toolReconOut");
  document.getElementById("toolReconRun")?.addEventListener("click", () => {
    const mg = parseFloat(document.getElementById("toolReconMg").value, 10);
    const ml = parseFloat(document.getElementById("toolReconMl").value, 10);
    const tick = parseFloat(document.getElementById("toolReconTick").value, 10);
    const target = parseFloat(document.getElementById("toolReconTargetMg").value, 10);
    if (!mg || !ml || mg <= 0 || ml <= 0) {
      reconOut.textContent = "Enter peptide mass (mg) and diluent volume (mL).";
      return;
    }
    const conc = mg / ml;
    const lines = [
      `Concentration ≈ ${(Math.round(conc * 10000) / 10000).toFixed(4)} mg/mL`,
      `≈ ${(Math.round((conc * 1000) / ml) * ml) / 1000} mg total still checks out (${mg} mg / ${ml} mL)`,
    ];
    if (tick > 0) {
      const mgPerTick = conc * tick;
      lines.push(`At ${tick} mL per syringe tick: ≈ ${(Math.round(mgPerTick * 100000) / 100000).toFixed(5)} mg per tick`);
    }
    if (target > 0) {
      const vol = target / conc;
      lines.push(`Volume for ${target} mg dose ≈ ${(Math.round(vol * 1000) / 1000).toFixed(3)} mL`);
    }
    lines.push("Sterility and clinical suitability are not assessed here.");
    reconOut.textContent = lines.join("\n");
  });
}

function wireCompoundDetailPage(c) {
  const ta = document.getElementById("detailCompoundNotes");
  if (ta) {
    ta.value = getCompoundNoteText(c.id);
    let timer = null;
    ta.oninput = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setCompoundNoteText(c.id, ta.value), 250);
    };
  }
  document.getElementById("detailCopyLinkBtn")?.addEventListener("click", async () => {
    const url = `${location.origin}${location.pathname}${location.search}#${c.id}`;
    try {
      await navigator.clipboard.writeText(url);
      const el = document.getElementById("detailCopyLinkBtn");
      if (el) el.textContent = "Copied";
      setTimeout(() => {
        if (el) el.textContent = "Copy link";
      }, 1600);
    } catch (_) {
      window.prompt("Copy link:", url);
    }
  });
  document.getElementById("detailRequestEditBtn")?.addEventListener("click", () => {
    openEditRequestDialog({ kind: "compound", id: c.id, title: c.name });
  });
  document.getElementById("detailReconstFillBtn")?.addEventListener("click", () => {
    setNavSection("tools");
    showView("toolsView");
    const d = getDosingPayload(c).reconstitutionDefaults || c.reconstitutionDefaults;
    if (d && d.vialMg != null) document.getElementById("toolReconMg").value = String(d.vialMg);
    if (d && d.diluentMl != null) document.getElementById("toolReconMl").value = String(d.diluentMl);
    if (d && d.tickMl != null) document.getElementById("toolReconTick").value = String(d.tickMl);
  });
}

function wireSurgeryDetailPage(s) {
  document.getElementById("surgeryRequestEditBtn")?.addEventListener("click", () => {
    openEditRequestDialog({ kind: "surgery", id: s.id, title: s.title });
  });
  document.getElementById("surgeryCopyLinkBtn")?.addEventListener("click", async () => {
    const url = `${location.origin}${location.pathname}${location.search}#${s.id}`;
    try {
      await navigator.clipboard.writeText(url);
      const el = document.getElementById("surgeryCopyLinkBtn");
      if (el) el.textContent = "Copied";
      setTimeout(() => {
        if (el) el.textContent = "Copy link";
      }, 1600);
    } catch (_) {
      window.prompt("Copy link:", url);
    }
  });
}

// ──────────────────────────────────────
// INIT
// ──────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  applyNicknamesFromBundledText();
  rebuildCompoundSearchIndex();
  initTheme();
  updateBookmarkCount();
  renderCategoryCounts();
  renderCompoundGrid(COMPOUNDS);
  initSearch();
  initCategoryFilters();
  initNav();
  initSiteNav();
  initMobileNavSheet();
  initSurgeries();
  initContactForm();
  initGlobalNotesField();
  initDeepLinking();
  initToolsPanel();
  initEditRequestDialog();
  applyInitialDeepLink();
});

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = saved || (prefersLight ? "light" : "dark");
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const label = theme === "dark" ? "Light mode" : "Dark mode";
  btn.setAttribute("aria-label", label);
  btn.textContent = theme === "dark" ? "☀" : "☾";
  btn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
    btn.setAttribute("aria-label", next === "dark" ? "Light mode" : "Dark mode");
    btn.textContent = next === "dark" ? "☀" : "☾";
  });
}

// ──────────────────────────────────────
// VIEW MANAGEMENT
// ──────────────────────────────────────
function syncNavSheetAriaHidden() {
  const sheet = document.getElementById("navSheet");
  if (!sheet) return;
  const narrow = window.matchMedia("(max-width: 900px)").matches;
  if (!narrow) {
    sheet.removeAttribute("aria-hidden");
    return;
  }
  sheet.setAttribute("aria-hidden", sheet.classList.contains("is-open") ? "false" : "true");
}

function closeMobileNavSheet() {
  const sheet = document.getElementById("navSheet");
  const burger = document.getElementById("navBurger");
  if (!sheet || !burger) return;
  sheet.classList.remove("is-open");
  document.body.classList.remove("nav-sheet-open");
  burger.setAttribute("aria-expanded", "false");
  syncNavSheetAriaHidden();
}

function showView(id) {
  closeMobileNavSheet();
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  currentView = id;
  window.scrollTo(0, 0);
}

function setNavSection(section) {
  document.querySelectorAll(".nav-link").forEach((b) => {
    b.classList.toggle("active", b.dataset.nav === section);
  });
}

function initMobileNavSheet() {
  const sheet = document.getElementById("navSheet");
  const burger = document.getElementById("navBurger");
  const scrim = document.getElementById("navSheetScrim");
  const closeBtn = document.getElementById("navSheetClose");
  if (!sheet || !burger || !scrim || !closeBtn) return;

  const mq = window.matchMedia("(max-width: 900px)");

  function setOpen(open) {
    if (!mq.matches) return;
    sheet.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-sheet-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    syncNavSheetAriaHidden();
  }

  burger.addEventListener("click", () => {
    if (!mq.matches) return;
    setOpen(!sheet.classList.contains("is-open"));
  });

  scrim.addEventListener("click", () => setOpen(false));
  closeBtn.addEventListener("click", () => setOpen(false));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sheet.classList.contains("is-open")) {
      setOpen(false);
    }
  });

  mq.addEventListener("change", () => {
    if (!mq.matches) closeMobileNavSheet();
    syncNavSheetAriaHidden();
  });

  syncNavSheetAriaHidden();
}

function initSiteNav() {
  const goCompounds = () => {
    lastOpenedCompoundId = null;
    lastOpenedSurgeryId = null;
    clearAppUrlToNormal();
    setNavSection("compounds");
    showView("homeView");
  };
  document.getElementById("navLogo").addEventListener("click", goCompounds);
  document.getElementById("navCompounds").addEventListener("click", goCompounds);

  document.getElementById("navSurgeries").addEventListener("click", () => {
    lastOpenedCompoundId = null;
    lastOpenedSurgeryId = null;
    clearAppUrlToNormal();
    setNavSection("surgeries");
    showView("surgeriesView");
    renderSurgeryGrid();
  });

  document.getElementById("navSoftmax").addEventListener("click", () => {
    lastOpenedCompoundId = null;
    lastOpenedSurgeryId = null;
    clearAppUrlToNormal();
    setNavSection("softmax");
    showView("softmaxView");
  });

  document.getElementById("navTools")?.addEventListener("click", () => {
    lastOpenedCompoundId = null;
    lastOpenedSurgeryId = null;
    clearAppUrlToNormal();
    setNavSection("tools");
    showView("toolsView");
  });

  document.getElementById("navAbout").addEventListener("click", () => {
    lastOpenedCompoundId = null;
    lastOpenedSurgeryId = null;
    clearAppUrlToNormal();
    setNavSection("about");
    showView("aboutView");
  });

  document.getElementById("navContact").addEventListener("click", () => {
    lastOpenedCompoundId = null;
    lastOpenedSurgeryId = null;
    clearAppUrlToNormal();
    setNavSection("contact");
    showView("contactView");
  });
}

// ──────────────────────────────────────
// NAV
// ──────────────────────────────────────
function initNav() {
  document.getElementById("navBookmarks").addEventListener("click", () => {
    lastOpenedCompoundId = null;
    lastOpenedSurgeryId = null;
    clearAppUrlToNormal();
    renderBookmarksView();
    setNavSection("compounds");
    showView("bookmarksView");
  });
  document.getElementById("backBtn").addEventListener("click", () => {
    lastOpenedCompoundId = null;
    lastOpenedSurgeryId = null;
    clearAppUrlToNormal();
    setNavSection("compounds");
    showView("homeView");
  });
  document.getElementById("backBtnBookmarks").addEventListener("click", () => {
    lastOpenedCompoundId = null;
    lastOpenedSurgeryId = null;
    clearAppUrlToNormal();
    setNavSection("compounds");
    showView("homeView");
  });
  document.getElementById("backBtnSurgery").addEventListener("click", () => {
    lastOpenedSurgeryId = null;
    clearAppUrlToNormal();
    setNavSection("surgeries");
    showView("surgeriesView");
  });
}

// ──────────────────────────────────────
// SEARCH
// ──────────────────────────────────────
function initSearch() {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  if (!input || !results) return;

  input.addEventListener("input", () => {
    const q = input.value.trim();
    if (!q) {
      results.classList.remove("open");
      results.innerHTML = "";
      return;
    }

    const ranked = compoundSearchIndex
      .map((entry) => ({ entry, score: scoreCompoundSearch(q, entry) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);

    results.innerHTML = ranked.length
      ? ranked
          .map(
            ({ entry }) => `
          <button type="button" class="search-result-item" data-open-compound="${escapeAttr(entry.c.id)}">
            <span class="sri-name">${escapeHtml(entry.c.name)}</span>
            <span class="sri-cat">${escapeHtml(catLabel(entry.c.categories[0] || "—"))}</span>
          </button>
        `
          )
          .join("")
      : '<div class="empty-panel">No compounds found</div>';

    results.classList.add("open");
  });

  results.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open-compound]");
    if (!btn) return;
    const id = btn.getAttribute("data-open-compound");
    if (id) openCompound(id);
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) {
      results.classList.remove("open");
    }
  });
}

// ──────────────────────────────────────
// CATEGORY FILTERS
// ──────────────────────────────────────
function initCategoryFilters() {
  document.querySelectorAll(".cat-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;
      if (activeCategory === cat) {
        clearFilter();
      } else {
        activeCategory = cat;
        document.querySelectorAll(".cat-card").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filtered = COMPOUNDS.filter((c) => c.categories.includes(cat));
        renderCompoundGrid(filtered);
        document.getElementById("listLabel").textContent = `${catLabel(cat)} (${filtered.length})`;
        document.getElementById("clearFilter").style.display = "flex";
      }
    });
  });

  document.getElementById("clearFilter").addEventListener("click", clearFilter);
}

function clearFilter() {
  activeCategory = null;
  document.querySelectorAll(".cat-card").forEach((b) => b.classList.remove("active"));
  renderCompoundGrid(COMPOUNDS);
  document.getElementById("listLabel").textContent = "All compounds";
  document.getElementById("clearFilter").style.display = "none";
}

function catLabel(cat) {
  const labels = {
    "fat-loss": "Fat loss",
    cognition: "Cognition",
    skin: "Skin health",
    recovery: "Recovery",
    longevity: "Longevity",
    performance: "Performance",
    "inhibition-lowering": "Inhibition-lowering",
  };
  return labels[cat] || cat;
}

function renderCategoryCounts() {
  ["fat-loss", "cognition", "skin", "recovery", "longevity", "performance", "inhibition-lowering"].forEach((cat) => {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = COMPOUNDS.filter((c) => c.categories.includes(cat)).length + " compounds";
  });
}

// ──────────────────────────────────────
// COMPOUND GRID
// ──────────────────────────────────────
function renderCompoundGrid(compounds) {
  const grid = document.getElementById("compoundGrid");
  grid.innerHTML = compounds.length
    ? compounds.map((c, i) => compoundCardHTML(c, i)).join("")
    : '<div class="empty-panel">No compounds match this filter.</div>';

  grid.querySelectorAll(".compound-card").forEach((card) => {
    card.querySelector(".card-body-click")?.addEventListener("click", () => {
      openCompound(card.dataset.id);
    });
    const bBtn = card.querySelector(".bookmark-btn");
    bBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleBookmark(card.dataset.id, bBtn);
    });
  });
}

function compoundCardHTML(c, i) {
  const isBookmarked = bookmarks.includes(c.id);

  return `
    <div class="compound-card" data-id="${c.id}" style="animation-delay:${i * 0.04}s">
      <div class="card-header">
        <div class="card-body-click" style="flex:1;cursor:pointer">
          <div class="card-name">${c.name}</div>
        </div>
        <button class="bookmark-btn ${isBookmarked ? "saved" : ""}" title="${isBookmarked ? "Remove bookmark" : "Save compound"}">
          ${isBookmarked ? "⊟" : "⊡"}
        </button>
      </div>
      <div class="card-tags" style="cursor:pointer" onclick="openCompound('${c.id}')">
        ${c.categories.map((cat) => `<span class="tag tag-cat">${catLabel(cat)}</span>`).join("")}
        ${c.aliases
          .slice(0, 1)
          .map((a) => `<span class="tag tag-alias">${a}</span>`)
          .join("")}
      </div>
      <div class="card-mechanism card-summary" onclick="openCompound('${c.id}')" style="cursor:pointer">
        ${escapeHtml(deriveCardFrontSummary(c))}
      </div>
      <div class="card-footer-hint" onclick="openCompound('${c.id}')" style="cursor:pointer">
        Effectiveness · safety · community notes →
      </div>
    </div>
  `;
}

// ──────────────────────────────────────
// BOOKMARKS
// ──────────────────────────────────────
function toggleBookmark(id, btn) {
  if (bookmarks.includes(id)) {
    bookmarks = bookmarks.filter((b) => b !== id);
    btn.textContent = "⊡";
    btn.classList.remove("saved");
  } else {
    bookmarks.push(id);
    btn.textContent = "⊟";
    btn.classList.add("saved");
  }
  saveBookmarks();
  updateBookmarkCount();
}

function updateBookmarkCount() {
  document.getElementById("bookmarkCount").textContent = bookmarks.length;
}

function renderBookmarksView() {
  const grid = document.getElementById("bookmarksGrid");
  const empty = document.getElementById("emptyBookmarks");
  const saved = COMPOUNDS.filter((c) => bookmarks.includes(c.id));

  if (saved.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
    grid.innerHTML = saved.map((c, i) => compoundCardHTML(c, i)).join("");
    grid.querySelectorAll(".compound-card").forEach((card) => {
      card.querySelector(".card-body-click")?.addEventListener("click", () => openCompound(card.dataset.id));
      const bBtn = card.querySelector(".bookmark-btn");
      bBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleBookmark(card.dataset.id, bBtn);
        renderBookmarksView();
      });
    });
  }
}

// ──────────────────────────────────────
// COMPOUND DETAIL
// ──────────────────────────────────────
function openCompound(id, opts) {
  const c = COMPOUNDS.find((x) => x.id === id);
  if (!c) return;

  document.getElementById("searchResults")?.classList.remove("open");
  document.getElementById("searchInput").value = "";

  const content = document.getElementById("detailContent");
  content.innerHTML = buildDetailHTML(c);

  setNavSection("compounds");
  showView("detailView");
  lastOpenedCompoundId = id;
  lastOpenedSurgeryId = null;
  if (!opts || !opts.skipHash) {
    setLocationForCompound(id);
  }
  wireCompoundDetailPage(c);
}

function filteredHardmaxSections() {
  const q = surgerySearchQuery.trim().toLowerCase();
  return HARDMAXXING_LIST.filter((s) => {
    if (surgeryPartFilter != null && s.partNum !== surgeryPartFilter) return false;
    if (!q) return true;
    const hay = `${s.title} ${s.part} ${s.sectionNum} ${s.content}`.toLowerCase();
    return hay.includes(q);
  });
}

function initSurgeries() {
  const wrap = document.getElementById("surgeryRegionFilters");
  if (!wrap || !HARDMAXXING_LIST.length) {
    if (wrap) {
      wrap.innerHTML = '<p class="empty-panel">Surgical atlas data missing. Ensure hardmaxxing-data.js is present.</p>';
    }
    return;
  }

  const partNums = [...new Set(HARDMAXXING_LIST.map((s) => s.partNum))].sort((a, b) => a - b);
  const partTitles = new Map();
  HARDMAXXING_LIST.forEach((s) => {
    if (!partTitles.has(s.partNum)) partTitles.set(s.partNum, s.part);
  });

  const partButtons = `
    <div class="surgery-filter-row">
      <span class="surgery-filter-label">Part</span>
      <div class="surgery-chips">
        <button type="button" class="surgery-chip ${surgeryPartFilter == null ? "active" : ""}" data-part="">All</button>
        ${partNums
          .map((n) => {
            const full = partTitles.get(n) || `Part ${n}`;
            const short = full.replace(/^Part \d+:\s*/, "").slice(0, 36);
            return `<button type="button" class="surgery-chip ${surgeryPartFilter === n ? "active" : ""}" data-part="${n}">${escapeHtml(
              `${n}. ${short}${full.length > short.length + 6 ? "…" : ""}`
            )}</button>`;
          })
          .join("")}
      </div>
    </div>
  `;
  wrap.innerHTML = partButtons;

  wrap.querySelectorAll("[data-part]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const v = btn.dataset.part;
      surgeryPartFilter = v === "" ? null : parseInt(v, 10);
      wrap.querySelectorAll("[data-part]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("surgeryClearType").style.display = surgeryPartFilter != null ? "flex" : "none";
      renderSurgeryGrid();
    });
  });

  const clear = document.getElementById("surgeryClearType");
  clear.addEventListener("click", () => {
    surgeryPartFilter = null;
    wrap.querySelectorAll(".surgery-chip").forEach((b) => b.classList.remove("active"));
    wrap.querySelector('[data-part=""]')?.classList.add("active");
    clear.style.display = "none";
    renderSurgeryGrid();
  });

  const sInput = document.getElementById("surgerySearchInput");
  sInput.addEventListener("input", () => {
    surgerySearchQuery = sInput.value;
    renderSurgeryGrid();
  });
}

function renderSurgeryGrid() {
  const grid = document.getElementById("surgeryGrid");
  const label = document.getElementById("surgeryListLabel");
  if (!grid) return;
  const list = filteredHardmaxSections();
  if (label) {
    const bits = [];
    if (surgeryPartFilter != null) bits.push(`Part ${surgeryPartFilter}`);
    if (surgerySearchQuery.trim()) bits.push(`“${surgerySearchQuery.trim()}”`);
    label.textContent = bits.length ? `Sections (${list.length}) · ${bits.join(" · ")}` : `All sections (${list.length})`;
  }
  grid.innerHTML = list.length
    ? list.map((s, i) => hardmaxCardHTML(s, i)).join("")
    : '<div class="empty-panel">No sections match these filters.</div>';

  grid.querySelectorAll(".surgery-card").forEach((card) => {
    card.addEventListener("click", () => openHardmaxSection(card.dataset.id));
  });
}

function hardmaxCardHTML(s, i) {
  const raw = s.content.replace(/\s+/g, " ").replace(/\[\d+\]/g, "").trim();
  const blurb = raw.slice(0, 168) + (raw.length > 168 ? "…" : "");
  const thumb = hardmaxThumbHTML(s.partNum);
  const partShort = s.part.replace(/^Part \d+:\s*/, "");
  return `
    <div class="compound-card surgery-card hardmax-card" data-id="${escapeAttr(s.id)}" style="animation-delay:${i * 0.02}s">
      ${thumb}
      <div class="card-header">
        <div style="flex:1">
          <div class="card-name">${escapeHtml(s.title)}</div>
          <div class="surgery-card-meta">${escapeHtml(s.sectionNum)} · ${escapeHtml(partShort)}</div>
        </div>
        <span class="tag tag-cat">${escapeHtml(s.sectionNum)}</span>
      </div>
      <div class="card-mechanism">${escapeHtml(blurb)}</div>
      <div class="card-footer-hint">Details &amp; literature →</div>
    </div>
  `;
}

function openHardmaxSection(id, opts) {
  const s = HARDMAXXING_LIST.find((x) => x.id === id);
  if (!s) return;
  const el = document.getElementById("surgeryDetailContent");
  el.innerHTML = buildHardmaxDetailHTML(s);
  setNavSection("surgeries");
  showView("surgeryDetailView");
  lastOpenedSurgeryId = id;
  lastOpenedCompoundId = null;
  if (!opts || !opts.skipHash) {
    setLocationForSurgery(id);
  }
  wireSurgeryDetailPage(s);
}

function buildHardmaxDetailHTML(s) {
  const vm = buildHardmaxViewModel(s);
  const partShort = s.part.replace(/^Part \d+:\s*/, "");

  return `
    <div class="detail-hero">
      <div class="detail-left">
        <div class="detail-name">${escapeHtml(s.title)}</div>
        <div class="detail-aliases"><span>${escapeHtml(s.sectionNum)}</span> · ${escapeHtml(s.part)}</div>
        <div class="detail-header-tags">
          <span class="tag tag-cat">${escapeHtml(partShort)}</span>
        </div>
        <div class="detail-hero-actions detail-action-row">
          <button type="button" class="tool-run-btn" id="surgeryCopyLinkBtn">Copy link</button>
          <button type="button" class="tool-run-btn" id="surgeryRequestEditBtn">Request edit</button>
        </div>
      </div>
      ${hardmaxThumbHTML(s.partNum).replace("hardmax-thumb", "hardmax-thumb hardmax-thumb--hero")}
      <div class="summary-grid" role="region" aria-label="At a glance">
        <div class="summary-card summary-effectiveness">
          <h3 class="summary-card-title">At a glance</h3>
          <div class="summary-card-body">${escapeHtml(vm.effectiveness)}</div>
        </div>
        <div class="summary-card summary-safety">
          <h3 class="summary-card-title">Safety</h3>
          <div class="summary-card-body">${escapeHtml(vm.safety)}</div>
        </div>
        <div class="summary-card summary-rec">
          <h3 class="summary-card-title">Who this is for</h3>
          <ul class="rec-list">
            ${vm.recommendedFor.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>

    <div class="detail-sections">
      <div class="detail-section">
        <div class="ds-label">Atlas</div>
        <div class="ds-title">In depth</div>
        <p class="ds-lead">Numbers in brackets (e.g. [1]) refer to the atlas bibliography.</p>
        ${formatHardmaxContentToHTML(s.content)}
      </div>

      <div class="detail-section">
        <div class="ds-label">Tradeoffs</div>
        <div class="ds-title">Pros &amp; cons</div>
        <div class="pros-cons-grid">
          <div class="pros-col">
            <div class="pros-cons-heading">Pros</div>
            <ul class="pros-list">
              ${vm.pros.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}
            </ul>
          </div>
          <div class="cons-col">
            <div class="pros-cons-heading">Cons</div>
            <ul class="cons-list">
              ${vm.cons.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <div class="ds-label">Literature</div>
        <div class="ds-title">Indexed search</div>
        <div class="study-list-block">
          ${vm.studies.map(studyCardHtml).join("")}
        </div>
      </div>

      <div class="detail-section">
        <div class="ds-label">Forums</div>
        <div class="ds-title">Discussion</div>
        <div class="community-box">
          <p>${escapeHtml(vm.communityNotes)}</p>
          <p class="community-disclaimer">See the Forums section for links—treat threads as informal only.</p>
        </div>
      </div>

      <div class="detail-section">
        <div class="ds-label">Recovery</div>
        <div class="ds-title">Expectations</div>
        <div class="cycling-box">
          <p>${escapeHtml(vm.recovery)}</p>
        </div>
      </div>
    </div>
  `;
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("contactStatus");
  const submitBtn = form?.querySelector('button[type="submit"]');
  if (!form) return;

  function setStatus(type, text) {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.className = "contact-status" + (type ? ` contact-status--${type}` : "");
    statusEl.hidden = !text;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus("", "");

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus(
        "error",
        "Contact isn’t configured yet. Add your Web3Forms access key in app.js (see comment at top of file)."
      );
      return;
    }

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim() || "The Slums contact form";
    const message = document.getElementById("contactMessage").value.trim();

    submitBtn.disabled = true;
    setStatus("pending", "Sending…");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[The Slums] ${subject}`,
          name,
          email,
          message: message + "\n\n(Sent via The Slums contact form)",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (data.success) {
        setStatus("ok", "Sent. We’ll get back to you if a reply is needed.");
        form.reset();
      } else {
        setStatus("error", data.message || "Something went wrong. Try again later.");
      }
    } catch (_) {
      setStatus("error", "Network error. Check your connection and try again.");
    } finally {
      submitBtn.disabled = false;
    }
  });
}

function openEditRequestDialog(ctx) {
  const dlg = document.getElementById("editRequestDialog");
  const kindEl = document.getElementById("erfKind");
  const idEl = document.getElementById("erfId");
  const titleEl = document.getElementById("erfTitle");
  const urlEl = document.getElementById("erfUrl");
  const ctxEl = document.getElementById("editRequestContext");
  const statusEl = document.getElementById("erfStatus");
  const form = document.getElementById("editRequestForm");
  if (!dlg || !kindEl || !idEl || !titleEl || !urlEl || !ctxEl || !form) return;

  form.reset();

  kindEl.value = ctx.kind;
  idEl.value = ctx.id;
  titleEl.value = ctx.title;
  urlEl.value = location.href;

  const kindLabel = ctx.kind === "surgery" ? "Surgery atlas" : "Compound";
  ctxEl.textContent = `${kindLabel}: ${ctx.title} · id ${ctx.id}`;

  if (statusEl) {
    statusEl.textContent = "";
    statusEl.hidden = true;
    statusEl.className = "contact-status";
  }

  if (typeof dlg.showModal === "function") dlg.showModal();
  else dlg.setAttribute("open", "");
}

function initEditRequestDialog() {
  const dlg = document.getElementById("editRequestDialog");
  const closeBtn = document.getElementById("editRequestClose");
  const form = document.getElementById("editRequestForm");
  const statusEl = document.getElementById("erfStatus");
  const submitBtn = document.getElementById("erfSubmit");
  if (!dlg || !form) return;

  function setStatus(type, text) {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.className = "contact-status" + (type ? ` contact-status--${type}` : "");
    statusEl.hidden = !text;
  }

  closeBtn?.addEventListener("click", () => {
    if (typeof dlg.close === "function") dlg.close();
    else dlg.removeAttribute("open");
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus("", "");

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error", "Web3Forms isn’t configured (missing access key in app.js).");
      return;
    }

    const kind = document.getElementById("erfKind").value;
    const pageId = document.getElementById("erfId").value;
    const pageTitle = document.getElementById("erfTitle").value;
    const pageUrl = document.getElementById("erfUrl").value;
    const name = document.getElementById("erfName").value.trim();
    const email = document.getElementById("erfEmail").value.trim();
    const message = document.getElementById("erfMessage").value.trim();

    const subject = `[The Slums] Page edit (${kind}) ${pageTitle} (${pageId})`;
    const body =
      `Page type: ${kind}\nTitle: ${pageTitle}\nID: ${pageId}\nURL: ${pageUrl}\n\n--- Suggested change ---\n${message}\n\n(Sent via Request edit on theslums site)`;

    if (submitBtn) submitBtn.disabled = true;
    setStatus("pending", "Sending…");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject,
          name,
          email,
          message: body,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (data.success) {
        setStatus("ok", "Thanks—we received your suggestion.");
        form.reset();
        document.getElementById("erfKind").value = kind;
        document.getElementById("erfId").value = pageId;
        document.getElementById("erfTitle").value = pageTitle;
        document.getElementById("erfUrl").value = pageUrl;
      } else {
        setStatus("error", data.message || "Something went wrong. Try again later.");
      }
    } catch (_) {
      setStatus("error", "Network error. Check your connection and try again.");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

function studyCardHtml(s) {
  const href = studyExternalUrl(s);
  const cite = s.citation
    ? `<div class="study-citation"><a href="${escapeAttr(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
        s.citation
      )}</a></div>`
    : href
      ? `<div class="study-citation"><a href="${escapeAttr(href)}" target="_blank" rel="noopener noreferrer">Search literature</a></div>`
      : "";
  return `
    <div class="study-card">
      <div class="study-card-header">
        <div class="study-title">${escapeHtml(s.title || "")}</div>
        <span class="outcome-badge out-${s.outcome || "neutral"}">${escapeHtml(s.outcome || "note")}</span>
      </div>
      <div class="study-summary">${escapeHtml(s.summary || "")}</div>
      ${cite}
    </div>
  `;
}

function buildDetailHTML(c) {
  const vm = buildViewModel(c);
  const dose = getDosingPayload(c);

  return `
    <div class="detail-hero">
      <div class="detail-left">
        <div class="detail-name">${escapeHtml(c.name)}</div>
        <div class="detail-aliases">
          Also known as: <span>${c.aliases.map((a) => escapeHtml(a)).join(", ")}</span>
        </div>
        <div class="detail-header-tags">
          ${c.categories.map((cat) => `<span class="tag tag-cat">${escapeHtml(catLabel(cat))}</span>`).join("")}
          <span class="tag tag-class">${escapeHtml(c.classification || "")}</span>
        </div>
        <div class="detail-hero-actions detail-action-row">
          <button type="button" class="tool-run-btn" id="detailCopyLinkBtn">Copy link</button>
          <button type="button" class="tool-run-btn" id="detailRequestEditBtn">Request edit</button>
        </div>
      </div>

      <div class="summary-grid" role="region" aria-label="At a glance">
        <div class="summary-card summary-effectiveness">
          <h3 class="summary-card-title">Effectiveness</h3>
          <div class="summary-card-body">${escapeHtml(vm.effectiveness)}</div>
        </div>
        <div class="summary-card summary-safety">
          <h3 class="summary-card-title">Safety</h3>
          <div class="summary-card-body">${escapeHtml(vm.safety)}</div>
        </div>
        <div class="summary-card summary-rec">
          <h3 class="summary-card-title">Recommended for</h3>
          <ul class="rec-list">
            ${vm.recommendedFor.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>

    <div class="detail-sections">

      <div class="detail-section dosing-section">
        <div class="ds-label">00 / Dosing</div>
        <div class="ds-title">Typical use (reference)</div>
        <div class="dosing-summary">${escapeHtml(dose.summary)}</div>
        ${
          dose.routes && dose.routes.length
            ? `<p class="dosing-routes"><span class="dosing-routes-k">Routes:</span> ${dose.routes.map((r) => escapeHtml(r)).join(" · ")}</p>`
            : ""
        }
        <button type="button" class="tool-run-btn dosing-calc-btn" id="detailReconstFillBtn">Reconstitution calculator</button>
      </div>

      <div class="detail-section">
        <div class="ds-label">01 / Tradeoffs</div>
        <div class="ds-title">Pros & cons</div>
        <div class="pros-cons-grid">
          <div class="pros-col">
            <div class="pros-cons-heading">Pros</div>
            <ul class="pros-list">
              ${vm.pros.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}
            </ul>
          </div>
          <div class="cons-col">
            <div class="pros-cons-heading">Cons</div>
            <ul class="cons-list">
              ${vm.cons.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <div class="ds-label">02 / Studies</div>
        <div class="ds-title">Studies & reports</div>
        <div class="study-list-block">
          ${vm.studies.map(studyCardHtml).join("")}
        </div>
      </div>

      <div class="detail-section">
        <div class="ds-label">03 / Community</div>
        <div class="ds-title">Discussion & anecdotes</div>
        <div class="community-box">
          <p>${escapeHtml(vm.communityNotes)}</p>
          <p class="community-disclaimer">Anecdotes are not evidence of safety or efficacy.</p>
        </div>
      </div>

      <div class="detail-section">
        <div class="ds-label">04 / Cycling</div>
        <div class="ds-title">Duration & patterns</div>
        <div class="cycling-box">
          <p>${escapeHtml(vm.cycling)}</p>
          ${forumCycleLinksHtml(c)}
        </div>
      </div>

      <div class="detail-section">
        <div class="ds-label">05 / Overview</div>
        <div class="ds-title">What it is</div>
        <div class="ds-body">${escapeHtml(c.whatItIs || "")}</div>
      </div>

      <div class="detail-section">
        <div class="ds-label">06 / Biology</div>
        <div class="ds-title">Mechanism</div>
        <ul class="mechanism-list">
          ${c.mechanism
            .map(
              (m) => `
            <li>
              <span>${escapeHtml(m.text)}</span>
              <span class="confidence-tag ${m.confidence === "established" ? "conf-established" : "conf-hypothesized"}">
                ${escapeHtml(m.confidence)}
              </span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>

      <div class="detail-section">
        <div class="ds-label">07 / Regulatory</div>
        <div class="ds-title">Legal status</div>
        <div class="legal-grid">
          <div class="legal-item">
            <div class="legal-item-label">FDA status</div>
            <div class="legal-item-value">${escapeHtml(c.legal.fda)}</div>
          </div>
          <div class="legal-item">
            <div class="legal-item-label">Prescription</div>
            <div class="legal-item-value">${escapeHtml(c.legal.prescription)}</div>
          </div>
          <div class="legal-item">
            <div class="legal-item-label">Classification</div>
            <div class="legal-item-value">${escapeHtml(c.legal.classification)}</div>
          </div>
          <div class="legal-item">
            <div class="legal-item-label">Sports (WADA)</div>
            <div class="legal-item-value">${escapeHtml(c.legal.sports)}</div>
          </div>
        </div>
      </div>

      ${
        c.misconceptions.length
          ? `
      <div class="detail-section">
        <div class="ds-label">08 / Reality check</div>
        <div class="ds-title">Common misconceptions</div>
        <div class="misconception-list">
          ${c.misconceptions
            .map(
              (m) => `
            <div class="misconception-item">
              <div class="myth-header">
                <span class="myth-icon">MYTH</span>
                <span class="myth-text">${escapeHtml(m.myth)}</span>
              </div>
              <div class="correction-body">
                <span class="correction-icon">FACT</span>
                <span class="correction-text">${escapeHtml(m.correction)}</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      `
          : ""
      }

      <div class="detail-section">
        <div class="ds-label">09 / Your notes</div>
        <div class="ds-title">Private notes</div>
        <p class="ds-lead">Saved only in this browser.</p>
        <textarea id="detailCompoundNotes" class="notes-textarea" rows="5" maxlength="20000" placeholder="Questions for a clinician, papers to read, tolerance notes…"></textarea>
      </div>

      <div class="detail-section">
        <div class="ds-label">10 / References</div>
        <div class="ds-title">References</div>
        <div class="references-list">
          ${c.references
            .map(
              (r, i) => `
            <div class="reference-item">
              <span class="ref-num">[${i + 1}]</span>
              <span class="ref-text">
                ${
                  r.url
                    ? `<a href="${escapeAttr(normalizeLiteratureUrl(r.url))}" target="_blank" rel="noopener noreferrer">${escapeHtml(
                        r.text
                      )}</a>`
                    : escapeHtml(r.text)
                }
              </span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

    </div>
  `;
}
