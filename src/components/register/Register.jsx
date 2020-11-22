import React, { useState, useContext } from 'react';
import { DisplayContext } from '../context/displayContext.jsx';
import axios from 'axios'

const { RegisterWrapper, Input, Logo, Button, ButtonWrapper, ErrorMSGFirst, ErrorMSGLast, ErrorMSGEmail, ErrorMSGPass} = require('./registerStyles')
function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [errorMSGS, setErrorMSGS] = useState({
    first: false,
    last: false,
    email: false,
    pass:false
  })

  //validation for password
  const passVall = (pass) => {
    let res = false;
    const reg = /^[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,16}$/;
    res = reg.test(pass);
    setErrorMSGS((current) => ({...current, pass: !res}))
    return res;
  }
  
  //validation for email
  const emailVal = (email) => {
    //need to query database to verify if email is used already
    //axios.get('http://localhost:5252/register/email')
    const reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let res = reg.test(email);
    setErrorMSGS((current)=> ({...current, email: !res}))
    return res;
  }
  
  //validation for names
  const nameVal = (name, pos) => {
    const reg = /^[a-zA-Z]*$/;
    let res = reg.test(name);
    if(pos === 'first'){
      if(name === ''){
        setErrorMSGS((current) => ({...current, first: res}))
      } else {
        setErrorMSGS((current) => ({...current, first: !res}))
      }
    }
    if(pos === 'last'){
      if(name === ''){
        setErrorMSGS((current) => ({...current, last: res}))
      } else {
        setErrorMSGS((current) => ({...current, last: !res}))
      }
    }
    return res;
  }

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
    let validIn = true;
    if (name === 'cancel') {
      setDisplay((current) => ({ ...current, login: true, register: false }))
    }
    if (name === 'submit') {

      if(!passVall(registerInfo.password) || !nameVal(registerInfo.lastName, 'last') || !nameVal(registerInfo.firstName, 'first') ||!emailVal(registerInfo.email)){
        validIn = false;
      }

      if(validIn){
        axios.post('http://localhost:5252/register', { params: registerInfo })
          .then(({ data }) => { console.log('valid inputs recorded') })
          .catch((err) => console.error(err))

      } else{
        alert('error')
      }
    }

  }

  return <>
    <RegisterWrapper>
      <Logo src="./src/img/BeautyDeskv2.png" onChange={handleRegisterUpdate} />
      <Input name="firstName" placeholder="First Name" onChange={handleRegisterUpdate} />
{errorMSGS.first && <ErrorMSGFirst>Must be a vaild first name</ErrorMSGFirst>}
      <Input name="lastName" placeholder="Last Name" onChange={handleRegisterUpdate} />
{ errorMSGS.last && <ErrorMSGLast>Must be a valid last name</ErrorMSGLast>}
      <Input name="email" placeholder="Email" onChange={handleRegisterUpdate} />
{ errorMSGS.email &&<ErrorMSGEmail>Must be a valid email address</ErrorMSGEmail>}
      <Input name="password" placeholder="Password" type="password" onChange={handleRegisterUpdate} />
{errorMSGS.pass &&<ErrorMSGPass>Must be a valid password</ErrorMSGPass>}
      <ButtonWrapper>
        <Button name="cancel" onClick={handelClick}>Cancel</Button>
        <Button name="submit" onClick={handelClick}>Submit</Button>
      </ButtonWrapper>
    </RegisterWrapper>
  </>
}


export default Register;