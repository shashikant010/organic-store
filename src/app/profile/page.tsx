"use client"


import { useState } from 'react';
import './App.css'

function App() {

  const [loginActive,setLoginActive]=useState(true)


function handleRegisterToggle(){
setLoginActive(false)
}
function handleLoginToggle(){
setLoginActive(true)
}

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
 
    <div className={`container ${loginActive?"":"active"} mt-5 `}  id="container">
  <div className="form-container sign-up">
    <form>
      <h1>Create Account</h1>
      <span>use your email for registeration</span>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="text" placeholder="Otp" className="hidden"/>
      <button>Sign Up</button>
    </form>
  </div>
  <div className="form-container sign-in">
    <form>
      <h1>Sign In</h1>
      <span>use your email password</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forget Your Password?</a>
      <button>Sign In</button>
    </form>
  </div>
  <div className="toggle-container">
    <div className="toggle">
      <div className="toggle-panel toggle-left">
        <h1>Welcome Back!</h1>
        <p>Enter your personal details to use all of site features</p>
        <button  id="login" onClick={handleLoginToggle}>
          Sign In
        </button>
      </div>
      <div className="toggle-panel toggle-right">
        <h1>Hello, Friend !</h1>
        <p>Register with your personal details to use all of site features</p>
        <button  id="register" onClick={handleRegisterToggle}>
          Sign Up
        </button>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default App
