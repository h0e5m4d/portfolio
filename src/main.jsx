import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Fonts are installed as npm packages, so they're served from our own
// site instead of Google's servers (faster, more private, works offline).
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';

// Global styles, in this order on purpose:
// 1. reset    - removes inconsistent browser defaults
// 2. tokens   - our design variables (colors, type, spacing)
// 3. global   - base styles that use those tokens
import './styles/reset.css';
import './styles/tokens.css';
import './styles/global.css';

import App from './App.jsx';

// BrowserRouter gives us real URLs (/about, /projects/smartbroker)
// and lets the back/forward buttons work.
// StrictMode only runs in development and warns about common bugs.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
