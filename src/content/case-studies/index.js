/*
  Which projects have a written case study.
  Keys must match the project's `slug` in data/projects.js.

  Two lists:
    published  → on the live site
    drafts     → only on your computer (npm run dev), with a DRAFT badge

  Drafts are left out of the live site's code completely, not just
  hidden. When building for production, Vite replaces
  import.meta.env.DEV with `false`, so the `drafts` line becomes
  `false ? {…} : {}`. The build tool sees that the draft files are never
  used and drops them. Nobody can read an unfinished draft, not even
  in the browser's developer tools.

  To start a case study:  copy smartbroker.js, import it, add to `drafts`.
  To publish it:          move it from `drafts` to `published`.
*/
import smartbroker from './smartbroker.js';

const published = {};

const drafts = import.meta.env.DEV ? { smartbroker } : {};

// The case study for a slug (with `draft: true` if it's a draft),
// or null if there isn't one available.
export function getCaseStudy(slug) {
  if (published[slug]) return published[slug];
  if (drafts[slug]) return { ...drafts[slug], draft: true };
  return null;
}
