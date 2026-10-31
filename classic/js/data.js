/**
 * Centralized Firm Data Store - Classic Reference Variant
 * Clients can update all text, contacts, emails, practice areas, and team here.
 */

const CLASSIC_FIRM_CONFIG = {
  name: "Poddar & Associates",
  tagline: "Law Firm in Ranchi, Jharkhand, India",
  estYear: "1969",
  foundedBy: "Sr. Advocate Mr. Binod Poddar & Sr. Advocate Mr. Biren Poddar",

  // Contact Details
  phone1: "9525600001",
  phone2: "9431101716",
  emailGeneral: "chambers@poddarandassociates.com",
  address: "Court Road, Near High Court of Jharkhand, Ranchi, Jharkhand, India",
  delhiOffice: "Supreme Court Bar Association Chambers, New Delhi, India",
  whatsappNumber: "919525600001",

  /* =========================================================================
   * 📧 CONSULTATION FORM & EMAIL NOTIFICATION SETTINGS
   * Add the client's destination email here where case inquiries should arrive.
   * ========================================================================= */
  consultationNotificationEmail: "chambers@poddarandassociates.com", // <-- EDIT THIS!

  // Form submission mode: "web3forms" | "formspree" | "mailto" | "whatsapp"
  formSubmissionMode: "web3forms",
  web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
  formspreeFormId: "",

  // Hero Banner Caption
  heroHeadline: "Full-Service Law Firm Providing Pragmatic Legal Solutions",
  heroSubtitle: "Comprising of experts, advisors, and litigators in diverse areas of law on a single unified platform.",

  /* =========================================================================
   * 🖼️ COMPREHENSIVE MEDIA & PHOTOGRAPHY REPOSITORY
   * Central control center for ALL photos, videos, logos, and avatars on the website.
   * Add local paths (e.g. "images/about.jpg") or web image URLs.
   * ========================================================================= */
  media: {
    heroSlides: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1600&q=80"
    ],
    heroSlideIntervalMs: 6000,
    aboutPreviewImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    firmLogoUrl: "" // Leave blank or add path e.g. "images/logo.png"
  },

  get heroMediaSlides() { return this.media.heroSlides; },
  get heroSlideIntervalMs() { return this.media.heroSlideIntervalMs; },
  get aboutPreviewImage() { return this.media.aboutPreviewImage; },

  // About Preview on Homepage
  aboutPreview: "Poddar & Associates (P&A) was founded in the year 1969 by Sr. Advocate Mr. Binod Poddar (Former Advocate General, State of Jharkhand and Former Additional Advocate General, State of Jharkhand) and Sr. Advocate Mr. Biren Poddar, who started their practice in the year 1967 and 1969 respectively. Poddar & Associates is a full-service law firm providing legal solutions in diverse areas of law. With a true professional approach and intricate understanding of the laws applicable to different industries and sectors, we provide the most pragmatic solutions to various organisations, both public and private as well as to individuals.",

  // The 4 Classic Feature Blocks (Exact matches to reference website)
  classicFeatures: [
    {
      title: "Deadline Assistant",
      desc: "We aim to achieve this goal through consistent efforts and attention in developing efficiently.",
      icon: "clock",
      badgeColor: "#991B1B" // Crimson/Red
    },
    {
      title: "Quick Info Center",
      desc: "We are counsellors, advisors and confidants to some of the most successful entrepreneurs in Jharkhand.",
      icon: "info",
      badgeColor: "#1E3A8A" // Navy Blue
    },
    {
      title: "Our Core Values",
      desc: "Integrity, Humility and Kindness are the ways of life for Poddar & Associates and is imbibed by all its members.",
      icon: "award",
      badgeColor: "#B45309" // Amber Gold
    },
    {
      title: "Team Work",
      desc: "They augment the firm’s expertise and abilities in handling work and issues having a multi-national impact.",
      icon: "users",
      badgeColor: "#065F46" // Emerald Green
    }
  ],

  // BCI Compliance Modal
  bciModal: {
    title: "DISCLAIMER",
    subtitle: "Bar Council of India Compliance",
    paragraphs: [
      "As per the norms set by the Bar Council of India, law firms are not authorized to solicit work and publicize. All the information, publications and legal commentary provided on www.poddarandassociates.com is for illustrative purposes only and should not be regarded or relied upon as legal advice. While the content provided is accurate as at the date of first publication, it is updated frequently when laws and regulations change.",
      "The site clearly states it is not intended to be a source of advertising or solicitation, nor is it an invitation for a lawyer-client relationship, and transmission, receipt or use of the site does not constitute or create a lawyer-client relationship.",
      "By clicking the “I Agree” button and retrieving information from the website, the user accepts that he/she is doing it out of free will and any reliance on the information contained on www.poddarandassociates.com is solely at the user's own risk. Specific legal advice should always be obtained before acting upon any information or commentary provided on the site. Further, the recipients of content from the site should not act, or refrain from acting, based upon any or all of the contents on the site."
    ],
    acceptButtonText: "I Agree",
    declineButtonText: "Decline"
  },

  // Footer & Compliance
  footer: {
    summary: "Established in 1969. Full-service law firm in Ranchi, Jharkhand and New Delhi providing legal solutions across Supreme Court, High Courts, and Tribunals.",
    copyright: "© Copyrights Reserved To Poddar & Associates.",
    designer: "Powered by :: Graphix Media (Modern Static Edition)"
  },

  // Subpage Details
  aboutPage: {
    title: "About Poddar & Associates",
    paragraphs: [
      "Poddar & Associates (P&A) was founded in the year 1969 by Sr. Advocate Mr. Binod Poddar (Former Advocate General, State of Jharkhand and Former Additional Advocate General, State of Jharkhand) and Sr. Advocate Mr. Biren Poddar, who started their practice in the year 1967 and 1969 respectively. Poddar & Associates is a full-service law firm providing legal solutions in diverse areas of law.",
      "With a true professional approach and intricate understanding of the laws applicable to different industries and sectors, we provide the most pragmatic solutions to various organisations, both public and private as well as to individuals. Our aim is to provide best legal solution to our clients on a single platform of our firm, comprising of experts, advisors and litigators in various areas of law.",
      "Over the last five decades, Poddar & Associates has established deep expertise before the Supreme Court of India, High Court of Jharkhand, National Company Law Tribunal (NCLT), Income Tax Appellate Tribunal (ITAT), Debt Recovery Tribunal (DRT), and specialized mining regulatory authorities."
    ],
    pillarsHeading: "Core Pillars of Poddar & Associates"
  },

  servicePage: {
    heading: "Our Services & Legal Practice Areas",
    subtitle: "Full-spectrum advocacy, corporate advisory, and dispute resolution across all judicial forums."
  },

  teamPage: {
    heading: "Our Team of Advocates & Counsel",
    subtitle: "Senior counsel, managing partners, and associates dedicated to forensic legal precision."
  },

  contactPage: {
    heading: "Contact Chambers",
    ranchiOfficeTitle: "Ranchi Head Chambers",
    delhiOfficeTitle: "Supreme Court Liaison Office"
  }
};

// Core Practice Categories & Case Related To
const CLASSIC_PRACTICE_DATA = {
  mainServices: [
    {
      title: "LEGAL CONSULTANCY",
      desc: "Comprehensive advisory on statutory compliance, risk assessment, and corporate governance for organizations and individuals."
    },
    {
      title: "COURT APPEARANCE",
      desc: "Regular appearances and vigorous trial advocacy before the Supreme Court of India, High Court of Jharkhand, and National Benches."
    },
    {
      title: "DRAFTING INCLUDING CONVEYANCE, NOTICES & DOCUMENTATION",
      desc: "Meticulous preparation of writ petitions, plaints, commercial contracts, conveyance deeds, statutory notices, and arbitral claims."
    }
  ],
  casesRelatedTo: [
    "TAX MATTERS [SALES TAX, INCOME TAX, CENTRAL EXCISE, VALUE ADDED TAX (VAT), JHARKHAND EXCISE, ENTRY TAX, SERVICE TAX, GST]",
    "TENDER MATTER",
    "INDUSTRIAL LAW CONSULTANCY",
    "MINING MATTER",
    "REAL ESTATE CONSULTANCY AND DOCUMENTATION",
    "ARBITRATION MATTER",
    "CONTRACT MATTERS",
    "THE COMPANIES ACT",
    "LABOUR LAWS",
    "PARTNERSHIP ACT",
    "RECOVERY OF DEBTS DUE TO BANKS AND FINANCIAL INSTITUTIONS (DRT / SARFAESI)",
    "CENTRAL EXCISE",
    "MATRIMONIAL DISPUTES",
    "BANKING CASES",
    "CIVIL CASES",
    "CRIMINAL CASES",
    "FACTORIES ACT, EMPLOYEES’ PROVIDENT FUND MISCELLANEOUS PROVISIONS",
    "EMPLOYEES STATE INSURANCE ACT, 1948",
    "SERVICE MATTER",
    "CONSUMER PROTECTION ACT"
  ],
  tribunals: [
    "CASES RELATING TO EDUCATIONAL TRIBUNAL",
    "CASES RELATING TO CENTRAL ADMINISTRATIVE TRIBUNAL (CAT)",
    "INCOME TAX APPELLATE TRIBUNAL (ITAT)",
    "COMMERCIAL TAXES TRIBUNAL",
    "DEBT RECOVERY TRIBUNAL (DRT)"
  ]
};

// Team Members (Exact roster from reference website)
const CLASSIC_TEAM = [
  {
    name: "Biren Poddar",
    role: "Senior Advocate & Co-Founder",
    exp: "Practice Since 1969",
    specialty: "Commercial Law, Company Disputes & High Court Litigation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Vikas Pandey",
    role: "Advocate",
    exp: "16+ Years Experience",
    specialty: "Civil & Criminal Trial Practice",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Deepak Sinha",
    role: "Advocate",
    exp: "15+ Years Experience",
    specialty: "Service Matters & Central Administrative Tribunal",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Piyush Poddar",
    role: "Managing Partner",
    exp: "24+ Years Experience",
    specialty: "Arbitration, Tenders & Supreme Court Practice",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Janak Mishra",
    role: "Advocate",
    exp: "12+ Years Experience",
    specialty: "Labour, Factories & Industrial Dispute Law",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Alpana Burman",
    role: "Advocate",
    exp: "10+ Years Experience",
    specialty: "Consumer Protection, Conveyance & Civil Litigation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Rakhi Sharma",
    role: "Advocate",
    exp: "10+ Years Experience",
    specialty: "Matrimonial Disputes & Family Law",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Manav Poddar",
    role: "Partner",
    exp: "18+ Years Experience",
    specialty: "Direct Tax, GST & Commercial Taxes Tribunal",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Diksha Dwivedi",
    role: "Associate Advocate",
    exp: "Legal Associate",
    specialty: "Statutory Documentation, Research & Legal Drafting",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80"
  }
];

// Client Sectors & Leading Client Logos
const CLASSIC_CLIENTS = [
  { name: "Public Sector Undertakings (PSUs)", type: "Government & Statutory Bodies" },
  { name: "Mining & Mineral Leaseholders", type: "Coal, Iron Ore & Bauxite" },
  { name: "Integrated Steel Manufacturers", type: "Industrial Plants & Heavy Rolling" },
  { name: "Scheduled Commercial Banks", type: "Banking & Financial Institutions" },
  { name: "Infrastructure Developers", type: "Highways & Energy Concessions" },
  { name: "Commercial Real Estate Promoters", type: "Townships & Commercial Complexes" }
];
