import Widget from './Widget.jsx';
import styles from './widgets.module.css';

/*
  CurrentlyWidget: what you're doing right now, as a short list.
*/
export default function CurrentlyWidget({ items }) {
  return (
    <Widget label="Currently">
      <dl className={styles.currently}>
        {items.map((item) => (
          <div key={item.label} className={styles.row}>
            <dt>{item.label}</dt>
            <dd>
              {item.value}
              <span className={styles.detail}>{item.detail}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Widget>
  );
}
