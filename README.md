# Local IT & Automation

A one-page static website for a one-person IT and automation service for small businesses in Ireland. Plain HTML and CSS. No build step, no analytics, and no contact form.

The page is `index.html`. Styles are in `styles.css`. An empty `.nojekyll` file tells GitHub Pages to serve the files as they are.

**Target:** have the site live on GitHub Pages by 15 October 2026.

**Live site:** https://veridex-business.github.io/

## Change the brand name

The placeholder brand is **Local IT & Automation**. It is not a final business name.

In `index.html`, search for `Local IT & Automation` and replace every occurrence. That covers:

- the `<title>` and the Open Graph / Twitter titles
- the header (`id="brand-name"`)
- the footer

Update `og:image:alt` and `twitter:image:alt` if you change the wording there too. If you replace the social image, edit `og.png` as well.

## Change the email

Search `index.html` for `enquiries@agentmail.to` and replace every occurrence, including the `mailto:` links.

## Change the prices

The prices are **placeholders** until you confirm them. They appear in one place: the pricing section of `index.html`. Search for `PRICE SETTINGS`. Edit these three lines and nothing else needs to match them:

| Element | Text now |
| --- | --- |
| `#price-starter` | from €149/month |
| `#price-standard` | from €299/month |
| `#price-setup` | One-off setup from €250 |

Leave the wording around them ("a guide", "I will confirm your fee") unless you have final figures and want to tighten that sentence.

The diagram further up the page uses **€86.40** and **21 Oct 2026** as a made-up example of a logged receipt. Those are not plan prices.

## Preview on your computer

From this folder:

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080`.

## Enable GitHub Pages

This repository is named `veridex-business.github.io`. GitHub Pages serves that name as a user site at https://veridex-business.github.io/ from the `main` branch, folder **/ (root)**.

To turn that on again, or to check it:

1. On GitHub, open this repository and go to **Settings**.
2. In the left sidebar, open **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set the branch to **main** and the folder to **/ (root)**.
5. Save.

`.nojekyll` is included so Pages does not run a Jekyll build.

## Social preview links

In `index.html` these already point at the live site:

- the canonical link and `og:url` are https://veridex-business.github.io/
- `og:image` and `twitter:image` are https://veridex-business.github.io/og.png

If the site address changes, update those.

## What this site does not include

No contact form, no JavaScript, no external fonts, and no tracking cookies or analytics. Email is the only way to get in touch.
