// src/components/JobPostForm.js
import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from '../utilis/FirebaseConfig';


const JobPostForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [qualification, setQualification] = useState("");
  const [requirements, setRequirements] = useState("");
  const [location, setLocation] = useState("");
  const [deadline, setDeadline] = useState("");
  const [contractType, setContractType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [applicationLink, setApplicationLink] = useState("");
  const [jobPosts, setJobPosts] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);

  const jobPostCollectionRef = collection(db, "jobPosts");

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getDocs(jobPostCollectionRef);
      setJobPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchJobs();
  }, [jobPosts]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingJobId) {
        // Editing an existing job post
        const jobDocRef = doc(db, "jobPosts", editingJobId);
        await updateDoc(jobDocRef, {
          jobTitle,
          description,
          qualification,
          requirements,
          location,
          deadline,
          contractType,
          paymentType,
          applicationLink,
        });
        setEditingJobId(null);
      } else {
        // Adding a new job post
        await addDoc(jobPostCollectionRef, {
          jobTitle,
          description,
          qualification,
          requirements,
          location,
          deadline,
          contractType,
          paymentType,
          applicationLink,
        });
      }

      // Reset form fields after submitting
      setJobTitle("");
      setDescription("");
      setQualification("");
      setRequirements("");
      setLocation("");
      setDeadline("");
      setContractType("");
      setPaymentType("");
      setApplicationLink("");
    } catch (error) {
      console.error("Error adding job post: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "jobPosts", id));
    } catch (error) {
      console.error("Error deleting job post: ", error);
    }
  };

  const handleEdit = (job) => {
    setJobTitle(job.jobTitle);
    setDescription(job.description);
    setQualification(job.qualification);
    setRequirements(job.requirements);
    setLocation(job.location);
    setDeadline(job.deadline);
    setContractType(job.contractType);
    setPaymentType(job.paymentType);
    setApplicationLink(job.applicationLink);
    setEditingJobId(job.id);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Job Post Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="description">Description</label>
          <textarea
            id="description"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="qualification">Qualification</label>
          <input
            type="text"
            id="qualification"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="requirements">Requirements</label>
          <input
            type="text"
            id="requirements"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="deadline">Deadline</label>
          <input
            type="date"
            id="deadline"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="contractType">Contract Type</label>
          <input
            type="text"
            id="contractType"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={contractType}
            onChange={(e) => setContractType(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="paymentType">Payment Type</label>
          <input
            type="text"
            id="paymentType"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="applicationLink">Application Link</label>
          <input
            type="url"
            id="applicationLink"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={applicationLink}
            onChange={(e) => setApplicationLink(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          {editingJobId ? 'Update Job Post' : 'Post Job'}
        </button>
      </form>

      <h3 className="mt-8 text-lg font-semibold">Posted Jobs</h3>
      <ul className="mt-4">
        {jobPosts.map((job) => (
          <li key={job.id} className="border-b py-2">
            <h4 className="font-bold">{job.jobTitle}</h4>
            <p>{job.description}</p>
            <div className="mt-2 flex justify-between">
              <button
                className="text-blue-500"
                onClick={() => handleEdit(job)}
              >
                Edit
              </button>
              <button
                className="text-red-500"
                onClick={() => handleDelete(job.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobPostForm;
