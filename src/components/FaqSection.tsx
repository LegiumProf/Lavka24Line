import React, { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import faqData from '../data/faq.json';

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const halfLength = Math.ceil(faqData.length / 2);
  const leftColValues = faqData.slice(0, halfLength);
  const rightColValues = faqData.slice(halfLength);

  const renderFaqItem = (item: typeof faqData[0]) => {
    const isOpen = openId === item.id;
    return (
      <div 
        key={item.id} 
        className="flex flex-col bg-white rounded-[24px] overflow-hidden"
      >
        <button
          onClick={() => toggleOpen(item.id)}
          className="flex items-center justify-between w-full px-6 py-5 text-left bg-transparent cursor-pointer"
        >
          <span className="text-[18px] font-medium text-black focus:outline-none">{item.question}</span>
          {isOpen ? (
            <Minus size={24} className="text-[#2A2A2A] shrink-0 ml-4 transition-transform duration-300 transform rotate-180" />
          ) : (
            <Plus size={24} className="text-[#2A2A2A] shrink-0 ml-4 transition-transform duration-300 transform rotate-0" />
          )}
        </button>
        
        <div 
          className={`transition-all duration-300 ease-in-out grid ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-6 pt-2 text-[#2A2A2A] text-[15px] leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col font-manrope">
      <h2 className="text-[36px] font-semibold text-black mb-[40px] leading-tight">FAQ</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {leftColValues.map(renderFaqItem)}
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {rightColValues.map(renderFaqItem)}
        </div>
      </div>
    </div>
  );
}
