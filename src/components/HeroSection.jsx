
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import React from 'react'

function HeroSection () {
  return (
    <div className='hero-container'>
    <video src='/videos/movie2.mp4' autoPlay loop muted />
    <h1>Creating Greater Designs</h1>
    <p>Welcome to Viccinini Media $ Markrtings Group</p>
    <div className='hero-btns'>
      <Button className='btns'
       buttonStyle='btn--outline' 
       buttonSize='btn-large
       '>
        GET STARTED
      </Button>
      <Button className='btns'
       buttonStyle='btn--primary'
        buttonSize='btn-large'>
        WATCH TRAILER <i className='fas fa-play-circle'/>
      </Button>
    </div>
  </div>
  )
}

export default HeroSection

