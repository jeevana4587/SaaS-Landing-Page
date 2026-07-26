import StatCard from "./StatCard.jsx";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";

function NumberStats() {
    return (
        <section className=" bg-black py-24">
            <div className="max-w-7xl mx-auto flex flex-col items-center ">
               {/*paragraph*/}
               <p className="max-w-xl text-center text-white text-lg font-semibold leading-7 mb-20">
                    Whether you're designing for personal projects, creative teams, or
                    large-scale campaigns, our AI-powered platform is built to bring your
                    ideas to life—quickly, beautifully, and intelligently.
                    <br />
                    And the results? The numbers speak for themselves:
                    </p>
               {/*StatCards*/}
               <div className="flex justify-between items-start w-full">
                  <div className="w-64">
                      <StatCard
                      number="2014"
                      title="Year of establishment"
                      description="More than 10 years in the field"
                      avatars={[image1,image2, image3]}
                      />
                    </div>
                    <div className="w-64 mt-32">
                      <StatCard
                      number="304"
                      title="Projects are launched"
                      description="A lot of projects are done"
                      avatars={[image1,image2, image3]}
                      />
                    </div>
                    <div className="w-64">
                      <StatCard                           
                      number="189"                                
                      title="Clients are satisfied"
                      description="These people love us"
                      avatars={[image1,image2, image3]}
                      />
                    </div>
                    <div className="w-64 mt-32">
                      <StatCard
                      number="12"
                      title="Projects in work"
                      description="What we do right now"
                      avatars={[image1,image2, image3]}
                      />
                    </div>
               </div>
               {/*buttons*/}
                <div className="flex gap-6 mt-32">
                    <button className="bg-orange-500 text-white text-lg py-3 px-7 rounded-lg">Get Started</button>

                    <button className="text-gray-400 py-2 px-7 hover:font-orange-500">Slots are available</button>
                </div>


            </div>
        </section>
    );
}

export default NumberStats;