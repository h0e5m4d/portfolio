import { useSearchParams } from 'react-router-dom';

import { projects } from '../data/projects.js';
import { getDisciplines, getProjectsByDiscipline } from '../utils/projects.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import ProjectFilter from '../components/ProjectFilter/ProjectFilter.jsx';
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx';
import BackToTop from '../components/BackToTop/BackToTop.jsx';
import styles from './Projects.module.css';

/*
  Projects page: every project, filterable by discipline.

  The active filter lives in the URL (/projects?filter=hci), not in
  useState. That means:
    - a filtered view can be shared or bookmarked ("here's my HCI work")
    - reloading the page keeps the filter
  useSearchParams reads and writes that ?filter= part of the URL.
*/
const disciplines = getDisciplines();

export default function Projects() {
  usePageTitle('Projects');
  const [searchParams, setSearchParams] = useSearchParams();

  // Ignore unknown values like ?filter=typo and show everything.
  const requested = searchParams.get('filter');
  const active = disciplines.some((d) => d.slug === requested) ? requested : null;

  const visible = getProjectsByDiscipline(active);

  const handleFilter = (slug) => {
    // `replace` updates the URL without adding a history entry, so the
    // back button leaves the page instead of stepping through filters.
    setSearchParams(slug ? { filter: slug } : {}, { replace: true });
  };

  return (
    <>
      <header className={styles.intro}>
        <h1 className={styles.title}>
          Projects
          <sup className={styles.total}>({String(projects.length).padStart(2, '0')})</sup>
        </h1>
        <p className={styles.lead}>
          Product, UX/UI and research work, from industry collaborations to self-initiated
          redesigns.
        </p>
      </header>

      <ProjectFilter
        options={disciplines}
        active={active}
        total={projects.length}
        onChange={handleFilter}
      />

      {/* Announces the result to screen readers after each filter change. */}
      <p className="visually-hidden" aria-live="polite">
        Showing {visible.length} of {projects.length} projects
      </p>

      {/* key: a new filter gives the grid a new identity, so React
          rebuilds it and the cards play their entrance animation again. */}
      <ul key={active ?? 'all'} className={styles.grid}>
        {visible.map((project, index) => (
          <li key={project.slug}>
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ul>

      <BackToTop />
    </>
  );
}
