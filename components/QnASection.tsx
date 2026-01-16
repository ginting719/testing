import React, { useState } from 'react';
import { QnAItem } from '../types';

interface QnASectionProps {
    items: QnAItem[];
}

const AccordionItem: React.FC<{ item: QnAItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-700/50">
            <h3>
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-200 hover:bg-gray-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    onClick={onClick}
                    aria-expanded={isOpen}
                >
                    <span className="text-lg">{item.question}</span>
                    <i className={`fas fa-chevron-down transition-transform duration-300 text-blue-400 ${isOpen ? 'rotate-180' : ''}`}></i>
                </button>
            </h3>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                 <div className="p-5 pt-0">
                    <p className="mb-2 text-gray-400 leading-relaxed">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};


const QnASection: React.FC<QnASectionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="qna" className="py-24 mt-16">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Knowledge Base</h2>
                    <p className="text-lg text-gray-400">Find quick answers to common questions.</p>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700/50 overflow-hidden">
                   {items.map((item, index) => (
                       <AccordionItem 
                         key={index}
                         item={item}
                         isOpen={openIndex === index}
                         onClick={() => handleToggle(index)}
                       />
                   ))}
                </div>
            </div>
        </section>
    );
};

export default QnASection;