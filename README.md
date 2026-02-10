# dakotaklatt.com

Personal portfolio and hub for **Dakota Klatt** — Backend / Platform Engineer. Built for recruiters, engineering leaders, and future collaborators. Static-first, fast, and deployable on Cloudflare Pages.

## Tech choice: Astro + Tailwind

- **Astro**: Static-first output, zero JS by default, excellent Lighthouse scores. Fits Cloudflare Pages (static build, no server).
- **Tailwind**: Design system (spacing, typography, colors) and rapid UI without heavy CSS.
- **MDX**: Case studies live in `src/content/case-studies/` as Markdown with optional JSX; easy to add diagrams and components later.

No Next.js: this site doesn’t need server components or API routes; Astro keeps the bundle small and the build simple.

---

## File tree

```
personal-platform/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── og-image.png          # Add for Open Graph (1200×630)
├── src/
│   ├── components/
│   │   ├── Badge.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Callout.astro
│   │   ├── CopyEmail.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ProjectCard.astro
│   │   ├── QuickView.astro
│   │   └── Timeline.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── case-studies/
│   │       ├── _template.md   # Reusable case study template
│   │       ├── event-driven-shipment-tracking.md
│   │       ├── modernization-five-legacy-systems.md
│   │       └── reliability-dynatrace-tuning.md
│   ├── data/
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── CaseStudyLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── open-source.astro
│   │   ├── projects/
│   │   │   └── index.astro
│   │   └── case-studies/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   └── global.css
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

---

## Build & run

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # Output: dist/
npm run preview
```

---

## Deploy on Cloudflare Pages

1. **Connect repo**: GitHub → Cloudflare Pages → connect `personal-platform` (or your repo).
2. **Build settings**:
   - **Framework preset**: None (or Astro if listed).
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: (leave blank if repo root is the project)
3. **Environment variables**: None required for the site. Add any later (e.g. analytics) in the dashboard.
4. **Custom domain**: Add `dakotaklatt.com` in Pages → Custom domains.

After each push to the branch you use (e.g. `main`), Cloudflare will build and deploy.

---

## Optional: Resume & OG image

- **Resume**: Add your PDF at `public/resume.pdf`. The Contact page “Download resume” button links to `/resume.pdf`.
- **OG image**: Add `public/og-image.png` (e.g. 1200×630) for Open Graph / Twitter cards. BaseLayout uses `/og-image.png` by default.

---

## Adding a new project

1. Open `src/data/projects.ts`.
2. Add an object to the `projects` array (see existing entries for shape):
   - `id`, `title`, `slug`, `outcome`, `whyItMatters`, `stack[]`, `tags[]`, `status`, `highlights[]`
   - Optional: `link`, `repo`, `caseStudySlug`, `image`, `featuredOrder`, `year`
3. Use `tags` for filtering on `/projects` (e.g. `Backend`, `Kafka`, `Azure`, `DevOps`, `Mobile`, `OSS`).
4. Set `featuredOrder` (lower = higher on home) if it should appear in “Featured work”.

---

## Adding a new case study

1. Copy `src/content/case-studies/_template.md` to a new file, e.g. `my-new-case-study.md`.
2. Fill frontmatter: `title`, `description`, `pubDate`, `tags`.
3. Write sections (Context, Architecture, Key decisions, Metrics, Lessons learned). Keep company-specific details generic.
4. The URL will be `/case-studies/my-new-case-study`.
5. To link from a project card, set `caseStudySlug: 'my-new-case-study'` in `src/data/projects.ts` for that project.

---

## Design system (reference)

- **Colors**: CSS variables in `src/styles/global.css` (light/dark via `.dark` on `html`). Accent: teal.
- **Typography**: DM Sans (body), Instrument Sans (headings). Scale: `text-display-xl`, `text-display-lg`, `text-display-md`.
- **Spacing**: `--space-section`, `--space-block` (used as `py-section`, `mb-block`).
- **Motion**: `animate-fade-in`, `animate-fade-in-up`; `prefers-reduced-motion: reduce` shortens duration in global.css.

---

## SEO & meta

- Canonical URL, Open Graph, Twitter cards in `BaseLayout.astro`.
- JSON-LD: Person + WebSite in `BaseLayout.astro`.
- Sitemap: `@astrojs/sitemap` (outputs to `dist/sitemap-index.xml`).
- `public/robots.txt` allows all and points to sitemap.

---

© Dakota Klatt. Open to interesting conversations.
