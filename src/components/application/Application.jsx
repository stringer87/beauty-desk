import React, { useContext } from 'react';
import { UserContext } from '../context/userContext.jsx';
import Banner from './banner/Banner.jsx'
import Menu from './menu/Menu.jsx'
import MainView from './mainView/MainView.jsx'
import styled from 'styled-components';


const ViewWrapper = styled.div`
display:flex;
`;


function Application() {
  const [user, setUser] = useContext(UserContext)
  return <>
    <Banner />
    <ViewWrapper>
      <Menu />
      <MainView />
    </ViewWrapper>
  </>
}

export default Application;