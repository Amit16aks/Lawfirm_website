/**
 * Centralized Firm Data Store - Classic Reference Variant
 * Configured with Jain Kishore Associates Official Data
 */

const CLASSIC_FIRM_CONFIG = {
  name: "Jain Kishore Associates",
  tagline: "Advocates & Legal Consultants • Ranchi | Jharkhand | India",
  estYear: "2018",
  foundedBy: "Advocate Mr. Hemant Jain & Advocate Mr. Akchansh Kishore",

  // Contact Details
  phone1: "9472772994",
  phone2: "7033619737",
  emailGeneral: "hemant.nusrl@gmail.com",
  address: "First Floor, H-143, Harmu Housing Colony, Beside Harmu Substation, Harmu, Ranchi, Jharkhand - 834002",
  delhiOffice: "Appellate & Commercial Tribunals Liaison, New Delhi, India",
  whatsappNumber: "919472772994",

  // Consultation Form Settings
  consultationNotificationEmail: "hemant.nusrl@gmail.com",
  formSubmissionMode: "web3forms",
  web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
  formspreeFormId: "",

  // Hero Banner Caption
  heroHeadline: "Strategic Courtroom Advocacy & Multi-Forum Commercial Dispute Resolution",
  heroSubtitle: "Providing decisive legal representation across the High Court of Jharkhand, National Tribunals, and Arbitral Forums.",

  media: {
    heroSlides: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1600&q=80"
    ],
    heroSlideIntervalMs: 6000,
    aboutPreviewImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    firmLogoUrl: "images/LOGO_2.png"
  },

  get heroMediaSlides() { return this.media.heroSlides; },
  get heroSlideIntervalMs() { return this.media.heroSlideIntervalMs; },
  get aboutPreviewImage() { return this.media.aboutPreviewImage; },

  // About Preview on Homepage
  aboutPreview: "Jain Kishore Associates is a litigation-focused law firm based in Ranchi, Jharkhand, providing strategic legal representation and advisory services to corporates, institutions, and individuals across India. The Firm is known for its strong courtroom advocacy, commercial dispute resolution, and sector-specific advisory, particularly in matters involving complex regulatory, financial, and infrastructure issues. We regularly appear before the Jharkhand High Court, various High Courts, District Courts, Tribunals, and arbitral forums.",

  // The 4 Classic Feature Blocks
  classicFeatures: [
    {
      title: "Courtroom Advocacy",
      desc: "Regular appearances before the Jharkhand High Court, specialized benches, and arbitral tribunals.",
      icon: "scale",
      badgeColor: "#991B1B"
    },
    {
      title: "Commercial Disputes",
      desc: "Strategic dispute mitigation in high-value infrastructure, EPC, and commercial contract claims.",
      icon: "info",
      badgeColor: "#1E3A8A"
    },
    {
      title: "Sectoral Advisory",
      desc: "Nuanced regulatory guidance across energy, mining, banking, real estate, and manufacturing.",
      icon: "award",
      badgeColor: "#B45309"
    },
    {
      title: "Strict Confidentiality",
      desc: "Uncompromising client privilege, ethical stewardship, and adherence to Bar Council canons.",
      icon: "users",
      badgeColor: "#065F46"
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
    summary: "Jain Kishore Associates is a litigation-focused law firm based in Ranchi, Jharkhand providing strategic representation across the High Court of Jharkhand, Commercial Courts, and National Tribunals.",
    copyright: "© Copyrights Reserved To Jain Kishore Associates.",
    designer: "Powered by :: Modern Static Edition"
  },

  // Subpage Details
  aboutPage: {
    title: "About Jain Kishore Associates",
    paragraphs: [
      "Jain Kishore Associates is a litigation-focused law firm based in Ranchi, Jharkhand, providing strategic legal representation and advisory services to corporates, institutions, and individuals across India.",
      "The Firm is known for its strong courtroom advocacy, commercial dispute resolution, and sector-specific advisory, particularly in matters involving complex regulatory, financial, and infrastructure issues. We regularly appear before the Jharkhand High Court, various High Courts, District Courts, Tribunals, and arbitral forums.",
      "Our partners possess extensive experience handling high-stakes arbitrations, insolvency proceedings before NCLT/NCLAT, banking recovery before DRT/DRAT, and regulatory disputes in power, mining, and real estate."
    ],
    pillarsHeading: "Core Pillars of Jain Kishore Associates"
  },

  servicePage: {
    heading: "Our Practice Areas & Legal Services",
    subtitle: "Full-spectrum advocacy, corporate advisory, and dispute resolution across all judicial forums."
  },

  teamPage: {
    heading: "Our Partners & Advocates",
    subtitle: "Litigation-focused advocates dedicated to forensic legal precision and courtroom advocacy."
  },

  contactPage: {
    heading: "Contact Chambers",
    ranchiOfficeTitle: "Harmu Principal Chambers",
    delhiOfficeTitle: "Appellate & Commercial Liaison"
  }
};

// Core Practice Categories & Case Related To
const CLASSIC_PRACTICE_DATA = {
  mainServices: [
    {
      title: "COMMERCIAL & CIVIL LITIGATION",
      desc: "Strategic representation in commercial suits, contractual claims, injunctions, and civil appeals before High Courts and District Courts."
    },
    {
      title: "ARBITRATION (DOMESTIC & INTERNATIONAL)",
      desc: "Institutional and ad-hoc arbitrations, Section 9 interim relief, and award enforcement in turnkey infrastructure disputes."
    },
    {
      title: "INSOLVENCY & BANKING RECOVERY (IBC / DRT)",
      desc: "Representation of financial & operational creditors, corporate debtors before NCLT, NCLAT, and DRT/DRAT."
    }
  ],
  casesRelatedTo: [
    "COMMERCIAL & CIVIL LITIGATION",
    "DOMESTIC & INTERNATIONAL ARBITRATION",
    "INSOLVENCY & BANKRUPTCY CODE (IBC)",
    "BANKING, FINANCE & DEBT RECOVERY (DRT / DRAT)",
    "DIRECT & INDIRECT TAXATION (INCOME TAX, GST)",
    "REAL ESTATE & INFRASTRUCTURE DISPUTES",
    "ENERGY & POWER SECTOR REGULATION",
    "MINING LAW & MINERAL CONCESSIONS",
    "CORPORATE & COMMERCIAL ADVISORY",
    "REGULATORY, WHITE-COLLAR & ENVIRONMENTAL COMPLIANCE",
    "CONSTITUTIONAL WRIT PETITIONS",
    "PUBLIC PROCUREMENT & TENDER DISPUTES"
  ],
  tribunals: [
    "HIGH COURT OF JHARKHAND",
    "NATIONAL COMPANY LAW TRIBUNAL (NCLT)",
    "NATIONAL COMPANY LAW APPELLATE TRIBUNAL (NCLAT)",
    "DEBT RECOVERY TRIBUNAL (DRT / DRAT)",
    "INCOME TAX APPELLATE TRIBUNAL (ITAT)",
    "NATIONAL GREEN TRIBUNAL (NGT)"
  ]
};

// Team Members (Partners from docx)
const CLASSIC_TEAM = [
  {
    name: "Hemant Jain",
    role: "Partner | Advocate, Jharkhand High Court",
    exp: "Litigation & Regulatory Specialist",
    specialty: "Taxation, Arbitration, Real Estate, Mining & Environmental Law",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Akchansh Kishore",
    role: "Partner | Advocate, Jharkhand High Court",
    exp: "Commercial Litigation Specialist",
    specialty: "Arbitration, Insolvency (IBC), Energy, Infrastructure & Banking",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  }
];

// Representative Clients from docx
const CLASSIC_CLIENTS = [
  { name: "Damodar Valley Corporation (DVC)", type: "Power Turnkey Project Arbitration" },
  { name: "DLF Home Developers Limited", type: "Commercial Suits & Turnkey Power Projects" },
  { name: "Dalmia Cement (Bharat) Limited", type: "Commercial Injunction Suits" },
  { name: "Adani Electricity", type: "Power Project Disputes & Land Acquisition" },
  { name: "NACOF (National Farmers' Cooperative)", type: "High Court Writ Jurisdiction" },
  { name: "IndiaMART InterMESH Limited", type: "Corporate Criminal Litigation Defense" },
  { name: "Prabhatam Buildwell Pvt Limited", type: "Securitization & Financial Restructuring" },
  { name: "Urmila International Pvt Ltd", type: "Tender Disputes & State Policy Challenge" },
  { name: "JKM Engineers Pvt Ltd", type: "Civil Turnkey Project Arbitration" },
  { name: "Leading Latvian Energy Company", type: "International Commercial Negotiations" },
  { name: "State Electricity Corporation", type: "Arbitration & Insolvency Proceedings" }
];
