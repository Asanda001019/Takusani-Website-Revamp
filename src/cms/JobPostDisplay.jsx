import React from 'react';

const JobPostDisplay = ({ jobData }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-semibold text-center mb-6">Job Post Details</h1>

          <div className="space-y-6">
            {/* Job Title */}
            <div className="mb-4">
              <h2 className="text-xl font-bold">Job Title</h2>
              <p className="text-gray-700">{jobData.jobTitle}</p>
            </div>

            {/* Job Description */}
            <div className="mb-4">
              <h2 className="text-xl font-bold">Job Description</h2>
              <p className="text-gray-700">{jobData.description}</p>
            </div>

            {/* Job Qualification */}
            <div className="mb-4">
              <h2 className="text-xl font-bold">Qualification</h2>
              <p className="text-gray-700">{jobData.qualification}</p>
            </div>

            {/* Job Requirements */}
            <div className="mb-4">
              <h2 className="text-xl font-bold">Requirements</h2>
              <p className="text-gray-700">{jobData.requirements}</p>
            </div>

            {/* Location */}
            <div className="mb-4">
              <h2 className="text-xl font-bold">Location</h2>
              <p className="text-gray-700">{jobData.location}</p>
            </div>

            {/* Application Deadline */}
            <div className="mb-4">
              <h2 className="text-xl font-bold">Application Deadline</h2>
              <p className="text-gray-700">{jobData.deadline}</p>
            </div>

            {/* Contract Type */}
            <div className="mb-4">
              <h2 className="text-xl font-bold">Contract Type</h2>
              <p className="text-gray-700">{jobData.contractType}</p>
            </div>

            {/* Payment Type */}
            <div className="mb-4">
              <h2 className="text-xl font-bold">Payment Type</h2>
              <p className="text-gray-700">{jobData.paymentType}</p>
            </div>

            {/* Application Link */}
            <div className="mb-4">
              <h2 className="text-xl font-bold">Application Link</h2>
              <a
                href={jobData.applicationLink}
                className="text-cyan-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {jobData.applicationLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostDisplay;
