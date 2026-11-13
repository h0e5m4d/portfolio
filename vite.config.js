import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite is the dev server and build tool.
// The React plugin lets Vite understand JSX and enables instant
// "hot reload" (edits show up in the browser without a full refresh).
export default defineConfig({
  plugins: [react()],
});
