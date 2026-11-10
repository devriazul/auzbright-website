AUZBRIGHT HOMEPAGE — LAUNCH PACKAGE
====================================

WHAT'S IN THE FOLDER
--------------------
index.html                 The homepage
assets/css/styles.css      All styles (fonts: Inter, loaded from Google Fonts)
assets/js/main.js          Slider, menus, service cards, eligibility form, reviews, FAQs, partner strip
assets/images/             13 images (logo + photos), WebP format

No build step and no plugins. Upload the whole folder as-is. Keep the folder structure.


HOW TO PUT IT LIVE
------------------
Your current site runs on WordPress + Elementor. Pick ONE of these:

A) Test first (recommended)
   Upload the folder to a subfolder or a staging subdomain, e.g. https://auzbright.com.au/new-home/
   or https://staging.auzbright.com.au/, and check it on desktop, tablet and phone.

B) Replace the WordPress homepage
   Ask your developer/host to serve this index.html as the site's homepage, or rebuild it as an
   Elementor page using this file as the design. Back up the current homepage first.

Pages linked from this homepage must exist on the same domain (see "Links" below).


MUST DO BEFORE GOING LIVE
-------------------------
1. CONNECT THE ENQUIRY FORM. The "Find the right upgrade" form does NOT send enquiries yet.
   Open assets/js/main.js and set FORM_ENDPOINT to your CRM / form-handler URL
   (it receives a JSON POST: propertyType, postcode, upgrade, selectedServices, firstName, mobile, source).
   Until then, customers will see a thank-you message but nothing reaches you.

1b. CONNECT LIVE CHAT. The floating Chat button (bottom right) opens a contact panel (eligibility
   check, call, email, Facebook Messenger) until live chat is connected. To connect Tawk.to (free):
   create an account at tawk.to, then copy the two IDs from Administration > Chat Widget > Direct
   Chat Link (https://tawk.to/chat/<propertyId>/<widgetId>) into CHAT at the top of
   assets/js/main.js. For another provider (Intercom, HubSpot, Crisp), ask your developer to swap
   the loader.

1c. CONTACT US PAGE. A new Contact Us page is in contact/index.html. Its form needs a form
   handler too: set CONTACT_ENDPOINT in assets/js/main.js. Until then, "Send message" opens the
   visitor's email app addressed to admin@auzbright.com.au. Your WordPress site already has a
   /contact/ page, so decide which one to keep when going live.

1d. ABOUT PAGE. A new About page is in about/index.html, adapted from auzbright.com.au/about/.
   - Left out on purpose: the "Meet the team" names and photos (Kate Stivenson, "Edward Doson,
     Tester" and others look like the theme's demo team) and a placeholder paragraph under
     "Why Choose Us". Send real team names, roles and photos to add a team section.
   - "10+ Years Experience" was replaced by "2017, Established in Victoria" because it conflicts
     with the 2017 founding date. "97.41% positive feedback" was replaced by the 116 Google
     reviews already shown on the homepage.
   - Kept from the current page, please confirm: "5,258 projects completed" and "80% saving on
     lighting costs". "VEET (Victorian Energy Efficiency Scheme)" was updated to the program's
     current name, Victorian Energy Upgrades (VEU), and "all over Australia" to Victoria and NSW
     to match the rest of the site.
   - The WordPress site already has an /about/ page, so decide which one to keep when going live.

2. REPLACE PLACEHOLDER IMAGES
   - The hero photos (hero-family, hero-heat-pump-installer, hero-solar-home) were
     AI-generated to show the art direction. Replace them with genuine Auzbright customer or
     installation photos (with consent). Each photo now comes in 480, 800 and 1200px WebP
     versions (see README.md, "SEO and performance"), so ask your developer to regenerate all
     sizes when swapping one.
   - Events section: now shows the Sydney Home Show 2026 (9–11 October) with four photos from
     Auzbright's LinkedIn post. It previously named All-Energy Australia; no photos or public
     record of that event were found. Add All-Energy back if Auzbright did exhibit there. Two
     photos show on-screen prices and a "70%" rebate banner, so check they are still current.
   - Service cards: all six now use images from the current auzbright.com.au site (see
     README.md, "Service card images").
   - Water Filter service card: uses a blog featured image that appears to be AI-generated
     and shows an "Auzbright" label on the filter bracket. Replace it with a genuine
     installation photo.
   - Some other site photos (for example solar panels and plumbing gauges) look like stock.

3. PARTNER LOGOS. The partner strip now shows logos for all 12 brands, taken from each
   brand's website, Wikimedia Commons or LinkedIn, plus the Evnex logo you supplied (see
   README.md, "Partner logos"). Before launch, get each partner's permission to use their
   logo, and swap in official artwork they supply. The HiCi logo is low resolution: ask
   HiCi for a larger file.

4. CHECK EVERY CLAIM
   - 116 Google reviews / "Excellent": this changes — keep in sync with Google.
   - Each review shows 5 stars: confirm each rating on Google.
   - Founded 2017 (current site also says "10-year legacy" — these conflict).
   - Accredited Certificate Provider (VEU & ESS): add accreditation numbers if you have them.
   - "Licensed electricians and plumbers": confirm wording (some installs are via partners).
   - Service area "Victoria & New South Wales" (current site also mentions SA & QLD teams).
   - Opening hours "Mon–Fri, 9am–5pm" (current site says "9am to 5pm, W.e/ Holiday").
   - ABN: the "[TO CONFIRM]" placeholder was removed from the footer. Send your ABN and it
     will be added back.
   - Top utility bar: make sure the "Incentives" message names programs that are live right
     now (currently VEU and NSW ESS). The bar also shows "Mon–Fri 9am–5pm", so confirm the hours.
     Visitors who dismiss the bar won't see it again for 14 days.
   - Incentive wording (VEU, NSW ESS, Cheaper Home Batteries) — have it reviewed; programs change.
   - "60–75% less energy" is from NSW Climate and Energy Action; keep the source line.
   - Savings section, air con card: "about a third of the cost" of a portable electric heater
     cites Solar Victoria (based on CHOICE). Confirm the wording on the source page. The solar
     and EV cards explain how savings work and make no numeric claims.

5. GOOGLE REVIEWS LINKS. "Read all reviews" and "Write a review" currently open a Google search.
   Replace with your Google Business Profile review links.


LINKS — PAGES THAT ALREADY EXIST ON auzbright.com.au
----------------------------------------------------
About / Our Team ........ /about/
Blogs ................... /blogs/
Contact Us .............. /contact/
VIC Residential Heat Pump /victoria/energy-efficient-hot-water-solutions-for-homes/
VIC Air Conditioner ..... /victoria/split-aircon-rebate-government-program/
NSW Residential Heat Pump /nsw/energy-efficient-hot-water-solutions-for-homes/
Solar & Battery ......... /solar-battery-solutions/
EV Charger .............. /ev-charger/
VEU program ............. /victoria/victorian-energy-upgrades/
ESS scheme .............. /nsw/energy-savings-scheme-ess/
Victoria FAQs ........... /victoria/victoria-faqs/
NSW FAQs ................ /nsw/nsw-faqs/
Privacy Policy .......... /privacy-policy/
Commercial heat pumps ... /victoria/free-hot-water-systems/

LINKS — PAGES THAT DON'T EXIST YET (links temporarily point elsewhere)
----------------------------------------------------------------------
/career/ ......................... About page, Careers section
/installation/ ................... About page, Our process
/claim-warranty/ ................. Contact form with "warranty" preselected
/events/ ......................... Events button opens LinkedIn instead
/terms-of-use/, /accessibility/ .. removed from the footer for now
/victoria/led-lighting/, /victoria/water-filter/, /nsw/air-conditioner/,
/nsw/led-lighting/, /nsw/water-filter/ ... the matching homepage product card
When you create one of these pages, ask your developer to point the links back to it.

The "Product and Services" menu links jump to the service cards on the homepage.


ALREADY BUILT IN
----------------
- Responsive: desktop, tablet and phone (tested at 1440, 768 and 390 px wide, no sideways scrolling)
- Keyboard and screen-reader friendly: real buttons and links, visible focus, labelled form fields,
  skip link, Escape closes menus, slider and partner strip can be paused, motion respects
  "reduce motion" settings
- SEO basics: title, description, canonical, Open Graph tags, LocalBusiness structured data
- Images lazy-load below the fold
