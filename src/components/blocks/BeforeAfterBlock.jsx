import { useState } from 'react';
import styles from './blocks.module.css';

/*
  beforeAfter: drag to compare the old and the new design.
    { type: 'beforeAfter', before: { src, alt }, after: { src, alt },
      caption, ratio: '16 / 10' }

  How it works: both images are stacked. The "after" image on top is
  cut off with clip-path at the slider position, revealing "before"
  on the right.

  The slider is a real <input type="range">, invisible but stretched
  over the whole image. So mouse, touch AND keyboard (arrow keys) all
  work, and screen readers announce it as a slider, all for free,
  instead of building drag handling ourselves.
*/
export default function BeforeAfterBlock({ before, after, caption, ratio = '16 / 10' }) {
  const [position, setPosition] = useState(50); // percent from the left

  return (
    <figure className={styles.figure}>
      <div className={styles.compare} style={{ aspectRatio: ratio, '--pos': `${position}%` }}>
        <img src={before.src} alt={before.alt} className={styles.compareImage} />
        <img src={after.src} alt={after.alt} className={`${styles.compareImage} ${styles.after}`} />

        <span className={`${styles.compareTag} ${styles.tagAfter}`} aria-hidden="true">
          After
        </span>
        <span className={`${styles.compareTag} ${styles.tagBefore}`} aria-hidden="true">
          Before
        </span>

        <div className={styles.handle} aria-hidden="true">
          <span className={styles.knob}>‹ ›</span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className={styles.range}
          aria-label="Compare before and after: slide to reveal more of the new design"
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
