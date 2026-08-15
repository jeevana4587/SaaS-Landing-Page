import { useState } from "react";
import {ChevronDown} from 'lucide-react';

function FAQItem({question, answer}){

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col ">
        <div className="flex justify-between items-start gap-4 " onClick={() => setIsOpen(!isOpen)}>
            <p className="text-white font-medium text-left">{question}</p>
            <ChevronDown 
            size={20}
            strokeWidth={1.8}
            className={`shrink-0 mt-1 text-white transition-transform ${isOpen ? "rotate-180" : ""}`}/>
        </div>
        {isOpen && (
          <p className="max-w-2xl text-gray-300 text-left mt-2 ">{answer}</p>
        )}
         <hr className="border-zinc-800 my-8" />
        </div>
    );
}

export default FAQItem;