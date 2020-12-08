import React, { useState, useEffect } from 'react';
const { MenuWrapper, Button, Icon } = require('./menuStyles')
function Menu() {
  const [width, setWidth] = useState(window.innerWidth);
  const handelResize = () => {
    setWidth(window.innerWidth)
  }

  // useEffect(() => {
  //   window.resizeTo(200, 200)
  // }, [])
  window.addEventListener('resize', handelResize)
  return <MenuWrapper>
    {(width < 950) ? <Button><Icon src="./src/img/menuIcons/client.png" /></Button> : <Button>Clients</Button>}
    {(width < 950) ? <Button><Icon src="./src/img/menuIcons/pending.png" /></Button> : <Button>Pending Clients</Button>}
    {(width < 950) ? <Button><Icon src="./src/img/menuIcons/reviews.png" /></Button> : <Button>Client Reviews</Button>}
    {(width < 950) ? <Button><Icon src="./src/img/menuIcons/calendar.png" /></Button> : <Button>Calendar</Button>}
    {(width < 950) ? <Button><Icon src="src/img/menuIcons/messages.png" /></Button> : <Button>Messages</Button>}
  </MenuWrapper>
}

export default Menu;