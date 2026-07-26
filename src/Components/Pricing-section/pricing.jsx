

function Pricing() {
    return (
        <section className="min-h-screen bg-black py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8  ">
            <h1 className="text-7xl text-white font-bold leading-tight">
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
            
        </div>
        </section>
    )
}

export default Pricing