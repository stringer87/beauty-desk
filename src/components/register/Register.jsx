import React, { useState, useContext } from 'react';
import { DisplayContext } from '../context/displayContext.jsx';
import axios from 'axios'

const { RegisterWrapper, Input, Logo, Button, ButtonWrapper } = require('./registerStyles')
function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  //state for current display
  const [display, setDisplay] = useContext(DisplayContext);


  //update state for registration input data
  const handleRegisterUpdate = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setRegisterInfo((current) => ({ ...current, [name]: value }))
  }

  //handle button click events
  const handelClick = (e) => {
    let name = e.target.name;
    if (name === 'cancel') {
      setDisplay((current) => ({ ...current, login: true, register: false }))
    }
    if (name === 'submit') {
      axios.post('http://localhost:5252/register', { params: registerInfo })
        .then(({ data }) => { alert(emailVal(registerInfo.email)) })
        .catch((err) => console.error(err))
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


const emailVal = (email) => {
  const reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return reg.test(email);
}

const nameVal = (name) => {
  const reg = /^[a-zA-Z]*$/;
  return reg.test(name);
}

export default Register;