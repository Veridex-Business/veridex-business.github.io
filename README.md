# Veridex

A small static website for Veridex, a business in Ireland with two lines of work: IT support and automation for local businesses, and 3D printed products (not open yet). Plain HTML and CSS. No build step, no analytics, and no contact form.

**Live site:** https://veridex-business.github.io/

This repository is named `veridex-business.github.io`. GitHub Pages serves it as a user site from the `main` branch, folder **/ (root)**.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home. Routes to the two lines of business. Brand name: Veridex. |
| `/it/` | The IT and automation one-pager. The service heading is still the placeholder **Local IT & Automation**. |
| `/shop/` | Coming soon page for 3D printed products. It will later be replaced by a shop. |
| `/privacy/` | Privacy note. Draft: the owner should review it. |
| `/terms/` | Site terms, plus shop terms marked to be finalised before anything is sold. Draft: the owner should review it. |

Shared files stay at the root: `styles.css`, `favicon.ico`, `favicon.svg`, `og.png` (the IT page), and `og-veridex.png` (the other pages). Pages link to those with root paths such as `/styles.css`, so they work from `/it/` and the other folders. An empty `.nojekyll` file tells GitHub Pages to serve the files as they are.

The shop may later move to its own repo at `/shop-repo-name/` or a subdomain. Until then it lives at `/shop/` in this repository.

## Change the IT service name

The IT page heading **Local IT & Automation** is not a final name. In `it/index.html`, search for `Local IT & Automation` and replace every occurrence (title, social tags, header, footer).

The public brand on the home page, shop, privacy, and terms is **Veridex**. Search the repository for `Veridex` if that name changes.

## Change the email

Search the repository for `enquiries@agentmail.to` and replace every occurrence, including `mailto:` links.

## Change the IT prices

The prices are **placeholders** until you confirm them. They appear only in the pricing section of `it/index.html`. Search for `PRICE SETTINGS`. Edit these three lines:

| Element | Text now |
| --- | --- |
| `#price-starter` | from €149/month |
| `#price-standard` | from €299/month |
| `#price-setup` | One-off setup from €250 |

The diagram on that page uses **€86.40** as a made-up receipt. That is not a plan price. The line “9–15 staff: ask for a quote” is not a price.

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
