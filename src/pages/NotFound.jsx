import { Link } from 'react-router-dom';

// Shown for any URL that doesn't exist (e.g. a typo in a link).
export default function NotFound() {
  return (
    <>
      <h1 className="label">404 — Page not found</h1>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </>
  );
}
