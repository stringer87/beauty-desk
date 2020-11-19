import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx'
import { DisplayProvider, DisplayContext } from './components/context/displayContext.jsx'
let render = document.getElementById('app');


ReactDOM.render(<DisplayProvider><App /></DisplayProvider>, render)