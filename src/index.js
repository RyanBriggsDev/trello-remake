import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import './styles/nav.css';
import './styles/button.css';
import './styles/form.css';
import './styles/dashboard.css';
import './styles/videoModal.css';
import './styles/demos.css';
import './styles/cards.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);