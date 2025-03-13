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
import SponsorSection from './components/SponsorSection'
import TrainingPrograms from "./components/TrainingProgram"
import SkillsDevelopment from "./components/SkillsDevelopment"
import ESD from "./components/ESD"
import EAP from "./components/EAP"

function App() {
 

  return (
    <>
    
    <HomePage /> 
    <br />
    <AboutUsSection />
    <br />
    <MainAbout />
    <br />
    <AboutUs/>
    <br/>
    {/* <OurServices />
    <br /> */}
    <ServicesCards />
    <br />
    {/* <EachService />
    <br />   */}
<TrainingPrograms/>
    <br></br>

    <SkillsDevelopment/>
    <br></br>
    <ESD/>
    <br/>
    <EAP/>
    <br/>
    {/* <Features />
    <br /> */}
    <ContactUs />
    <br />  
    {/* <ContactSection />
    <br /> */}
   
    
    <SponsorSection />
    <br /> 
    <Footer />
    </>
  )
}

export default App
