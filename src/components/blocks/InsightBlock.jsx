import styles from './blocks.module.css';

/*
  insight: the psychology behind a design decision.
    { type: 'insight', title: 'Why it works', principle: 'Friction for
      risky actions', body: '…' }
  This is what sets your case studies apart: not just what you
  designed, but why it works for the human using it.
*/
export default function InsightBlock({ title = 'Why it works', principle, body }) {
  return (
    <aside className={styles.insight}>
      <p className={styles.insightTitle}>
        <span className={styles.insightMark} aria-hidden="true">
          ⁑
        </span>
        {title}
      </p>
      {principle && <p className={styles.principle}>{principle}</p>}
      {body && <p className={styles.insightBody}>{body}</p>}
    </aside>
  );
}
