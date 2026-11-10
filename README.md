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
| 1 | Header and navigation | | Desktop dropdowns and a mobile menu |
| 2 | Hero slider | | Three slides that advance every 7 seconds |
| 3 | Partners | `#partners` | Scrolling strip of brand names |
| 4 | Services | `#services` | Selectable upgrade cards |
| 5 | Incentives | | How eligibility works |
| 6 | Eligibility check | `#check` | Three-step lead form |
| 7 | Savings | | Where the savings come from |
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

`assets/js/main.js` finds its controls through `data-onclick` attributes, for example `data-onclick="next1"` or `data-onclick="svc.hw"`. Keep these values when editing the HTML, because removing or renaming one silently disables that control.

The `data-onchange` and `data-oninput` attributes in `index.html` are not read by the script.

| Feature | Behaviour |
| --- | --- |
| Navigation | Dropdowns close on outside click or Escape |
| Hero slider | Rotates every 7 seconds, stops after manual navigation, has a pause button |
| Service cards | Multiple selection, with Residential Heat Pump selected by default |
| Reviews | Horizontal scrolling with expandable text |
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

### Accessibility

- Skip link, visible focus states and labelled form fields
- Native buttons and links with ARIA state (`aria-expanded`, `aria-pressed`, `aria-invalid`)
- Escape closes dropdowns and returns focus to the button that opened them
- Focus moves to the new step in the form
- The slider and partner strip can be paused, and both start paused under `prefers-reduced-motion`

### SEO and performance

- Title, description, canonical URL, Open Graph and Twitter card tags
- `LocalBusiness` JSON-LD in the `<head>`
- Hero image is preloaded and images below the fold are lazy-loaded
- WebP photos, about 1 MB for the whole site

The canonical URL, `og:url` and `og:image` point to the production domain. Update them if the production URL or hero image changes.

## Deployment

There is no build. Upload `index.html` and the `assets/` folder together, keeping the folder structure, to any static host or web server.

1. Publish to a staging location, such as `https://staging.auzbright.com.au/`.
2. Check it at desktop, tablet and phone widths.
3. Complete the items in [Pre-launch status](#pre-launch-status).
4. Back up the current WordPress homepage.
5. Serve this `index.html` as the site's homepage.

## Pre-launch status

[README-LAUNCH.txt](README-LAUNCH.txt) has the full checklist. These are the main open items:

- [ ] Set `FORM_ENDPOINT` so enquiries reach the CRM
- [ ] Replace the `[TO CONFIRM]` ABN in the footer
- [ ] Replace placeholder hero images and stock-style photos with genuine Auzbright photos
- [ ] Add real photos to the Events section and Water Filter card
- [ ] Replace partner names with approved logos and confirm brand spelling
- [ ] Point "Read all reviews" and "Write a review" to the Google Business Profile
- [ ] Confirm business claims: review count, founding year, accreditations, service area, opening hours
- [ ] Have the incentive wording reviewed

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
