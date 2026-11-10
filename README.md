# Auzbright Website

The homepage for [Auzbright](https://auzbright.com.au/), an accredited provider of energy-efficient upgrades for homes and businesses in Victoria and New South Wales.

It is a static, single-page site in plain HTML, CSS and JavaScript. There is no framework, build step or package install. It is intended to replace the current WordPress and Elementor homepage.

> **Status: pre-launch.** The enquiry form is not connected yet, so submissions are not sent anywhere. See [Pre-launch status](#pre-launch-status).

## Project scope

The homepage has two jobs: explain Auzbright's upgrades and the government incentives that may apply, and capture leads through a short eligibility check.

**Services covered:** residential heat pumps, air conditioners, solar and battery, EV chargers, LED lighting and water filters.

**Incentive programs referenced:** Victorian Energy Upgrades (VEU), NSW Energy Savings Scheme (ESS) and Cheaper Home Batteries.

**In scope:** the homepage in this repository.

**Out of scope:** the other pages on auzbright.com.au. The homepage links to them, but they are not stored here.

### Page sections

| Order | Section | Anchor | Purpose |
| --- | --- | --- | --- |
| 0 | Utility bar | `#topbar` | Slim navy bar: "Incentives" message linking to `#check`, plus service area, hours, phone and a dismiss button |
| 1 | Header and navigation | `#site-nav` | Sticky glass bar, pinned on every section, with desktop dropdowns and a mobile menu |
| 2 | Hero slider | | Three slides that advance every 7 seconds. Height adapts to the screen, so the buttons stay above the fold from 1280×720 up and on phones |
| 3 | Partners | `#partners` | Scrolling strip of brand names |
| 4 | Services | `#services` | Selectable upgrade cards |
| 5 | Incentives | | How eligibility works |
| 6 | Eligibility check | `#check` | Three-step lead form |
| 7 | Savings | | Four selectable cards (hot water, air con, solar and battery, EV charging), each showing its details in a panel |
| 8 | Events | `#events` | All-Energy Australia |
| 9 | Google reviews | | Scrollable review cards |
| 10 | Why Auzbright | `#about` | Local, accredited, accountable |
| 11 | FAQs | `#faqs` | Accordion, one answer open at a time |
| 12 | Call to action | | Prompt to check eligibility |
| 13 | Footer | `#contact` | Contact details and legal links |

## Project structure

```text
.
├── index.html            All page markup, SEO tags and structured data
├── assets/
│   ├── css/styles.css    All styles
│   ├── js/main.js        All interactions
│   └── images/           Logo (PNG) and 12 photos (WebP)
│       └── partners/     Partner brand logos (SVG and PNG)
├── README.md             Project and technical documentation
└── README-LAUNCH.txt     Launch checklist for the business
```

## Run locally

Serve the folder from a local web server:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

Links to other site pages use root-relative paths such as `/about/`, so they return 404 locally. They only work once the page is on auzbright.com.au.

## Technical documentation

### Stack

| Area | Choice |
| --- | --- |
| Markup | HTML5 in a single file |
| Styles | Plain CSS with container queries |
| Scripts | Vanilla JavaScript in one IIFE, loaded with `defer`, no dependencies |
| Font | Inter, from Google Fonts (the only third-party runtime dependency, apart from the favicon below) |
| Favicon | Loaded from the existing WordPress uploads folder on auzbright.com.au |

### Styling

All content sits inside `.ab`, which is a named size container (`page`). Layouts respond to that container's width rather than the viewport.

| Container breakpoint | Rule |
| --- | --- |
| Wide layout | Above 1260px |
| Step 1 | `@container page (max-width: 1260px)` |
| Step 2 | `@container page (max-width: 1100px)` |
| Phone | `@container page (max-width: 620px)` |

Display headings scale with `clamp()` and `cqi` units.

Main brand colours:

| Colour | Hex |
| --- | --- |
| Navy (primary text and dark backgrounds) | `#0E193F` |
| Green (accent and call to action) | `#A0E25F` |
| Slate (secondary text) | `#4A5372` |
| Pale background | `#F4F8FA` |

### JavaScript

`assets/js/main.js` finds most of its controls through `data-onclick` attributes (the savings cards use `role="tab"` instead), for example `data-onclick="next1"` or `data-onclick="svc.hw.toggle"`. Keep these values when editing the HTML, because removing or renaming one silently disables that control.

The `data-onchange` and `data-oninput` attributes in `index.html` are not read by the script.

| Feature | Behaviour |
| --- | --- |
| Navigation | Each top-level label is a link: About to `/about/`, Victoria to `/victoria/victorian-energy-upgrades/`, NSW to `/nsw/energy-savings-scheme-ess/` and Product and Services to `#services`. Dropdowns open on mouse hover or from the chevron button (keyboard and touch), and close on mouse leave, outside click or Escape |
| Utility bar | Scrolls away with the page (only the nav is sticky). The ✕ (`data-onclick="dismissTopbar"`) collapses the bar and stores the time in `localStorage` (`auzbright-topbar-dismissed`). A small inline script after the bar keeps it hidden on later visits for 14 days, without a flash. Focus moves to the logo after dismissing. The message shortens below 620px, where the area and phone number collapse to icons; hours hide below 1100px |
| Sticky nav | `<header class="site-nav">` is `position: sticky`. At the top of the page it's solid navy, matching the hero. After 8px of scroll, the script adds `.scrolled`, which fades it to translucent navy with `backdrop-filter` blur (solid navy where blur isn't supported), shrinks the bar (88→68px, or 68→60px on phones), scales the logo and adds a hairline border and shadow. The bar slides in on load, links get an animated underline, the dropdown arrow rotates and menus fade in. `scroll-padding-top` keeps anchor targets clear of the bar. Animations are off under `prefers-reduced-motion` |
| Hero slider | Rotates every 7 seconds and pauses while the pointer is over it or focus is inside it. Stops after manual navigation, and has a pause button. Slides are stacked in one grid cell (hidden slides use `visibility: hidden`), so the page below doesn't move when slides change. Slides 2 and 3 load their images from `data-src`/`data-srcset` after the page loads, or when shown. Only slides shown by navigation get the fade-in (`.enter`), not the first one |
| Service cards | Multiple selection, with Residential Heat Pump selected by default |
| Reviews | Horizontal scrolling with expandable text |
| Savings explainer | The cards are ARIA tabs (`.sav-tab`) that switch the detail panel (`.sav-panel`). Arrow keys, Home and End move between cards. In the stacked layout (≤1100px), the cards sit above the panel, and the page scrolls to the details after a click |
| FAQs | Opening one answer closes the others |
| Partner strip | CSS animation with a pause button |
| Footer | Sets the copyright year automatically |

### Enquiry form

The eligibility form has three steps: property type, postcode, then upgrade and contact details. A confirmation screen follows.

To connect it, set `FORM_ENDPOINT` at the top of `assets/js/main.js`. On submit, the script sends a `POST` with `Content-Type: application/json`:

```json
{
  "propertyType": "House / townhouse",
  "postcode": "3026",
  "upgrade": "Residential heat pump",
  "selectedServices": ["Residential Heat Pump"],
  "firstName": "Sam",
  "mobile": "0400 000 000",
  "source": "Homepage eligibility check"
}
```

Check these points when connecting it:

- **False confirmations:** the thank-you screen appears whether or not the request succeeds, and request errors are ignored. A failing endpoint loses leads with no visible sign.
- **Validation:** only the postcode is checked (exactly four digits). First name, mobile and upgrade can be blank, so the receiving service must validate them.
- **Cross-origin requests:** if the endpoint is on another domain, it must allow CORS, including the preflight request that JSON triggers.
- **Spam:** the form has no bot protection, so add it at the endpoint or on the page.

### Service card images

The product cards in `#services` use images from the live auzbright.com.au product pages, converted to WebP at card size.

| Card | File | Source on auzbright.com.au | Display |
| --- | --- | --- | --- |
| Residential Heat Pump | `svc-heat-pump.webp` | Victorian hot water page | Contained on a light background |
| Air Conditioner | `svc-air-conditioner.webp` | Victorian split system page (Mitsubishi Electric multi-split) | Contained on a light background |
| Solar & Battery | `svc-solar-battery.webp` | Solar and battery page (Sigenergy battery) | Contained on a light background |
| EV Charger | `svc-ev-charger.webp` | EV charger page | Cropped to fill the card (`object-position: 30% 50%`) |
| LED Lighting | `svc-led-lighting.webp` | Homepage | Cropped to fill the card |
| Water Filter | `svc-water-filter.webp` | Featured image of the blog post "Whole Home Water Filtration for Established Derrimut Homes". It appears to be AI-generated, and the bracket shows an "Auzbright" label | Cropped to fill the card |

Contained images use the `.pic.contain-light` class, and full-bleed photos use plain `.pic`.

### Partner logos

The partner strip in `#partners` shows logos from `assets/images/partners/`. The visible copy of each logo has the brand name as its alt text. The duplicate copy that makes the loop seamless has empty alt text and sits in an `aria-hidden` item.

| Brand | File | Source |
| --- | --- | --- |
| Mitsubishi Electric | `mitsubishi-electric.svg` | Wikimedia Commons |
| Daikin | `daikin.svg` | Wikimedia Commons |
| Carrier | `carrier.png` | carrier.com brand portal |
| Panasonic | `panasonic.svg` | Wikimedia Commons |
| iStore | `istore.png` | istore.net.au, recoloured from white to near-black |
| Emerald Energy | `emerald-energy.png` | emerald.com.au |
| Tesla | `tesla.svg` | Wikimedia Commons |
| GoodWe | `goodwe.svg` | en.goodwe.com |
| Sigenergy | `sigenergy.png` | sigenergy.com, wordmark recoloured from white to near-black |
| Jinko Solar | `jinko-solar.png` | jinkosolar.com |
| Evnex | `evnex.png` | Supplied by Auzbright, cropped with a transparent background |
| HiCi | `hici.png` | HiCi's LinkedIn company page (200 px source), cropped with a transparent background |

All 12 partners now show a logo. The HiCi file is low resolution and may look soft on high-density screens, so replace it with a larger file from HiCi when possible.

These logos are trademarks of their owners. Wikimedia Commons marks some files as public domain, but that covers copyright only, not trademark rights. Confirm permission with each partner before launch, and replace these files with official partner-supplied artwork when it arrives.

To add a logo, put the file in `assets/images/partners/` and replace the brand's `<span class="pn">` in both copies of the list. Use the brand name as alt text in the first copy and `alt=""` in the second.

### Accessibility

- Skip link to `<main id="main">`, visible focus states and labelled form fields
- Native buttons and links with ARIA state (`aria-expanded`, `aria-pressed`, `aria-invalid`)
- Escape closes dropdowns and returns focus to the button that opened them
- Focus moves to the new step in the form
- The slider and partner strip can be paused, and both start paused under `prefers-reduced-motion`

### SEO and performance

- Title, description, canonical URL, Open Graph and Twitter card tags
- `LocalBusiness` JSON-LD in the `<head>`
- Hero image is preloaded with a matching `imagesrcset`, and images below the fold are lazy-loaded
- Hero photos come in 480, 800 and 1200px versions (`hero-*-480.webp` and so on; for the family photo, `hero-family.webp` is the 1024px version) with `srcset` and `sizes`, so phones download smaller files
- `fonts.gstatic.com` is preconnected, so Inter loads sooner
- Hero image heights use `clamp()` with `svh`, and the hero headline is capped at 76px

Measured in headless Chrome:

| Screen | Largest content paint | Data at load | Hero buttons |
| --- | --- | --- | --- |
| Phone 390×844, slow 4G, 4× CPU | 2.8s → 1.8s | 800 → 655 KB | Below → above fold |
| Laptop 1366×768 | 460 → 290ms | 934 → 606 KB | Below → above fold |
| Desktop 1440×900 | 404 → 296ms | 934 → 606 KB | Below → above fold |

If you replace a hero photo, regenerate all its sizes and keep the `srcset` widths accurate.

The canonical URL, `og:url` and `og:image` point to the production domain. Update them if the production URL or hero image changes.

## Deployment

There is no build. Upload `index.html` and the `assets/` folder together, keeping the folder structure, to any static host or web server.

1. Publish to a staging location, such as `https://staging.auzbright.com.au/`. A public preview is also served by GitHub Pages from the `gh-pages` branch at <https://devriazul.github.io/auzbright-website/>. To update it, run `git push origin main:gh-pages`. Links to other site pages (such as `/about/`) return 404 there, because they point to the domain root.
2. Check it at desktop, tablet and phone widths.
3. Complete the items in [Pre-launch status](#pre-launch-status).
4. Back up the current WordPress homepage.
5. Serve this `index.html` as the site's homepage.

## Pre-launch status

[README-LAUNCH.txt](README-LAUNCH.txt) has the full checklist. These are the main open items:

- [ ] Set `FORM_ENDPOINT` so enquiries reach the CRM
- [ ] Replace the `[TO CONFIRM]` ABN in the footer
- [ ] Replace placeholder hero images and stock-style photos with genuine Auzbright photos
- [ ] Add real photos to the Events section
- [ ] Replace the AI-generated Water Filter card image with a genuine installation photo
- [ ] Get each partner's permission to use their logo (see [Partner logos](#partner-logos))
- [ ] Get a higher-resolution HiCi logo
- [ ] Point "Read all reviews" and "Write a review" to the Google Business Profile
- [ ] Confirm business claims: review count, founding year, accreditations, service area, opening hours
- [ ] Have the incentive wording reviewed
- [ ] Check the savings claims: the air con figure ("about a third of the cost" of a portable electric heater) cites Solar Victoria and CHOICE, so confirm it on the source page

### Linked pages to create

These pages are linked from the homepage and still need to be created, or the links changed:

```text
/career/                 /accessibility/
/installation/           /victoria/led-lighting/
/claim-warranty/         /victoria/water-filter/
/events/                 /nsw/air-conditioner/
/terms-of-use/           /nsw/led-lighting/
                         /nsw/water-filter/
```

## Testing

The project has no automated tests or CI. Check changes manually at 1440, 768 and 390 pixels wide, with no horizontal scrolling at any width, and test the full form flow by keyboard.

## Maintaining this README

Update this file in the same commit as any change that affects it, including sections, file structure, script behaviour, the form payload, breakpoints, deployment steps or pre-launch status.
