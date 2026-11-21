import { useEffect } from 'react';

const SITE = 'Tu Linh Tran';

/*
  usePageTitle: sets the browser tab title for the current page.
    usePageTitle('Projects')  →  "Projects — Tu Linh Tran"
    usePageTitle()            →  "Tu Linh Tran — Product Design Student"
  Matters more than it looks: tab titles show up in browser history,
  bookmarks and when someone shares a link.
*/
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE}` : `${SITE} — Product Design Student`;
  }, [title]);
}
