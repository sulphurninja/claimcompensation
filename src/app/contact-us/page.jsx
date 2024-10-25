import Header from '../components/Header';
import Footer from '../components/Footer';
import { File, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ContactUs() {
    return (
        <div>
            <Header />
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
                        Contact Us
                    </h1>
                    <p className='text-center'>Let us know, if we can help.</p>
                    <div className='grid md:grid-cols-2 gap-4 mt-4'>
                        <div className='border rounded-lg border-black p-2 flex justify-center items-center'>
                            <div className='s'>
                                <Phone className='scale-105 ml-20' />
                                <h1 className='text-lg ml-16'>By Phone</h1>
                                <h1 className='font-bold p-4 text-xl'>+1-908-842-1258</h1>
                            </div>

                        </div>
                        <div className='border border-black p-4  justify-center items-center'>
                            <div className=''>
                              
                        
                                <h1 className='text-lg font-bold'>Start a New Case</h1>
                                <p>Just send us your questions or concerns by starting a new case and we will give you the help that you need.</p>
                            </div>
                            <div>
                            <Link href='/get-help'>
                            <button  className='bg-green-800 hover:scale-90 text-white p-2 rounded mt-4'>Start here</button>
                            </Link>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
