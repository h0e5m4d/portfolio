import styles from './blocks.module.css';

/*
  text: a section of the story.
    { type: 'text', label: '01 — Problem', heading: '…',
      body: ['paragraph', 'paragraph'], list: ['point', 'point'] }
  Every field is optional, so a block can be just a paragraph.
*/
export default function TextBlock({ label, heading, body = [], list }) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <section className={styles.text}>
      {label && <p className={styles.label}>{label}</p>}
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      {paragraphs.map((p, i) => (
        <p key={i} className={styles.paragraph}>
          {p}
        </p>
      ))}
      {list && (
        <ul className={styles.list}>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
