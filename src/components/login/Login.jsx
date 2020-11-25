import React, { useState, useContext } from 'react';
import { DisplayContext } from '../context/displayContext.jsx';
import axios from 'axios';

const { Email, Password } = require('../validation');
const { LoginWrapper, Input, Logo, Form, Button, ButtonWrapper, ErrorMSG } = require('./loginStyles');

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '', password: ''
  })
  const [display, setDisplay] = useContext(DisplayContext);
  const [errMSG, setErrMSG] = useState(false);

  const handelUpdate = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLoginInfo((current) => ({ ...current, [name]: value }))
  }

  const handelLogin = () => {
    if (loginInfo.email && loginInfo.password) {
      if (Email(loginInfo.email) && Password(loginInfo.password)) {
        axios.get('http://localhost:5252/login', { params: loginInfo })
          .then(({ data }) => {
            if (data) {
              setDisplay((current) => ({ ...current, login: false, welcome: true }))
            } else {
              setErrMSG(true);
            }
          })
          .catch((err) => console.error(err))
      } else {
        setErrMSG(true)
      }
    }
  }

  const handleRegister = () => {
    setDisplay((current) => ({ ...current, login: false, register: true }))
  }

  return <>
    < LoginWrapper >
      <Logo src="./src/img/BeautyDeskv2.png" />
      <Input name="email" placeholder="email" onChange={handelUpdate} />
      <Input name="password" placeholder="password" type="password" onChange={handelUpdate} />
      <ButtonWrapper>
        <Button onClick={handelLogin}>Login</Button>
        <Button onClick={handleRegister}>Register</Button>
        {errMSG && <ErrorMSG>Login or password incorrect</ErrorMSG>}
      </ButtonWrapper>
    </LoginWrapper >
  </>
}

export default Login;

