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
| 2 | Hero slider | | Seven slides that advance every 7 seconds: a general introduction, then one per product category in the Product and Services menu order (heat pumps, air conditioning, solar & battery, EV chargers, LED lighting, water filters), each with its own eligibility or quote button and a link to its product card. Height adapts to the screen, so the buttons stay above the fold from 1280×720 up. On phones (≤620px) the image comes first (220px tall), followed by the text, and the controls sit on one row. The floating Chat and Call buttons stay on screen |
| 3 | Partners | `#partners` | Scrolling strip of brand names |
| 4 | Services | `#services` | Selectable upgrade cards |
| 5 | Incentives | | How eligibility works |
| 6 | Eligibility check | `#check` | Three-step lead form |
| 7 | Savings | | Four selectable cards (hot water, air con, solar and battery, EV charging), each showing its details in a panel |
| 8 | Events | `#events` | Auzbright at the Sydney Home Show 2026, with four photos from Auzbright's LinkedIn post about the show |
| 9 | Google reviews | | Scrollable review cards |
| 10 | Why Auzbright | `#about` | Intro and "More about us" beside a photo labelled with location and service area, then four pillar cards: Since 2017, Accredited provider (highlighted in navy), Licensed trades, One team. On phones the cards become compact rows with the icon on the left |
| 11 | FAQs | `#faqs` | Questions as rounded cards; the open one gets a navy outline and a lime icon, and answers fade open. Beside them, a "Still have a question?" card with Call, Email and Chat. On tablets and phones the order is heading, questions, then the help card |
| 12 | Call to action | | Navy card in the hero's style: headline with a lime accent, three ticks (no obligation, written quote, about 2 minutes), lime "Check My Eligibility" and a call button, and the family photo filling the right half (below on smaller screens) |
| 13 | Footer | `#contact` | Brand blurb and social icons, link columns, and contact details with lime icons; disclaimer and legal links below |
| – | Floating contact buttons | `#fab` | Chat (lime) and Call (white) buttons fixed to the bottom of every screen: stacked on the right from 621px up, and split on phones (Call bottom-left, Chat bottom-right) |

## Project structure

```text
.
├── index.html            All page markup, SEO tags and structured data
├── assets/
│   ├── css/styles.css    All styles
│   ├── js/main.js        All interactions
│   └── images/           Logo (PNG) and 12 photos (WebP)
│       └── partners/     Partner brand logos (SVG and PNG)
├── about/index.html      About page
├── contact/index.html    Contact Us page
├── scripts/sync-pages.py Copies the shared header, footer and floating buttons into other pages
├── README.md             Project and technical documentation
└── README-LAUNCH.txt     Launch checklist for the business
```

## Pages

| Page | File | Notes |
| --- | --- | --- |
| Homepage | `index.html` | Source of the shared parts |
| Page not found | `404.html` | Branded 404 page with links to the eligibility check, products, About and FAQs |
| About | `about/index.html` | Hero with the Sydney Home Show photo, key numbers (5,258 projects counts up), who we are with vision/mission/values cards, four-step process, why choose us, Victoria and NSW cards, careers and the eligibility call to action. Content is adapted from auzbright.com.au/about/ |
| Contact Us | `contact/index.html` | Hero, four contact cards (call, email, office, chat), enquiry form, office details and quick links |

There is no build step, so the topbar, navigation, footer and floating buttons are copied into each page between `<!-- shared:NAME -->` and `<!-- /shared:NAME -->` comments. Edit them in `index.html` only, then run `python3 scripts/sync-pages.py`. The script copies them into each page listed in its `PAGES` setting and adjusts the links for the folder depth. Asset paths become `../assets/`, homepage sections become `../#check` and so on, and the page's own nav link gets `aria-current="page"`. Running it again when nothing has changed does nothing.

Links between pages in this repo are relative (`contact/`, `./`, `../`), so they work both at the domain root and on the GitHub Pages preview. Links to pages that only exist on the WordPress site, such as `/about/`, stay root-relative.

### Contact form

`contact/index.html` has its own form (`#contact-form`), configured at the top of `assets/js/main.js`:

- `CONTACT_ENDPOINT`: your form handler URL. The form POSTs JSON: `name`, `email`, `phone`, `postcode`, `enquiryType`, `upgrade`, `message`, `consent`, `source: "Contact page"`. Success is shown only when the server answers with an OK status; otherwise the visitor sees an error with the phone number and email address, and their input is kept.
- While `CONTACT_ENDPOINT` is empty, sending opens the visitor's email app with a message to `CONTACT_EMAIL` (admin@auzbright.com.au), with the details filled in, and the page says so.

The form checks fields in the page: name, an email or phone number (or both), enquiry type, a message of at least 10 characters and the privacy consent. Email, Australian phone and 4-digit postcode formats are also checked. Errors are linked to their fields for screen readers, and focus moves to the first problem. A hidden "website" field catches simple spam bots.

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
| Font | Inter, from Google Fonts (the only third-party runtime dependency, apart from the favicon) |
| Favicon | Loaded from the existing WordPress uploads folder on auzbright.com.au |

### Styling

**Premium layer** (end of `styles.css`):

- **Depth:** `--sh-1`/`--sh-2` layered shadows on cards, soft teal and lime radial glows in the dark heroes (homepage, About, Contact, 404) and the footer, plus a fine SVG grain overlay at 7% opacity.
- **Motion:** buttons with an arrow (`path d^="M4 10h12"`) nudge it on hover, lime and navy buttons get a light sheen, cards (`.svc`, `.why-card`, `.ct-way`, `.sav-tab`, `.ab-state`) show a teal spotlight that follows the mouse (`--mx`/`--my` set by `main.js`), and a 2px teal-to-lime scroll-progress line runs under the nav (`.scroll-prog`, `--sp`).
- **Reduced motion:** all of this switches off under `prefers-reduced-motion`.


All content sits inside `.ab`, which is a named size container (`page`). Layouts respond to that container's width rather than the viewport.

| Container breakpoint | Rule |
| --- | --- |
| Wide layout | Above 1260px |
| Step 1 | `@container page (max-width: 1260px)` |
| Step 2 | `@container page (max-width: 1100px)` |
| Phone | `@container page (max-width: 620px)` |

Display headings scale with `clamp()` and `cqi` units.

Phone spacing (≤620px): sections use 64px top and bottom padding with 20px side gutters. Section headers keep a 20px gap between heading and intro. Below 380px, the trust stats stack in one column, and the four incentive factors stack at all phone widths.

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
| Sticky nav | `<header class="site-nav">` is `position: sticky`. At the top of the page it's solid navy, matching the hero. After 8px of scroll, the script adds `.scrolled`, which fades it to translucent navy with `backdrop-filter` blur (solid navy where blur isn't supported), shrinks the bar (88→68px, or 68→60px on phones), scales the logo and adds a hairline border and shadow. On load, the bar's contents fade down into place (the dark bar itself stays put, so no gap shows), links get an animated underline, the dropdown arrow rotates and menus fade in. `scroll-padding-top` keeps anchor targets clear of the bar. Animations are off under `prefers-reduced-motion` |
| Hero slider | Slides crossfade (0.8s) and each photo slowly zooms (`hero-kb`, 9s); the label, headline, text and buttons rise in on every slide (`.enter`). The active dot fills over 7 seconds as a timer (`dot-fill`), and the JavaScript timer matches it: hover or focus holds both (`.is-held`), and the pause button stops autoplay and shows a full dot (`.is-paused`). On phones, the timer runs even though the dots are hidden. Rotates every 7 seconds and pauses while the pointer is over it or focus is inside it. Stops after manual navigation, and has a pause button. Slides are stacked in one grid cell (hidden slides use `visibility: hidden`), so the page below doesn't move when slides change. Slides 2–7 load their images from `data-src`/`data-srcset` after the page loads, or when shown. On phones, the seven dots are replaced by the "01 / 07" counter. Only slides shown by navigation get the fade-in (`.enter`), not the first one |
| Service cards | Multiple selection, with Residential Heat Pump selected by default |
| Reviews | Horizontal scrolling with expandable text |
| Savings explainer | The cards are ARIA tabs (`.sav-tab`) that switch the detail panel (`.sav-panel`). Arrow keys, Home and End move between cards. In the stacked layout (≤1100px), the cards sit above the panel, and the page scrolls to the details after a click |
| FAQs | Opening one answer closes the others. The open card is styled with `.faq-item:has(.faq-q[aria-expanded="true"])`. Any element with `data-onclick="chatToggle"` (the floating button, and the FAQ help card's "Chat with us") opens the chat; Escape returns focus to whichever button opened it |
| Floating buttons | `#fab` sits outside `.ab`, because `.ab` is a size container, and `position: fixed` inside it would follow the page rather than the screen. Its styles therefore use `@media` rather than `@container`, and set their own `box-sizing`. Buttons are 56px (52px on phones), clear of the iPhone home bar (`env(safe-area-inset-*)`), and hidden while the phone menu is open (`.is-hidden` also stops the entrance animation, which would otherwise keep them visible). On phones (≤620px), `#fab` spans the screen width with Call on the left and Chat on the right. The strip between them uses `pointer-events: none`, so taps reach the page underneath. On desktop, hovering or focusing a button reveals its label. Chat opens Tawk.to live chat once `CHAT.tawkPropertyId` and `CHAT.tawkWidgetId` are set at the top of `main.js`. The chat script loads only on the first click, and Tawk's own bubble stays hidden so there's one chat button. Until the IDs are set, or if the script fails to load, Chat opens the contact panel (`#chat-panel`) with options to start the eligibility check, call, email or message on Facebook. Escape and outside clicks close it, and focus returns to the button |
| Scroll reveal | As blocks enter the screen, they fade up 28px; photos also scale from 97%. Section headings reveal as one block. Cards in a grid stagger by 80ms (capped at 480ms): product cards, incentive steps, savings panel and cards, events, stats, FAQ questions and footer columns. `main.js` picks targets from each section's `.wrap` children and grids, so new sections are covered automatically. Content already on screen at load isn't hidden. Anything scrolled past (for example after an anchor jump) appears instantly. The `.reveal`/`.in` classes are removed after the animation, so each element's own hover transitions return. Nothing is hidden without JavaScript, and "reduce motion" turns it off |
| Count-up numbers | Elements with `data-count-to` (currently the "116" Google reviews stat) count from 0 with an ease-out over 1.6s when they come into view, and the digits keep a fixed width (`tabular-nums`). The real number stays in the HTML, and an `.sr-only` copy means screen readers hear "116" rather than the changing digits. Without JavaScript, with reduced motion, or when already on screen at load, it shows 116 straight away. When the Google review count changes, update `data-count-to` and both copies of the number |
| Hero entrance | On first load, the slide 1 label, headline, text and buttons rise in sequence (80ms apart), and the image settles from a 6% zoom. The image has no fade, so the largest content paint isn't delayed. Later slide changes use the `.enter` fade |
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

### Event photos

The Events section uses four photos from Auzbright's LinkedIn post "Auzbright at the Sydney Home Show 2026" (9–11 October 2026), converted to WebP. The section heading and intro come from that post.

| File | Shows |
| --- | --- |
| `event-sydney-stand.webp` | Visitors talking with the team at the stand (large tile, labelled "Sydney Home Show · October 2026") |
| `event-sydney-heat-pumps.webp` | Stand screen: hot water heat pumps |
| `event-sydney-screen.webp` | Stand screen: Auzbright logo |
| `event-sydney-solar-battery.webp` | Stand screen: solar and battery package |

The LinkedIn images are only 800px wide, so they may look slightly soft on high-density screens. Replace them with the original camera files when available.

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
- Every link and button is at least 24×24px (WCAG 2.5.8). Footer social links are 44px round icon buttons with labels such as "Auzbright on Facebook"; they open in a new tab. Small text links (`.link-row`, `.legal-row`, `.call-link`, footer lists) get a 32px-high tap area; form radios sit inside full-width labels
- Native buttons and links with ARIA state (`aria-expanded`, `aria-pressed`, `aria-invalid`)
- Escape closes dropdowns and returns focus to the button that opened them
- Focus moves to the new step in the form
- The slider and partner strip can be paused, and both start paused under `prefers-reduced-motion`

### SEO and performance

- Title, description, canonical URL, Open Graph and Twitter card tags
- `LocalBusiness` JSON-LD in the `<head>`
- Hero image is preloaded with a matching `imagesrcset`, and images below the fold are lazy-loaded with `fetchpriority="low"`
- Service card thumbnails use `data-lazy-src`: `main.js` starts loading them only after the hero image has loaded, as they come within 300px of the screen. Native lazy loading starts far earlier on slow connections and was delaying the hero image on phones by about 0.4s
- Hero photos come in 480, 800 and 1200px versions (`hero-*-480.webp` and so on; for the family photo, `hero-family.webp` is the 1024px version) with `srcset` and `sizes`, so phones download smaller files
- `fonts.gstatic.com` is preconnected, so Inter loads sooner
- Hero image heights use `clamp()` with `svh`, and the hero headline is capped at 76px

Measured in headless Chrome:

| Screen | Largest content paint | Data at load | Hero buttons |
| --- | --- | --- | --- |
| Phone 390×844, slow 4G, 4× CPU | 2.8s → 1.8s | 800 → 664 KB | Image first; floating Chat and Call buttons always visible |
| Laptop 1366×768 | 460 → 290ms | 934 → 606 KB | Below → above fold |
| Desktop 1440×900 | 404 → 296ms | 934 → 606 KB | Below → above fold |

If you replace a hero photo, regenerate all its sizes and keep the `srcset` widths accurate. The category slides use `hero-aircon-*`, `hero-ev-*`, `hero-led-475` and `hero-water-*`, made from images on auzbright.com.au. The LED and air con photos are only available at about 475–600px, so they may look soft on large high-density screens.

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
- [ ] Set `CONTACT_ENDPOINT` for the Contact Us page form (until then it opens an email instead)
- [ ] Decide whether `contact/` and `about/` replace the WordPress `/contact/` and `/about/` pages when this site goes live
- [ ] Confirm the About page numbers ("5,258 projects completed" and "80% saving on lighting costs", both from the current About page) and add real team members if you want a team section
- [ ] Connect live chat: create a Tawk.to account and set `CHAT.tawkPropertyId` and `CHAT.tawkWidgetId` in `assets/js/main.js` (until then, Chat opens the contact panel)
- [ ] Add the ABN to the footer copyright line (the placeholder was removed)
- [ ] Replace placeholder hero images and stock-style photos with genuine Auzbright photos
- [ ] Check the event photos: two show on-screen prices ($5,250 solar and battery combo) and a "70%" rebate banner, which may be out of date
- [ ] Replace the AI-generated Water Filter card image with a genuine installation photo
- [ ] Get each partner's permission to use their logo (see [Partner logos](#partner-logos))
- [ ] Get a higher-resolution HiCi logo
- [ ] Point "Read all reviews" and "Write a review" to the Google Business Profile
- [ ] Confirm business claims: review count, founding year, accreditations, service area, opening hours
- [ ] Have the incentive wording reviewed
- [ ] Check the savings claims: the air con figure ("about a third of the cost" of a portable electric heater) cites Solar Victoria and CHOICE, so confirm it on the source page

### Links to pages that don't exist yet

These pages 404 on auzbright.com.au, so their links currently point somewhere that works. When a page is created, change the link in `index.html` and run `python3 scripts/sync-pages.py`.

| Missing page | Links now go to |
| --- | --- |
| `/career/` | About page, Careers section (`about/#careers`) |
| `/installation/` | About page, Our process (`about/#process`) |
| `/claim-warranty/` | Contact form with "Existing installation or warranty" preselected (`contact/?enquiry=warranty#contact-form`) |
| `/events/` | Events button now says "More on LinkedIn" and opens the LinkedIn company page |
| `/victoria/led-lighting/`, `/victoria/water-filter/`, `/nsw/air-conditioner/`, `/nsw/led-lighting/`, `/nsw/water-filter/` | The matching homepage product card (`#led-lighting` and so on) |
| `/terms-of-use/`, `/accessibility/` | Removed from the footer; add them back when the pages exist |

`404.html` is a branded "page not found" page with the shared header and footer. It sets a `<base>` at the site root (`/auzbright-website/` on the GitHub Pages preview, `/` on the domain), so its links and styles work at any URL depth. GitHub Pages serves it automatically for missing URLs.

## Testing

The project has no automated tests or CI. Check changes manually at 1440, 768, 390 and 320 pixels wide, with no horizontal scrolling at any width, and test the full form flow by keyboard.

## Maintaining this README

Update this file in the same commit as any change that affects it, including sections, file structure, script behaviour, the form payload, breakpoints, deployment steps or pre-launch status.
