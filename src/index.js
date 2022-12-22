import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const body=document.getElementById('root')

const root = ReactDOM.createRoot(body);
root.render(

  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>

  // </React.StrictMode>
);


