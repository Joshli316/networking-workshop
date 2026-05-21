# Networking Workshop (CSC W8)

Bilingual (Simplified Chinese primary, English subtitle) workshop slide deck and resource page for Chinatown Service Center. For use by Employment Outreach Specialist — projected on screen, 30-minute session.

## Tech Stack
Vanilla HTML/CSS/JS — no build step, no framework.

## Structure
```
index.html       — 12-slide projection deck
resources.html   — bilingual resource reference page
styles.css       — shared design system (CSS variables, components)
print.css        — print-friendly resource page styles
qrcode.min.js    — client-side QR code generator
app.js           — slide nav + reveal logic (data-action wired via delegated listener)
resources.js     — resource page logic
sw.js            — service worker (cache-first, cross-origin requests skipped)
sitemap.xml      — for search engine discovery
_headers         — Cloudflare Pages CSP (allows Google Fonts)
robots.txt
build.sh         — copies HTML/CSS/JS/_headers/sitemap.xml into dist/
404.html / 404.js
tests/smoke.spec.js — Playwright suite, port 4827, reuseExistingServer: false
```

## Slides (12)
1. Title — 建立人脉 / Networking for Job Seekers
2. Agenda — What Is It · Community · Online
3. What Is Networking — 70% jobs never publicly posted
4. **Activity** (two-phase reveal) — Where Did You Find Your Last Job?
5. Community: Your Existing Network — family, church, neighbors, CSC
6. Community: Find Your People — WeChat groups, chambers, events, ESL
7. LinkedIn — 4-step setup + Open to Work
8. Informational Interviews — what they are / are NOT
9. Script — bilingual job-lead request (zh + en columns)
10. **Quiz** (three-phase reveal) — 3 T/F questions
11. CSC Services
12. Resources + QR

## Navigation
- Click anywhere → advance (regular slides)
- Arrow keys ← → also navigate
- Interactive slides (4, 10): must click reveal button before advancing
- Two-phase: reveal answer → advance enabled
- Multi-phase quiz (slide 10): Q1 → reveal → Q2 → reveal → Q3 → reveal → advance

## Visual Design
Emerald + lime palette — distinct from suite siblings.
- Background: `#ecfdf5` (emerald-50)
- Primary: `#047857` (emerald-700)
- Accent: `#65a30d` (lime-600)
- Title slide: emerald gradient
- Resources page Section 4 anchored with `.section--dark` (asymmetric break)

## Bilingual
- Language toggle stored in `localStorage` key `nw_lang`
- `body.zh` class switches `.en`/`.zh` spans via CSS
- Simplified Chinese (zh-CN); font: PingFang SC, Noto Sans SC, Microsoft YaHei

## CSP / Security
- Strict CSP: `script-src 'self'` (no inline)
- All click handlers via `data-action` + one delegated body listener
- Google Fonts allowlisted in `style-src` / `font-src`
- SW skips cross-origin requests (`if (url.origin !== self.location.origin) return;`)

## Deployment
Cloudflare Pages → `networking-workshop.pages.dev`
Deploy: `./build.sh && wrangler pages deploy dist --project-name networking-workshop --branch main`

**Before deploying:** bump `CACHE` version in `sw.js` to invalidate cached assets.

## Hub
This workshop is part of the CSC workshop suite. The hub at `csc-workshops.pages.dev` lists all workshops — add a card after this one is deployed alongside its sibling builds (driving, job-offers, networking).
