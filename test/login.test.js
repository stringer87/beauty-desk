import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'


import Login from '../src/components/login/Login.jsx'
import { DisplayProvider } from '../src/components/context/displayContext.jsx'
import { UserProvider } from '../src/components/context/userContext.jsx'


test('Login Content Test', () => {
  const root = document.createElement('div')

  let App = (<DisplayProvider>
    <UserProvider>
      <Login />
    </UserProvider>
  </DisplayProvider>)
  ReactDOM.render(App, root)
  expect(root.querySelector('#nameInput'))
  expect(root.querySelector('#passwordInput'))
  expect(root.querySelector('#login').textContent).toBe('Login')
  expect(root.querySelector('#register').textContent).toBe('Register')
})

