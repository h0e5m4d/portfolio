import { Link } from 'react-router-dom';

import { site } from '../../data/site.js';
import CornerTree from '../CornerTree/CornerTree.jsx';
import LocationWidget from '../LocationWidget/LocationWidget.jsx';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';
import styles from './Footer.module.css';

/*
  Footer: the two bottom corners. Same rows as the top trees, no lines.

    ☀ TAIPEI, TW                      OPEN FOR INTERNSHIPS ●
    12:19:24pm                             FROM APRIL 2027
    [theme switch]                     © 2026 TU LINH TRAN
                                         IMPRINT & PRIVACY

  "Back to top" lives at the end of each page instead (BackToTop).
  Positioning (fixed to the bottom of the screen) comes from Layout,
  passed in as `className`.
*/
export default function Footer({ className = '' }) {
  const year = new Date().getFullYear(); // never needs updating by hand

  const statusRoot = (
    <span className={styles.status} data-available={site.status.available}>
      {site.status.text}
      <span className={styles.dot} aria-hidden="true" />
    </span>
  );

  const statusItems = [
    { key: 'detail', content: <span className={styles.subtle}>{site.status.detail}</span> },
    {
      key: 'copyright',
      content: (
        <span className={styles.subtle}>
          © {year} {site.name}
        </span>
      ),
    },
    {
      key: 'legal',
      content: (
        <Link to="/legal" className={`${styles.subtleLink} link-underline`}>
          Imprint &amp; Privacy
        </Link>
      ),
    },
  ];

  return (
    <footer className={className}>
      <LocationWidget>
        <ThemeToggle />
      </LocationWidget>
      <CornerTree align="right" lines={false} root={statusRoot} items={statusItems} />
    </footer>
  );
}
