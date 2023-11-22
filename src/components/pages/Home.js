import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer'
import { useLocation, useNavigate } from 'react-router'

function Home() {
  const location=useLocation()
  return (
    <>
    {location.state}
      <HeroSection/>
      <Cards />
      <Footer />
    
    </>
  )
}

export default Home