import { Link, useParams } from 'react-router-dom';

import { getProject, projectMeta } from '../utils/projects.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import NotFound from './NotFound.jsx';

/*
  Case study page: /projects/:slug
  `:slug` is a URL parameter. useParams() reads it, e.g. "smartbroker",
  and we look the project up in the data.

  PLACEHOLDER for Step 5, which builds the real case-study layout
  (header, content blocks, next project). For now it confirms the
  routing works, so cards don't lead to a 404.
*/
export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  usePageTitle(project?.title);

  if (!project) return <NotFound />;

  return (
    <article style={{ display: 'grid', gap: 'var(--space-4)', maxWidth: '40rem' }}>
      <p className="label" style={{ color: 'var(--color-text-subtle)' }}>
        {projectMeta(project)}
      </p>
      <h1 style={{ fontSize: 'var(--text-xl)' }}>{project.title}</h1>
      <p style={{ color: 'var(--color-text-muted)' }}>{project.summary}</p>
      <p className="label" style={{ color: 'var(--color-accent)' }}>
        Case study coming in Step 5
      </p>
      <p>
        <Link to="/projects" className="label">
          ← All projects
        </Link>
      </p>
    </article>
  );
}
