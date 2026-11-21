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
      const ok = (await copyModern(text)) || copyLegacy(text);
      if (ok) {
        setCopied(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), resetAfter);
      }
      return ok;
    },
    [resetAfter],
  );

  return { copied, copy };
}

// The modern Clipboard API. Only works on https (or localhost) and can be
// blocked by the browser, so it may throw.
async function copyModern(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

// Fallback for older or stricter browsers: put the text in a hidden
// textarea, select it, and use the old "copy" command.
function copyLegacy(text) {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    textarea.remove();
    return ok;
  } catch {
    return false;
  }
}
