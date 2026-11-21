import { useCallback, useEffect, useRef, useState } from 'react';

/*
  useCopyToClipboard: copies text and remembers, for a moment, that it did.

    const { copied, copy } = useCopyToClipboard();
    <button onClick={() => copy('hello')}>{copied ? 'Copied!' : 'Copy'}</button>

  `copied` flips to true, then back to false after `resetAfter` ms,
  which is exactly what a "Copied!" message needs.
*/
export function useCopyToClipboard(resetAfter = 2000) {
  const [copied, setCopied] = useState(false);
  // useRef stores a value that survives re-renders without causing one.
  // Perfect for a timer id we only need for cleanup.
  const timeoutRef = useRef();

  // If the component disappears while the timer runs, cancel it.
  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const copy = useCallback(
    async (text) => {
      try {
        // The Clipboard API only works on https (or localhost) and can be
        // blocked by the browser, so it may throw.
        await navigator.clipboard.writeText(text);
        setCopied(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), resetAfter);
        return true;
      } catch {
        return false;
      }
    },
    [resetAfter],
  );

  return { copied, copy };
}
