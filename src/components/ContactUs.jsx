import React, { useState } from 'react';

export default function ContactUs() {
  // Form state
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    // Handle form submission logic here (e.g., send data to a server)
  };

  return (
    <div>
      <section className="bg-gray-100" id="contact"
      style={{ backgroundColor: 'rgb(11, 18, 75)' }} >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Contact
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-black text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">We are ready to support you.</p>
            </div>
          </div>


            {/* Google Map Section */}
      <div className="mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.2813228138843!2d28.019891275301884!3d-25.964852254268617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9570ca76feed2b%3A0x1a8fccb5a24f8bdd!2s8%20Incubation%20Dr%2C%20Riverside%20View%2C%20Midrand%2C%202021!5e1!3m2!1sen!2sza!4v1741779836203!5m2!1sen!2sza"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

          {/* Contact Details */}
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  You can reach us using the communication channels below.
                </p>



                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded text-yellow-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="h-6 w-6">
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-yellow-300 ">Our Address</h3>
                      <p className="text-gray-100">8 Incubation Drive</p>
                      <p className="text-gray-100">Riverside View, Fourways</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded text-yellow-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="h-6 w-6">
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-yellow-300">Contact</h3>
                      <p className="text-gray-100">Phone: +90 312 939 70 00</p>
                      <p className="text-gray-100">Fax: +90 312 939 75 15-16</p>
                      <p className="text-gray-100">Mail: info@Takusani</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded text-yellow-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="h-6 w-6">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-yellow-300">Working hours</h3>
                      <p className="text-gray-100">Monday - Friday: 08:00 - 17:00</p>
                    </div>
                  </li>
                </ul>
              </div>
            {/* Form Section */}
      {/* Form Section */}
<div className="card h- max-w-6xl px-0 md:px-12 mt-20 md:py-4 bg-gray-100 shadow-lg" id="form">
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
      <input
        type="text"
        id="surname"
        name="surname"
        value={form.surname}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        required
      />
    </div>

    <div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 focus:outline-none"
      >
        Submit
      </button>
    </div>
  </form>


              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}
