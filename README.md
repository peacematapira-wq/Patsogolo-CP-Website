# Patsogolo CP Foundation — Website

A Next.js (App Router) site for Patsogolo CP Foundation, Mangochi District, Malawi.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- Content-as-data pattern: page copy lives in `src/data/*.ts`, not hardcoded in components

## Project structure

```
src/
  app/                  → one route folder per page
    page.tsx            → Home
    about/               About Us
    vision-mission/      Vision & Mission
    programs/            Our Programs (3 pillars, tabbed)
    projects/            Projects (initiatives + growth timeline)
    news/                News
    gallery/              Gallery
    team/                Team
    partners/            Partners
    publications/        Publications (PDF downloads)
    contact/              Contact (form)
    donate/              Donate (3-step flow)
    layout.tsx           Root layout — fonts, Navbar, Footer
    globals.css          Design tokens (colors, fonts) as CSS variables

  components/
    layout/              Navbar, Footer
    ui/                  Shared building blocks (Container, Reveal,
                         PageBanner, SectionHead, PathTimeline, PillarTabs,
                         ContactForm)
    home/                Home-page-only sections (Hero, PillarsTeaser,
                         FeaturedActivity, DonateBanner)
    donate/              DonateFlow (the multi-step donate UI)

  data/                  All page content as typed data
    site.ts              Nav items, contact info, clinic sites, hero stats
    timeline.ts           Growth journey + origin story + impact stats
    programs.ts           The 3 pillars and their components
    projects.ts            Discrete initiatives (EDACS, ReHapp, cookbook, etc.)
    news.ts                 News items
    team.ts                 Team members
    partners.ts             Partner organisations
    publications.ts         Downloadable PDFs + journal publications
    activities.ts           Activities for the Gallery/home featured section

public/
  images/                logo.jpg, world-disability-day.jpg
  resources/             historical-growth-summary.pdf, programme-pillars.pdf
```

## Running locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Building for production

```bash
npm run build
npm run start
```

## Deploying

This is a standard Next.js app — the easiest path is Vercel: push this repo
to GitHub and import it in Vercel, or run `npx vercel` from this folder. No
environment variables are required.

## Updating content

Almost everything on the site is data-driven. To update:

- **Team members** → edit `src/data/team.ts`
- **News items** → edit `src/data/news.ts`
- **Projects** → edit `src/data/projects.ts`
- **Partners** → edit `src/data/partners.ts`
- **Programme pillars** → edit `src/data/programs.ts`
- **Publications / PDFs** → edit `src/data/publications.ts` and drop new files in `public/resources/`
- **Photos** → drop images in `public/images/` and reference them in `src/data/activities.ts`

## Known gaps / next steps

- **Donate flow is a UI preview only.** It doesn't process real payments. To
  accept live gifts, connect a payment processor (Airtel Money API, TNM
  Mpamba, PayChangu, or a card gateway like Stripe/Flutterwave) inside
  `src/components/donate/DonateFlow.tsx`.
- **Contact form** currently opens the user's email client via a `mailto:`
  link rather than submitting to a backend. To make it a "real" form, wire it
  to an API route (e.g. `src/app/api/contact/route.ts`) and an email service
  (Resend, SendGrid, etc.).
- **Gallery page** activity tiles reference `public/images/IMG_3300.jpg` through
  `IMG_3305.jpg`. Each tile auto-detects its file and shows a "Photo coming
  soon" placeholder until that exact filename exists — drop your photos in
  with matching names (adjust the extension in `src/data/activities.ts` if
  yours aren't `.jpg`) and they'll appear automatically. Feel free to
  reassign which photo goes with which activity by editing the `image` field
  per entry.
- **Gallery page** also has a featured video slot for the World CP Day drama
  at Makawa Primary School — drop the file at
  `public/videos/world-cp-day-makawa-primary.mp4` and it will replace the
  placeholder automatically.
- **Publications page** has a CP Cookbook manual entry expecting a file at
  `public/resources/cp-cookbook.pdf` — same auto-detect behavior: it shows
  "Coming soon" until the file exists, then the download button activates
  on its own.
- **Team page** shows a real photo per team member once a file exists at the
  path set in `src/data/team.ts` (`public/images/team/<name>.jpg`) —
  otherwise it falls back to the initials avatar automatically.
- **About page illustration**: the uploaded "logo" image was actually a
  detailed illustration (Malawi map + caregiver/child + programme icons),
  not a compact mark suited to the small nav logo. It's been placed on the
  About page instead, at `public/images/care-illustration.png`. If you
  intended a different (simpler) mark for the navigation bar/favicon, send
  that separately and it can replace the current circular logo in
  `public/images/logo.jpg`.
