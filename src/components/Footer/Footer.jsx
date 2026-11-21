import { Link } from 'react-router-dom';

import { site } from '../../data/site.js';
import ContactLinks from '../ContactLinks/ContactLinks.jsx';
import styles from './Footer.module.css';

/*
  Footer: on every page, at every screen size.

  Top row:     availability status · contact links
  Bottom row:  © + legal · how the site was made · back to top

  Later (after v1), the font-editor version of your name will live here.
*/
export default function Footer() {
  const year = new Date().getFullYear(); // never needs updating by hand

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <p className={styles.status} data-available={site.status.available}>
          <span className={styles.dot} aria-hidden="true" />
          {site.status.text}
        </p>
        <ContactLinks />
      </div>

      <div className={styles.bottom}>
        <p>
          © {year} {site.name}
          <span className={styles.sep} aria-hidden="true">
            ·
          </span>
          <Link to="/legal" className={styles.subtleLink}>
            Imprint &amp; Privacy
          </Link>
        </p>

        <p>
          Designed in Figma, built with React
          <span className={styles.sep} aria-hidden="true">
            ·
          </span>
          <a
            href={site.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.subtleLink}
          >
            View source<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </p>

        <button type="button" onClick={scrollToTop} className={styles.toTop}>
          Back to top <span aria-hidden="true">↑</span>
        </button>
      </div>
    </footer>
  );
}

function scrollToTop() {
  // Smooth scrolling is nice, unless the visitor asked for less motion.
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
}
