import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Nav from '../Nav/Nav.jsx';
import ContactLinks from '../ContactLinks/ContactLinks.jsx';
import Footer from '../Footer/Footer.jsx';
import CursorLabel from '../CursorLabel/CursorLabel.jsx';
import styles from './Layout.module.css';

/*
  Layout: the frame shared by every page.

  In App.jsx, all pages are nested inside this route. React Router renders
  the current page where <Outlet /> is. Because Layout itself stays mounted
  while you navigate, the corners don't re-render or flicker, and the
  clock keeps ticking smoothly.

  The header and footer are fixed to the screen (see Layout.module.css),
  so the four corners are always visible while the page scrolls.
*/
export default function Layout() {
  useScrollToTopOnNavigate();

  return (
    <>
      {/*
        Skip link: invisible until focused with Tab. Lets keyboard and
        screen-reader users jump past the nav straight to the content.
      */}
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>

      <header className={styles.header}>
        {/* Top-left and top-right corners. The footer mirrors these. */}
        <Nav />
        <ContactLinks />
      </header>

      <main id="main" className={styles.main}>
        <Outlet />
      </main>

      <Footer className={styles.footer} />

      {/* One floating label for the whole site; elements opt in with
          data-cursor="…" (see CursorLabel.jsx). */}
      <CursorLabel />
    </>
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
