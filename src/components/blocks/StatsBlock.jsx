import styles from './blocks.module.css';

/*
  stats: a few numbers that summarise the work.
    { type: 'stats', items: [{ value: '12', label: 'User interviews' }, …] }
  A <dl> (description list) pairs each value with its label, which is
  the correct structure for screen readers.
*/
export default function StatsBlock({ items = [] }) {
  return (
    <dl className={styles.stats}>
      {items.map((item, i) => (
        <div key={i} className={styles.stat}>
          <dt className={styles.statLabel}>{item.label}</dt>
          <dd className={styles.statValue}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
