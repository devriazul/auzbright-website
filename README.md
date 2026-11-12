# Auzbright Website

The homepage for [Auzbright](https://auzbright.com.au/), an accredited provider of energy-efficient upgrades for homes and businesses in Victoria and New South Wales.

It is a [Next.js](https://nextjs.org/) app (App Router, TypeScript) that builds to a plain static site, so it can be hosted anywhere without a Node server. It is intended to replace the current WordPress and Elementor homepage. A Laravel backend is planned for later (form handling, blog and CMS); the Next.js frontend will call it as an API.

> **Status: pre-launch.** The enquiry form is not connected yet, so submissions are not sent anywhere. See [Pre-launch status](#pre-launch-status).

## Project scope

The homepage has two jobs: explain Auzbright's upgrades and the government incentives that may apply, and capture leads through a short eligibility check.

**Services covered:** residential heat pumps, air conditioners, solar and battery, EV chargers, LED lighting and water filters.

**Incentive programs referenced:** Victorian Energy Upgrades (VEU), NSW Energy Savings Scheme (ESS) and Cheaper Home Batteries.

**In scope:** every page of the site: the homepage, About, Contact Us, the Victoria and NSW program and product pages, solar and battery, EV charger, careers, enquiry and legal pages, the blog (29 posts) and the 404 page.

**Out of scope:** pages that have no content yet (see [Pages still to write](#pages-still-to-write)).

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
| 13 | Footer | `#contact` | Brand blurb, contact details with lime icons and social icons, then four link columns; disclaimer and legal links below |
| – | Floating contact buttons | `#fab` | Chat (lime) and Call (white) buttons fixed to the bottom of every screen: stacked on the right from 621px up, and split on phones (Call bottom-left, Chat bottom-right) |

## Project structure

```text
.
├── app/
│   ├── layout.tsx              <html>, fonts, stylesheet and shared metadata; loads main.js
│   ├── page.tsx                Homepage
│   ├── about/page.tsx          About page
│   ├── contact/page.tsx        Contact Us page
│   ├── blogs/page.tsx          Blog list (page 1); blogs/page/[page]/ for later pages
│   ├── [slug]/page.tsx         Blog post template (one page per file in content/blog/)
│   ├── products/…              Product list and product detail template (content/products/)
│   ├── victoria/…, nsw/…       Content pages: each page.tsx is 8 lines that render a content/pages/ file
│   ├── sitemap.ts, robots.ts   Build sitemap.xml and robots.txt
│   └── not-found.tsx           404 page (built as 404.html)
├── components/
│   ├── SiteShell.tsx           Page frame: skip link, header, footer, floating buttons, JSON-LD
│   ├── SiteHeader.tsx          Utility bar and navigation
│   ├── SiteFooter.tsx          Footer
│   ├── FloatingContact.tsx     Floating Chat and Call buttons and the chat panel
│   ├── ChatAssistant.tsx       Guided chat assistant inside the chat panel (demo)
│   ├── ContentPage.tsx         Renders a content/pages/ file: hero plus sections
│   ├── EligibilityCta.tsx      Closing "Find out what you're eligible for" call to action
│   ├── EnquiryForm.tsx         Enquiry form with office details (Contact Us and Enquire Now)
│   ├── BlogList.tsx            One page of the blog list, with the pager
│   ├── PostCard.tsx            Blog post card
│   └── SiteScript.tsx          Loads public/assets/js/main.js after React hydrates the page
├── content/
│   ├── pages/*.ts              One data file per content page (text, images, sections)
│   ├── products/*.json         One file per product (summary, features, specifications)
│   └── blog/*.json             One file per blog post (title, dates, image, HTML body)
├── lib/
│   ├── site.ts                 BASE (sub-folder prefix), SITE_URL and link()
│   ├── page-types.ts           The PageData schema for content/pages/
│   ├── products.ts             Reads content/products/ and lays out product pages
│   └── blog.ts                 Reads content/blog/ at build time
├── public/
│   ├── .nojekyll               Lets GitHub Pages serve the _next/ folder
│   └── assets/
│       ├── css/styles.css      All styles
│       ├── js/main.js          All interactions
│       ├── docs/               Product brochures and spec sheets (PDF, 67 MB)
│       └── images/             Logo (PNG) and photos (WebP)
│           ├── partners/       Partner brand logos (SVG and PNG)
│           ├── pages/          Images for the content pages
│           └── blog/           Blog post images (1200px and 600px versions)
├── types/react-augment.d.ts    Type additions: CSS custom properties, `hidden` on <svg>
├── next.config.ts              Static export, trailing slashes, optional base path
├── README.md                   Project and technical documentation
└── README-LAUNCH.txt           Launch checklist for the business
```

## Pages

| Page | File | Notes |
| --- | --- | --- |
| Homepage | `app/page.tsx` | |
| Page not found | `app/not-found.tsx` | Branded 404 page with links to the eligibility check, products, About and FAQs |
| About | `app/about/page.tsx` | Hero with the Sydney Home Show photo, key numbers (5,258 projects counts up), who we are with vision/mission/values cards, four-step process, why choose us, Victoria and NSW cards, careers and the eligibility call to action. Content is adapted from auzbright.com.au/about/ |
| Contact Us | `app/contact/page.tsx` | Hero, four contact cards (call, email, office, chat), enquiry form, office details and quick links |
| Blog list | `app/blogs/page.tsx`, `app/blogs/page/[page]/page.tsx` | Posts newest first, in pages: `/blogs/`, then `/blogs/page/2/` and so on |
| Blog posts | `app/[slug]/page.tsx` | 29 posts at the site root, for example `/heat-pump-hot-water/` |
| Content pages | `content/pages/*.ts` | See [Content pages](#content-pages) |

Every URL matches the live WordPress site, so existing search rankings and links carry over.

### Content pages

These pages were rebuilt from the live WordPress site in the new design. Each is a data file in `content/pages/`, rendered by `components/ContentPage.tsx`; the route file in `app/` only imports it.

| URL | Data file |
| --- | --- |
| `/victoria/` | `victoria.ts` (new hub; the live URL has no content) |
| `/victoria/victorian-energy-upgrades/` | `victoria--victorian-energy-upgrades.ts` |
| `/victoria/energy-efficient-hot-water-solutions-for-homes/` | `victoria--energy-efficient-hot-water-solutions-for-homes.ts` |
| `/victoria/split-aircon-rebate-government-program/` | `victoria--split-aircon-rebate-government-program.ts` |
| `/victoria/free-hot-water-systems/` | `victoria--free-hot-water-systems.ts` |
| `/victoria/victoria-faqs/` | `victoria--victoria-faqs.ts` |
| `/nsw/` | `nsw.ts` (new hub; the live URL has no content) |
| `/nsw/energy-savings-scheme-ess/` | `nsw--energy-savings-scheme-ess.ts` |
| `/nsw/energy-efficient-hot-water-solutions-for-homes/` | `nsw--energy-efficient-hot-water-solutions-for-homes.ts` |
| `/nsw/energy-efficient-hot-water-solutions-for-businesses/` | `nsw--energy-efficient-hot-water-solutions-for-businesses.ts` |
| `/nsw/nsw-faqs/` | `nsw--nsw-faqs.ts` |
| `/solar-battery-solutions/` | `solar-battery-solutions.ts` |
| `/ev-charger/` | `ev-charger.ts` |
| `/emerald-energy/` | `emerald-energy.ts` |
| `/about/work-with-auzbright/` | `about--work-with-auzbright.ts` (careers) |
| `/enquire-now/` | `enquire-now.ts` (enquiry form) |
| `/thank-you/` | `thank-you.ts` (`noindex`) |
| `/landing/` | `landing.ts` (ad landing page, `noindex`) |
| `/privacy-policy/` | `privacy-policy.ts` |

A page is a hero plus a list of sections. `lib/page-types.ts` documents every field. The section types are `split` (text beside an image), `features` (icon cards), `steps`, `products` (cards with brochure links), `specs`, `stats`, `faq`, `reviews`, `cards` (linked cards), `prose` (policies) and `form` (the enquiry form). Text accepts `**bold**` and `[label](href)`. In a hero title, `{curly braces}` mark the words shown in lime. Every page ends with the eligibility call to action unless it sets `cta: false`.

To add a page: create `content/pages/<name>.ts`, then copy any content page's `page.tsx` into the matching `app/` folder and change the import. It is added to `sitemap.xml` automatically.

To edit a page's text or images, change its data file only. To change how a section type looks everywhere, change `components/ContentPage.tsx` or the "Content pages" block at the end of `styles.css`.

### Products

Every product has a detail page at `/products/<slug>/`, and `/products/` lists them all by category (30 pages: 6 heat pumps, 8 air conditioners, 12 batteries, 3 solar packages and the list). The Emerald all-in-one R290 model keeps its existing page at `/emerald-energy/`.

Each product is a JSON file in `content/products/`: `slug`, `category`, `order`, `brand`, `name`, `tagline`, `summary`, `image`, `highlights`, `specs`, and optional `warranty` and `brochure`. `lib/products.ts` documents the fields, reads the files at build time and lays each one out as a content page (hero, overview, key features, key specifications, three related products). `app/products/[slug]/page.tsx` builds the pages and adds `Product` structured data.

The text is a short summary of the manufacturer's brochure in `public/assets/docs/`, kept deliberately brief: a one-line tagline, up to 60 words of overview, three to six features and four to eight specifications copied from the brochure. Products without a brochure (Ecogenica, Growatt, Tesla and the solar packages) use only what the site already said about them. `warranty` is Auzbright's offer from the original product card, not the manufacturer's term.

Product cards on the service pages link to these pages through the `href` field of a `products` section item.

To add a product, add a JSON file (the `slug` must match the file name) and set `href` on its card. It appears on `/products/`, in related products and in `sitemap.xml` automatically.

### Chat assistant (demo)

The floating Chat button opens a guided assistant (`components/ChatAssistant.tsx`, a React client component inside the chat panel). It is a **demo**: it follows a fixed script and does not call an AI model, and the panel shows a "Demo" tag.

| Step | What happens |
| --- | --- |
| 1. Product | The visitor picks an upgrade (or "Not sure yet") |
| 2. Full name | Typed; at least two letters |
| 3. Phone | Typed; must be a valid Australian number |
| 4. Customer check | The number is looked up. Found: an "Existing customer" tag and a welcome back. Not found: a "New customer" tag |
| 5a. Existing customer | Chooses a quote for the product, warranty or service (with a link to the warranty form), or a call back |
| 5b. New customer | Gives a postcode. Victorian postcodes get the VEU message, NSW the ESS message, others a "we install in Victoria and NSW" message |
| 6. Close | Says a specialist will call in business hours, and links to the matching product page |

**What is not real yet:**

- **The customer lookup** (`lookupCustomer()`) checks two sample records, 0412 345 678 (Sam Taylor) and 0498 765 432 (Priya Sharma), plus anyone who finished the chat before in the same browser. Replace it with a call to the CRM or the Laravel API.
- **Leads are not sent anywhere.** Each finished chat is saved in the visitor's own browser (`localStorage`, key `auzbright-chat-leads`) so the returning-customer path can be shown. Set `NEXT_PUBLIC_CHAT_LEAD_ENDPOINT` at build time to also POST each lead as JSON: `product`, `name`, `phone`, `postcode`, `state`, `customerType` (`new` or `existing`), `request`, `createdAt`, `source: "Chat assistant"`.

`main.js` still opens and closes the panel (and opens Tawk.to instead if `CHAT` IDs are set). The component stops clicks inside it from reaching `main.js`'s outside-click handler, because React can remove a clicked button before that handler runs.

### Blog

Each post is a JSON file in `content/blog/`, scraped from the WordPress site: `slug`, `title`, `seoTitle`, `description`, `excerpt`, `date`, `modified`, `readingMinutes`, `image` and `html`. `lib/blog.ts` reads them at build time, and `app/[slug]/page.tsx` builds one page per file at `/<slug>/`. Any other root-level URL is a 404.

The `html` body was reduced from Elementor markup to plain headings, paragraphs, lists and tables. FAQ accordions became `<details>` elements, which open without JavaScript. It is styled by `.post-body` in `styles.css`. Post images are in `public/assets/images/blog/` as `<slug>.webp` (up to 1200px) and `<slug>-600.webp`.

**List pages:** `components/BlogList.tsx` renders each page. Page 1 shows the newest post as a large card plus nine more; later pages show nine (`PER_PAGE` in `lib/blog.ts`). The number of pages follows the number of posts, and the pager (`.pager`) shows Newer, page numbers and Older. Only `/blogs/` is in `sitemap.xml`.

**Post pages:** the article sits beside a sidebar (`.post-layout`, 360px wide, at the same page width as every other page). The sidebar has:

- **On this page:** links to the post's `<h2>` headings (`withHeadingIds()` adds the ids). Hidden at 1100px and below.
- **A service card** for each topic the post matches. `TOPICS` in `lib/blog.ts` maps slug keywords (heat pump, air con, solar, water filter, programs) to a service page.
- **Related articles:** the four posts sharing the most topics (`relatedPosts()`).
- **An eligibility check card,** which stays on screen while the article scrolls.

At 1100px and below, the sidebar moves under the article. "Latest guides" under the post shows the three newest posts not already in the sidebar.

To add a post, add a JSON file with the same fields and put its two images in the blog image folder. When the Laravel backend exists, replace `lib/blog.ts` with API calls; the pages need no other change.

Each page wraps its `<main>` in `<SiteShell>`, which adds the utility bar, navigation, footer and floating buttons from `components/`. Pass the page's own path as `current` (for example `<SiteShell current="/about/">`), and its nav links get `aria-current="page"`. Page titles, descriptions, canonical URLs and Open Graph tags are set with each page's `metadata` export; structured data goes in `SiteShell`'s `jsonLd` prop.

Links to pages in this app and asset paths are written with the `BASE` prefix from `lib/site.ts`, for example ``href={`${BASE}/contact/`}`` and ``src={`${BASE}/assets/images/…`}``. In content data files, write plain site paths (`/contact/`); `link()` adds the prefix when the page renders. `BASE` is empty on the live domain and `/auzbright-website` for the GitHub Pages preview (see [Deployment](#deployment)). Links in the shared header and footer point to homepage sections as `${BASE}/#check`; on the homepage itself these scroll in place.

Pages link to each other with plain `<a>` tags rather than `next/link`, so every navigation is a full page load and `main.js` sets up each page from scratch. Switch to `next/link` only once a page's interactions have moved from `main.js` into React components.

### Contact form

The Contact Us page has its own form (`#contact-form`), configured at the top of `public/assets/js/main.js`:

- `CONTACT_ENDPOINT`: your form handler URL. The form POSTs JSON: `name`, `email`, `phone`, `postcode`, `enquiryType`, `upgrade`, `message`, `consent`, `source: "Contact page"`. Success is shown only when the server answers with an OK status; otherwise the visitor sees an error with the phone number and email address, and their input is kept.
- While `CONTACT_ENDPOINT` is empty, sending opens the visitor's email app with a message to `CONTACT_EMAIL` (admin@auzbright.com.au), with the details filled in, and the page says so.

The form checks fields in the page: name, an email or phone number (or both), enquiry type, a message of at least 10 characters and the privacy consent. Email, Australian phone and 4-digit postcode formats are also checked. Errors are linked to their fields for screen readers, and focus moves to the first problem. A hidden "website" field catches simple spam bots.

## Run locally

Needs Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Then open <http://localhost:3000>. The dev server reloads as you edit.

To check the production build:

```sh
npm run build      # static site in out/
npm run preview    # serves out/ at http://localhost:3000
```

## Technical documentation

### Stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) with React 19 and TypeScript, exported as static HTML (`output: "export"`) |
| Markup | Server components in `app/` and `components/`; plain `<img>` tags with hand-written `srcset` (not `next/image`) |
| Styles | Plain CSS with container queries |
| Scripts | Vanilla JavaScript in one IIFE (`public/assets/js/main.js`), loaded by `components/SiteScript.tsx` after hydration |
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

`public/assets/js/main.js` finds most of its controls through `data-onclick` attributes (the savings cards use `role="tab"` instead), for example `data-onclick="next1"` or `data-onclick="svc.hw.toggle"`. Keep these values when editing the JSX, because removing or renaming one silently disables that control.

The `data-onchange` and `data-oninput` attributes on the homepage are not read by the script.

`main.js` runs after React has hydrated the page, so its DOM changes never conflict with hydration. The pages are server components with no React state, so React doesn't re-render them and undo those changes. Two things keep this working:

- **Form fields** use `defaultValue` and `defaultChecked`, not `value` and `checked`, so they stay uncontrolled and `main.js` can read and reset them.
- **The utility bar** is hidden before hydration by a small inline script when it was dismissed, so `#topbar` has `suppressHydrationWarning`.

`styles.css` is linked from `public/` as-is rather than imported into the bundle. Next's CSS minifier reorders some declarations: it moved the `font` shorthand in `.ab-stat-v` after `font-variant-numeric`, which reset the About page's tabular digits.

| Feature | Behaviour |
| --- | --- |
| Navigation | Each top-level label is a link: About to `/about/`, Victoria to `/victoria/`, NSW to `/nsw/` and Product and Services to the product list at `/products/`. Each dropdown lists the six product types. Pages that are not in the header (the VEU and ESS program pages, commercial heat pump pages, state FAQs, Emerald Energy, Enquire Now and All Products) are linked from the footer. The footer has the logo, contact details and social icons on the left and four link columns: Products (pages shared by both states), Victoria, New South Wales and Company. The columns are the `COLUMNS` list at the top of `components/SiteFooter.tsx`; edit that list to add or move a link. On phones the columns sit two across. Dropdowns open on mouse hover or from the chevron button (keyboard and touch), and close on mouse leave, outside click or Escape |
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

To connect it, set `FORM_ENDPOINT` at the top of `public/assets/js/main.js`. On submit, the script sends a `POST` with `Content-Type: application/json`:

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

The partner strip in `#partners` shows logos from `public/assets/images/partners/`. The visible copy of each logo has the brand name as its alt text. The duplicate copy that makes the loop seamless has empty alt text and sits in an `aria-hidden` item.

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

To add a logo, put the file in `public/assets/images/partners/` and add it to both copies of the list in `app/page.tsx`. Use the brand name as alt text in the first copy and `alt=""` in the second.

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

Run `npm run build`. It writes the whole site to `out/` as static files (`index.html`, `about/index.html`, `contact/index.html`, `404.html`, `assets/` and `_next/`). Upload the contents of `out/`, keeping the folder structure, to any static host or web server.

To serve the site from a sub-folder, build with that folder as the base path, for example `NEXT_PUBLIC_BASE_PATH=/new-home npm run build`.

1. Publish to a staging location, such as `https://staging.auzbright.com.au/`. A public preview is also served by GitHub Pages from the `gh-pages` branch at <https://devriazul.github.io/auzbright-website/>. To update it, run `npm run deploy:preview`, which builds with the `/auzbright-website` base path and pushes `out/` (including `.nojekyll`) to `gh-pages`.
2. Check it at desktop, tablet and phone widths.
3. Complete the items in [Pre-launch status](#pre-launch-status).
4. Back up the current WordPress homepage.
5. Serve the built `out/` folder as the site.

## Pre-launch status

[README-LAUNCH.txt](README-LAUNCH.txt) has the full checklist. These are the main open items:

- [ ] Set `FORM_ENDPOINT` so enquiries reach the CRM
- [ ] Set `CONTACT_ENDPOINT` for the Contact Us page form (until then it opens an email instead)
- [ ] Decide whether `contact/` and `about/` replace the WordPress `/contact/` and `/about/` pages when this site goes live
- [ ] Confirm the About page numbers ("5,258 projects completed" and "80% saving on lighting costs", both from the current About page) and add real team members if you want a team section
- [ ] Chat assistant is a demo: connect the customer lookup and lead endpoint, then remove the "Demo" tag (see [Chat assistant](#chat-assistant-demo)). Until then, chat leads are not sent to anyone
- [ ] Connect live chat: create a Tawk.to account and set `CHAT.tawkPropertyId` and `CHAT.tawkWidgetId` in `public/assets/js/main.js` (until then, Chat opens the contact panel)
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

### Content carried over from the live site that needs review

The rebuilt pages keep the live site's wording (with spelling and grammar tidied), including claims that look wrong or risky. Review these in `content/pages/` before launch:

- [ ] **"Free" and fixed-amount claims:** "free hot water system upgrade", "100% government discount", "50% government refund" (`victoria--free-hot-water-systems.ts`); "rebates of up to $9,000" (`victoria--split-aircon-rebate-government-program.ts`); "From just $33" (`nsw--energy-efficient-hot-water-solutions-for-homes.ts`); "free upgrade" labels and "free LED lighting installation" (`landing.ts`); "free installation" (`victoria--victoria-faqs.ts`); "at no cost to you" (`nsw--energy-efficient-hot-water-solutions-for-businesses.ts`)
- [ ] **Wrong state or scheme:** the NSW homes heat pump page says "VIC residents" and describes the "VIC VEU"; the Victorian homes page has a section headed "Energy Savings Scheme (VEU)"; the VEU page's "How easy is it?" steps described the NSW scheme on the live site, so steps 1 and 2 were rewritten
- [ ] **Wrong product:** the NSW business heat pump page has six cards about split system air conditioning; the Victorian air conditioner page's "How easy is it?" intro is about free exhaust fan seals; the landing page's air con card has LED lighting text
- [ ] **NSW FAQs:** the "Is my home or business eligible?" answer was a copy of the Victorian one, so it was left out. Write an NSW answer
- [ ] **Contradictory numbers:** the 13.5kW solar package says both "25kWh battery" and "1x 9.6kW battery"; the Emerald Energy page says 270 L and "220 L and 320 L"; founding year is 2017 on most pages but the careers page says 2007 and the landing page "10-year legacy"
- [ ] **Product details:** all 12 batteries show "10 years warranty"; two different Emerald heat pumps are both named "270L"; the "Mitsubishi Electric Ducted System" and "Daikin Ducted System" cards show multi-split images and brochures
- [ ] **Product pages vs brochures** (`content/products/`). The summaries follow the brochures, which disagree with the original product cards in places:
  - **Mitsubishi Electric and Daikin:** both brochures are ducted catalogues, but the card images show wall-mounted and multi-split units. Replace the images, or supply multi-split brochures
  - **Warranty:** the cards say 7 years for Rinnai (brochures: 5 years) and 5 years for Neopower (brochure: 6 years). The pages show the card figure
  - **Sungrow:** card says 2–8 modules, spec sheet says 3–8 (page uses 3–8). **Fox ESS:** card says 6,000 cycles, manual says ≥4,000 (page uses the manual). **Anker:** card says IP65, spec sheet says IP66 (page uses IP66)
  - **Midea multi head and Midea VRF splits:** several card features are not in their brochures; the Midea VRF brochure covers wall-mounted units only
  - **Emerald 270L all-in-one:** its PDF is a controller manual with no product specifications, so the page is thin. **Alpha ESS:** its PDF is a company brochure without per-model data. **Panasonic:** the PDF is the full 2023 catalogue, summarised for the ducted range only
  - **Econova:** the brochure's testimonial names Ecogenica, and tank sizes are not printed
  - The Mitsubishi, Daikin, Panasonic and Rinnai multi-head summaries used the first 14 pages of long catalogues
- [ ] **Privacy policy:** contains the unfilled placeholder "[contact email]", gives info@auzbright.com.au (the rest of the site uses admin@), and mentions orders and shipping like a generic template
- [ ] **Careers page claims:** "around 80" staff "across four Australian states", "15 different languages", an "HR Manager" interview. The live page's application form with CV upload is replaced by an email link
- [ ] **Missing numbers:** the landing page's four counters (years of experience, projects completed and so on) showed 0 on the live site, so that section was left out
- [ ] **Blog posts:** the text is as published. Some posts have repeated sentences in the intro, and the featured images are AI-generated
- [ ] **Victoria and NSW hub pages** (`/victoria/`, `/nsw/`) are new: the live URLs are blank. Check the wording
- [ ] **PDF brochures** in `public/assets/docs/` (67 MB) are copies from the live site. Confirm you may host each manufacturer's file, or link to the manufacturer instead

### Pages still to write

These pages are not on auzbright.com.au either, so there is no content to rebuild them from. Their links currently point somewhere that works. When a page is created, change the link in `components/SiteHeader.tsx`, `components/SiteFooter.tsx` or the page that uses it.

| Missing page | Links now go to |
| --- | --- |
| `/career/` | The careers page at its live URL, `/about/work-with-auzbright/` |
| `/installation/` | About page, Our process (`about/#process`) |
| `/claim-warranty/` | Contact form with "Existing installation or warranty" preselected (`contact/?enquiry=warranty#contact-form`) |
| `/events/` | Events button now says "More on LinkedIn" and opens the LinkedIn company page |
| `/victoria/led-lighting/`, `/victoria/water-filter/`, `/nsw/air-conditioner/`, `/nsw/led-lighting/`, `/nsw/water-filter/` | The matching homepage product card (`#led-lighting` and so on) |

In the Product and Services menu, Residential Heat Pump and Air Conditioner also go to their homepage cards, because their pages are state-specific. The footer links to each state's own page instead.
| `/terms-of-use/`, `/accessibility/` | Removed from the footer; add them back when the pages exist |

`app/not-found.tsx` builds to `404.html`, a branded "page not found" page with the shared header and footer. Its links and styles use full paths from the site root (with `BASE`), so they work at any URL depth. GitHub Pages serves it automatically for missing URLs; on other hosts, set it as the 404 page. Next adds `noindex` to it.

## Testing

The project has no automated tests or CI. Run `npm run typecheck` and `npm run build` before committing. Check changes manually at 1440, 768, 390 and 320 pixels wide, with no horizontal scrolling at any width, and test the full form flow by keyboard.

## Maintaining this README

Update this file in the same commit as any change that affects it, including sections, file structure, script behaviour, the form payload, breakpoints, deployment steps or pre-launch status.
