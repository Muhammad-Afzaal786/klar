import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './global.css'
//import './components/dnd/drag.scss'
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);


