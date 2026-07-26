import Vector from '../../assets/Vector.svg';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className="min-h-screen bg-black py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 px-8">
        <div className=" flex flex-row justify-between items-center gap-8">
               <div className="flex flex-col gap-4 ">
                <h1 className="text-7xl text-white leading-tight">
                    Designed for Designers.
                    <br />
                    Powered by <span className="text-orange-500 font-bold">AI</span>.
                    
                </h1>
                <p className="max-w-xl text-white">Unlock the full potential of your creativity with our AI-powered design assistant.
                                 Explore new dimensions of design.</p>
               </div>
               <div>
                <img src={Vector} alt="Wireframe" className="px-16"/>
               </div>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
            <FeatureCard 
               title="Instant Ideation"
               description="Skip the blank canvas and spark creativity instantly. Our AI generates high-quality, on-brand design concepts within seconds"
            />
            <FeatureCard 
               title="Smart Adaptability"
               description="No two creators are the same, and neither are their styles. Our AI learns from your inputs, understands your aesthetic preferences, and fine-tunes every design"
            />
            <FeatureCard 
               title="Multi-Format Export"
               description="Design once, export anywhere. Whether you need high-res graphics for print, responsive visuals for the web, mobile-optimized assets,"
            />
            <FeatureCard 
               title="Seamless Revisions"
               description="Say goodbye to repetitive tweaks and endless back-and-forths. With intuitive prompt-based editing"
            />

        </div>
        </div>

        
    </section>
  );
};

export default Features;