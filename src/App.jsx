import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router
import './App.css';

// Import Components
import HomePage from './components/HomePage';
import AboutUsSection from './components/AboutUsSection';
import MainAbout from './components/MainAbout';
import AboutUs from './components/AboutUs';
import TrainingPrograms from './components/TrainingProgram';
import SkillsDevelopment from './components/SkillsDevelopment';
import ESD from './components/ESD';
import EAP from './components/EAP';
import Layout from './components/Layout'; // Layout component that includes Navbar, Footer, and Sponsors
import ContactUs from './components/ContactUs';
import ServicesCards from './components/ServicesCards';
import JobPostList from "./components/JobPostsDisplay";

//CMS
import Dashboard from "./cms/Dashboard";
import LoginForm from "./cms/Login";
import AdminUserForm from "./cms/AdmniUserForm";
import JobPostForm from "./cms/JobPostForm";

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

<Route path="/AboutUs" element={<AboutUs />} />
<Route path='/servicescard' element={<ServicesCards />} />

          <Route path="/training" element={<TrainingPrograms />} />
          <Route path="/skillsdevelopment" element={<SkillsDevelopment />} />
          <Route path="/esd" element={<ESD />} />
          <Route path="/eap" element={<EAP />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/JobPostsDisplay" element={<JobPostList/>} />
        </Routes>
      </Layout>   
<Routes>
<Route path="/cms" element={<Dashboard />} />
<Route path="/cms/Login" element={<LoginForm />} />
<Route path="/cms/JobPostForm" element={<JobPostForm />} />
<Route path="/cms/AdminUserForm" element={<AdminUserForm />} />
</Routes>




    </Router>

  );
}

export default App;
