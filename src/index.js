import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './routes/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);