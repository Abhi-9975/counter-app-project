import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// --- Vercel Analytics Import Correction ---
// For a React (Vite) app, use @vercel/analytics/react, not /next
import { Analytics } from "@vercel/analytics/react";

// --- Google Analytics 4 (GA4) Imports and Initialization ---
import ReactGA from 'react-ga4';

// IMPORTANT: Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID
// You obtained this in Step 1 of the previous instructions (it starts with 'G-')
const GA4_MEASUREMENT_ID = 'G-G-E0RBYL3VD8'; // <--- REPLACE THIS PLACEHOLDER!

// Initialize Google Analytics 4
ReactGA.initialize(GA4_MEASUREMENT_ID);

// Send an initial pageview for the root path when the app loads.
// This ensures that when someone first lands on your app, it's tracked as a page view.
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

// --- Render Your React App ---
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* Add the Vercel Analytics component here, typically at the root level */}
    <Analytics />
  </StrictMode>,
);
