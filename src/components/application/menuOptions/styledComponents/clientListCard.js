import styled from 'styled-components';

export const ListWrapper = styled.div `
  @media screen and (min-width: 950px){
    width: 600px;
  }
  color: #133B66;
  width: 200px;
  display: flex;
  justify-content: center;
  margin: 2px;
  padding: 10px;
  box-shadow: 0px 0px 5px 0px #133B66;
  
-webkit-animation: swing-in-top-fwd 2000ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
        animation: swing-in-top-fwd 2000ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
@-webkit-keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
}
@keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
}
`;