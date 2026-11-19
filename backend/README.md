# Auzbright backend

The staff CRM and CMS from the AUZBRIGHT Platform Architecture Plan: Laravel 13 on PHP 8.4, with the staff screens built in Filament 5.

> **Status: UI preview.** The CRM screens and the customer signing page are built, but they all show sample data from `app/Support/Demo.php`. Nothing is saved, no buttons do anything (a few show a "Preview only" message), and there is no API yet. The point is to review the layout before the modules are built.

## Run it

Needs PHP 8.4, Composer and Node.js 20 or later. [Laravel Herd](https://herd.laravel.com/) provides all three on macOS.

```sh
cd backend
composer setup                     # install, .env, app key, migrations, npm build
php artisan db:seed                # adds the demo staff login
php artisan serve                  # http://localhost:8000
```

| Open | What it is |
| --- | --- |
| <http://localhost:8000/crm> | Staff CRM. In local development the login form is filled in with the demo account, `ava@auzbright.test` and `password` |
| <http://localhost:8000/sign/SGN-3021> | Customer signing page, as a customer would see it from the emailed link (no login) |
| <http://localhost:8000/sign/SGN-3021?mode=in-person> | The same page in in-person mode, for a customer signing on an installer's tablet |

The preview uses SQLite (`database/database.sqlite`) so it runs without setting anything up. The plan specifies PostgreSQL and Redis; switch to them in `.env` when real modules start.

After changing CSS or Blade views, run `npm run build` again, or keep `npm run dev` running.

## What's in the preview

The screens follow the plan's "CRM user interface" section: a left sidebar grouped by module, a top bar with search and quick create, saved list views, a Kanban pipeline and a Zoho-style record page, all in Auzbright colours. The sidebar is white in light mode and navy in dark mode.

| Sidebar | Screen | Plan module | State |
| --- | --- | --- | --- |
| Home | Greeting, five KPIs (including Awaiting signature), leads by source, integration health, latest inquiries, My day, awaiting signature, leads by upgrade, pipeline by stage | Reporting | Sample data |
| Sales › Leads | Every inquiry with source, status, repeat count and owner; search (phone search ignores spaces and +61), filters, saved views, bulk actions | Leads | Sample data |
| Sales › Contacts | One row per person, with consent and merge suggestions | Identity | Sample data |
| Sales › Deals | Kanban board with totals per stage and an "Awaiting signature" or "Signed" badge; each card opens the deal record page (stage bar, details, documents, related lists, timeline, "Send for signature") | Sales | Sample data |
| Sales › Documents | Every envelope sent for e-signature, with status, signer progress and expiry; each row opens the document record page | Documents | Sample data |
| Sales › Sign templates | The six signing templates, their signing order and what happens when each is completed | Documents | Sample data |
| Sales › Tasks and calendar | | Sales | Placeholder |
| Service › Tickets | Tickets with priority and SLA state (on track, at risk, breached, paused) | Service | Sample data |
| Finance › Invoices | Totals, GST, paid and balance in integer cents | Finance | Sample data |
| Marketing › Campaigns | | Marketing | Placeholder |
| Website › Products | The 29 products, grouped by category | CMS | Snapshot of `frontend/content/products/` |
| Website › Blog Posts | The 29 posts | CMS | Snapshot of `frontend/content/blog/` |
| Website › Pages, FAQs | | CMS | Placeholder |
| Platform › Webhook inbox | Meta, Aircall, Stripe, Mailgun and Zoho Sign events, with replay on failures | Integrations | Sample data |
| Platform › Users and roles, Settings | | Platform | Sample data, placeholder |

Placeholder screens list what the module will hold and when it is due, from the plan.

The product and blog snapshots are in `database/demo/`. They are copies, so edits to the frontend content don't show here until the Content API replaces them.

## E-signature (Documents module)

Staff send quotes, scheme forms and agreements for signature from the CRM, the way Zoho Sign is used today. Who opened and signed what appears on the deal timeline, and a completed document moves the deal on by itself.

This module isn't in the architecture plan PDF (6 November 2026). It was added on 20 November 2026 and should be added to the plan's module list.

### Decisions in the preview

These follow the proposal. Change them here and in the demo if management decides otherwise.

| Decision | Choice | Why |
| --- | --- | --- |
| Build or integrate | **Integrate.** The CRM owns templates, workflow, screens and audit history; a signing provider behind an adapter seals the PDF and issues the completion certificate | Tamper-evident sealing and a legally robust audit trail are the provider's job. About 2 weeks instead of 5 to 6 for a native engine |
| Provider | **Zoho Sign** until the Zoho cutover, then decide whether to stay or move (Documenso can be self-hosted) | No change for staff at launch. The adapter makes a later switch a one-module change |
| Customer verification | Email one-time code | SMS isn't in scope yet (see the plan's SMS section). Add SMS codes once an SMS provider exists |
| Signing methods | Draw or type the signature; email link or in person on a tablet | Installers often get forms signed on site |

### Templates

| Template | Signers | When completed |
| --- | --- | --- |
| Quote acceptance | Customer | Deal moves to Won and an install booking task is created |
| VEU assignment form (VIC) | Customer, then installer | Certificate claim is unlocked on the deal |
| ESS nomination form (NSW) | Customer, then installer | Certificate claim is unlocked on the deal |
| Installation agreement | Customer | Install can be scheduled |
| Battery and finance consent | Customer | Finance team is notified |
| Warranty claim authorisation | Customer | Attached to the service ticket |

Merge fields (name, address, product, price, scheme) fill from the deal, so staff only pick a template and a recipient. New versions of the scheme forms need Compliance approval, as the plan requires for scheme content.

### Envelope statuses

`draft` → `sent` → `viewed` → `partly_signed` (multi-signer only) → `completed`, or `declined` or `expired`. Links expire after 14 days by default, with reminders every 3 days.

### What the preview shows

- **Documents list** (`/crm/documents`): search, filter by status, template or sender, reminders, void, download.
- **Document record** (`/crm/documents/{ref}`): a preview of the filled document with each signature field, the signers in order, and the audit trail (sent, viewed with device and IP, signed, completed).
- **Send for signature** modal on the deal page and the Documents list: template, customer, installer counter-signature, email or in-person, expiry, reminders and a message. Submitting it shows "Preview only: nothing was sent".
- **Customer signing page** (`/sign/{ref}`): verify with the emailed code, review the summary and agree to sign electronically, draw or type the signature, then a confirmation. There's also a decline option with a reason. In in-person mode the code step is replaced by staff confirming the customer's ID. Links for signed, declined or expired documents show that state instead.
- **Home, Deals and Integrations**: an Awaiting signature KPI and list, badges on Kanban cards, and Zoho Sign in Integrations and the webhook inbox.

### What the real module needs

- **Tables:** `document_templates`, `documents` (one per envelope), `document_recipients`, `document_fields` and `document_events` (append-only, like `activities`).
- **Events:** `DocumentSent`, `DocumentViewed`, `DocumentSigned`, `DocumentCompleted` and `DocumentDeclined`. Timeline and Automation listen to them, for example to move a deal to Won.
- **Provider adapter:** a `SigningProvider` interface with a Zoho Sign implementation. Provider callbacks enter through the webhook inbox like every other provider: verify, save, respond, process on a queue, and reconcile on a schedule.
- **Storage:** signed PDFs and certificates go to Australian S3-compatible storage, opened only through private signed links.
- **Signing links:** a signed, expiring token per recipient, rate-limited, with `noindex`.

### To confirm before building

- **Scheme rules (most important):** whether ESC (VEU) and IPART (ESS) accept electronic signatures on assignment and nomination forms, and what evidence they need. Check each administrator's current guidelines.
- **Legal review:** the Electronic Transactions Act (Commonwealth and state versions) covers most contracts, but some documents, such as certain deeds, have exceptions. Have the privacy lawyer named in the plan confirm the templates and the consent wording.
- **Zoho Sign plan and API limits**, and the monthly cost, added to the plan's cost comparison.

## Where things are

```
app/
├── Filament/
│   ├── Pages/              One class per screen (and Auth/Login.php)
│   │   ├── Documents.php, SignTemplates.php, DocumentRecord.php   E-signature screens
│   │   └── DealRecord.php  Deal record page and the shared "Send for signature" modal
│   ├── Support/            TablePage (list screens) and PlannedPage (placeholders)
│   └── Widgets/            Home dashboard widgets
├── Http/Controllers/
│   └── SigningPreviewController.php   Customer signing page (/sign/{ref})
├── Providers/Filament/
│   └── AdminPanelProvider.php   Panel at /crm: branding, colours, sidebar groups
└── Support/Demo.php        All sample data, and the search, filter and sort helper
resources/
├── css/app.css                    Customer signing page styles (Tailwind, brand colours)
├── css/filament/admin/theme.css   CRM theme (sidebar, Kanban, stage bar, timeline, document preview)
├── views/filament/                Blade views for the custom CRM screens and widgets
└── views/sign/show.blade.php      Customer signing page
database/demo/              Product and blog snapshots
tests/Feature/CrmPreviewTest.php   Every screen, widget and signing page renders; lead search and filters; the signature modal
```

## Tests

```sh
php artisan test
```

## How the frontend will connect

The frontend already has the hooks the backend will plug into:

| Frontend hook | What the backend replaces |
| --- | --- |
| `FORM_ENDPOINT` in `frontend/public/assets/js/main.js` | Receives the eligibility check and contact form as a JSON `POST` (the payload is documented in `frontend/README.md`, "Enquiry form") |
| `frontend/lib/blog.ts` | Reads blog posts from `frontend/content/blog/`; swap for API calls once posts live in the backend |
| `frontend/content/products/` | Product data read at build time; can move behind the API later |

The plan's Content API (`/api/v1/content/...`) and Lead API (`POST /api/v1/public/leads`) will replace these. Neither exists yet. The customer signing page is served by Laravel itself, not by the Next.js site.
