import React from 'react';
import {Link} from 'react-router-dom';
import { User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full">
      <div className style={{ backgroundColor: 'rgb(11, 18, 75)' }}>
        <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-100 sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-2/12 border-r">
            <div className="text-sm uppercase text-gray-100 font-bold">Menu</div>
            <ul>
              <li className="my-2">
                <a className="hover:text-gray-100" href="/">Home</a>
              </li>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="MainAbout">About</a>
              </li>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="servicescard">Services</a>
              </li>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="contactus">Contact</a>
              </li>
            </ul>
          </div>
          <div className="p-5 sm:w-7/12 border-r text-center">
            <h3 className="font-bold text-xl text-gray-100 mb-4">Takusani Group</h3>
            <p className="text-gray-100 text-sm mb-10">
              Takusani Group is a leading preferred Skills Development, Training and Enterprise Supplier Development company.
            </p>
            <Link
            to="/CMS"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
            }}
          >
            <User size={16} />
            Staff Sign In
          </Link>
          </div>
          <div className="p-5 sm:w-3/12">
            <div className="text-sm uppercase text-gray-100 font-bold">Contact Us</div>
            <ul>
              {/* Address */}
              <li className="my-2 flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded text-yellow-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-100">No. 11 Business Suite, 8 Incubation Drive, Riverside View, Fourways, 2021</p>
                </div>
              </li>

              {/* Phone */}
              <li className="my-2 flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded text-yellow-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-100 ">+27 10 634 0505</p>
                </div>
              </li>


              {/* Email */}
              <li className="my-2 flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded text-yellow-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M12 12L2 4h20z"></path>
                    <path d="M2 4v16l10 8 10-8V4z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-100">info@takusani.co.za</p>
                </div>
              </li>


              {/* Working Hours */}
            
            </ul>
          </div>
        </div>
        <div className="flex py-5 m-auto text-yellow-300 text-sm flex-col items-center border-t max-w-screen-xl">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
        
          <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A35140185&keywords=takusani%20group&origin=RICH_QUERY_SUGGESTION&position=0&searchId=a7906b37-cc7c-4f72-a1d0-c4ca4b613c63&sid=(Ia&spellCorrectionEnabled=false" className="w-8 h-8 mx-2 flex items-center justify-center bg-yellow-300 rounded-full cursor-pointer hover:bg-indigo-600 transition-colors duration-300">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <text x="50%" y="50%" font-size="14" text-anchor="middle" dy=".3em" fill="white" font-family="Arial, sans-serif" font-weight="bold">L</text>
  </svg>
</a>



        
          </div>
          <div className="my-5">© Copyright 2025. All Rights Reserved.</div>
    
        </div>
      </div>
    </footer>
  );
};

export default Footer;
