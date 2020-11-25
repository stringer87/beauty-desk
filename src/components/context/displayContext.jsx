import React, { useState, createContext } from 'react';

export const DisplayContext = createContext();


export const DisplayProvider = (props) => {
  const [display, setDisplay] = useState({
    login: true,
    register: false,
    welcome: false,
  })

  return (
    <DisplayContext.Provider value={[display, setDisplay]}>
      {props.children}
    </DisplayContext.Provider>
  )
}