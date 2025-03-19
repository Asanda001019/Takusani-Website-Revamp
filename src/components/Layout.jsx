import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Navbar from './Navbar';
import SponsorSection from './SponsorSection';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet /> {/* Replace children with Outlet */}
      </main>

      {/* Sponsors Section */}
      <SponsorSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;