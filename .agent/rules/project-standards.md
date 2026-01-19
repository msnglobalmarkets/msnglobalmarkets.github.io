# MSN Global Markets - Project Standards

## Framework Integrity

- **Next.js Version**: 14+
- **Router**: App Router (`/app` directory) ONLY. Legacy `/pages` router is strictly prohibited.
- **Runtime**: strictly avoiding Node.js runtime features (e.g., `getServerSideProps`, API Routes, `headers()`, `cookies()`).

## Static Export Compatibility

- **Deployment Target**: GitHub Pages.
- **Configuration**: `next.config.js` must strictly include `output: 'export'`.
- **Data Fetching**: All data must be fetched at build time (static generation) or client-side (SWR/TanStack Query).

## Styling & Design System

- **Framework**: Tailwind CSS.
- **Aesthetic**: 'Fintech Modern'.
  - **Theme**: Dark mode by default.
  - **Background**: Slate-950.
  - **Primary**: Deep Blue (#0B1120).
  - **Accents**: Gold (#D4AF37) for conversion elements.
- **Typography**: Inter (or similar professional sans-serif).

## Component Library

- **Iconography**: `lucide-react`.
- **Interactive Components**: `shadcn/ui` (Radix Primitives).

## Type Safety

- **Language**: TypeScript.
- **Strictness**: Strict type definitions required. `any` types are strictly prohibited.

## Image Optimization

- **Constraint**: GitHub Pages does not support Next.js default Image Optimization.
- **Solution**: Configure `<Image />` with `unoptimized` prop or use a custom loader.

## Rules of Engagement

- **Agent Behavior**: The agent must act as a Systems Architect.
- **Context Saturation**: Always consider the business domain (high-frequency fintech, trust anchor) and regulatory environment.
- **Prompt Adherence**: Aggressively manage constraints to prevent deployment failures on GitHub Pages.
