import { NavLink } from 'react-router-dom';

import CornerTree from '../CornerTree/CornerTree.jsx';
import styles from './Nav.module.css';

/*
  Nav: top-left corner. The file-tree navigation.

    ⁑ TULINHTRAN/
    ├ /ABOUT
    ├ /PROJECTS
    └ /ARCHIVE

  The links are data, so adding a page means adding one line here.
*/
const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/archive', label: 'Archive' },
];

export default function Nav() {
  const root = (
    // `end` = only "active" on exactly "/", not on every page.
    <NavLink to="/" end className={styles.home}>
      <span className={styles.logoMark} aria-hidden="true">
        ⁑
      </span>
      <span>TULINHTRAN</span>
      <span className={styles.slash} aria-hidden="true">
        /
      </span>
    </NavLink>
  );

  const items = links.map((link) => ({
    key: link.to,
    content: (
      // NavLink adds aria-current="page" to the current page's link.
      // Without `end`, /projects stays active on /projects/smartbroker.
      <NavLink to={link.to} className={`${styles.link} link-wavy`}>
        <span className={styles.slash} aria-hidden="true">
          /
        </span>
        {link.label}
      </NavLink>
    ),
  }));

  return (
    <nav aria-label="Main">
      <CornerTree root={root} items={items} />
    </nav>
  );
}
