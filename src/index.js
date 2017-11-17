import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap-reboot.css';
import './css/bootstrap.css';
import './css/bootstrap-grid.css';
import './css/index.css';
import './css/navbar.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
