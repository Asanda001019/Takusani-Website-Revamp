import React, { useState, useEffect } from 'react';
import { db } from '../utilis/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const JobListingPage = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterContractType, setFilterContractType] = useState('');

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        setLoading(true);
        const jobPostCollectionRef = collection(db, "jobPosts");
        const data = await getDocs(jobPostCollectionRef);
        const jobsData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setJobListings(jobsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching job listings: ", err);
        setError("Failed to load job listings. Please try again later.");
        setLoading(false);
      }
    };

    fetchJobListings();
  }, []);

  const toggleJobDetails = (jobId) => {
    if (expandedJobId === jobId) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(jobId);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No deadline specified';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isDeadlinePassed = (dateString) => {
    if (!dateString) return false;
    const deadline = new Date(dateString);
    const today = new Date();
    return today > deadline;
  };

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filterLocation === '' || job.location?.toLowerCase().includes(filterLocation.toLowerCase());
    const matchesContractType = filterContractType === '' || job.contractType === filterContractType;
    
    return matchesSearch && matchesLocation && matchesContractType;
  });

  // Get unique contract types for filter dropdown
  const contractTypes = [...new Set(jobListings.map(job => job.contractType).filter(Boolean))];

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Job Opportunities</h1>
        
        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                type="text"
                id="search"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search job title or description"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                id="location"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Filter by location"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="contractType" className="block text-sm font-medium text-gray-700 mb-1">Contract Type</label>
              <select
                id="contractType"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={filterContractType}
                onChange={(e) => setFilterContractType(e.target.value)}
              >
                <option value="">All Types</option>
                {contractTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-500 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Loading job listings...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded" role="alert">
            <p>{error}</p>
          </div>
        )}

        {/* Job Listings */}
        {!loading && !error && filteredJobs.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">No job listings found matching your criteria.</p>
          </div>
        )}

        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div 
              key={job.id} 
              className={`bg-white rounded-lg shadow overflow-hidden transition-all duration-300 ${
                isDeadlinePassed(job.deadline) ? 'border-l-4 border-red-500' : ''
              }`}
            >
              <div 
                className="p-6 cursor-pointer flex justify-between items-start"
                onClick={() => toggleJobDetails(job.id)}
              >
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{job.jobTitle}</h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.location && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        <svg className="mr-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {job.location}
                      </span>
                    )}
                    {job.contractType && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {job.contractType}
                      </span>
                    )}
                    {job.paymentType && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {job.paymentType}
                      </span>
                    )}
                    {job.deadline && (
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        isDeadlinePassed(job.deadline) 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        Deadline: {formatDate(job.deadline)}
                      </span>
                    )}
                  </div>
                </div>
                <svg 
                  className={`h-6 w-6 text-gray-500 transition-transform ${expandedJobId === job.id ? 'transform rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Expanded Job Details */}
              {expandedJobId === job.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="prose max-w-none">
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="mb-4">{job.description}</p>

                    {job.qualification && (
                      <>
                        <h3 className="text-lg font-semibold mb-2">Qualifications</h3>
                        <p className="mb-4">{job.qualification}</p>
                      </>
                    )}

                    {job.requirements && (
                      <>
                        <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                        <p className="mb-4">{job.requirements}</p>
                      </>
                    )}

                    <div className="mt-6">
                      {isDeadlinePassed(job.deadline) ? (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                          <p className="font-medium">Application deadline has passed</p>
                          <p>This position is no longer accepting applications.</p>
                        </div>
                      ) : (
                        <a
                          href={job.applicationLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Apply Now
                          <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListingPage;