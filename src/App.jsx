import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx';
import Features from './Components/feature-section/Features.jsx';
import NumberStats from './Components/NumberStats-section/NumberStats.jsx';
import Pricing from './Components/Pricing-section/pricing.jsx';
import FAQSection from './Components/FAQ-section/FAQSection.jsx';
import CTASection from './Components/CTASection.jsx';
import Footer from './Components/Footer.jsx';
import image85 from "./assets/image 85.png";
import image87 from "./assets/image 87.png";
import dots from "./assets/dots.png";
import dots1 from "./assets/dots 1.png";


function App() {
   return (
    <div>
      {/* new wrapper around just Navbar + Hero */}
      <div className="relative isolate bg-black overflow-hidden">
        <img
          src={image87}
          alt=""
          className="hidden lg:block pointer-events-none absolute -z-10"
          style={{ width: '667px', height: '985px', left: '0px', top: '-100px', transform: 'rotate(0deg)' }}
        />
        <img
          src={image85}
          alt=""
          className="hidden lg:block pointer-events-none absolute -z-10"
          style={{ width: '774px', height: '985px', right: '-100px', top: '-100px', transform: 'rotate(0deg)' }}
        />
        <Navbar />
        <Hero />
      </div>
      <div className="relative isolate bg-black overflow-hidden" >
        <div
  className="absolute overflow-hidden -z-10 pointer-events-none"
  style={{
    width: '1201px',
    height: '1000px',
    left: '620px',
    bottom: '100px',
    backgroundImage: `url(${dots1})`,
    opacity: 0.8,
    transform: 'rotate(20deg)',
  }}
/>
      <Features />
      <NumberStats />
      </div>
      <div className='relative isolate bg-black overflow-hidden'>
        <div
  className="pointer-events-none absolute -z-10 border-[#FF9777] rotate-90
             w-[180px] h-[96px] border-[10px] rounded-[90px]
             sm:w-[280px] sm:h-[150px] sm:border-[15px] sm:rounded-[100px]
             lg:w-[423px] lg:h-[226px] lg:border-[23px] lg:rounded-[117px]"
  style={{
    boxSizing: 'border-box',
    borderStyle: 'solid',
    left: '-200px',
    top: '1350px',
    
  }}
/>
      <Pricing />
      <FAQSection />
      </div>
      <CTASection />
      <Footer />
    </div>
   );
}

export default App
