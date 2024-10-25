'use client'
import { useEffect, useState } from 'react';

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await fetch('/api/get-form');
        const data = await res.json();
        setSubmissions(data.forms);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading submissions...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Form Submissions</h1>
      {submissions.length === 0 ? (
        <p className="text-center">No submissions found.</p>
      ) : (
        <ul className="space-y-4">
          {submissions.map((submission, index) => (
            <li
              key={submission._id}
              className="border p-4 rounded-lg shadow-md bg-white hover:bg-gray-50 transition duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold">{index + 1}. {submission.firstName} {submission.lastName}</span>
                <span className="text-sm text-gray-500">{submission.email}</span>
              </div>
              <p className="text-gray-700 mt-2"><strong>Product Liability: </strong> {submission.productLiability}</p>

              <p className="text-gray-700 mt-2"><strong>Phone:</strong> {submission.phone}</p>
              <p className="text-gray-700"><strong>Case Description:</strong> {submission.caseDescription}</p>
              <p className="text-gray-700"><strong>Year of Injury:</strong> {submission.yearOfInjury}</p>
              <p className="text-gray-700"><strong>Address:</strong> {submission.address}, {submission.zipCode}</p>
              <p className="text-gray-700"><strong>Is Attorney Helping? :</strong> {submission.isAttorneyHelping}</p>
              <p className="text-gray-700"><strong>Best Time to Call:</strong> {submission.bestTimeToCall}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Submissions;
