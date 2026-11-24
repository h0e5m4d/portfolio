import {
  portraitImage,
  bio,
  outsideDesign,
  facts,
  timeline,
  skills,
  languages,
  photos,
} from '../data/about.js';
import { site } from '../data/site.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import BackToTop from '../components/BackToTop/BackToTop.jsx';
import styles from './About.module.css';

/*
  About page, top to bottom:
    1. Nice to meet you   title, portrait, bio, quick facts
    2. Path               education + experience timeline
    3. Skills             grouped tags
    4. Languages          CEFR level as dots
    5. Outside design     photos + what inspires you
    6. Links              résumé, LinkedIn
  All words live in data/about.js.
*/
const CEFR = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export default function About() {
  usePageTitle('About');

  return (
    <div className={styles.about}>
      {/* 1. Intro */}
      <section className={styles.intro}>
        <p className={styles.kicker}>
          <span aria-hidden="true">⁑</span> About/
        </p>
        <h1 className={styles.title}>Nice to meet you.</h1>
        <img
          src={portraitImage.src}
          alt={portraitImage.alt}
          className={styles.portrait}
          decoding="async"
        />
        {bio.map((paragraph, i) => (
          <p key={i} className={i === 0 ? styles.lead : styles.paragraph}>
            {paragraph}
          </p>
        ))}
        <dl className={styles.facts}>
          {facts.map(([label, value]) => (
            <div key={label} className={styles.fact}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 2. Path */}
      <section aria-labelledby="path-title">
        <h2 id="path-title" className={styles.sectionLabel}>
          Path/
        </h2>
        <ol className={styles.timeline}>
          {timeline.map((entry) => (
            <li key={entry.title} className={styles.entry}>
              <span className={styles.dates}>{entry.dates}</span>
              <div>
                <p className={styles.entryTitle}>
                  {entry.title} <span className={styles.org}>— {entry.org}</span>
                </p>
                {entry.detail && <p className={styles.detail}>{entry.detail}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 3. Skills */}
      <section aria-labelledby="skills-title">
        <h2 id="skills-title" className={styles.sectionLabel}>
          Skills/
        </h2>
        <div className={styles.skills}>
          {skills.map((group) => (
            <div key={group.group} className={styles.skillGroup}>
              <h3 className={styles.groupTitle}>{group.group}</h3>
              <ul className={styles.tags}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Languages */}
      <section aria-labelledby="languages-title">
        <h2 id="languages-title" className={styles.sectionLabel}>
          Languages/
        </h2>
        <ul className={styles.languages}>
          {languages.map((lang) => {
            const filled =
              lang.level === 'native' ? CEFR.length : CEFR.indexOf(lang.score ?? lang.level) + 1;
            return (
              <li key={lang.name} className={styles.language}>
                <span className={styles.langName}>
                  {lang.name}
                  {lang.note && <span className={styles.langNote}>{lang.note}</span>}
                </span>
                {/* The dots are a picture of the level; role="img" + label
                    gives screen readers the same information in words. */}
                <span
                  className={styles.dots}
                  role="img"
                  aria-label={lang.level === 'native' ? 'Native' : `Level ${lang.level}`}
                >
                  {CEFR.map((level, i) => (
                    <i key={level} data-on={i < filled} />
                  ))}
                </span>
                <span className={styles.level} aria-hidden="true">
                  {lang.level === 'native' ? 'Native' : lang.level}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 5. Outside design */}
      <section aria-labelledby="outside-title">
        <h2 id="outside-title" className={styles.sectionLabel}>
          Outside design/
        </h2>
        <ul className={styles.photos}>
          {photos.map((photo) => (
            <li key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
        <p className={styles.paragraph}>{outsideDesign}</p>
      </section>

      {/* 6. Links */}
      <section className={styles.links} aria-label="Résumé and profiles">
        {site.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pill}
          >
            {link.label} <span aria-hidden="true">↗</span>
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        ))}
      </section>

      <BackToTop />
    </div>
  );
}
