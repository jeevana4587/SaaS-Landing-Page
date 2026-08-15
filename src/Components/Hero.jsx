import { Fragment } from "react";
import { Star } from 'lucide-react';
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.svg";



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

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8 pt-24 px-6">
                    {/*Badge*/} 
                    <div className=" relative flex items-center gap-4 bg-[#1a1a1a] px-4 py-2 rounded-full overflow-hidden">
                        <div className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-orange-500/30 rounded-full blur-[80px]" />
                      {/* Avatars */}
                      <div className="flex -space-x-2">
                        <img src={image1} alt="Avatar 1" className="w-8 h-8 rounded-full object-cover border-2 border-black" />
                        <img src={image2} alt="Avatar 2" className="w-8 h-8 rounded-full object-cover border-2 border-black" />
                        <img src={image3} alt="Avatar 3" className="w-8 h-8 rounded-full object-cover border-2 border-black" />
                        <img src={image4} alt="Avatar 4" className="w-8 h-8 rounded-full object-cover border-2 border-black" />
                        <img src={image5} alt="Avatar 5" className="w-8 h-8 rounded-full object-cover border-2 border-black" />

                      </div>

                      {/* Rating */}{/* Happy Clients */}
                      <div className="flex flex-col">
                          <span className="flex gap-1 text-left ">
                            {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={15} className="fill-orange-500 text-orange-500" />
                                   ))}</span>
                          <span className="text-white text-sm">115+ Happy Clients</span>
                      </div>

                      
                    </div>

                    {/*Heading*/ }
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
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
                    <div className="flex w-full max-w-7xl mx-auto py-8 px-4">
                        {stats.map((stat,index) =>(
                            <Fragment key={stat.label}>
                            <div className={` flex flex-1 flex-col items-center px-2 sm:px-8`}>
                                <p className="text-orange-500 text-sm sm:text-lg">{stat.label}</p>
                                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium mt-2">{stat.number}</h2>

                            </div>
                            {index !== stats.length - 1 && (
                            <div className="w-px h-20 bg-zinc-800 self-center"></div>
                            )}
                            </Fragment> 
                        ))}
                    </div>
                </div>

            </section>
        );
    
}

export default Hero;