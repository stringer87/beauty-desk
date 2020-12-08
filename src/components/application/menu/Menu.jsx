import React, { useState, useEffect, useContext } from 'react';
import { MainViewContext } from '../../context/mainViewContext.jsx'
const { MenuWrapper, Button, Icon } = require('./menuStyles')
function Menu() {
  const [width, setWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useContext(MainViewContext);
  const handelResize = () => {
    setWidth(window.innerWidth)
  }

  // useEffect(() => {
  //   window.resizeTo(200, 200)
  // }, [])
  const handleMenu = (e) => {
    let name = e.target.name;
    let current = display.current;
    if (current !== name) {
      setDisplay((previous) => ({ ...previous, [name]: true, [current]: false, current: name }))
    }
  }
  window.addEventListener('resize', handelResize)
  return <MenuWrapper>
    {(width < 950) ? <Button name='clients' onClick={handleMenu}><Icon src="./src/img/menuIcons/client.png" /></Button> : <Button name='clients' onClick={handleMenu}>Clients</Button>}
    {(width < 950) ? <Button name='pendingClients' onClick={handleMenu}><Icon src="./src/img/menuIcons/pending.png" /></Button> : <Button name='pendingClients' onClick={handleMenu}>Pending Clients</Button>}
    {(width < 950) ? <Button name='clientReviews' onClick={handleMenu}><Icon src="./src/img/menuIcons/reviews.png" /></Button> : <Button name='clientReviews' onClick={handleMenu}>Client Reviews</Button>}
    {(width < 950) ? <Button name='calendar' onClick={handleMenu}><Icon src="./src/img/menuIcons/calendar.png" /></Button> : <Button name='calendar' onClick={handleMenu}>Calendar</Button>}
    {(width < 950) ? <Button name='messages' onClick={handleMenu}><Icon src="src/img/menuIcons/messages.png" /></Button> : <Button name='messages' onClick={handleMenu}>Messages</Button>}
  </MenuWrapper>
}

export default Menu;