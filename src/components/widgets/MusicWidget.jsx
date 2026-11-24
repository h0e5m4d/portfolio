import { useState } from 'react';
import Widget from './Widget.jsx';
import styles from './widgets.module.css';

/*
  MusicWidget: "On repeat", styled like the iOS now-playing widget.

  No audio plays here (sound that starts by itself is irritating, and
  the songs aren't ours to host). The equalizer bars are just a visual
  hint; ‹ › switch songs, and "Listen" opens the song on Spotify.
*/
export default function MusicWidget({ songs }) {
  const [index, setIndex] = useState(0);
  const song = songs[index];
  const step = (delta) => setIndex((i) => (i + delta + songs.length) % songs.length);

  return (
    <Widget label="On repeat" aside={`${index + 1}/${songs.length}`}>
      <div className={styles.track}>
        {/* Placeholder cover: a gradient in the song's colours, plus its
            initials. Real album art is copyrighted. */}
        <div
          className={styles.art}
          style={{ background: `linear-gradient(135deg, ${song.colors[0]}, ${song.colors[1]})` }}
          aria-hidden="true"
        >
          {song.title.slice(0, 1)}
        </div>
        <div className={styles.trackText}>
          {/* aria-live: screen readers announce the new song after ‹ › */}
          <p className={styles.songTitle} aria-live="polite">
            {song.title}
          </p>
          <p className={styles.artist}>{song.artist}</p>
        </div>
        <span className={styles.eq} aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.control} onClick={() => step(-1)} aria-label="Previous song">
          ‹
        </button>
        <a
          href={song.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.listen}
          data-cursor="Spotify"
        >
          Listen <span aria-hidden="true">↗</span>
          <span className="visually-hidden"> to {song.title} on Spotify (opens in a new tab)</span>
        </a>
        <button type="button" className={styles.control} onClick={() => step(1)} aria-label="Next song">
          ›
        </button>
      </div>
    </Widget>
  );
}
