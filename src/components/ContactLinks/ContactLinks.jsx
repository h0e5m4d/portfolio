import { site } from '../../data/site.js';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard.js';
import styles from './ContactLinks.module.css';

/*
  ContactLinks: email (with copy button) + external profile links.

  It knows nothing about *where* it's placed. The footer uses it today;
  a floating version or the About page could reuse it later. Placement
  is the parent's job, passed in through `className`.
*/
export default function ContactLinks({ className = '' }) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <ul className={`${styles.list} ${className}`}>
      <li className={styles.emailItem}>
        {/* The address itself opens the visitor's mail app... */}
        <a href={`mailto:${site.email}`} className={styles.link}>
          {site.email}
        </a>

        {/* ...and the button next to it copies it, for people who use
            webmail and don't have a mail app set up. */}
        <button
          type="button"
          onClick={() => copy(site.email)}
          className={styles.copyButton}
          aria-label="Copy email address"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          <span className={styles.tooltip} data-visible={copied} aria-hidden="true">
            Copied!
          </span>
        </button>

        {/* aria-live: screen readers announce changes to this text,
            so blind visitors also hear that the copy worked. */}
        <span className="visually-hidden" aria-live="polite">
          {copied ? 'Email address copied' : ''}
        </span>
      </li>

      {site.links.map((link) => (
        <li key={link.label}>
          {/* target="_blank" opens a new tab; rel="noopener noreferrer"
              stops the new page from controlling this one (security). */}
          <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {link.label}
            <ArrowIcon />
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

const iconProps = {
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

function CopyIcon() {
  return (
    <svg {...iconProps} className={styles.icon}>
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.8" />
      <path d="M10.5 3.5v-.3A1.7 1.7 0 0 0 8.8 1.5H3.2a1.7 1.7 0 0 0-1.7 1.7v5.6a1.7 1.7 0 0 0 1.7 1.7h.3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg {...iconProps} className={`${styles.icon} ${styles.check}`}>
      <path d="M3 8.5 6.5 12 13 4.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg {...iconProps} className={styles.arrow}>
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
}
