import { useState } from "react";

function FAQItem({question, answer}){

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col ">
        <div className="flex justify-between " onClick={() => setIsOpen(!isOpen)}>
            <p className="text-white font-medium">{question}</p>
            <button className="text-white">⌄</button>
        </div>
        {isOpen && (
          <p className="max-w-2xl text-gray-300 text-left mt-2 ">{answer}</p>
        )}
         <hr className="border-zinc-800 my-8" />
        </div>
    );
}

export default FAQItem;