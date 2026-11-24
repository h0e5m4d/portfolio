import { useEffect, useState } from 'react';
import styles from './Greeting.module.css';

/*
  Greeting: cycles through "Xin chào → Hallo → Hello → Bonjour → 你好".

  Screen readers would be confused by text that changes every two
  seconds, so the moving word is hidden from them (aria-hidden) and they
  read a stable "Hello" instead. Visitors who prefer reduced motion see
  the first greeting only.
*/
export default function Greeting({ greetings, interval = 2200 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % greetings.length), interval);
    return () => clearInterval(id);
  }, [greetings.length, interval]);

  const current = greetings[index];

  return (
    <>
      <span className="visually-hidden">Hello</span>
      {/* key={index}: a new key makes React create a fresh element for
          each word, so the entrance animation plays every time. */}
      <span key={index} lang={current.lang} className={styles.word} aria-hidden="true">
        {current.text}
      </span>
    </>
  );
}
