import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";

// import ReactDOM from 'react-dom/client';
//Reactバージョン18書き方
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

