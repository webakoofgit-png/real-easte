# CLOUD 9 CONSULTANT
> **"Your Trusted Partner for Loans & Property Solutions."**

A luxury multi-page real estate & financial advisory platform engineered with **Next.js (App Router, TypeScript)**, **Tailwind CSS**, **Lenis Smooth Scroll**, and **GSAP ScrollTrigger**.

---

## 🌟 The Triad of Services
- **Loans**: High-value Jumbo Home Loans, Loan Against Property (LAP), Commercial Project Financing & Balance Transfers.
- **Property**: Curated luxury villas, sky penthouses, commercial assets, and off-market estates.
- **Financial Solutions**: Strategic wealth structuring, debt optimization, and private equity placement.

---

## 🚀 Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom luxury tokens, glassmorphism, champagne gold & ruby-red accents)
- **Smooth Physics Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Scroll Animation Engine**: [GSAP](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Currency System**: Indian Rupee (₹ / INR / Crores & Lakhs)

---

## 📂 Architecture

```
real-easte/
├── app/
│   ├── layout.tsx                # Lenis smooth scroll wrapper + Navbar + Footer + Meta
│   ├── globals.css               # Luxury theme, gold accents & glassmorphism
│   ├── page.tsx                  # Home Landing Page with Hero, GSAP horizontal showcase & pillars
│   ├── properties/
│   │   ├── page.tsx              # Listings Directory with reactive filters
│   │   └── [id]/
│   │       └── page.tsx          # Dynamic Property Detail (Gallery, Specs, Calculator & Form)
│   ├── about/
│   │   └── page.tsx              # Agency Story, Philosophy, Stats & Team
│   └── contact/
│       └── page.tsx              # Encrypted Intake Form, Hotline & Advisory Suites
├── components/
│   ├── SmoothScroll.tsx          # Lenis RAF loop synchronized with GSAP ticker
│   ├── Navbar.tsx                # Glassmorphic floating header with active links & drawer
│   ├── Footer.tsx                # Editorial footer with global branches
│   ├── home/
│   │   ├── Hero.tsx              # Cinematic video hero with kinetic text reveal
│   │   ├── HorizontalListings.tsx# GSAP ScrollTrigger horizontal pinned scroll showcase
│   │   ├── ServicesPillars.tsx   # Loans | Property | Financial Solutions interactive triad
│   │   └── StackingCards.tsx     # Layered sticky architectural & financial pillars
│   └── properties/
│       ├── PropertyCard.tsx      # Reusable card with hover zoom and badge
│       ├── PropertyFilter.tsx    # Interactive filter bar (Location, Price, Type, Beds)
│       ├── PropertiesDirectory.tsx# Instant reactive client-side search & filtering
│       └── PropertyDetailView.tsx# Gallery, mortgage calculator & tour booking form
├── data/
│   └── properties.json           # 8 ultra-luxury listings with full specs & coordinates
└── lib/
    ├── properties.ts             # Typed data access layer
    └── utils.ts                  # Class merging and currency formatters (₹ Cr / Lakhs)
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📄 License
All rights reserved © 2026 Cloud 9 Consultant.
