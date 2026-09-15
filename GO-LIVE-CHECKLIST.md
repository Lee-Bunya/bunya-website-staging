# Bunya website — go-live checklist

The site is structurally complete: 24 pages, one shared stylesheet, all internal
links and navigation validated, real logos, client trust bar, pinecone brand
motif, and the partner ecosystem (Adapt). Everything below is real-world wiring
or content that needs your input, an account, or a decision.

## 1. Not yet done — the SEO/AEO technical pass (biggest remaining build)
Deliberately deferred until the domain is chosen. When ready, add across all pages:
- [ ] Unique `<title>` + meta description per page
- [ ] Open Graph + Twitter/X card tags (needs the real domain + a share image)
- [ ] JSON-LD structured data: Organization, SoftwareApplication (product pages),
      Article (blog posts), FAQPage (FAQ), BreadcrumbList
- [ ] `sitemap.xml` + `robots.txt`
- [ ] Canonical tags (needs the real domain)
- [ ] Favicon (can be generated from the pinecone icon in `assets/`)

This is the step that makes the site findable by Google and citable by AI tools.
Best done once, on the settled site, with the real domain locked in.

## 2. Wire the conversion points
- [ ] **Contact form** (`contact.html`) — currently shows a success message only.
      Connect to email/CRM (Formspree, HubSpot, or a backend endpoint).
- [ ] **Free check links** — "Run the free check" buttons point to `#` /
      `data-placeholder="check-url"`. Point them at the real diagnostic URL.
- [ ] **Book-a-demo** — currently opens the contact form. Swap to Calendly /
      Microsoft Bookings if preferred.
- [ ] **Confirm email address** — `hello@bunya.ai` is used on the contact page.

## 3. Real content to drop in
- [ ] **Blog articles** — author name, title, bio, publish date, hero images
      (`[Author…]`, `[Date]`, `Swap:`) on all 7 article pages.
- [ ] **Case studies** (Falcon, Regional Prosperity) — still skeletons with
      `[TO CONFIRM]`. Need real interview content (numbers, quotes) + video embeds
      (`data-embed=""`). Naming approved; specific quotes still need sign-off.
- [ ] **Video testimonials** — paste real Vimeo/YouTube embed URLs into the
      `data-embed=""` attributes (homepage + case studies).
- [ ] **Product screenshots** — replace every `Swap:` placeholder image block.
- [ ] **Adapt logo** — replace the "AbD" placeholder on `partners.html` with
      Adapt's real logo (adapt-colour.svg / adapt_white.svg from theadaptway.com).
      Confirm the partnership description with Adapt.
- [ ] **Client logos** — done (assets/logos/). Currently muted-at-rest,
      full-colour on hover. Change if you prefer always-full-colour.

## 4. Blog/article cross-links
- [ ] Blog index cards + "related reading" links point to `#` for articles that
      don't have pages yet. Wire as more articles are published.
- [ ] FAQ category filter buttons are visual only (no filter logic yet).

## 5. Hosting / handoff
- [ ] Push this folder to GitHub (it's a clean static site — ready for GitHub Pages).
- [ ] Deploy to a sandbox/staging site to share with the team.
- [ ] Choose the domain, then do the SEO/AEO pass (section 1) with it locked in.
- [ ] Add analytics (Google Analytics/Tag) + any ad conversion tracking.

## Notes for whoever picks this up (Claude Code / team)
- Pure static HTML/CSS, no build step, no dependencies. Relative links throughout.
- One `style.css` controls the whole look; brand controls are in its `:root` block.
- Nav + footer are inline in each page (no include system) — change across files
  with find-and-replace if editing them.
- See `README.md` for the full structure and design-system notes.
