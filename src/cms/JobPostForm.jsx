import React, { useState } from 'react';

const JobPostForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    description: '',
    qualification: '',
    requirements: '',
    location: '',
    deadline: '',
    contractType: 'full-time', // Default contract type
    paymentType: 'hourly', // Default payment type
    applicationLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Handle the form submission (e.g., send data to the server, reset form, etc.)
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold text-center mb-6">Create Job Posting</h1>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">

              {/* Job Title */}
              <div className="relative">
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  placeholder="Job Title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="jobTitle"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Job Title
                </label>
              </div>

              {/* Job Description */}
              <div className="relative">
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="peer placeholder-transparent h-24 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  placeholder="Job Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="description"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Job Description
                </label>
              </div>

              {/* Job Qualification */}
              <div className="relative">
                <textarea
                  id="qualification"
                  name="qualification"
                  rows="3"
                  className="peer placeholder-transparent h-24 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  placeholder="Qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="qualification"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Qualification
                </label>
              </div>

              {/* Job Requirements */}
              <div className="relative">
                <textarea
                  id="requirements"
                  name="requirements"
                  rows="3"
                  className="peer placeholder-transparent h-24 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  placeholder="Requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="requirements"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Requirements
                </label>
              </div>

              {/* Location */}
              <div className="relative">
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="location"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Location
                </label>
              </div>

              {/* Application Deadline */}
              <div className="relative">
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  value={formData.deadline}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="deadline"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Application Deadline
                </label>
              </div>

              {/* Contract Type */}
              <div className="relative">
                <select
                  id="contractType"
                  name="contractType"
                  className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  value={formData.contractType}
                  onChange={handleChange}
                  required
                >
                  <option value="full-time">Full-Time</option>
                  <option value="part-time">Part-Time</option>
                  <option value="freelance">Freelance</option>
                </select>
                <label
                  htmlFor="contractType"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Contract Type
                </label>
              </div>

              {/* Payment Type */}
              <div className="relative">
                <select
                  id="paymentType"
                  name="paymentType"
                  className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  value={formData.paymentType}
                  onChange={handleChange}
                  required
                >
                  <option value="hourly">Hourly</option>
                  <option value="salary">Salary</option>
                </select>
                <label
                  htmlFor="paymentType"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Payment Type
                </label>
              </div>

              {/* Application Link */}
              <div className="relative">
                <input
                  type="url"
                  id="applicationLink"
                  name="applicationLink"
                  className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  placeholder="Application Link"
                  value={formData.applicationLink}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="applicationLink"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Application Link
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                  Post Job
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobPostForm;
