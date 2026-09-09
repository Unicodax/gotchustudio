# Gotchu — Web & Software Development Company

Frontend-only marketing site for Gotchu, built with React, React Router, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

- `src/data/` — all content (services, projects, process steps, tech stack, nav, company info). Edit these files to change site content without touching components.
- `src/components/common/` — design-system primitives (Button, Container, SectionHeading, Badge, Icon, Reveal).
- `src/components/layout/` — Navbar, MobileMenu, Footer, PageLayout, SEO.
- `src/components/{home,services,portfolio,case-study,forms}/` — page-specific, reusable section components.
- `src/pages/` — one file per route; pages compose components, they don't contain markup logic.
- `src/config/seo.js` — per-route SEO metadata builder, consumed by `SEO.jsx`.
- `src/utils/validation.js` — contact form validation rules.

## Connecting a backend later

- **Contact form**: `src/pages/Contact.jsx` has a single `handleSubmit` function with a comment marking exactly where to add an API call.
- **Portfolio / services data**: currently static arrays in `src/data/`. Swap the imports for API calls (e.g. in a new `src/services/api/` layer) without changing any component — components only consume the shape of the data, not its source.
- **Case studies / service detail pages**: both use slug-based lookups (`getProjectBySlug`, `getServiceBySlug`) already isolated in the data files, ready to become async fetches.

## Notes

- All portfolio projects are labelled as concept work — replace `src/data/projects.js` with real case studies as they become available.
- Animations respect `prefers-reduced-motion`.
- No backend, database, authentication, CMS, or payment functionality is included by design — see the project brief.
