# Product Requirements Document (PRD): MSN Global Markets

## 1. Project Overview

**Project Name:** MSN Global Markets Platform  
**Vision:** A "Digital Trust Anchor" for institutional-grade AI asset management, bridging the gap between complex algorithmic trading and retail/HNI accessibility.  
**Core Value Prop:** AI-powered automated fund management with 18+ years of experience, offering flexible broker choice (No Vendor Lock-in).

## 2. Personas

### A. The Beginner Investor

- **Goals:** Diversify savings without learning complex technical analysis.
- **Fears:** Losing capital to "scam" bots or complex interfaces.
- **Solution:** Transparent performance tracking, simple onboarding, regulated broker partners.

### B. The Tech-Savvy Multi-Broker Trader

- **Goals:** Maximize efficiency across different platforms (MT4/MT5).
- **Fears:** Platform downtime, vendor lock-in, high spreads.
- **Solution:** Multi-broker flexibility (Mex, Exness, AvaTrade), high-frequency AI execution.

### C. The HNI (High Net Worth Individual)

- **Goals:** Consistent portfolio growth with managed risk.
- **Fears:** Lack of institutional oversight.
- **Solution:** 18+ years of proven methodology, clear risk disclosure, custom EA services.

## 3. Sitemap & Route Map

- `/` - **Home**: High-impact landing, Bento Feature Grid, Trust Bar.
- `/ai-funds` - **Fund Management**: Details on AI strategies (Aggressive vs. Conservative).
- `/performance` - **Methodology & Results**: Live/Simulated growth charts, drawdown stats.
- `/partners` - **Broker Ecosystem**: Comparison table of Mex Atlantic, AvaTrade, JKV Global, Exness.
- `/expert-advisors` - **Custom EA Services**: Algorithmic engineering for professional clients.
- `/how-it-works` - **Onboarding**: Step-by-step guide to connecting accounts.
- `/about` - **Company**: 18 years of history, Dubai-based leadership, philosophy.
- `/contact` - **Support**: Consultation booking.
- `/legal` - **Compliance**: Full risk warning, Privacy, Terms.

## 4. Design System (Fintech Modern)

- **Primary Palette:**
  - Slate-950 (#020617) - Background Depth
  - Midnight Navy (#0B1120) - Card Backgrounds
  - Gold (#D4AF37) - Accents/CTAs
- **Typography:**
  - **Lexend**: Headings (Financial clarity & modern feel)
  - **Inter**: Body (High legibility)
- **Visuals:** Dubai-style skyline overlays, glassmorphism, isometric grid patterns.

## 5. Technical Constraints

- **Framework:** Next.js 14 (App Router).
- **Styling:** Tailwind CSS.
- **Deployment:** GitHub Pages (Static Export).
- **Routing:** Must use `trailingSlash: true` and `404.html` hack for root deployment.

## 6. Regulatory & Compliance

- **Mandatory Risk Warning**: Visible on every page (Footer + Disclaimer Modal).
- **No Advice Disclaimer**: Explicit statement that information is not financial advice.
- **IB Disclosure**: Clear mention of relationships with Mex, Exness, etc.
