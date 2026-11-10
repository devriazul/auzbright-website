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

2. REPLACE PLACEHOLDER IMAGES
   - The hero photos (hero-family, hero-heat-pump-installer, hero-solar-home) were
     AI-generated to show the art direction. Replace them with genuine Auzbright customer or
     installation photos (with consent). Each photo now comes in 480, 800 and 1200px WebP
     versions (see README.md, "SEO and performance"), so ask your developer to regenerate all
     sizes when swapping one.
   - Events section: the 4 grey/navy boxes are photo slots. Add real All-Energy Australia photos.
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
   - ABN in the footer currently reads "[TO CONFIRM]" — add your ABN.
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

LINKS — PAGES YOU STILL NEED TO CREATE (or change the link in index.html)
-------------------------------------------------------------------------
/career/
/installation/
/claim-warranty/
/events/
/terms-of-use/
/accessibility/
/victoria/led-lighting/
/victoria/water-filter/
/nsw/air-conditioner/
/nsw/led-lighting/
/nsw/water-filter/

The "Product and Services" menu links jump to the service cards on the homepage.


ALREADY BUILT IN
----------------
- Responsive: desktop, tablet and phone (tested at 1440, 768 and 390 px wide, no sideways scrolling)
- Keyboard and screen-reader friendly: real buttons and links, visible focus, labelled form fields,
  skip link, Escape closes menus, slider and partner strip can be paused, motion respects
  "reduce motion" settings
- SEO basics: title, description, canonical, Open Graph tags, LocalBusiness structured data
- Images lazy-load below the fold
