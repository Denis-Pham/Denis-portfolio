# Personal Portfolio — Template

A beginner-friendly **light professional** portfolio / CV site.
Pure HTML + CSS + JavaScript — no frameworks, no build tools.

## Sections

Hero → About → Skills → Experience timeline → Featured project → Projects grid → Education → Contact

## Files

| File | What it does |
|---|---|
| `index.html` | Page structure + inline styles |
| `style.css` | Extra styles (animations, print stylesheet for PDF export) |
| `script.js` | **All your content lives here** — 4 data arrays + render functions |
| `README.md` | This file |

## How to customize

**The vast majority of edits happen in `script.js`** — the page is data-driven.

1. **Replace `Alex Tran`** in `index.html` with your name (4 places: `<title>`, logo, hero h1, footer).
2. **Update the role** in hero section (`.role` paragraph).
3. **Write your tagline** (`.tagline` paragraph).
4. **Update hero-meta** chips (location, current company, years experience).
5. **Open `script.js`** and replace:
   - `skills` array — your skill categories + items
   - `experience` array — your job history (newest first)
   - `projects` array — your portfolio projects (first item = featured)
   - `education` array — your schools/certs
6. **Update contact links** in `index.html`: `mailto:` email, LinkedIn URL, GitHub URL.
7. (Optional) Add a `your-cv.pdf` file next to `index.html` and update the Download CV button href.
8. (Optional) Add project screenshots in a `/projects/` folder and reference them in `projects[].image`.

## How to run locally

```bash
python3 -m http.server 5173
```

Open <http://localhost:5173>. Press `Ctrl+C` to stop.

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit — portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then on github.com: **Settings → Pages → Source: Deploy from a branch → main → / (root) → Save.**
Live at `https://<your-username>.github.io/<repo-name>/` in ~1 minute.

## Bonus — print to PDF as your CV

This template includes a **print stylesheet** that strips the nav + contact section
and turns the page into a clean printable CV.

1. Open the page in Chrome.
2. `Ctrl + P` → Destination: **Save as PDF**.
3. Margins: Default. Background graphics: ON.
4. Save. You now have a polished CV PDF for sending to recruiters.

## Recolor the whole site

All colors are CSS variables at the top of `index.html`'s `<style>` block:

```css
:root {
  --accent: #2563eb;           /* primary brand color */
  --bg: #fafaf9;                /* page background */
  ...
}
```

Try these accent swaps:
- `#2563eb` — blue (default — corporate, tech)
- `#0d9488` — teal (modern, calm)
- `#c2410c` — terracotta (warm, distinctive)
- `#7c3aed` — purple (creative, design)
- `#16a34a` — green (growth, success)

Change one variable, the whole site reshades.
