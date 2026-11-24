import { useState } from 'react';
import Widget from './Widget.jsx';
import styles from './widgets.module.css';

/*
  TypeWidget: a tiny type playground. Move across it and the letters
  get thinner (left) or bolder (right).

  This works because Geist is a *variable font*: one file containing
  every weight from 100 to 900, so the weight can be any number, not
  just "regular" or "bold".

  The slider does the same thing for keyboard and touch users, who
  can't hover. Placeholder until it shows your own typeface.
*/
const MIN = 100;
const MAX = 900;

export default function TypeWidget() {
  const [weight, setWeight] = useState(450);

  const onPointerMove = (event) => {
    if (event.pointerType !== 'mouse') return; // touch uses the slider
    const box = event.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (event.clientX - box.left) / box.width));
    setWeight(Math.round(MIN + ratio * (MAX - MIN)));
  };

  return (
    <Widget label="Type" aside={`Geist · ${weight}`}>
      <div className={styles.specimen} onPointerMove={onPointerMove} aria-hidden="true">
        <span style={{ fontWeight: weight }}>Aa</span>
      </div>
      <input
        type="range"
        min={MIN}
        max={MAX}
        step={10}
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
        className={styles.slider}
        aria-label="Font weight"
      />
    </Widget>
  );
}
