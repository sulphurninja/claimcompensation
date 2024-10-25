// components/FAQ.jsx
'use client'

import { useState } from 'react';

const faqData = [
  {
    question: 'What is Mass Tort Action?',
    answer:
      'A mass tort action occurs when a lawsuit involves multiple plaintiffs filing claims against one or more defendants. It typically deals with cases where many people are affected by the same product, accident, or harm, and all are seeking justice through collective legal action.',
  },
  {
    question: 'Common Types of Mass Tort Action',
    answer:
      'Common mass tort actions include cases related to defective drugs, environmental contamination, defective medical devices, and faulty consumer products.',
  },
  {
    question: 'Factors That May Impact the Timeline and Settlement',
    answer:
      'Several factors can influence the timeline and settlement, including the availability of evidence, the number of plaintiffs, the defense strategies, and the negotiations between both parties involved.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-6 border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center py-4 text-lg font-medium text-white -800 focus:outline-none"
              >
                {faq.question}
                <span className={`text-xl ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="text-gray-200 -700 p-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
