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
import ContactUs from './components/ContactUs'
import ContactSection from './components/ContactForm'
import Footer from './components/Footer'

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
    <br />
    <ContactUs />
    <br />  
    <ContactSection />
    <br />
    <Footer />
    
   
    </>
  )
}

export default App
