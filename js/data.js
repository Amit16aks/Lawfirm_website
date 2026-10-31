/**
 * =========================================================================
 * 🏛️ PODDAR & ASSOCIATES — MASTER CONTENT REPOSITORY (NO-CODE CMS)
 * =========================================================================
 * Every single piece of text, headline, statistic, image, video, phone number,
 * email, address, and legal content can be edited right here!
 *
 * NO HTML OR CODE EDITING REQUIRED. Just change any value below!
 * =========================================================================
 */

const SITE_CONTENT = {
  // =========================================================================
  // 1. BRANDING & FIRM IDENTITY
  // =========================================================================
  branding: {
    name: "Jain Kishore Associates",
    shortName: "J&K",
    designation: "Advocates & Legal Consultants • Ranchi | Jharkhand | India",
    estYear: "",
    tagline: "Over 5 Decades of Uncompromising Legal Distinction & Judicial Stewardship",
    foundingPartners: "Mr. Binod Poddar & Mr. Biren Poddar",
    foundersDesignation: "Former Advocate General & Senior Advocates of Jharkhand",
    headerRegNotice: "Bar Council Regd. | Chambers Established 1969",
    headerCourtsNotice: "High Court of Jharkhand & Supreme Court of India"
  },

  // =========================================================================
  // 2. CONTACT DETAILS & DIRECT HOTLINES
  // =========================================================================
  contact: {
    phonePrimary: "+91 95256 00001",
    phoneSecondary: "+91 94311 01716",
    emailGeneral: "chambers@poddarandassociates.com",
    emailConsult: "advisory@poddarandassociates.com",
    whatsappNumber: "919525600001",
    whatsappDefaultMessage: "Hello Poddar & Associates Chambers, I would like to inquire regarding a legal matter.",
    workingHours: "Monday – Saturday: 09:30 AM – 08:30 PM",
    workingDays: "Monday to Saturday (Chambers Closed Sundays)",
    ranchiAddress: "Poddar Chambers, Court Road, Near High Court of Jharkhand, Ranchi - 834001, Jharkhand, India",
    delhiAddress: "Bar Association Chambers, Supreme Court of India, Tilak Marg, New Delhi - 110001, India",
    googleMapsEmbedUrl: ""
  },

  // =========================================================================
  // 3. CONSULTATION FORM & EMAIL NOTIFICATION SETTINGS
  // =========================================================================
  formConfig: {
    consultationNotificationEmail: "chambers@poddarandassociates.com", // <-- ADD YOUR CLIENT EMAIL HERE
    formSubmissionMode: "web3forms", // "web3forms" | "formspree" | "mailto" | "whatsapp"
    web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
    formspreeFormId: "",
    successMessageHeadline: "Case Assessment Brief Received",
    successMessageBody: "Your confidential case assessment has been logged for review by our Senior Counsel desk. A clerk will contact you within 24 business hours.",
    whatsappRedirectPrompt: "Would you also like to transmit this summary directly to our Chambers Desk via WhatsApp for priority review?"
  },

  // =========================================================================
  // 4. CENTRALIZED MEDIA & PHOTOGRAPHY REPOSITORY
  // =========================================================================
  media: {
    heroSlides: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80", // Supreme Court Pillars & Lady Justice
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=1600&q=80", // Law Library & Judicial Bookshelves
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1600&q=80", // Courtroom Bench & Gavel
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"  // Modern Corporate Legal Boardroom
    ],
    heroSlideIntervalMs: 6000,
    heroFallbackImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
    aboutChambersImage: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=1000&q=80",
    founderBinodPoddarImage: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
    founderBirenPoddarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    firmLogoUrl: "",
    faviconUrl: ""
  },

  // =========================================================================
  // 5. HERO SECTION (Headline, Badges, Metrics, CTAs)
  // =========================================================================
  hero: {
    prestigeBadge: "Founded in 1969 • Over 5 Decades of Distinction",
    headlineLine1: "Judicial Stewardship.",
    headlineGradient: "Forensic Advocacy.",
    headlineLine2: "Decades of Trust.",
    description: "Founded by Sr. Advocate Binod Poddar (Former Advocate General, Jharkhand), Poddar & Associates provides authoritative legal representation and strategic counsel across the Supreme Court of India, State High Courts, and National Tribunals.",
    ctaPrimaryText: "Explore Practice Areas",
    ctaPrimaryLink: "#practices",
    ctaSecondaryText: "Instruct Counsel",
    ctaSecondaryLink: "#consultation",
    metrics: [
      { number: "55+", label: "Years of Standing", isGold: false },
      { number: "12,000+", label: "Reported Matters", isGold: true },
      { number: "25+", label: "Senior Advocates & Bench", isGold: false },
      { number: "100%", label: "Bar Compliant", isGold: true }
    ]
  },

  // =========================================================================
  // 6. COURTS & TRIBUNALS TICKER
  // =========================================================================
  tickerItems: [
    "Supreme Court of India",
    "High Court of Jharkhand",
    "High Court of Patna",
    "National Company Law Tribunal (NCLT)",
    "NCLAT New Delhi",
    "Income Tax Appellate Tribunal (ITAT)",
    "Debt Recovery Tribunal (DRT)",
    "Central Administrative Tribunal (CAT)",
    "Mines Tribunal & NGT"
  ],

  // =========================================================================
  // 7. ABOUT / HERITAGE SECTION
  // =========================================================================
  aboutSection: {
    cardTag: "Institutional History",
    cardTitle: "Founded by Senior Advocates",
    cardSubtext: "Mr. Binod Poddar & Mr. Biren Poddar",
    sealYear: "1969",
    sealCity: "Founded In Ranchi",
    subtitle: "Heritage & Judicial Ethos",
    title: "Five Decades of Respected Standing at the Indian Bar",
    storyParagraph1: "Poddar & Associates (P&A) was established in 1969 by Senior Advocate Mr. Binod Poddar, who previously served as the Advocate General and Additional Advocate General for the State of Jharkhand. Commencing practice in 1967 and 1969 respectively, the founding partners built an institution anchored in rigorous jurisprudence and courtroom dignity.",
    storyParagraph2: "As a full-service law firm, we provide pragmatic, authoritative solutions to public sector enterprises, industrial corporations, commercial banks, and individuals. Our chambers combine veteran trial litigators with domain-specialist legal analysts.",
    pillars: [
      {
        icon: "scale",
        title: "Forensic Research",
        desc: "Exhaustive statutory indexing and case precedent synthesis for robust trial pleadings."
      },
      {
        icon: "shield-alert",
        title: "Trial-Ready Advocacy",
        desc: "Decades of regular courtroom appearances before Division & Constitutional Benches."
      },
      {
        icon: "check-circle-2",
        title: "Pragmatic Commercial Sense",
        desc: "Aligning legal remedies with client business continuity, mitigating risk and project delays."
      },
      {
        icon: "lock",
        title: "Strict Confidentiality",
        desc: "Rigorous client privilege standards and ethical stewardship under Bar Council canons."
      }
    ]
  },

  // =========================================================================
  // 8. PRACTICE AREAS SECTION HEADINGS
  // =========================================================================
  practiceSection: {
    subtitle: "Comprehensive Legal Services",
    title: "Practice Areas & Tribunals",
    description: "Filter through our core competencies or search specifically for statutes, forums, or dispute subjects.",
    searchPlaceholder: "Search by domain, statute (e.g. GST, MMDR, IBC)..."
  },

  // =========================================================================
  // 9. ATTORNEYS & LEGAL BENCH SECTION HEADINGS
  // =========================================================================
  teamSection: {
    subtitle: "Chambers Leadership & Senior Bench",
    title: "Senior Advocates & Counsel",
    description: "Distinguished jurists bringing decades of judicial precedent and forensic courtroom advocacy to every client matter."
  },

  // =========================================================================
  // 10. SECTORS SERVED SECTION HEADINGS
  // =========================================================================
  sectorsSection: {
    subtitle: "Industrial & Institutional Domain Expertise",
    title: "Strategic Counsel Across Key Sectors",
    description: "Bridging complex sector-specific statutory nuances with decisive constitutional and trial remedies."
  },

  // =========================================================================
  // 11. LEGAL INSIGHTS SECTION HEADINGS
  // =========================================================================
  insightsSection: {
    subtitle: "Jurisprudential Commentary & Case Analysis",
    title: "Chambers Legal Insights",
    description: "Thought leadership, statutory amendments analysis, and landmark rulings synthesized by our legal analysts."
  },

  // =========================================================================
  // 12. CONSULTATION / INSTRUCT COUNSEL SECTION
  // =========================================================================
  consultationSection: {
    subtitle: "Confidential Case Assessment",
    title: "Instruct Counsel on Your Matter",
    description: "Submit a confidential briefing to chambers. All inquiries are protected under attorney-client privilege.",
    privilegeNotice: "Submissions do not automatically create an attorney-client relationship until conflict clearance and formal vakalatnama are executed."
  },

  // =========================================================================
  // 13. CHAMBERS LOCATIONS SECTION HEADINGS
  // =========================================================================
  locationsSection: {
    subtitle: "Chambers & Judicial Liaison",
    title: "National Presence & Primary Chambers",
    description: "Headquartered adjacent to the High Court of Jharkhand with continuous liaison at the Supreme Court of India."
  },

  // =========================================================================
  // 14. FOOTER & COMPLIANCE
  // =========================================================================
  footer: {
    summary: "Established in 1969 by Senior Advocate Mr. Binod Poddar. Providing authoritative representation across the Supreme Court of India, State High Courts, and National Tribunals.",
    copyrightYear: "1969 - 2026",
    copyrightText: "Poddar & Associates. All rights reserved.",
    complianceNote: "Website strictly compliant with Rule 36 of Bar Council of India (BCI) Standards of Professional Conduct."
  },

  // =========================================================================
  // 15. BAR COUNCIL OF INDIA (BCI) DISCLAIMER MODAL
  // =========================================================================
  bciModal: {
    title: "Bar Council of India Disclaimer",
    subtitle: "Standards of Professional Conduct and Etiquette (Rule 36)",
    paragraphs: [
      "As per the norms set by the Bar Council of India, law firms are not authorized to solicit work and publicize. All the information, publications and legal commentary provided on www.poddarandassociates.com is for illustrative purposes only and should not be regarded or relied upon as legal advice. While the content provided is accurate as at the date of first publication, it is updated frequently when laws and regulations change.",
      "The site clearly states it is not intended to be a source of advertising or solicitation, nor is it an invitation for a lawyer-client relationship, and transmission, receipt or use of the site does not constitute or create a lawyer-client relationship.",
      "By clicking the “I Agree” button and retrieving information from the website, the user accepts that he/she is doing it out of free will and any reliance on the information contained on www.poddarandassociates.com is solely at the user's own risk. Specific legal advice should always be obtained before acting upon any information or commentary provided on the site. Further, the recipients of content from the site should not act, or refrain from acting, based upon any or all of the contents on the site."
    ],
    acceptButtonText: "I Agree",
    declineButtonText: "Decline & Exit"
  },

  // =========================================================================
  // 16. DETAILED FIRM STORY & TIMELINE (Used in about.html)
  // =========================================================================
  aboutPage: {
    heroHeadline: "Five Decades of Respected Standing at the Indian Bar",
    heroSubtitle: "Founded in 1969 by Senior Advocate Mr. Binod Poddar, former Advocate General of Jharkhand, our firm has stood as a bastion of trial readiness, commercial pragmatism, and constitutional jurisprudence for over five decades.",
    storyChronicleTitle: "Building an Institution of Legal Rigor",
    storyChronicleP1: "Poddar & Associates was formed with an explicit objective: to provide a single, unified institutional platform where clients—whether industrial conglomerates, state authorities, commercial banks, or private individuals—receive uncompromising trial representation coupled with pragmatic legal strategy.",
    storyChronicleP2: "Starting from Ranchi in 1969, the firm expanded its judicial footprint across Eastern India and regularly appears before Constitutional Benches at the Supreme Court of India. Our chambers have argued and formulated landmark rulings across Mining Concessions, GST disputes, Service Law, and Corporate Insolvency.",
    storyChronicleP3: "We believe judicial stewardship demands not only technical legal command, but forensic preparation. Every petition, counter-affidavit, and arbitral claim undergoes multi-tiered internal review before being tabled in open court.",
    timeline: [
      {
        year: "1967",
        title: "Founding Practice Commenced",
        desc: "Mr. Binod Poddar commenced legal practice at the Patna High Court (Ranchi Bench), specializing in corporate taxation and writ petitions."
      },
      {
        year: "1969",
        title: "Formal Establishment of P&A",
        desc: "Poddar & Associates formally established in Ranchi by Mr. Binod Poddar and Mr. Biren Poddar, creating chambers dedicated to commercial and constitutional law."
      },
      {
        year: "2000",
        title: "Formation of Jharkhand State",
        desc: "With the bifurcation of Bihar and creation of the High Court of Jharkhand, P&A led key inaugural constitutional references for state PSUs and industrial giants."
      },
      {
        year: "2013",
        title: "Advocate General Stewardship",
        desc: "Senior Advocate Binod Poddar appointed as the Advocate General for the State of Jharkhand, representing the State before Constitutional Benches."
      },
      {
        year: "Present",
        title: "Full-Service National Practice",
        desc: "Chambers comprising 25+ senior advocates, partners, and associates arguing across Supreme Court, High Courts, NCLAT, CAT, and Commercial Tribunals."
      }
    ],
    coreValues: [
      {
        title: "Integrity",
        desc: "Strict adherence to professional ethics and statutory honesty."
      },
      {
        title: "Humility",
        desc: "Approaching every case with deep respect for judicial processes."
      },
      {
        title: "Kindness",
        desc: "Empathy and dedication toward every client's fundamental rights."
      }
    ]
  },

  // =========================================================================
  // 17. SUBPAGE HEADERS (practices.html, team.html, contact.html)
  // =========================================================================
  practicesPage: {
    heroTitle: "Practice Areas & Jurisdictions",
    heroSubtitle: "Comprehensive courtroom litigation, appellate dispute resolution, and regulatory advisory across key forums in India."
  },

  teamPage: {
    heroTitle: "Senior Advocates & Legal Bench",
    heroSubtitle: "Distinguished jurists bringing decades of judicial precedent and forensic courtroom advocacy to every client matter."
  },

  contactPage: {
    heroTitle: "Chambers & Legal Consultation",
    heroSubtitle: "Connecting clients with our principal chambers in Ranchi (High Court of Jharkhand) and liaison desk at the Supreme Court of India, New Delhi."
  }
};


// =========================================================================
// Backwards Compatibility Bridge: Exposes FIRM_CONFIG to existing code
// =========================================================================
const FIRM_CONFIG = {
  ...SITE_CONTENT.branding,
  ...SITE_CONTENT.contact,
  ...SITE_CONTENT.formConfig,
  media: SITE_CONTENT.media,
  get heroMediaSlides() { return this.media.heroSlides; },
  get heroSlideIntervalMs() { return this.media.heroSlideIntervalMs; },
  get heroBackgroundImage() { return this.media.heroFallbackImage; },
  get aboutSectionImage() { return this.media.aboutChambersImage; }
};

const PRACTICE_AREAS = [
  {
    id: "taxation-gst",
    category: "tax-regulatory",
    categoryLabel: "Taxation & Regulatory",
    icon: "receipt-text",
    title: "Direct, Indirect Taxation & GST",
    summary: "Strategic tax litigation, departmental adjudication, and advisory across Income Tax, GST, Central Excise, and legacy VAT regimes.",
    fullDescription: "Poddar & Associates holds premier reputation in state and national taxation jurisprudence. From constitutional challenges to tax statues, high-value transfer pricing disputes, search and seizure proceedings, to GST refund audits and tribunal appeals, our senior advocates provide forensic and unyielding representation before the Income Tax Appellate Tribunal (ITAT), Commercial Tax Tribunals, High Courts, and the Supreme Court.",
    statutes: ["Income Tax Act, 1961", "Central Goods & Services Tax (CGST) Act, 2017", "Customs Act, 1962", "Jharkhand VAT & Entry Tax Acts"],
    tribunals: ["Income Tax Appellate Tribunal (ITAT)", "Commercial Taxes Tribunal", "High Court of Jharkhand", "Supreme Court of India"],
    highlights: ["Represented Fortune 500 & PSU enterprises in landmark multi-crore tax assessments.", "Over 500+ reported judicial precedents in national law journals (CTR, ITR, TAXMANN)."]
  },
  {
    id: "mining-natural-resources",
    category: "mining-industrial",
    categoryLabel: "Mining & Industrial",
    icon: "pickaxe",
    title: "Mining Law & Mineral Concessions",
    summary: "Specialized advisory on major & minor mineral leases, auction compliance, royalty disputes, and forest/environmental clearances.",
    fullDescription: "With Jharkhand as India's mineral heartland, our firm has steered industry-defining mining litigation for five decades. We assist mining conglomerates, captive leaseholders, and beneficiation plants on tender allocations, District Mineral Foundation (DMF) levies, environmental clearance litigation before the National Green Tribunal (NGT), and mineral transport regulations.",
    statutes: ["Mines and Minerals (Development and Regulation) Act (MMDR), 1957", "Mineral Concession Rules, 1960", "Forest (Conservation) Act, 1980", "Environment Protection Act, 1986"],
    tribunals: ["Mines Tribunal (Ministry of Mines)", "National Green Tribunal (NGT)", "High Courts", "Supreme Court of India"],
    highlights: ["Counsel for major coal, iron ore, and bauxite concessionaires across Eastern India.", "Pioneered constitutional writ arguments on retrospective royalty impositions."]
  },
  {
    id: "commercial-arbitration",
    category: "dispute-arbitration",
    categoryLabel: "Dispute & Arbitration",
    icon: "scale",
    title: "Commercial Arbitration & Dispute Resolution",
    summary: "Domestic and international arbitrations, enforcement of arbitral awards, interim relief under Section 9, and appointment of arbitrators.",
    fullDescription: "Our arbitration practice represents infrastructure EPC contractors, government bodies, and corporate consortiums in high-value, complex contract arbitrations. We handle claims arising from liquidated damages, project delays, price escalation clauses, and concession agreements, coupled with Section 34 challenge proceedings before appellate courts.",
    statutes: ["Arbitration and Conciliation Act, 1996 (as amended)", "Indian Contract Act, 1872", "Commercial Courts Act, 2015"],
    tribunals: ["Institutional & Ad-hoc Arbitral Tribunals", "Commercial Appellate Divisions", "High Courts"],
    highlights: ["Handled EPC and concession disputes exceeding ₹2,500 Crores in aggregate value.", "Proven track record in securing urgent Section 9 emergency interim injunctions."]
  },
  {
    id: "corporate-tenders",
    category: "corporate-commercial",
    categoryLabel: "Corporate & Commercial",
    icon: "briefcase",
    title: "Tender Matters & Public Procurement",
    summary: "Judicial review of arbitrary tender disqualifications, reverse auction disputes, bid drafting, and government contract litigation.",
    fullDescription: "Public procurement in state agencies and PSUs demands razor-sharp constitutional scrutiny. We represent bidders and government entities in writ petitions challenging arbitrary tender conditions, wrongful blacklisting orders, forfeiture of Earnest Money Deposits (EMD), and biased bid evaluation under Article 226 of the Constitution of India.",
    statutes: ["Constitution of India (Articles 14, 19(1)(g) & 226)", "Indian Contract Act, 1872", "Public Procurement Policies"],
    tribunals: ["High Court Writ Benches", "Supreme Court of India", "Departmental Appellate Authorities"],
    highlights: ["Successfully overturned unconstitutional disqualifications in mega highway and railway tenders.", "Regular counsel for major infrastructure bidders in Eastern India."]
  },
  {
    id: "banking-insolvency",
    category: "banking-debt",
    categoryLabel: "Banking & Debt Recovery",
    icon: "landmark",
    title: "Banking, SARFAESI & Insolvency (IBC)",
    summary: "Robust defense and recovery advocacy before DRT, DRAT, and NCLT under the Insolvency and Bankruptcy Code and SARFAESI Act.",
    fullDescription: "We provide comprehensive legal counsel to scheduled commercial banks, non-banking financial companies (NBFCs), asset reconstruction companies (ARCs), and corporate debtors. Our trial advocates aggressively represent clients in Section 7 & 9 CIRP proceedings before NCLT, Securitization applications before DRT, and debt restructuring negotiations.",
    statutes: ["Insolvency and Bankruptcy Code, 2016", "SARFAESI Act, 2002", "Recovery of Debts Due to Banks and Financial Institutions (RDB) Act, 1993"],
    tribunals: ["National Company Law Tribunal (NCLT)", "National Company Law Appellate Tribunal (NCLAT)", "Debt Recovery Tribunal (DRT)", "DRAT"],
    highlights: ["Advised in restructuring and resolution processes for prominent industrial units.", "Defended commercial borrowers against unauthorized asset possession notices."]
  },
  {
    id: "real-estate-infra",
    category: "corporate-commercial",
    categoryLabel: "Corporate & Commercial",
    icon: "building-2",
    title: "Real Estate & Infrastructure Law",
    summary: "Due diligence, land title verification, conveyance deed drafting, RERA compliance, and land acquisition litigation.",
    fullDescription: "Real estate in Jharkhand and Eastern India involves complex tenurial laws including the Chota Nagpur Tenancy (CNT) Act and Santhal Parganas Tenancy (SPT) Act. We provide authoritative title search reports, joint venture agreements, commercial lease structuring, and representation before RERA Authorities and Appellate Tribunals.",
    statutes: ["Chota Nagpur Tenancy Act, 1908 (CNT Act)", "Real Estate (Regulation and Development) Act, 2016 (RERA)", "Transfer of Property Act, 1882", "Right to Fair Compensation in Land Acquisition Act, 2013"],
    tribunals: ["Jharkhand Real Estate Regulatory Authority (J-RERA)", "RERA Appellate Tribunal", "Revenue Courts & Board of Revenue"],
    highlights: ["Conducted title search audits for townships, IT parks, and industrial corridors.", "Deep expertise in tribal tenancy protection laws and lawful commercial leasing."]
  },
  {
    id: "service-administrative",
    category: "constitutional-service",
    categoryLabel: "Constitutional & Service",
    icon: "shield-alert",
    title: "Service Matters & Administrative Law",
    summary: "Litigation regarding senior appointments, seniority disputes, pension entitlements, departmental inquiries, and disciplinary proceedings.",
    fullDescription: "Representing civil servants, judicial officers, public sector executives, and university faculties before the Central Administrative Tribunal (CAT) and State High Courts. Our attorneys are renowned for crafting meticulous pleadings that protect career tenure, constitutional safeguards under Article 311, and fair promotions.",
    statutes: ["Administrative Tribunals Act, 1985", "Central Civil Services (Classification, Control and Appeal) Rules", "Constitution of India (Articles 16 & 311)"],
    tribunals: ["Central Administrative Tribunal (CAT)", "State Educational Tribunal", "High Courts (Division & Full Benches)"],
    highlights: ["Protected pensionary rights and seniority rosters for thousands of state employees.", "Defended against wrongful dismissal in departmental vigilance inquiries."]
  },
  {
    id: "industrial-labour",
    category: "mining-industrial",
    categoryLabel: "Mining & Industrial",
    icon: "hard-hat",
    title: "Industrial Relations & Labour Laws",
    summary: "Strategic management of union collective bargaining, industrial disputes, retrenchment compliance, and statutory audits under EPF & ESI.",
    fullDescription: "Guiding major manufacturing plants, steel mills, and mining units in navigating intricate labour codes and trade union negotiations. We handle litigation before Labour Courts and Industrial Tribunals regarding wage accords, strikes, lockouts, and prosecution notices under the Factories Act.",
    statutes: ["Industrial Disputes Act, 1947", "Factories Act, 1948", "Employees' Provident Funds & Misc. Provisions Act, 1952", "Employees' State Insurance (ESI) Act, 1948"],
    tribunals: ["Labour Court & Industrial Tribunal", "Employees' Provident Fund Appellate Tribunal (CGIT)", "High Courts"],
    highlights: ["Resolved protracted trade union disputes and negotiated wage settlements.", "Successfully quashed arbitrary penalty citations under Section 7A of the EPF Act."]
  },
  {
    id: "civil-criminal-litigation",
    category: "dispute-arbitration",
    categoryLabel: "Dispute & Arbitration",
    icon: "gavel",
    title: "High-Stakes Civil & White-Collar Defense",
    summary: "Original suits, specific performance, probate, corporate fraud, PMLA prevention of money laundering, and economic offenses defense.",
    fullDescription: "From complex civil partition and title suits to high-profile white-collar economic offenses prosecuted by the Enforcement Directorate (ED), Central Bureau of Investigation (CBI), and Serious Fraud Investigation Office (SFIO). Our senior bench delivers formidable courtroom advocacy and trial strategy.",
    statutes: ["Code of Civil Procedure (CPC), 1908", "Code of Criminal Procedure (CrPC) / Bharatiya Nagarik Suraksha Sanhita (BNSS)", "Prevention of Money Laundering Act (PMLA), 2002", "Prevention of Corruption Act, 1988"],
    tribunals: ["Special CBI & PMLA Courts", "Principal District & Sessions Courts", "High Court of Jharkhand", "Supreme Court of India"],
    highlights: ["Successfully secured anticipatory bails and quashing of FIRs in multi-jurisdiction matters.", "Unblemished track record in complex commercial partition and equity suits."]
  }
];

const ATTORNEYS = [
  {
    id: "binod-poddar",
    name: "Binod Poddar",
    role: "Founding Partner & Senior Advocate",
    experience: "57+ Years at the Bar",
    qualifications: "B.A., LL.B. | Former Advocate General, State of Jharkhand",
    description: "One of the most distinguished legal stalwarts of Eastern India. Former Advocate General and Additional Advocate General of Jharkhand. Commenced practice in 1967 and founded Poddar & Associates in 1969. Renowned authority on Constitutional, Taxation, and Mining Jurisprudence.",
    courts: "Supreme Court of India, High Court of Jharkhand, High Court of Patna",
    specializations: ["Constitutional Law", "Direct & Indirect Tax", "Mining Concessions", "Arbitration"],
    email: "binod.poddar@poddarandassociates.com",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "biren-poddar",
    name: "Biren Poddar",
    role: "Senior Partner & Senior Advocate",
    experience: "55+ Years at the Bar",
    qualifications: "B.Com., LL.B. | Senior Advocate",
    description: "Co-founder of the firm who commenced law practice in 1969. Veteran counsel in Commercial Disputes, Company Law, Industrial Tribunals, and Public Law Litigations across High Courts and National Benches.",
    courts: "High Court of Jharkhand, NCLT, Commercial Benches",
    specializations: ["Company Law", "Commercial Litigation", "Labour & Industrial Law", "Banking"],
    email: "biren.poddar@poddarandassociates.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "piyush-poddar",
    name: "Piyush Poddar",
    role: "Managing Partner",
    experience: "24+ Years Experience",
    qualifications: "B.A. LL.B. (Hons.), LL.M. (Corporate & Commercial)",
    description: "Heads the Corporate, Arbitration, and High Court Litigation departments. Regularly appears before the Supreme Court, High Courts, and NCLAT. Trusted advisor to major industrial houses and state corporations.",
    courts: "Supreme Court of India, Jharkhand High Court, Delhi High Court, NCLAT",
    specializations: ["Arbitration", "Public Tenders", "Insolvency (IBC)", "Cross-Border Transactions"],
    email: "piyush.poddar@poddarandassociates.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "manav-poddar",
    name: "Manav Poddar",
    role: "Partner – Taxation & Regulatory",
    experience: "18+ Years Experience",
    qualifications: "B.B.A. LL.B., Chartered Tax Counsel",
    description: "Specializes in complex Goods & Services Tax (GST) litigation, customs disputes, and direct tax appellate advocacy. Argues regularly before the ITAT and High Court tax division benches.",
    courts: "High Court of Jharkhand, ITAT, Commercial Tax Tribunal",
    specializations: ["GST Litigation", "Income Tax Appeals", "Transfer Pricing", "Customs & Excise"],
    email: "manav.poddar@poddarandassociates.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "vikas-pandey",
    name: "Vikas Pandey",
    role: "Senior Associate – Litigation",
    experience: "16+ Years Experience",
    qualifications: "M.A., LL.B.",
    description: "Seasoned litigator leading criminal trial defense, civil appellate matters, and municipal disputes with over a decade and a half of courtroom trial experience.",
    courts: "High Court of Jharkhand, District & Sessions Courts",
    specializations: ["Criminal Defense", "Civil Appeals", "Property Disputes", "Municipal Law"],
    email: "vikas.pandey@poddarandassociates.com",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "deepak-sinha",
    name: "Deepak Sinha",
    role: "Senior Associate – Service & Administrative",
    experience: "15+ Years Experience",
    qualifications: "B.Sc., LL.B.",
    description: "Handles complex service jurisprudence, central and state administrative tribunal hearings, pension litigation, and civil service matters.",
    courts: "Central Administrative Tribunal (CAT), High Court of Jharkhand",
    specializations: ["Service Matters", "CAT Litigations", "Education Tribunals", "Disciplinary Defense"],
    email: "deepak.sinha@poddarandassociates.com",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  }
];

const SECTORS_ADVISED = [
  { name: "Mining & Heavy Minerals", icon: "pickaxe", desc: "Coal, Iron Ore, Bauxite Leaseholders & Mining EPCs" },
  { name: "Banking & Financial Institutions", icon: "landmark", desc: "Nationalized Banks, NBFCs, ARCs & Cooperative Credit Societies" },
  { name: "Manufacturing & Steel Plants", icon: "factory", desc: "Integrated Steel Mills, Sponge Iron Units & Rolling Mills" },
  { name: "Infrastructure, Roads & Energy", icon: "train-track", desc: "Highway Developers, Thermal Power Projects & Public Concessions" },
  { name: "Public Sector Undertakings (PSUs)", icon: "building", desc: "State Development Authorities, Mining Boards & Power Corporations" },
  { name: "Real Estate & Commercial Builders", icon: "building-2", desc: "Commercial Complexes, Township Promoters & Land Holding Trusts" }
];

const LEGAL_INSIGHTS = [
  {
    id: "gst-input-tax-credit-ruling",
    date: "October 2026",
    tag: "Tax Alert",
    title: "High Court Quashes Arbitrary SCNs Denying Input Tax Credit (ITC) Without Supply Fraud Proof",
    excerpt: "Detailed commentary on the recent landmark division bench ruling restraining revenue authorities from coercively blocking electronic credit ledgers.",
    readTime: "4 min read",
    author: "Manav Poddar, Partner"
  },
  {
    id: "mining-lease-amendments-analysis",
    date: "September 2026",
    tag: "Mining Jurisprudence",
    title: "Navigating the 2026 MMDR Regulatory Framework & Captive Lease Transfer Guidelines",
    excerpt: "Strategic implications for major mineral concessionaires facing statutory audit renewals and district mineral fund assessments.",
    readTime: "6 min read",
    author: "Binod Poddar, Senior Advocate"
  },
  {
    id: "arbitration-section-9-relief",
    date: "August 2026",
    tag: "Commercial Arbitration",
    title: "Securing Emergency Injunctions Under Section 9 in High-Value Infrastructure Contracts",
    excerpt: "Procedural roadmap for infrastructure concessionaires facing wrongful invocation of performance bank guarantees.",
    readTime: "5 min read",
    author: "Piyush Poddar, Managing Partner"
  }
];
