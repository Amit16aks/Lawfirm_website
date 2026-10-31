/**
 * =========================================================================
 * 🏛️ JAIN KISHORE ASSOCIATES — MASTER CONTENT REPOSITORY (NO-CODE CMS)
 * 📂 REFERENCE FILE: example_data.js
 * =========================================================================
 * This file serves as the definitive reference guide and filled template.
 * Every single piece of text, headline, contact number, email, address,
 * logo, photo, practice area, and partner biography is configured below.
 *
 * FOR EACH FIELD, THREE QUESTIONS ARE ANSWERED:
 * 1. 📌 WHAT IT IS & WHERE IT SHOWS UP
 * 2. ❓ WHAT TO ASK THE CLIENT FOR THIS FIELD
 * 3. ⚠️ WHAT HAPPENS IF LEFT BLANK
 * =========================================================================
 */

const SITE_CONTENT = {

  // =========================================================================
  // 1. BRANDING & FIRM IDENTITY
  // =========================================================================
  branding: {
    /**
     * FIELD: name
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: The official legal/registered name of the law firm.
     *    Shows in the header, footer, page titles, and legal compliance notices.
     * ❓ WHAT TO ASK CLIENT: "What is the official registered name of your firm?"
     * ⚠️ IF LEFT BLANK: Defaults to "Jain Kishore Associates" or leaves header text blank.
     */
    name: "Jain Kishore Associates",

    /**
     * FIELD: shortName
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Short abbreviation used on mobile views, small badges, and crest watermarks.
     * ❓ WHAT TO ASK CLIENT: "What is your firm's preferred abbreviation? (e.g. JKA or J&K)"
     * ⚠️ IF LEFT BLANK: Mobile badges will either omit the acronym or show nothing.
     */
    shortName: "JKA",

    /**
     * FIELD: designation
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Professional subtitle appearing directly under the firm name in the header.
     * ❓ WHAT TO ASK CLIENT: "What is your firm's professional designation? (e.g. Advocates & Legal Consultants)"
     * ⚠️ IF LEFT BLANK: The secondary line under the firm logo will simply be omitted.
     */
    designation: "Advocates & Legal Consultants • Ranchi | Jharkhand | India",

    /**
     * FIELD: estYear
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: The year the firm or practice was established (e.g. 2018 or 2020).
     *    Powers "Estd. YYYY" badges, vintage seals, and experience counters.
     * ❓ WHAT TO ASK CLIENT: "In which year was your firm or chambers formally founded?"
     * ⚠️ IF LEFT BLANK: Badges will display without the establishment year.
     */
    estYear: "2018",

    /**
     * FIELD: tagline
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: High-level ethos/motto displayed in metadata, footer, and hero subtext.
     * ❓ WHAT TO ASK CLIENT: "What is your firm's core motto or defining ethos?"
     * ⚠️ IF LEFT BLANK: Hero will use default trial-advocacy description.
     */
    tagline: "Strategic Courtroom Advocacy & Multi-Forum Commercial Dispute Resolution",

    /**
     * FIELD: foundingPartners
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: The names of the founding partners, displayed on the heritage card.
     * ❓ WHAT TO ASK CLIENT: "Who are the founding partners of the firm?"
     * ⚠️ IF LEFT BLANK: The heritage card will display generic leadership text.
     */
    foundingPartners: "Mr. Hemant Jain & Mr. Akchansh Kishore",

    /**
     * FIELD: foundersDesignation
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Professional standing / court enrollment of the founders.
     * ❓ WHAT TO ASK CLIENT: "What are the partners' court affiliations? (e.g. Advocates, Jharkhand High Court)"
     * ⚠️ IF LEFT BLANK: Omitted from the heritage seal card.
     */
    foundersDesignation: "Advocates, High Court of Jharkhand",

    /**
     * FIELD: headerRegNotice
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Regulatory badge displayed in the very top utility strip of the website.
     * ❓ WHAT TO ASK CLIENT: "Do you want a statutory bar notice at the top bar?"
     * ⚠️ IF LEFT BLANK: Shows default "Bar Council Compliant Chambers".
     */
    headerRegNotice: "Bar Council Compliant Chambers | Ranchi, Jharkhand",

    /**
     * FIELD: headerCourtsNotice
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Right-hand notice in top utility strip showing primary jurisdictions.
     * ❓ WHAT TO ASK CLIENT: "Which primary courts do you want highlighted in the top bar?"
     * ⚠️ IF LEFT BLANK: Omitted from top utility strip.
     */
    headerCourtsNotice: "High Court of Jharkhand & National Commercial Tribunals"
  },

  // =========================================================================
  // 2. CONTACT DETAILS & DIRECT HOTLINES
  // =========================================================================
  contact: {
    /**
     * FIELD: phonePrimary
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Primary phone number for client inquiries and chambers desk.
     *    Clickable on mobile via `tel:`.
     * ❓ WHAT TO ASK CLIENT: "What is your primary phone number for receiving client calls?"
     * ⚠️ IF LEFT BLANK: Primary phone links in header and footer will be disabled.
     */
    phonePrimary: "+91 94727 72994",

    /**
     * FIELD: phoneSecondary
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Secondary / alternate advocate telephone number.
     * ❓ WHAT TO ASK CLIENT: "Do you have a second phone number or alternate advocate desk?"
     * ⚠️ IF LEFT BLANK: Only the primary phone number will appear.
     */
    phoneSecondary: "+91 70336 19737",

    /**
     * FIELD: emailGeneral
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: General chambers email address displayed publicly on the website.
     * ❓ WHAT TO ASK CLIENT: "What is the official email address for receiving case briefs?"
     * ⚠️ IF LEFT BLANK: Email links will fall back to partner direct email.
     */
    emailGeneral: "hemant.nusrl@gmail.com",

    /**
     * FIELD: emailConsult
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Dedicated email for confidential case evaluations and consultations.
     * ❓ WHAT TO ASK CLIENT: "Do you have a specific email for new inquiries or second partner email?"
     * ⚠️ IF LEFT BLANK: Uses `emailGeneral`.
     */
    emailConsult: "akchanshkishore@gmail.com",

    /**
     * FIELD: whatsappNumber
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: International format mobile number (without '+' or spaces) for the floating WhatsApp button.
     * ❓ WHAT TO ASK CLIENT: "Which mobile number has WhatsApp active for quick case inquiries?"
     * ⚠️ IF LEFT BLANK: Floating WhatsApp button will hide or use primary phone digits.
     */
    whatsappNumber: "919472772994",

    /**
     * FIELD: whatsappDefaultMessage
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Pre-filled text that opens when a client clicks the WhatsApp button.
     * ❓ WHAT TO ASK CLIENT: "What pre-filled message would you like users to send on WhatsApp?"
     * ⚠️ IF LEFT BLANK: Defaults to standard chambers inquiry greeting.
     */
    whatsappDefaultMessage: "Hello Jain Kishore Associates Chambers, I would like to inquire regarding a legal matter.",

    /**
     * FIELD: workingHours
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Chamber operational hours displayed on Contact page and Footer.
     * ❓ WHAT TO ASK CLIENT: "What are your chambers' operational consultation hours?"
     * ⚠️ IF LEFT BLANK: Shows standard "10:00 AM – 08:00 PM".
     */
    workingHours: "Monday – Saturday: 10:00 AM – 08:00 PM",

    /**
     * FIELD: workingDays
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Operational days of chambers.
     * ❓ WHAT TO ASK CLIENT: "Which days are chambers open for in-person consultation?"
     * ⚠️ IF LEFT BLANK: Shows "Monday to Saturday (Chambers Closed Sundays)".
     */
    workingDays: "Monday to Saturday (Chambers Closed Sundays)",

    /**
     * FIELD: ranchiAddress
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Full physical address of the principal chambers in Ranchi.
     * ❓ WHAT TO ASK CLIENT: "What is the complete physical address of your office with PIN code?"
     * ⚠️ IF LEFT BLANK: Footer and Contact page will display Ranchi city only.
     */
    ranchiAddress: "First Floor, H-143, Harmu Housing Colony, Beside Harmu Substation, Harmu, Ranchi, Jharkhand - 834002",

    /**
     * FIELD: delhiAddress
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Secondary office or Delhi appellate liaison desk address.
     * ❓ WHAT TO ASK CLIENT: "Do you have an office/liaison desk in New Delhi or other cities?"
     * ⚠️ IF LEFT BLANK: Only the principal Ranchi chambers will be displayed.
     */
    delhiAddress: "Appellate & Commercial Tribunals Liaison, New Delhi, India",

    /**
     * FIELD: googleMapsEmbedUrl
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Google Maps embed `src` URL for the interactive map on `contact.html`.
     * ❓ WHAT TO ASK CLIENT: "Do you have a Google Maps business location link for your office?"
     * ⚠️ IF LEFT BLANK: The map automatically shows a clean interactive Harmu, Ranchi map embed.
     */
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.8!2d85.305!3d23.355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDIxJzE4LjAiTiA4NcKwMTgnMTguMCJF!5e0!3m2!1sen!2sin!4v1"
  },

  // =========================================================================
  // 3. CONSULTATION FORM & EMAIL NOTIFICATION SETTINGS
  // =========================================================================
  formConfig: {
    /**
     * FIELD: consultationNotificationEmail
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: The exact destination email address where incoming consultation forms will arrive.
     * ❓ WHAT TO ASK CLIENT: "To which email address should new client website inquiries be delivered?"
     * ⚠️ IF LEFT BLANK: Submissions will route to the general contact email.
     */
    consultationNotificationEmail: "hemant.nusrl@gmail.com",

    /**
     * FIELD: formSubmissionMode
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Dispatch engine for form submissions ("web3forms" | "formspree" | "whatsapp").
     * ❓ WHAT TO ASK CLIENT: "Do you have a free Web3Forms or Formspree access key, or prefer WhatsApp routing?"
     * ⚠️ IF LEFT BLANK: Defaults to "whatsapp" + client-side notification.
     */
    formSubmissionMode: "web3forms",

    /**
     * FIELD: web3formsAccessKey
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Free API access key from web3forms.com to deliver emails without server code.
     * ❓ WHAT TO ASK CLIENT: "Provide Web3Forms access key (takes 30 seconds at web3forms.com)."
     * ⚠️ IF LEFT BLANK: Form prompts user to transmit message directly via WhatsApp.
     */
    web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",

    /**
     * FIELD: formspreeFormId
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Optional alternative Formspree form ID (if client already uses Formspree).
     * ❓ WHAT TO ASK CLIENT: "Do you have an existing Formspree form ID?"
     * ⚠️ IF LEFT BLANK: Web3forms or WhatsApp mode is used.
     */
    formspreeFormId: "",

    /**
     * FIELD: successMessageHeadline
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Success banner headline shown after a user submits the consultation form.
     * ❓ WHAT TO ASK CLIENT: "What confirmation title would you like displayed after form submission?"
     * ⚠️ IF LEFT BLANK: Shows "Case Assessment Brief Received".
     */
    successMessageHeadline: "Case Assessment Brief Received",

    /**
     * FIELD: successMessageBody
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Explanation paragraph shown after form submission.
     * ❓ WHAT TO ASK CLIENT: "What instructions or SLA should be shown to the client after submission?"
     * ⚠️ IF LEFT BLANK: Shows standard 24 business hours review notice.
     */
    successMessageBody: "Your confidential case briefing has been received. Our chambers desk will review your details and contact you within 24 business hours.",

    /**
     * FIELD: whatsappRedirectPrompt
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Confirmation modal prompt offering to open WhatsApp immediately with the case brief.
     * ❓ WHAT TO ASK CLIENT: "Would you like the website to ask users if they want to also send the inquiry via WhatsApp?"
     * ⚠️ IF LEFT BLANK: WhatsApp prompt runs with default text.
     */
    whatsappRedirectPrompt: "Would you also like to transmit this summary directly to our Chambers Desk via WhatsApp for priority review?"
  },

  // =========================================================================
  // 4. CENTRALIZED MEDIA & PHOTOGRAPHY REPOSITORY
  // =========================================================================
  media: {
    /**
     * FIELD: heroSlides
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Array of image or video URLs that rotate in an infinite background carousel on the homepage hero.
     * ❓ WHAT TO ASK CLIENT: "Do you have high-resolution photos or videos of your chambers or High Court?"
     * ⚠️ IF LEFT BLANK: Falls back to premium curated high-resolution legal architectural photography.
     */
    heroSlides: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80", // Lady Justice & Supreme Court Colonnade
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=1600&q=80", // Law Library & Judicial Statutes
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1600&q=80", // Courtroom Bench & Gavel
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"  // Modern Commercial Boardroom
    ],

    /**
     * FIELD: heroSlideIntervalMs
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Time each background hero image stays before smoothly transitioning to the next (in milliseconds).
     * ❓ WHAT TO ASK CLIENT: "How many seconds should each hero slide remain visible? (e.g. 6 seconds = 6000)"
     * ⚠️ IF LEFT BLANK: Defaults to 6000ms (6 seconds).
     */
    heroSlideIntervalMs: 6000,

    /**
     * FIELD: heroFallbackImage
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Static background image shown if carousel is disabled or on slow mobile connections.
     * ❓ WHAT TO ASK CLIENT: "Which single hero image is your top preference?"
     * ⚠️ IF LEFT BLANK: Uses first slide from `heroSlides`.
     */
    heroFallbackImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",

    /**
     * FIELD: aboutChambersImage
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Featured photography shown on the Homepage About section and AboutUs subpage.
     * ❓ WHAT TO ASK CLIENT: "Do you have a photo of your office library, desk, or building?"
     * ⚠️ IF LEFT BLANK: Uses premium curated library photography.
     */
    aboutChambersImage: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=1000&q=80",

    /**
     * FIELD: partnerHemantJainImage
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Portrait headshot of Partner Mr. Hemant Jain on the Team page and About page.
     * ❓ WHAT TO ASK CLIENT: "Please provide a high-resolution professional headshot of Mr. Hemant Jain."
     * ⚠️ IF LEFT BLANK: Displays a sophisticated professional placeholder portrait.
     */
    partnerHemantJainImage: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",

    /**
     * FIELD: partnerAkchanshKishoreImage
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Portrait headshot of Partner Mr. Akchansh Kishore on the Team page and About page.
     * ❓ WHAT TO ASK CLIENT: "Please provide a high-resolution professional headshot of Mr. Akchansh Kishore."
     * ⚠️ IF LEFT BLANK: Displays a sophisticated professional placeholder portrait.
     */
    partnerAkchanshKishoreImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",

    /**
     * FIELD: firmLogoUrl
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: File path or web URL for the main firm logo image.
     *    Use "images/LOGO_2.png" for the primary stacked logo or "images/LOGO_1.png" for circular crest.
     * ❓ WHAT TO ASK CLIENT: "Do you have your logo in transparent PNG format?" (Client provided LOGO_1, 2, 3!)
     * ⚠️ IF LEFT BLANK: Header renders high-end SVG crest with stylized typography.
     */
    firmLogoUrl: "images/LOGO_2.png",

    /**
     * FIELD: faviconUrl
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Browser tab icon URL. Use the circular crest "images/LOGO_1.png".
     * ❓ WHAT TO ASK CLIENT: "Do you have a square icon version of your logo?"
     * ⚠️ IF LEFT BLANK: Uses default scales-of-justice favicon.
     */
    faviconUrl: "images/LOGO_1.png"
  },

  // =========================================================================
  // 5. HERO SECTION (Headline, Badges, Metrics, CTAs)
  // =========================================================================
  hero: {
    /**
     * FIELD: prestigeBadge
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Pill badge hovering above the main headline in the Hero section.
     * ❓ WHAT TO ASK CLIENT: "What milestone or standing highlight should sit above the main title?"
     * ⚠️ IF LEFT BLANK: Shows "Advocates & Legal Consultants • Ranchi, Jharkhand".
     */
    prestigeBadge: "Advocates & Legal Consultants • Jharkhand High Court & National Tribunals",

    /**
     * FIELD: headlineLine1 / headlineGradient / headlineLine2
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: The 3 components of the big cinematic hero headline.
     *    `headlineGradient` receives the warm gold shimmer effect.
     * ❓ WHAT TO ASK CLIENT: "What is your main 3-phrase impact statement for the homepage?"
     * ⚠️ IF LEFT BLANK: Uses "Strategic Representation. / Trial Advocacy. / Multi-Forum Remedies."
     */
    headlineLine1: "Litigation Excellence.",
    headlineGradient: "Courtroom Precision.",
    headlineLine2: "Strategic Commercial Counsel.",

    /**
     * FIELD: description
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: The primary 2-sentence summary paragraph beneath the Hero headline.
     * ❓ WHAT TO ASK CLIENT: "In 2 sentences, how do you introduce your practice to corporate clients?"
     * ⚠️ IF LEFT BLANK: Uses standard firm overview.
     */
    description: "Jain Kishore Associates is a litigation-focused law firm in Ranchi, Jharkhand, providing authoritative courtroom advocacy, commercial dispute resolution, and sectoral advisory across High Courts and National Tribunals.",

    /**
     * FIELD: ctaPrimaryText / ctaPrimaryLink
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: The primary gold action button in the Hero section.
     * ❓ WHAT TO ASK CLIENT: "Where should the main call-to-action button take visitors?"
     * ⚠️ IF LEFT BLANK: Links smoothly to "#practices".
     */
    ctaPrimaryText: "Explore Practice Areas",
    ctaPrimaryLink: "#practices",

    /**
     * FIELD: ctaSecondaryText / ctaSecondaryLink
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: Secondary outlined button in Hero section.
     * ❓ WHAT TO ASK CLIENT: "What should the secondary action button say?"
     * ⚠️ IF LEFT BLANK: Links smoothly to "#consultation".
     */
    ctaSecondaryText: "Confidential Inquiry",
    ctaSecondaryLink: "#consultation",

    /**
     * FIELD: metrics
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: The 4 statistic counter boxes displayed across the hero banner.
     * ❓ WHAT TO ASK CLIENT: "What numbers reflect your practice? (e.g. active forums, matters, sectors)"
     * ⚠️ IF LEFT BLANK: Displays 4 standard litigation metrics.
     */
    metrics: [
      { number: "10+", label: "Core Practice Domains", isGold: false },
      { number: "100+", label: "High Court & Tribunal Matters", isGold: true },
      { number: "8+", label: "Key Industry Sectors", isGold: false },
      { number: "100%", label: "Bar Council Compliant", isGold: true }
    ]
  },

  // =========================================================================
  // 6. COURTS & TRIBUNALS TICKER
  // =========================================================================
  /**
   * FIELD: tickerItems
   * -------------------------------------------------------------
   * 📌 WHAT IT IS: Continuously scrolling ticker bar showcasing active judicial forums.
   * ❓ WHAT TO ASK CLIENT: "Which courts and statutory tribunals do you regularly appear before?"
   * ⚠️ IF LEFT BLANK: Ticker displays standard state and national courts.
   */
  tickerItems: [
    "High Court of Jharkhand",
    "Supreme Court of India",
    "National Company Law Tribunal (NCLT)",
    "NCLAT New Delhi",
    "Debt Recovery Tribunal (DRT)",
    "Debt Recovery Appellate Tribunal (DRAT)",
    "District & Commercial Courts",
    "Arbitral Forums & Tribunals",
    "National Green Tribunal (NGT)"
  ],

  // =========================================================================
  // 7. ABOUT SECTION (Homepage Feature & Heritage)
  // =========================================================================
  aboutSection: {
    /**
     * FIELD: cardTag / cardTitle / cardSubtext / sealYear / sealCity
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: The floating signature badge card resting over the About photo.
     * ❓ WHAT TO ASK CLIENT: "What founding headline would you like on the firm identity card?"
     * ⚠️ IF LEFT BLANK: Defaults to "Founded in Ranchi / Litigators & Advisors".
     */
    cardTag: "Litigation Focus",
    cardTitle: "Founded by High Court Advocates",
    cardSubtext: "Mr. Hemant Jain & Mr. Akchansh Kishore",
    sealYear: "2018",
    sealCity: "Ranchi, Jharkhand",

    subtitle: "Litigation, Dispute Resolution & Sectoral Advisory",
    title: "Strategic Advocacy Across Complex Commercial & Statutory Forums",

    storyParagraph1: "Jain Kishore Associates is a litigation-focused law firm based in Ranchi, Jharkhand, providing strategic legal representation and advisory services to corporates, institutions, and individuals across India.",
    storyParagraph2: "The Firm is renowned for its strong courtroom advocacy, commercial dispute resolution, and sector-specific advisory, particularly in matters involving complex regulatory, financial, and infrastructure issues. We regularly appear before the Jharkhand High Court, various High Courts, District Courts, Tribunals, and arbitral forums.",

    /**
     * FIELD: pillars
     * -------------------------------------------------------------
     * 📌 WHAT IT IS: The 4 strategic value pillars displayed in the About section.
     * ❓ WHAT TO ASK CLIENT: "What 4 core values or working methodologies define your chambers?"
     * ⚠️ IF LEFT BLANK: Displays 4 standard forensic advocacy pillars.
     */
    pillars: [
      {
        icon: "scale",
        title: "Courtroom Advocacy",
        desc: "Regular appearances before the Jharkhand High Court, specialized benches, and arbitral tribunals."
      },
      {
        icon: "shield-alert",
        title: "Dispute Resolution",
        desc: "Strategic dispute mitigation in high-value infrastructure, EPC, and commercial contract claims."
      },
      {
        icon: "check-circle-2",
        title: "Sectoral Advisory",
        desc: "Nuanced regulatory guidance across energy, mining, banking, real estate, and manufacturing."
      },
      {
        icon: "lock",
        title: "Strict Confidentiality",
        desc: "Uncompromising client privilege, ethical stewardship, and adherence to Bar Council canons."
      }
    ]
  },

  // =========================================================================
  // 8. PRACTICE AREAS SECTION HEADINGS
  // =========================================================================
  practiceSection: {
    subtitle: "Comprehensive Legal Representation",
    title: "Practice Areas & Core Competencies",
    description: "Explore our specialized practice disciplines across courtroom litigation, arbitral dispute resolution, and regulatory advisory.",
    searchPlaceholder: "Search practice areas by statute, forum (e.g. IBC, DRT, Arbitration, Tax)..."
  },

  // =========================================================================
  // 9. ATTORNEYS & LEGAL BENCH SECTION HEADINGS
  // =========================================================================
  teamSection: {
    subtitle: "Chambers Leadership & Counsel",
    title: "Our Partners",
    description: "Experienced advocates providing strategic legal representation, forensic research, and courtroom advocacy."
  },

  // =========================================================================
  // 10. SECTORS SERVED SECTION HEADINGS
  // =========================================================================
  sectorsSection: {
    subtitle: "Industrial & Institutional Domain Exposure",
    title: "Sectors We Advise & Represent",
    description: "Providing sector-specific statutory interpretation and commercial dispute resolution across India's key economic drivers."
  },

  // =========================================================================
  // 11. LEGAL INSIGHTS SECTION HEADINGS
  // =========================================================================
  insightsSection: {
    subtitle: "Jurisprudential Commentary & Case Notes",
    title: "Chambers Legal Insights",
    description: "Thought leadership, case law analysis, and statutory updates curated by our litigation desk."
  },

  // =========================================================================
  // 12. CONSULTATION / INSTRUCT COUNSEL SECTION
  // =========================================================================
  consultationSection: {
    subtitle: "Confidential Case Assessment",
    title: "Instruct Counsel on Your Matter",
    description: "Submit a confidential briefing to chambers. All inquiries are evaluated under strict advocate-client confidentiality.",
    privilegeNotice: "Submissions do not automatically constitute an attorney-client relationship until formal conflict check and vakalatnama are executed."
  },

  // =========================================================================
  // 13. CHAMBERS LOCATIONS SECTION HEADINGS
  // =========================================================================
  locationsSection: {
    subtitle: "Chambers & Office Presence",
    title: "Principal Chambers & Judicial Liaison",
    description: "Headquartered in Harmu, Ranchi with regular courtroom presence before the High Court of Jharkhand and New Delhi Tribunals."
  },

  // =========================================================================
  // 14. FOOTER & COMPLIANCE
  // =========================================================================
  footer: {
    summary: "Jain Kishore Associates is a litigation-focused law firm based in Ranchi, Jharkhand, providing strategic representation and advisory across High Courts, Commercial Courts, and National Tribunals.",
    copyrightYear: "2018 - 2026",
    copyrightText: "Jain Kishore Associates. All rights reserved.",
    complianceNote: "Website strictly compliant with Rule 36 of Bar Council of India (BCI) Standards of Professional Conduct."
  },

  // =========================================================================
  // 15. BAR COUNCIL OF INDIA (BCI) DISCLAIMER MODAL
  // =========================================================================
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

  // =========================================================================
  // 16. DETAILED FIRM STORY & TIMELINE (Used in about.html)
  // =========================================================================
  aboutPage: {
    heroHeadline: "Litigation-Focused Advocacy Anchored in Commercial Precision",
    heroSubtitle: "Based in Ranchi, Jharkhand, Jain Kishore Associates delivers decisive courtroom representation and multi-forum dispute resolution for corporations, institutions, and individuals across India.",
    storyChronicleTitle: "Institutional Commitment to Legal Rigor",
    storyChronicleP1: "Jain Kishore Associates was established with a singular objective: to provide corporate, institutional, and private clients with robust, forensic courtroom advocacy coupled with pragmatic commercial sense.",
    storyChronicleP2: "Our partners regularly appear before the High Court of Jharkhand, specialized commercial courts, and national appellate forums including the NCLT, NCLAT, DRT, and DRAT, handling multi-crore arbitrations, constitutional writ challenges, and sectoral compliance disputes.",
    storyChronicleP3: "We believe every dispute demands rigorous statutory indexing, exhaustive judicial precedent analysis, and trial-ready pleadings before entering the courtroom.",
    timeline: [
      {
        year: "Founding",
        title: "Chambers Established in Ranchi",
        desc: "Jain Kishore Associates founded by Advocates Hemant Jain and Akchansh Kishore, establishing specialized chambers for commercial litigation and arbitration."
      },
      {
        year: "Expansion",
        title: "Multi-Tribunal Practice",
        desc: "Broadened institutional practice across the Jharkhand High Court, NCLT, NCLAT New Delhi, and Debt Recovery Tribunals (DRT/DRAT)."
      },
      {
        year: "Landmarks",
        title: "Marquee Corporate & PSU Representation",
        desc: "Engaged as counsel by prominent corporations including DVC, DLF, Dalmia Cement, Adani Electricity, and NACOF in high-stakes disputes."
      },
      {
        year: "Present",
        title: "Full-Spectrum Litigation Practice",
        desc: "Representing domestic and international clients across 10 specialized practice areas spanning civil, commercial, energy, and regulatory law."
      }
    ],
    coreValues: [
      { title: "Integrity", desc: "Absolute adherence to professional standards and honest counsel." },
      { title: "Diligence", desc: "Forensic research and meticulous preparation for every hearing." },
      { title: "Pragmatism", desc: "Aligning legal remedies with client business continuity and practical outcomes." }
    ]
  },

  // =========================================================================
  // 17. SUBPAGE HEADERS (practices.html, team.html, contact.html)
  // =========================================================================
  practicesPage: {
    heroTitle: "Practice Areas & Forums",
    heroSubtitle: "Comprehensive courtroom litigation, appellate dispute resolution, and regulatory advisory across High Courts and specialized tribunals."
  },

  teamPage: {
    heroTitle: "Our Partners & Advocates",
    heroSubtitle: "Litigation-focused advocates with deep experience across commercial disputes, arbitration, insolvency, and statutory compliance."
  },

  contactPage: {
    heroTitle: "Chambers & Legal Consultation",
    heroSubtitle: "Connect with our chambers in Harmu, Ranchi for confidential case briefings and professional legal representation."
  }
};


// =========================================================================
// 18. PRACTICE AREAS (The 10 Official Practice Disciplines from Client Profile)
// =========================================================================
const PRACTICE_AREAS = [
  {
    id: "commercial-civil-litigation",
    category: "dispute-arbitration",
    categoryLabel: "Litigation & Dispute Resolution",
    icon: "gavel",
    title: "Commercial & Civil Litigation",
    summary: "Strategic representation in commercial suits, contractual claims, injunctions, and civil appeals across High Courts and District Courts.",
    fullDescription: "Our litigation practice handles complex commercial disputes, specific performance suits, injunction proceedings, and appellate matters before the High Court of Jharkhand, various State High Courts, and Civil Courts across India.",
    statutes: ["Code of Civil Procedure, 1908", "Commercial Courts Act, 2015", "Specific Relief Act, 1963", "Indian Contract Act, 1872"],
    tribunals: ["High Court of Jharkhand", "Commercial Courts & Appellate Divisions", "Principal District Courts"],
    highlights: ["Counsel for Dalmia Cement (Bharat) Limited in civil suits for injunction.", "Represented DLF Home Developers Limited in commercial suits."]
  },
  {
    id: "arbitration-dispute",
    category: "dispute-arbitration",
    categoryLabel: "Litigation & Dispute Resolution",
    icon: "scale",
    title: "Arbitration (Domestic & International)",
    summary: "Handling institutional & ad-hoc arbitrations, Section 9 interim measures, appointment of arbitrators, and award enforcement.",
    fullDescription: "Extensive experience representing infrastructure developers, PSUs, and corporate clients in turnkey project disputes, EPC contract arbitrations, and Section 34 challenge proceedings before appellate courts.",
    statutes: ["Arbitration and Conciliation Act, 1996", "Commercial Courts Act, 2015", "Indian Contract Act, 1872"],
    tribunals: ["Domestic Arbitral Tribunals", "International Commercial Forums", "High Court Appellate Benches"],
    highlights: ["Represented Damodar Valley Corporation (DVC) in turnkey power project arbitrations.", "Advised leading Latvian energy company in international commercial negotiations."]
  },
  {
    id: "insolvency-bankruptcy",
    category: "banking-debt",
    categoryLabel: "Banking & Insolvency",
    icon: "landmark",
    title: "Insolvency & Bankruptcy (IBC)",
    summary: "Representation of financial creditors, operational creditors, and corporate debtors in CIRP proceedings before NCLT & NCLAT.",
    fullDescription: "Comprehensive insolvency advocacy under the IBC code. We handle Section 7, 9, and 10 petitions, moratorium compliance, resolution plan disputes, and appellate challenges before NCLAT New Delhi.",
    statutes: ["Insolvency and Bankruptcy Code, 2016", "Companies Act, 2013", "IBBI Regulations"],
    tribunals: ["National Company Law Tribunal (NCLT)", "National Company Law Appellate Tribunal (NCLAT New Delhi)"],
    highlights: ["Initiation of insolvency proceedings against admitted and non-disputed dues for leading energy sector company.", "Regular representation before NCLT and NCLAT benches."]
  },
  {
    id: "banking-recovery-drt",
    category: "banking-debt",
    categoryLabel: "Banking & Insolvency",
    icon: "building",
    title: "Banking, Finance & Recovery Proceedings (DRT / DRAT)",
    summary: "Securitization defense, debt recovery proceedings, and financial restructuring before Debt Recovery Tribunals.",
    fullDescription: "Representing institutions, borrowers, and corporate entities in multi-crore recovery proceedings, SARFAESI action challenges, and appellate proceedings before the Debt Recovery Appellate Tribunal (DRAT).",
    statutes: ["SARFAESI Act, 2002", "Recovery of Debts and Bankruptcy Act, 1993", "RBI Master Directions"],
    tribunals: ["Debt Recovery Tribunal (DRT)", "Debt Recovery Appellate Tribunal (DRAT)"],
    highlights: ["Represented Prabhatam Buildwell Pvt Limited in securitization, financial recovery, and debt restructuring litigation."]
  },
  {
    id: "taxation-direct-indirect",
    category: "tax-regulatory",
    categoryLabel: "Taxation & Regulatory",
    icon: "receipt-text",
    title: "Taxation (Direct & Indirect)",
    summary: "Advisory, departmental adjudication, and appellate litigation across Income Tax, GST, customs, and legacy state tax statutes.",
    fullDescription: "Specialized representation before tax authorities, appellate commissioners, ITAT, Commercial Tax Tribunals, and High Court tax division benches on complex assessment challenges and statutory refunds.",
    statutes: ["Income Tax Act, 1961", "Central Goods and Services Tax (CGST) Act, 2017", "Customs Act, 1962"],
    tribunals: ["Income Tax Appellate Tribunal (ITAT)", "Commercial Taxes Tribunal", "High Court Tax Benches"],
    highlights: ["Substantial practice handled by Partner Hemant Jain with extensive exposure in New Delhi and Jharkhand."]
  },
  {
    id: "real-estate-infrastructure",
    category: "corporate-commercial",
    categoryLabel: "Corporate & Infrastructure",
    icon: "building-2",
    title: "Real Estate & Infrastructure",
    summary: "Land acquisition advisory, development contracts, title due diligence, RERA compliance, and project litigation.",
    fullDescription: "Strategic counsel for infrastructure developers, builders, and corporate entities regarding land acquisitions, tenancy regularizations under local land laws, joint ventures, and regulatory approvals.",
    statutes: ["Real Estate (Regulation and Development) Act, 2016 (RERA)", "Transfer of Property Act, 1882", "Land Acquisition Act, 2013"],
    tribunals: ["RERA Authorities & Appellate Tribunals", "Civil Courts", "High Court Writ Benches"],
    highlights: ["Advised Adani Electricity on issues relating to land acquisition.", "Represented DLF Home Developers in infrastructure and PF-related litigation."]
  },
  {
    id: "energy-power-sector",
    category: "corporate-commercial",
    categoryLabel: "Energy & Infrastructure",
    icon: "zap",
    title: "Energy & Power Sector",
    summary: "Specialized regulatory litigation and arbitration in power generation, transmission, turnkey electricity contracts, and tariff disputes.",
    fullDescription: "Dedicated sectoral practice advising power generators, distribution companies, and turnkey contractors in disputes with state corporations, regulatory authorities, and equipment suppliers.",
    statutes: ["Electricity Act, 2003", "Central Electricity Regulatory Commission Regulations", "Indian Contract Act, 1872"],
    tribunals: ["State Electricity Regulatory Commissions", "Appellate Tribunal for Electricity (APTEL)", "Arbitral Tribunals"],
    highlights: ["Counsel for Damodar Valley Corporation (DVC) in turnkey power project arbitrations.", "Represented leading energy company against State Electricity Corporation."]
  },
  {
    id: "mining-natural-resources",
    category: "mining-industrial",
    categoryLabel: "Mining & Industrial",
    icon: "pickaxe",
    title: "Mining & Natural Resources",
    summary: "Advisory on mining concessions, mineral leases, auction compliance, statutory levies, and environmental clearances.",
    fullDescription: "Counseling mining concessionaires, leaseholders, and industrial consumers on MMDR compliance, mineral transit rules, environmental litigation, and representation before statutory authorities.",
    statutes: ["Mines and Minerals (Development and Regulation) Act, 1957", "Mineral Concession Rules", "Environment Protection Act, 1986"],
    tribunals: ["Mines Tribunal", "National Green Tribunal (NGT)", "High Court of Jharkhand"],
    highlights: ["Advised corporate clients in mining disputes and statutory compliance across Jharkhand."]
  },
  {
    id: "corporate-commercial-advisory",
    category: "corporate-commercial",
    categoryLabel: "Corporate Advisory",
    icon: "briefcase",
    title: "Corporate & Commercial Advisory",
    summary: "Strategic corporate counseling, cross-border commercial agreements, contract negotiation, and tender disputes.",
    fullDescription: "Providing ongoing commercial guidance, transactional risk mitigation, and tender review for domestic corporations, cooperatives, and international entities.",
    statutes: ["Companies Act, 2013", "Indian Contract Act, 1872", "Public Procurement Regulations"],
    tribunals: ["High Court Writ Benches", "Commercial Courts", "Institutional Arbitration Forums"],
    highlights: ["Represented NACOF in writ jurisdiction securing favorable outcomes before Jharkhand High Court.", "Advised Latvian energy company in international negotiations."]
  },
  {
    id: "regulatory-whitecollar-environmental",
    category: "tax-regulatory",
    categoryLabel: "Regulatory & Compliance",
    icon: "shield-alert",
    title: "Regulatory, White-Collar & Environmental Compliance",
    summary: "Statutory investigations defense, criminal corporate litigation, tender challenges, and environmental clearance proceedings.",
    fullDescription: "Defense representation in statutory enforcement actions, environmental regulatory challenges before NGT, state policy constitutional reviews, and corporate criminal matters.",
    statutes: ["Environment Protection Act, 1986", "Prevention of Corruption Act", "Code of Criminal Procedure / BNSS"],
    tribunals: ["National Green Tribunal (NGT)", "Special Courts", "High Court of Jharkhand"],
    highlights: ["Represented IndiaMART InterMESH Limited in criminal litigation.", "Represented Urmila International in tender disputes and constitutional challenge under Jharkhand State Liquor Policy."]
  }
];


// =========================================================================
// 19. ATTORNEYS & PARTNERS (The 2 Founding Partners from Client Profile)
// =========================================================================
const ATTORNEYS = [
  {
    id: "hemant-jain",
    name: "Hemant Jain",
    role: "Partner | Advocate, Jharkhand High Court",
    experience: "Senior Litigation Counsel",
    qualifications: "B.A. LL.B. (NUSRL) | Advocate, High Court of Jharkhand",
    description: "Hemant Jain is a litigation-focused advocate with substantial experience in handling commercial and regulatory disputes. His practice spans taxation, arbitration, real estate, mining, and environmental law, with extensive experience representing corporate and institutional clients before High Courts and statutory forums. He also has prior experience of practicing in New Delhi, with exposure to litigation involving taxation, insolvency, arbitration, real estate, and regulatory matters.",
    courts: "High Court of Jharkhand, Supreme Court of India, Statutory Tribunals & District Courts",
    specializations: ["Commercial Disputes", "Taxation", "Arbitration", "Real Estate & Mining", "Environmental Law"],
    email: "hemant.nusrl@gmail.com",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "akchansh-kishore",
    name: "Akchansh Kishore",
    role: "Partner | Advocate, Jharkhand High Court",
    experience: "Commercial Litigation & Arbitration Counsel",
    qualifications: "B.A. LL.B. | Advocate, High Court of Jharkhand",
    description: "Akchansh Kishore focuses on commercial litigation, arbitration, and insolvency matters, with sectoral expertise in energy, infrastructure, banking & finance, and FMCG. He regularly appears before High Courts and specialized tribunals including NCLT, NCLAT, DRT, and DRAT. He has also advised domestic and international clients in high-value infrastructure disputes and cross-border commercial negotiations.",
    courts: "High Court of Jharkhand, NCLT, NCLAT New Delhi, DRT, DRAT & Commercial Courts",
    specializations: ["Commercial Litigation", "Arbitration", "Insolvency (IBC)", "Banking & Finance", "Energy & Infrastructure"],
    email: "akchanshkishore@gmail.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  }
];


// =========================================================================
// 20. SECTORS ADVISED (The 8 Verified Sectors from Client Profile)
// =========================================================================
const SECTORS_ADVISED = [
  { name: "Power & Energy", icon: "zap", desc: "Turnkey Power Projects, Electricity Corporations & Energy EPCs" },
  { name: "Infrastructure & EPC", icon: "train-track", desc: "Civil Infrastructure, Turnkey Contracts & Concession Agreements" },
  { name: "Real Estate & Construction", icon: "building-2", desc: "Developers, Land Acquisition Matters & Commercial Tenancies" },
  { name: "Cement & Manufacturing", icon: "factory", desc: "Heavy Manufacturing Plants, Industrial Disputes & Injunction Suits" },
  { name: "Logistics & Supply Chain", icon: "truck", desc: "Commercial Supply Networks, Turnkey Transportation & B2B Disputes" },
  { name: "Healthcare & Institutions", icon: "activity", desc: "Hospitals, Institutional Providers & Regulatory Compliance" },
  { name: "Mining & Natural Resources", icon: "pickaxe", desc: "Mineral Leaseholders, Statutory Clearances & Concession Disputes" },
  { name: "Public Sector Enterprises", icon: "building", desc: "State Development Corporations, Statutory Boards & Cooperative Federations" }
];


// =========================================================================
// 21. REPRESENTATIVE CLIENTS & MARQUEE MATTERS (From Client Profile)
// =========================================================================
const REPRESENTATIVE_CLIENTS = [
  { name: "Damodar Valley Corporation (DVC)", matter: "Arbitration in power turnkey project disputes", category: "Power & Energy" },
  { name: "DLF Home Developers Limited", matter: "Commercial suits, electricity turnkey projects & PF litigation", category: "Real Estate" },
  { name: "Dalmia Cement (Bharat) Limited", matter: "Commercial suits for civil injunctions", category: "Manufacturing" },
  { name: "Adani Electricity", matter: "Power project disputes & land acquisition advisory", category: "Energy" },
  { name: "NACOF (National Farmers' Cooperative)", matter: "Writ jurisdiction for dues before Jharkhand High Court", category: "PSU & Cooperatives" },
  { name: "IndiaMART InterMESH Limited", matter: "Corporate criminal litigation defense", category: "E-Commerce" },
  { name: "Prabhatam Buildwell Pvt Limited", matter: "Securitization, debt recovery & financial restructuring", category: "Banking & DRT" },
  { name: "Urmila International Pvt Ltd", matter: "Tender disputes & Jharkhand State Liquor Policy challenge", category: "Public Procurement" },
  { name: "JKM Engineers Pvt Ltd", matter: "Arbitration in civil turnkey projects", category: "Infrastructure" },
  { name: "Leading Latvian Energy Company", matter: "Cross-border international commercial negotiations", category: "International" },
  { name: "State Electricity Corporation Matter", matter: "Multiple arbitrations & insolvency proceedings", category: "Energy & IBC" }
];


// =========================================================================
// 22. LEGAL INSIGHTS & CASE COMMENTARY
// =========================================================================
const LEGAL_INSIGHTS = [
  {
    id: "arbitration-turnkey-power",
    date: "October 2026",
    tag: "Commercial Arbitration",
    title: "Enforcing Turnkey Infrastructure Claims & Navigating Section 9 Injunctions in EPC Contracts",
    excerpt: "Strategic considerations for infrastructure concessionaires facing wrongful invocation of bank guarantees and delay liquidated damages.",
    readTime: "4 min read",
    author: "Akchansh Kishore, Partner"
  },
  {
    id: "ibc-nclt-dues-recovery",
    date: "September 2026",
    tag: "Insolvency & IBC",
    title: "Initiating CIRP for Admitted Operational Dues Against Corporate Debtors Before NCLT",
    excerpt: "Procedural roadmap for corporate creditors under Section 9 of the Insolvency and Bankruptcy Code (IBC) to recover undisputed dues.",
    readTime: "5 min read",
    author: "Akchansh Kishore, Partner"
  },
  {
    id: "jharkhand-land-acquisition-advisory",
    date: "August 2026",
    tag: "Real Estate & Mining",
    title: "Navigating Regulatory Approvals and Land Acquisition Nuances for Power & Industrial Projects",
    excerpt: "Critical statutory considerations regarding title diligence, compensation benchmarks, and environmental compliances in Eastern India.",
    readTime: "6 min read",
    author: "Hemant Jain, Partner"
  }
];


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
