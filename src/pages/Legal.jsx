import { imprint, privacy, lastUpdated } from '../data/legal.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import BackToTop from '../components/BackToTop/BackToTop.jsx';
import styles from './Legal.module.css';

/*
  Legal page: Imprint + Privacy Policy. Content lives in data/legal.js.
  The two sections have ids, so they can be linked directly:
  /legal#imprint and /legal#privacy.
*/
export default function Legal() {
  usePageTitle('Imprint & Privacy');

  return (
    <div className={styles.legal}>
      <header className={styles.intro}>
        <p className={styles.kicker}>
          <span aria-hidden="true">⁑</span> Legal/
        </p>
        <h1 className={styles.title}>Imprint &amp; Privacy</h1>
      </header>

      <section id="imprint" aria-labelledby="imprint-title">
        <h2 id="imprint-title" className={styles.sectionLabel}>
          Imprint/
        </h2>
        <dl className={styles.facts}>
          <div className={styles.fact}>
            <dt>Information according to § 5 DDG</dt>
            <dd>
              {imprint.name}
              {imprint.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </dd>
          </div>
          <div className={styles.fact}>
            <dt>Contact</dt>
            <dd>
              <a href={`mailto:${imprint.email}`} className={styles.link}>
                {imprint.email}
              </a>
            </dd>
          </div>
          <div className={styles.fact}>
            <dt>Responsible for content according to § 18 (2) MStV</dt>
            <dd>
              {imprint.name}, address as above
            </dd>
          </div>
        </dl>
      </section>

      <section id="privacy" aria-labelledby="privacy-title">
        <h2 id="privacy-title" className={styles.sectionLabel}>
          Privacy/
        </h2>
        <div className={styles.policy}>
          {privacy.map((section) => (
            <div key={section.heading} className={styles.block}>
              <h3 className={styles.heading}>{section.heading}</h3>
              {section.body.map((p, i) => (
                <p key={i} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
        <p className={styles.updated}>Last updated: {lastUpdated}</p>
      </section>

      <BackToTop />
    </div>
  );
}
