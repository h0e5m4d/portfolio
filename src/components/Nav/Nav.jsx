import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

/*
  Nav: the file-tree navigation, a nod to code editors' file explorers.

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
  return (
    <nav aria-label="Main" className={styles.nav}>
      {/* `end` = only "active" on exactly "/", not on every page. */}
      <NavLink to="/" end className={styles.root}>
        <span className={styles.logoMark} aria-hidden="true">
          ⁑
        </span>
        TULINHTRAN
        <span className={styles.slash} aria-hidden="true">
          /
        </span>
      </NavLink>

      <ul className={styles.tree}>
        {/* The branch lines (├ └) are drawn in CSS, see Nav.module.css */}
        {links.map((link) => (
          <li key={link.to} className={styles.item}>
            {/*
              NavLink adds aria-current="page" to the link of the page
              we're on. Without `end`, /projects stays active on
              /projects/smartbroker too, which is what we want.
            */}
            <NavLink to={link.to} className={styles.link}>
              <span className={styles.slashMuted} aria-hidden="true">
                /
              </span>
              <span className={styles.label}>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
