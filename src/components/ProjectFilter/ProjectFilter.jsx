import styles from './ProjectFilter.module.css';

/*
  ProjectFilter: a row of pill buttons, one per discipline, plus "All".

  It doesn't store which filter is active. The parent passes `active`
  and gets told about clicks through `onChange`. This is called a
  "controlled component": the state lives in one place (the page, which
  keeps it in the URL), and this component only displays it.

  aria-pressed tells screen readers which button is currently on.
*/
export default function ProjectFilter({ options, active, total, onChange }) {
  const buttons = [{ name: 'All', slug: null, count: total }, ...options];

  return (
    <div className={styles.filter} role="group" aria-label="Filter projects by discipline">
      {buttons.map((option) => {
        const isActive = option.slug === active;
        return (
          <button
            key={option.slug ?? 'all'}
            type="button"
            className={styles.pill}
            aria-pressed={isActive}
            onClick={() => onChange(option.slug)}
          >
            {option.name}
            <span className={styles.count}>{option.count}</span>
          </button>
        );
      })}
    </div>
  );
}
