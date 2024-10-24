'use client'

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="bg-white border-b border-[#8e6a17] shadow-md">
            <div className="container mx-auto flex justify-between items-center p-6">
                {/* Logo Section */}
                <div className="md:text-3xl text-md font-bold ">
                    <Link href='/'>
                        <img src="/logo.png" className="h-12 ml-24 scale-150" />
                    </Link>
                </div>

                {/* Navigation Section */}
                <nav className="space-x-6 md:flex  items-center  hidden relative">
                    {/* Services Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <h1 className="text-gray-700 flex gap-1 hover:underline items-center cursor-pointer">Services <ChevronDown className='h-4 mt-1 ' /> </h1>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-64 z-10">
                                <ul className="p-2">
                                    <li>
                                        <Link href="/camp-lejeune-water-contamination" className="block px-4 py-2 hover:bg-gray-100">
                                            Camp Lejune Water Contamination Lawsuit
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/afff-firefighting-foam-lawsuit" className="block px-4 py-2 hover:bg-gray-100">
                                            AFFF Firefighting Foam Lawsuit
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/nec-baby-formula-lawsuit" className="block px-4 py-2 hover:bg-gray-100">
                                            NEC Baby Formula Lawsuit
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/zantac-lawsuit" className="block px-4 py-2 hover:bg-gray-100">
                                            Zantac Lawsuit
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/talcum-powder-lawsuit" className="block px-4 py-2 hover:bg-gray-100">
                                            Talcum Powder Lawsuit
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/paraquat-lawsuit" className="block px-4 py-2 hover:bg-gray-100">
                                            Paraquat Lawsuit
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/roundup-lawsuit" className="block px-4 py-2 hover:bg-gray-100">
                                            Roundup Lawsuit
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cpap-lawsuit" className="block px-4 py-2 hover:bg-gray-100">
                                            CPAP Lawsuit
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/mesothelioma-lawsuit" className="block px-4 py-2 hover:bg-gray-100">
                                            Mesothelioma Lawsuit
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/rideshare-lawsuit" className="block px-4 py-2 hover:bg-gray-100">
                                            Rideshare Lawsuit
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pfas-lawsuit" className="block px-4 py-2 hover:bg-gray-100">
                                            PFAS Lawsuit
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/services/other-services" className="block px-4 py-2 hover:bg-gray-100">
                                            Other Services
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        )}

                    </div>

                    {/* Other Links */}
                    <Link href="/about-us">
                        <h1 className="text-gray-700 hover:underline">About Us</h1>
                    </Link>
                    <Link href="/contact-us">
                        <h1 className="text-gray-700 hover:underline">Contact Us</h1>
                    </Link>
                    <Link href="/get-help">
                        <h1 className="bg-[#8e6a17] text-white text-sm py-2 px-4 rounded">Get Help Now</h1>
                    </Link>
                </nav>

                {/* Get Help Now Button */}

            </div>
        </header>
    );
}
