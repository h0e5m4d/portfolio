/*
  Which projects have a written case study.
  Keys must match the project's `slug` in data/projects.js.

  Three levels:
    published  → on the live site
    drafts     → only on your computer (npm run dev), with a DRAFT badge
    template   → any other project, also only on your computer: the
                 empty structure with writing prompts (template.js)

  Drafts and the template are left out of the live site's code
  completely, not just hidden. When building for production, Vite
  replaces import.meta.env.DEV with `false`; the build tool then sees
  that this code can never run and drops it. Nobody can read an
  unfinished draft, not even in the browser's developer tools.

  To start a case study:  copy smartbroker.js, import it, add to `drafts`.
  To publish it:          move it from `drafts` to `published`.
*/
import smartbroker from './smartbroker.js';
import { caseStudyTemplate } from './template.js';

const published = {};

const drafts = import.meta.env.DEV ? { smartbroker } : {};

// The case study for a project (with `draft: true` if it isn't published),
// or null if there's nothing to show on this site.
export function getCaseStudy(project) {
  if (published[project.slug]) return published[project.slug];
  if (drafts[project.slug]) return { ...drafts[project.slug], draft: true };
  if (import.meta.env.DEV) return { ...caseStudyTemplate(project), draft: true };
  return null;
}
