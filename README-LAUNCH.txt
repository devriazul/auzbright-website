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

2. REPLACE PLACEHOLDER IMAGES
   - hero-family.webp, hero-heat-pump-installer.webp, hero-solar-home.webp were AI-generated
     to show the art direction. Replace with genuine Auzbright customer/installation photos
     (with consent). Keep the same file names, or update index.html.
   - Events section: the 4 grey/navy boxes are photo slots. Add real All-Energy Australia photos.
   - Water Filter service card: shows an icon. Add a real water filter product photo.
   - Some site photos (LED lighting, AC couple, solar panels, plumbing gauges) look like stock.

3. PARTNER LOGOS. The partner strip shows brand NAMES, not logos. Get official logo files from
   each partner (with permission to use) and swap them in. Confirm the names:
   "Carrier" (written as "Career" in the brief), "HiCi", "Evenx", "Sigenergy" (written as "Sygenergy").

4. CHECK EVERY CLAIM
   - 116 Google reviews / "Excellent": this changes — keep in sync with Google.
   - Each review shows 5 stars: confirm each rating on Google.
   - Founded 2017 (current site also says "10-year legacy" — these conflict).
   - Accredited Certificate Provider (VEU & ESS): add accreditation numbers if you have them.
   - "Licensed electricians and plumbers": confirm wording (some installs are via partners).
   - Service area "Victoria & New South Wales" (current site also mentions SA & QLD teams).
   - Opening hours "Mon–Fri, 9am–5pm" (current site says "9am to 5pm, W.e/ Holiday").
   - ABN in the footer currently reads "[TO CONFIRM]" — add your ABN.
   - Top green bar: make sure it names an offer that is live right now.
   - Incentive wording (VEU, NSW ESS, Cheaper Home Batteries) — have it reviewed; programs change.
   - "60–75% less energy" is from NSW Climate and Energy Action; keep the source line.

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
