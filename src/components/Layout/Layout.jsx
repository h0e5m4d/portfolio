import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Nav from '../Nav/Nav.jsx';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';
import styles from './Layout.module.css';

/*
  Layout: the frame shared by every page.

  In App.jsx, all pages are nested inside this route. React Router renders
  the current page where <Outlet /> is. Because Layout itself stays mounted
  while you navigate, the header doesn't re-render or flicker, and the
  clock in Step 2 keeps ticking smoothly.
*/
export default function Layout() {
  useScrollToTopOnNavigate();

  return (
    <div className={styles.shell}>
      {/*
        Skip link: invisible until focused with Tab. Lets keyboard and
        screen-reader users jump past the nav straight to the content.
      */}
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>

      <header className={styles.header}>
        <Nav />
        <div className={styles.controls}>
          {/* Step 2: Taipei time + weather goes here */}
          <ThemeToggle />
        </div>
      </header>

      <main id="main" className={styles.main}>
        <Outlet />
      </main>

      {/* Step 3: Footer + contact links */}
    </div>
  );
}

/*
  Single-page apps don't reload when you click a link, so the browser
  keeps your old scroll position: you'd land halfway down the new page.
  This resets to the top whenever the URL path changes.
*/
function useScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
