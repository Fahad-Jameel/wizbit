// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Global.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1PCf3fv0XKE/cXbKuW3JkKiLJ5Y5e9bI5x4kqzP09miJ9+/1u+aDbnaZZT78a5AbPpN3cGxIFH/XN1zOBK6Ogw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);