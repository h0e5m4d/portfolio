import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';
const darkQuery = '(prefers-color-scheme: dark)';

/*
  useTheme: a custom hook that owns the light/dark logic.

  Why a hook and not code inside the toggle component?
  The toggle should only care about *showing* a switch. Keeping the logic
  here means any component can read or change the theme, and the toggle's
  look can change without touching this file.

  The starting value comes from <html data-theme>, which the script in
  index.html already set before React loaded. So React and the page
  always agree, and there's no flash.
*/
export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');

  // Whenever `theme` changes, write it to <html data-theme>.
  // tokens.css listens to that attribute and swaps every color.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // If the visitor never chose a theme themselves, follow their system
  // setting live (e.g. macOS switching to dark mode at sunset).
  useEffect(() => {
    const media = window.matchMedia(darkQuery);
    const onSystemChange = (event) => {
      if (readSaved() === null) setTheme(event.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', onSystemChange);
    // Cleanup: React calls this when the component disappears,
    // so we don't leave a listener running in the background.
    return () => media.removeEventListener('change', onSystemChange);
  }, []);

  // useCallback keeps the same function between renders,
  // which avoids needless re-renders of components that receive it.
  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      save(next); // an explicit choice is remembered for the next visit
      return next;
    });
  }, []);

  return { theme, isDark: theme === 'dark', toggleTheme };
}

// localStorage can throw (private browsing, blocked storage),
// so every access is wrapped. The site must work without it.
function readSaved() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

function save(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* storage unavailable: the choice just won't be remembered */
  }
}
