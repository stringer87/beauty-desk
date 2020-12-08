import React, { useState, createContext } from 'react';

export const DisplayContext = createContext();


export const DisplayProvider = (props) => {
  const [display, setDisplay] = useState({
    login: false,
    register: false,
    application: true,
  })

  return (
    <DisplayContext.Provider value={[display, setDisplay]}>
      {props.children}
    </DisplayContext.Provider>
  )
}