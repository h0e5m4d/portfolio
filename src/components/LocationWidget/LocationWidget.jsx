import { location } from '../../data/location.js';
import { useNow } from '../../hooks/useNow.js';
import { useWeather } from '../../hooks/useWeather.js';
import { describeWeather } from '../../utils/weather.js';
import { relativeToVisitor, timeParts } from '../../utils/time.js';
import WeatherIcon, { PinIcon } from './WeatherIcon.jsx';
import styles from './LocationWidget.module.css';

/*
  LocationWidget: where you are, your local time, and the weather there.

      ☀ TAIPEI, TW
      04:05:20pm · 20°C

  The component only *combines* things. The data comes from
  data/location.js, the ticking clock from useNow, the weather from
  useWeather, and formatting from utils. Each piece can be changed or
  tested on its own.
*/
export default function LocationWidget() {
  const now = useNow();
  const weather = useWeather(location);

  const time = timeParts(now, location.timeZone);
  const condition = weather.data ? describeWeather(weather.data.code) : null;

  return (
    <div className={styles.widget} title={relativeToVisitor(now, location.timeZone)}>
      <p className={styles.place}>
        {condition ? (
          <WeatherIcon icon={condition.icon} isDay={weather.data.isDay} className={styles.icon} />
        ) : (
          <PinIcon className={styles.icon} />
        )}
        <span>
          {location.city}, {location.countryCode}
        </span>
        {/* Icons are invisible to screen readers, so say it in words too. */}
        {condition && <span className="visually-hidden">, {condition.label}</span>}
      </p>

      <p className={styles.meta}>
        <span className="visually-hidden">Local time </span>
        <time dateTime={now.toISOString()} className={styles.time}>
          {time.hour}
          <span className={styles.colon}>:</span>
          {time.minute}
          <span className={styles.colon}>:</span>
          {time.second}
          <span className={styles.period}>{time.period}</span>
        </time>

        {/* While loading, a faint placeholder holds the space so the
            time doesn't jump sideways when the temperature arrives.
            If the weather fails, the temperature simply disappears. */}
        {weather.status !== 'error' && (
          <>
            <span className={styles.dot} aria-hidden="true">
              ·
            </span>
            {weather.data ? (
              <span>{weather.data.temperature}°C</span>
            ) : (
              <span className={styles.placeholder} aria-hidden="true">
                --°C
              </span>
            )}
          </>
        )}
      </p>
    </div>
  );
}
