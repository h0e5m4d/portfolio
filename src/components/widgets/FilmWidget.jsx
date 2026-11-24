import { useState } from 'react';
import Widget from './Widget.jsx';
import styles from './widgets.module.css';

/*
  FilmWidget: a little stack of film photos. Click (or press Enter)
  and the top photo moves to the back, like flicking through prints.

  Every photo is always in the stack; only its position changes.
  Each photo's place in the pile (0 = top) is calculated from `top`,
  and CSS turns that position into a slight offset and rotation.
*/
export default function FilmWidget({ photos }) {
  const [top, setTop] = useState(0);
  const next = () => setTop((t) => (t + 1) % photos.length);

  return (
    <Widget label="On film" aside={`${top + 1}/${photos.length}`}>
      <button
        type="button"
        className={styles.stack}
        onClick={next}
        data-cursor="Next photo"
        aria-label={`Film photo ${top + 1} of ${photos.length}: ${photos[top].alt}. Show next photo`}
      >
        {photos.map((photo, i) => {
          // 0 for the top photo, 1 for the one below it, and so on.
          const depth = (i - top + photos.length) % photos.length;
          return (
            <img
              key={photo.src}
              src={photo.src}
              alt=""
              className={styles.print}
              style={{ '--depth': depth, zIndex: photos.length - depth }}
              data-hidden={depth > 3}
              loading="lazy"
              decoding="async"
            />
          );
        })}
      </button>
    </Widget>
  );
}
