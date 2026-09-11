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
      
       
      <Pricing />
      
      <div className='relative isolate bg-black overflow-hidden'>
        <div
          className="pointer-events-none absolute -z-10 hidden lg:block"
  style={{
    width: '1100px',
    height: '1000px',
    right: '-350px',
    top: '600px',
    background: 'conic-gradient(from 180deg at 50% 50%, #FB1E1E 0deg, #FA5424 84.77deg, #C22C00 183.8deg, #982300 271.91deg, #FB1E1E 360deg)',
    filter: 'blur(200px)',
    opacity: 0.26,
  }}
        />


        <div
  className="pointer-events-none absolute -z-10 hidden lg:block"
  style={{
    width: '1150px',
    height: '46px',
    right: '-400px',
    top: '500px',
    transform: 'rotate(42deg)',
    transformOrigin: 'left',
    background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.13), transparent)',
  }}
/>
<div
  className="pointer-events-none absolute -z-10 hidden lg:block"
  style={{
    width: '1410px',
    height: '46px',
    right: '-380px',
    top: '380px',
    transform: 'rotate(42deg)',
    transformOrigin: 'left',
    background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.12), transparent)',
  }}
/>

      <FAQSection />
      
      <CTASection />
      
      <Footer />
      </div>
    </div>
   );
}

export default App
