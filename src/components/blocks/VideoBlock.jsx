import { useEffect, useRef, useState } from 'react';
import styles from './blocks.module.css';

/*
  video: a prototype recording that plays like a moving image.
    { type: 'video', src, poster, caption, label }
  `label` describes the video for screen readers (like alt text).

  It autoplays muted and loops (browsers only allow autoplay when muted).
  For visitors who've asked for reduced motion it does NOT autoplay;
  they get normal play controls instead.
*/
export default function VideoBlock({ src, poster, caption, label }) {
  const videoRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduceMotion(reduce);
    if (reduce) videoRef.current?.pause();
  }, []);

  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          aria-label={label}
          autoPlay={!reduceMotion}
          controls={reduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
