'use client';
import { useEffect, useState } from 'react';

const Submissions = () => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const res = await fetch('/api/get-form2');
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

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
        return new Date(dateString).toLocaleString('en-US', options);
    };

    if (loading) {
        return <div className="text-center mt-10">Loading submissions...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Form Submissions</h1>
            {submissions.length === 0 ? (
                <p className="text-center">No submissions found.</p>
            ) : (
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2 text-left">#</th>
                            <th className="border p-2 text-left">Name</th>
                            <th className="border p-2 text-left">Email</th>
                            <th className="border p-2 text-left">Product Liability</th>
                            <th className="border p-2 text-left">Phone</th>
                            {/* <th className="border p-2 text-left">Case Description</th> */}
                            {/* <th className="border p-2 text-left">Year of Injury</th> */}
                            {/* <th className="border p-2 text-left">Email</th> */}
                            <th className="border p-2 text-left">IP Address</th>
                            <th className="border p-2 text-left">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map((submission, index) => (
                            <tr key={submission._id} className="border-b hover:bg-gray-50">
                                <td className="border p-2">{index + 1}</td>
                                <td className="border p-2">{submission.name}</td>
                                <td className="border p-2">{submission.email}</td>
                                <td className="border p-2">{submission.product}</td>
                                <td className="border p-2">{submission.number}</td>
                                {/* <td className="border p-2">{submission.caseDescription}</td> */}
                                {/* <td className="border p-2">{submission.yearOfInjury}</td> */}
                                <td className="border p-2">{submission.ipAddress}</td>
                                <td className="border p-2">{formatDate(submission.createdAt)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Submissions;
