# Poddar & Associates — Classic Reference Website Variant (Backup)

This directory (`D:\freelancer\website-classic\`) contains a **1:1 faithful recreation of the visual identity, structure, and look & feel of the reference website** ([poddarandassociates.com](https://poddarandassociates.com/)), re-engineered using **modern, fast, zero-dependency static architecture**.

Use this variant as your backup if your client explicitly requests the traditional layout of the existing website.

---

## 🌟 Key Features of the Classic Variant

- **Exact Reference Layout:**
  - Traditional Navy/Maroon branding with crisp white backgrounds and classic serif headers (*Merriweather* + *Open Sans*).
  - The signature **4 Feature Blocks**: *Deadline Assistant*, *Quick Info Center*, *Our Core Values*, and *Team Work*.
  - Classic **3-part practice area structure**: *Legal Consultancy*, *Court Appearance*, and *Drafting Conveyance*.
  - Complete list of **20+ Case Disciplines & Tribunals** (ITAT, CAT, DRT, Commercial Taxes).
  - Full **9-member advocate team roster** matching the original site.
  - Classic client logo grid.
- **Modern Performance Upgrades:**
  - Instant loading (zero ASP.NET server bloat, zero `__VIEWSTATE`).
  - Mobile responsive navigation dropdown.
  - Fully compliant **Bar Council of India Rule 36 Disclaimer Modal**.
  - **Centralized Data File (`js/data.js`)** allowing the client to edit all information in one place.
  - Functional Case Inquiry Form connected to the client's destination email.

---

## 📂 Project Structure

```
D:\freelancer\website-classic\
├── index.html        # Classic Homepage (matching Default.aspx)
├── AboutUs.html      # About the Firm (matching AboutUs.aspx)
├── service.html      # Practice Areas & Case Related To (matching service.aspx)
├── OurTeam.html      # Advocate Team Roster (matching OurTeam.aspx)
├── ContactUs.html    # Chambers Details & Inquiry Form (matching ContactUs.aspx)
├── css/
│   └── styles.css    # Classic reference stylesheet (Maroon/Navy/White, Merriweather)
├── js/
│   ├── data.js       # Centralized client configuration (Email, phones, team, practice areas)
│   └── main.js       # Dynamic data binding, BCI modal, form dispatch
└── images/           # Image assets
```

---

## 📧 How to Change the Client's Destination Email & Data

Open [`js/data.js`](file:///D:/freelancer/website-classic/js/data.js):

```javascript
const CLASSIC_FIRM_CONFIG = {
  // 1. Set the client's receiving email address:
  consultationNotificationEmail: "chambers@poddarandassociates.com", // <-- EDIT THIS!

  // 2. Contact numbers:
  phone1: "9525600001",
  phone2: "9431101716",

  // 3. Customize the 4 feature blocks:
  classicFeatures: [
    { title: "Deadline Assistant", desc: "..." },
    { title: "Quick Info Center", desc: "..." },
    { title: "Our Core Values", desc: "..." },
    { title: "Team Work", desc: "..." }
  ]
};
```

---

## 🚀 How to Run and Preview

### Option 1: Direct File Open
Double-click [`index.html`](file:///D:/freelancer/website-classic/index.html) in Windows Explorer to open it in Chrome or Edge.

### Option 2: Using Local Server
Run in PowerShell:
```powershell
npx serve "D:\freelancer\website-classic" -l 3001
```
Then visit `http://localhost:3001`.
