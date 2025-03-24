import React, { useState } from 'react';

export default function ContactUs() {
  // Form state
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    message: '' // Added message field
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    // Handle form submission logic here
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setForm({
        name: '',
        surname: '',
        email: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const primaryBg = 'rgb(11, 18, 75)'; // Deep blue from your original code
  const accentColor = '#f0c040'; // Refined yellow accent that matches your theme

  return (
    <div>
      <section 
        className="relative" 
        id="contact"
        style={{ backgroundColor: primaryBg }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          {/* Header Section with improved spacing and typography */}
          <div className="mb-12 text-center">
            <p className="text-base font-semibold uppercase tracking-wide" style={{ color: accentColor }}>
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-white text-4xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-300">
              We are ready to support you.
            </p>
          </div>

          {/* Main content grid with improved layout */}
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left column: Contact info */}
            <div className="order-2 lg:order-1">
              <div className="rounded-xl bg-white/5 p-8 backdrop-blur-sm">
                <p className="mb-8 text-lg text-gray-300">
                  You can reach us using the communication channels below.
                </p>

                <ul className="space-y-6">
                  {/* Address */}
                  <li className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(240, 192, 64, 0.2)', color: accentColor }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium" style={{ color: accentColor }}>Our Address</h3>
                      <p className="text-gray-200">8 Incubation Drive</p>
                      <p className="text-gray-200">Riverside View, Fourways</p>
                    </div>
                  </li>

                  {/* Contact */}
                  <li className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(240, 192, 64, 0.2)', color: accentColor }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium" style={{ color: accentColor }}>Contact</h3>
                      <p className="text-gray-200">Phone: +90 312 939 70 00</p>
                      <p className="text-gray-200">Fax: +90 312 939 75 15-16</p>
                      <p className="text-gray-200">Mail: info@Takusani</p>
                    </div>
                  </li>

                  {/* Working hours */}
                  <li className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(240, 192, 64, 0.2)', color: accentColor }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium" style={{ color: accentColor }}>Working hours</h3>
                      <p className="text-gray-200">Monday - Friday: 08:00 - 17:00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right column: Form */}
            <div className="order-1 lg:order-2">
              <div className="rounded-xl bg-white p-8 shadow-xl">
                <h3 className="mb-6 text-2xl font-semibold text-gray-800">Send us a message</h3>
                
                {isSubmitted ? (
                  <div className="rounded-md bg-green-50 p-4 text-center">
                    <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
                      <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={form.surname}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={form.message}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        style={{ backgroundColor: primaryBg }}
                        className="w-full rounded-md px-4 py-3 font-medium text-white shadow-md transition hover:opacity-90 focus:outline-none"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.2813228138843!2d28.019891275301884!3d-25.964852254268617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9570ca76feed2b%3A0x1a8fccb5a24f8bdd!2s8%20Incubation%20Dr%2C%20Riverside%20View%2C%20Midrand%2C%202021!5e1!3m2!1sen!2sza!4v1741779836203!5m2!1sen!2sza"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}