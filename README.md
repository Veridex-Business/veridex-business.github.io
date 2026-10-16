# Veridex

A small static website for Veridex Ltd, a company in Ireland, with two lines of work: IT support and automation for local businesses, and 3D printed products. Plain HTML and CSS. No build step, no analytics, and no contact form.

**Live site:** https://veridex.ie/

This repository is named `veridex-business.github.io`. GitHub Pages serves it as a user site from the `main` branch, folder **/ (root)**.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home. Routes to the two lines of business. Legal name: **Veridex Ltd**. |
| `/it/` | IT support for small businesses in Limerick. Header: **Veridex Ltd**. |
| `/shop/` | Coming soon. A short page on this site, with a link back home. |
| `/privacy/` | Privacy note. Draft: the owner should review it. |
| `/terms/` | Terms for IT support. Draft: the owner should review it. |

Shared files stay at the root: `styles.css`, `favicon.ico`, `favicon.svg`, `og.png` (the IT page), and `og-veridex.png` (the other pages). Pages link to those with root paths such as `/styles.css`, so they work from `/it/` and the other folders. An empty `.nojekyll` file tells GitHub Pages to serve the files as they are.

The print shop lives in a separate repository. This site does not link to it for now. Nav and the home page show “Shop (coming soon)” as grey text, and `/shop/` is a coming-soon page.

## IT service name

The IT page header is **Veridex Ltd**. Use that wherever the business is named. Do not shorten it to Veridex, and do not use “Veridex IT & Automation” or “Local IT & Automation” as a trading name.

The IT page is aimed at local businesses with about 1 to 10 staff. The service area line is: Remote support across Ireland. On-site visits in Limerick city, by arrangement only. Do not offer mileage, or travel further afield.

The work is software, setup, accounts, backups, security and automations, including Mac and macOS. Do not claim hardware repair or parts replacement, do not offer a free IT check, and do not name clients. Avoid absolute claims such as “never”, “guaranteed”, and “none missed”, except the approved data line in the pricing section. Do not promise a reply time. Prices are the figures in the next section. Do not add other figures.

## Footer

Home, the IT page, privacy, terms, and the coming-soon page share this line, in small text:

Veridex Ltd, private company limited by shares · Registered in Ireland, CRO no. 824155 · Registered office: Unit 2, 2 Bridge Street, Athlone, Co. Westmeath, N37 F1W4 · VAT no. IE4823930BH · contact@veridex.ie

Each of those footers links to Privacy and Terms. The contact email is contact@veridex.ie. Do not add personal details.

The registered office appears once, in the footer. The home and IT headers say Ireland. Do not publish a different postal address or a home address. Limerick on the IT page is the service area, not a postal address.

## Change the email

The contact email is `contact@veridex.ie`, including `mailto:` links.

The IT page lists 085 715 0506 in **How to get in touch**, linked as `tel:+353857150506`.

## IT pricing

You pay for the work done. We send a Revolut Business invoice with a secure payment link by WhatsApp or email. You can pay by card, Apple Pay, Google Pay or Revolut transfer through that link. Households pay before or at the time of the job. Business customers pay within 7 days of the invoice. We will never ask for card details by phone, message or email; only pay through the secure link on our invoice. A one-off job does not need a contract. Home Care is €19 a month, paid monthly in advance through that invoice link. It runs month to month, and you can end it at the end of the month you have paid for. Support hours are Monday to Friday, 9:00 to 17:00. Prices: pay per job. All prices include VAT at 23%. Business customers get a VAT invoice.

- Standard: €60 per hour, Monday to Friday, 9:00 to 17:00. Remote, or on-site in Limerick city by arrangement.
- After hours or emergencies: €160 per hour.
- Full day: €460.
- Remote work: 30 minutes minimum, then 15-minute steps. On-site visits: 1-hour minimum (€60).
- Backup check (remote, up to 5 devices): €45 flat. Includes confirming backups ran and are recent, running the backup tool's integrity check, and restoring 2 or 3 sample files to check they open. Does not include a full restore or booting the backup in a virtual machine. Fixing failed backups is billed hourly.
- Full restore test: €75 flat. Everything in the backup check, plus restoring a whole device or the main shared data to a spare disk or virtual machine, booting or opening it, and confirming it works, with a written report. Covering up to 1.5 hours. Time beyond that is billed at €60 per hour.
- Fixed-price jobs:
  - Scam or virus clean-up (remote): €99.
  - Home security and password check-up (password manager, 2FA on email and bank, router admin password, device updates, data-leak check, one-page summary; remote, up to 3 people): €120 per household.
  - New computer setup and data transfer: €120 per computer. Phone or tablet setup: €49.
  - Mesh Wi-Fi setup (the client buys the hardware; Limerick city on-site): €170 labour only.
  - Business email and domain setup (Microsoft 365 or Google Workspace, up to 5 users, SPF/DKIM/DMARC, 2FA): €370. Mailbox migration: €75 per mailbox. The client pays the domain and email provider directly, in their own name.
  - Encrypted USB key setup: €60, plus the key at cost. The client buys the key.
  - 1-to-1 tech lessons (beginner-friendly, by video call or in Limerick): €55 per hour, or 4 sessions for €195.
  - Home Care plan (remote): €19 per month per household, up to 3 devices. Paid monthly in advance through the Revolut Business invoice link. Covers backup alerts, a quarterly test restore, and up to 30 minutes of remote help a month. It runs month to month. You can end it at any time, and it ends at the end of the month you have paid for.

The IT page also says: Your data stays yours: we use open, standard backup formats, so you never pay to get your files back.

The IT page also says: Prices: pay per job. All prices include VAT at 23%. Business customers get a VAT invoice.

## Social links

Each page has a canonical URL, `og:url`, and an absolute `og:image` / `twitter:image`.

- Home, shop, privacy, and terms use `https://veridex.ie/og-veridex.png`
- `/it/` uses `https://veridex.ie/og.png`
- `/it/` canonical and `og:url` are `https://veridex.ie/it/`

If the site address changes, update those URLs in each page.

## Preview on your computer

From this folder:

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080`. Root paths such as `/styles.css` and `/it/` need the server. Opening the HTML files directly from disk will not load the stylesheet.

## Enable GitHub Pages

Pages is already set to deploy from the `main` branch, folder **/ (root)**, which publishes https://veridex.ie/

To check or turn that on again:

1. On GitHub, open this repository and go to **Settings**.
2. In the left sidebar, open **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set the branch to **main** and the folder to **/ (root)**.
5. Save.

## What this site does not include

No contact form and no JavaScript. The shop fonts and icon file are stored in this repository. Email and the phone number on the IT page are how to get in touch. The privacy and terms pages are drafts for the owner to review before they are treated as final.
