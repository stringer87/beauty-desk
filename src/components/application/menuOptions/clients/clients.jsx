import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import clientList from '../components/clientList.jsx'
const { SearchBar, CardWrapper, ClientWrapper } = require('./clientsStyles')

function Clients() {
  const [clientData, setClientData] = useState([])

    //test list to be replaced with user object client list
  const list = [2019,2020,2022,2021,2030,2025]
  const handleGetClients = () => {
    //testing for database searching
    axios.get('http://54.151.69.19:5252/getClients', { params: { list: list } })
      .then(({ data }) => setClientData(data))
      .catch((err) => console.log(err))
  }
  const handleGetClient = (id) => {
    if(id){
      id = parseInt(id);
      axios.get('http://54.151.69.19:5252/getClient', { params : {id: id}})
      .then(({data}) => {console.log(data)})
      .catch((err) => console.log(err))
    }
  }
  const onClick = (e) => {
    const id = e.target.id
    handleGetClient(id)
  }
  window.addEventListener('click', onClick)

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