import React, { useState, useRef } from 'react';
import axios from 'axios';

import clientList from '../components/clientList.jsx'
const { SearchBar, CardWrapper, ClientWrapper } = require('./clientsStyles')

function Clients() {
  const [clientData, setClientData] = useState([])
  const list = [2019,2020,2022,2021,2030,2025]
  const handleGetClients = () => {
    //testing for database searching
    axios.get('http://54.151.69.19:5252/getClients', { params: { list: list } })
      .then(({ data }) => setClientData(data))
      .catch((err) => console.log(err))
  }

  return <>
    <ClientWrapper>
      <button onClick={handleGetClients}>getClients</button>
        <SearchBar />
      <CardWrapper>
        {clientData.map((client) => (clientList(client)))}
      </CardWrapper>
    </ClientWrapper>
  </>
}

export default Clients