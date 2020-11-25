import React, { useState, useContext } from 'react';
import { DisplayContext } from '../context/displayContext.jsx';
import { UserContext } from '../context/userContext.jsx';
import axios from 'axios'

const { Password, Name, Email } = require('../validation/')
const { RegisterWrapper, Input, Logo, Button, ButtonWrapper, ErrorMSGFirst, ErrorMSGLast, ErrorMSGEmail, ErrorMSGPass } = require('./registerStyles')
function Register() {
  //state for user input
  const [registerInfo, setRegisterInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  //state for error message flags
  const [errorMSGS, setErrorMSGS] = useState({
    first: false,
    last: false,
    email: false,
    pass: false
  })

  //state for current display
  const [display, setDisplay] = useContext(DisplayContext);
  //state for userInfo
  const [user, setUser] = useContext(UserContext)

  //validation for password
  const passVal = (pass) => {
    let res = Password(pass)
    setErrorMSGS((current) => ({ ...current, pass: !res }))
    return res;
  }

  //validation for email
  const emailVal = (email) => {
    let res = Email(email);
    setErrorMSGS((current) => ({ ...current, email: !res }))
    return res
  }

  //validation for names
  const nameVal = (name, pos) => {
    let res = Name(name)
    if (pos === 'first') {
      if (name === '') {
        setErrorMSGS((current) => ({ ...current, first: res }))
      } else {
        setErrorMSGS((current) => ({ ...current, first: !res }))
      }
    }
    if (pos === 'last') {
      if (name === '') {
        setErrorMSGS((current) => ({ ...current, last: res }))
      } else {
        setErrorMSGS((current) => ({ ...current, last: !res }))
      }
    }
    return res;
  }

  //update state for registration input data
  const handleRegisterUpdate = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setRegisterInfo((current) => ({ ...current, [name]: value }))
  }

  //handle button click events
  const handelClick = (e) => {
    let name = e.target.name;
    let validIn = true;
    if (name === 'cancel') {
      setDisplay((current) => ({ ...current, login: true, register: false }))
    }
    if (name === 'submit') {

      if (!passVal(registerInfo.password) || !nameVal(registerInfo.lastName, 'last') || !nameVal(registerInfo.firstName, 'first') || !emailVal(registerInfo.email)) {
        validIn = false;
      }

      if (validIn) {
        axios.get('http:localhost:5252/register/email', { params: { email: registerInfo.email } })
          .then(({ data }) => {
            if (data) {
              setErrorMSGS((current) => ({ ...current, email: true }))
            } else {
              axios.post('http://localhost:5252/register', { params: registerInfo })
                .then(({ data }) => {
                  setUser(data);
                  setDisplay((current) => ({ ...current, register: false, application: true }))
                })
                .catch((err) => console.error(err))
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }

  return <>
    <RegisterWrapper>
      <Logo src="./src/img/BeautyDeskv2.png" onChange={handleRegisterUpdate} />
      <Input name="firstName" placeholder="First Name" onChange={handleRegisterUpdate} />
      {errorMSGS.first && <ErrorMSGFirst>Must be a vaild first name</ErrorMSGFirst>}
      <Input name="lastName" placeholder="Last Name" onChange={handleRegisterUpdate} />
      {errorMSGS.last && <ErrorMSGLast>Must be a valid last name</ErrorMSGLast>}
      <Input name="email" placeholder="Email" onChange={handleRegisterUpdate} />
      {errorMSGS.email && <ErrorMSGEmail>Must be a valid email address</ErrorMSGEmail>}
      <Input name="password" placeholder="Password" type="password" onChange={handleRegisterUpdate} />
      {errorMSGS.pass && <ErrorMSGPass>Must be a valid password</ErrorMSGPass>}
      <ButtonWrapper>
        <Button name="cancel" onClick={handelClick}>Cancel</Button>
        <Button name="submit" onClick={handelClick}>Submit</Button>
      </ButtonWrapper>
    </RegisterWrapper>
  </>
}


export default Register;