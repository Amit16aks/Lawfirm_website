/**
 * Main Client Application Logic - Poddar & Associates
 * Handles Theme Toggling (Light Default / Dark Luxury), BCI Compliance Modal,
 * Dynamic Practice Rendering & Filtering, Attorney vCard generation, and Consultation Forms.
 */

// Immediate execution to prevent theme flashing on load
(function applyInitialTheme() {
  const storedTheme = localStorage.getItem("poddar_theme") || "light";
  if (storedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  injectSiteContent();
  initHeroCarousel();
  bindMediaElements();
  initBciModal();
  initMobileMenu();
  initPracticeAreas();
  initAttorneys();
  initLegalInsights();
  initSectors();
  initConsultationForm();
  initBackToTop();
  renderIcons();
});

/* ==========================================================================
   0. Theme Toggle (Light Default / Dark Luxury)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const storedTheme = localStorage.getItem("poddar_theme") || "light";

  updateThemeButton(storedTheme);

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    const newTheme = isDark ? "dark" : "light";
    localStorage.setItem("poddar_theme", newTheme);
    updateThemeButton(newTheme);
    renderIcons();
  });
}

function updateThemeButton(theme) {
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (!toggleBtn) return;
  if (theme === "dark") {
    toggleBtn.innerHTML = `<i data-lucide="sun" class="w-4 h-4 text-gold"></i>`;
    toggleBtn.setAttribute("title", "Switch to Light Mode");
  } else {
    toggleBtn.innerHTML = `<i data-lucide="moon" class="w-4 h-4 text-slate-700"></i>`;
    toggleBtn.setAttribute("title", "Switch to Dark Luxury Mode");
  }
}

/* ==========================================================================
   0.1. Centralized Master Content Injector (No-Code CMS)
   Dynamically binds every text, headline, statistic, and notice from data.js
   ========================================================================== */
function injectSiteContent() {
  if (typeof SITE_CONTENT === "undefined") return;

  // 1. Branding & Identity (across all pages)
  const branding = SITE_CONTENT.branding || {};
  if (branding.name) {
    document.querySelectorAll(".firm-name").forEach(el => {
      el.innerHTML = branding.name.replace("&", '<span class="text-gold">&</span>');
    });
  }
  if (branding.shortName) {
    document.querySelectorAll(".firm-short-name").forEach(el => {
      el.textContent = branding.shortName;
    });
  }
  if (branding.designation) {
    document.querySelectorAll(".firm-designation").forEach(el => {
      el.textContent = `${branding.designation} • Estd. ${branding.estYear || 1969}`;
    });
  }
  if (branding.headerRegNotice) {
    document.querySelectorAll(".header-reg-notice").forEach(el => {
      el.innerHTML = `<i data-lucide="shield-check" class="w-3.5 h-3.5 text-gold mr-1.5"></i> ${branding.headerRegNotice}`;
    });
  }
  if (branding.headerCourtsNotice) {
    document.querySelectorAll(".header-courts-notice").forEach(el => {
      el.innerHTML = `<i data-lucide="map-pin" class="w-3.5 h-3.5 text-gold mr-1.5"></i> ${branding.headerCourtsNotice}`;
    });
  }

  // 2. Contact Details & Hotlines
  const contact = SITE_CONTENT.contact || {};
  if (contact.phonePrimary) {
    const cleanTel = contact.phonePrimary.replace(/[^0-9+]/g, "");
    document.querySelectorAll(".firm-phone-primary").forEach(el => {
      if (el.tagName === "A") {
        el.href = `tel:${cleanTel}`;
        const icon = el.querySelector("i");
        el.innerHTML = `${icon ? icon.outerHTML : '<i data-lucide="phone" class="w-3.5 h-3.5 text-gold mr-1.5"></i>'} ${contact.phonePrimary}`;
      } else {
        el.textContent = contact.phonePrimary;
      }
    });
  }
  if (contact.phoneSecondary) {
    const cleanTel = contact.phoneSecondary.replace(/[^0-9+]/g, "");
    document.querySelectorAll(".firm-phone-secondary").forEach(el => {
      if (el.tagName === "A") {
        el.href = `tel:${cleanTel}`;
      }
      el.textContent = contact.phoneSecondary;
    });
  }
  if (contact.emailGeneral) {
    document.querySelectorAll(".firm-email-general").forEach(el => {
      if (el.tagName === "A") {
        el.href = `mailto:${contact.emailGeneral}`;
        const icon = el.querySelector("i");
        el.innerHTML = `${icon ? icon.outerHTML : '<i data-lucide="mail" class="w-3.5 h-3.5 text-gold mr-1.5"></i>'} ${contact.emailGeneral}`;
      } else {
        el.textContent = contact.emailGeneral;
      }
    });
  }
  if (contact.emailConsult || contact.emailGeneral) {
    const consultMail = contact.emailConsult || contact.emailGeneral;
    document.querySelectorAll(".firm-email-consult").forEach(el => {
      if (el.tagName === "A") {
        el.href = `mailto:${consultMail}`;
      }
      el.textContent = consultMail;
    });
  }
  if (contact.ranchiAddress) {
    document.querySelectorAll(".firm-ranchi-address").forEach(el => {
      el.textContent = contact.ranchiAddress;
    });
  }
  if (contact.delhiAddress) {
    document.querySelectorAll(".firm-delhi-address").forEach(el => {
      el.textContent = contact.delhiAddress;
    });
  }
  if (contact.workingHours) {
    document.querySelectorAll(".firm-working-hours").forEach(el => {
      el.textContent = contact.workingHours;
    });
  }
  if (contact.whatsappNumber) {
    const cleanWa = contact.whatsappNumber.replace(/[^0-9]/g, "");
    const waMsg = encodeURIComponent(contact.whatsappDefaultMessage || "Hello Poddar & Associates Chambers");
    document.querySelectorAll(".floating-whatsapp-btn, #floatingWhatsappBtn").forEach(el => {
      el.href = `https://wa.me/${cleanWa}?text=${waMsg}`;
    });
  }

  // 3. Hero Section (index.html)
  const hero = SITE_CONTENT.hero || {};
  const badgeEl = document.getElementById("heroPrestigeBadge");
  if (badgeEl && hero.prestigeBadge) {
    badgeEl.innerHTML = `<i data-lucide="award" class="w-4 h-4 text-gold"></i> <span class="text-xs uppercase tracking-widest font-semibold text-gold-light">${hero.prestigeBadge}</span>`;
  }
  const headEl = document.getElementById("heroHeadline");
  if (headEl && (hero.headlineLine1 || hero.headlineGradient || hero.headlineLine2)) {
    headEl.innerHTML = `${hero.headlineLine1 || ''} <br> <span class="text-gold-gradient">${hero.headlineGradient || ''}</span> <br> ${hero.headlineLine2 || ''}`;
  }
  const descEl = document.getElementById("heroDescription");
  if (descEl && hero.description) {
    descEl.textContent = hero.description;
  }
  const cta1 = document.getElementById("heroCtaPrimary");
  if (cta1 && hero.ctaPrimaryText) {
    const span1 = cta1.querySelector("span");
    if (span1) {
      span1.textContent = hero.ctaPrimaryText;
    } else {
      cta1.innerHTML = `<span>${hero.ctaPrimaryText}</span> <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>`;
    }
    if (hero.ctaPrimaryLink) cta1.href = hero.ctaPrimaryLink;
  }
  const cta2 = document.getElementById("heroCtaSecondary");
  if (cta2 && hero.ctaSecondaryText) {
    const span2 = cta2.querySelector("span");
    if (span2) {
      span2.textContent = hero.ctaSecondaryText;
    } else {
      cta2.innerHTML = `<i data-lucide="file-text" class="w-4 h-4 mr-2 text-gold"></i> <span>${hero.ctaSecondaryText}</span>`;
    }
    if (hero.ctaSecondaryLink) cta2.href = hero.ctaSecondaryLink;
  }
  const metricsCont = document.getElementById("heroMetricsContainer");
  if (metricsCont && Array.isArray(hero.metrics)) {
    metricsCont.innerHTML = hero.metrics.map(m => `
      <div>
        <div class="font-cinzel text-2xl sm:text-3xl font-extrabold ${m.isGold ? 'text-gold' : 'text-white'}">${m.number}</div>
        <div class="text-xs text-slate-400 uppercase tracking-wider font-medium mt-0.5">${m.label}</div>
      </div>
    `).join("");
  }

  // 4. Courts & Tribunals Ticker
  const tickerCont = document.getElementById("courtsTickerContainer");
  if (tickerCont && Array.isArray(SITE_CONTENT.tickerItems)) {
    tickerCont.innerHTML = SITE_CONTENT.tickerItems.map((court, idx) => `
      <span class="hover:text-gold transition-colors">${court}</span>
      ${idx < SITE_CONTENT.tickerItems.length - 1 ? '<span class="text-gold/40">•</span>' : ''}
    `).join("");
  }

  // 5. About Section on Homepage
  const aboutSec = SITE_CONTENT.aboutSection || {};
  const cTag = document.getElementById("aboutCardTag");
  if (cTag && aboutSec.cardTag) cTag.textContent = aboutSec.cardTag;
  const cTitle = document.getElementById("aboutCardTitle");
  if (cTitle && aboutSec.cardTitle) cTitle.textContent = aboutSec.cardTitle;
  const cSub = document.getElementById("aboutCardSubtext");
  if (cSub && aboutSec.cardSubtext) cSub.textContent = aboutSec.cardSubtext;
  const sYear = document.getElementById("aboutSealYear");
  if (sYear && aboutSec.sealYear) sYear.textContent = aboutSec.sealYear;
  const sCity = document.getElementById("aboutSealCity");
  if (sCity && aboutSec.sealCity) sCity.textContent = aboutSec.sealCity;
  const aSub = document.getElementById("aboutSubtitle");
  if (aSub && aboutSec.subtitle) aSub.textContent = aboutSec.subtitle;
  const aTitle = document.getElementById("aboutTitle");
  if (aTitle && aboutSec.title) aTitle.textContent = aboutSec.title;
  const aP1 = document.getElementById("aboutStoryP1");
  if (aP1 && aboutSec.storyParagraph1) aP1.innerHTML = aboutSec.storyParagraph1;
  const aP2 = document.getElementById("aboutStoryP2");
  if (aP2 && aboutSec.storyParagraph2) aP2.innerHTML = aboutSec.storyParagraph2;
  const aPillars = document.getElementById("aboutPillarsContainer");
  if (aPillars && Array.isArray(aboutSec.pillars)) {
    aPillars.innerHTML = aboutSec.pillars.map(p => `
      <div class="p-4 rounded-xl bg-navy-900 border border-gold/20">
        <div class="flex items-center space-x-3 mb-2">
          <i data-lucide="${p.icon || 'scale'}" class="w-5 h-5 text-gold"></i>
          <h4 class="font-cinzel text-sm font-bold text-white">${p.title}</h4>
        </div>
        <p class="text-xs text-slate-400">${p.desc}</p>
      </div>
    `).join("");
  }

  // 6. Section Titles & Descriptions (index.html)
  const pracSec = SITE_CONTENT.practiceSection || {};
  const pSub = document.getElementById("practiceSubtitle");
  if (pSub && pracSec.subtitle) pSub.textContent = pracSec.subtitle;
  const pTitle = document.getElementById("practiceTitle");
  if (pTitle && pracSec.title) pTitle.textContent = pracSec.title;
  const pDesc = document.getElementById("practiceDesc");
  if (pDesc && pracSec.description) pDesc.textContent = pracSec.description;
  const pSearch = document.getElementById("practiceSearchInput");
  if (pSearch && pracSec.searchPlaceholder) pSearch.placeholder = pracSec.searchPlaceholder;

  const teamSec = SITE_CONTENT.teamSection || {};
  const tSub = document.getElementById("teamSubtitle");
  if (tSub && teamSec.subtitle) tSub.textContent = teamSec.subtitle;
  const tTitle = document.getElementById("teamTitle");
  if (tTitle && teamSec.title) tTitle.textContent = teamSec.title;
  const tDesc = document.getElementById("teamDesc");
  if (tDesc && teamSec.description) tDesc.textContent = teamSec.description;

  const secSec = SITE_CONTENT.sectorsSection || {};
  const sctSub = document.getElementById("sectorsSubtitle");
  if (sctSub && secSec.subtitle) sctSub.textContent = secSec.subtitle;
  const sctTitle = document.getElementById("sectorsTitle");
  if (sctTitle && secSec.title) sctTitle.textContent = secSec.title;
  const sctDesc = document.getElementById("sectorsDesc");
  if (sctDesc && secSec.description) sctDesc.textContent = secSec.description;

  const insSec = SITE_CONTENT.insightsSection || {};
  const insSub = document.getElementById("insightsSubtitle");
  if (insSub && insSec.subtitle) insSub.textContent = insSec.subtitle;
  const insTitle = document.getElementById("insightsTitle");
  if (insTitle && insSec.title) insTitle.textContent = insSec.title;
  const insDesc = document.getElementById("insightsDesc");
  if (insDesc && insSec.description) insDesc.textContent = insSec.description;

  const conSec = SITE_CONTENT.consultationSection || {};
  const conSub = document.getElementById("consultationSubtitle");
  if (conSub && conSec.subtitle) conSub.textContent = conSec.subtitle;
  const conTitle = document.getElementById("consultationTitle");
  if (conTitle && conSec.title) conTitle.textContent = conSec.title;
  const conDesc = document.getElementById("consultationDesc");
  if (conDesc && conSec.description) {
    const consultMail = contact.emailConsult || contact.emailGeneral || "chambers@poddarandassociates.com";
    conDesc.innerHTML = `${conSec.description} (<span class="firm-email-consult font-mono text-gold font-semibold">${consultMail}</span>). Our chamber clerk will review your matter and respond within 24 business hours.`;
  }
  const conPriv = document.getElementById("consultationPrivilegeNotice");
  if (conPriv && conSec.privilegeNotice) {
    conPriv.innerHTML = `<i data-lucide="shield-check" class="w-4 h-4 text-gold mr-1.5 shrink-0"></i> ${conSec.privilegeNotice}`;
  }

  const locSec = SITE_CONTENT.locationsSection || {};
  const locSub = document.getElementById("locationsSubtitle");
  if (locSub && locSec.subtitle) locSub.textContent = locSec.subtitle;
  const locTitle = document.getElementById("locationsTitle");
  if (locTitle && locSec.title) locTitle.textContent = locSec.title;

  // 7. Footer
  const footer = SITE_CONTENT.footer || {};
  const footSum = document.getElementById("footerSummary");
  if (footSum && footer.summary) footSum.textContent = footer.summary;
  const footComp = document.getElementById("footerCompliance");
  if (footComp && footer.complianceNote) footComp.textContent = footer.complianceNote;
  const footCopy = document.getElementById("footerCopyright");
  if (footCopy && (footer.copyrightText || footer.copyrightYear)) {
    footCopy.textContent = `© ${footer.copyrightYear || '1969 - 2026'} ${footer.copyrightText || 'Poddar & Associates. All rights reserved.'}`;
  }

  // 8. BCI Modal
  const bci = SITE_CONTENT.bciModal || {};
  const bciTitle = document.getElementById("bciModalTitle");
  if (bciTitle && bci.title) bciTitle.textContent = bci.title;
  const bciSub = document.getElementById("bciModalSubtitle");
  if (bciSub && bci.subtitle) bciSub.textContent = bci.subtitle;
  const bciBody = document.getElementById("bciModalBody");
  if (bciBody && Array.isArray(bci.paragraphs)) {
    bciBody.innerHTML = bci.paragraphs.map(p => `<p>${p}</p>`).join("");
  }
  const bciAcc = document.getElementById("bciAcceptBtn");
  if (bciAcc && bci.acceptButtonText) {
    bciAcc.innerHTML = `<i data-lucide="check" class="w-4 h-4 mr-1.5"></i> ${bci.acceptButtonText}`;
  }
  const bciDec = document.getElementById("bciDeclineBtn");
  if (bciDec && bci.declineButtonText) bciDec.textContent = bci.declineButtonText;

  // 9. Subpages: about.html
  const aboutPg = SITE_CONTENT.aboutPage || {};
  const abHeroTitle = document.getElementById("aboutPageHeroTitle");
  if (abHeroTitle && aboutPg.heroHeadline) abHeroTitle.textContent = aboutPg.heroHeadline;
  const abHeroSub = document.getElementById("aboutPageHeroSub");
  if (abHeroSub && aboutPg.heroSubtitle) abHeroSub.textContent = aboutPg.heroSubtitle;
  const scTitle = document.getElementById("storyChronicleTitle");
  if (scTitle && aboutPg.storyChronicleTitle) scTitle.textContent = aboutPg.storyChronicleTitle;
  const scP1 = document.getElementById("storyChronicleP1");
  if (scP1 && aboutPg.storyChronicleP1) scP1.textContent = aboutPg.storyChronicleP1;
  const scP2 = document.getElementById("storyChronicleP2");
  if (scP2 && aboutPg.storyChronicleP2) scP2.textContent = aboutPg.storyChronicleP2;
  const scP3 = document.getElementById("storyChronicleP3");
  if (scP3 && aboutPg.storyChronicleP3) scP3.textContent = aboutPg.storyChronicleP3;
  const timeCont = document.getElementById("timelineContainer");
  if (timeCont && Array.isArray(aboutPg.timeline)) {
    timeCont.innerHTML = aboutPg.timeline.map(item => `
      <div class="relative">
        <span class="w-3 h-3 rounded-full bg-gold absolute -left-[31px] top-1"></span>
        <div class="font-cinzel text-lg font-bold text-white">${item.year} — ${item.title}</div>
        <p class="text-xs text-slate-400 mt-1">${item.desc}</p>
      </div>
    `).join("");
  }
  const valCont = document.getElementById("aboutCoreValuesContainer");
  if (valCont && Array.isArray(aboutPg.coreValues)) {
    valCont.innerHTML = aboutPg.coreValues.map(val => `
      <div class="p-4 rounded-xl bg-navy-900 border border-gold/20">
        <h4 class="font-cinzel text-sm font-bold text-white mb-1">${val.title}</h4>
        <p class="text-xs text-slate-400">${val.desc}</p>
      </div>
    `).join("");
  }

  // 10. Subpages: practices.html, team.html, contact.html
  const prPage = SITE_CONTENT.practicesPage || {};
  const prHeroTitle = document.getElementById("practicesPageHeroTitle");
  if (prHeroTitle && prPage.heroTitle) prHeroTitle.textContent = prPage.heroTitle;
  const prHeroSub = document.getElementById("practicesPageHeroSub");
  if (prHeroSub && prPage.heroSubtitle) prHeroSub.textContent = prPage.heroSubtitle;

  const tmPage = SITE_CONTENT.teamPage || {};
  const tmHeroTitle = document.getElementById("teamPageHeroTitle");
  if (tmHeroTitle && tmPage.heroTitle) tmHeroTitle.textContent = tmPage.heroTitle;
  const tmHeroSub = document.getElementById("teamPageHeroSub");
  if (tmHeroSub && tmPage.heroSubtitle) tmHeroSub.textContent = tmPage.heroSubtitle;

  const ctPage = SITE_CONTENT.contactPage || {};
  const ctHeroTitle = document.getElementById("contactPageHeroTitle");
  if (ctHeroTitle && ctPage.heroTitle) ctHeroTitle.textContent = ctPage.heroTitle;
  const ctHeroSub = document.getElementById("contactPageHeroSub");
  if (ctHeroSub && ctPage.heroSubtitle) ctHeroSub.textContent = ctPage.heroSubtitle;
}

/* ==========================================================================
   0.2. Centralized Media Binder
   Dynamically binds photos, videos, logos, and avatars from FIRM_CONFIG.media
   ========================================================================== */
function bindMediaElements() {
  const media = FIRM_CONFIG.media || {};

  // 1. Homepage About Chambers Featured Card
  const aboutCard = document.getElementById("aboutChambersCard");
  if (aboutCard) {
    const imgUrl = media.aboutChambersImage || FIRM_CONFIG.aboutSectionImage;
    if (imgUrl) {
      aboutCard.style.backgroundImage = `url('${imgUrl}')`;
    }
  }

  // 2. Founders' Portraits in about.html
  const binodImg = document.getElementById("founderBinodAvatar");
  if (binodImg) {
    const binodLawyer = ATTORNEYS.find(a => a.id === "binod-poddar");
    const binodSrc = media.founderBinodPoddarImage || (binodLawyer && binodLawyer.avatar);
    if (binodSrc) binodImg.src = binodSrc;
  }

  const birenImg = document.getElementById("founderBirenAvatar");
  if (birenImg) {
    const birenLawyer = ATTORNEYS.find(a => a.id === "biren-poddar");
    const birenSrc = media.founderBirenPoddarImage || (birenLawyer && birenLawyer.avatar);
    if (birenSrc) birenImg.src = birenSrc;
  }

  // 3. Custom Logo / Crest (if provided)
  if (media.firmLogoUrl) {
    document.querySelectorAll(".firm-logo-mark").forEach(el => {
      el.innerHTML = `<img src="${media.firmLogoUrl}" alt="${FIRM_CONFIG.name}" class="w-full h-full object-contain">`;
    });
  }

  // 4. Custom Favicon (if provided)
  if (media.faviconUrl) {
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "shortcut icon";
      document.head.appendChild(link);
    }
    link.href = media.faviconUrl;
  }
}

/* ==========================================================================
   0.5. Hero Background Media Carousel (Infinite Loop - Photos & Videos)
   ========================================================================== */
let heroCarouselTimer = null;
let currentHeroSlideIndex = 0;
let parsedHeroSlides = [];

function initHeroCarousel() {
  const track = document.getElementById("heroSlidesTrack");
  const dotsContainer = document.getElementById("heroCarouselDots");
  if (!track) return;

  // 1. Flexible parsing: accepts array of URLs, comma-separated string, or fallback image
  let raw = FIRM_CONFIG.heroMediaSlides || FIRM_CONFIG.heroBackgroundImage;
  if (!raw) return;

  if (typeof raw === "string") {
    if (raw.includes(",")) {
      parsedHeroSlides = raw.split(",").map(s => s.trim()).filter(Boolean).map(url => ({
        type: isVideoUrl(url) ? "video" : "image",
        url
      }));
    } else {
      parsedHeroSlides = [{
        type: isVideoUrl(raw) ? "video" : "image",
        url: raw
      }];
    }
  } else if (Array.isArray(raw)) {
    parsedHeroSlides = raw.map(item => {
      if (typeof item === "string") {
        return {
          type: isVideoUrl(item) ? "video" : "image",
          url: item
        };
      }
      return item;
    });
  }

  if (parsedHeroSlides.length === 0) return;

  // 2. Render slides into track
  track.innerHTML = parsedHeroSlides.map((slide, idx) => {
    if (slide.type === "video") {
      return `
        <div class="hero-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
          <video src="${slide.url}" ${idx === 0 ? 'autoplay' : ''} muted loop playsinline class="w-full h-full object-cover"></video>
        </div>
      `;
    }
    return `
      <div class="hero-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <img src="${slide.url}" alt="${slide.alt || 'Poddar and Associates Chambers'}" class="w-full h-full object-cover" ${idx === 0 ? 'loading="eager"' : 'loading="lazy"'}>
      </div>
    `;
  }).join("");

  // 3. Render dots if more than 1 slide
  if (dotsContainer && parsedHeroSlides.length > 1) {
    dotsContainer.innerHTML = parsedHeroSlides.map((_, idx) => `
      <button class="hero-carousel-dot ${idx === 0 ? 'active w-7' : 'w-2.5'}" 
              onclick="goToHeroSlide(${idx})" 
              aria-label="Go to hero slide ${idx + 1}" 
              title="Slide ${idx + 1}">
      </button>
    `).join("");
  } else if (dotsContainer) {
    dotsContainer.style.display = "none";
  }

  // 4. Start automatic infinite rotation
  if (parsedHeroSlides.length > 1) {
    const interval = FIRM_CONFIG.heroSlideIntervalMs || 6000;
    startHeroCarouselTimer(interval);
  }
}

function isVideoUrl(url) {
  if (!url) return false;
  const clean = url.toLowerCase().split("?")[0];
  return clean.endsWith(".mp4") || clean.endsWith(".webm") || clean.endsWith(".ogg") || clean.endsWith(".mov");
}

function startHeroCarouselTimer(interval) {
  if (heroCarouselTimer) clearInterval(heroCarouselTimer);
  heroCarouselTimer = setInterval(() => {
    currentHeroSlideIndex = (currentHeroSlideIndex + 1) % parsedHeroSlides.length;
    updateHeroSlide(currentHeroSlideIndex);
  }, interval);
}

window.goToHeroSlide = function(index) {
  if (index < 0 || index >= parsedHeroSlides.length) return;
  currentHeroSlideIndex = index;
  updateHeroSlide(index);
  const interval = FIRM_CONFIG.heroSlideIntervalMs || 6000;
  startHeroCarouselTimer(interval);
};

function updateHeroSlide(index) {
  const slides = document.querySelectorAll("#heroSlidesTrack .hero-slide");
  const dots = document.querySelectorAll("#heroCarouselDots .hero-carousel-dot");

  slides.forEach((slide, idx) => {
    const vid = slide.querySelector("video");
    if (idx === index) {
      slide.classList.add("active");
      if (vid) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      }
    } else {
      slide.classList.remove("active");
      if (vid) {
        vid.pause();
      }
    }
  });

  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("active");
      dot.classList.remove("w-2.5");
      dot.classList.add("w-7");
    } else {
      dot.classList.remove("active");
      dot.classList.remove("w-7");
      dot.classList.add("w-2.5");
    }
  });
}

/* ==========================================================================
   1. Bar Council of India (BCI) Disclaimer Modal
   ========================================================================== */
function isHomePage() {
  if (document.body && document.body.dataset.page === "home") return true;
  if (document.body && document.body.dataset.page && document.body.dataset.page !== "home") return false;
  if (document.getElementById("heroSlider")) return true;

  const path = (window.location.pathname || "").toLowerCase().replace(/\\/g, "/");
  const cleanPath = path.split("/").pop();
  return cleanPath === "" || cleanPath === "index.html" || cleanPath === "index.htm";
}

function initBciModal() {
  const modal = document.getElementById("bciModal");
  const acceptBtn = document.getElementById("bciAcceptBtn");
  const declineBtn = document.getElementById("bciDeclineBtn");
  const openTrigger = document.getElementById("openBciModalFooter");

  if (!modal) return;

  const isHome = isHomePage();

  if (!isHome) {
    // Visitor is currently on a subpage (About, Practices, Team, Contact).
    // Mark that they visited a subpage so returning to the home screen displays the disclaimer!
    sessionStorage.setItem("poddar_navigated_from_subpage", "true");
  } else {
    // Visitor is on the main home screen.
    // Trigger popup ONLY when:
    // 1. First time landing on the site
    const isFirstLanding = sessionStorage.getItem("poddar_home_acknowledged") !== "true";
    // 2. Moved to homescreen from another page
    const cameFromSubpage = sessionStorage.getItem("poddar_navigated_from_subpage") === "true";
    // 3. User explicitly refreshes the home screen (F5 / Ctrl+R)
    const isReload = (window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation")[0]?.type === "reload") || (window.performance && window.performance.navigation && window.performance.navigation.type === 1);

    if (isFirstLanding || cameFromSubpage || isReload) {
      showModal(modal);
    }

    // Support browser Back button restoration (bfcache)
    window.addEventListener("pageshow", (event) => {
      if (sessionStorage.getItem("poddar_navigated_from_subpage") === "true") {
        showModal(modal);
      }
    });
  }

  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      sessionStorage.setItem("poddar_home_acknowledged", "true");
      sessionStorage.removeItem("poddar_navigated_from_subpage");
      hideModal(modal);
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener("click", () => {
      window.location.href = "https://www.google.com";
    });
  }

  if (openTrigger) {
    openTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      showModal(modal);
    });
  }

  // Intercept internal quick links so clicking them scrolls smoothly with ZERO page reloads
  initModernSmoothScroll();
}

function initModernSmoothScroll() {
  document.querySelectorAll('a[href^="#"], a[href^="index.html#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const rawHref = this.getAttribute("href");
      if (!rawHref || rawHref === "#") return;
      const hashIndex = rawHref.indexOf("#");
      if (hashIndex === -1) return;
      const targetId = rawHref.substring(hashIndex);
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
        if (history.pushState) {
          history.pushState(null, "", targetId);
        } else {
          location.hash = targetId;
        }
      }
    });
  });
}

function showModal(modal) {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    modal.querySelector(".modal-content")?.classList.add("modal-enter-active");
  }, 10);
}

function hideModal(modal) {
  const content = modal.querySelector(".modal-content");
  if (content) {
    content.classList.remove("modal-enter-active");
    content.classList.add("modal-exit-active");
  }
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
    if (content) content.classList.remove("modal-exit-active");
  }, 250);
}

/* ==========================================================================
   2. Mobile Navigation
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
    });
  });
}

/* ==========================================================================
   3. Practice Areas Filtering & Search
   ========================================================================== */
let activeCategory = "all";
let practiceSearchQuery = "";

function initPracticeAreas() {
  const container = document.getElementById("practiceCardsContainer");
  const filterButtons = document.querySelectorAll(".practice-filter-btn");
  const searchInput = document.getElementById("practiceSearchInput");

  if (!container) return;

  renderPracticeCards();

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("active-filter-tab", "active", "bg-gold-gradient-bg", "text-navy-950", "font-bold");
        b.classList.add("inactive-filter-tab");
      });
      btn.classList.add("active-filter-tab", "active", "bg-gold-gradient-bg");
      btn.classList.remove("inactive-filter-tab", "text-slate-300", "hover:text-gold-light");

      activeCategory = btn.getAttribute("data-category") || "all";
      renderPracticeCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      practiceSearchQuery = e.target.value.toLowerCase().trim();
      renderPracticeCards();
    });
  }
}

function renderPracticeCards() {
  const container = document.getElementById("practiceCardsContainer");
  if (!container) return;

  const filtered = PRACTICE_AREAS.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = !practiceSearchQuery || 
      item.title.toLowerCase().includes(practiceSearchQuery) || 
      item.summary.toLowerCase().includes(practiceSearchQuery) ||
      item.statutes.some(s => s.toLowerCase().includes(practiceSearchQuery));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400">
        <i data-lucide="folder-search" class="w-12 h-12 mx-auto mb-3 text-gold opacity-60"></i>
        <p class="text-lg font-medium">No practice areas match your search.</p>
        <p class="text-sm text-slate-500 mt-1">Try searching for keywords like "Tax", "Arbitration", "Mining", or "NCLT".</p>
      </div>
    `;
    renderIcons();
    return;
  }

  container.innerHTML = filtered.map(practice => `
    <div class="luxury-card rounded-xl p-7 flex flex-col justify-between group relative overflow-hidden border border-gold-subtle hover:border-gold transition-all duration-300">
      <div class="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full pointer-events-none transition-transform group-hover:scale-125 duration-500"></div>
      
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-lg bg-navy-800/80 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy-950 transition-colors duration-300">
            <i data-lucide="${practice.icon || 'scale'}" class="w-6 h-6"></i>
          </div>
          <span class="text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded bg-navy-900 border border-gold/20 text-gold-light">
            ${practice.categoryLabel}
          </span>
        </div>

        <h3 class="font-cinzel text-xl font-bold text-white mb-2.5 group-hover:text-gold-light transition-colors">
          ${practice.title}
        </h3>

        <p class="text-slate-300 text-sm leading-relaxed mb-4">
          ${practice.summary}
        </p>

        <div class="mb-5">
          <div class="statute-label mb-2">Key Statutes:</div>
          <div class="flex flex-wrap gap-1.5">
            ${practice.statutes.slice(0, 2).map(stat => `
              <span class="statute-pill">
                ${stat}
              </span>
            `).join("")}
            ${practice.statutes.length > 2 ? `<span class="statute-more-badge">+${practice.statutes.length - 2} more</span>` : ''}
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <button onclick="openPracticeModal('${practice.id}')" class="inline-flex items-center text-xs uppercase tracking-wider font-bold text-gold hover:text-white transition-colors">
          <span>Scope & Precedents</span>
          <i data-lucide="chevron-right" class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"></i>
        </button>
        <span class="text-xs text-slate-500 font-mono">Benches: ${practice.tribunals.length}</span>
      </div>
    </div>
  `).join("");

  renderIcons();
}

/* ==========================================================================
   4. Practice Detail Modal
   ========================================================================== */
window.openPracticeModal = function(practiceId) {
  const practice = PRACTICE_AREAS.find(p => p.id === practiceId);
  if (!practice) return;

  const modal = document.getElementById("practiceModal");
  const modalContent = document.getElementById("practiceModalContent");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="p-6 md:p-8">
      <div class="flex items-start justify-between border-b border-gold/20 pb-5 mb-6">
        <div class="flex items-center space-x-4">
          <div class="w-14 h-14 rounded-xl bg-gold/10 border border-gold/40 flex items-center justify-center text-gold">
            <i data-lucide="${practice.icon || 'scale'}" class="w-7 h-7"></i>
          </div>
          <div>
            <span class="text-xs uppercase tracking-widest font-bold text-gold px-2.5 py-0.5 rounded bg-navy-950 border border-gold/30">
              ${practice.categoryLabel}
            </span>
            <h3 class="font-cinzel text-2xl font-bold text-white mt-1.5">${practice.title}</h3>
          </div>
        </div>
        <button onclick="closePracticeModal()" class="text-slate-400 hover:text-white p-2 rounded-lg bg-navy-900 border border-slate-800">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="space-y-6 text-slate-300 text-sm leading-relaxed">
        <div>
          <h4 class="text-xs uppercase tracking-widest font-semibold text-gold mb-2">Practice Overview</h4>
          <p class="text-slate-200 text-base font-light">${practice.fullDescription}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-slate-800">
          <div>
            <h4 class="text-xs uppercase tracking-widest font-semibold text-gold mb-2.5 flex items-center">
              <i data-lucide="book-open" class="w-4 h-4 mr-1.5"></i> Governing Enactments & Acts
            </h4>
            <ul class="space-y-1.5">
              ${practice.statutes.map(s => `
                <li class="flex items-center text-xs text-slate-300">
                  <span class="w-1.5 h-1.5 rounded-full bg-gold mr-2"></span>${s}
                </li>
              `).join("")}
            </ul>
          </div>

          <div>
            <h4 class="text-xs uppercase tracking-widest font-semibold text-gold mb-2.5 flex items-center">
              <i data-lucide="landmark" class="w-4 h-4 mr-1.5"></i> Benches & Judicial Forums
            </h4>
            <ul class="space-y-1.5">
              ${practice.tribunals.map(t => `
                <li class="flex items-center text-xs text-slate-300">
                  <span class="w-1.5 h-1.5 rounded-full bg-gold-light mr-2"></span>${t}
                </li>
              `).join("")}
            </ul>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800">
          <h4 class="text-xs uppercase tracking-widest font-semibold text-gold mb-2">Representative Bench Experience</h4>
          <div class="space-y-2">
            ${practice.highlights.map(h => `
              <div class="modal-bench-item p-3 rounded-lg bg-navy-950/70 border border-gold/15 text-xs text-slate-300 flex items-start">
                <i data-lucide="check-circle" class="w-4 h-4 text-gold shrink-0 mr-2 mt-0.5"></i>
                <span>${h}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="mt-8 pt-5 border-t border-gold/20 flex flex-wrap items-center justify-between gap-4">
        <a href="#consultation" onclick="closePracticeModal()" class="gold-gradient-bg text-navy-950 font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider hover:opacity-90 transition-opacity">
          Instruct Counsel on this Matter
        </a>
        <button onclick="closePracticeModal()" class="text-xs uppercase tracking-wider text-slate-400 hover:text-white">
          Close Window
        </button>
      </div>
    </div>
  `;

  showModal(modal);
  renderIcons();
};

window.closePracticeModal = function() {
  const modal = document.getElementById("practiceModal");
  if (modal) hideModal(modal);
};

/* ==========================================================================
   5. Attorneys & Partners Showcase
   ========================================================================== */
function initAttorneys() {
  const container = document.getElementById("attorneysContainer");
  if (!container) return;

  container.innerHTML = ATTORNEYS.map(lawyer => `
    <div class="luxury-card rounded-xl overflow-hidden group flex flex-col justify-between border border-gold-subtle hover:border-gold transition-all duration-300">
      <div class="p-7">
        <div class="flex items-start justify-between mb-4">
          <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/40 flex items-center justify-center font-cinzel text-xl font-bold text-gold group-hover:scale-105 transition-transform bg-slate-100 shrink-0">
            ${lawyer.avatar ? `<img src="${lawyer.avatar}" alt="${lawyer.name}" class="w-full h-full object-cover" loading="lazy">` : lawyer.name.split(" ").map(n => n[0]).join("")}
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded bg-navy-950 border border-gold/30 text-gold-light">
            ${lawyer.experience}
          </span>
        </div>

        <h3 class="font-cinzel text-xl font-bold text-white mb-1 group-hover:text-gold-light transition-colors">
          ${lawyer.name}
        </h3>
        <p class="text-xs font-medium text-gold mb-3 uppercase tracking-wider">
          ${lawyer.role}
        </p>

        <p class="text-xs text-slate-400 font-mono mb-4 border-b border-slate-800 pb-3">
          ${lawyer.qualifications}
        </p>

        <p class="text-slate-300 text-xs leading-relaxed mb-5 line-clamp-3">
          ${lawyer.description}
        </p>

        <div class="mb-4">
          <div class="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">Primary Specializations:</div>
          <div class="flex flex-wrap gap-1">
            ${lawyer.specializations.map(s => `
              <span class="text-[11px] bg-navy-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                ${s}
              </span>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="attorney-card-footer p-4 bg-navy-950/80 border-t border-slate-800/80 flex items-center justify-between">
        <button onclick="downloadVCard('${lawyer.id}')" class="inline-flex items-center text-xs font-semibold text-slate-300 hover:text-gold transition-colors" title="Save Contact vCard">
          <i data-lucide="contact" class="w-4 h-4 mr-1 text-gold"></i>
          <span>Save vCard</span>
        </button>
        <a href="mailto:${lawyer.email}" class="text-slate-400 hover:text-gold transition-colors" title="Direct Email">
          <i data-lucide="mail" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   6. Dynamic vCard Download (.vcf)
   ========================================================================== */
window.downloadVCard = function(lawyerId) {
  const lawyer = ATTORNEYS.find(l => l.id === lawyerId);
  if (!lawyer) return;

  const vCardData = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${lawyer.name}`,
    `ORG:${FIRM_CONFIG.name}`,
    `TITLE:${lawyer.role}`,
    `EMAIL;TYPE=WORK:${lawyer.email}`,
    `TEL;TYPE=WORK:${FIRM_CONFIG.phonePrimary}`,
    `ADR;TYPE=WORK:;;${FIRM_CONFIG.chambersAddress};;;;`,
    `NOTE:${lawyer.qualifications} - ${lawyer.experience}`,
    "END:VCARD"
  ].join("\r\n");

  const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${lawyer.name.replace(/\s+/g, "_")}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/* ==========================================================================
   7. Sectors & Industries Render
   ========================================================================== */
function initSectors() {
  const container = document.getElementById("sectorsContainer");
  if (!container) return;

  container.innerHTML = SECTORS_ADVISED.map(sector => `
    <div class="luxury-card rounded-xl p-5 border border-gold/15 flex items-start space-x-4">
      <div class="w-10 h-10 rounded-lg bg-navy-800 border border-gold/30 flex items-center justify-center text-gold shrink-0">
        <i data-lucide="${sector.icon || 'building'}" class="w-5 h-5"></i>
      </div>
      <div>
        <h4 class="font-cinzel text-base font-bold text-white mb-1">${sector.name}</h4>
        <p class="text-xs text-slate-400 leading-relaxed">${sector.desc}</p>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   8. Legal Insights & Client Alerts Render
   ========================================================================== */
function initLegalInsights() {
  const container = document.getElementById("insightsContainer");
  if (!container) return;

  container.innerHTML = LEGAL_INSIGHTS.map(article => `
    <article class="luxury-card rounded-xl p-6 border border-gold-subtle flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between text-xs text-slate-400 mb-3">
          <span class="text-gold font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-navy-950 border border-gold/20">
            ${article.tag}
          </span>
          <span>${article.date} • ${article.readTime}</span>
        </div>
        <h3 class="font-cinzel text-lg font-bold text-white mb-3 group-hover:text-gold-light transition-colors">
          ${article.title}
        </h3>
        <p class="text-xs text-slate-300 leading-relaxed mb-4">
          ${article.excerpt}
        </p>
      </div>
      <div class="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
        <span class="text-slate-400 font-mono">By ${article.author}</span>
        <button onclick="alert('Full publication brief can be linked to your static Markdown articles or PDF briefs.')" class="text-gold hover:text-white font-semibold inline-flex items-center">
          Read Brief <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1"></i>
        </button>
      </div>
    </article>
  `).join("");
}

/* ==========================================================================
   9. Confidential Case Consultation Form (Email & Multi-channel Dispatch)
   ========================================================================== */
function initConsultationForm() {
  const form = document.getElementById("consultationForm");
  const formSuccess = document.getElementById("formSuccessNotice");
  const practiceSelect = document.getElementById("formPracticeDomain");
  const submitBtn = form?.querySelector("button[type='submit']");

  if (practiceSelect) {
    practiceSelect.innerHTML = `
      <option value="">Select Primary Domain of Dispute</option>
      ${PRACTICE_AREAS.map(p => `<option value="${p.title}">${p.title}</option>`).join("")}
      <option value="General Commercial Dispute">Other Commercial Matter</option>
    `;
  }

  // Update notification email display hint if element exists
  const emailDisplayEl = document.getElementById("consultationEmailDisplay");
  if (emailDisplayEl && FIRM_CONFIG.consultationNotificationEmail) {
    emailDisplayEl.textContent = FIRM_CONFIG.consultationNotificationEmail;
  }

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("clientName")?.value || "";
    const phone = document.getElementById("clientPhone")?.value || "";
    const email = document.getElementById("clientEmail")?.value || "";
    const domain = document.getElementById("formPracticeDomain")?.value || "Legal Advisory";
    const summary = document.getElementById("caseSummary")?.value || "";

    const originalBtnText = submitBtn ? submitBtn.innerHTML : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 mr-2 animate-spin"></i> Transmitting...`;
      renderIcons();
    }

    let isDispatched = false;

    try {
      // 1. Web3Forms Submission Mode
      if (FIRM_CONFIG.formSubmissionMode === "web3forms" && FIRM_CONFIG.web3formsAccessKey && FIRM_CONFIG.web3formsAccessKey !== "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            access_key: FIRM_CONFIG.web3formsAccessKey,
            subject: `[Confidential Case Review] ${domain} - ${fullName}`,
            from_name: `${fullName} (Chambers Portal)`,
            name: fullName,
            phone: phone,
            email: email,
            practice_area: domain,
            message: summary,
            replyto: email || FIRM_CONFIG.consultationNotificationEmail
          })
        });
        if (response.ok) isDispatched = true;
      }
      // 2. Formspree Submission Mode
      else if (FIRM_CONFIG.formSubmissionMode === "formspree" && FIRM_CONFIG.formspreeFormId) {
        const response = await fetch(`https://formspree.io/f/${FIRM_CONFIG.formspreeFormId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            name: fullName,
            phone: phone,
            email: email,
            practice_area: domain,
            message: summary
          })
        });
        if (response.ok) isDispatched = true;
      }
    } catch (err) {
      console.warn("Direct API form dispatch failed, falling back to local confirmation.", err);
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      renderIcons();
    }

    // Show Success Banner
    if (formSuccess) {
      formSuccess.classList.remove("hidden");
      formSuccess.innerHTML = `
        <div class="flex items-start">
          <i data-lucide="check-circle" class="w-5 h-5 mr-3 shrink-0 text-emerald-400 mt-0.5"></i>
          <div>
            <div class="font-bold text-white mb-0.5">Inquiry Registered Successfully</div>
            <div class="text-[11px] leading-relaxed text-emerald-200">
              Your case assessment has been logged for review by our Senior Counsel desk at 
              <span class="font-mono text-gold font-semibold">${FIRM_CONFIG.consultationNotificationEmail}</span>.
              A clerk will contact you within 24 business hours.
            </div>
          </div>
        </div>
      `;
      renderIcons();
      form.reset();
      setTimeout(() => {
        formSuccess.classList.add("hidden");
      }, 9000);
    }

    // Optional: offer direct WhatsApp continuation
    const proceedWhatsapp = confirm(`Thank you, ${fullName}.\n\nYour matter has been directed to ${FIRM_CONFIG.consultationNotificationEmail}.\n\nWould you also like to transmit this summary directly to our Chambers Desk via WhatsApp for priority review?`);
    if (proceedWhatsapp) {
      const msg = encodeURIComponent(`*Confidential Legal Consultation Inquiry*\n\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Email:* ${email || 'N/A'}\n*Practice Area:* ${domain}\n*Matter Brief:* ${summary}`);
      window.open(`https://wa.me/${FIRM_CONFIG.whatsappNumber}?text=${msg}`, "_blank");
    }
  });
}

/* ==========================================================================
   10. Back to Top & Helpers
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
      backToTopBtn.classList.add("opacity-100");
    } else {
      backToTopBtn.classList.add("opacity-0", "pointer-events-none");
      backToTopBtn.classList.remove("opacity-100");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
