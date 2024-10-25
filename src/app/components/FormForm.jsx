'use client';

import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { toast, Toaster } from 'sonner';
import axios from 'axios';

export default function FormForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        product: '',
        ipAddress: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);


    // Fetch IP address on mount
    useEffect(() => {
        async function fetchIP() {
            try {
                const res = await axios.get('https://api.ipify.org?format=json');
                setFormData((prevData) => ({
                    ...prevData,
                    ipAddress: res.data.ip,
                }));
            } catch (error) {
                console.error('Failed to fetch IP address:', error);
            }
        }
        fetchIP();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch('/api/submit-form2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitted(true);
                toast.success("Form Submitted Successfully!")
                setLoading(false);
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    product: '',
                    ipAddress: '',
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <Toaster />
            <div className='w-full  bg-black/20 flex justify-center '>
                <div className="bg-white border mt-4 mb-4 rounded md:w-[60%] mx-6 bg-opacity-75 py-12 px-6">
                    <h1 className="text-3xl font-bold mb-6 text-center">Get a Free Case Review</h1>
                    {submitted && <p className="text-green-500 text-center">Form submitted successfully!</p>}
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Type of Product Liability */}
                        <div className="flex flex-col">
                            <label className="mb-2 text-sm font-semibold">Type of Product Liability</label>
                            <select
                                name="product"
                                value={formData.product}
                                onChange={handleChange}
                                required
                                className="p-3 border border-gray-300 rounded"
                            >
                                <option value="">-- select --</option>
                                <option value="Camp Lejune Water Contamination Lawsuit">Camp Lejune Water Contamination Lawsuit</option>
                                <option value="AFFF Firefighting Foam Lawsuit">AFFF Firefighting Foam Lawsuit</option>
                                <option value="NEC Baby Formula Lawsuit">NEC Baby Formula Lawsuit</option>
                                <option value="Zantac Lawsuit">Zantac Lawsuit</option>
                                <option value="Talcum Powder Lawsuit">Talcum Powder Lawsuit</option>
                                <option value="Paraquat Lawsuit">Paraquat Lawsuit</option>
                                <option value="Roundup Lawsuit">Roundup Lawsuit</option>
                                <option value="CPAP Lawsuit">CPAP Lawsuit</option>
                                <option value="Mesothelioma Lawsuit">Mesothelioma Lawsuit</option>
                                <option value="Rideshare Lawsuit">Rideshare Lawsuit</option>
                                <option value="PFAS Lawsuit">PFAS Lawsuit</option>
                                <option value="Hair Relaxer Lawsuit">Hair Relaxer Lawsuit</option>
                            </select>
                        </div>

                        {/*  Name */}
                        <div className="flex flex-col">
                            <label className="mb-2 text-sm font-semibold">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="p-3 border border-gray-300 rounded"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col">
                            <label className="mb-2 text-sm font-semibold">Phone</label>
                            <input
                                type="tel"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                required
                                className="p-3 border border-gray-300 rounded"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="mb-2 text-sm font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="p-3 border border-gray-300 rounded"
                            />
                        </div>



                        {/* Checkbox */}
                        <div className="md:col-span-2 flex items-center">
                            <input
                                type="checkbox"
                                name="consent"
                                required
                                className="mr-2"
                            />
                            <label className="text-sm">
                                I agree to the Terms of Service and Privacy Policy. I agree to the Terms of Service and Privacy Policy and authorize claimmymedicalcompensation.com and several law firms, 3rd party providers and/or PLM to contact me by telephone, email, artificial voice and/or pre-recorded/text messages, using an automated telephone technology directs to the number or contact details provided above. I may additionally receive offers and/or information on offers and various services these providers offer, and I agree to such contact, even if my phone number is currently listed on any state, federal or corporate ‘Do Not Call’ list or registry. You may revoke this consent at any time. Message and data rates may apply. Your consent is NOT based on any condition of purchase of products and acceptance of services by any provider. The decision to engage with or contract for services with any provider is entirely up to your discretion
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full md:col-span-2 p-4 bg-green-800 text-white rounded">
                            {loading ? "Submitting...." : "Submit"}
                        </button>
                    </form>

                </div>
            </div>
            {/* <Footer /> */}
        </div >
    );
}
