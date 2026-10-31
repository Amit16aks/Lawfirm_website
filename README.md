# Law Firm Website — Modern Executive & Classic Variants

A premier, high-performance static website engineered for law firms, featuring modern executive aesthetics, regulatory compliance, and a centralized No-Code CMS.

---

## 🌐 Live Demos on GitHub Pages

Once GitHub Pages is turned on, both variants are accessible directly:

- **Primary Variant (Modern Executive):** `https://amit16aks.github.io/Lawfirm_website/`
- **Backup Variant (Classic Reference):** `https://amit16aks.github.io/Lawfirm_website/classic/`

---

## ⚡ Key Highlights & Architecture

| Feature | Legacy WebForms Design | Our Modern Static Architecture |
| :--- | :--- | :--- |
| **Technology** | ASP.NET WebForms (`.aspx`), slow and heavy | Ultra-lightweight Static HTML5, Tailwind CSS, Vanilla JS (100/100 PageSpeed) |
| **BCI Compliance** | Basic static text on home load | Interactive, glassmorphic **Rule 36 Disclaimer Modal** that activates when landing on home or returning from subpages |
| **Practice Areas** | Unformatted uppercase list | **Filterable & Searchable interactive grid** with statutes, tribunals, and deep-dive scope modals |
| **Attorneys & Partners** | Small cropped images without details | Executive bench cards, academic pedigree, bar experience, and direct inquiry links |
| **Client Inquiry** | Basic contact page | **Privileged & Confidential Case Evaluation Form** with instant WhatsApp Chamber escalation |
| **Design Language** | Outdated table/box layout | **Dual-Themed Executive System**: Crisp Alabaster White & Deep Navy (**Light Mode Default**) + Midnight Luxury (**Dark Mode**) |
| **SEO & Schema** | Minimal meta | Pre-configured **JSON-LD `LegalService` and `Attorney` schemas** for Google Rich Snippets |

---

## 📁 Project Structure

```
Lawfirm_website/
├── index.html          # Main homepage (Hero, metrics, practices, team, consultation)
├── about.html          # Dedicated Firm Legacy page (Founders, milestones, ethos)
├── practices.html      # Dedicated Practice Areas directory with search & modal
├── team.html           # Dedicated Legal Bench page with partner bios
├── contact.html        # Dedicated Chambers locator & Consultation booking desk
├── example_data.js     # Fully filled reference CMS config with field-by-field instructions
├── css/
│   └── styles.css      # Custom styles and luxury styling
├── js/
│   ├── data.js         # Centralized CMS configuration file
│   └── main.js         # Dynamic bindings, modal handlers, smooth scroll
├── images/             # Firm logos, crests, and media
└── classic/            # Complete standalone classic reference backup variant
    ├── index.html
    ├── AboutUs.html
    ├── service.html
    ├── OurTeam.html
    ├── ContactUs.html
    ├── js/data.js
    └── js/main.js
```

---

## ⚙️ How to Customize with the Centralized CMS (`data.js`)

All firm-specific information is cleanly decoupled inside [`js/data.js`](js/data.js):

1. **Email & Contact Numbers (`branding`, `contact`)**:
   - `consultationNotificationEmail`: Destination inbox for client cases.
   - `phonePrimary` & `phoneSecondary`: Hotline numbers shown in top bar and footers.
   - `whatsappNumber`: Floating WhatsApp desk number.
2. **Practice Areas (`PRACTICE_AREAS`)**:
   - Add, edit, or remove practice areas, governing statutes, and tribunals.
3. **Lawyer / Partner Directory (`ATTORNEYS`)**:
   - Update partner names, qualifications, alma maters, experience years, and emails.
4. **Legal Insights / Client Alerts (`LEGAL_INSIGHTS`)**:
   - Add summaries of recent orders, tax updates, and tribunal rulings.
5. **Reference Template**:
   - Refer to [`example_data.js`](example_data.js) for an exact filled copy with detailed comments for each field.

---

## 🚀 GitHub Pages 1-Click Deployment

1. Go to repository **Settings** > **Pages**
2. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **`main`** / **`/(root)`**
3. Click **Save**
4. The site is instantly live with free HTTPS at `https://amit16aks.github.io/Lawfirm_website/`
