import { useEffect, useRef } from 'react';
import styles from './Lightbox.module.css';

/*
  Lightbox: shows one image large, with previous / next / close.

  Built on the browser's own <dialog> element. With showModal() the
  browser gives us, for free:
    - Esc closes it
    - keyboard focus stays inside while it's open
    - focus returns to the image you clicked when it closes
    - everything behind it becomes unreachable for screen readers

  Props:
    items   – [{ src, alt, group }]
    index   – which item to show, or null when closed
    onChange(newIndex) / onClose()
*/
export default function Lightbox({ items, index, onChange, onClose }) {
  const dialogRef = useRef(null);
  const isOpen = index !== null;

  // Keep the real <dialog> in sync with our `index` state.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  const step = (delta) => onChange((index + delta + items.length) % items.length);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') step(1);
    if (event.key === 'ArrowLeft') step(-1);
  };

  // A click on the dark backdrop (the dialog itself, not its content)
  // closes it, like most image viewers.
  const onClick = (event) => {
    if (event.target === dialogRef.current) onClose();
  };

  const item = isOpen ? items[index] : null;

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClose={onClose} // fires on Esc, so our state stays in sync
      onKeyDown={onKeyDown}
      onClick={onClick}
      aria-label="Artwork viewer"
    >
      {item && (
        <figure className={styles.figure}>
          {/* key: a new image element per artwork, so it fades in */}
          <img key={item.src} src={item.src} alt={item.alt} className={styles.image} />
          <figcaption className={styles.caption}>
            <span>{item.group}</span>
            <span aria-live="polite">
              {index + 1} / {items.length}
            </span>
          </figcaption>
        </figure>
      )}

      <button type="button" className={`${styles.button} ${styles.prev}`} onClick={() => step(-1)} aria-label="Previous artwork">
        ←
      </button>
      <button type="button" className={`${styles.button} ${styles.next}`} onClick={() => step(1)} aria-label="Next artwork">
        →
      </button>
      <button type="button" className={`${styles.button} ${styles.close}`} onClick={onClose} aria-label="Close viewer">
        ✕
      </button>
    </dialog>
  );
}
