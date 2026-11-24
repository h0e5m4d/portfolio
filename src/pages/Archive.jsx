import { useState } from 'react';

import { archiveGroups, archiveIntro } from '../data/archive.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import Lightbox from '../components/Lightbox/Lightbox.jsx';
import BackToTop from '../components/BackToTop/BackToTop.jsx';
import styles from './Archive.module.css';

/*
  Archive page: hand-made work in groups. Clicking any piece opens it
  large in the Lightbox, where the arrows move through ALL pieces
  (not just one group), so visitors can browse everything in one go.
*/

// One flat list of every piece, each knowing its group name.
// Built once when the file loads, not on every render.
const allItems = archiveGroups.flatMap((group) =>
  group.items.map((item) => ({ ...item, group: group.title })),
);

export default function Archive() {
  usePageTitle('Archive');
  // Which piece is open in the lightbox, or null when it's closed.
  const [open, setOpen] = useState(null);

  return (
    <div className={styles.archive}>
      <header className={styles.intro}>
        <h1 className={styles.title}>
          Archive
          <sup className={styles.total}>({String(allItems.length).padStart(2, '0')})</sup>
        </h1>
        <p className={styles.lead}>{archiveIntro}</p>
      </header>

      {archiveGroups.map((group) => (
        <section key={group.id} aria-labelledby={`${group.id}-title`}>
          <h2 id={`${group.id}-title`} className={styles.groupTitle}>
            {group.title}/ <span className={styles.count}>({String(group.items.length).padStart(2, '0')})</span>
          </h2>
          <ul className={styles.gallery}>
            {group.items.map((item) => {
              const index = allItems.findIndex((a) => a.src === item.src);
              return (
                <li key={item.src} className={styles.piece}>
                  {/* A real <button>: works with keyboard and screen readers. */}
                  <button
                    type="button"
                    className={styles.open}
                    onClick={() => setOpen(index)}
                    data-cursor="View"
                    aria-label={`View larger: ${item.alt}`}
                  >
                    <img src={item.src} alt="" loading="lazy" decoding="async" />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <BackToTop />

      <Lightbox items={allItems} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
    </div>
  );
}
