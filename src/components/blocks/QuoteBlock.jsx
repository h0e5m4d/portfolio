import styles from './blocks.module.css';

/*
  quote: a voice from research or the client.
    { type: 'quote', text: '…', cite: 'Participant 4, usability test' }
*/
export default function QuoteBlock({ text, cite }) {
  return (
    <figure className={styles.quote}>
      <blockquote>
        <p>{text}</p>
      </blockquote>
      {cite && <figcaption className={styles.cite}>{cite}</figcaption>}
    </figure>
  );
}
