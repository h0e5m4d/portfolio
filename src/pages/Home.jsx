import { Link } from 'react-router-dom';

import { greetings, hero, values, songs, filmPhotos, currently } from '../data/home.js';
import { site } from '../data/site.js';
import { getFeaturedProjects } from '../utils/projects.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard.js';
import Greeting from '../components/Greeting/Greeting.jsx';
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx';
import MusicWidget from '../components/widgets/MusicWidget.jsx';
import TypeWidget from '../components/widgets/TypeWidget.jsx';
import FilmWidget from '../components/widgets/FilmWidget.jsx';
import CurrentlyWidget from '../components/widgets/CurrentlyWidget.jsx';
import BackToTop from '../components/BackToTop/BackToTop.jsx';
import styles from './Home.module.css';

/*
  Homepage, top to bottom:
    1. Hello      greeting in your languages + one-line intro
    2. Work       featured projects (featured: true in data/projects.js)
    3. Values     your "I believe" sentences
    4. Widgets    music, type, film, currently: you as a person
    5. Contact    availability + copy email

  The page only arranges sections. Words live in data/home.js, projects
  in data/projects.js, and each widget is its own component.
*/
export default function Home() {
  usePageTitle(); // → "Tu Linh Tran — Product Design Student"
  const featured = getFeaturedProjects();
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className={styles.home}>
      {/* 1. Hello */}
      <section className={styles.hero}>
        <p className={styles.kicker}>
          <span aria-hidden="true">⁑</span> Hello/
        </p>
        <h1 className={styles.headline}>
          <Greeting greetings={greetings} />, I’m {hero.name}.
        </h1>
        <p className={styles.lead}>{hero.lead}</p>
      </section>

      {/* 2. Selected work */}
      <section aria-labelledby="work-title">
        <div className={styles.sectionHead}>
          <h2 id="work-title" className={styles.sectionLabel}>
            Selected work <span className={styles.count}>({String(featured.length).padStart(2, '0')})</span>
          </h2>
          <Link to="/projects" className={styles.allLink}>
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ul className={styles.work}>
          {featured.map((project, index) => (
            <li key={project.slug}>
              <ProjectCard project={project} as="h3" index={index} />
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Values */}
      <section aria-labelledby="values-title">
        <h2 id="values-title" className={styles.sectionLabel}>
          Values/
        </h2>
        <ol className={styles.values}>
          {values.map((value, i) => (
            <li key={i}>
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              {value}
            </li>
          ))}
        </ol>
      </section>

      {/* 4. Widgets */}
      <section aria-labelledby="beyond-title">
        <h2 id="beyond-title" className={styles.sectionLabel}>
          Beyond design/
        </h2>
        <div className={styles.widgets}>
          <MusicWidget songs={songs} />
          <TypeWidget />
          <FilmWidget photos={filmPhotos} />
          <CurrentlyWidget items={currently} />
        </div>
      </section>

      {/* 5. Contact */}
      <section className={styles.contact} aria-labelledby="contact-title">
        <p className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          {site.status.text} {site.status.detail.toLowerCase()}
        </p>
        <h2 id="contact-title" className={styles.contactTitle}>
          Let’s talk.
        </h2>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primary}
            onClick={() => copy(site.email)}
            data-cursor={copied ? 'Copied!' : 'Copy'}
          >
            {copied ? 'Copied to clipboard' : site.email}
            <span className="visually-hidden"> (copy email address)</span>
          </button>
          <span className="visually-hidden" aria-live="polite">
            {copied ? 'Email address copied to clipboard' : ''}
          </span>
          {site.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              {link.label} <span aria-hidden="true">↗</span>
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
