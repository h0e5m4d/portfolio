import { useEffect, useRef } from 'react';
import styles from './CursorLabel.module.css';

/*
  CursorLabel: a small pill that follows the mouse and says what a click
  will do, e.g. "View project" or "Copy".

  How to use it anywhere on the site, no imports needed:
      <a href="…" data-cursor="View project">…</a>
  Any element with a data-cursor attribute shows its text while hovered.
  The text is read on every frame, so it can change while you hover
  (e.g. "Copy" → "Copied!" after clicking).

  Why not React state for the position? The mouse moves ~60 times a
  second. Updating state that often would re-render React every frame.
  Instead we write the position straight to the element's style through
  a ref, inside requestAnimationFrame, which is the browser's "draw the
  next frame" hook. Same result, almost no work.

  Only for real mice/trackpads: touch screens have no hover, so on
  phones and tablets this does nothing at all.
*/
export default function CursorLabel() {
  const labelRef = useRef(null);

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const label = labelRef.current;
    let mouseX = -100;
    let mouseY = -100;
    let x = mouseX;
    let y = mouseY;
    let frame;
    let insideWindow = false;

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!insideWindow) {
        // Jump straight to the cursor when it enters, instead of flying in.
        x = mouseX;
        y = mouseY;
        insideWindow = true;
      }
    };
    const onLeave = () => {
      insideWindow = false;
    };

    const tick = () => {
      // Which element is under the cursor right now? Checked every frame,
      // so it's also correct while scrolling without moving the mouse.
      const under = insideWindow ? document.elementFromPoint(mouseX, mouseY) : null;
      const text = under?.closest('[data-cursor]')?.dataset.cursor;

      if (text) {
        if (label.textContent !== text) label.textContent = text;
        label.dataset.visible = 'true';
      } else {
        label.dataset.visible = 'false';
      }

      // Ease toward the mouse: move 25% of the remaining distance each
      // frame, which feels soft and "springy". Reduced motion: no lag.
      const ease = reduceMotion ? 1 : 0.25;
      x += (mouseX - x) * ease;
      y += (mouseY - y) * ease;
      label.style.transform = `translate3d(${x + 16}px, ${y + 18}px, 0)`;

      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  // aria-hidden: the label repeats what the element already says
  // (screen readers get the link or button text itself).
  return <div ref={labelRef} className={styles.label} data-visible="false" aria-hidden="true" />;
}
