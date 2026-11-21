import { location } from '../../data/location.js';
import { useNow } from '../../hooks/useNow.js';
import { useWeather } from '../../hooks/useWeather.js';
import { describeWeather } from '../../utils/weather.js';
import { relativeToVisitor, timeParts } from '../../utils/time.js';
import CornerTree from '../CornerTree/CornerTree.jsx';
import WeatherIcon, { PinIcon } from './WeatherIcon.jsx';
import styles from './LocationWidget.module.css';

/*
  LocationWidget: top-right corner, a mirrored file tree.

                 TAIPEI, TW ☀
             12:19:24pm ┤
      21°C · PARTLY CLOUDY ┤
               [children] ┘

  `children` becomes the last row. The Layout passes the theme switch,
  so this component doesn't need to know anything about themes.
*/
export default function LocationWidget({ children }) {
  const now = useNow();
  const weather = useWeather(location);

  const time = timeParts(now, location.timeZone);
  const condition = weather.data ? describeWeather(weather.data.code) : null;

  const root = (
    <span className={styles.place} title={relativeToVisitor(now, location.timeZone)}>
      {location.city}, {location.countryCode}
      {condition ? (
        <WeatherIcon icon={condition.icon} isDay={weather.data.isDay} className={styles.icon} />
      ) : (
        <PinIcon className={styles.icon} />
      )}
    </span>
  );

  const items = [
    {
      key: 'time',
      content: (
        <span className={styles.subtle}>
          <span className="visually-hidden">Local time </span>
          <time dateTime={now.toISOString()} className={styles.time}>
            {time.hour}
            <span className={styles.colon}>:</span>
            {time.minute}
            <span className={styles.colon}>:</span>
            {time.second}
            <span className={styles.period}>{time.period}</span>
          </time>
        </span>
      ),
    },
  ];

  // The weather row only exists if there's something to say.
  // While loading, a faint placeholder keeps the corner from jumping.
  if (weather.status !== 'error') {
    items.push({
      key: 'weather',
      content: weather.data ? (
        <span className={styles.subtle}>
          {weather.data.temperature}°C
          <span className={styles.dot} aria-hidden="true">
            ·
          </span>
          {condition.label}
        </span>
      ) : (
        <span className={styles.placeholder} aria-hidden="true">
          --°C
        </span>
      ),
    });
  }

  if (children) items.push({ key: 'extra', content: children });

  return <CornerTree align="right" root={root} items={items} />;
}
