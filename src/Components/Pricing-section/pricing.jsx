import PricingCard from "./PricingCard.jsx";
import bg from "../../assets/bg.png";

function Pricing() {
    return (
        <section className="relative isolate overflow-hidden min-h-screen bg-black py-16">
           <div
           className="absolute overflow-hidden -z-10 hidden lg:block pointer-events-none"
           style={{
             width: '1319px',
             height: '925px',
             left: '10%',
             bottom: '-20px',
             backgroundImage: `url(${bg})`,
            //  tranform: 'translate(-50%, -50%)',
            
           }}
         />   
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8 px-6 ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
                <span>Choose the Plan</span>
                <br />
                <span>That's Right for You</span>
            </h1>
            <p className="max-w-xl text-center text-gray-300 text-lg leading-7 ">
                Giving you access to essential features and over 1,000 creative tools. Upgrade to the Pro Plan to unlock powerful AI capabilities, cloud syncing, and a whole new level of creative freedom.
            </p>
            <div className="flex bg-zinc-800 rounded-full p-2 mt-4 gap-2">
                <button className="bg-zinc-600 rounded-full text-white py-2 px-6">Monthly</button>
                <button className=" text-gray-400 py-2 px-6">Yearly</button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
                <PricingCard
                title="Free"
                description="Everything you need to supercharge your productivity."
                price="0"
                features={["20 design generations/month",
                           "Low-res downloads",
                           "Basic style presets",
                           "Limited customization options",]}
                />
                <PricingCard
                title="Pro"
                discount="-20%"
                description="Unlock a new level of your personal productivity."
                price="17"
                features={["Everything in Free",
                    "Enigma AI",
                    "Unlimited design generations",
                    "Custom Themes",
                    "High-resolution exports",
                    "Custom Extensions",
                    "Developer Tools",
                ]} 
                highlighted={true}
                />
                <PricingCard
                title="Team"
                discount="-20%"
                description="Everything you need to supercharge your productivity."
                price="37"
                features={["Everything in Free",
                    "Unlimited Shared Commands",
                    "Unlimited Shared Quicklinks",
                    "Priority support",
                ]} 
                />
            </div>
            


        </div>
        </section>
    )
}

export default Pricing