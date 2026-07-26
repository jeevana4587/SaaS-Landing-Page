import FAQItem from "./FAQItem.jsx";

function FAQSection(){
    return (
        <section className="min-h-screen bg-black">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8 pt-24 ">
                <h1 className="text-7xl text-white font-bold leading-tight">
                    <span>Frequently Asked </span>
                    <br />
                    <span>Questions</span>
                </h1>
                <p className="max-w-xl text-center text-gray-300 text-lg leading-7 ">
                    Got questions? We've got answers. Find everything you need to know about using our platform, plans, and features.</p>
                {/*faq list*/}
                
                <div className="w-full max-w-3xl mx-auto mt-16">
                <FAQItem
                question="What is this platform used for?"
                answer="It's an AI-powered design assistant that helps you generate, customize, and export creative assets in seconds—whether for personal projects, brand work, or commercial use."
                 />
                <FAQItem
                question="What happens if I hit my free generation limit?"
                answer=""
                 />
                <FAQItem
                question="Do I need design experience to use it?"
                answer=""
                 />
                <FAQItem
                question="Can I collaborate with my team?"
                answer=""
                 />
                <FAQItem
                question="Is it really free to use?"
                answer=""
                 />
                 </div>
            </div>
        </section>
    );
}

export default FAQSection;