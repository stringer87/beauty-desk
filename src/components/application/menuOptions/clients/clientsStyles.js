import styled from 'styled-components';

export const SearchBar = styled.input`
  padding: 8px;
  width: 300px;
  height: 20px;
  margin: auto;
  display: flex;
  justify-content: center;
@media screen and (min-width: 950px){
  width: 600px;
}
`
export const CardWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;
export const ClientWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-around;
`;