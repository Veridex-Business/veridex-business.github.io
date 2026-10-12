# Veridex

A small static website for Veridex Ltd, a company in Limerick, Ireland, with two lines of work: IT support and automation for local businesses, and 3D printed products. Plain HTML and CSS. No build step, no analytics, and no contact form.

**Live site:** https://veridex-business.github.io/

This repository is named `veridex-business.github.io`. GitHub Pages serves it as a user site from the `main` branch, folder **/ (root)**.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home. Routes to the two lines of business. Legal name: **Veridex Ltd**. |
| `/it/` | IT support for small businesses in Limerick. Section label: **Veridex IT & Automation**. |
| `/shop/` | Redirects to the live print shop at `/veridex-shop/`. |
| `/privacy/` | Privacy note. Draft: the owner should review it. |
| `/terms/` | Site terms, plus shop terms marked to be finalised before anything is sold. Draft: the owner should review it. |

Shared files stay at the root: `styles.css`, `favicon.ico`, `favicon.svg`, `og.png` (the IT page), and `og-veridex.png` (the other pages). Pages link to those with root paths such as `/styles.css`, so they work from `/it/` and the other folders. An empty `.nojekyll` file tells GitHub Pages to serve the files as they are.

The print shop, Veridex Prints, lives in the separate repository `Veridex-Business/veridex-shop` and is published at https://veridex-business.github.io/veridex-shop/. The home page links there. `/shop/` stays in this repository as a redirect so older links still work.

## IT service name

The IT page uses **Veridex IT & Automation** as the section label in the header. The legal name, wherever the business is named as the trader, is **Veridex Ltd**. Do not shorten that to Veridex.

The IT page is aimed at local businesses with about 1 to 10 staff. The service area line is: On-site around Limerick city, remote anywhere in Ireland.

The work is software, setup, accounts, backups, security and automations. Do not claim hardware repair or parts replacement, do not offer a free IT check, and do not name clients. Avoid absolute claims such as “never”, “guaranteed”, and “none missed”. Prices stay **Pricing on request**.

## Footer

Home, the IT page, privacy, and terms share this line. Keep the brackets so the owner can fill them in:

Veridex Ltd, registered in Ireland, company no. [CRO NUMBER], registered office: [REGISTERED OFFICE ADDRESS]

Each of those footers links to the privacy page. The shop redirect is left unchanged.

## Change the email

Search the repository for `enquiries@agentmail.to` and replace every occurrence, including `mailto:` links.

A phone number is not published. The IT page has a commented placeholder in **How to get in touch**. Uncomment it and add the number there when you have one. Do not use a stock photo for the owner: replace the hero placeholder on `/it/` with a real photo.

## IT pricing

Prices are not published. The IT page says **Pricing on request**, with a note to email for a quote. Do not add figures. Plans are for teams of about 1 to 10 people.

## Social links

Each page has a canonical URL, `og:url`, and an absolute `og:image` / `twitter:image`.

- Home, shop, privacy, and terms use `https://veridex-business.github.io/og-veridex.png`
- `/it/` uses `https://veridex-business.github.io/og.png`
- `/it/` canonical and `og:url` are `https://veridex-business.github.io/it/`

If the site address changes, update those URLs in each page.

## Preview on your computer

From this folder:

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080`. Root paths such as `/styles.css` and `/it/` need the server. Opening the HTML files directly from disk will not load the stylesheet.

## Enable GitHub Pages

Pages is already set to deploy from the `main` branch, folder **/ (root)**, which publishes https://veridex-business.github.io/

To check or turn that on again:

1. On GitHub, open this repository and go to **Settings**.
2. In the left sidebar, open **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set the branch to **main** and the folder to **/ (root)**.
5. Save.

## What this site does not include

No contact form, no JavaScript, no external fonts, and no tracking cookies or analytics. Email is the only way to get in touch. The privacy and terms pages are drafts for the owner to review before they are treated as final.
