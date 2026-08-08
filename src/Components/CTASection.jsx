import { MoveRight } from 'lucide-react';

function CTASection(){
    return (
        <section className="py-32 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8 pt-24 ">
                <h1 className="text-7xl text-white font-bold leading-tight">Ready to Design Smarter?</h1>
                <p className="max-w-xl text-center text-gray-300 text-lg leading-7 ">Whether you're a freelancer, a team, or a growing agency—our tools adapt to your workflow. Design faster. Deliver better.</p>
                <button className="flex items-center gap-2 bg-orange-500 text-white py-2 px-7 text-lg rounded-lg mt-8">
                    <span>Get Started </span>
                    <MoveRight size={20}/></button>
            </div>
        </section>
    );
}

export default CTASection;