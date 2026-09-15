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

## Navigation (single-source)
- Top nav: Home · Platform ▾ (products) · Grow · Partners · Resources ▾ (content + comparisons) · About · Book a demo.
- Full-screen mobile menu (the ≡ button) mirrors this.
- **The nav lives in ONE place: `nav.js`.** Every page carries only a
  `<div id="site-nav"></div>` placeholder plus `<script src="nav.js" defer></script>`
  in the `<head>`; `nav.js` injects the header + mobile menu at load time.
  - **To change the nav, edit `nav.js` only** — the change appears on all pages.
  - The "current page" highlight is set automatically from the URL (Home / Grow /
    Partners / About), so there's no per-page `active` state to maintain.
  - Works the same locally (`file://`) and when hosted — no build step.
  - Trade-off: the nav is rendered by JavaScript, so it isn't in the raw HTML
    source. Fine for staging; for production SEO you may later pre-render it.
## Footer (single-source)
- **The footer lives in ONE place: `footer.js`** (same pattern as the nav).
  Every page carries only a `<div id="site-footer"></div>` placeholder plus
  `<script src="footer.js" defer></script>` in the `<head>`.
  - **To change the footer, edit `footer.js` only** — it updates on all pages.
  - The canonical footer was standardised from the homepage. The pages had
    drifted into 7 different footer versions; if you want to add links that
    some pages used to have (e.g. Partners, Case studies), add them once in
    `footer.js`.
  - Same JS-render trade-off as the nav (see note above).

## Conventions
- All internal links are relative (`command-centre.html`, not absolute URLs) — so
  the site works from any folder or host without changes.
- Ad landing pages (one-click SoA, Xplan alt, SoA bottleneck, grow-without-hiring)
  are NOT in this folder — they live separately as standalone `noindex` pages for
  paid traffic.

See `GO-LIVE-CHECKLIST.md` for what's done and what still needs doing before launch.
