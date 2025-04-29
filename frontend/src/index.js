import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import your global styles here
import App from './App';
import reportWebVitals from './reportWebVitals';

// Get the root element to render your app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optionally, if you want to measure performance, pass a function like this:
reportWebVitals(console.log);  // This will log the web vitals to the console
