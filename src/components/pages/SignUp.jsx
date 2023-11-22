// import React from 'react'
import '../../App.css'
import React, { useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import '../../components/sign-up.css'


function SignUp() {

  const history=useNavigate();


  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/sign-up",{
        email,password
      })
      .then(res=>{
        if(res.data="exist"){
          alert("User already exists")
          history("/home",{state:{id:email}})
        }
        else if(res.data="notexist"){
          alert("User have not sign up")
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }

  
  return (
    
      <div className='sign-up-form'>
              <i className='fas fa-user'></i>
              <h1>Sign Up Now</h1>
              <form action='POST'>
               <input type="email" onChange={(e) => {setEmail(e.target.value) }} className='input-box' placeholder='Your Email' required/>
               <input type="password"onChange={(e) => {setPassword(e.target.value) }} className='input-box' placeholder='Your Password' required/>
               <p><span><input type="checkbox" required/></span>I agree to the terms of services</p>
               <input type='submit' onClick={submit} className='signup-btn' />
               <hr />
               <p className='or'>OR</p>
               <br />
              <button type='button' className='facebook-btn'>Login with FaceBook</button>
               <p>Do you have an account ? <Link to="/login">Login</Link></p>
           </form>
      </div>

  )
}

export default SignUp