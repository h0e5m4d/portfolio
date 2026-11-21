import { useTheme } from '../../hooks/useTheme.js';
import styles from './ThemeToggle.module.css';

/*
  ThemeToggle: an iOS-style switch for light/dark mode.

  Accessibility:
  - It's a real <button>, so it works with keyboard (Tab, Enter, Space).
  - role="switch" + aria-checked tells screen readers it's an on/off
    switch and whether it's on, e.g. "Dark mode, switch, on".
  - The icons are decorative (aria-hidden); the hidden text is the label.
*/
export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={toggleTheme}
      className={styles.toggle}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="visually-hidden">Dark mode</span>
      <SunIcon className={`${styles.icon} ${styles.sun}`} />
      <MoonIcon className={`${styles.icon} ${styles.moon}`} />
      <span className={styles.thumb} aria-hidden="true" />
    </button>
  );
}

// Small inline SVG icons. Inline means no extra file requests, and
// `currentColor` lets CSS control their color like text.
function SunIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="3" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M3.4 12.6l1-1M11.6 4.4l1-1" />
      </g>
    </svg>
  );
}

function MoonIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 10.2A5.5 5.5 0 0 1 5.8 2.5a5.5 5.5 0 1 0 7.7 7.7Z"
      />
    </svg>
  );
}
