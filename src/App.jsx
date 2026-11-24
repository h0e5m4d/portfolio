import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home.jsx';

/*
  Code splitting: lazy() loads a page's code only when someone visits it.
  The homepage is imported normally because almost everyone lands there.
  The others become separate small files that download on demand, so the
  first visit loads less JavaScript. Vite does the splitting for us at
  build time; all we change is how the pages are imported.
*/
const Projects = lazy(() => import('./pages/Projects.jsx'));
const CaseStudy = lazy(() => import('./pages/CaseStudy.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Archive = lazy(() => import('./pages/Archive.jsx'));
const Legal = lazy(() => import('./pages/Legal.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

// The route map: which URL shows which page. Every page is nested inside
// <Layout>, which shows it via <Outlet /> between the four corners.
export default function App() {
  return (
    // Suspense: what to show while a lazy page's file is downloading.
    // It takes a fraction of a second, so nothing (null) looks calmer
    // than a spinner flashing up.
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          {/* `index` = the default child, i.e. the URL "/" */}
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          {/* :slug is a placeholder: /projects/smartbroker → slug = "smartbroker" */}
          <Route path="projects/:slug" element={<CaseStudy />} />
          <Route path="about" element={<About />} />
          <Route path="archive" element={<Archive />} />
          <Route path="legal" element={<Legal />} />
          {/* "*" matches any URL not listed above */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
