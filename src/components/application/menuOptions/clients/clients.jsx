import React, { useState, useRef } from 'react';
import axios from 'axios';

const { SearchBar, SearchBarWrapper } = require('./clientsStyles')
function Clients() {

  const handleGetClients = () => {
    axios.get('http://54.151.69.19:5252/getClients', { params: { list: [2019, 2020] } })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err))
  }

  return <>
    <SearchBarWrapper >
      <SearchBar />
      <button onClick={handleGetClients}>getClients</button>
    </SearchBarWrapper>
  </>
}

export default Clients