import React from 'react'

import './App.css'
import AboutUs from './components/AboutUs'
import HomePage from './components/HomePage'
import AboutUsSection from './components/AboutUsSection'
import MainAbout from './components/MainAbout'
import OurServices from './components/OurServices'
import ServicesCards from './components/ServicesCards'
import EachService from './components/EachService'
import Features from './components/SECONDSERVICE'

function App() {
 

  return (
    <>
    
    <HomePage /> 
    <br />
    <AboutUsSection />
    <br />
    <MainAbout />
    <br />
    <OurServices />
    <br />
    <ServicesCards />
    <br />
    <EachService />
    <br />  
    <Features />
    
   
    </>
  )
}

export default App
