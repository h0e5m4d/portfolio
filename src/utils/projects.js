import { projects } from '../data/projects.js';

/*
  Questions we ask the project list. Pages call these instead of
  filtering the array themselves, so the logic lives in one place.
*/

// "UX/UI" → "ux-ui", "Product Design" → "product-design".
// Used for readable filter URLs: /projects?filter=ux-ui
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

// Every discipline used by any project, with how many projects have it,
// most common first: [{ name: 'UX/UI', slug: 'ux-ui', count: 4 }, ...]
// Built from the data, so a new discipline gets a filter automatically.
export function getDisciplines() {
  const counts = new Map();
  for (const project of projects) {
    for (const name of project.disciplines) {
      counts.set(name, (counts.get(name) ?? 0) + 1);
    }
  }
  return [...counts]
    .map(([name, count]) => ({ name, slug: slugify(name), count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getProjectsByDiscipline(disciplineSlug) {
  if (!disciplineSlug) return projects;
  return projects.filter((p) => p.disciplines.some((d) => slugify(d) === disciplineSlug));
}

// "Product Designer · Team · with Smartbroker+" — skips missing values.
export function projectMeta(project) {
  return [
    project.role,
    project.team,
    project.collaboration && `with ${project.collaboration}`,
  ]
    .filter(Boolean)
    .join(' · ');
}
