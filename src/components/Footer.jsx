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
                <a className="hover:text-indigo-600" href="servicescards">Services</a>
              </li>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="contact">Contact</a>
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
            <a href="#" className="w-6 mx-1">
              <svg className="fill-current cursor-pointer text-yellow-300 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"></path>
              </svg>
            </a>
            <a href="#" className="w-6 mx-1">
              <svg className="fill-current cursor-pointer text-yellow-300 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
              </svg>
            </a>
            <a href="#" className="w-6 mx-1">
              <svg className="fill-current cursor-pointer text-yellow-300 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path id="Instagram" d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562 -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0 -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375 -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938 -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125 0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0 2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0 1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125 0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813 -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068 -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204 -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068 0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204 0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z"></path>
              </svg>
            </a>
          </div>
          <div className="my-5">© Copyright 2025. All Rights Reserved.</div>
          <p>Asanda Madondo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
