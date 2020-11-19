import React, { useState, useContext } from 'react';
import { DisplayContext } from '../context/displayContext.jsx';
import axios from 'axios';

const { LoginWrapper, Input, Logo, Form, Button, ButtonWrapper } = require('./loginStyles');

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '', password: ''
  })
  const [display, setDisplay] = useContext(DisplayContext);

  const handelUpdate = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLoginInfo((current) => ({ ...current, [name]: value }))
  }

  const handelLogin = () => {
    axios.get('http://localhost:5252/login', { params: loginInfo })
      .then(({ data }) => alert(data))
      .catch((err) => console.error(err))
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
      </ButtonWrapper>
    </LoginWrapper >
  </>
}

export default Login;

