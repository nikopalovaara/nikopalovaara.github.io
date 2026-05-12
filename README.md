# Portfolio

Live at **[nikopalovaara.github.io](https://nikopalovaara.github.io)**

Single-page site, no frameworks. Data-driven rendering from `data.js`, inlined critical CSS, async-loaded full stylesheet, self-hosted fonts. Contact info protected via Cloudflare Turnstile + Workers.

## Stack

HTML, CSS, vanilla JS, [LightningCSS](https://lightningcss.dev/), [Sharp](https://sharp.pixelplumbing.com/), Cloudflare Workers

## Build

```bash
npm install
npm run build           # css + images
npm run build:css       # minify main.src.css → main.css
npm run build:images    # generate optimized WebP
```

## Project Structure

```
index.html                  # markup + inlined critical CSS
assets/
  css/main.src.css          # stylesheet source - edit this
  css/main.css              # minified output (generated)
  js/data.js                # content data
  js/app.js                 # renderers, nav, accordion
  js/effects.js             # parallax, scroll reveals, typewriter, contact
  fonts/                    # DM Serif Display + DM Sans (woff2)
  images/                   # originals + optimized WebP
optimize-images.js          # Sharp script for WebP generation
```

## Deploy

GitHub Pages serves directly.

## License

All rights reserved. © 2026 Niko Palovaara
