import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <React.StrictMode>
    <Router><App/></Router>
  </React.StrictMode>
);
