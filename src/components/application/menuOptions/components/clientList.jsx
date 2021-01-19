import React from 'react';
const {ListWrapper} = require('../styledComponents/clientListCard')
function clientList (client){
  return (<ListWrapper key={client._id}>
    <span>{client.firstName} {client.lastName}</span>
  </ListWrapper>)
}

export default clientList;