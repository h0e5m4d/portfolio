# Tu Linh Tran — Portfolio

Personal portfolio built with React and Vite, styled with hand-written CSS.

## Run it locally

You need [Node.js](https://nodejs.org) (version 20 or newer).

```bash
npm install     # once, and whenever package.json changes
npm run dev     # start the dev server at http://localhost:5173
npm run build   # build the production site into /dist
npm run preview # preview that production build locally
```

## Project structure

```
index.html            Page shell + theme script (prevents dark-mode flash)
vercel.json           Sends every URL to index.html so routes work on Vercel
src/
  main.jsx            Entry point: loads fonts, global CSS, router
  App.jsx             Route map: which URL shows which page
  styles/
    reset.css         Removes inconsistent browser defaults
    tokens.css        Design tokens: colors (light + dark), type, spacing
    global.css        Site-wide base styles and small utilities
  pages/              One file per page
  components/         Reusable UI pieces (from Step 1)
  data/               Project and archive content (from Step 4)
  assets/             Images and SVGs
```

## Styling rules

- All values come from `src/styles/tokens.css`. No hard-coded colors or sizes.
- Component styles live next to their component as `Name.module.css`.
- Breakpoints: phone < 810px · tablet 810–1199px · desktop ≥ 1200px · wide ≥ 1440px.
