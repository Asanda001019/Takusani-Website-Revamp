import React from 'react';
import Navbar from './Navbar';  // Navbar is inside Layout
import SponsorSection from './SponsorSection';  // Sponsors section component
import Footer from './Footer';  // Footer component

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Sponsors Section */}
      <SponsorSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
