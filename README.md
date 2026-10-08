# Veridex

A small static website for Veridex, a business in Ireland with two lines of work: IT support and automation for local businesses, and 3D printed products. Plain HTML and CSS. No build step, no analytics, and no contact form.

**Live site:** https://veridex-business.github.io/

This repository is named `veridex-business.github.io`. GitHub Pages serves it as a user site from the `main` branch, folder **/ (root)**.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home. Routes to the two lines of business. Brand name: Veridex. |
| `/it/` | The IT and automation one-pager. Section label: **Veridex IT & Automation**. |
| `/shop/` | Redirects to the live print shop at `/veridex-shop/`. |
| `/privacy/` | Privacy note. Draft: the owner should review it. |
| `/terms/` | Site terms, plus shop terms marked to be finalised before anything is sold. Draft: the owner should review it. |

Shared files stay at the root: `styles.css`, `favicon.ico`, `favicon.svg`, `og.png` (the IT page), and `og-veridex.png` (the other pages). Pages link to those with root paths such as `/styles.css`, so they work from `/it/` and the other folders. An empty `.nojekyll` file tells GitHub Pages to serve the files as they are.

The print shop, Veridex Prints, lives in the separate repository `Veridex-Business/veridex-shop` and is published at https://veridex-business.github.io/veridex-shop/. The home page links there. `/shop/` stays in this repository as a redirect so older links still work.

## IT service name

The IT page uses **Veridex IT & Automation** as the section label (title, social tags, header, and footer). The trading name is **Veridex**. The public brand on the home page, shop, privacy, and terms is **Veridex**.

## Change the email

Search the repository for `enquiries@agentmail.to` and replace every occurrence, including `mailto:` links.

## IT pricing

Prices are not published. The IT page says **Pricing on request**, with a note to email for a quote. Do not add figures. The line “9–15 staff: ask for a quote” is not a price.

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
