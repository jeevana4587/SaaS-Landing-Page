function PricingCard ({title,description,price,features,highlighted}) {
    return (
        <div className={`w-96 rounded-3xl p-8 flex flex-col text-left border ${highlighted
        ? "border-orange-500 bg-zinc-900 py-10"
        : "border-zinc-800 bg-zinc-900 py-6"}`}>
            <h1 className={`text-2xl font-semibold ${
                highlighted ? "text-orange-500" : "text-white"}`}>{title}</h1>
            <p className="text-zinc-400 py-1 leading-6">{description}</p>
            <div className="flex items-end gap-1 text-white">
                <span>$</span>
                <span>{price}</span>
                <span >/month</span>
            </div>
            <hr className="border-zinc-800 my-8" />
            <h3 className="text-white"> What's included</h3>
            <div className="flex flex-col gap-3 ">
              {features.map((feature, index) => (
                <div key={index}  className="flex gap-2 text-white">
                    <span>✓</span>
                    <p>{feature}</p>
                </div>
               ))}
            </div>
            <div className="flex justify-center mt-4">
            <button className="border border-zinc-400 text-white text-sm py-3 px-7 rounded-lg">Subscribe</button>
            </div>
            
        </div>
    );
}

export default PricingCard;