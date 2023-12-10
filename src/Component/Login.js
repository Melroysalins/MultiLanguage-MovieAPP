import React from 'react'
import Header from './Header'
import LoginForm from './LoginForm'
import "./Login.css";

const Login = () => {
  return (
    <div className='Login-page'>
       <Header/>
       <LoginForm/>
    </div>
  )
}

export default Login