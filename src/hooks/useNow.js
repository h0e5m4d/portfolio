import { useEffect, useState } from 'react';

/*
  useNow: returns the current time and re-renders once per second.

  Why not just setInterval(tick, 1000)?
  An interval drifts: it starts at whatever millisecond the page loaded,
  and browsers delay timers a little. The displayed seconds would change
  at a random moment, sometimes skipping one. Instead, each tick waits
  exactly until the next full second, so the clock flips in sync with
  your computer's clock.
*/
export function useNow() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let timeoutId;
    const msUntilNextSecond = () => 1000 - (Date.now() % 1000);

    const tick = () => {
      setNow(new Date());
      timeoutId = setTimeout(tick, msUntilNextSecond());
    };

    timeoutId = setTimeout(tick, msUntilNextSecond());
    // Cleanup: stop ticking when the component is removed.
    return () => clearTimeout(timeoutId);
  }, []);

  return now;
}
