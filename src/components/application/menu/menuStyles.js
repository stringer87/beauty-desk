import styled from 'styled-components';

export const MenuWrapper = styled.div`
  @media screen and (min-width: 950px){
    width: 200px;
  }
    width: 50px;
    height: calc(100% - 215px);
    position: absolute;
    margin-top: 2px;
    z-index: auto;
    box-shadow: 0px 0px 5px 0px #133B66;
    display:flex;
    flex-direction: column;
`;

export const Button = styled.button`
  @media screen and (min-width: 950px){
    width: 198px;
    padding: 8px;
  }
    width: 48px;
    /* padding: 8px; */
    box-shadow: 0px 0px 5px 0px #133B66;
    background-color: #FFF;
    color: #133B66;
    border: none;
    :hover{
      background-color: #8DCAFF;
      color: #FFF;
      z-index: 200;
    }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;