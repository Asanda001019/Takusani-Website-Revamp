// // src/components/JobPostList.js
// import React, { useState, useEffect } from 'react';
// import { db, collection, getDocs } from '../utilis/FirebaseConfig';

// const JobPostList = () => {
//   const [jobPosts, setJobPosts] = useState([]);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       const data = await getDocs(collection(db, "jobPosts"));
//       setJobPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     fetchJobs();
//   }, []);

//   return (
//     <div className="w-full max-w-3xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
//       <ul>
//         {jobPosts.map((job) => (
//           <li key={job.id} className="border-b py-4">
//             <h4 className="font-bold text-xl">{job.jobTitle}</h4>
//             <p>{job.description}</p>
//             <a
//               href={job.applicationLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 mt-2 block"
//             >
//               Apply Now
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default JobPostList;
