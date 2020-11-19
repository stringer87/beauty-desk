import React, { useState, useContext } from 'react';
import { DisplayContext } from '../context/displayContext.jsx';

const { RegisterWrapper, Input, Logo, Button, ButtonWrapper } = require('./registerStyles')
function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [display, setDisplay] = useContext(DisplayContext);

  const handleRegisterUpdate = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setRegisterInfo((current) => ({ ...current, [name]: value }))
  }

  const handelClick = (e) => {
    let name = e.target.name;
    if (name === 'cancel') {
      setDisplay((current) => ({ ...current, login: true, register: false }))
    }
    if (name === 'submit') {
      console.log('Registration sent', registerInfo)

    }

  }

  return <>
    <RegisterWrapper>
      <Logo src="./src/img/BeautyDeskv2.png" onChange={handleRegisterUpdate} />
      <Input name="firstName" placeholder="First Name" onChange={handleRegisterUpdate} />
      <Input name="lastName" placeholder="Last Name" onChange={handleRegisterUpdate} />
      <Input name="email" placeholder="Email" onChange={handleRegisterUpdate} />
      <Input name="password" placeholder="Password" type="password" onChange={handleRegisterUpdate} />
      <ButtonWrapper>
        <Button name="cancel" onClick={handelClick}>Cancel</Button>
        <Button name="submit" onClick={handelClick}>Submit</Button>
      </ButtonWrapper>
    </RegisterWrapper>
  </>
}

export default Register;