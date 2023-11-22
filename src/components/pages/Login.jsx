import '../../App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import '../../components/sign-up.css'

function Login() {

  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/",{
        email,password
      })
      .then(res=>{
        if(res.data="exist"){
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
    <h1>LogIn</h1>
    <form action='POST'>
     <input type="email" onChange={(e) => {setEmail(e.target.value) }} className='input-box' placeholder='Your Email' required/>
     <input type="password"onChange={(e) => {setPassword(e.target.value) }} className='input-box' placeholder='Your Password' required/>
     <button type='button' onChange={submit} className='facebook-btn'>Login</button>
 </form>

 <br />
 <p>OR</p>
 <br />

 <p>You don't have an account ? <Link to="/sign-up">SignUp</Link></p>

</div>
  )
}

export default Login