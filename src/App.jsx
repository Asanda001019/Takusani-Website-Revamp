import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router
import './App.css';

// Import Components
import HomePage from './components/HomePage';
import AboutUsSection from './components/AboutUsSection';
import MainAbout from './components/MainAbout';
import TrainingPrograms from './components/TrainingProgram';
import SkillsDevelopment from './components/SkillsDevelopment';
import ESD from './components/ESD';
import EAP from './components/EAP';
import Layout from './components/Layout'; // Layout component that includes Navbar, Footer, and Sponsors
import ContactUs from './components/ContactUs';
import ServicesCards from './components/ServicesCards';
import JobListingPage from "./components/JobListingPage";

//CMS
import CMS from "./cmspages/CMS";
import LoginCMS from "./cmspages/LoginCMS";
import UsersCMS from "./cmspages/UsersCMS";
import JobPostForm from "./cmspages/JobPostForm";

function App() {
  return (
    <Router>

    <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsSection />} />
          <Route path="mainabout" element={<MainAbout />} />
          <Route path="JobListingPage" element={<JobListingPage />} />
      
          <Route path='servicescard' element={<ServicesCards />} />
          <Route path="training" element={<TrainingPrograms />} />
          <Route path="skillsdevelopment" element={<SkillsDevelopment />} />
          <Route path="esd" element={<ESD />} />
          <Route path="eap" element={<EAP />} />
          <Route path="contactus" element={<ContactUs />} />
          
          </Route>
   

            <Route path="/CMS" element={<CMS />}>
            <Route index element={<LoginCMS />} />
            <Route path="UsersCMS" element={<UsersCMS />} />
            <Route path="JobPostForm" element={<JobPostForm />} />
         
          </Route>
        </Routes>
       
      </Router>

  );
}

export default App;
