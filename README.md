# AethelGrid Website

React + TypeScript + Vite landing page for AethelGrid hosting. The site currently includes the homepage, Minecraft hosting, Discord bot hosting, VPS, About, Support, Terms, Privacy, and Status pages.

## Local development

Requirements: Node.js LTS and npm.

```bash
npm ci
npm run dev
```

## Validate before deployment

```bash
npm run typecheck
npm run lint
npm run build
```

The production site is generated in `dist/`. Deploy that directory to a static host such as Vercel. `vercel.json` contains the SPA route fallback.

## Before launch

- Replace the estimated prices in `src/components/Pricing.tsx` and all service-page plan data with actual AethelGrid rates.
- Set `VITE_CLIENT_AREA_URL` to your actual WHMCS/Paymenter client portal. If unset, the Client Area link points to `/support`.
- Replace the generic social and Discord links in `src/components/Footer.tsx` with official AethelGrid links.
- Review `src/pages/tos.tsx` and `src/pages/privacy.tsx` for your actual policies and legal requirements.
- The Status page is currently static; it is not connected to live monitoring.
- Orders and payments are not integrated by this frontend template. Connect service plan buttons to your billing system before accepting orders.
- Update the domain in `index.html` if your production domain differs from `https://aethelgrid.com/`.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React icons
