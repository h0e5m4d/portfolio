import styles from './widgets.module.css';

/*
  Widget: the shared shell for every homepage widget, like the rounded
  widgets on an iPhone home screen. A mono label on top, content below.
  Each widget (music, type, film, currently) only supplies its content.
*/
export default function Widget({ label, aside, children, className = '' }) {
  return (
    <section className={`${styles.widget} ${className}`} aria-label={label}>
      <header className={styles.top}>
        <h3 className={styles.label}>{label}</h3>
        {aside && <span className={styles.aside}>{aside}</span>}
      </header>
      {children}
    </section>
  );
}
