import { useEffect, useState } from 'react';

const REFRESH_EVERY_MS = 15 * 60 * 1000; // Open-Meteo updates every 15 minutes

/*
  useWeather: current weather for a place, from Open-Meteo.

  Open-Meteo is free and needs no API key. That matters: anything in
  front-end code is visible to every visitor, so a secret key here would
  be public.

  Returns { status, data }:
    status 'loading' → first request still running
    status 'ready'   → data = { temperature, code, isDay }
    status 'error'   → request failed and we have nothing to show

  A failed refresh keeps the last good data instead of wiping it.
*/
export function useWeather({ latitude, longitude }) {
  const [state, setState] = useState({ status: 'loading', data: null });

  useEffect(() => {
    let controller;

    async function load() {
      // AbortController lets us cancel a request that's still running,
      // e.g. if the component disappears before the answer arrives.
      controller?.abort();
      controller = new AbortController();

      const url =
        'https://api.open-meteo.com/v1/forecast' +
        `?latitude=${latitude}&longitude=${longitude}` +
        '&current=temperature_2m,weather_code,is_day';

      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);
        const json = await response.json();
        const current = json.current;

        setState({
          status: 'ready',
          data: {
            temperature: Math.round(current.temperature_2m),
            code: current.weather_code,
            isDay: current.is_day === 1,
          },
        });
      } catch (error) {
        if (error.name === 'AbortError') return; // we cancelled it ourselves
        // Keep old data if we have it; otherwise report the error.
        setState((previous) => (previous.data ? previous : { status: 'error', data: null }));
      }
    }

    load();
    const intervalId = setInterval(load, REFRESH_EVERY_MS);

    return () => {
      clearInterval(intervalId);
      controller?.abort();
    };
  }, [latitude, longitude]);

  return state;
}
