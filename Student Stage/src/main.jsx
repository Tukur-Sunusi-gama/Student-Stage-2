import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 

// 🚨 THIS IMPORT IS CRITICAL 🚨
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Make sure you also install the Bootstrap Icons dependency for the icons to work:
import 'bootstrap-icons/font/bootstrap-icons.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);