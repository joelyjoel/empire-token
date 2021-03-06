import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


const overlay = document.createElement('div');
overlay.className = 'react-overlay';
document.body.append(overlay);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  overlay,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
