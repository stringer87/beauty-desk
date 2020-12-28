import React, { useState, useRef } from 'react';
const { SearchBar, SearchBarWrapper } = require('./clientsStyles')
function Clients() {

  return <>
    <SearchBarWrapper >
      <SearchBar />
    </SearchBarWrapper>
  </>
}

export default Clients