/* eslint-disable react/prop-types */

import { useState } from 'react';

const CustomAccordion = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="mt-5 space-y-4 w-full">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="border-t-2 overflow-hidden"
                >
                    <button
                        className="flex justify-start items-center w-full px-4 py-3 hover:bg-gray-200"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span
                            className={`mr-5 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                                }`}
                        >
                            ▼
                        </span>
                        <span className="text-lg font-medium">{faq.title}</span>
                    </button>
                    <div
                        className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-screen' : 'max-h-0'
                            }`}
                    >
                        <div className="px-4 py-3 bg-white text-gray-700">{faq.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomAccordion;