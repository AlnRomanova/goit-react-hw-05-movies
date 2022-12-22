import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
    <App />
    <ToastContainer autoClose={2000} />
    </BrowserRouter>
  </React.StrictMode>
);
