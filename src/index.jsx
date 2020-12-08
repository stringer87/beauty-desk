import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx'
import { DisplayProvider } from './components/context/displayContext.jsx'
import { UserProvider } from './components/context/userContext.jsx'
let render = document.getElementById('app');


ReactDOM.render(
  <DisplayProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </DisplayProvider>
  , render)