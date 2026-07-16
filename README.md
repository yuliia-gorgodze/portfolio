# Yuliia Volodina — Portfolio

Senior Frontend / Full-Stack JavaScript Developer portfolio.

## Stack

- Vite + React 18
- Framer Motion (respects `prefers-reduced-motion`)
- i18next (EN / UK)
- GitHub Pages (`gh-pages`)

## Scripts

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
npm run build
npm run preview  # http://localhost:4173/portfolio/
npm run deploy   # build + publish to gh-pages
```

Site base path: `/portfolio/`

## Performance

Hero/portrait assets in `public/media/` as AVIF / WebP / JPEG.

| Asset | Before | After (AVIF) |
|-------|--------|--------------|
| Hero  | ~18 MB JPG | ~17 KB |
| Portrait | ~1.8 MB PNG | ~18 KB |

Production `dist/` is ~1.4 MB total (including icons). Interface Lab loads as a separate chunk.
