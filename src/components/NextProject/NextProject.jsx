import { Link } from 'react-router-dom';
import styles from './NextProject.module.css';

/*
  NextProject: one slim line at the end of a case study.

    NEXT PROJECT ─────────────── Rolls-Royce Motor Cars →

  Visitors who finish one project flow straight into the next.
*/
export default function NextProject({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className={styles.next} data-cursor="View project">
      <span className={styles.label}>Next project</span>
      <span className={styles.line} aria-hidden="true" />
      <span className={styles.title}>
        {project.title}
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </span>
    </Link>
  );
}
