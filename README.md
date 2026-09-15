# Bunya website

A static marketing + sales website for Bunya — the command centre that runs and
grows Australian financial advice firms. Plain HTML/CSS, no build step, no
dependencies. Open `index.html` to preview locally, or deploy the whole folder
to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Structure

25 pages, all sharing one stylesheet (`style.css`) and one `assets/` folder.

### Core pages
| File | Page |
|---|---|
| `index.html` | Homepage |
| `command-centre.html` | Command Centre (core platform) |
| `broadcast-hq.html` | Broadcast HQ (marketing module) |
| `bunya-voice.html` | Bunya Voice (calls/meetings module) |
| `grow.html` | Grow (marketing/growth arm) |
| `partners.html` | Partner ecosystem (Adapt — succession & value) |
| `about.html` | About |
| `contact.html` | Contact (free check + demo form) |

### Resources
| File | Page |
|---|---|
| `faq.html` | FAQ |
| `blog.html` | Blog / Insights index |
| `case-studies.html` | Case studies index |
| `cost-calculator.html` | Interactive ROI calculator |
| `blog-*.html` | 7 blog articles |

### Comparison pages
| File | Page |
|---|---|
| `vs-traditional-crm.html` | Bunya vs a CRM |
| `xplan-alternative.html` | Xplan alternative |
| `advice-software-alternatives.html` | Alternatives compared |
| `fin365-alternative.html` | Bunya vs Fin365 |

### Case studies (skeletons — need real content)
| File | Page |
|---|---|
| `case-study-falcon.html` | Falcon Financial |
| `case-study-regional-prosperity.html` | Regional Prosperity |

## Design system

Everything is driven by `style.css`. Brand controls live in the `:root` block at
the very top of that file:

- **Colours** — CSS variables: `--grid` (#0A7D79 teal), `--pulse` (#11B8B1 bright teal),
  `--signal` (#F4B528 amber), `--deep`/`--midnight` (dark teal sections),
  plus greys/tints. Change these to re-colour the whole site.
- **Fonts** — Poppins (display) + Manrope (UI), loaded from Google Fonts.
  Controlled by `--font-brand` and `--font-ui`.
- **Layout** — `--maxw` (max content width), `--radius` values, shadows.

Change a value once in `:root` and it updates across all 24 pages.

## Assets (`assets/`)
- `bunya-logo-colour.png` / `bunya-logo-white.png` — the logo (colour for light
  backgrounds/header, white for dark backgrounds/footer/mobile menu).
- `pinecone-colour.png` / `pinecone-white.png` — the pinecone icon used as the
  faint background motif on heroes, dark bands and CTAs.
- `logos/` — client logos for the trust bar (Regional Prosperity, Link Wealth, Falcon).

## Navigation
- Top nav: Home · Platform ▾ (products) · Grow · Partners · Resources ▾ (content + comparisons) · About · Book a demo.
- Full-screen mobile menu (the ≡ button) mirrors this.
- The nav + footer are repeated inline in every page's HTML (no include system,
  since it's plain static HTML). If you change nav/footer, change it in each page
  — or use find-and-replace across files.

## Conventions
- All internal links are relative (`command-centre.html`, not absolute URLs) — so
  the site works from any folder or host without changes.
- Ad landing pages (one-click SoA, Xplan alt, SoA bottleneck, grow-without-hiring)
  are NOT in this folder — they live separately as standalone `noindex` pages for
  paid traffic.

See `GO-LIVE-CHECKLIST.md` for what's done and what still needs doing before launch.
