/*
  Weather icons as small inline SVGs, drawn on a 16×16 grid with
  1.4px strokes to match the theme-toggle icons. `currentColor` means
  CSS decides their color, like text.
*/
const sun = (
  <>
    <circle cx="8" cy="8" r="2.8" />
    <path d="M8 1.5v1.3M8 13.2v1.3M1.5 8h1.3M13.2 8h1.3M3.4 3.4l.9.9M11.7 11.7l.9.9M3.4 12.6l.9-.9M11.7 4.3l.9-.9" />
  </>
);

const moon = <path d="M13 9.8A5.2 5.2 0 0 1 6.2 3a5.2 5.2 0 1 0 6.8 6.8Z" />;

const cloud = <path d="M4.6 12.5h6.9a2.6 2.6 0 0 0 .3-5.2 3.6 3.6 0 0 0-6.9-.6 2.9 2.9 0 0 0-.3 5.8Z" />;

const shapes = {
  clear: { day: sun, night: moon },
  partly: {
    day: (
      <>
        <path d="M5.6 4.2a2.4 2.4 0 0 1 3.9 1M3.2 1.8l.7.7M1.5 6h1M5.9 1v1" />
        <path d="M5.2 13.5h6.4a2.4 2.4 0 0 0 .3-4.8 3.3 3.3 0 0 0-6.3-.5 2.7 2.7 0 0 0-.4 5.3Z" />
      </>
    ),
    night: (
      <>
        <path d="M7.4 3.6A2.6 2.6 0 0 1 4.2 1.2 2.6 2.6 0 1 0 6 6" />
        <path d="M5.2 13.5h6.4a2.4 2.4 0 0 0 .3-4.8 3.3 3.3 0 0 0-6.3-.5 2.7 2.7 0 0 0-.4 5.3Z" />
      </>
    ),
  },
  cloud: { day: cloud, night: cloud },
  fog: {
    day: <path d="M2.5 6h11M3.5 8.5h9M2.5 11h11" />,
  },
  rain: {
    day: (
      <>
        <path d="M4.6 9.5h6.9a2.6 2.6 0 0 0 .3-5.2 3.6 3.6 0 0 0-6.9-.6 2.9 2.9 0 0 0-.3 5.8Z" />
        <path d="M5.5 11.5l-.7 2M8.3 11.5l-.7 2M11.1 11.5l-.7 2" />
      </>
    ),
  },
  snow: {
    day: (
      <>
        <path d="M4.6 9.5h6.9a2.6 2.6 0 0 0 .3-5.2 3.6 3.6 0 0 0-6.9-.6 2.9 2.9 0 0 0-.3 5.8Z" />
        <path d="M5.3 12.3h.01M8 13.6h.01M10.7 12.3h.01" strokeWidth="2" />
      </>
    ),
  },
  storm: {
    day: (
      <>
        <path d="M4.6 9.5h6.9a2.6 2.6 0 0 0 .3-5.2 3.6 3.6 0 0 0-6.9-.6 2.9 2.9 0 0 0-.3 5.8Z" />
        <path d="M8.6 10.2 7.1 12.4h2l-1.5 2.3" />
      </>
    ),
  },
};

export default function WeatherIcon({ icon, isDay, className }) {
  const set = shapes[icon] ?? shapes.cloud;
  // Not every icon has a night version; fall back to the day one.
  const shape = isDay ? set.day : (set.night ?? set.day);

  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shape}
    </svg>
  );
}

// Shown when there's no weather (still loading, or the request failed).
export function PinIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 14.5s4.5-4.1 4.5-7.7a4.5 4.5 0 0 0-9 0c0 3.6 4.5 7.7 4.5 7.7Z" />
      <circle cx="8" cy="6.8" r="1.5" />
    </svg>
  );
}
