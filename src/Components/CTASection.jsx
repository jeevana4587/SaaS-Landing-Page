import { MoveRight } from 'lucide-react';

function CTASection(){
    return (
        <section className="pb-24 p-36">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-l p-12 overflow-hidden">
            <div className="pointer-events-none absolute -z-10 -top-15 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[#ef430f]/100 rounded-full blur-[90px]" />
            
            <div
  className="pointer-events-none absolute -z-10 w-[320px] h-[320px] shadow-[0_0_60px_7px_rgba(255,255,255,0.7),inset_0_0_60px_7px_rgba(255,255,255,0.6)] rounded-full bg-transparent left-1/2 -translate-x-1/2 -top-67 " 
  
/>
            <div
  className="pointer-events-none absolute -z-10 inset-0 opacity-8"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.21) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.26) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
  }}
/>
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8  px-6 ">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">Ready to Design Smarter?</h1>
                <p className="max-w-xl text-center text-gray-300 text-lg leading-7 ">Whether you're a freelancer, a team, or a growing agency—our tools adapt to your workflow. Design faster. Deliver better.</p>
                <button className="flex items-center gap-2 bg-orange-500 text-white py-2 px-7 text-lg rounded-lg mt-8">
                    <span>Get Started </span>
                    <MoveRight size={20}/></button>
            </div>
            </div>
        </section>
    );
}

export default CTASection;