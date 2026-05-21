# Dominic Thormann — Seminar Landing Page

Next.js port of the static `index.html` landing page.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Git & Vercel

Repository: [github.com/Dom1c/landingpage](https://github.com/Dom1c/landingpage)

### Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. **Import** the `Dom1c/landingpage` repository.
3. Leave the defaults (Next.js is auto-detected). Click **Deploy**.
4. Future pushes to `main` will trigger automatic production deployments.

No environment variables are required for the static landing page. Add Stripe or other secrets in the Vercel project settings when you wire up checkout.

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
