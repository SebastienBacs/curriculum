import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from '@/App';
import '@/index.css';

// Safely get the root element with a non-null assertion
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
