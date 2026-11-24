import styles from './blocks.module.css';

/*
  gallery: 2 or 3 images side by side (stacked on phones).
    { type: 'gallery', columns: 2, images: [{ src, alt }, …], caption }
*/
export default function GalleryBlock({ images = [], columns = 2, caption, fit = 'contain' }) {
  return (
    <figure className={styles.figure}>
      <div className={styles.gallery} style={{ '--columns': columns }}>
        {images.map((image, i) => (
          <div key={i} className={styles.frame} data-fit={fit} style={{ aspectRatio: '4 / 3' }}>
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
