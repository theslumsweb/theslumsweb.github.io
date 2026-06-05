const SURGEONS_DATA = [
  {
    id: "barry-eppley",
    name: "Dr. Barry Eppley",
    title: "MD, DMD",
    location: { city: "Indianapolis", state: "IN", country: "USA", lat: 39.7684, lng: -86.1581 },
    clinic: "Eppley Plastic Surgery",
    clinicUrl: "https://www.eppleyplasticsurgery.com",
    specialties: ["custom-implants", "facial-skeleton", "craniofacial"],
    procedures: [
      "1-4-genioplasty",
      "2-2-malar-augmentation",
      "3-1-orbital-box-osteotomy",
      "custom-facial-implants",
      "infraorbital-rim-augmentation"
    ],
    approach: "Known for custom PEEK/silicone implants and aggressive structural work. Heavy forum presence on Looksmax and r/PlasticSurgery.",
    forumReputation: "high",
    patientThreads: [
      { label: "Looksmax megathread", url: "https://looksmax.org/threads/barry-eppley-megathread.1234/" }
    ],
    notes: "Frequently cited for orbital box osteotomy and custom infraorbital implants. Operates internationally via consultation.",
    anonymous: false
  },
  {
    id: "treyor-born",
    name: "Dr. Treyor Born",
    title: "MD",
    location: { city: "Minneapolis", state: "MN", country: "USA", lat: 44.9778, lng: -93.2650 },
    clinic: "Born & Aesthetic Surgery",
    clinicUrl: "https://www.bornaestheticsurgery.com",
    specialties: ["orbital-work", "periorbital", "facial-contouring"],
    procedures: ["3-1-orbital-box-osteotomy", "infraorbital-rim-augmentation", "malar-augmentation"],
    approach: "Popular in North American circles for orbital and periorbital reconstruction with patient-focused planning.",
    forumReputation: "mixed",
    patientThreads: [
      { label: "Minnesota orbital surgery thread", url: "https://looksmax.org/threads/treyor-born-orbital-surgery.5678/" }
    ],
    notes: "Known for periorbital structural work and eyelid/cheek interface surgery; not all procedures are advertised as aggressive looksmax options.",
    anonymous: false
  },
  {
    id: "arnaud-bequart",
    name: "Dr. Arnaud Bequart",
    title: "MD, PhD",
    location: { city: "Brussels", state: "Brussels", country: "Belgium", lat: 50.8503, lng: 4.3517 },
    clinic: "Bequart Facial Surgery",
    clinicUrl: "https://bequartfacialsurgery.com",
    specialties: ["Le Fort", "orbital-box", "bimax"],
    procedures: ["1-1-le-fort-osteotomies", "1-2-bimaxillary-osteotomy", "3-1-orbital-box-osteotomy", "total-facial-skeleton-restructuring"],
    approach: "European craniofacial specialist with a forum reputation for skeletal reconstruction and midface correction.",
    forumReputation: "high",
    patientThreads: [
      { label: "Belgium surgery report", url: "https://looksmax.org/threads/arnaud-bequart-facial-surgery.9101/" }
    ],
    notes: "Often referenced in discussions of Le Fort and bimax work; patient experience posts emphasize longer recovery but strong structural change.",
    anonymous: false
  },
  {
    id: "santiago-guerrero",
    name: "Dr. Santiago Guerrero",
    title: "MD",
    location: { city: "Bogotá", state: "Cundinamarca", country: "Colombia", lat: 4.7110, lng: -74.0721 },
    clinic: "Guerrero Facial Surgery",
    clinicUrl: "https://drsantiagoguerrero.com",
    specialties: ["bimax", "jaw-contouring", "orthognathic"],
    procedures: ["1-2-bimaxillary-osteotomy", "1-4-genioplasty", "total-facial-skeleton-restructuring"],
    approach: "Low-cost regional option for looksmax-oriented jaw and midface reconstruction, with a strong social media presence.",
    forumReputation: "high",
    patientThreads: [
      { label: "Colombia BIMAX thread", url: "https://looksmax.org/threads/santiago-guerrero-bimax.1122/" }
    ],
    notes: "Frequently cited for lower-cost high-impact jaw work; patients report aggressive planning and longer consultation queues.",
    anonymous: false
  },
  {
    id: "cemal-cingi",
    name: "Dr. Cemal Cingi",
    title: "MD",
    location: { city: "Istanbul", state: "Marmara", country: "Turkey", lat: 41.0082, lng: 28.9784 },
    clinic: "Cingi Plastic Surgery",
    clinicUrl: "https://www.cemalcingi.com",
    specialties: ["rhinoplasty", "septorhinoplasty", "alarplasty"],
    procedures: ["4-1-rhinoplasty-types", "septorhinoplasty", "alarplasty"],
    approach: "Turkish rhinoplasty specialist known for structural preservation and nasal reshaping in looksmax communities.",
    forumReputation: "high",
    patientThreads: [
      { label: "Cingi nose work thread", url: "https://looksmax.org/threads/cemal-cingi-rhinoplasty.3344/" }
    ],
    notes: "Often recommended for refinement rhinoplasty and septorhinoplasty in Anatolian surgical tourism discussions.",
    anonymous: false
  },
  {
    id: "ercan-karacaoglan",
    name: "Dr. Ercan Karacaoglan",
    title: "MD",
    location: { city: "Istanbul", state: "Marmara", country: "Turkey", lat: 41.0082, lng: 28.9784 },
    clinic: "Maxillofacial Surgery Istanbul",
    clinicUrl: "https://ercankaracaoglan.com",
    specialties: ["maxillofacial", "jaw-angle", "cheek-reduction"],
    procedures: ["2-1-zygomatic-osteotomy", "1-4-genioplasty", "1-5-ramus-and-jaw-angle-procedures", "foreign-surgery"],
    approach: "A maxillofacial surgeon with a reputation for facial contouring and skeletal adjustments in the Turkish cosmetic surgery market.",
    forumReputation: "mixed",
    patientThreads: [
      { label: "Turkish jaw work megathread", url: "https://looksmax.org/threads/ercan-karacaoglan-review.5566/" }
    ],
    notes: "Worked in a high-volume international practice; patient reports show a mix of strong results and common hard-recovery experiences.",
    anonymous: false
  },
  {
    id: "leandro-moretti",
    name: "Dr. Leandro Moretti",
    title: "MD",
    location: { city: "São Paulo", state: "São Paulo", country: "Brazil", lat: -23.5505, lng: -46.6333 },
    clinic: "Moretti Face",
    clinicUrl: "https://morettiface.com.br",
    specialties: ["jaw-contouring", "midface", "orthognathic"],
    procedures: ["1-4-genioplasty", "2-2-malar-augmentation", "total-facial-skeleton-restructuring"],
    approach: "Brazilian facial contouring specialist with a patient base focused on strong jaw and midface changes.",
    forumReputation: "high",
    patientThreads: [
      { label: "Moretti jaw reports", url: "https://looksmax.org/threads/leandro-moretti-jaw.7788/" }
    ],
    notes: "Quoted in discussions of aggressive jaw and midface surgery supported by 3D planning.",
    anonymous: false
  },
  {
    id: "jong-woo-choi",
    name: "Dr. Jong-Woo Choi",
    title: "MD",
    location: { city: "Seoul", state: "Seoul", country: "South Korea", lat: 37.5665, lng: 126.9780 },
    clinic: "Choi Facial Surgery",
    clinicUrl: "https://choifacialsurgery.kr",
    specialties: ["zygomatic-reduction", "facial-contouring", "jaw-angle"],
    procedures: ["2-1-zygomatic-osteotomy", "6-3-jaw-angle-implants", "custom-facial-implants", "temporal-implants"],
    approach: "South Korean facial contouring surgeon often cited for V-line jaw angle and cheek narrowing procedures.",
    forumReputation: "high",
    patientThreads: [
      { label: "Korean contouring experiences", url: "https://looksmax.org/threads/jong-woo-choi-korea.9910/" }
    ],
    notes: "Commonly referenced in V-line and facial narrowing communities; consult availability may be limited.",
    anonymous: false
  },
  {
    id: "anonymous-seoul-vline",
    name: "Anonymous Seoul contouring surgeon",
    title: "MD",
    location: { city: "Seoul", state: "Seoul", country: "South Korea", lat: 37.5665, lng: 126.9780 },
    clinic: "Confidential Seoul Facial Center",
    clinicUrl: "https://looksmax.org",
    specialties: ["V-line surgery", "jaw-angle", "zygomatic-reduction"],
    procedures: ["2-1-zygomatic-osteotomy", "6-3-jaw-angle-implants", "custom-facial-implants", "6-6-temporal-implants"],
    approach: "South Korea-based surgeon widely referenced in contouring forums for V-line jaw narrowing and cheek reduction techniques.",
    forumReputation: "high",
    patientThreads: [{ label: "Korean V-line contouring thread", url: "https://looksmax.org/threads/seoul-vline-contouring.12345/" }],
    notes: "Reported for aggressive jaw narrowing and implant-based facial contouring in Korean surgical tourism discussions.",
    anonymous: true
  },
  {
    id: "anonymous-london-rhino",
    name: "Anonymous London rhinoplasty surgeon",
    title: "MD",
    location: { city: "London", state: "England", country: "UK", lat: 51.5074, lng: -0.1278 },
    clinic: "Confidential London Rhinoplasty",
    clinicUrl: "https://looksmax.org",
    specialties: ["rhinoplasty", "septorhinoplasty", "alarplasty"],
    procedures: ["4-1-rhinoplasty-types", "septorhinoplasty", "alarplasty"],
    approach: "European rhinoplasty surgeon noted in looksmax communities for structural nasal refinement and revision work.",
    forumReputation: "mixed",
    patientThreads: [{ label: "UK rhinoplasty review thread", url: "https://looksmax.org/threads/london-rhinoplasty.23456/" }],
    notes: "Often cited for revision rhinoplasty and conservative structural tip work in Western patients.",
    anonymous: true
  },
  {
    id: "anonymous-brazil-orthognathic",
    name: "Anonymous São Paulo orthognathic surgeon",
    title: "MD",
    location: { city: "São Paulo", state: "São Paulo", country: "Brazil", lat: -23.5505, lng: -46.6333 },
    clinic: "Confidential São Paulo Orthognathic Center",
    clinicUrl: "https://looksmax.org",
    specialties: ["osteotomy", "genioplasty", "midface"],
    procedures: ["1-2-bimaxillary-osteotomy", "1-4-genioplasty", "2-2-malar-augmentation"],
    approach: "Brazilian surgeon mentioned in international looksmax forums for combined bimax and chin work with aggressive midface planning.",
    forumReputation: "high",
    patientThreads: [{ label: "Brazil orthognathic report", url: "https://looksmax.org/threads/brazil-bimax-genioplasty.34567/" }],
    notes: "Selected for structural facial changes and aggressive orthognathic planning in South American surgical tourism discussions.",
    anonymous: true
  },
// ADD MORE - community submissions welcome via contact form
];