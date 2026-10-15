# Veridex

A small static website for Veridex Ltd, a company in Ireland, with two lines of work: IT support and automation for local businesses, and 3D printed products. Plain HTML and CSS. No build step, no analytics, and no contact form.

**Live site:** https://veridex.ie/

This repository is named `veridex-business.github.io`. GitHub Pages serves it as a user site from the `main` branch, folder **/ (root)**.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home. Routes to the two lines of business. Legal name: **Veridex Ltd**. |
| `/it/` | IT support for small businesses in Limerick. Header: **Veridex Ltd**. |
| `/shop/` | Redirects to the live print shop at `/veridex-shop/`. |
| `/privacy/` | Privacy note. Draft: the owner should review it. |
| `/terms/` | Site terms, plus shop terms marked to be finalised before anything is sold. Draft: the owner should review it. |

Shared files stay at the root: `styles.css`, `favicon.ico`, `favicon.svg`, `og.png` (the IT page), and `og-veridex.png` (the other pages). Pages link to those with root paths such as `/styles.css`, so they work from `/it/` and the other folders. An empty `.nojekyll` file tells GitHub Pages to serve the files as they are.

The print shop, Veridex Prints, lives in the separate repository `Veridex-Business/veridex-shop` and is published at https://veridex-business.github.io/veridex-shop/. The home page links there. `/shop/` stays in this repository as a redirect so older links still work.

## IT service name

The IT page header is **Veridex Ltd**. Use that wherever the business is named. Do not shorten it to Veridex, and do not use “Veridex IT & Automation” or “Local IT & Automation” as a trading name.

The IT page is aimed at local businesses with about 1 to 10 staff. The service area line is: On-site around Limerick city, remote anywhere in Ireland.

The work is software, setup, accounts, backups, security and automations, including Mac and macOS. Do not claim hardware repair or parts replacement, do not offer a free IT check, and do not name clients. Avoid absolute claims such as “never”, “guaranteed”, and “none missed”. Do not promise a reply time. Prices are the figures in the next section. Do not add other figures.

## Footer

Home, the IT page, privacy, and terms share this line:

Veridex Ltd, registered in Ireland, company no. 824155, registered office: Unit 2, 2 Bridge Street, Athlone, Co. Westmeath, N37 F1W4

The home page and the IT page use that same registered office as the place line in the header. Do not publish a different postal address or a home address. Limerick on the IT page is the service area, not a postal address.

Each of those footers links to the privacy page. The shop redirect is left unchanged.

## Change the email

Search the repository for `enquiries@agentmail.to` and replace every occurrence, including `mailto:` links.

The IT page lists 085 715 0506 in **How to get in touch**, linked as `tel:+353857150506`.

## IT pricing

You pay for the work done. Veridex Ltd invoices after the job. Payment is due within 7 days. No contract or monthly fee is required. Support hours are Monday to Friday, 9:00 to 17:00. All figures are ex VAT.

- Standard: €50 per hour, Monday to Friday, 9:00 to 17:00. Remote or on-site.
- After hours or emergencies: €130 per hour.
- Full day: €375.
- Minimum charge: 30 minutes, then 15-minute steps.
- Backup check (remote, up to 5 devices): €35 flat. Includes confirming backups ran and are recent, running the backup tool's integrity check, and restoring 2 or 3 sample files to check they open. Does not include a full restore or booting the backup in a virtual machine. Fixing failed backups is billed hourly.
- Full restore test: €60 flat. Everything in the backup check, plus restoring a whole device or the main shared data to a spare disk or virtual machine, booting or opening it, and confirming it works, with a written report. Covers time up to €75 at the standard rate. Time beyond that is billed at €50 per hour.
- Travel: on-site around Limerick city. Travel further afield is charged at cost and agreed in advance.

The IT page also says: Prices exclude VAT. VAT is added where it applies.

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

No contact form, no JavaScript, no external fonts, and no tracking cookies or analytics. Email and the phone number on the IT page are how to get in touch. The privacy and terms pages are drafts for the owner to review before they are treated as final.
