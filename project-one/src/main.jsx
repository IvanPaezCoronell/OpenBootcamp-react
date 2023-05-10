import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import AppRoutingOne from './AppRoutingOne';
import AppRoutingFinal from './AppRoutingFinal';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutingFinal />
  </React.StrictMode>,
)
