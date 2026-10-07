# Local IT & Automation

A one-page static website for a one-person IT and automation service for small businesses in Ireland. Plain HTML and CSS. No build step, no analytics, and no contact form.

The page is `index.html`. Styles are in `styles.css`. An empty `.nojekyll` file tells GitHub Pages to serve the files as they are.

**Target:** have the site live on GitHub Pages by 15 October 2026.

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

The site is set up for a plain branch deploy from the repository root. Do this after the files are on the `main` branch.

1. Merge the site to the `main` branch.
2. On GitHub, open this repository and go to **Settings**.
3. In the left sidebar, open **Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Set the branch to **main** and the folder to **/ (root)**.
6. Save.

GitHub will publish the site. A project repository is served at `https://<user>.github.io/<repository>/`. A user site (`<user>.github.io` as the repository name) is served at `https://<user>.github.io/`. The first deploy can take a minute. Relative links are used so the page works in either place.

`.nojekyll` is included so Pages does not run a Jekyll build.

## After the site is live

In `index.html`, set the social preview tags to absolute URLs on your Pages address:

- `og:url` — the page URL
- `og:image` and `twitter:image` — the full URL of `og.png` (for example `https://<user>.github.io/<repository>/og.png`)

Until those are absolute, link previews may show the title and description without the image.

## What this site does not include

No contact form, no JavaScript, no external fonts, and no tracking cookies or analytics. Email is the only way to get in touch.
