'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast, Toaster } from 'sonner';

export default function ProductForm() {
  const [formData, setFormData] = useState({
    productLiability: '',
    isAttorneyHelping: '',
    caseDescription: '',
    hospitalization: '',
    yearOfInjury: '',
    bestTimeToCall: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    zipCode: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
      const res = await fetch('/api/submit-form', {
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
          productLiability: '',
          isAttorneyHelping: '',
          caseDescription: '',
          hospitalization: '',
          yearOfInjury: '',
          bestTimeToCall: '',
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          zipCode: '',
          address: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <Toaster />
      <Header />
      <div className='w-full  bg-black/20 flex justify-center '>
        <div className="bg-white border mt-4 mb-4 rounded md:w-[60%] mx-6 bg-opacity-75 py-12 px-6">
          <h1 className="text-3xl font-bold mb-6 text-center">HAVE YOU BEEN AFFECTED BY A PRODUCT?</h1>
          {submitted && <p className="text-green-500 text-center">Form submitted successfully!</p>}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Type of Product Liability */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">Type of Product Liability</label>
              <select
                name="productLiability"
                value={formData.productLiability}
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

            {/* Attorney Helping Case */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">Is an attorney helping you with your case?</label>
              <select
                name="isAttorneyHelping"
                value={formData.isAttorneyHelping}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded"
              >
                <option value="">-- select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Case Description */}
            <div className="md:col-span-2 flex flex-col">
              <label className="mb-2 text-sm font-semibold">Describe your case</label>
              <textarea
                name="caseDescription"
                value={formData.caseDescription}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded h-24"
              />
            </div>

            {/* Hospitalized */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">Were you hospitalized or received treatment?</label>
              <select
                name="hospitalization"
                value={formData.hospitalization}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded"
              >
                <option value="">-- select --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Year of Injury */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">Year of Injury</label>
              <input
                type="date"
                name="yearOfInjury"
                value={formData.yearOfInjury}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded"
              />
            </div>

            {/* Best Time to Call */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">Best time to call</label>
              <select
                name="bestTimeToCall"
                value={formData.bestTimeToCall}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded"
              >
                <option value="">-- select --</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </div>

            {/* First Name */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
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
                name="phone"
                value={formData.phone}
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

            {/* Zip Code */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2 flex flex-col">
              <label className="mb-2 text-sm font-semibold">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
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
                By checking this box and submitting my request, I agree to the privacy policy and terms.
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full md:col-span-2 p-4 bg-green-800 text-white rounded">
              {loading? "Submitting....":"Submit"}
            </button>
          </form>

        </div>
      </div>
      <Footer />
    </div >
  );
}
