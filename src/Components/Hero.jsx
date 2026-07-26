function Hero() {

    const stats=[
        {
            label:"Clients",
            number:"120k+",
        },
        {
            label:"Projects",
            number:"150k+",
        },
        {
            label:"5-Star Reviews",
            number:"32k+",
        },
    ];
        return(
            <section className="min-h-screen bg-black">

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8 pt-24 ">
                    {/*Badge*/} 
                    <div className="flex items-center gap-4 bg-[#1a1a1a] px-4 py-2 rounded-full">
                      {/* Avatars */}
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-red-500"></div>
                        <div className="w-8 h-8 rounded-full bg-green-500"></div>
                        <div className="w-8 h-8 rounded-full bg-blue-500"></div>

                      </div>

                      {/* Rating */}{/* Happy Clients */}
                      <div className="flex flex-col">
                          <span className="text-left text-orange-500 text-sm">★★★★★</span>
                          <span className="text-white text-xs">115+ Happy Clients</span>
                      </div>

                      
                    </div>

                    {/*Heading*/ }
                    <h1 className="text-7xl text-white font-bold leading-tight">
                        <span>Automate </span>
                    
                        <span className="text-orange-500">
                            Intelligence
                        </span>
                        <span>.</span>
                        <br />
                        <span>Accelerate Growth.</span>

                    </h1>

                    {/*Description*/}
                    <p className="max-w-xl text-center text-white text-lg leading-7 ">
                       Our AI-powered SaaS platform empowers businesses to streamline operations,
                       automate repetitive tasks, and make smarter, data-driven decisions—all from
                       one intuitive dashboard.
                    </p>

                    {/*Buttons*/}
                    <div className="flex gap-6 text-lg">
                        <button className="bg-orange-500 text-white py-2 px-7 rounded-lg">Get Started</button>

                        <button className="border border-zinc-700 text-white py-2 px-7 rounded-lg hover:border-orange-500">See Details</button>
                    </div>
                    </div>
                    <div className="border-y-2 border-zinc-900 mt-20"  >
                    {/*Stats*/}
                    <div className="flex w-full max-w-7xl mx-auto py-8 ">
                        {stats.map((stat,index) =>(
                            <>
                            <div key={stat.label}  className={` flex flex-1 flex-col items-center px-8 `}>
                                <p className="text-orange-500 text-lg">{stat.label}</p>
                                <h2 className="text-white text-5xl font-medium mt-2">{stat.number}</h2>

                            </div>
                            {index !== stats.length - 1 && (
                            <div className="w-px h-20 bg-zinc-800 self-center"></div>
                            )}
                            </> 
                        ))}
                    </div>
                </div>

            </section>
        );
    
}

export default Hero;