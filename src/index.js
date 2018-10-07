import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();