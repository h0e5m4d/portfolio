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
  styles/             reset, design tokens (light + dark), global styles
  pages/              One file per page (Home, Projects, CaseStudy, …)
  components/         Reusable UI: corner frame, cards, widgets, blocks
  hooks/              Reusable logic: theme, clock, weather, copy, title
  utils/              Plain helper functions (time, weather, projects)
  data/               Site facts, projects, homepage words
  content/            Case studies, written as lists of content blocks
  assets/             Images
```

## Where to edit content

| What | File |
|---|---|
| Email, links, availability | `src/data/site.js` |
| Current city and time zone | `src/data/location.js` |
| Projects (cards, order, featured) | `src/data/projects.js` |
| Homepage text, values, songs, film photos | `src/data/home.js` |
| A case study | `src/content/case-studies/<slug>.js` |
| Publish a draft case study | `src/content/case-studies/index.js` |

## Styling rules

- All values come from `src/styles/tokens.css`. No hard-coded colors or sizes.
- Component styles live next to their component as `Name.module.css`.
- Breakpoints: phone < 810px · tablet 810–1199px · desktop ≥ 1200px · wide ≥ 1440px.
- Every page uses one centered column (`--page-width`); the four corners are fixed.
- Any element can show a cursor label with `data-cursor="Text"`.
