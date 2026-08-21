import Vector from '../../assets/Vector.svg';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className="min-h-screen  py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 px-6 sm:px-8">
        <div className=" flex flex-col lg:flex-row justify-between items-center gap-8">
               <div className="flex flex-col gap-4 ">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                    Designed for Designers.
                    <br />
                    Powered by <span className="text-orange-500 font-bold">AI</span>.
                    
                </h1>
                <p className="max-w-xl text-white">Unlock the full potential of your creativity with our AI-powered design assistant.
                                 Explore new dimensions of design.</p>
               </div>
               <div>
                <img src={Vector} alt="Wireframe" className="w-full max-w-xs lg:max-w-sm px-8 lg:px-0"/>
               </div>
        </div>
        <div className="flex flex-col gap-4">
         <div className="flex flex-col sm:flex-row gap-4">
            <div className="sm:flex-[2]">
            <FeatureCard 
               title="Instant Ideation"
               description="Skip the blank canvas and spark creativity instantly. Our AI generates high-quality, on-brand design concepts within seconds"
               glow={true}
            />
            </div>
            <div className="sm:flex-[3] border border-[#FF541F]/20 rounded-2xl">
            <FeatureCard 
               title="Smart Adaptability"
               description="No two creators are the same, and neither are their styles. Our AI learns from your inputs, understands your aesthetic preferences, and fine-tunes every design"
               size={true}
            />
            </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <div className="sm:flex-[3] border border-[#FF541F]/20 rounded-2xl">
            <FeatureCard 
               title="Multi-Format Export"
               description="Design once, export anywhere. Whether you need high-res graphics for print, responsive visuals for the web, mobile-optimized assets,"
               size={true}
            />
            </div>
            <div className="sm:flex-[2]">
            <FeatureCard 
               title="Seamless Revisions"
               description="Say goodbye to repetitive tweaks and endless back-and-forths. With intuitive prompt-based editing"
               glow={true}
            />
            </div>
            </div>

        </div>
        </div>

        
    </section>
  );
};

export default Features;