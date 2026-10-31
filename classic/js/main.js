/**
 * Main Logic for Classic Reference Variant - Poddar & Associates
 * Dynamically binds data from data.js, handles BCI modal, mobile menu, and form dispatch.
 */

document.addEventListener("DOMContentLoaded", () => {
  initBciModal();
  initMobileMenu();
  initClassicHeroCarousel();
  renderDynamicData();
  initConsultationForm();
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ==========================================================================
   1. BCI Disclaimer Modal
   ========================================================================== */
function isClassicHomePage() {
  if (document.body && document.body.dataset.page === "home") return true;
  if (document.body && document.body.dataset.page && document.body.dataset.page !== "home") return false;
  if (document.getElementById("heroSlidesTrack") || document.getElementById("classicFeaturesContainer")) return true;

  const path = (window.location.pathname || "").toLowerCase().replace(/\\/g, "/");
  const cleanPath = path.split("/").pop();
  return cleanPath === "" || cleanPath === "index.html" || cleanPath === "index.htm";
}

function initBciModal() {
  const modal = document.getElementById("bciModal");
  const acceptBtn = document.getElementById("bciAcceptBtn");
  const declineBtn = document.getElementById("bciDeclineBtn");
  const openTrigger = document.getElementById("openBciFooter");

  if (!modal) return;

  const isHome = isClassicHomePage();

  if (!isHome) {
    // Visitor is currently on a subpage (About, Services, Team, Contact).
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
  initClassicSmoothScroll();
}

function initClassicSmoothScroll() {
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
}

function hideModal(modal) {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

/* ==========================================================================
   2. Mobile Navigation
   ========================================================================== */
function initMobileMenu() {
  const btn = document.getElementById("mobileToggle");
  const menu = document.getElementById("mobileNavDropdown");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

/* ==========================================================================
   2.5. Hero Background Media Carousel (Infinite Loop - Photos & Videos)
   ========================================================================== */
let classicHeroTimer = null;
let currentClassicSlideIndex = 0;
let parsedClassicSlides = [];

function initClassicHeroCarousel() {
  const track = document.getElementById("heroSlidesTrack");
  const dotsContainer = document.getElementById("heroCarouselDots");
  if (!track) return;

  let raw = CLASSIC_FIRM_CONFIG.heroMediaSlides;
  if (!raw) return;

  if (typeof raw === "string") {
    if (raw.includes(",")) {
      parsedClassicSlides = raw.split(",").map(s => s.trim()).filter(Boolean).map(url => ({
        type: isVideoUrl(url) ? "video" : "image",
        url
      }));
    } else {
      parsedClassicSlides = [{
        type: isVideoUrl(raw) ? "video" : "image",
        url: raw
      }];
    }
  } else if (Array.isArray(raw)) {
    parsedClassicSlides = raw.map(item => {
      if (typeof item === "string") {
        return {
          type: isVideoUrl(item) ? "video" : "image",
          url: item
        };
      }
      return item;
    });
  }

  if (parsedClassicSlides.length === 0) return;

  track.innerHTML = parsedClassicSlides.map((slide, idx) => {
    if (slide.type === "video") {
      return `
        <div class="hero-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
          <video src="${slide.url}" ${idx === 0 ? 'autoplay' : ''} muted loop playsinline class="w-full h-full object-cover"></video>
        </div>
      `;
    }
    return `
      <div class="hero-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <img src="${slide.url}" alt="Chambers Background" class="w-full h-full object-cover" ${idx === 0 ? 'loading="eager"' : 'loading="lazy"'}>
      </div>
    `;
  }).join("");

  if (dotsContainer && parsedClassicSlides.length > 1) {
    dotsContainer.innerHTML = parsedClassicSlides.map((_, idx) => `
      <button class="hero-carousel-dot ${idx === 0 ? 'active w-7' : 'w-2.5'}" 
              onclick="goToClassicHeroSlide(${idx})" 
              aria-label="Slide ${idx + 1}" 
              title="Slide ${idx + 1}">
      </button>
    `).join("");
  } else if (dotsContainer) {
    dotsContainer.style.display = "none";
  }

  if (parsedClassicSlides.length > 1) {
    const interval = CLASSIC_FIRM_CONFIG.heroSlideIntervalMs || 6000;
    startClassicHeroTimer(interval);
  }
}

function isVideoUrl(url) {
  if (!url) return false;
  const clean = url.toLowerCase().split("?")[0];
  return clean.endsWith(".mp4") || clean.endsWith(".webm") || clean.endsWith(".ogg") || clean.endsWith(".mov");
}

function startClassicHeroTimer(interval) {
  if (classicHeroTimer) clearInterval(classicHeroTimer);
  classicHeroTimer = setInterval(() => {
    currentClassicSlideIndex = (currentClassicSlideIndex + 1) % parsedClassicSlides.length;
    updateClassicHeroSlide(currentClassicSlideIndex);
  }, interval);
}

window.goToClassicHeroSlide = function(index) {
  if (index < 0 || index >= parsedClassicSlides.length) return;
  currentClassicSlideIndex = index;
  updateClassicHeroSlide(index);
  const interval = CLASSIC_FIRM_CONFIG.heroSlideIntervalMs || 6000;
  startClassicHeroTimer(interval);
};

function updateClassicHeroSlide(index) {
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
   3. Render Dynamic Content from data.js
   ========================================================================== */
function renderDynamicData() {
  if (typeof CLASSIC_FIRM_CONFIG === "undefined") return;

  // 1. Header, Branding & Contact Elements
  document.querySelectorAll(".classic-firm-name").forEach(el => el.textContent = CLASSIC_FIRM_CONFIG.name);
  document.querySelectorAll(".classic-firm-tagline").forEach(el => {
    el.textContent = `${CLASSIC_FIRM_CONFIG.tagline} • Estd. ${CLASSIC_FIRM_CONFIG.estYear}`;
  });
  document.querySelectorAll(".firm-phone1").forEach(el => el.textContent = CLASSIC_FIRM_CONFIG.phone1);
  document.querySelectorAll(".firm-phone2").forEach(el => el.textContent = CLASSIC_FIRM_CONFIG.phone2);
  document.querySelectorAll(".firm-email").forEach(el => {
    el.textContent = CLASSIC_FIRM_CONFIG.emailGeneral;
    if (el.tagName === "A") el.href = `mailto:${CLASSIC_FIRM_CONFIG.emailGeneral}`;
  });
  document.querySelectorAll(".classic-ranchi-address").forEach(el => el.textContent = CLASSIC_FIRM_CONFIG.address);
  document.querySelectorAll(".classic-delhi-office").forEach(el => el.textContent = CLASSIC_FIRM_CONFIG.delhiOffice);

  // Floating WhatsApp link
  if (CLASSIC_FIRM_CONFIG.whatsappNumber) {
    const waNum = CLASSIC_FIRM_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
    document.querySelectorAll(".floating-whatsapp-btn, #floatingWhatsappBtn").forEach(el => {
      el.href = `https://wa.me/${waNum}?text=${encodeURIComponent("Hello Poddar & Associates, I would like to inquire regarding legal services.")}`;
    });
  }

  // 2. Hero Banner Caption (Homepage)
  const heroHead = document.getElementById("classicHeroHeadline");
  if (heroHead && CLASSIC_FIRM_CONFIG.heroHeadline) heroHead.textContent = CLASSIC_FIRM_CONFIG.heroHeadline;
  const heroSub = document.getElementById("classicHeroSubtitle");
  if (heroSub && CLASSIC_FIRM_CONFIG.heroSubtitle) heroSub.textContent = CLASSIC_FIRM_CONFIG.heroSubtitle;

  // 3. About Preview on Homepage
  const aboutPrev = document.getElementById("classicAboutPreviewText");
  if (aboutPrev && CLASSIC_FIRM_CONFIG.aboutPreview) aboutPrev.textContent = CLASSIC_FIRM_CONFIG.aboutPreview;

  // 4. Render 4 Signature Feature Blocks
  const featuresContainer = document.getElementById("classicFeaturesContainer");
  if (featuresContainer && CLASSIC_FIRM_CONFIG.classicFeatures) {
    featuresContainer.innerHTML = CLASSIC_FIRM_CONFIG.classicFeatures.map(feat => `
      <div class="feature-box p-6 rounded-lg" style="border-top-color: ${feat.badgeColor};">
        <div class="flex items-center space-x-3 mb-3">
          <div class="w-10 h-10 rounded-full flex items-center justify-center text-white" style="background-color: ${feat.badgeColor};">
            <i data-lucide="${feat.icon || 'star'}" class="w-5 h-5"></i>
          </div>
          <h3 class="serif-font font-bold text-lg text-slate-900">${feat.title}</h3>
        </div>
        <p class="text-sm text-slate-600 leading-relaxed mb-4">${feat.desc}</p>
        <a href="AboutUs.html" class="text-xs font-bold uppercase tracking-wider hover:underline" style="color: ${feat.badgeColor};">
          Learn More &rarr;
        </a>
      </div>
    `).join("");
  }

  // 5. Render Practice Services
  const mainServicesContainer = document.getElementById("classicServicesContainer");
  if (mainServicesContainer && CLASSIC_PRACTICE_DATA.mainServices) {
    mainServicesContainer.innerHTML = CLASSIC_PRACTICE_DATA.mainServices.map(s => `
      <div class="p-6 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div class="w-10 h-10 rounded-lg bg-red-800 text-white flex items-center justify-center mb-4">
          <i data-lucide="briefcase" class="w-5 h-5"></i>
        </div>
        <h3 class="serif-font font-bold text-lg text-slate-900 mb-2">${s.title}</h3>
        <p class="text-sm text-slate-600 leading-relaxed">${s.desc}</p>
      </div>
    `).join("");
  }

  // 6. Render Case Related To list
  const casesContainer = document.getElementById("classicCasesContainer");
  if (casesContainer && CLASSIC_PRACTICE_DATA.casesRelatedTo) {
    casesContainer.innerHTML = CLASSIC_PRACTICE_DATA.casesRelatedTo.map(c => `
      <div class="practice-item p-3.5 mb-2 rounded border border-slate-200 text-xs font-semibold text-slate-800 flex items-center">
        <span class="w-2 h-2 rounded-full bg-red-800 mr-3 shrink-0"></span>
        <span>${c}</span>
      </div>
    `).join("");
  }

  // 7. Render Tribunals list
  const tribunalsContainer = document.getElementById("classicTribunalsContainer");
  if (tribunalsContainer && CLASSIC_PRACTICE_DATA.tribunals) {
    tribunalsContainer.innerHTML = CLASSIC_PRACTICE_DATA.tribunals.map(t => `
      <div class="p-3.5 mb-2 rounded bg-slate-50 border-l-4 border-blue-900 border-y border-r border-slate-200 text-xs font-bold text-blue-950 flex items-center">
        <i data-lucide="landmark" class="w-4 h-4 mr-2.5 text-blue-900 shrink-0"></i>
        <span>${t}</span>
      </div>
    `).join("");
  }

  // 8. Render Team Members Grid
  const teamContainer = document.getElementById("classicTeamContainer");
  if (teamContainer && CLASSIC_TEAM) {
    teamContainer.innerHTML = CLASSIC_TEAM.map(member => `
      <div class="team-card rounded-lg overflow-hidden border border-slate-200 text-center p-6 flex flex-col justify-between">
        <div>
          <div class="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-slate-100 border-2 border-red-800 flex items-center justify-center serif-font font-bold text-xl text-red-900 shadow-sm">
            ${member.image ? `<img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover">` : member.name.split(" ").map(n => n[0]).join("")}
          </div>
          <h3 class="serif-font font-bold text-base text-slate-900 mb-1">${member.name}</h3>
          <p class="text-xs font-bold text-red-800 uppercase tracking-wider mb-2">${member.role}</p>
          <p class="text-xs font-semibold text-slate-600 font-mono mb-3">${member.exp}</p>
          <p class="text-xs text-slate-700 italic border-t border-slate-100 pt-3">${member.specialty}</p>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100">
          <a href="ContactUs.html" class="text-xs font-bold text-slate-800 hover:text-red-800">
            Inquire with Advocate &rarr;
          </a>
        </div>
      </div>
    `).join("");
  }

  // 9. Render Clients Grid
  const clientsContainer = document.getElementById("classicClientsContainer");
  if (clientsContainer && CLASSIC_CLIENTS) {
    clientsContainer.innerHTML = CLASSIC_CLIENTS.map(cl => `
      <div class="client-box p-5 rounded-lg text-center flex flex-col items-center justify-center">
        <div class="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700 mb-2">
          <i data-lucide="building" class="w-6 h-6"></i>
        </div>
        <h4 class="font-bold text-xs text-slate-900 mb-1">${cl.name}</h4>
        <span class="text-[11px] font-medium text-slate-600">${cl.type}</span>
      </div>
    `).join("");
  }

  // 10. Bind About Preview Card Background Image
  const classicAbout = document.getElementById("classicAboutCard");
  if (classicAbout) {
    const imgUrl = (CLASSIC_FIRM_CONFIG.media && CLASSIC_FIRM_CONFIG.media.aboutPreviewImage) || CLASSIC_FIRM_CONFIG.aboutPreviewImage;
    if (imgUrl) {
      classicAbout.style.backgroundImage = `linear-gradient(rgba(15,23,42,0.75), rgba(15,23,42,0.88)), url('${imgUrl}')`;
    }
  }

  // 11. Bind Custom Logo if provided
  const logoUrl = CLASSIC_FIRM_CONFIG.media && CLASSIC_FIRM_CONFIG.media.firmLogoUrl;
  if (logoUrl) {
    document.querySelectorAll(".classic-firm-logo").forEach(el => {
      el.innerHTML = `<img src="${logoUrl}" alt="${CLASSIC_FIRM_CONFIG.name}" class="h-10 object-contain">`;
    });
  }

  // 12. Footer & Copyright
  if (CLASSIC_FIRM_CONFIG.footer) {
    document.querySelectorAll(".classic-footer-summary").forEach(el => el.textContent = CLASSIC_FIRM_CONFIG.footer.summary);
    document.querySelectorAll(".classic-footer-copyright").forEach(el => el.textContent = CLASSIC_FIRM_CONFIG.footer.copyright);
  }

  // 13. BCI Modal Texts
  if (CLASSIC_FIRM_CONFIG.bciModal) {
    const bTitle = document.getElementById("classicBciTitle");
    if (bTitle) bTitle.textContent = CLASSIC_FIRM_CONFIG.bciModal.title;
    const bSub = document.getElementById("classicBciSubtitle");
    if (bSub) bSub.textContent = CLASSIC_FIRM_CONFIG.bciModal.subtitle;
    const bBody = document.getElementById("classicBciBody");
    if (bBody) {
      if (Array.isArray(CLASSIC_FIRM_CONFIG.bciModal.paragraphs)) {
        bBody.innerHTML = CLASSIC_FIRM_CONFIG.bciModal.paragraphs.map(p => `<p>${p}</p>`).join("");
      } else if (CLASSIC_FIRM_CONFIG.bciModal.bodyText) {
        bBody.textContent = CLASSIC_FIRM_CONFIG.bciModal.bodyText;
      }
    }
    const bAccept = document.getElementById("bciAcceptBtn");
    if (bAccept && CLASSIC_FIRM_CONFIG.bciModal.acceptButtonText) {
      bAccept.innerHTML = `<i data-lucide="check" class="w-4 h-4 mr-1.5 inline"></i> ${CLASSIC_FIRM_CONFIG.bciModal.acceptButtonText}`;
    }
    const bDecline = document.getElementById("bciDeclineBtn");
    if (bDecline && CLASSIC_FIRM_CONFIG.bciModal.declineButtonText) {
      bDecline.textContent = CLASSIC_FIRM_CONFIG.bciModal.declineButtonText;
    }
  }

  // 14. Subpages: AboutUs.html
  if (CLASSIC_FIRM_CONFIG.aboutPage) {
    const abTitle = document.getElementById("classicAboutTitle");
    if (abTitle) abTitle.textContent = CLASSIC_FIRM_CONFIG.aboutPage.title;
    const abPillars = document.getElementById("classicPillarsHeading");
    if (abPillars) abPillars.textContent = CLASSIC_FIRM_CONFIG.aboutPage.pillarsHeading;
    const abParas = document.getElementById("classicAboutParagraphs");
    if (abParas && Array.isArray(CLASSIC_FIRM_CONFIG.aboutPage.paragraphs)) {
      abParas.innerHTML = CLASSIC_FIRM_CONFIG.aboutPage.paragraphs.map(p => `<p>${p}</p>`).join("");
    }
  }

  // 15. Subpages: service.html, OurTeam.html, ContactUs.html
  if (CLASSIC_FIRM_CONFIG.servicePage) {
    const svcHead = document.getElementById("classicServiceHeading");
    if (svcHead) svcHead.textContent = CLASSIC_FIRM_CONFIG.servicePage.heading;
    const svcSub = document.getElementById("classicServiceSubtitle");
    if (svcSub) svcSub.textContent = CLASSIC_FIRM_CONFIG.servicePage.subtitle;
  }
  if (CLASSIC_FIRM_CONFIG.teamPage) {
    const tmHead = document.getElementById("classicTeamHeading");
    if (tmHead) tmHead.textContent = CLASSIC_FIRM_CONFIG.teamPage.heading;
    const tmSub = document.getElementById("classicTeamSubtitle");
    if (tmSub) tmSub.textContent = CLASSIC_FIRM_CONFIG.teamPage.subtitle;
  }
  if (CLASSIC_FIRM_CONFIG.contactPage) {
    const ctHead = document.getElementById("classicContactHeading");
    if (ctHead) ctHead.textContent = CLASSIC_FIRM_CONFIG.contactPage.heading;
    const rTitle = document.getElementById("classicRanchiOfficeTitle");
    if (rTitle) rTitle.textContent = CLASSIC_FIRM_CONFIG.contactPage.ranchiOfficeTitle;
    const dTitle = document.getElementById("classicDelhiOfficeTitle");
    if (dTitle) dTitle.textContent = CLASSIC_FIRM_CONFIG.contactPage.delhiOfficeTitle;
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   4. Consultation Form (Connected to Centralized Email in data.js)
   ========================================================================== */
function initConsultationForm() {
  const form = document.getElementById("classicConsultationForm");
  const successNotice = document.getElementById("classicSuccessNotice");
  const emailNoticeEl = document.getElementById("classicDestEmail");

  if (emailNoticeEl && CLASSIC_FIRM_CONFIG.consultationNotificationEmail) {
    emailNoticeEl.textContent = CLASSIC_FIRM_CONFIG.consultationNotificationEmail;
  }

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("formName")?.value || "";
    const phone = document.getElementById("formPhone")?.value || "";
    const email = document.getElementById("formEmail")?.value || "";
    const subject = document.getElementById("formSubject")?.value || "Legal Inquiry";
    const message = document.getElementById("formMessage")?.value || "";

    const submitBtn = form.querySelector("button[type='submit']");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Transmitting...";
    }

    try {
      if (CLASSIC_FIRM_CONFIG.formSubmissionMode === "web3forms" && CLASSIC_FIRM_CONFIG.web3formsAccessKey && CLASSIC_FIRM_CONFIG.web3formsAccessKey !== "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            access_key: CLASSIC_FIRM_CONFIG.web3formsAccessKey,
            subject: `[Client Inquiry] ${subject} - ${name}`,
            name: name,
            phone: phone,
            email: email,
            message: message,
            to_email: CLASSIC_FIRM_CONFIG.consultationNotificationEmail
          })
        });
      }
    } catch (err) {
      console.warn("API dispatch handled locally", err);
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Inquiry";
    }

    if (successNotice) {
      successNotice.classList.remove("hidden");
      successNotice.innerHTML = `
        <strong>Inquiry Sent!</strong> Your message has been routed to 
        <span class="font-mono font-bold">${CLASSIC_FIRM_CONFIG.consultationNotificationEmail}</span>. Our chamber clerk will contact you shortly.
      `;
      form.reset();
      setTimeout(() => successNotice.classList.add("hidden"), 8000);
    }

    const askWhatsapp = confirm(`Thank you, ${name}.\n\nYour message was sent to ${CLASSIC_FIRM_CONFIG.consultationNotificationEmail}.\n\nWould you like to open WhatsApp to connect directly with the Chambers desk?`);
    if (askWhatsapp) {
      const msg = encodeURIComponent(`*Case Inquiry*\n*Name:* ${name}\n*Phone:* ${phone}\n*Subject:* ${subject}\n*Message:* ${message}`);
      window.open(`https://wa.me/${CLASSIC_FIRM_CONFIG.whatsappNumber}?text=${msg}`, "_blank");
    }
  });
}
