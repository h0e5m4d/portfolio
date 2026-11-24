import { Link } from 'react-router-dom';

import { projectMeta } from '../../utils/projects.js';
import styles from './ProjectCard.module.css';

/*
  ProjectCard: one project as a clickable card.

    ┌───────────────────────────┐
    │ [UX/UI] [HCI]             │  ← discipline tags, frosted glass
    │          cover            │
    └───────────────────────────┘
    Smartbroker+          2025/26
    One-sentence summary.
    PRODUCT DESIGNER · TEAM · WITH SMARTBROKER+

  The whole card is one link, so it's one Tab stop for keyboard users
  and one big click target. Used on the Projects page now, the
  homepage later.

  Props:
    project – one object from data/projects.js
    as      – heading tag, 'h2' by default. A page has one h1, then h2s;
              the homepage may need 'h3' under a section heading.
    index   – position in the grid, used to stagger the entrance
*/
export default function ProjectCard({ project, as: Heading = 'h2', index = 0 }) {
  const { slug, title, summary, year, disciplines, cover } = project;

  return (
    <Link to={`/projects/${slug}`} className={styles.card} style={{ '--i': index }}>
      <div className={styles.media} data-fit={cover.fit}>
        <img
          src={cover.src}
          alt={cover.alt}
          className={styles.image}
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
        />
        <ul className={styles.tags} aria-label="Disciplines">
          {disciplines.map((d) => (
            <li key={d} className={styles.tag}>
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.body}>
        <div className={styles.headline}>
          <Heading className={styles.title}>
            {title}
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Heading>
          {year && <span className={styles.year}>{year}</span>}
        </div>
        <p className={styles.summary}>{summary}</p>
        <p className={styles.meta}>{projectMeta(project)}</p>
      </div>
    </Link>
  );
}
