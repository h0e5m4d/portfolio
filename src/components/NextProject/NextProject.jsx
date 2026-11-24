import { Link } from 'react-router-dom';
import styles from './NextProject.module.css';

/*
  NextProject: a big link at the end of a case study, so visitors who
  finish one project flow straight into the next instead of leaving.
*/
export default function NextProject({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className={styles.next}>
      <div className={styles.text}>
        <p className={styles.label}>Next project</p>
        <p className={styles.title}>
          {project.title}
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </p>
        <p className={styles.summary}>{project.summary}</p>
      </div>
      <div className={styles.thumb}>
        <img src={project.cover.src} alt="" loading="lazy" decoding="async" />
      </div>
    </Link>
  );
}
