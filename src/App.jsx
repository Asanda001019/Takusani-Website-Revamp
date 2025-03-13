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

function App() {
  return (
    <Router>
      <Layout> {/* Layout Component for Navbar, Sponsors, and Footer */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* About Section */}
          <Route path="/about" element={<AboutUsSection />} />
          <Route path="/mainabout" element={<MainAbout />} />

          {/* Service Sections */}
          <Route path="/training" element={<TrainingPrograms />} />
          <Route path="/skillsdevelopment" element={<SkillsDevelopment />} />
          <Route path="/esd" element={<ESD />} />
          <Route path="/eap" element={<EAP />} />

        <Route path="/contact" element={<ContactUs />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
