import { Check, ChevronRight } from 'lucide-react';


function PricingCard ({title,description,price,features,highlighted,discount}) {
    return (
        <div className={`w-full max-w-sm sm:w-96 rounded-3xl p-8 flex flex-col text-left border ${highlighted
        ? "border-orange-500 bg-zinc-900 py-10 sm:-mx-4 sm:scale-105"
        : "border-zinc-800 bg-zinc-900 py-6"}`}>
            <h1 className={`text-2xl font-semibold ${
                highlighted ? "text-orange-500" : "text-white"}`}>{title}</h1>
            <p className="text-zinc-400 py-1 leading-6">{description}</p>
            <div className="flex items-end gap-1 text-white">
                <span className="flex items-end gap-2">
                <span>$</span>
                <span className="text-4xl font-semibold">{price}</span>
                <span className="text-zinc-400 text-sm">/ month</span>
                </span>
                 {discount && (
                   <span className="flex items-center bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
                     {discount}
                   </span>
               )}
                
            </div>
            <hr className="border-zinc-800 my-8" />
            <h3 className="text-white py-2"> What's included</h3>
            <div className="flex flex-col gap-3 ">
              {features.map((feature, index) => (
                <div key={index}  className="flex gap-2 text-white">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center ${
                       highlighted ? "bg-orange-500" : "border border-white"
                        }`}>
                        <Check size={12} className="text-white"/></span>
                    <p>{feature}</p>
                </div>
               ))}
            </div>
            
           <div className="flex justify-center mt-auto pt-6">
           <button className="flex items-center justify-center gap-2 border border-orange-500/40 bg-orange-500/10 text-white text-sm py-3 px-7 rounded-lg hover:bg-orange-500/20 transition-colors shadow-[0_0_20px_6px] shadow-orange-500/25">
              Subscribe
             <ChevronRight size={20} />
           </button>
           </div>
            
        </div>
    );
}

export default PricingCard;