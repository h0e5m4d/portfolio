import { site } from '../../data/site.js';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard.js';
import CornerTree from '../CornerTree/CornerTree.jsx';
import styles from './ContactLinks.module.css';

/*
  ContactLinks: top-right corner, a mirrored file tree.

                    CONTACT/ @
     mail@tulinhtran.com ⧉ ┤
                /RÉSUMÉ ↗ ┤
              /LINKEDIN ↗ ┘

  Clicking the email copies it; no mail app pops up. The text itself
  turns into "COPIED TO CLIPBOARD" as feedback. Both strings are exactly
  19 characters, and in a monospaced font that means identical width:
  nothing around it moves.
*/
const COPIED_TEXT = 'Copied to clipboard';

export default function ContactLinks() {
  const { copied, copy } = useCopyToClipboard();

  const emailRow = (
    <>
      <button
        type="button"
        onClick={() => copy(site.email)}
        className={`${styles.email} link-underline`}
        data-copied={copied}
        data-cursor={copied ? 'Copied!' : 'Copy'}
      >
        {/* Both texts are always rendered on top of each other and
            cross-fade, so the button never changes size. */}
        <span className={styles.address}>{site.email}</span>
        <span className={styles.copiedText} aria-hidden="true">
          {COPIED_TEXT}
        </span>
        {copied ? <CheckIcon /> : <CopyIcon />}
        <span className="visually-hidden"> (copy email address)</span>
      </button>

      {/* aria-live: screen readers announce changes to this text,
          so blind visitors also hear that the copy worked. */}
      <span className="visually-hidden" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </>
  );

  const items = [
    { key: 'email', content: emailRow },
    ...site.links.map((link) => ({
      key: link.label,
      content: (
        // target="_blank" opens a new tab; rel="noopener noreferrer"
        // stops the new page from controlling this one (security).
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.link} link-underline`}
        >
          <span className={styles.slash} aria-hidden="true">
            /
          </span>
          {link.label}
          <ArrowIcon />
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      ),
    })),
  ];

  // Mirror of the nav's "⁑ TULINHTRAN/": the symbol sits on the outer edge.
  const root = (
    <span className={styles.root}>
      Contact
      <span className={styles.rootSlash} aria-hidden="true">
        /
      </span>
      <span className={styles.at} aria-hidden="true">
        @
      </span>
    </span>
  );

  return <CornerTree align="right" root={root} items={items} className={styles.contact} />;
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
