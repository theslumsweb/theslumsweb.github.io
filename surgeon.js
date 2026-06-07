/* ============================================================================
   FREE SURGEON DB — DATA FILE
   ----------------------------------------------------------------------------
   This file is generated from surgeon_database_analysis.xlsx.
   Spreadsheet values are the source of truth for this V1 seed database.

   Data conventions:
     experience    numeric years when known; null when not listed
     rating        public rating out of 5; null when unavailable
     ratingCount   public review count; 0 when unavailable
     procedures    procedure names must appear in PROCEDURE_GROUPS
     price         { poa: true, note } when no public price is listed

   Internal research notes:
     Pricing was intentionally left as POA because elite surgeon sites usually do not publish full procedure prices; do not use guessed prices in production.
     Ratings are blank unless a public profile/page explicitly showed a rating and count during research.
     This is a V1 seed database, not a ranking or endorsement. Verify license status, board certification, malpractice/disciplinary history, current availability, and patient outcomes before publication.

   This database is informational only and is not medical advice or an endorsement.
   ========================================================================== */

window.PROCEDURE_GROUPS = [
  {
    group: "Orthognathic & Jaw",
    items: ["Bimaxillary (Bimax)", "BSSO (lower jaw)", "LeFort I (upper jaw)", "Sliding genioplasty", "Custom jaw implants", "Jaw angle reduction", "Zygoma reduction", "IMDO / DOJS", "Wisdom tooth removal", "TMJ surgery", "Revision jaw surgery", "Sleep apnea jaw surgery", "Orthognathic surgery", "Jaw reconstruction", "Craniofacial surgery"],
  },
  {
    group: "Nose",
    items: ["Rhinoplasty", "Septorhinoplasty", "Revision rhinoplasty", "Alar base reduction"],
  },
  {
    group: "Eyes & Brow",
    items: ["Upper blepharoplasty", "Lower blepharoplasty", "Lateral canthoplasty", "Canthopexy", "Ptosis correction", "Brow lift"],
  },
  {
    group: "Cheeks & Midface",
    items: ["Malar / cheek implants", "Buccal fat removal", "Midface lift", "Facial fat grafting"],
  },
  {
    group: "Chin, Jaw & Neck",
    items: ["Chin implant", "Submental liposuction", "Neck lift"],
  },
  {
    group: "Lift & Skin",
    items: ["Deep plane facelift", "SMAS facelift", "Lip lift", "Otoplasty (ears)"],
  },
  {
    group: "Hair",
    items: ["FUE hair transplant", "Hairline lowering", "Beard transplant", "Eyebrow transplant", "Hair transplant"],
  },
  {
    group: "Contour & Implants",
    items: ["Custom PEEK implants", "Forehead augmentation", "Temple augmentation"],
  },
  {
    group: "Facial Plastic Surgery",
    items: ["Mohs reconstruction", "Facial trauma reconstruction", "Facial rejuvenation", "Facial augmentation"],
  },
  {
    group: "Non-surgical",
    items: ["Injectables/fillers"],
  },
  {
    group: "General Procedures",
    items: ["Dental implants", "Blepharoplasty", "Fat grafting", "Facelift"],
  },
  {
    group: "Orthopedic / Limb Lengthening",
    items: ["Cosmetic stature lengthening", "Limb deformity correction & lengthening", "Pediatric orthopedics", "Trauma reconstruction"],
  },
  {
    group: "Dental / Oral Surgery",
    items: ["TMJ disorders", "Sleep apnea surgery"],
  },
];

window.SURGEONS = [
  {
    id: "SURG001",
    name: "Valerio Ramieri",
    clinic: "DentalMed / Ortognatica Roma",
    country: "Italy",
    city: "Rome",
    region: "Europe",
    experience: null,
    rating: null,
    ratingCount: 0,
    languages: ["Italian", "English"],
    consultation: ["In-person"],
    contact: { website: "https://www.maxilloroma.it/", email: "Info@ortognaticaroma.it", phone: "+39 351 504 0117" },
    procedures: [
      {
        name: "Bimaxillary (Bimax)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "BSSO (lower jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "LeFort I (upper jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Sliding genioplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "TMJ surgery",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://dentalmed.group/en/valerio-ramieri/. Note: Well-known OMFS/orthognathic surgeon; PhD in maxillofacial surgery technologies; experience in top orthognathic clinics."],
  },
  {
    id: "SURG002",
    name: "Mirco Raffaini",
    clinic: "Face Surgery",
    country: "Italy",
    city: "Parma",
    region: "Europe",
    experience: 40,
    rating: null,
    ratingCount: 0,
    languages: ["Italian", "English"],
    consultation: ["In-person"],
    contact: { website: "https://mircoraffaini.com/", email: "infointernational@facesurgery.it; info@facesurgery.it", phone: "+39 0521 035111" },
    procedures: [
      {
        name: "Bimaxillary (Bimax)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "BSSO (lower jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "LeFort I (upper jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Sliding genioplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Rhinoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://mircoraffaini.com/. Note: Maxillofacial/plastic aesthetic surgeon; official site lists orthognathic, orthofacial and rhinoplasty; CV shows decades of training/work."],
  },
  {
    id: "SURG003",
    name: "Federico Hernández Alfaro",
    clinic: "Instituto Maxilofacial / Teknon Medical Center",
    country: "Spain",
    city: "Barcelona",
    region: "Europe",
    experience: null,
    rating: null,
    ratingCount: 0,
    languages: ["Spanish", "English"],
    consultation: ["In-person"],
    contact: { website: "https://www.institutomaxilofacial.com/en/dr-federico-hernandez-alfaro/", email: "", phone: "" },
    procedures: [
      {
        name: "Bimaxillary (Bimax)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "BSSO (lower jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "LeFort I (upper jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Sliding genioplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Dental implants",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://www.institutomaxilofacial.com/en/about-the-institute/team/. Note: Director of Instituto Maxilofacial; professor/chair in oral and maxillofacial surgery; author of 150+ scientific articles per clinic profile."],
  },
  {
    id: "SURG004",
    name: "Michael J. Gunson",
    clinic: "Santa Barbara Facial Reconstruction",
    country: "United States",
    city: "Santa Barbara, CA",
    region: "North America",
    experience: 20,
    rating: null,
    ratingCount: 0,
    languages: ["English", "French"],
    consultation: ["In-person"],
    contact: { website: "https://www.arnettgunson.com/dr-gunson", email: "", phone: "805-682-8462" },
    procedures: [
      {
        name: "Bimaxillary (Bimax)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "BSSO (lower jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "LeFort I (upper jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Sliding genioplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Sleep apnea jaw surgery",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://www.cottagehealth.org/find-a-doctor/profile/michael-gunson-santa-barbara-maxillo-facial-surgery/. Note: Board-certified OMFS focused on corrective jaw/facial growth problems; Cottage profile lists year began practicing as 2003."],
  },
  {
    id: "SURG005",
    name: "Larry M. Wolford",
    clinic: "Larry M. Wolford, DMD / Baylor University Medical Center area",
    country: "United States",
    city: "Dallas, TX",
    region: "North America",
    experience: null,
    rating: null,
    ratingCount: 0,
    languages: ["English"],
    consultation: ["In-person"],
    contact: { website: "https://drlarrywolford.com/", email: "Denise@drlarrywolford.com", phone: "" },
    procedures: [
      {
        name: "Bimaxillary (Bimax)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "BSSO (lower jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "LeFort I (upper jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "TMJ surgery",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Revision jaw surgery",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://drlarrywolford.com/. Note: Prominent revision orthognathic/TMJ surgeon; official site emphasizes maxillofacial revision and TMJ replacement."],
  },
  {
    id: "SURG006",
    name: "Derek M. Steinbacher",
    clinic: "Yale New Haven Health / Private facial plastic practice",
    country: "United States",
    city: "New Haven/Guilford, CT",
    region: "North America",
    experience: 20,
    rating: null,
    ratingCount: 0,
    languages: ["English"],
    consultation: ["In-person"],
    contact: { website: "https://www.dereksteinbacher.com/", email: "", phone: "" },
    procedures: [
      {
        name: "Bimaxillary (Bimax)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Rhinoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Blepharoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Custom jaw implants",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Facial fat grafting",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://www.ynhhs.org/physicians/derek-m-steinbacher. Note: Dual board-certified plastic/reconstructive and oral/maxillofacial surgeon; specializes in craniofacial, orthognathic, rhinoplasty and facial aesthetic surgery."],
  },
  {
    id: "SURG007",
    name: "Shahrokh C. Bagheri",
    clinic: "Georgia Oral and Facial Surgery / Northside Hospital",
    country: "United States",
    city: "Atlanta/Marietta, GA",
    region: "North America",
    experience: null,
    rating: null,
    ratingCount: 0,
    languages: ["English"],
    consultation: ["In-person"],
    contact: { website: "https://drsbagheri.com/", email: "", phone: "" },
    procedures: [
      {
        name: "Bimaxillary (Bimax)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "BSSO (lower jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "LeFort I (upper jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Facial trauma reconstruction",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Dental implants",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://drsbagheri.com/dr-bagheri.html. Note: Dual-degree, board-certified OMFS with advanced medicine/dentistry training; practice page highlights international recognition, publications and teaching."],
  },
  {
    id: "SURG008",
    name: "Andrew A. Jacono",
    clinic: "New York Center for Facial Plastic & Laser Surgery",
    country: "United States",
    city: "New York, NY",
    region: "North America",
    experience: null,
    rating: null,
    ratingCount: 0,
    languages: ["English"],
    consultation: ["In-person"],
    contact: { website: "https://www.newyorkfacialplasticsurgery.com/", email: "", phone: "" },
    procedures: [
      {
        name: "Deep plane facelift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Neck lift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Blepharoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Rhinoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Lip lift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Fat grafting",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://drandrewajacono.com/about/. Note: Facial plastic surgeon known for extended deep plane facelift; official bio describes him as global facial plastic surgery authority."],
  },
  {
    id: "SURG009",
    name: "Ben Talei",
    clinic: "Beverly Hills Center for Plastic & Laser Surgery",
    country: "United States",
    city: "Beverly Hills, CA",
    region: "North America",
    experience: null,
    rating: null,
    ratingCount: 0,
    languages: ["English"],
    consultation: ["In-person"],
    contact: { website: "https://www.beverlyhillscenter.com/", email: "", phone: "" },
    procedures: [
      {
        name: "Deep plane facelift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Rhinoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Lip lift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Hair transplant",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Brow lift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://www.beverlyhillscenter.com/dr-ben-talei/. Note: Dual fellowship-trained, board-certified facial plastic surgeon; known for face-focused aesthetic and reconstructive surgery."],
  },
  {
    id: "SURG010",
    name: "Sam P. Most",
    clinic: "Stanford Facial Plastic & Reconstructive Surgery",
    country: "United States",
    city: "Palo Alto, CA",
    region: "North America",
    experience: 20,
    rating: null,
    ratingCount: 0,
    languages: ["English"],
    consultation: ["In-person"],
    contact: { website: "https://med.stanford.edu/drmost.html", email: "", phone: "650-736-FACE" },
    procedures: [
      {
        name: "Rhinoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Facelift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Blepharoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Fat grafting",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Mohs reconstruction",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://stanfordhealthcare.org/doctors/m/sam-most.html. Note: Chief of Stanford Division of Facial Plastic & Reconstructive Surgery; double-board certified and focused on rhinoplasty, facelift, blepharoplasty and reconstruction."],
  },
  {
    id: "SURG011",
    name: "Rod J. Rohrich",
    clinic: "Dallas Plastic Surgery Institute",
    country: "United States",
    city: "Dallas, TX",
    region: "North America",
    experience: null,
    rating: null,
    ratingCount: 0,
    languages: ["English"],
    consultation: ["In-person"],
    contact: { website: "https://drrohrich.com/", email: "rod.rohrich@dpsi.org", phone: "" },
    procedures: [
      {
        name: "Rhinoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Revision rhinoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Facelift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Neck lift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Blepharoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://drrohrich.com/. Note: Board-certified Dallas plastic surgeon and clinical professor; prominent rhinoplasty/facelift educator and author."],
  },
  {
    id: "SURG012",
    name: "Raj Kanodia",
    clinic: "Kanodia Plastic Surgery",
    country: "United States",
    city: "Beverly Hills, CA",
    region: "North America",
    experience: 37,
    rating: null,
    ratingCount: 0,
    languages: ["English"],
    consultation: ["In-person"],
    contact: { website: "https://www.drkanodia.com/", email: "", phone: "(310) 276-3106" },
    procedures: [
      {
        name: "Rhinoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Revision rhinoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Facial rejuvenation",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Injectables/fillers",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://www.enthealth.org/find-ent/raj-kanodia/. Note: Beverly Hills facial plastic surgeon focused on closed rhinoplasty and facial rejuvenation; official site claims 37+ years and 15,000+ rhinoplasties."],
  },
  {
    id: "SURG013",
    name: "Julian De Silva",
    clinic: "Centre for Advanced Facial Cosmetic & Plastic Surgery",
    country: "United Kingdom",
    city: "London",
    region: "Europe",
    experience: 15,
    rating: 5,
    ratingCount: 1077,
    languages: ["English"],
    consultation: ["In-person"],
    contact: { website: "https://londonfacialplasticsurgery.co.uk/", email: "", phone: "0208 748 2860" },
    procedures: [
      {
        name: "Deep plane facelift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Blepharoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Rhinoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Neck lift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Brow lift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://londonfacialplasticsurgery.co.uk/about/dr-julian-de-silva-mbbs-md/. Note: Harley Street face-only surgeon; official site lists facelift, blepharoplasty, rhinoplasty and deep plane facelift."],
  },
  {
    id: "SURG014",
    name: "Timothy J. Marten",
    clinic: "Marten Clinic of Plastic Surgery",
    country: "United States",
    city: "San Francisco, CA",
    region: "North America",
    experience: 25,
    rating: 4.5,
    ratingCount: 19,
    languages: ["English"],
    consultation: ["In-person"],
    contact: { website: "https://www.martenclinic.com/", email: "", phone: "415-677-9937" },
    procedures: [
      {
        name: "Facelift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Neck lift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Blepharoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Brow lift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Facial fat grafting",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://www.martenclinic.com/. Note: Board-certified plastic surgeon focused on facial rejuvenation; site describes him as an internationally recognized facelift authority."],
  },
  {
    id: "SURG015",
    name: "Bryan C. Mendelson",
    clinic: "The Centre for Facial Plastic Surgery",
    country: "Australia",
    city: "Melbourne",
    region: "Oceania",
    experience: 30,
    rating: null,
    ratingCount: 0,
    languages: ["English"],
    consultation: ["In-person"],
    contact: { website: "https://bmendelson.com.au/", email: "info@bmendelson.com.au", phone: "+61 3 9826 0977" },
    procedures: [
      {
        name: "Facelift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Neck lift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Blepharoplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Brow lift",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Facial augmentation",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Included as a prominent/well-known surgeon based on official/academic/profile sources. Source: https://bmendelson.com.au/. Note: Face-only aesthetic plastic surgeon; official site highlights facial anatomy research, natural face surgery, and international patients."],
  },
  {
    id: "SURG016",
    name: "Dror Paley",
    clinic: "Paley Orthopedic & Spine Institute",
    country: "United States",
    city: "West Palm Beach, FL",
    region: "North America",
    experience: 40,
    rating: null,
    ratingCount: 0,
    languages: ["English", "Hebrew", "French", "Italian", "Spanish", "Russian"],
    consultation: ["In-person"],
    contact: { website: "https://paleyinstitute.org/dror-paley-md/", email: "dpaley@paleyinstitute.org; inquiry@paleyinstitute.org", phone: "+1 (561) 844-5255" },
    procedures: [
      {
        name: "Cosmetic stature lengthening",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Limb deformity correction & lengthening",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Pediatric orthopedics",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Trauma reconstruction",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Added by request. Source: https://paleyinstitute.org/dror-paley-md/. Note: Dror Paley is an orthopedic limb-lengthening/deformity correction specialist rather than a facial surgeon; official profile lists 25,000+ surgeries, 150+ peer-reviewed articles, and leadership at Paley Orthopedic & Spine Institute."],
  },
  {
    id: "SURG017",
    name: "David M. Alfi",
    clinic: "Alfi Oral, Dental Implant & Facial Surgery",
    country: "United States",
    city: "Houston, TX",
    region: "North America",
    experience: 14,
    rating: 4.9,
    ratingCount: 210,
    languages: ["English"],
    consultation: ["In-person"],
    contact: { website: "https://alfioralsurgery.com/", email: "info@alfioralsurgery.com", phone: "+1 (713) 489-6984" },
    procedures: [
      {
        name: "Bimaxillary (Bimax)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "BSSO (lower jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "LeFort I (upper jaw)",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Sliding genioplasty",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Orthognathic surgery",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Craniofacial surgery",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Jaw reconstruction",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Dental implants",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Wisdom tooth removal",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "TMJ disorders",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
      {
        name: "Sleep apnea surgery",
        price: { poa: true, note: "Not publicly listed; verify directly with clinic" },
      },
    ],
    notes: ["Researched 2026-05-29. Added by request. Sources: https://alfioralsurgery.com/ and https://www.texaschildrens.org/find-a-provider/david-m-alfi-dds-md. Note: David M. Alfi is a board-certified dual-degree OMFS focused on orthognathic/craniomaxillofacial surgery, jaw reconstruction, and dental implants."],
  },
];
