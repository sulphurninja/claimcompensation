'use client'

import { useState } from 'react';

export default function FAQSection({ faq }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="py-8 px-4">
            <h2 className="text-2xl font-bold mb-4">FAQs</h2>
            {faq.map((item, index) => (
                <div key={index} className="mb-4">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between items-center w-full text-left p-4 bg-gray-100 hover:bg-gray-200 rounded-md"
                    >
                        <span className="font-semibold">{item.question}</span>
                        <span>{activeIndex === index ? '−' : '+'}</span>
                    </button>
                    {activeIndex === index && (
                        <div className="mt-2 p-4 border rounded-md bg-white shadow-sm">
                            <p>{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}
