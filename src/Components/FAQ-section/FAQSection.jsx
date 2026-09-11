import FAQItem from "./FAQItem.jsx";

function FAQSection(){
    return (
        <section className="min-h-screen ">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8 pt-24 px-6 pb-20 ">
            
     <div
  className="pointer-events-none absolute -z-10 hidden lg:block border-[#FF9777] rotate-90
             w-[423px] h-[226px] border-[23px] rounded-[117px]"
  style={{
    boxSizing: 'border-box',
    borderStyle: 'solid',
    left: '-200px',
    top: '100px',
  }}
/>


                <div
  className="pointer-events-none absolute -z-10
             w-[180px] h-[180px] border-[10px]
             sm:w-[280px] sm:h-[280px] sm:border-[15px]
             lg:w-[445px] lg:h-[445px] lg:border-[23px]"
  style={{
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderColor: '#FF541F',
    borderRadius: '9999px',
    right: '-300px',
    top: '400px',
  }}
/>

<div
  className="pointer-events-none absolute -z-10 border-solid border-[#F6F6F6]
             w-[260px] h-[92px] border-[10px] rounded-[46px]
             sm:w-[420px] sm:h-[150px] sm:border-[15px] sm:rounded-[75px]
             lg:w-[636px] lg:h-[226px] lg:border-[23px] lg:rounded-[117px]"
  style={{
    boxSizing: 'border-box',
    left: '-400px',
    top: '850px',
  }}
/>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
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