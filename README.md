# Barimap (બારીમાપ) — Landing Page

> The official marketing landing page for **Barimap**, the aluminium fabricator app for window & door manufacturers.

---

## 📱 About the App

**Barimap (બારીમાપ)** is a specialized field-utility mobile app for aluminium fabricators and window/door manufacturers. It automates window and door measurement calculations and instantly generates professional branded PDF quotations — replacing slow, error-prone manual paper-based work.

**Key Features:**
- ⚡ Instant calculation of profile lengths, hardware quantities & material requirements
- 📄 Professional branded PDF quotation generation (share via WhatsApp)
- 📁 Project & history management — all past projects in one place
- 🌐 Multi-language: **ગુજરાતી (Gujarati)**, **हिन्दी (Hindi)**, **English**

**Pricing:** 1st month free trial, then ₹179/month.

---

## 🌐 Landing Page

This repository contains the **static HTML/CSS/JS landing page** for Barimap.

### Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (Semantic) |
| Styling | Vanilla CSS (mobile-first) |
| Interactivity | Vanilla JavaScript |
| Fonts | Google Fonts — Inter |
| Icons | Inline SVG |
| Deployment | Vercel |

### File Structure

```
barimap/
├── index.html          # Main landing page
├── style.css           # All styles
├── script.js           # Interactivity (nav, carousel, language switcher)
├── vercel.json         # Vercel deployment config
├── README.md           # This file
├── logo.png            # App logo
└── images/             # App screenshots
    ├── WhatsApp Image 2026-09-17 at 1.01.22 PM.jpeg   # Login screen
    ├── WhatsApp Image 2026-09-17 at 1.01.24 PM.jpeg   # Dashboard
    ├── WhatsApp Image 2026-09-17 at 1.01.25 PM (2).jpeg # New Project
    ├── WhatsApp Image 2026-09-17 at 1.01.26 PM.jpeg   # Add Windows
    ├── WhatsApp Image 2026-09-17 at 1.01.26 PM (1).jpeg # Results
    └── WhatsApp Image 2026-09-17 at 1.01.25 PM (1).jpeg # Settings
```

### Page Sections

1. **Navbar** — Fixed top nav with hamburger menu for mobile
2. **Hero** — Headline, CTAs, animated phone carousel with real app screenshots
3. **Problem** — 4 pain-point cards (time waste, errors, unprofessional quotes, no history)
4. **How It Works** — 4-step flow: Enter → Select → Calculate → Share PDF
5. **Features** — 4 feature cards (Calculation, PDF, History, Multi-language)
6. **Language Support** — Interactive Gujarati / Hindi / English switcher
7. **App Screenshots** — Scrollable gallery of real app screens
8. **Pricing** — Free trial + ₹179/month plan cards
9. **Final CTA** — Download + WhatsApp buttons
10. **Footer** — Logo, social links, contact, download badge

---

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Deploy from the project folder
cd barimap
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: barimap
# - Root directory: ./
# - Framework: Other
```

### Option 2: Vercel Dashboard (Drag & Drop)

1. Go to [vercel.com](https://vercel.com) and log in
2. Click **"Add New Project"** → **"Deploy"**
3. Drag and drop the entire `barimap/` folder
4. Vercel will auto-detect it as a static site and deploy

### Option 3: GitHub + Vercel (Auto-deploy)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Import Project**
3. Connect your GitHub repo
4. Vercel will auto-deploy on every `git push`

---

## 🛠️ Local Development

No build step needed — it's plain HTML/CSS/JS.

```bash
# Open directly in browser
start index.html       # Windows
open index.html        # macOS

# Or serve with a local server (optional)
npx serve .
# Visit: http://localhost:3000
```

---

## 📞 Contact & Support

| Channel | Details |
|---|---|
| WhatsApp | [+91 9714865744](https://wa.me/919714865744) |
| Instagram | [@barimap.app](https://www.instagram.com/barimap.app) |
| Download | [Google Drive APK](https://drive.google.com/file/d/1fQ_w-UxZ_K9IVaVxTMw5KJWQvDCHkP7S/view?ref=website) |

---

## 📄 License

© 2026 Barimap (બારીમાપ). All rights reserved.
