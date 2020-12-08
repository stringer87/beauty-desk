import React, { useState, useContext } from 'react';
import { DisplayContext } from '../context/displayContext.jsx';
import { UserContext } from '../context/userContext.jsx';
import axios from 'axios';

const { Email, Password } = require('../validation');
const { LoginWrapper, Input, Logo, Form, Button, ButtonWrapper, ErrorMSG } = require('./loginStyles');

function Login() {
  //state for user input
  const [loginInfo, setLoginInfo] = useState({
    email: '', password: ''
  })

  //get state for display
  const [display, setDisplay] = useContext(DisplayContext);
  //get state for userInfo
  const [user, setUser] = useContext(UserContext)
  //state fore error message
  const [errMSG, setErrMSG] = useState(false);

  //update user input
  const handelUpdate = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLoginInfo((current) => ({ ...current, [name]: value }))
  }

  //handle Login request
  const handelLogin = () => {
    if (loginInfo.email && loginInfo.password) {
      if (Email(loginInfo.email) && Password(loginInfo.password)) {
        axios.get('http://localhost:5252/login', { params: loginInfo })
          .then(({ data }) => {
            if (data.equal) {
              setUser(data.userInfo)
              setDisplay((current) => ({ ...current, login: false, application: true }))
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

  //handle the register button
  const handleRegister = () => {
    setDisplay((current) => ({ ...current, login: false, register: true }))
  }

  return <>
    < LoginWrapper >
      <Logo id={"logo"} src="./src/img/BeautyDeskv2.png" />
      <Input id={"nameInput"} name="email" placeholder="email" onChange={handelUpdate} />
      <Input id={"passwordInput"} name="password" placeholder="password" type="password" onChange={handelUpdate} />
      <ButtonWrapper>
        <Button id={"login"} onClick={handelLogin}>Login</Button>
        <Button id={"register"} onClick={handleRegister}>Register</Button>
        {errMSG && <ErrorMSG>Login or password incorrect</ErrorMSG>}
      </ButtonWrapper>
    </LoginWrapper >
  </>
}

export default Login;

