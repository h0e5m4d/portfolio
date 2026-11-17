import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Archive from './pages/Archive.jsx';
import Legal from './pages/Legal.jsx';
import NotFound from './pages/NotFound.jsx';

// The route map: which URL shows which page.
// Every page is nested inside <Layout>, so they all share the
// header (and later the footer). Layout shows the page via <Outlet />.
// In Step 5 we add "projects/:slug" for case studies.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* `index` = the default child, i.e. the URL "/" */}
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="archive" element={<Archive />} />
        <Route path="legal" element={<Legal />} />
        {/* "*" matches any URL not listed above */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
