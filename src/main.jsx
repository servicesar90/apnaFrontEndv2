import React from 'react';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom/client';
import "@fontsource/poppins"; // Defaults to 400 weight
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import { getDataStore } from './Redux/getDataStore';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={getDataStore}>
      <App />
    </Provider>

  </React.StrictMode>
);
