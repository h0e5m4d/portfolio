import { Link } from 'react-router-dom';

import { site } from '../../data/site.js';
import ContactLinks from '../ContactLinks/ContactLinks.jsx';
import CornerTree from '../CornerTree/CornerTree.jsx';
import styles from './Footer.module.css';

/*
  Footer: the two bottom corners, mirroring the header.

    CONTACT/                          ● OPEN FOR INTERNSHIPS
    ├ mail@tulinhtran.com ⧉                FROM APRIL 2027 ┤
    ├ /RÉSUMÉ ↗                        © 2026 TU LINH TRAN ┤
    ├ /LINKEDIN ↗                       /IMPRINT & PRIVACY ┤
    └ /INSTAGRAM ↗                          BACK TO TOP ↑ ┘
*/
export default function Footer() {
  const year = new Date().getFullYear(); // never needs updating by hand

  const statusRoot = (
    <span className={styles.status} data-available={site.status.available}>
      {site.status.text}
      <span className={styles.dot} aria-hidden="true" />
    </span>
  );

  const infoItems = [
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
        <Link to="/legal" className={`${styles.link} link-wavy`}>
          <span className={styles.slash} aria-hidden="true">
            /
          </span>
          Imprint &amp; Privacy
        </Link>
      ),
    },
    {
      key: 'top',
      content: (
        <button type="button" onClick={scrollToTop} className={`${styles.link} link-wavy`}>
          Back to top <span aria-hidden="true">↑</span>
        </button>
      ),
    },
  ];

  return (
    <footer className={styles.footer}>
      <ContactLinks />
      <CornerTree align="right" root={statusRoot} items={infoItems} />
    </footer>
  );
}

function scrollToTop() {
  // Smooth scrolling is nice, unless the visitor asked for less motion.
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
}
