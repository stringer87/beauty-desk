import React, { useState, useContext } from 'react';
import Clients from '../menuOptions/clients/clients.jsx'
import PendingClients from '../menuOptions/pendingClients/pendingClients.jsx'
import ClientReviews from '../menuOptions/clientsReview/clientsReview.jsx'
import Calendar from '../menuOptions/calendar/calendar.jsx'
import Messages from '../menuOptions/messages/messages.jsx'
import { MainViewContext } from '../../context/mainViewContext.jsx'

const { MainViewWrapper } = require('./mainViewStyles')

function MainView() {
  const [display, setDisplay] = useContext(MainViewContext)
  return <MainViewWrapper>
    {display.clients && <Clients />}
    {display.pendingClients && <PendingClients />}
    {display.clientReviews && <ClientReviews />}
    {display.calendar && <Calendar />}
    {display.messages && <Messages />}
  </MainViewWrapper>
}

export default MainView;