import React, { useState, createContext } from 'react';

export const MainViewContext = createContext();


export const MainViewProvider = (props) => {
  const [display, setDisplay] = useState({
    clients: true,
    pendingClients: false,
    clientReviews: false,
    calendar: false,
    messages: false,
    current: 'clients'
  })

  return (
    <MainViewContext.Provider value={[display, setDisplay]}>
      {props.children}
    </MainViewContext.Provider>
  )
}