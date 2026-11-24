import { Link, useParams } from 'react-router-dom';

import { getNextProject, getProject } from '../utils/projects.js';
import { getCaseStudy } from '../content/case-studies/index.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import BlockRenderer from '../components/blocks/BlockRenderer.jsx';
import NextProject from '../components/NextProject/NextProject.jsx';
import BackToTop from '../components/BackToTop/BackToTop.jsx';
import NotFound from './NotFound.jsx';
import styles from './CaseStudy.module.css';

/*
  Case study page: /projects/:slug

  Two sources of data come together here:
    data/projects.js           short facts (title, role, cover) — every project has these
    content/case-studies/*.js  the long story as blocks — only once written

  So every project gets a proper page from day one: with a case study it
  shows the full story, without one it shows the header and a
  "coming soon" note.
*/
export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  const study = getCaseStudy(slug);
  usePageTitle(project?.title);

  if (!project) return <NotFound />;

  // Base facts from the project, plus any extras from the case study.
  const facts = [
    ['Role', project.role],
    ['Team', project.team],
    ['Year', project.year],
    ['Context', project.context],
    ['Partner', project.collaboration],
    ...Object.entries(study?.facts ?? {}),
  ].filter(([, value]) => value);

  return (
    <article className={styles.article}>
      {study?.draft && (
        <p className={styles.draft} role="note">
          Draft: only visible on your computer
        </p>
      )}

      <header className={styles.header}>
        <Link to="/projects" className={styles.back}>
          <span aria-hidden="true">←</span> /Projects
        </Link>

        <ul className={styles.tags} aria-label="Disciplines">
          {project.disciplines.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.intro}>{study?.intro ?? project.summary}</p>

        {/* <dl>: a list of label → value pairs, read correctly by screen readers. */}
        <dl className={styles.facts}>
          {facts.map(([label, value]) => (
            <div key={label} className={styles.fact}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className={styles.cover} data-size="wide">
        <img src={project.cover.src} alt={project.cover.alt} decoding="async" />
      </div>

      {study ? (
        <BlockRenderer blocks={study.blocks} className={styles.block} />
      ) : (
        <section className={styles.soon}>
          <p className={styles.soonLabel}>Case study</p>
          <p className={styles.soonText}>
            The full case study is being written. Happy to walk you through the project in
            person in the meantime.
          </p>
        </section>
      )}

      <div data-size="wide">
        <NextProject project={getNextProject(slug)} />
        <BackToTop />
      </div>
    </article>
  );
}
