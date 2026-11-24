import styles from './blocks.module.css';

/*
  image: one image with an optional caption.
    { type: 'image', src, alt, caption, fit: 'cover' | 'contain',
      ratio: '16 / 9', size: 'content' | 'wide' | 'full' }
  `alt` describes what the image SHOWS, for people who can't see it.
  `ratio` is optional; without it the image keeps its own proportions.
*/
export default function ImageBlock({ src, alt, caption, fit = 'contain', ratio }) {
  return (
    <figure className={styles.figure}>
      <div className={styles.frame} data-fit={fit} style={ratio ? { aspectRatio: ratio } : undefined}>
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
