import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Header />, document.getElementById('root'));

serviceWorker.unregister();
