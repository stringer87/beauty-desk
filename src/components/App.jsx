import React, { useContext, useEffect } from 'react';
import Login from './login/Login.jsx'
import Register from './register/Register.jsx'
import { DisplayProvider, DisplayContext } from './context/displayContext.jsx'
function App() {
  const [display, setDisplay] = useContext(DisplayContext);

  return (<>
    {display.login && <Login />}
    {display.register && <Register />}
  </>)
}


export default App;