import React, { useContext } from 'react';
import { UserContext } from '../context/userContext.jsx';
import { MainViewProvider } from '../context/mainViewContext.jsx'
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
      <MainViewProvider>
        <Menu />
        <MainView />
      </MainViewProvider>
    </ViewWrapper>
  </>
}

export default Application;