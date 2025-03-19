// import React, { useState } from 'react';
// import JobPostForm from './JobPostForm'; // Assuming your JobPostForm is in this file
// import JobPostDisplay from './JobPostDisplay'; // Assuming your JobPostDisplay is in this file

// const CMSPage = () => {
//   const [jobs, setJobs] = useState([
//     // Mock job data
//     {
//       id: 1,
//       jobTitle: 'Software Engineer',
//       description: 'We are looking for a skilled software engineer...',
//       qualification: 'BSc in Computer Science or related field.',
//       requirements: '3+ years of experience...',
//       location: 'Remote',
//       deadline: '2025-04-30',
//       contractType: 'Full-time',
//       paymentType: 'Hourly',
//       applicationLink: 'https://apply-now.com',
//     },
//     {
//       id: 2,
//       jobTitle: 'Product Manager',
//       description: 'We are looking for a skilled product manager...',
//       qualification: 'MBA or equivalent.',
//       requirements: '5+ years of experience...',
//       location: 'Office - New York',
//       deadline: '2025-05-15',
//       contractType: 'Part-time',
//       paymentType: 'Salary',
//       applicationLink: 'https://apply-now.com',
//     },
//   ]);
//   const [editingJob, setEditingJob] = useState(null); // Store the job currently being edited

//   const handleEditJob = (jobId) => {
//     const jobToEdit = jobs.find((job) => job.id === jobId);
//     setEditingJob(jobToEdit);
//   };

//   const handleDeleteJob = (jobId) => {
//     const updatedJobs = jobs.filter((job) => job.id !== jobId);
//     setJobs(updatedJobs);
//   };

//   const handleJobSubmit = (updatedJob) => {
//     const updatedJobs = jobs.map((job) =>
//       job.id === updatedJob.id ? updatedJob : job
//     );
//     setJobs(updatedJobs);
//     setEditingJob(null); // Close the edit form
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 sm:py-12">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-semibold text-center mb-6">Job Postings</h1>

//         {/* Display the list of jobs */}
//         <div className="space-y-4">
//           {jobs.map((job) => (
//             <div
//               key={job.id}
//               className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center"
//             >
//               <div>
//                 <h2 className="text-xl font-semibold">{job.jobTitle}</h2>
//                 <p className="text-gray-600">{job.location}</p>
//                 <p className="text-gray-500">Deadline: {job.deadline}</p>
//               </div>

//               {/* Edit and Delete buttons */}
//               <div className="flex space-x-4">
//                 <button
//                   onClick={() => handleEditJob(job.id)}
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDeleteJob(job.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Show the edit form if a job is being edited */}
//         {editingJob && (
//           <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-2xl font-semibold text-center mb-6">Edit Job</h2>
//             <JobPostForm
//               job={editingJob}
//               onSubmit={handleJobSubmit}
//               isEditMode={true}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CMSPage;
