import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './globals.css'
import './Navigation.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="app-root">
      <App />
    </div>
  </React.StrictMode>,
)
