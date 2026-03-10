// ============================================================
//  MASTER PRACTICE CONFIG
//  -------------------------------------------------------
//  Fill this file in for ANY dental practice and the entire
//  site updates automatically. Nothing else needs to change.
// ============================================================

// ── IMAGES ──────────────────────────────────────────────────
// Drop doctor photos into src/assets/ and import them here.
// Hero image lives at src/assets/hero-dental.jpg
import doctorBarton   from "@/assets/doctor-barton.jpg";
import doctorWelzel   from "@/assets/doctor-welzel.jpg";
import doctorEsquilin from "@/assets/doctor-esquilin.jpg";
import doctorMurphy   from "@/assets/doctor-murphy.jpg";

// ── PRACTICE INFO ────────────────────────────────────────────
export const PRACTICE = {
  name:        "Chesapeake Dental Group",
  displayName: "Baltimore Uptown Dentist",   // shown in nav bar
  tagline:     "SMILE WITH CONFIDENCE",
  subTagline:  "Precision dentistry with the latest technology — CEREC same-day crowns, dental implants, cosmetic dentistry & more in Roland Park, Baltimore",
  established: "Roland Park, Baltimore",
  formerly:    "Dr. K Michael Murphy & Associates", // set "" if not applicable
};

// ── CONTACT ──────────────────────────────────────────────────
export const CONTACT = {
  phone:        "(410) 235-1233",
  phoneHref:    "tel:+14102351233",
  email:        "annasmiledds@aol.com",
  address:      "3900 N. Charles St., Suite 112",
  city:         "Baltimore, MD 21218",
  parkingNote:  "Cambridge Apartments in Roland Park — free parking available",
  // Paste your Google Maps Embed src URL here (from maps.google.com → Share → Embed a map)
  mapEmbedSrc:  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.4!2d-76.6242!3d39.3357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80543d4d5b1b5%3A0x0!2s3900+N+Charles+St+%23112%2C+Baltimore%2C+MD+21218!5e0!3m2!1sen!2sus!4v1",
  mapLink:      "https://maps.google.com/?q=3900+N+Charles+St+Suite+112+Baltimore+MD+21218",
};

// ── HOURS ─────────────────────────────────────────────────────
export const HOURS = [
  { day: "Monday",    hours: "9:00 AM – 6:00 PM" },
  { day: "Tuesday",   hours: "9:00 AM – 5:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 3:00 PM" },
  { day: "Thursday",  hours: "9:00 AM – 6:00 PM" },
  { day: "Friday",    hours: "9:00 AM – 3:00 PM" },
  { day: "Sat – Sun", hours: "Closed", muted: true },
];

// ── SOCIAL LINKS ──────────────────────────────────────────────
export const SOCIAL = [
  { label: "Facebook",      href: "https://facebook.com/BaltimoreUptownDentist1/" },
  { label: "YouTube",       href: "https://youtube.com/user/baltimoredentist" },
  { label: "Google Reviews",href: "https://www.google.com/search?q=Baltimore+Uptown+Dentist+reviews" },
  { label: "Yelp",          href: "https://www.yelp.com/biz/chesapeake-dental-group-baltimore" },
];

// ── AFFILIATIONS ──────────────────────────────────────────────
export const AFFILIATIONS = [
  "ADA",
  "Maryland State Dental Assoc.",
  "AADSM",
  "ICOI",
  "ACP",
  "AGD",
];

// ── FINANCING ─────────────────────────────────────────────────
export const FINANCING = {
  description: "We accept most traditional insurance plans and will file claims for reimbursement. Flexible financing through CareCredit, Citi-Health Card, Prosper, and Cherry.",
  paymentNote: "Accepted payments: checks, cash, and bank cards.",
};

// ── ABOUT ─────────────────────────────────────────────────────
export const ABOUT = {
  missionHeadline: "Healthy Mouth, Heart & Mind",
  paragraphs: [
    "Chesapeake Dental Group (formerly Dr. K Michael Murphy & Associates) is committed to providing the highest quality oral health care in an environment where everyone is treated with dignity and nurtured.",
    "Nestled in the Cambridge Apartments in Roland Park, across from Johns Hopkins Homewood Campus, our office uses the latest technology in a gentle, caring, and friendly manner — with convenient access to free parking.",
  ],
  firstVisit: [
    { title: "Medical & Dental History",  desc: "Comprehensive review and necessary x-rays" },
    { title: "Micro-Assay Analysis",      desc: "Bacterial study using phase contrast microscope" },
    { title: "Oral Cancer Exam",          desc: "Full periodontal charting and treatment planning" },
  ],
};

// ── HOME PAGE SERVICES (6 cards on homepage) ─────────────────
export const HOME_SERVICES = [
  { number: "01", title: "CEREC SAME-DAY CROWNS",   description: "Advanced CAD/CAM technology for beautiful, precise crowns made and placed in a single visit" },
  { number: "02", title: "DENTAL IMPLANTS",          description: "Computer-guided implant surgery with 3D ConeBeam CAT scans for permanent tooth replacement" },
  { number: "03", title: "COSMETIC DENTISTRY",       description: "Veneers, whitening, bonding, and cosmetic contouring to transform your smile" },
  { number: "04", title: "CLEAR ALIGNERS",           description: "Invisalign and SureSmile clear aligner therapy for discreet orthodontic treatment" },
  { number: "05", title: "PROSTHODONTICS",           description: "Complex restorative dentistry including crowns, bridges, dentures, and full-mouth rehabilitation" },
  { number: "06", title: "SLEEP APNEA TREATMENT",    description: "Custom FDA-approved oral appliances for snoring and obstructive sleep apnea — an alternative to CPAP" },
];

// ── FULL SERVICES PAGE ────────────────────────────────────────
export const SERVICE_GROUPS = [
  {
    category: "TECHNOLOGY",
    items: [
      { title: "CEREC CAD/CAM Crowns",            desc: "Same-day crowns with advanced computer-aided design and manufacturing" },
      { title: "3D ConeBeam CAT Scans",           desc: "Comprehensive 3D imaging for precise diagnosis and treatment planning" },
      { title: "Computer Guided Implant Surgery", desc: "Precision-guided placement for optimal implant results" },
      { title: "Growth Factor Bio-Technology",    desc: "Advanced healing technology using your body's natural growth factors" },
      { title: "Microscopes in Periodontal Treatment", desc: "Superior magnification for precision dentistry" },
      { title: "Botox and Fillers",               desc: "Cosmetic facial procedures by certified professionals" },
    ],
  },
  {
    category: "DENTAL SERVICES",
    items: [
      { title: "Cosmetic Dentistry",    desc: "Veneers, bonding, contouring, and smile makeovers" },
      { title: "Dental Implants",       desc: "Permanent tooth replacement with computer-guided precision" },
      { title: "Crowns and Bridges",    desc: "Durable restorations to rebuild your smile" },
      { title: "Clear Aligners",        desc: "Invisalign, SureSmile, and Six Month Smiles options" },
      { title: "Root Canal Therapy",    desc: "Gentle endodontic treatment to save damaged teeth" },
      { title: "Whitening",             desc: "Professional teeth whitening for a brighter smile" },
      { title: "Dentures",              desc: "Full and partial dentures custom-fitted for comfort" },
      { title: "Sleep Apnea Treatment", desc: "Custom oral appliances as an alternative to CPAP" },
    ],
  },
];

// ── DOCTORS ───────────────────────────────────────────────────
// award: set to "" if none
export const DOCTORS = [
  {
    image:    doctorBarton,
    name:     "Dr. M. Alexander Barton, D.M.D.",
    title:    "Lead Doctor",
    award:    "",
    bio:      "Baltimore native with a B.S. in Public Health from GWU. Trained at University of New England and certified in cosmetic procedures through the American Academy of Facial Aesthetics.",
    fullBio:  "Baltimore native who grew up in Towson and attended Saint Paul's Schools. Earned a B.S. in Public Health from George Washington University (2015). Worked as a lab technician in the Neurology Department at Johns Hopkins University School of Medicine doing mass spectrometry before dental school. Attended University of New England for dental school. Member of the American Dental Association, Maryland State Dental Association, Baltimore County Dental Association, and American Academy of Facial Aesthetics with intensive certification for cosmetic procedures.",
  },
  {
    image:    doctorWelzel,
    name:     "Dr. med. dent. Alexandra Welzel, DDS, FAGD",
    title:    "Cosmetic Specialist",
    award:    "Voted Best Dentist in Baltimore",
    bio:      "Over 30 years of experience. Fellow of the Academy of General Dentistry (FAGD). Specializes in clear aligners, veneers, whitening, and more.",
    fullBio:  "Native of Germany with over 30 years of dental care experience. Specializes in cosmetic options including clear aligners, teeth whitening, veneers, crowns, bridges, bonding and more. Recipient of the prestigious 'Fellow of Academy of General Dentistry' (FAGD) award. Graduated from Dental School, RWTH Aachen, Germany (1992). Completed Doctoral Thesis, Magna Cum Laude, at RWTH Aachen (1994). Completed 3-year residency in Advanced General Dentistry at University of Maryland Baltimore College of Dental Surgery.",
  },
  {
    image:    doctorEsquilin,
    name:     "Dr. Nicole Esquilín",
    title:    "General Dentist",
    award:    "",
    bio:      "Bilingual care in English and Spanish. Certified in Invisalign and SureSmile. Trained in restorative, prosthetic, and endodontic treatment.",
    fullBio:  "Born and raised in Puerto Rico. Earned Doctor of Dental Medicine degree from University of Puerto Rico. Completed Advanced Education in General Dentistry (AEGD) residency at Chase Brexton Health Clinic with NYU Langone in Baltimore City. Trained in restorative work, fixed and removable prosthesis, and endodontic treatment. Certified in Invisalign and SureSmile clear aligner treatment. Offers bilingual care as a native Spanish speaker.",
  },
  {
    image:    doctorMurphy,
    name:     "K. Michael Murphy, DDS, MS",
    title:    "Prosthodontist",
    award:    "Voted Best Prosthodontist & Best Dentist in Baltimore",
    bio:      "Practices at the leading edge of digital cosmetic, complex restorative and implant dentistry.",
    fullBio:  "Graduated Magna Cum Laude from NYU College of Dentistry (1978). Trained for an additional 4 years in three hospitals in General Dentistry, General & Maxillofacial Prosthodontics. Clinical Assistant Professor at UM Dental College postgraduate prosthodontic department. Voted both 'Best Prosthodontist' and 'Best Dentists' in Baltimore. Practices at the leading edge of digital cosmetic, complex restorative and implant dentistry. Qualified to treat snoring and sleep disordered breathing.",
  },
];

// ── TESTIMONIALS ──────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote: "Such an awesome dental treatment experience. The office is absolutely amazingly beautiful — like an exotic dental spa experience.",
    name:  "Shraddha",
  },
  {
    quote: "Outstanding practice. Cozy and posh with a truly friendly atmosphere. We couldn't be happier with the care we received.",
    name:  "Nelly & Robert di Targiani",
  },
  {
    quote: "Tremendously great craftsmanship. The difference is like comparing a new Lexus to an old Ford Taurus — that's how much better this practice is.",
    name:  "Harry Hansen",
  },
];
