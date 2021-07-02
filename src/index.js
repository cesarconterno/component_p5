import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import {AppFunc} from './components/App/AppFunc';

ReactDOM.render(
  <React.StrictMode>
    <div className="body">
      <App />
      <AppFunc />
     
    </div>


  </React.StrictMode>,
  document.getElementById('root')
);
