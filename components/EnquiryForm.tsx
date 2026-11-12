import { BASE } from "@/lib/site";

/**
 * Enquiry form with the office details beside it. public/assets/js/main.js handles validation
 * and sending (#contact-form). Use once per page: the field ids must stay unique.
 */
export default function EnquiryForm() {
  return (
    <section className="sec mist" aria-labelledby="form-h">
      <div className="wrap ct-grid">
        <div className="ct-form-card">
          <span className="eyebrow">
            <span className="dot" />
            Send us a message
          </span>
          <h2 id="form-h" className="h2 ct-h2">
            How can we help?
          </h2>
          <p className="ct-intro">
            Tell us a little about your home or business and what you’re looking for. Fields marked{" "}
            <span aria-hidden="true">*</span>
            <span className="sr-only">with an asterisk</span> are required.
          </p>
          <form id="contact-form" className="ct-form" noValidate>
            <div className="ct-row">
              <div className="ct-fld">
                <label htmlFor="ct-name">
                  Full name <span aria-hidden="true">*</span>
                </label>
                <input id="ct-name" name="name" type="text" autoComplete="name" required maxLength={80} />
                <p className="ct-err" id="ct-name-err" hidden>
                  Enter your name.
                </p>
              </div>
              <div className="ct-fld">
                <label htmlFor="ct-postcode">Postcode</label>
                <input
                  id="ct-postcode"
                  name="postcode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  pattern="\d{4}"
                />
                <p className="ct-err" id="ct-postcode-err" hidden>
                  Enter a 4-digit postcode.
                </p>
              </div>
            </div>
            <div className="ct-row">
              <div className="ct-fld">
                <label htmlFor="ct-email">Email</label>
                <input
                  id="ct-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={120}
                  aria-describedby="ct-contact-help"
                />
                <p className="ct-err" id="ct-email-err" hidden>
                  Enter a valid email address.
                </p>
              </div>
              <div className="ct-fld">
                <label htmlFor="ct-phone">Phone</label>
                <input
                  id="ct-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={20}
                  placeholder="04xx xxx xxx"
                  aria-describedby="ct-contact-help"
                />
                <p className="ct-err" id="ct-phone-err" hidden>
                  Enter a valid Australian phone number.
                </p>
              </div>
            </div>
            <p className="ct-help" id="ct-contact-help">
              Give us an email or a phone number (or both) so we can reply.
            </p>
            <p className="ct-err ct-err-block" id="ct-contact-err" hidden>
              Enter an email or a phone number so we can reply.
            </p>
            <div className="ct-row">
              <div className="ct-fld">
                <label htmlFor="ct-type">
                  What’s it about? <span aria-hidden="true">*</span>
                </label>
                <select id="ct-type" name="enquiryType" required>
                  <option value="">Choose one</option>
                  <option>Get a quote</option>
                  <option>Check incentive eligibility</option>
                  <option>Existing installation or warranty</option>
                  <option>Partnership or business enquiry</option>
                  <option>Something else</option>
                </select>
                <p className="ct-err" id="ct-type-err" hidden>
                  Choose what your enquiry is about.
                </p>
              </div>
              <div className="ct-fld">
                <label htmlFor="ct-upgrade">Upgrade (optional)</label>
                <select id="ct-upgrade" name="upgrade">
                  <option value="">Not specific</option>
                  <option>Residential heat pump</option>
                  <option>Air conditioner</option>
                  <option>Solar &amp; battery</option>
                  <option>EV charger</option>
                  <option>LED lighting</option>
                  <option>Water filter</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div className="ct-fld">
              <label htmlFor="ct-message">
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea id="ct-message" name="message" rows={5} required maxLength={1500} />
              <p className="ct-err" id="ct-message-err" hidden>
                Tell us a little more (at least 10 characters).
              </p>
            </div>
            <div className="ct-hp" aria-hidden="true">
              <label htmlFor="ct-website">Leave this field empty</label>
              <input id="ct-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="ct-check">
              <input id="ct-consent" name="consent" type="checkbox" required />
              <label htmlFor="ct-consent">
                I agree that Auzbright can contact me about this enquiry, as set out in the{" "}
                <a href={`${BASE}/privacy-policy/`}>Privacy Policy</a>. <span aria-hidden="true">*</span>
              </label>
            </div>
            <p className="ct-err ct-err-block" id="ct-consent-err" hidden>
              Please agree so we can reply to you.
            </p>
            <div className="ct-actions">
              <button type="submit" className="btn btn-navy ct-submit">
                Send message
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10h12m0 0-5-5m5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="ct-status" id="ct-status" role="status" aria-live="polite" hidden />
          </form>
        </div>
        <aside className="ct-side" aria-label="Office details">
          <div className="ct-office dark">
            <span className="eyebrow">
              <span className="dot" />
              Our office
            </span>
            <h2 className="ct-office-h">Auzbright, Derrimut</h2>
            <ul className="ct-office-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  Unit 18/45 Hunter Road
                  <br />
                  Derrimut VIC 3026
                </span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Monday to Friday, 9am–5pm</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z M9 4v14 M15 6v14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Servicing homes and businesses across Victoria and New South Wales</span>
              </li>
            </ul>
            <a
              className="btn btn-lime btn-sm ct-dir"
              href="https://www.google.com/maps/search/?api=1&amp;query=Unit%2018%2F45%20Hunter%20Road%2C%20Derrimut%20VIC%203026"
              target="_blank"
              rel="noopener"
            >
              Get directions
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 10h12m0 0-5-5m5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="ct-quick">
            <p className="ct-quick-h">Looking for something else?</p>
            <ul>
              <li>
                <a href={`${BASE}/#check`}>
                  <span className="cp-ico">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M9 11l3 3 8-8 M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="cp-txt">
                    <strong>Check your eligibility</strong>
                    <small>Free, about 2 minutes</small>
                  </span>
                </a>
              </li>
              <li>
                <a href={`${BASE}/contact/?enquiry=warranty#contact-form`}>
                  <span className="cp-ico">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z M8.8 12.2l2.2 2.2 4.4-4.6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="cp-txt">
                    <strong>Claim a warranty</strong>
                    <small>For an existing installation</small>
                  </span>
                </a>
              </li>
              <li>
                <a href={`${BASE}/#faqs`}>
                  <span className="cp-ico">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14 M12 17.5v.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="cp-txt">
                    <strong>Read our FAQs</strong>
                    <small>Incentives, costs and installation</small>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
