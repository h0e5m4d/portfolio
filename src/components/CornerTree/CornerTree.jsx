import styles from './CornerTree.module.css';

/*
  CornerTree: the file-tree pattern used in all four corners of the page.

      ROOT/                         ROOT
      ├ item               item ┤
      └ item               item ┘
      align="left"         align="right"

  It only draws the structure (root + branch lines). What's *inside*
  each row is up to whoever uses it: nav links, the clock, contact
  links. One component, four very different corners.

  Props:
    root   – content of the top row
    items  – array of { key, content }
    align  – 'left' (default) or 'right' (mirrored)
    className – extra classes from the parent, e.g. for positioning
*/
export default function CornerTree({ root, items, align = 'left', className = '' }) {
  return (
    <div className={`${styles.tree} ${className}`} data-align={align}>
      <div className={styles.root}>{root}</div>
      <ul className={styles.branches}>
        {items.map((item) => (
          <li key={item.key} className={styles.item}>
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
