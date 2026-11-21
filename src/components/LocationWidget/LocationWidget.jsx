import { location } from '../../data/location.js';
import { useNow } from '../../hooks/useNow.js';
import { useWeather } from '../../hooks/useWeather.js';
import { describeWeather } from '../../utils/weather.js';
import { relativeToVisitor, timeParts } from '../../utils/time.js';
import CornerTree from '../CornerTree/CornerTree.jsx';
import WeatherIcon, { PinIcon } from './WeatherIcon.jsx';
import styles from './LocationWidget.module.css';

/*
  LocationWidget: bottom-left corner. Same rows as a tree, no lines.

    ☀ TAIPEI, TW
    12:19:24pm
    21°C
    [children]

  The icon shows Taipei's current weather; the condition in words is
  only for screen readers. `children` becomes the last row: the Layout passes the
  theme switch, so this component doesn't need to know about themes.
*/
export default function LocationWidget({ children }) {
  const now = useNow();
  const weather = useWeather(location);

  const time = timeParts(now, location.timeZone);
  const condition = weather.data ? describeWeather(weather.data.code) : null;

  const root = (
    <span className={styles.place} title={relativeToVisitor(now, location.timeZone)}>
      {condition ? (
        <WeatherIcon icon={condition.icon} isDay={weather.data.isDay} className={styles.icon} />
      ) : (
        <PinIcon className={styles.icon} />
      )}
      {location.city}, {location.countryCode}
      {condition && <span className="visually-hidden">, {condition.label}</span>}
    </span>
  );

  const items = [
    {
      key: 'time',
      content: (
        <span className={styles.subtle}>
          <span className="visually-hidden">Local time </span>
          <time dateTime={now.toISOString()}>
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
    {
      key: 'temperature',
      // Always present so every corner has four rows. While loading,
      // or if the weather service is down, a faint placeholder holds it.
      content: weather.data ? (
        <span className={styles.subtle}>{weather.data.temperature}°C</span>
      ) : (
        <span className={styles.placeholder} aria-hidden="true">
          --°C
        </span>
      ),
    },
  ];

  if (children) items.push({ key: 'extra', content: children });

  return <CornerTree lines={false} root={root} items={items} />;
}
