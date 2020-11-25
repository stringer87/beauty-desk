import styled from 'styled-components';

export const RegisterWrapper = styled.div`
width: 300px;
height: 420px;
margin: auto;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
border-radius: 15px;
padding: 10px;
box-shadow: 0px 0px 20px 0px #133B66;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const Input = styled.input`
padding:8px;
font-size: 18px;
margin: 9px;
`;

export const Logo = styled.img`
width: 150px;
height: 150px;
margin: auto;
top: 0;
left: 0;
bottom: 0;
right: 0;
`;

export const Button = styled.button`
font-size: 18px;
padding: 8px;
min-width:90px;
margin-left: 15px;
margin-right: 15px;
margin-top:7px;
margin-bottom:7px;
`;
export const ButtonWrapper = styled.div`
display:flex;
justify-content: center;
`;

export const ErrorMSGFirst = styled.p`
position: absolute;
color: red;
transform: translate(15px, -12px);
`;

export const ErrorMSGLast = styled.p`
position: absolute;
color: red;
transform: translate(15px, 46px);
`;
export const ErrorMSGEmail = styled.p`
position: absolute;
color: red;
transform: translate(15px, 105px);
`;
export const ErrorMSGPass = styled.p`
position: absolute;
color: red;
transform: translate(15px, 163px);
`;