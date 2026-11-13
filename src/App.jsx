import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Archive from './pages/Archive.jsx';
import Legal from './pages/Legal.jsx';
import NotFound from './pages/NotFound.jsx';

// The route map: which URL shows which page.
// In Step 1 these will be wrapped in a shared <Layout> (nav, footer),
// and in Step 5 we add "/projects/:slug" for case studies.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/legal" element={<Legal />} />
      {/* "*" matches any URL not listed above */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
