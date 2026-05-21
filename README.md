# Dominic Thormann — Seminar Landing Page

Next.js port of the static `index.html` landing page.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Project structure

- `app/` — App Router pages and global styles
- `components/` — Page sections (Nav, Hero, Proof, …)
- `public/images/` — Static assets (copied from `images/`)
- `index.html` — Original static version (kept for reference)

## Stripe

Replace the placeholder checkout URL in `components/Termine.tsx`:

`https://buy.stripe.com/REPLACE_LINK`

## Legal pages

`/impressum`, `/datenschutz`, and `/agb` are placeholder routes. Add your legal copy in `components/LegalPage.tsx` or split into dedicated page content.
