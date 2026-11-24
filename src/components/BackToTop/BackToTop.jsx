import styles from './BackToTop.module.css';

/*
  BackToTop: ends a page. Place it as the last element of any page.
  Smooth scroll, unless the visitor asked for reduced motion.
*/
export default function BackToTop() {
  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <div className={styles.wrap}>
      <button type="button" onClick={scrollToTop} className={styles.button}>
        Back to top
        <span className={styles.arrow} aria-hidden="true">
          ↑
        </span>
      </button>
    </div>
  );
}
