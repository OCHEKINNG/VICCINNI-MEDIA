import React from 'react'
// import React, { useState} from 'react'
// import axios from 'axios'
// import { useNavigate, Link } from 'react-router-dom'
import '../../App.css'
import '../../components/contact.css'

function Contact() {
  return (
    <div className='hero'>

    <form>
        <h1>CONTACT US</h1>
        <div className="row">
        <div className="input-group">
        <input type="text" id='name' required/>
        <label htmlFor="name"><i className='fas fa-user'></i> Your Name</label>
        </div>
        <div className="input-group">
        <input type="tel"  id='number' required/>
        <label htmlFor="number"><i className='fas fa-phone-square-alt'></i> Phone No.</label>
        </div>
        </div>
        <div className="input-group">
        <input type="email"  id='email' required/>
        <label htmlFor="email"><i className='fas fa-envelope'></i> Your Email</label>
        </div>
        <div className="input-group">
        <textarea id='message'  required></textarea>
        <label htmlFor="message"><i className='fas fa-comments'></i> Your Message</label>
        </div>
        <button type='submit' 
        >SUBMIT<i className='fas fa-paper-plane'></i> </button>
    </form>
</div>
  )
}

export default Contact